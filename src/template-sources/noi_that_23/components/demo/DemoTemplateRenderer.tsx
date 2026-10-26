'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  FileText,
  HelpCircle,
  ShoppingBag,
  Gift,
  Phone,
  CheckCircle2,
  X,
  Eye,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Truck,
  Sparkles,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat23Data,
  type NoiThat23TemplateData,
  type BathProduct,
  type UsefulArticle
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

const formatVND = (amount: number) =>
  `${amount.toLocaleString('vi-VN')} ₫`;

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat23Data, data) as NoiThat23TemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<BathProduct | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<UsefulArticle | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [cart, setCart] = useState<{ product: BathProduct; qty: number }[]>([]);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const addToCart = (product: BathProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
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

  const matchesFilter = (p: BathProduct) => {
    const matchBrand =
      selectedBrand === 'ALL' ||
      p.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchQuery =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchBrand && matchQuery;
  };

  const bathtubProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.category === 'bon-tam' && matchesFilter(p))
        .slice(0, 3),
    [templateData.products, selectedBrand, searchQuery]
  );

  const showerProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.category === 'voi-sen' && matchesFilter(p))
        .slice(0, 3),
    [templateData.products, selectedBrand, searchQuery]
  );

  const accessoryProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.category === 'phu-kien' && matchesFilter(p))
        .slice(0, 4),
    [templateData.products, selectedBrand, searchQuery]
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-800 font-sans selection:bg-[#0088cc] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#0088cc] text-white px-4 py-3 rounded-lg shadow-xl border border-sky-300/30 text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Messenger Quick Support Bubble (matching right edge of screenshot) */}
      <button
        onClick={() => {
          setConsultSubmitted(false);
          setConsultOpen(true);
        }}
        title="Chat tư vấn thiết bị phòng tắm"
        className="fixed right-4 top-1/3 z-40 w-11 h-11 rounded-full bg-[#0084ff] hover:bg-[#006fd6] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </button>

      {/* Main Blue Header (#0088cc) */}
      <header className="bg-[#0088cc] text-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1220px] mx-auto px-4 h-[68px] flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setSelectedBrand('ALL');
              setSearchQuery('');
            }}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-11 h-11 rounded-full bg-white text-[#0088cc] flex items-center justify-center font-black text-xl shadow-inner group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="leading-none">
              <div className="text-xl font-black tracking-wide uppercase">
                {templateData.business.shortName}
              </div>
              <div className="text-xs italic font-serif text-sky-100 -mt-0.5">
                {templateData.business.subtitle}
              </div>
            </div>
          </a>

          {/* Rounded Blue Search Pill */}
          <div className="flex-1 max-w-[490px] hidden sm:block">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={templateData.business.searchPlaceholder}
                className="w-full h-9 pl-4 pr-10 rounded-full bg-[#2499d4] text-white placeholder:text-sky-100/90 text-xs focus:outline-none focus:ring-2 focus:ring-white/60 transition"
              />
              <button
                type="button"
                onClick={() => scrollToSection('section-bon-tam')}
                className="absolute right-3 text-white/90 hover:text-white"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Action Icons: Tin hay | Hỏi đáp | Giỏ hàng / 0 ₫ */}
          <div className="flex items-center gap-5 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('useful-news-box')}
              className="hidden md:flex flex-col items-center gap-0.5 text-white/95 hover:text-white text-[11px]"
            >
              <FileText className="w-4 h-4" />
              <span>Tin hay</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setConsultSubmitted(false);
                setConsultOpen(true);
              }}
              className="hidden md:flex flex-col items-center gap-0.5 text-white/95 hover:text-white text-[11px]"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Hỏi đáp</span>
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold bg-[#0077b5] hover:bg-[#00669c] px-3 py-1.5 rounded-md transition"
            >
              <span>Giỏ hàng / {formatVND(totalCartAmount)}</span>
              <div className="relative w-6 h-6 border-2 border-white rounded flex items-center justify-center text-[11px] font-bold">
                {totalCartItems}
              </div>
            </button>
          </div>
        </div>

        {/* White Sub-Navigation Bar */}
        <div className="bg-white text-slate-700 border-b border-slate-200">
          <div className="max-w-[1220px] mx-auto px-4 h-10 flex items-center justify-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar text-xs font-semibold tracking-wide">
            {templateData.navigation.map((item) => {
              const targetMap: Record<string, string> = {
                'bon-tam': 'section-bon-tam',
                'voi-sen': 'section-voi-sen',
                'ban-cau': 'section-bon-tam',
                lavabo: 'section-voi-sen',
                'phu-kien': 'section-phu-kien',
                all: 'section-bon-tam'
              };
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(targetMap[item.categoryKey] || 'section-bon-tam')}
                  className="flex items-center gap-1.5 uppercase whitespace-nowrap hover:text-[#0088cc] transition-colors py-2"
                >
                  {item.isPromo && <Gift className="w-4 h-4 text-slate-600 -mt-0.5" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main id="top" className="max-w-[1220px] mx-auto px-4 py-4 space-y-6">
        {/* Asymmetric Hero Section (8 cols left main banner + 4 cols right promo & news) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Left Hero Banner (8 cols) */}
          <div className="lg:col-span-8 relative rounded-sm overflow-hidden bg-slate-200 min-h-[340px] sm:min-h-[390px] flex items-start">
            <img
              src={templateData.hero.mainImage}
              alt={templateData.hero.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
            <div className="relative z-10 p-6 sm:p-10 max-w-lg">
              <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-1">
                {templateData.hero.eyebrow}
              </p>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0088cc] tracking-tight leading-tight">
                {templateData.hero.title}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-md uppercase">
                {templateData.hero.subtitle}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('section-bon-tam')}
                className="mt-5 px-6 py-2 rounded-full bg-white hover:bg-[#0088cc] text-slate-800 hover:text-white border border-slate-300 shadow-sm text-xs font-bold tracking-wider uppercase transition"
              >
                {templateData.hero.ctaLabel}
              </button>
            </div>
          </div>

          {/* Right Column: 2 Mini Promo Banners + THÔNG TIN HỮU ÍCH (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {templateData.hero.sideBanners.map((banner) => (
              <div
                key={banner.id}
                onClick={() => scrollToSection('section-bon-tam')}
                className="relative h-[92px] bg-white border border-slate-200 overflow-hidden cursor-pointer group flex items-center"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
                <div className="relative z-10 px-4 py-2 max-w-[75%]">
                  <span className="text-[11px] font-extrabold text-[#0088cc] uppercase block">
                    {banner.badge}
                  </span>
                  <p className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">
                    {banner.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            ))}

            {/* THÔNG TIN HỮU ÍCH Box */}
            <div
              id="useful-news-box"
              className="bg-white border border-slate-200 p-3 flex-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
                <h2 className="text-xs font-extrabold uppercase text-[#d0021b] tracking-wide">
                  {templateData.usefulNews.heading}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(templateData.usefulNews.articles[0])}
                  className="text-[11px] text-slate-600 hover:text-[#0088cc]"
                >
                  {templateData.usefulNews.viewAllLabel}
                </button>
              </div>
              <div className="space-y-2.5">
                {templateData.usefulNews.articles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="flex gap-2.5 items-start cursor-pointer group"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-12 object-cover rounded-xs shrink-0 border border-slate-100"
                    />
                    <p className="text-[11px] leading-snug text-slate-700 group-hover:text-[#0088cc] font-medium line-clamp-2">
                      {article.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TOP THƯƠNG HIỆU NỘI THẤT */}
        <section className="bg-white border border-slate-200 py-5 px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 text-center">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-800">
                {templateData.brands.heading}
              </h2>
            </div>
            {selectedBrand !== 'ALL' && (
              <button
                type="button"
                onClick={() => setSelectedBrand('ALL')}
                className="text-xs text-[#0088cc] hover:underline font-medium"
              >
                Bỏ lọc ({selectedBrand})
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
            {templateData.brands.items.map((brand) => {
              const isSelected =
                selectedBrand.toLowerCase() === brand.name.toLowerCase();
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() =>
                    setSelectedBrand(isSelected ? 'ALL' : brand.name)
                  }
                  className={`h-14 px-3 rounded border flex flex-col items-center justify-center transition ${
                    isSelected
                      ? 'border-[#0088cc] bg-sky-50/70 shadow-xs'
                      : 'border-slate-100 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span
                    className="text-base sm:text-lg font-black tracking-wider"
                    style={{ color: brand.accentColor }}
                  >
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {brand.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* SECTION 1: BỒN TẮM ĐƯỢC QUAN TÂM */}
        <section id="section-bon-tam" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold uppercase text-slate-800 tracking-tight">
              {templateData.sections.bathtubs.heading}
            </h2>
            <button
              type="button"
              onClick={() => setSelectedBrand('ALL')}
              className="text-xs text-slate-600 hover:text-[#0088cc] flex items-center gap-0.5"
            >
              <span>{templateData.sections.bathtubs.viewAllLabel}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Column 1: Vertical Editorial Poster Banner */}
            <div className="relative min-h-[340px] bg-slate-800 border border-slate-200 overflow-hidden group flex flex-col justify-between p-5 text-white">
              <img
                src={templateData.sections.bathtubs.poster.image}
                alt={templateData.sections.bathtubs.poster.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/25 to-slate-900/80" />
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded">
                  {templateData.sections.bathtubs.poster.badge}
                </span>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight uppercase drop-shadow">
                  {templateData.sections.bathtubs.poster.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-100/90">
                  {templateData.sections.bathtubs.poster.subtitle}
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-[11px]">
                <span className="italic text-amber-200 font-medium">
                  {templateData.sections.bathtubs.poster.footerNote}
                </span>
              </div>
            </div>

            {/* Columns 2-4: 3 Bathtub Cards with red "Giảm giá" badge */}
            {bathtubProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 hover:border-[#0088cc] hover:shadow-md transition flex flex-col justify-between p-4 relative group"
              >
                {product.discountBadge && (
                  <span className="absolute top-3 right-3 z-10 bg-[#e60023] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-xs">
                    {product.discountBadge}
                  </span>
                )}

                <div
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer flex-1 flex flex-col justify-between"
                >
                  <div className="h-52 flex items-center justify-center p-2 overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-xs text-slate-700 group-hover:text-[#0088cc] font-medium line-clamp-2 min-h-[34px]">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                      {product.oldPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {formatVND(product.oldPrice)}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {formatVND(product.price)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 opacity-95 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="text-[11px] text-slate-500 hover:text-[#0088cc] flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Chi tiết</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="text-[11px] font-semibold text-[#0088cc] hover:bg-[#0088cc] hover:text-white border border-[#0088cc] px-2.5 py-1 rounded-xs transition"
                  >
                    + Giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: VÒI SEN ĐƯỢC QUAN TÂM */}
        <section id="section-voi-sen" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold uppercase text-slate-800 tracking-tight">
              {templateData.sections.showers.heading}
            </h2>
            <button
              type="button"
              onClick={() => setSelectedBrand('ALL')}
              className="text-xs text-slate-600 hover:text-[#0088cc] flex items-center gap-0.5"
            >
              <span>{templateData.sections.showers.viewAllLabel}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Column 1: Magazine Cover Poster ("top fair") */}
            <div className="relative min-h-[340px] bg-white border border-slate-200 overflow-hidden group flex flex-col justify-between p-4">
              <img
                src={templateData.sections.showers.poster.image}
                alt={templateData.sections.showers.poster.magazineTitle}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-900/15 to-slate-900/75" />
              <div className="relative z-10 flex items-start justify-between gap-2 text-white">
                <div>
                  <div className="text-3xl font-serif font-bold leading-none tracking-tight">
                    {templateData.sections.showers.poster.magazineTitle}
                  </div>
                  <div className="text-[10px] text-sky-200 mt-1">
                    {templateData.sections.showers.poster.issueTag}
                  </div>
                </div>
                <div className="w-20 h-20 rounded-full bg-slate-900/80 border border-white/30 flex flex-col items-center justify-center text-center p-1.5 text-[10px] font-semibold leading-tight">
                  <span>{templateData.sections.showers.poster.boothLabel}</span>
                </div>
              </div>

              <div className="relative z-10 bg-white/90 backdrop-blur-xs p-3 rounded-xs text-slate-800">
                <p className="text-[11px] font-semibold leading-snug">
                  {templateData.sections.showers.poster.subtitle}
                </p>
              </div>
            </div>

            {/* Columns 2-4: 3 Shower Faucet Cards with red "Giảm giá" badge */}
            {showerProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 hover:border-[#0088cc] hover:shadow-md transition flex flex-col justify-between p-4 relative group"
              >
                {product.discountBadge && (
                  <span className="absolute top-3 right-3 z-10 bg-[#e60023] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-xs">
                    {product.discountBadge}
                  </span>
                )}

                <div
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer flex-1 flex flex-col justify-between"
                >
                  <div className="h-52 flex items-center justify-center p-2 overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-xs text-slate-700 group-hover:text-[#0088cc] font-medium line-clamp-2 min-h-[34px]">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                      {product.oldPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {formatVND(product.oldPrice)}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {formatVND(product.price)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="text-[11px] text-slate-500 hover:text-[#0088cc] flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Chi tiết</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="text-[11px] font-semibold text-[#0088cc] hover:bg-[#0088cc] hover:text-white border border-[#0088cc] px-2.5 py-1 rounded-xs transition"
                  >
                    + Giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PHỤ KIỆN HOT (4 columns) */}
        <section id="section-phu-kien" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold uppercase text-slate-800 tracking-tight">
              {templateData.sections.accessories.heading}
            </h2>
            <button
              type="button"
              onClick={() => setSelectedBrand('ALL')}
              className="text-xs text-slate-600 hover:text-[#0088cc] flex items-center gap-0.5"
            >
              <span>{templateData.sections.accessories.viewAllLabel}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {accessoryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 hover:border-[#0088cc] hover:shadow-md transition flex flex-col justify-between p-4 group"
              >
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer flex-1 flex flex-col justify-between"
                >
                  <div className="h-52 flex items-center justify-center p-2 overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-xs text-slate-700 group-hover:text-[#0088cc] font-medium line-clamp-2 min-h-[34px]">
                      {product.name}
                    </h3>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {formatVND(product.price)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="text-[11px] text-slate-500 hover:text-[#0088cc] flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Chi tiết</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="text-[11px] font-semibold text-[#0088cc] hover:bg-[#0088cc] hover:text-white border border-[#0088cc] px-2.5 py-1 rounded-xs transition"
                  >
                    + Giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SẢN PHẨM BẠN VỪA XEM (6-column thumbnail strip) + Danh mục sản phẩm */}
        <section className="space-y-4 pt-2 pb-4">
          <h2 className="text-sm font-extrabold uppercase text-slate-800 tracking-tight">
            {templateData.sections.recentlyViewed.heading}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {templateData.recentlyViewedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const found =
                    templateData.products.find((p) => p.name.includes(item.name)) ||
                    templateData.products[0];
                  setSelectedProduct(found);
                }}
                className="bg-white border border-slate-200 p-3 hover:border-[#0088cc] transition cursor-pointer group flex flex-col items-center"
              >
                <div className="h-28 w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="mt-2 text-[11px] text-slate-600 line-clamp-1 text-center group-hover:text-[#0088cc]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Danh mục sản phẩm tag pills */}
          <div className="pt-2">
            <p className="text-xs text-slate-600 mb-2 font-medium">
              Danh mục sản phẩm
            </p>
            <div className="flex flex-wrap gap-1.5">
              {templateData.categoryTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => scrollToSection('section-bon-tam')}
                  className="px-2.5 py-1 text-[11px] text-slate-700 bg-white border border-slate-400 hover:border-[#0088cc] hover:text-[#0088cc] rounded-xs transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* White Footer matching NT026 screenshot */}
      <footer className="bg-white border-t border-slate-200 text-slate-700 mt-4">
        <div className="max-w-[1220px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          {/* Col 1: HOTLINE HỖ TRỢ */}
          <div className="md:col-span-3 space-y-2">
            <h3 className="text-xs font-extrabold uppercase text-slate-900 mb-3">
              HOTLINE HỖ TRỢ
            </h3>
            <p>
              Hỗ trợ mua hàng:{' '}
              <span className="font-semibold text-slate-800">
                {templateData.business.phone[0]}
              </span>
            </p>
            <p>
              Hỗ trợ kỹ thuật:{' '}
              <span className="font-semibold text-slate-800">
                {templateData.business.supportPhone}
              </span>
            </p>
            <p>
              Hỗ trợ bảo hành:{' '}
              <span className="font-semibold text-slate-800">
                {templateData.business.warrantyPhone}
              </span>
            </p>
          </div>

          {/* Col 2: MONA MEDIA / BUSINESS INFO */}
          <div className="md:col-span-4 space-y-2">
            <h3 className="text-xs font-extrabold uppercase text-slate-900 mb-3">
              {templateData.business.name}
            </h3>
            <p>Địa chỉ: {templateData.business.address}</p>
            <p>Điện thoại: {templateData.business.phone.join(' - ')}</p>
            <p>Email: {templateData.business.email[0]}</p>
            {templateData.business.email[1] && (
              <p>{templateData.business.email[1]}</p>
            )}
            <p>Kênh hỗ trợ trực tuyến: {templateData.business.skype}</p>
          </div>

          {/* Col 3: Hỗ trợ thanh toán & Tư vấn */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs font-medium text-slate-600">
              Hỗ trợ thanh toán
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <p className="text-slate-600">Tư vấn miễn phí (24/7)</p>
                <p className="font-semibold text-slate-900 mt-0.5">
                  {templateData.business.phone[0]}
                </p>
              </div>
              <div>
                <p className="text-slate-600">Góp ý, phản ánh (8h00 - 22h00)</p>
                <p className="font-semibold text-slate-900 mt-0.5">
                  {templateData.business.supportPhone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-3.5 text-center text-[11px] text-slate-500">
          © All rights reserved. Thiết kế website{' '}
          <span className="font-bold text-slate-800">
            {templateData.business.name}
          </span>
        </div>
      </footer>

      {/* Product Quick-View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-md max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0088cc] text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>
                  {selectedProduct.brand} • Mã SP: {selectedProduct.code}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="border border-slate-100 rounded p-4 flex items-center justify-center h-64 bg-white">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-3 text-xs">
                <span className="inline-block bg-sky-50 text-[#0088cc] font-bold px-2.5 py-0.5 rounded">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-baseline gap-2.5">
                  {selectedProduct.oldPrice && (
                    <span className="text-slate-400 line-through text-xs">
                      {formatVND(selectedProduct.oldPrice)}
                    </span>
                  )}
                  <span className="text-lg font-black text-[#e60023]">
                    {formatVND(selectedProduct.price)}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="bg-slate-50 p-3 rounded space-y-1 text-slate-700 border border-slate-100">
                  <p>
                    <strong>Kích thước:</strong> {selectedProduct.dimensions}
                  </p>
                  <p>
                    <strong>Chất liệu:</strong> {selectedProduct.material}
                  </p>
                  <p>
                    <strong>Bảo hành:</strong> {selectedProduct.warranty}
                  </p>
                  <p>
                    <strong>Xuất xứ:</strong> {selectedProduct.origin}
                  </p>
                </div>

                <ul className="space-y-1 text-slate-600">
                  {selectedProduct.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0088cc] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 bg-[#0088cc] hover:bg-[#006da3] text-white font-bold py-2.5 px-4 rounded-xs transition"
                  >
                    THÊM VÀO GIỎ HÀNG
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(null);
                      setConsultSubmitted(false);
                      setConsultOpen(true);
                    }}
                    className="border border-slate-300 hover:border-[#0088cc] text-slate-700 font-semibold py-2.5 px-3 rounded-xs transition"
                  >
                    Tư vấn lắp đặt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Useful News Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-md max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-[#d0021b] uppercase">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {selectedArticle.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedArticle.excerpt}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#0088cc] text-white text-xs font-bold px-4 py-2 rounded-xs"
                >
                  Đóng bài viết
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
            <div className="p-4 bg-[#0088cc] text-white flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShoppingBag className="w-4 h-4" />
                <span>GIỎ HÀNG CỦA BẠN ({totalCartItems})</span>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs space-y-2">
                  <ShoppingBag className="w-10 h-10 mx-auto stroke-1" />
                  <p>Chưa có thiết bị phòng tắm nào trong giỏ hàng.</p>
                </div>
              ) : (
                cart.map(({ product, qty }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 border border-slate-200 p-2.5 rounded-xs"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-contain shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 truncate">
                        {product.name}
                      </p>
                      <p className="text-xs font-bold text-[#0088cc] mt-0.5">
                        {formatVND(product.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          type="button"
                          onClick={() => updateCartQty(product.id, -1)}
                          className="w-6 h-6 border border-slate-200 flex items-center justify-center rounded-xs hover:bg-slate-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold">{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQty(product.id, 1)}
                          className="w-6 h-6 border border-slate-200 flex items-center justify-center rounded-xs hover:bg-slate-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateCartQty(product.id, -qty)}
                      className="text-slate-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Tổng tạm tính:</span>
                <span className="text-[#e60023] text-base">
                  {formatVND(totalCartAmount)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setCartOpen(false);
                  showToast('Đặt hàng thành công! Chuyên viên kỹ thuật sẽ liên hệ ngay.');
                }}
                className="w-full py-2.5 bg-[#0088cc] hover:bg-[#006fa6] disabled:bg-slate-300 text-white text-xs font-bold uppercase rounded-xs transition"
              >
                GỬI YÊU CẦU ĐẶT HÀNG & LẮP ĐẶT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Consultation / Hỏi đáp Modal */}
      {consultOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setConsultOpen(false)}
        >
          <div
            className="bg-white rounded-md max-w-md w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-[#0088cc] text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide">
                Hỏi Đáp & Tư Vấn Kỹ Thuật Phòng Tắm
              </span>
              <button
                type="button"
                onClick={() => setConsultOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {consultSubmitted ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">
                  Đã tiếp nhận yêu cầu tư vấn!
                </h4>
                <p className="text-xs text-slate-600">
                  Kỹ sư phòng tắm {templateData.business.name} sẽ gọi lại hỗ trợ bản vẽ cấp thoát nước trong 15 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setConsultOpen(false)}
                  className="bg-[#0088cc] text-white text-xs font-bold px-5 py-2 rounded-xs"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="p-5 space-y-3 text-xs"
              >
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Họ và tên quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn Minh"
                    className="w-full border border-slate-300 rounded-xs px-3 py-2 focus:outline-none focus:border-[#0088cc]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    className="w-full border border-slate-300 rounded-xs px-3 py-2 focus:outline-none focus:border-[#0088cc]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Hạng mục cần tư vấn
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tư vấn kích thước bồn tắm nằm TOTO, khảo sát áp lực nước lắp sen âm tường..."
                    className="w-full border border-slate-300 rounded-xs px-3 py-2 focus:outline-none focus:border-[#0088cc]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0088cc] hover:bg-[#0071ab] text-white font-bold py-2.5 rounded-xs uppercase transition"
                >
                  Gửi câu hỏi ngay
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
