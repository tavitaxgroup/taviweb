'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  Menu,
  ShoppingCart,
  Crown,
  Star,
  Truck,
  Gift,
  Calendar,
  PackageCheck,
  HelpCircle,
  ShoppingBag,
  Sparkles,
  Sofa,
  Monitor,
  Tv,
  BedDouble,
  Lamp,
  Clock,
  Layers,
  Home,
  Heart,
  Armchair,
  Package,
  Bath,
  TicketPercent,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Trash2,
  Mail
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat28Data,
  type NoiThat28TemplateData,
  type MallProduct
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

const formatVND = (amount: number) =>
  `${amount.toLocaleString('vi-VN')} ₫`;

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat28Data, data) as NoiThat28TemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<MallProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<{ product: MallProduct; qty: number }[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [gender, setGender] = useState<'nam' | 'nu'>('nam');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const addToCart = (product: MallProduct) => {
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

  const matchesSearch = (p: MallProduct) =>
    !searchQuery.trim() ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.code.toLowerCase().includes(searchQuery.toLowerCase());

  const newProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.group === 'new' && matchesSearch(p))
        .slice(0, 5),
    [templateData.products, searchQuery]
  );

  const bestSellers = useMemo(
    () =>
      templateData.products
        .filter((p) => p.group === 'bestseller' && matchesSearch(p))
        .slice(0, 4),
    [templateData.products, searchQuery]
  );

  const honeyDeals = useMemo(
    () =>
      templateData.products
        .filter((p) => p.group === 'honey-deals' && matchesSearch(p))
        .slice(0, 4),
    [templateData.products, searchQuery]
  );

  const livingTechProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.group === 'living-tech' && matchesSearch(p))
        .slice(0, 3),
    [templateData.products, searchQuery]
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderProductCard = (product: MallProduct) => (
    <div
      key={product.id}
      className="bg-white border border-slate-200/80 hover:border-[#117599] hover:shadow-md transition p-3 flex flex-col justify-between items-center text-center relative group"
    >
      {product.discountPercent && (
        <span className="absolute top-2.5 left-2.5 z-10 bg-[#e74c3c] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-2xs">
          -{product.discountPercent}%
        </span>
      )}
      {product.isBestBadge && (
        <span className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-[#1e3a8a] text-white text-[8px] font-bold flex items-center justify-center leading-tight">
          BÁN CHẠY
        </span>
      )}

      <div
        onClick={() => setSelectedProduct(product)}
        className="w-full cursor-pointer flex-1 flex flex-col items-center justify-between"
      >
        <div className="h-38 w-full flex items-center justify-center p-2 overflow-hidden bg-white">
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
          <h3 className="text-xs text-slate-700 group-hover:text-[#117599] font-medium line-clamp-2 min-h-[32px]">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center justify-center gap-0.5 text-red-500">
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
        className="mt-2.5 w-full py-1 bg-slate-100 hover:bg-[#117599] text-slate-700 hover:text-white text-[11px] font-bold rounded-2xs transition"
      >
        + Thêm vào giỏ
      </button>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f4f5f7] text-slate-800 font-sans selection:bg-[#117599] selection:text-white"
    >
      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#117599] text-white px-4 py-3 rounded shadow-xl text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        {/* Top Utility Strip */}
        <div className="border-b border-slate-100 text-[10px] text-slate-500">
          <div className="max-w-[1200px] mx-auto px-4 h-6 flex items-center justify-end gap-4">
            <span>📱 Tải App Mona</span>
            <span>❓ Trung tâm khách hàng</span>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo MONA 24.COM */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setSearchQuery('');
            }}
            className="flex items-center gap-1 shrink-0"
          >
            <span className="text-xl font-black tracking-tight text-slate-800">
              {templateData.business.brandPrefix}
            </span>
            <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-sm flex items-center justify-center border-2 border-sky-500">
              {templateData.business.brandNumber}
            </span>
            <span className="text-lg font-extrabold text-sky-600">
              {templateData.business.brandSuffix}
            </span>
          </a>

          {/* Search Input */}
          <div className="flex-1 max-w-[440px] hidden sm:flex items-center border border-slate-300 rounded-xs overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={templateData.business.searchPlaceholder}
              className="w-full h-8 px-3 text-xs text-slate-700 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => scrollToSection('section-new')}
              className="h-8 px-3 text-slate-500 hover:text-[#117599]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right Quick Links */}
          <div className="flex items-center gap-4 text-xs shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('section-lounge')}
              className="hidden lg:flex items-center gap-1.5 text-slate-600 hover:text-[#117599]"
            >
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-[11px] leading-tight text-left">
                Kẹo Sao
                <br />
                May Mắn
              </span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('section-showcase-1')}
              className="hidden lg:flex items-center gap-1.5 text-slate-600 hover:text-[#117599]"
            >
              <PackageCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[11px] leading-tight text-left">
                Kiểm Tra
                <br />
                Đơn Hàng
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 font-semibold text-slate-700 hover:text-[#117599]"
            >
              <span className="hidden sm:inline">Đăng nhập / Đăng ký</span>
              <div className="relative p-1.5 bg-slate-100 rounded">
                <ShoppingCart className="w-4 h-4 text-slate-700" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#e74c3c] text-white text-[10px] font-bold flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Navigation Strip */}
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between border-t border-slate-100 text-xs">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
            <div className="bg-[#117599] text-white px-4 h-9 flex items-center gap-2 font-extrabold uppercase text-[11px] shrink-0">
              <Menu className="w-4 h-4" />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>
            {templateData.navLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSection('section-honey-deals')}
                className="font-semibold text-slate-700 hover:text-[#117599] whitespace-nowrap py-2"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-4 text-[11px] text-slate-600 shrink-0">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-sky-600" /> Giao nhanh
            </span>
            <span className="flex items-center gap-1">
              <Gift className="w-3.5 h-3.5 text-pink-500" /> Khuyến mãi
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-600" /> Sự kiện
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 py-4 space-y-7">
        {/* 2. Hero Bento Grid (3 cols Sidebar + 5 cols VIP Banner + 4 cols Side Grid) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-2.5">
          {/* Left 3 cols: Category Sidebar */}
          <div className="lg:col-span-3 bg-white border border-slate-200 divide-y divide-slate-100">
            {templateData.categoriesSidebar.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToSection(cat.targetId)}
                className="w-full px-3.5 py-2 flex items-center justify-between text-xs text-slate-700 hover:bg-sky-50 hover:text-[#117599] transition text-left"
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Center 5 cols: Black & Gold V.I.P Banner + 2 Sub-Banners */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {/* Top VIP Black & Gold Card */}
            <div className="bg-slate-950 text-white p-5 rounded-xs border border-amber-500/40 flex flex-col items-center justify-between text-center min-h-[250px] relative overflow-hidden">
              <div className="bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 text-slate-950 px-6 py-4 rounded-sm shadow-lg w-full max-w-xs">
                <Crown className="w-6 h-6 mx-auto mb-1 fill-current" />
                <p className="text-[10px] font-extrabold uppercase tracking-widest">
                  {templateData.vipHero.badge}
                </p>
                <h1 className="text-4xl font-black tracking-wider leading-none my-1">
                  {templateData.vipHero.title}
                </h1>
                <div className="border-t border-slate-900/20 pt-1.5 mt-1.5 flex items-center justify-center gap-2 text-xs font-black">
                  <span className="text-red-700">
                    {templateData.vipHero.discountLabel}
                  </span>
                </div>
              </div>

              {/* Coupon Code Strip */}
              <div className="mt-4 w-full grid grid-cols-2 gap-2 pt-2 border-t border-amber-500/20 text-xs">
                {templateData.vipHero.coupons.map((cp) => (
                  <div
                    key={cp.code}
                    className="bg-slate-900 border border-amber-500/40 py-1.5 px-2 rounded-2xs flex items-center justify-center gap-1.5"
                  >
                    <span className="bg-red-700 text-white font-black px-1.5 py-0.5 text-[10px]">
                      {cp.code}
                    </span>
                    <span className="text-amber-300 font-black">
                      GIẢM {cp.percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 2 Sub-Banners */}
            <div className="grid grid-cols-2 gap-2.5 flex-1">
              <div className="relative h-32 overflow-hidden rounded-xs bg-slate-800 text-white p-3 flex flex-col justify-end">
                <img
                  src={templateData.vipHero.bottomLeftImage}
                  alt={templateData.vipHero.bottomLeftTitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                />
                <div className="relative z-10">
                  <p className="text-xs font-bold">
                    {templateData.vipHero.bottomLeftTitle}
                  </p>
                  <p className="text-[11px] text-amber-300 font-bold">
                    {templateData.vipHero.bottomLeftSub}
                  </p>
                </div>
              </div>

              <div className="relative h-32 overflow-hidden rounded-xs bg-sky-100 p-3 flex flex-col justify-between">
                <img
                  src={templateData.vipHero.bottomRightImage}
                  alt={templateData.vipHero.bottomRightBrand}
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <span className="relative z-10 inline-block bg-white px-2 py-0.5 text-[10px] font-black text-slate-800 border border-slate-300 w-fit">
                  {templateData.vipHero.bottomRightBrand}
                </span>
                <div className="relative z-10">
                  <span className="text-base font-black text-sky-800">
                    {templateData.vipHero.bottomRightDiscount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 cols: 2x2 Promo Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-2.5">
            {templateData.vipHero.sideGrid.map((card) => (
              <div
                key={card.id}
                onClick={() => scrollToSection('section-new')}
                style={{ backgroundColor: card.bgColor, color: card.textColor }}
                className="p-3 rounded-xs flex flex-col justify-between cursor-pointer overflow-hidden relative group min-h-[185px]"
              >
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 block">
                    {card.brand}
                  </span>
                  <h3 className="text-sm font-black leading-tight mt-0.5">
                    {card.subtitle}
                  </h3>
                </div>
                <div className="h-24 mt-2 rounded-xs overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.brand}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SẢN PHẨM MỚI + TODAY SALES */}
        <section id="section-new" className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-extrabold uppercase text-slate-800">
              SẢN PHẨM MỚI
            </h2>
            <div className="text-[11px] text-slate-600">
              <strong className="text-slate-900">TODAY SALES</strong>{' '}
              <span>1 ngày 8 giờ 33 phút</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {newProducts.map(renderProductCard)}
          </div>
        </section>

        {/* 4. SẢN PHẨM BÁN CHẠY + Dual Wide Promo Strip */}
        <section id="section-bestseller" className="space-y-3">
          <h2 className="text-xs font-extrabold uppercase text-slate-800">
            SẢN PHẨM BÁN CHẠY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {bestSellers.map(renderProductCard)}

            {/* 5th Col: KHÁCH HÀNG MỚI GIẢM THÊM 10% */}
            <div className="bg-gradient-to-b from-sky-500 to-sky-700 text-white p-4 flex flex-col justify-between text-center">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase">KHÁCH HÀNG MỚI</p>
                <p className="text-lg font-black text-amber-300 uppercase">
                  GIẢM THÊM 10%
                </p>
                <div className="bg-white text-sky-900 font-black py-1 px-2 rounded text-xs">
                  NHẬP MÃ: KHM24
                </div>
                <p className="text-[10px] text-sky-100">
                  Mức giảm tối đa 200.000đ
                </p>
              </div>
              <div className="bg-amber-400 text-slate-900 p-3 rounded-xs mt-3">
                <span className="text-xl font-black tracking-tight block">
                  MonaMart
                </span>
                <span className="text-[10px] font-bold uppercase">
                  ĐẠI SIÊU THỊ NỘI THẤT HÀN QUỐC
                </span>
              </div>
            </div>
          </div>

          {/* Dual Wide Promo Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="bg-[#0d3b66] text-white px-5 py-3 flex items-center justify-between rounded-xs">
              <div>
                <span className="text-sm font-black text-sky-300">
                  mona.interior.vn
                </span>
                <p className="text-[11px] text-slate-200">
                  Tặng gói thiết kế 3D phòng khách miễn phí
                </p>
              </div>
              <span className="bg-white text-[#0d3b66] font-black px-3 py-1 text-xs rounded-2xs">
                NHẬP MÃ YES24 GIẢM 7%
              </span>
            </div>

            <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between rounded-xs">
              <span className="text-sm font-black uppercase text-amber-400">
                SĂN DEAL NỘI THẤT
              </span>
              <span className="text-2xl font-black text-[#ef5a28]">
                -50% OFF
              </span>
            </div>
          </div>
        </section>

        {/* 5. 👑 HONEY DEALS */}
        <section id="section-honey-deals" className="space-y-2.5">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-500 fill-current" />
            <h2 className="text-xs font-extrabold uppercase text-slate-800">
              HONEY DEALS
            </h2>
          </div>
          <div className="bg-white border border-slate-200 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {honeyDeals.map(renderProductCard)}
          </div>
        </section>

        {/* 6. CATEGORY SHOWCASE 1: NỘI THẤT & THIẾT BỊ (Teal #29b674) */}
        <section
          id="section-showcase-1"
          className="bg-white border border-slate-200 grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
        >
          {/* Left 2 cols: Category Menu */}
          <div className="lg:col-span-2 border-r border-slate-100 flex flex-col justify-between">
            <div>
              <div
                style={{ backgroundColor: templateData.categoryShowcase1.accentColor }}
                className="text-white py-3 px-3 text-center text-xs font-extrabold uppercase"
              >
                {templateData.categoryShowcase1.headerTitle}
              </div>
              <div className="p-3">
                <p className="text-[11px] font-extrabold uppercase text-slate-800 mb-2">
                  {templateData.categoryShowcase1.subTitle}
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-500">
                  {templateData.categoryShowcase1.subLinks.map((lnk, i) => (
                    <li
                      key={i}
                      onClick={() => scrollToSection('section-new')}
                      className="hover:text-[#29b674] cursor-pointer"
                    >
                      {lnk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-3 border-t border-slate-100 space-y-2 text-center">
              {templateData.categoryShowcase1.brands.map((b) => (
                <div
                  key={b}
                  className="py-1.5 border border-slate-100 text-xs font-black text-slate-700"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Center 3 cols: Vertical Teal Feature Poster */}
          <div
            style={{ backgroundColor: templateData.categoryShowcase1.accentColor }}
            className="lg:col-span-3 text-white p-5 flex flex-col justify-between relative overflow-hidden min-h-[360px]"
          >
            <div className="relative z-10 space-y-1">
              <span className="text-xs font-bold uppercase opacity-90">
                {templateData.categoryShowcase1.posterBrand}
              </span>
              <h3 className="text-lg font-extrabold leading-snug">
                {templateData.categoryShowcase1.posterTitle}
              </h3>
              <div className="pt-2 flex items-baseline gap-1.5">
                <span className="text-[10px] uppercase">GIẢM ĐẾN</span>
                <span className="text-3xl font-black">
                  {templateData.categoryShowcase1.posterDiscount}
                </span>
              </div>
            </div>
            <img
              src={templateData.categoryShowcase1.posterImage}
              alt={templateData.categoryShowcase1.posterTitle}
              className="w-full h-52 object-cover rounded mt-4 border border-white/20"
            />
          </div>

          {/* Right 7 cols: 3 Products + 2 Bottom Promo Cards */}
          <div className="lg:col-span-7 p-3 flex flex-col justify-between gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {livingTechProducts.map(renderProductCard)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {templateData.categoryShowcase1.bottomBanners.map((bn, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: bn.bgColor }}
                  className="p-3.5 rounded-xs flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {bn.title}
                    </p>
                    <p className="text-base font-black text-[#e74c3c] mt-1">
                      {bn.priceText}
                    </p>
                  </div>
                  <img
                    src={bn.image}
                    alt={bn.title}
                    className="w-20 h-16 object-cover rounded-xs shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CATEGORY SHOWCASE 2: GIA DỤNG & ĐỜI SỐNG (Rose Pink #d9538f) */}
        <section
          id="section-showcase-2"
          className="bg-white border border-slate-200 grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
        >
          {/* Left 2 cols */}
          <div className="lg:col-span-2 border-r border-slate-100 flex flex-col justify-between">
            <div>
              <div
                style={{ backgroundColor: templateData.categoryShowcase2.accentColor }}
                className="text-white py-3 px-3 text-center text-xs font-extrabold uppercase"
              >
                {templateData.categoryShowcase2.headerTitle}
              </div>
              <div className="p-3">
                <p className="text-[11px] font-extrabold uppercase text-slate-800 mb-2">
                  {templateData.categoryShowcase2.subTitle}
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-500">
                  {templateData.categoryShowcase2.subLinks.map((lnk, i) => (
                    <li key={i} className="hover:text-[#d9538f] cursor-pointer">
                      {lnk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-3 border-t border-slate-100 space-y-2 text-center">
              {templateData.categoryShowcase2.brands.map((b) => (
                <div
                  key={b}
                  className="py-1.5 border border-slate-100 text-xs font-black text-slate-700"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Center 3 cols: Vertical Rose Poster */}
          <div
            style={{ backgroundColor: templateData.categoryShowcase2.accentColor }}
            className="lg:col-span-3 text-white p-5 flex flex-col justify-between min-h-[360px]"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase opacity-90">
                {templateData.categoryShowcase2.posterBrand}
              </span>
              <h3 className="text-lg font-extrabold leading-snug">
                {templateData.categoryShowcase2.posterTitle}
              </h3>
              <div className="pt-2 flex items-baseline gap-1.5">
                <span className="text-[10px] uppercase">GIẢM ĐẾN</span>
                <span className="text-3xl font-black">
                  {templateData.categoryShowcase2.posterDiscount}
                </span>
              </div>
            </div>
            <img
              src={templateData.categoryShowcase2.posterImage}
              alt={templateData.categoryShowcase2.posterTitle}
              className="w-full h-52 object-cover rounded mt-4 border border-white/20"
            />
          </div>

          {/* Right 7 cols */}
          <div className="lg:col-span-7 p-3 flex flex-col justify-between gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {newProducts.slice(0, 3).map(renderProductCard)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {templateData.categoryShowcase2.bottomBanners.map((bn, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: bn.bgColor }}
                  className={`p-3.5 rounded-xs flex items-center justify-between gap-3 ${
                    idx === 1 ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold">{bn.title}</p>
                    <p className="text-lg font-black mt-1">
                      {bn.highlightText}
                    </p>
                  </div>
                  <img
                    src={bn.image}
                    alt={bn.title}
                    className="w-20 h-16 object-cover rounded-xs shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. HỘI QUÁN MONA (Kẹo Sao + Café Style + Membership) */}
        <section id="section-lounge" className="space-y-2.5">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-extrabold uppercase text-slate-800">
              {templateData.loungeSection.heading}
            </h2>
            <span className="text-[11px] text-sky-600">
              {templateData.loungeSection.subHeading}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-slate-200 overflow-hidden">
            {/* Left 4 cols: Kẹo Sao */}
            <div className="lg:col-span-4 border-r border-slate-100">
              <div className="bg-pink-300 text-pink-950 px-4 py-2 font-extrabold text-xs">
                🍬 {templateData.loungeSection.luckyTitle}
              </div>
              <div className="p-4 flex items-center justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-800">
                    {templateData.loungeSection.luckyTask}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="border border-slate-300 px-2.5 py-1 text-[11px]">
                      {templateData.loungeSection.luckyPoints}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        showToast('Bạn đã tham gia vòng quay Kẹo Sao May Mắn!')
                      }
                      className="bg-[#b91c1c] text-white text-[11px] font-bold px-3 py-1"
                    >
                      THAM GIA
                    </button>
                  </div>
                </div>
                <Gift className="w-14 h-14 text-pink-500 stroke-[1.5]" />
              </div>
            </div>

            {/* Center 5 cols: café Style */}
            <div className="lg:col-span-5 border-r border-slate-100">
              <div className="bg-[#d7ccc8] text-stone-800 px-4 py-2 font-serif italic font-bold text-xs">
                ☕ café Style — Cảm hứng trang trí
              </div>
              <div className="p-3 space-y-2.5">
                {templateData.loungeSection.cafeArticles.map((art) => (
                  <div key={art.id} className="flex gap-2.5 items-start">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-20 h-12 object-cover rounded-2xs shrink-0"
                    />
                    <div className="text-[11px]">
                      <p className="font-bold text-slate-800 line-clamp-1">
                        {art.title}
                      </p>
                      <p className="text-slate-500 line-clamp-1 mt-0.5">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 3 cols: MEMBERSHIP */}
            <div className="lg:col-span-3 bg-gradient-to-b from-[#3b5998] to-[#1e3a8a] text-white p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider">
                  MEMBERSHIP
                </h3>
                <p className="text-[10px] text-sky-200 mb-2">
                  Gia nhập để nhận thêm nhiều ưu đãi
                </p>
                <ul className="space-y-1 text-[10px] text-sky-100">
                  {templateData.loungeSection.membershipBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-sky-300 shrink-0" />
                      <span className="truncate">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-4 gap-1 text-[9px] text-center font-bold pt-3">
                <span className="bg-white/15 py-1 rounded-2xs">Opal</span>
                <span className="bg-white/25 py-1 rounded-2xs">Sapphire</span>
                <span className="bg-white/35 py-1 rounded-2xs">Ruby</span>
                <span className="bg-amber-400 text-slate-900 py-1 rounded-2xs">
                  Diamond
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Newsletter Bar */}
        <section
          id="section-viewed"
          className="bg-white border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className="text-xs font-extrabold uppercase text-slate-800">
                ĐĂNG KÝ NHẬN TIN TỪ MONA
              </h3>
              <p className="text-[11px] text-slate-500">
                NHẬN MÃ GIẢM GIÁ 50.000 VNĐ CHO ĐƠN HÀNG NỘI THẤT ĐẦU TIÊN
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail.trim()) {
                showToast('Đã gửi mã voucher 50.000đ tới email của bạn!');
                setNewsletterEmail('');
              }
            }}
            className="flex flex-wrap items-center gap-3 text-xs"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Địa chỉ email của bạn"
              className="h-9 px-3 border border-slate-300 rounded-xs w-60 focus:outline-none"
            />
            <label className="flex items-center gap-1">
              <input
                type="radio"
                checked={gender === 'nam'}
                onChange={() => setGender('nam')}
              />
              <span>Nam</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                checked={gender === 'nu'}
                onChange={() => setGender('nu')}
              />
              <span>Nữ</span>
            </label>
            <button
              type="submit"
              className="h-9 px-5 bg-[#d9363e] hover:bg-[#b8262d] text-white font-bold uppercase rounded-xs transition"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </section>
      </main>

      {/* Footer matching NT031 screenshot */}
      <footer className="mt-6">
        {/* 4 Service Strip */}
        <div className="bg-white border-y border-slate-200 py-3.5 px-4">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-slate-600 text-center">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4" /> PHÍ GIAO HÀNG
            </div>
            <div className="flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4" /> TRUNG TÂM KHÁCH HÀNG
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" /> HƯỚNG DẪN MUA HÀNG
            </div>
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" /> TÍCH LŨY ƯU ĐÃI
            </div>
          </div>
        </div>

        {/* Slate Gray Info / Bank / Notice Section (#6c7a89) */}
        <div className="bg-[#6c7a89] text-slate-100 py-8 px-4 text-[11px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-1.5">
              <h4 className="font-extrabold uppercase text-white mb-2">
                THÔNG TIN
              </h4>
              <p className="font-bold">{templateData.business.name}</p>
              <p>{templateData.business.phone[0]}</p>
              <p>{templateData.business.workingHours}</p>
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold uppercase text-white mb-2">
                CHUYỂN KHOẢN
              </h4>
              <p className="text-slate-200 mb-1">
                Chủ tài khoản: Công ty MONA MEDIA
              </p>
              {templateData.bankAccounts.map((b) => (
                <div key={b.bank} className="flex justify-between max-w-xs">
                  <span>{b.bank}</span>
                  <span className="font-mono">{b.account}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              <h4 className="font-extrabold uppercase text-white mb-2">
                THÔNG BÁO
              </h4>
              <p>• Danh sách khách hàng trúng thưởng voucher nội thất tháng 10</p>
              <p>• Danh sách nhận quà Membership hạng Diamond & Ruby</p>
              <p>• Hướng dẫn kích hoạt bảo hành điện tử đồ nội thất Mona24</p>
            </div>
          </div>
        </div>

        {/* Bottom Company Info */}
        <div className="bg-white py-6 px-4 border-t border-slate-200 text-[11px] text-slate-600">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-extrabold text-slate-800 uppercase">
                CÔNG TY MONA.MEDIA — {templateData.business.name}
              </p>
              <p>
                Hotline: {templateData.business.phone.join(' ; ')} | Email:{' '}
                {templateData.business.email[0]}
              </p>
              <p>{templateData.business.address}</p>
              <p>{templateData.business.businessLicense}</p>
            </div>
            <div className="text-right">
              <span className="inline-block border border-red-200 bg-red-50 text-red-600 font-bold px-3 py-1 rounded">
                ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#117599] text-white px-5 py-3 flex items-center justify-between text-xs font-bold uppercase">
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
                  <span className="text-lg font-black text-[#e74c3c]">
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
                  className="w-full bg-[#117599] hover:bg-[#0d5d7a] text-white font-bold py-2.5 rounded-xs uppercase"
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
            <div className="p-4 bg-[#117599] text-white flex items-center justify-between text-xs font-bold uppercase">
              <span>Giỏ Hàng Mona24 ({totalCartItems})</span>
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
                      <p className="text-[#e74c3c] font-bold">
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
                <span className="text-[#e74c3c]">
                  {formatVND(totalCartAmount)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setCartOpen(false);
                  showToast('Đặt hàng thành công! Bạn được cộng thêm 400 Kẹo Sao.');
                }}
                className="w-full py-2.5 bg-[#117599] hover:bg-[#0d5d7a] disabled:bg-slate-300 text-white text-xs font-bold uppercase rounded-xs"
              >
                XÁC NHẬN ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
