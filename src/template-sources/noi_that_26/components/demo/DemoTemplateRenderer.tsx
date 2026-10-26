'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  ShoppingBasket,
  ChevronDown,
  ChevronUp,
  Forward,
  Plane,
  Headphones,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Trash2
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat26Data,
  type NoiThat26TemplateData,
  type BedaDealProduct
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

const formatVND = (amount: number) =>
  `${amount.toLocaleString('vi-VN')} ₫`;

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat26Data, data) as NoiThat26TemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<BedaDealProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<{ product: BedaDealProduct; qty: number }[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const addToCart = (product: BedaDealProduct) => {
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

  const filteredDeals = useMemo(() => {
    return templateData.dealsSection.products.filter((p) => {
      const matchCat =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchQuery =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [templateData.dealsSection.products, selectedCategory, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentHero =
    templateData.heroSlides[activeHeroSlide % templateData.heroSlides.length] ||
    templateData.heroSlides[0];

  const row1Tiles = templateData.categoriesSection.tiles.filter((t) => t.row === 1);
  const row2Tiles = templateData.categoriesSection.tiles.filter((t) => t.row === 2);

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f59121] selection:text-white"
    >
      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#f59121] text-white px-4 py-3 rounded shadow-xl text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Top White Header (Search Left | Logo Center | Cart Right) */}
      <header className="bg-white sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1140px] mx-auto px-4 py-3.5 grid grid-cols-2 md:grid-cols-3 items-center gap-4">
          {/* Left: Rounded Pill Search */}
          <div className="hidden md:flex items-center">
            <div className="relative w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={templateData.business.searchPlaceholder}
                className="w-full h-8 pl-4 pr-9 rounded-full bg-[#f5f5f5] border border-slate-200/80 text-xs text-slate-700 focus:outline-none focus:border-[#f59121]"
              />
              <button
                type="button"
                onClick={() => scrollToSection('section-deals')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f59121]"
                aria-label="Tìm kiếm"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center: Beda Furniture MONA Logo */}
          <div className="flex items-center md:justify-center">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="flex items-center gap-2.5"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f59121] to-amber-400 text-white flex items-center justify-center font-black text-lg shadow-xs">
                B
              </div>
              <div className="leading-none">
                <div className="text-base italic font-serif text-slate-700">
                  {templateData.business.brandTitle}
                </div>
                <div className="text-lg font-black tracking-wider text-slate-800 uppercase">
                  {templateData.business.brandSub}
                </div>
              </div>
            </a>
          </div>

          {/* Right: CART */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#f59121] hover:text-[#d97706] transition"
            >
              <span>
                GIỎ HÀNG {totalCartItems > 0 ? `(${totalCartItems})` : ''}
              </span>
              <ShoppingBasket className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. Solid Orange Navigation Bar (#f59121) */}
        <nav className="bg-[#f59121] text-white">
          <div className="max-w-[1140px] mx-auto px-4 h-10 flex items-center justify-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar text-[11px] font-extrabold uppercase tracking-wider">
            {templateData.navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.targetId)}
                className="flex items-center gap-1 whitespace-nowrap hover:text-amber-100 transition py-2"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* 3. Full-Width Contemporary Living Room Hero Banner */}
      <section className="relative h-[420px] sm:h-[520px] bg-slate-900 overflow-hidden flex items-center">
        <img
          src={currentHero.image}
          alt={currentHero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/30 to-transparent" />

        <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full">
          <div className="max-w-xl text-white space-y-2.5">
            <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide drop-shadow">
              {currentHero.title}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-white/95 drop-shadow">
              {currentHero.subtitle}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('section-deals')}
                className="px-5 py-1.5 border border-white text-white hover:bg-[#f59121] hover:border-[#f59121] text-[11px] font-bold uppercase tracking-wider transition"
              >
                {currentHero.ctaLabel}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Slider Indicator Bars */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {templateData.heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveHeroSlide(idx)}
              className={`h-1.5 w-8 transition ${
                idx === activeHeroSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Hero slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4. PRODUCTS (4x2 Checkerboard Category Grid matching NT029 screenshot) */}
      <section id="section-products" className="py-12 px-4 max-w-[1060px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#f59121]">
            {templateData.categoriesSection.heading}
          </h2>
          <div className="w-10 h-0.5 bg-[#f59121] mx-auto mt-1.5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-100">
          {/* Row 1: [Image 1] [Beige Text 1] [Image 2] [Beige Text 2] */}
          {row1Tiles.map((tile) => (
            <React.Fragment key={tile.id}>
              {/* Image Cell */}
              <div
                onClick={() => {
                  setSelectedCategory(tile.categoryKey);
                  scrollToSection('section-deals');
                }}
                className="h-60 bg-white p-6 flex items-center justify-center overflow-hidden cursor-pointer group"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Warm Beige Text Cell (#f7eccf) */}
              <div className="h-60 bg-[#f7eccf] p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-sm font-extrabold text-[#f59121] tracking-wide">
                  {tile.title}
                </h3>
                <p className="text-[11px] text-slate-600 mt-1 mb-3">
                  {tile.subtitle}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(tile.categoryKey);
                    scrollToSection('section-deals');
                  }}
                  className="px-4 py-1.5 bg-[#f59121] hover:bg-[#dc7c10] text-white text-[10px] font-extrabold uppercase rounded-xs transition shadow-2xs"
                >
                  {tile.ctaLabel}
                </button>
              </div>
            </React.Fragment>
          ))}

          {/* Row 2: [Beige Text 3] [Image 3] [Beige Text 4] [Image 4] */}
          {row2Tiles.map((tile, idx) => (
            <React.Fragment key={tile.id}>
              {/* Warm Beige Text Cell (#f7eccf) */}
              <div className="h-60 bg-[#f7eccf] p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-sm font-extrabold text-[#f59121] tracking-wide uppercase">
                  {tile.title}
                </h3>
                <p className="text-[11px] text-slate-600 mt-1 mb-3">
                  {tile.subtitle}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(tile.categoryKey);
                    scrollToSection('section-deals');
                  }}
                  className="px-4 py-1.5 bg-[#f59121] hover:bg-[#dc7c10] text-white text-[10px] font-extrabold uppercase rounded-xs transition shadow-2xs"
                >
                  {tile.ctaLabel}
                </button>
              </div>

              {/* Image Cell */}
              <div
                onClick={() => {
                  setSelectedCategory(tile.categoryKey);
                  scrollToSection('section-deals');
                }}
                className={`h-60 overflow-hidden cursor-pointer group flex items-center justify-center ${
                  idx === 1 ? 'bg-[#e6f5ea] p-6' : 'bg-white'
                }`}
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className={`w-full h-full ${
                    idx === 1 ? 'object-contain' : 'object-cover'
                  } group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 5. FANTASTIC DEAL / ƯU ĐÃI TUYỆT VỜI (4x2 = 8 Products Grid with circular orange discount badge) */}
      <section id="section-deals" className="py-8 px-4 max-w-[1060px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#f59121]">
            {templateData.dealsSection.heading}
          </h2>
          <div className="w-10 h-0.5 bg-[#f59121] mx-auto mt-1.5" />
          {selectedCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs text-[#f59121] underline font-semibold"
            >
              Xem tất cả sản phẩm ưu đãi
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredDeals.map((product) => (
            <div
              key={product.id}
              className="bg-white flex flex-col justify-between items-center text-center relative group p-2"
            >
              {/* Circular Orange Discount Badge in Top-Left */}
              <span className="absolute top-2 left-2 z-10 w-9 h-9 rounded-full bg-[#f59121] text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
                -{product.discountPercent}%
              </span>

              <div
                onClick={() => setSelectedProduct(product)}
                className="w-full cursor-pointer flex-1 flex flex-col items-center justify-between"
              >
                <div className="h-44 w-full flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="pt-3 space-y-1.5">
                  <h3 className="text-xs text-slate-600 group-hover:text-[#f59121] font-medium line-clamp-2 min-h-[32px] px-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    <span className="text-slate-400 line-through text-[11px]">
                      {formatVND(product.oldPrice)}
                    </span>
                    <span className="font-extrabold text-slate-900">
                      {formatVND(product.price)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-3 opacity-90 group-hover:opacity-100 text-[11px] font-bold text-[#f59121] hover:bg-[#f59121] hover:text-white border border-[#f59121] px-4 py-1 rounded-xs transition"
              >
                + Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Split 2-Column Lifestyle Promotional Banners */}
      <section id="section-promos" className="mt-8 grid grid-cols-1 md:grid-cols-2">
        {/* Left Banner: BEST OFFERS from Elle 15% Off */}
        <div className="relative h-[320px] sm:h-[360px] overflow-hidden group flex items-center justify-end pr-8 sm:pr-16">
          <img
            src={templateData.splitPromos.left.image}
            alt={templateData.splitPromos.left.topLabel}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-stone-900/45" />
          <div className="relative z-10 text-center text-white space-y-1">
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-widest">
              {templateData.splitPromos.left.topLabel}
            </p>
            <p className="text-sm font-light tracking-widest">
              {templateData.splitPromos.left.fromLabel}
            </p>
            <p className="text-5xl sm:text-6xl font-serif italic py-1">
              {templateData.splitPromos.left.scriptBrand}
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold tracking-wide">
              {templateData.splitPromos.left.discountText}
            </p>
          </div>
        </div>

        {/* Right Banner: Stylish Interior Sofas LUIGIANO */}
        <div className="relative h-[320px] sm:h-[360px] overflow-hidden group flex items-center justify-center p-6">
          <img
            src={templateData.splitPromos.right.image}
            alt={templateData.splitPromos.right.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="relative z-10 text-center space-y-2.5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {templateData.splitPromos.right.title}
            </h3>
            <p className="text-xl sm:text-2xl font-light tracking-[0.25em] text-slate-800 uppercase">
              {templateData.splitPromos.right.brandName}
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => scrollToSection('section-deals')}
                className="px-7 py-2.5 bg-[#262b30] hover:bg-[#f59121] text-white text-xs font-extrabold uppercase tracking-wider transition"
              >
                {templateData.splitPromos.right.ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Floating 3-Column Service Guarantee Card */}
      <section className="max-w-[1000px] mx-auto px-4 py-12">
        <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-slate-100 py-7 px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          {templateData.serviceHighlights.map((srv) => (
            <div
              key={srv.id}
              className="flex flex-col items-center text-center px-4 py-3 md:py-0"
            >
              <div className="text-slate-500 mb-2">
                {srv.iconType === 'warranty' && <Forward className="w-6 h-6" />}
                {srv.iconType === 'shipping' && <Plane className="w-6 h-6" />}
                {srv.iconType === 'support' && <Headphones className="w-6 h-6" />}
              </div>
              <h4 className="text-xs font-extrabold uppercase text-[#f59121] tracking-wide">
                {srv.title}
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 max-w-[230px] leading-relaxed">
                {srv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. EMAIL NEWSLETTER Full-Width Banner */}
      <section
        id="section-newsletter"
        className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center px-4"
      >
        <img
          src={templateData.newsletter.backgroundImage}
          alt={templateData.newsletter.heading}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-200/75" />

        <div className="relative z-10 max-w-xl w-full text-center space-y-5">
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#f59121]">
              {templateData.newsletter.heading}
            </h2>
            <div className="w-10 h-0.5 bg-[#f59121] mx-auto mt-1.5" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail.trim()) {
                showToast(`Cảm ơn bạn đã đăng ký bản tin Beda Furniture!`);
                setNewsletterEmail('');
              }
            }}
            className="flex shadow-sm"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder={templateData.newsletter.placeholder}
              className="flex-1 h-9 px-4 bg-white text-xs text-slate-700 focus:outline-none"
            />
            <button
              type="submit"
              className="h-9 px-6 bg-[#f59121] hover:bg-[#dc7c10] text-white text-[11px] font-extrabold uppercase tracking-wider transition"
            >
              {templateData.newsletter.buttonLabel}
            </button>
          </form>
        </div>
      </section>

      {/* 9. White 3-Column Footer + Solid Orange Copyright Bar */}
      <footer id="section-footer" className="bg-white pt-12 text-xs text-slate-600">
        <div className="max-w-[1000px] mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold text-slate-900 text-center md:text-left mb-3">
              Liên Kết
            </h4>
            <ul className="divide-y divide-slate-200 text-[11px]">
              {templateData.navigation.slice(0, 4).map((item) => (
                <li key={item.id} className="py-1.5">
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.targetId)}
                    className="hover:text-[#f59121] transition capitalize"
                  >
                    {item.label.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Center Brand & Inline Signup (6 cols) */}
          <div className="md:col-span-6 flex flex-col items-center text-center space-y-3 px-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f59121] text-white flex items-center justify-center font-black">
                B
              </div>
              <div className="text-left leading-none">
                <div className="text-sm italic font-serif text-slate-700">
                  {templateData.business.brandTitle}
                </div>
                <div className="text-base font-black text-slate-800 uppercase">
                  {templateData.business.brandSub}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed">
              {templateData.business.description}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (footerEmail.trim()) {
                  showToast('Đã đăng ký nhận ưu đãi thành viên Beda!');
                  setFooterEmail('');
                }
              }}
              className="flex w-full max-w-xs border border-slate-200"
            >
              <input
                type="email"
                required
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="flex-1 h-8 px-3 text-[11px] focus:outline-none"
              />
              <button
                type="submit"
                className="h-8 px-4 bg-[#f59121] hover:bg-[#dc7c10] text-white text-[10px] font-extrabold uppercase transition"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>

          {/* Col 3: Contact Us (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 text-[11px]">
            <h4 className="text-xs font-extrabold text-slate-900 mb-3">
              Liên Hệ
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
              <span>{templateData.business.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-800 shrink-0" />
              <span>{templateData.business.phone[0]}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0" />
              <span>{templateData.business.email[0]}</span>
            </p>
          </div>
        </div>

        {/* Bottom Solid Orange Bar */}
        <div className="bg-[#f59121] text-white py-3 px-4 text-center text-[11px] relative">
          <span>
            © Thiết kế và lập trình bởi{' '}
            <strong>BEDA MONA.Media / Website</strong>
          </span>
          <button
            type="button"
            onClick={() => scrollToSection('top')}
            className="fixed bottom-4 right-4 z-30 w-8 h-8 rounded-full border border-slate-700 bg-white/90 text-slate-800 hover:bg-[#f59121] hover:text-white hover:border-[#f59121] flex items-center justify-center transition shadow-xs"
            aria-label="Lên đầu trang"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f59121] text-white px-5 py-3 flex items-center justify-between text-xs font-extrabold uppercase">
              <span>
                {selectedProduct.categoryLabel} • Mã SP: {selectedProduct.code}
              </span>
              <button type="button" onClick={() => setSelectedProduct(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center text-xs">
              <div className="h-56 border border-slate-100 p-3 flex items-center justify-center relative">
                <span className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#f59121] text-white text-[10px] font-bold flex items-center justify-center">
                  -{selectedProduct.discountPercent}%
                </span>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-2.5">
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 line-through">
                    {formatVND(selectedProduct.oldPrice)}
                  </span>
                  <span className="text-lg font-black text-[#f59121]">
                    {formatVND(selectedProduct.price)}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="bg-[#f7eccf]/50 p-2.5 rounded space-y-1 text-slate-700">
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
                  className="w-full bg-[#f59121] hover:bg-[#dc7c10] text-white font-extrabold py-2.5 rounded-xs uppercase transition"
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
            <div className="p-4 bg-[#f59121] text-white flex items-center justify-between text-xs font-extrabold uppercase">
              <span>Giỏ Hàng Beda Furniture ({totalCartItems})</span>
              <button type="button" onClick={() => setCartOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs">
                  Chưa có sản phẩm nào trong giỏ hàng.
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
                      <p className="text-[#f59121] font-bold mt-0.5">
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
                <span className="text-[#f59121]">
                  {formatVND(totalCartAmount)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setCartOpen(false);
                  showToast('Đặt hàng thành công! Beda Furniture sẽ liên hệ giao lắp.');
                }}
                className="w-full py-2.5 bg-[#f59121] hover:bg-[#dc7c10] disabled:bg-slate-300 text-white text-xs font-extrabold uppercase rounded-xs transition"
              >
                HOÀN TẤT ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
