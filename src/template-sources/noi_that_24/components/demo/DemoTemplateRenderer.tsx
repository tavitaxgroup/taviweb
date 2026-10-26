'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  Menu,
  ShoppingBag,
  Smartphone,
  Flame,
  Coins,
  Truck,
  Award,
  RotateCcw,
  Tv,
  Table,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Trash2,
  Building2,
  Home,
  GraduationCap,
  FolderKanban,
  Armchair,
  Package,
  Layers,
  Lock
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat24Data,
  type NoiThat24TemplateData,
  type ShowroomProduct
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

const formatVND = (amount: number) =>
  `${amount.toLocaleString('vi-VN')} ₫`;

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat24Data, data) as NoiThat24TemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const [familyTab, setFamilyTab] = useState<'all' | 'moi-noi-bat' | 'ban-chay'>('all');
  const [tableTab, setTableTab] = useState<'all' | 'moi-noi-bat' | 'ban-chay' | 'giam-gia'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ShowroomProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cart, setCart] = useState<{ product: ShowroomProduct; qty: number }[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const addToCart = (product: ShowroomProduct) => {
    setCart((prev) => {
      const found = prev.find((item) => item.product.id === product.id);
      if (found) {
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

  const matchesSearch = (p: ShowroomProduct) =>
    !searchQuery.trim() ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.code.toLowerCase().includes(searchQuery.toLowerCase());

  const promoProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.categoryGroup === 'khuyen-mai' && matchesSearch(p))
        .slice(0, 5),
    [templateData.products, searchQuery]
  );

  const suggestedProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.categoryGroup === 'goi-y' && matchesSearch(p))
        .slice(0, 5),
    [templateData.products, searchQuery]
  );

  const familyProducts = useMemo(() => {
    const base = templateData.products.filter(
      (p) => p.categoryGroup === 'gia-dinh' && matchesSearch(p)
    );
    if (familyTab === 'all') return base.slice(0, 5);
    const filtered = base.filter((p) => p.subTab === familyTab);
    return (filtered.length > 0 ? filtered : base).slice(0, 5);
  }, [templateData.products, familyTab, searchQuery]);

  const tableProducts = useMemo(() => {
    const base = templateData.products.filter(
      (p) => p.categoryGroup === 'ban' && matchesSearch(p)
    );
    if (tableTab === 'all') return base.slice(0, 5);
    const filtered = base.filter((p) => p.subTab === tableTab);
    return (filtered.length > 0 ? filtered : base).slice(0, 5);
  }, [templateData.products, tableTab, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getCategoryIcon = (index: number) => {
    const icons = [
      Award,
      Home,
      Building2,
      GraduationCap,
      FolderKanban,
      Table,
      Armchair,
      Package,
      Layers,
      ShoppingBag,
      Lock
    ];
    const IconComp = icons[index % icons.length];
    return <IconComp className="w-4 h-4 text-slate-500 shrink-0" />;
  };

  const currentSlide =
    templateData.heroSlides[activeSlide % templateData.heroSlides.length] ||
    templateData.heroSlides[0];

  const renderProductCard = (product: ShowroomProduct) => (
    <div
      key={product.id}
      className="bg-white border border-transparent hover:border-slate-200 hover:shadow-md transition p-3 flex flex-col justify-between items-center text-center relative group"
    >
      {product.onSale && (
        <span className="absolute top-2.5 left-2.5 z-10 bg-[#ef5a28] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-xs shadow-2xs">
          SALE !
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

        <div className="pt-3 w-full space-y-1">
          <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
            {product.categoryLabel}
          </p>
          <h3 className="text-xs text-slate-700 group-hover:text-[#f59121] font-medium line-clamp-1">
            {product.name}
          </h3>
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
        className="mt-2.5 bg-[#f59121] hover:bg-[#df7d12] text-white text-[11px] font-bold px-3.5 py-1 rounded-xs transition shadow-2xs"
      >
        Thêm vào giỏ
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-800 font-sans selection:bg-[#f59121] selection:text-white">
      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#f59121] text-white px-4 py-3 rounded shadow-xl text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Dark Top Utility Bar (#333333) */}
      <div className="bg-[#3b3b3b] text-slate-200 text-[11px]">
        <div className="max-w-[1220px] mx-auto px-4 h-7 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <div className="flex items-center gap-1.5 text-slate-100">
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            <span>{templateData.topPromoBar.appLabel}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-300 font-medium">
              <Flame className="w-3.5 h-3.5 text-orange-400 fill-current" />
              {templateData.topPromoBar.highlights[0]}
            </span>
            <span>{templateData.topPromoBar.highlights[1]}</span>
            <span className="hidden md:inline">
              {templateData.topPromoBar.highlights[2]}
            </span>
            <span className="flex items-center gap-1 text-amber-300 font-medium">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              {templateData.topPromoBar.highlights[3]}
            </span>
          </div>
        </div>
      </div>

      {/* 2. White Main Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-[1220px] mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setSearchQuery('');
            }}
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f59121] to-[#d97208] text-white flex items-center justify-center font-black text-lg shadow-xs">
              M
            </div>
            <div className="leading-tight">
              <div className="text-base italic font-serif text-slate-700">
                {templateData.business.brandTitle}
              </div>
              <div className="text-xl font-black tracking-wider text-slate-800 -mt-1">
                {templateData.business.brandSub}
              </div>
            </div>
          </a>

          {/* Center Search Input */}
          <div className="flex-1 max-w-[490px] hidden sm:flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={templateData.business.searchPlaceholder}
              className="w-full h-9 px-3.5 bg-[#f2f2f2] border border-slate-200 rounded-l-xs text-xs text-slate-700 focus:outline-none focus:bg-white focus:border-[#f59121]"
            />
            <button
              type="button"
              onClick={() => scrollToSection('section-khuyen-mai')}
              className="h-9 px-5 bg-[#e5e5e5] hover:bg-[#f59121] text-slate-700 hover:text-white rounded-r-xs transition flex items-center justify-center"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right Auth & Cart */}
          <div className="flex items-center gap-5 text-xs text-slate-700 shrink-0">
            <button
              type="button"
              onClick={() => setAuthModalOpen(true)}
              className="hidden md:inline-block hover:text-[#f59121] font-medium"
            >
              Đăng nhập / Đăng ký
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 hover:text-[#f59121] font-semibold"
            >
              <span>Giỏ hàng / {formatVND(totalCartAmount)}</span>
              <div className="w-6 h-6 border-2 border-slate-600 rounded-xs flex items-center justify-center text-[11px] font-bold">
                {totalCartItems}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="max-w-[1220px] mx-auto px-4 py-4 space-y-6">
        {/* Sidebar Category Menu + Trust Strip + Hero Showcase */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Left 3 cols: DANH MỤC SẢN PHẨM */}
          <div className="lg:col-span-3 bg-white border border-slate-200 flex flex-col">
            <div className="bg-[#f59121] text-white px-4 h-10 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wide">
              <Menu className="w-4 h-4" />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>
            <ul className="divide-y divide-slate-100 flex-1 flex flex-col justify-between">
              {templateData.categories.map((cat, idx) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(cat.targetSection)}
                    className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs text-slate-700 hover:bg-orange-50/60 hover:text-[#f59121] transition text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      {getCategoryIcon(idx)}
                      <span>{cat.label}</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right 9 cols: Top 3 Trust Items + Hero Slider */}
          <div className="lg:col-span-9 flex flex-col gap-2.5">
            {/* Top Trust Strip */}
            <div className="bg-white border border-slate-200 px-4 py-2 flex flex-wrap items-center justify-end gap-6 text-xs">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#ef5a28]" />
                <span>
                  <strong className="text-slate-800">
                    {templateData.trustBadges[0]?.title}
                  </strong>{' '}
                  <span className="text-slate-600">
                    {templateData.trustBadges[0]?.subtitle}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#f59121]" />
                <span>
                  <span className="text-slate-600">
                    {templateData.trustBadges[1]?.title}
                  </span>{' '}
                  <strong className="text-slate-800">
                    {templateData.trustBadges[1]?.subtitle}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#f59121]" />
                <span>
                  <strong className="text-slate-800">
                    {templateData.trustBadges[2]?.title}
                  </strong>{' '}
                  <span className="text-slate-600">
                    {templateData.trustBadges[2]?.subtitle}
                  </span>
                </span>
              </div>
            </div>

            {/* Hero Slider Image */}
            <div className="relative flex-1 min-h-[340px] sm:min-h-[395px] bg-slate-900 overflow-hidden group">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/15 to-transparent" />

              {/* Bottom Left Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="max-w-lg">
                  <span className="inline-block bg-[#f59121] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs mb-2">
                    {currentSlide.badge}
                  </span>
                  <h1 className="text-xl sm:text-2xl font-extrabold drop-shadow">
                    {currentSlide.title}
                  </h1>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    {currentSlide.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black tracking-widest text-white/90 border border-white/40 px-3 py-1 backdrop-blur-xs">
                    {currentSlide.brandTag}
                  </span>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                {templateData.heroSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full border border-white transition ${
                      idx === activeSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: – KHUYẾN MÃI HẤP DẪN (5-column product grid) */}
        <section id="section-khuyen-mai" className="space-y-2.5">
          <h2 className="text-sm font-extrabold uppercase text-slate-800 tracking-wide">
            – KHUYẾN MÃI HẤP DẪN
          </h2>
          <div className="bg-white border border-slate-200 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {promoProducts.map(renderProductCard)}
          </div>
        </section>

        {/* SECTION 2: – GỢI Ý DÀNH RIÊNG CHO BẠN (5-column product grid) */}
        <section id="section-goi-y" className="space-y-2.5">
          <h2 className="text-sm font-extrabold uppercase text-slate-800 tracking-wide">
            – GỢI Ý DÀNH RIÊNG CHO BẠN
          </h2>
          <div className="bg-white border border-slate-200 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {suggestedProducts.map(renderProductCard)}
          </div>
        </section>

        {/* SECTION 3: 📺 NỘI THẤT GIA ĐÌNH */}
        <section id="section-gia-dinh" className="bg-white border border-slate-200 p-4 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
            <Tv className="w-4 h-4 text-slate-800" />
            <h2 className="text-sm font-extrabold uppercase text-slate-800 tracking-wide">
              NỘI THẤT GIA ĐÌNH
            </h2>
          </div>

          {/* Stacked Double Banner ("TOP DECOR - NỘI THẤT VĂN PHÒNG CAO CẤP HÀNG ĐÃ CHẤT GIÁ LẠI RẺ") */}
          <div className="relative rounded-xs overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 h-40 sm:h-48 relative">
              <img
                src={templateData.familyBanner.topImage}
                alt={templateData.familyBanner.brandName}
                className="w-full h-full object-cover"
              />
              <img
                src={templateData.familyBanner.bottomImage}
                alt={templateData.familyBanner.headlineLine1}
                className="w-full h-full object-cover hidden md:block"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/45 to-slate-900/70 flex flex-col items-center justify-center text-center p-4 text-white">
                <div className="bg-slate-900/80 border border-amber-400/50 px-4 py-1.5 rounded-xs mb-2">
                  <span className="text-amber-400 font-black tracking-widest text-sm">
                    {templateData.familyBanner.brandName}
                  </span>
                  <span className="block text-[10px] text-slate-300">
                    {templateData.familyBanner.brandSlogan}
                  </span>
                </div>
                <p className="text-sm sm:text-lg font-black italic tracking-wide uppercase text-white drop-shadow">
                  {templateData.familyBanner.headlineLine1}
                </p>
                <p className="text-xs sm:text-base font-extrabold italic uppercase text-amber-300">
                  {templateData.familyBanner.headlineLine2}
                </p>
              </div>
            </div>
          </div>

          {/* Filter Pills: Mới & Nổi bật | Bán Chạy */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setFamilyTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                familyTab === 'all' || familyTab === 'moi-noi-bat'
                  ? 'bg-[#f59121] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Mới & Nổi bật
            </button>
            <button
              type="button"
              onClick={() => setFamilyTab('ban-chay')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                familyTab === 'ban-chay'
                  ? 'bg-[#f59121] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Bán Chạy
            </button>
          </div>

          {/* 5-Column Family Furniture Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {familyProducts.map(renderProductCard)}
          </div>
        </section>

        {/* SECTION 4: 🪑 BÀN */}
        <section id="section-ban" className="bg-white border border-slate-200 p-4 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
            <Table className="w-4 h-4 text-slate-800" />
            <h2 className="text-sm font-extrabold uppercase text-slate-800 tracking-wide">
              BÀN
            </h2>
          </div>

          {/* 3-Panel Dining Table Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 overflow-hidden">
            {/* Left Dark/Orange Typography Graphic (4 cols) */}
            <div className="lg:col-span-4 bg-[#221e1f] relative overflow-hidden p-6 flex flex-col justify-center min-h-[210px]">
              <div className="absolute -right-8 top-0 bottom-0 w-24 bg-[#f59121] skew-x-[-16deg]" />
              <div className="relative z-10 space-y-1">
                <p className="text-xl sm:text-2xl font-light text-white tracking-wider uppercase">
                  {templateData.tableBanner.titleTop}
                </p>
                <p className="text-2xl sm:text-3xl font-black text-[#facc15] tracking-wide uppercase">
                  {templateData.tableBanner.titleHighlight}
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase pl-4">
                  {templateData.tableBanner.titleBottom}
                </p>
              </div>
            </div>

            {/* Center Dining Room Photo (5 cols) */}
            <div className="lg:col-span-5 h-[220px] overflow-hidden bg-slate-100">
              <img
                src={templateData.tableBanner.mainImage}
                alt="Bộ bàn ăn nội thất phòng ăn"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right 2x2 Wood Detail Grid (3 cols) */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-1.5 h-[220px]">
              {templateData.tableBanner.detailImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden border border-amber-500/40 bg-slate-100"
                >
                  <img
                    src={imgUrl}
                    alt={`Chi tiết gỗ ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills: Mới & Nổi bật | Bán Chạy | Giảm giá */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setTableTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                tableTab === 'all' || tableTab === 'moi-noi-bat'
                  ? 'bg-[#f59121] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Mới & Nổi bật
            </button>
            <button
              type="button"
              onClick={() => setTableTab('ban-chay')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                tableTab === 'ban-chay'
                  ? 'bg-[#f59121] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Bán Chạy
            </button>
            <button
              type="button"
              onClick={() => setTableTab('giam-gia')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                tableTab === 'giam-gia'
                  ? 'bg-[#f59121] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Giảm giá
            </button>
          </div>

          {/* 5-Column Table Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {tableProducts.map(renderProductCard)}
          </div>
        </section>

        {/* Newsletter Bar */}
        <section className="py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 border-2 border-[#f59121] flex items-center justify-center text-[#f59121] shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-slate-800">
                {templateData.newsletter.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {templateData.newsletter.subtitle}
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail.trim()) {
                showToast(`Đã đăng ký nhận bản tin với email: ${newsletterEmail}`);
                setNewsletterEmail('');
              }
            }}
            className="flex w-full md:w-auto max-w-md"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={templateData.newsletter.placeholder}
              className="flex-1 sm:w-64 h-9 px-3 bg-white border border-slate-200 rounded-l-xs text-xs focus:outline-none focus:border-[#f59121]"
            />
            <button
              type="submit"
              className="h-9 px-5 bg-[#f59121] hover:bg-[#df7d12] text-white text-xs font-bold uppercase rounded-r-xs transition"
            >
              {templateData.newsletter.buttonLabel}
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 text-xs text-slate-600">
        <div className="max-w-[1220px] mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: HỖ TRỢ KHÁCH HÀNG */}
          <div className="space-y-1.5">
            <h4 className="font-extrabold uppercase text-slate-800 mb-2.5">
              HỖ TRỢ KHÁCH HÀNG
            </h4>
            <p className="text-[#e60023] font-bold">
              Hotline: {templateData.business.hotline}
            </p>
            <p className="text-[11px] text-slate-400">
              ({templateData.business.workingHours})
            </p>
            <ul className="space-y-1.5 pt-1 text-[11px]">
              <li>Các câu hỏi thường gặp</li>
              <li>Gửi yêu cầu hỗ trợ</li>
              <li>Hướng dẫn đặt hàng</li>
              <li>Phương thức vận chuyển</li>
              <li>Chính sách đổi trả</li>
              <li>Hướng dẫn mua trả góp</li>
            </ul>
          </div>

          {/* Col 2: VỀ MONA */}
          <div className="space-y-1.5">
            <h4 className="font-extrabold uppercase text-slate-800 mb-2.5">
              VỀ MONA
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Giới thiệu {templateData.business.name}</li>
              <li>Tuyển dụng</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
              <li>Hội Sách Online</li>
              <li>Giới thiệu Mona Xu</li>
              <li>Mona Tư Vấn</li>
              <li>Ưu đãi doanh nghiệp</li>
            </ul>
          </div>

          {/* Col 3: HỢP TÁC VÀ LIÊN KẾT + PHƯƠNG THỨC THANH TOÁN */}
          <div className="space-y-4">
            <div>
              <h4 className="font-extrabold uppercase text-slate-800 mb-2">
                HỢP TÁC VÀ LIÊN KẾT
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                <li>Quy chế hoạt động Sàn GDTMĐT</li>
                <li>Bán hàng cùng Mona</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold uppercase text-slate-800 mb-2">
                PHƯƠNG THỨC THANH TOÁN
              </h4>
              <div className="grid grid-cols-3 gap-1.5 max-w-[200px] text-[10px] font-bold text-center">
                <span className="border border-slate-200 py-1.5 rounded-xs text-blue-800">
                  VISA
                </span>
                <span className="border border-slate-200 py-1.5 rounded-xs text-orange-600">
                  MasterCard
                </span>
                <span className="border border-slate-200 py-1.5 rounded-xs text-emerald-700">
                  JCB
                </span>
                <span className="border border-slate-200 py-1.5 rounded-xs text-slate-600">
                  Internet Banking
                </span>
                <span className="border border-slate-200 py-1.5 rounded-xs text-slate-600">
                  Tiền Mặt
                </span>
                <span className="border border-slate-200 py-1.5 rounded-xs text-red-600">
                  Trả Góp 0%
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: KẾT NỐI VỚI CHÚNG TÔI */}
          <div className="space-y-4">
            <div>
              <h4 className="font-extrabold uppercase text-slate-800 mb-2">
                KẾT NỐI VỚI CHÚNG TÔI
              </h4>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#3b5998] text-white flex items-center justify-center font-bold text-xs">
                  f
                </span>
                <span className="w-7 h-7 rounded-full bg-[#262626] text-white flex items-center justify-center font-bold text-xs">
                  in
                </span>
                <span className="w-7 h-7 rounded-full bg-[#cd201f] text-white flex items-center justify-center font-bold text-xs">
                  ▶
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-extrabold uppercase text-slate-800 mb-2">
                TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
              </h4>
              <div className="flex gap-2">
                <div className="bg-slate-900 text-white px-3 py-1.5 rounded text-[10px] font-semibold">
                  App Store
                </div>
                <div className="bg-slate-900 text-white px-3 py-1.5 rounded text-[10px] font-semibold">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Address Row */}
        <div className="border-t border-slate-100 py-5">
          <div className="max-w-[1220px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <p>
                <strong>Địa chỉ văn phòng:</strong>{' '}
                {templateData.business.officeAddress}. Mona nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng.
              </p>
            </div>
            <div>
              <p>
                <strong>Địa chỉ gửi hàng đổi/trả/bảo hành:</strong>{' '}
                {templateData.business.returnCenterAddress} (Tham khảo hướng dẫn đổi, trả, bảo hành hoặc liên hệ{' '}
                <strong>{templateData.business.hotline}</strong> để được hướng dẫn thêm)
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#f5f5f5] py-4 text-center text-[11px] text-slate-500 space-y-0.5">
          <p>
            © All rights reserved. Thiết kế website{' '}
            <strong className="text-slate-700">Mona Media</strong>
          </p>
          <p>{templateData.business.businessLicense}</p>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f59121] text-white px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase">
                {selectedProduct.categoryLabel} • Mã: {selectedProduct.code}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-white/90 hover:text-white"
              >
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
                  <span className="text-lg font-black text-[#ef5a28]">
                    {formatVND(selectedProduct.price)}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="bg-slate-50 p-2.5 rounded border border-slate-100 space-y-1">
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
                  className="w-full bg-[#f59121] hover:bg-[#df7d12] text-white font-bold py-2.5 rounded-xs uppercase transition"
                >
                  Thêm vào giỏ hàng
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
            <div className="p-4 bg-[#f59121] text-white flex items-center justify-between">
              <span className="font-bold text-xs uppercase">
                Giỏ Hàng Showroom ({totalCartItems} sản phẩm)
              </span>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-white/90 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs">
                  Giỏ hàng của bạn đang trống.
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
                      className="w-14 h-14 object-contain"
                    />
                    <div className="flex-1 min-w-0 text-xs">
                      <p className="font-bold text-slate-800 truncate">
                        {product.name}
                      </p>
                      <p className="text-[#ef5a28] font-bold mt-0.5">
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
                <span>Tổng thanh toán:</span>
                <span className="text-[#ef5a28]">
                  {formatVND(totalCartAmount)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setCartOpen(false);
                  showToast('Đặt hàng thành công! Giao hàng nhanh trong 2 giờ.');
                }}
                className="w-full py-2.5 bg-[#f59121] hover:bg-[#df7d12] disabled:bg-slate-300 text-white text-xs font-bold uppercase rounded-xs transition"
              >
                THANH TOÁN & GIAO HÀNG NGAY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {authModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setAuthModalOpen(false)}
        >
          <div
            className="bg-white rounded max-w-sm w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f59121] text-white px-4 py-3 flex items-center justify-between text-xs font-bold uppercase">
              <span>Đăng nhập / Đăng ký thành viên Mona</span>
              <button type="button" onClick={() => setAuthModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAuthModalOpen(false);
                showToast('Chào mừng bạn đến với Showroom Nội Thất MONA!');
              }}
              className="p-5 space-y-3 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Số điện thoại hoặc Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="0909 xxx xxx"
                  className="w-full border border-slate-300 px-3 py-2 rounded-xs"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full border border-slate-300 px-3 py-2 rounded-xs"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f59121] text-white font-bold py-2.5 rounded-xs uppercase"
              >
                Đăng Nhập Ngay
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
