'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Leaf,
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
  Send,
  Check,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang9Data,
  VuonRauProductItem,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, any>;
  customData?: Record<string, any>;
  templateKey?: string;
}

export function DemoTemplateRenderer({
  data: incomingData,
  customData,
}: DemoTemplateRendererProps) {
  const data: NhaHang9Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [activeNav, setActiveNav] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<VuonRauProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2600);
  };

  const bestSellerProducts = useMemo(() => {
    const base = data.products.filter((p) => p.isBestSeller);
    const q = searchQuery.trim().toLowerCase();
    return base.filter((item) => {
      const matchCat = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [data.products, selectedCategory, searchQuery]);

  const flashSaleProducts = useMemo(
    () => data.products.filter((p) => p.isFlashSale),
    [data.products]
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-slate-800 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#6DBE45] text-white px-4 py-3 rounded-full shadow-xl text-xs font-bold">
          <Check className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. FULL-BLEED ORGANIC HERO WITH TRANSPARENT HEADER OVERLAY */}
      <section className="relative min-h-[540px] lg:min-h-[600px] flex flex-col justify-between overflow-hidden">
        {/* Background Photo */}
        <img
          src={data.hero.image}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />

        {/* Transparent Top Navbar */}
        <header className="relative z-20 max-w-[1140px] w-full mx-auto px-4 pt-5 flex items-center justify-between gap-4">
          {/* Logo "Mona / VườnRau" */}
          <a href="#top" className="flex items-center gap-1.5 text-white group">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center">
              Vườn
              <span className="relative inline-flex items-center text-[#6DBE45] mx-0.5">
                <Leaf className="w-5 h-5 fill-[#6DBE45] -mt-2" />
              </span>
              Rau
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-xs font-semibold text-white/90">
            {data.navItems.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setActiveNav(idx);
                  if (idx === 2) scrollToId('bestsellers');
                  if (idx === 4) scrollToId('news-section');
                  if (idx === 5) scrollToId('footer-section');
                }}
                className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeNav === idx
                    ? 'bg-[#6DBE45] text-white font-bold shadow-sm'
                    : 'hover:text-[#6DBE45]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Translucent Search Input */}
          <div className="relative w-44 sm:w-56">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm..."
              className="w-full pl-3.5 pr-8 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/30 text-xs text-white placeholder:text-white/75 focus:outline-none focus:bg-white/35"
            />
            <Search className="w-3.5 h-3.5 text-white/80 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </header>

        {/* Hero Center Typography */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center text-white my-auto">
          <p className="text-base sm:text-xl font-medium uppercase tracking-widest text-white/95 drop-shadow">
            {data.hero.badge}
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white drop-shadow-lg">
            {data.hero.title}
          </h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-white/90 font-medium max-w-xl mx-auto drop-shadow">
            {data.hero.subtitle}
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => scrollToId('bestsellers')}
              className="inline-flex items-center gap-1.5 px-7 py-2.5 rounded-full bg-[#6DBE45] hover:bg-[#5aa835] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <span>{data.hero.primaryCta}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Spacer for Overlapping Category Bar */}
        <div className="h-10" />
      </section>

      {/* 2. OVERLAPPING 6-CATEGORY ICON STRIP */}
      <section className="relative z-20 -mt-12 max-w-[1060px] mx-auto px-4">
        <div className="bg-white rounded shadow-md border border-slate-100 py-5 px-4 grid grid-cols-3 sm:grid-cols-6 gap-4">
          {data.categoryStrip.map((cat) => {
            const isSelected = selectedCategory === cat.filterKey;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(isSelected ? 'ALL' : cat.filterKey);
                  scrollToId('bestsellers');
                }}
                className={`group flex flex-col items-center text-center p-2 rounded transition-all cursor-pointer ${
                  isSelected ? 'bg-emerald-50/70 ring-1 ring-[#6DBE45]' : 'hover:bg-slate-50'
                }`}
              >
                <div className="w-14 h-12 rounded-full overflow-hidden mb-2 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-[#6DBE45]">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. 2-COLUMN PASTEL PROMO BANNERS (HEALTHY FOOD & GREEN WORLD) */}
      <section className="max-w-[1060px] mx-auto px-4 mt-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.promoCards.map((card) => (
            <div
              key={card.id}
              style={{ backgroundColor: card.bgColor }}
              className="relative rounded overflow-hidden p-7 sm:p-8 flex items-center justify-between min-h-[210px] shadow-xs border border-black/5 group"
            >
              <div className="relative z-10 max-w-[58%] space-y-1.5">
                <span
                  style={{ color: card.accentColor }}
                  className="block text-sm font-extrabold uppercase tracking-wide"
                >
                  {card.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-none">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pt-0.5">
                  {card.discountText}
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => scrollToId('bestsellers')}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white hover:bg-[#6DBE45] text-slate-700 hover:text-white text-[11px] font-bold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{card.ctaText}</span>
                    <span>▸</span>
                  </button>
                </div>
              </div>

              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shrink-0 shadow-md border-4 border-white/70 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SẢN PHẨM BÁN CHẠY (4-Column Clean White Container) */}
      <section id="bestsellers" className="max-w-[1060px] mx-auto px-4 mt-7">
        <div className="bg-white rounded shadow-xs border border-slate-100 py-8 px-6">
          <div className="flex flex-col items-center text-center mb-7">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
              {data.bestSellerHeading}
            </h2>
            {selectedCategory !== 'ALL' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('ALL')}
                className="mt-2 text-xs text-[#6DBE45] hover:underline font-semibold cursor-pointer"
              >
                Đang lọc: {selectedCategory} (Xem tất cả)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {(bestSellerProducts.length > 0 ? bestSellerProducts : data.products.slice(0, 4)).map(
              (product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group flex flex-col items-center text-center p-3 rounded-lg hover:shadow-md transition-all cursor-pointer bg-white"
                >
                  <div className="w-full h-44 flex items-center justify-center overflow-hidden rounded mb-3 bg-slate-50/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-40 h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-[#6DBE45] transition-colors">
                    {product.name}
                  </h4>
                  <span className="mt-1 text-xs font-bold text-[#6DBE45]">
                    {product.price}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 5. DARK FOLIAGE FLASH SALE SECTION ("ĐANG KHUYẾN MÃI" + 3 GREEN CIRCLES) */}
      <section className="relative mt-10 py-14 overflow-hidden bg-[#0E1912]">
        <img
          src={data.flashSale.bgImage}
          alt={data.flashSale.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

        <div className="relative z-10 max-w-[1060px] mx-auto px-4">
          {/* Top White Headings */}
          <div className="text-center text-white space-y-1.5">
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/90">
              {data.flashSale.subtitle}
            </p>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              {data.flashSale.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              {data.flashSale.description}
            </p>
          </div>

          {/* 3 Green Circular Countdown Timers Overlapping Top Border */}
          <div className="relative z-20 mt-7 -mb-7 flex items-center justify-center gap-3">
            {[
              { val: data.flashSale.countdown.hours, label: 'GIỜ' },
              { val: data.flashSale.countdown.minutes, label: 'PHÚT' },
              { val: data.flashSale.countdown.seconds, label: 'GIÂY' },
            ].map((t, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-full bg-[#6DBE45] border-2 border-white text-white flex flex-col items-center justify-center shadow-lg"
              >
                <span className="text-sm font-black leading-none">{t.val}</span>
                <span className="text-[9px] font-bold uppercase mt-0.5">{t.label}</span>
              </div>
            ))}
          </div>

          {/* White 4-Column Flash Sale Card Container with Green Top Border */}
          <div className="relative bg-white rounded shadow-2xl border-t-4 border-[#6DBE45] pt-11 pb-7 px-6">
            <button
              type="button"
              onClick={() => triggerToast('Đang chuyển sang ưu đãi nông sản tiếp theo...')}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-100 hover:bg-[#6DBE45] hover:text-white items-center justify-center text-slate-500 transition-colors cursor-pointer"
              aria-label="Trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => triggerToast('Đang chuyển sang ưu đãi nông sản tiếp theo...')}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-100 hover:bg-[#6DBE45] hover:text-white items-center justify-center text-slate-500 transition-colors cursor-pointer"
              aria-label="Tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {flashSaleProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group cursor-pointer flex flex-col items-center text-center"
                >
                  <div className="relative w-full h-44 overflow-hidden rounded mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-[#6DBE45] text-white text-[10px] font-bold shadow">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2 left-2 w-7 h-7 rounded bg-white/90 text-slate-700 flex items-center justify-center shadow">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#6DBE45] line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="mt-1 flex items-center justify-center gap-2 text-xs">
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through text-[11px]">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="font-bold text-[#6DBE45]">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER TESTIMONIAL & 5 VINTAGE PARTNER BADGES */}
      <section className="py-12 bg-[#F5F5F5] border-b border-slate-200/80">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md mb-4">
            <img
              src={data.testimonial.avatar}
              alt={data.testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>

          <blockquote className="max-w-2xl mx-auto text-xs sm:text-sm italic text-slate-600 leading-relaxed">
            “ {data.testimonial.quote} ”
          </blockquote>

          <p className="mt-3 text-xs text-slate-800">
            <strong className="font-extrabold">{data.testimonial.author}</strong>{' '}
            <span className="text-slate-500">/ {data.testimonial.source}</span>
          </p>

          {/* 5 Partner Logos Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
            {data.partnerBadges.map((b) => (
              <div
                key={b.id}
                className="flex flex-col items-center justify-center py-3 px-2 border border-slate-300/80 rounded bg-white/60 text-slate-700 hover:border-[#6DBE45] transition-colors"
              >
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold">
                  {b.topText}
                </span>
                <span className="text-sm font-black tracking-wider text-slate-800 my-0.5">
                  {b.mainText}
                </span>
                <span className="text-[9px] italic text-slate-500">{b.subText}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIN TỨC (3-Column Blog Grid) */}
      <section id="news-section" className="py-12 max-w-[1060px] mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-black uppercase text-center text-slate-900 mb-8">
          {data.newsHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.news.map((item) => (
            <article
              key={item.id}
              onClick={() => triggerToast(`Đang mở bài viết: ${item.title}`)}
              className="group bg-white rounded overflow-hidden shadow-xs border border-slate-100 hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#6DBE45] text-white text-[10px] font-bold">
                  {item.badge}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-[#6DBE45] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#6DBE45] mt-1">
                    {item.date}
                  </p>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. DARK NEWSLETTER BANNER ("ĐĂNG KÝ NGAY / GIẢM GIÁ 30% ĐƠN HÀNG") */}
      <section className="bg-[#182026] py-10 px-4 text-center text-white">
        <div className="max-w-xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
            {data.newsletter.subtitle}
          </p>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-[#6DBE45]">
            {data.newsletter.title}
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!emailInput.trim()) return;
              triggerToast(`Đã gửi mã giảm 30% tới ${emailInput}!`);
              setEmailInput('');
            }}
            className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder={data.newsletter.placeholder}
              className="w-full sm:flex-1 px-4 py-2.5 rounded-full bg-white text-slate-800 text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#D9534F] hover:bg-[#c9302c] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {data.newsletter.buttonText}
            </button>
          </form>
        </div>
      </section>

      {/* 9. DARK 5-COLUMN FOOTER (#23292D) */}
      <footer id="footer-section" className="bg-[#23292D] text-slate-300 text-xs">
        <div className="max-w-[1060px] mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-1 text-white">
              <span className="text-2xl font-extrabold tracking-tight flex items-center">
                Vườn
                <Leaf className="w-5 h-5 fill-[#6DBE45] text-[#6DBE45] mx-0.5 -mt-1.5" />
                Rau
              </span>
            </div>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                <span>{data.business.phone[0]}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                <span>
                  {data.business.email[0]}
                  <br />
                  {data.business.email[1]}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 2: SẢN PHẨM (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              SẢN PHẨM
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {['Rau củ', 'Món chay', 'Trái cây', 'Đồ uống', 'Nấm & Đậu hũ'].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(item);
                      scrollToId('bestsellers');
                    }}
                    className="hover:text-[#6DBE45] transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: DANH MỤC (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              DANH MỤC
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {data.navItems.slice(0, 5).map((item, idx) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollToId('top')}
                    className={`hover:text-[#6DBE45] transition-colors cursor-pointer ${
                      idx === 0 ? 'text-[#6DBE45] font-semibold' : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: DỊCH VỤ (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              DỊCH VỤ
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {['Rau củ hữu cơ', 'Đặt bàn chay', 'Trái cây Đà Lạt', 'Nước ép Detox', 'Set lẩu nấm'].map(
                (srv) => (
                  <li key={srv}>
                    <button
                      type="button"
                      onClick={() => scrollToId('bestsellers')}
                      className="hover:text-[#6DBE45] transition-colors cursor-pointer"
                    >
                      {srv}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 5: ĐĂNG KÝ (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              ĐĂNG KÝ
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Đăng ký để nhận được thông tin thực đơn chay mới nhất từ chúng tôi.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!footerEmail.trim()) return;
                triggerToast(`Cảm ơn ${footerEmail} đã đăng ký bản tin Vườn Rau!`);
                setFooterEmail('');
              }}
              className="relative flex items-center"
            >
              <input
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Email..."
                className="w-full pl-3 pr-8 py-1.5 rounded bg-white text-slate-800 text-[11px] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 text-[#6DBE45] hover:text-emerald-700 cursor-pointer"
                aria-label="Gửi"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="bg-[#1B2023] py-3 text-center text-[11px] text-slate-500 border-t border-white/5">
          © Bản quyền thuộc về {data.business.name} • Nông Sản Hữu Cơ & Ẩm Thực Chay Thực Dưỡng
        </div>
      </footer>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-56">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <span className="text-[11px] font-bold uppercase text-[#6DBE45]">
                {selectedProduct.category} • {selectedProduct.unit}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-black text-[#6DBE45]">
                  {selectedProduct.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    triggerToast(`Đã đặt mua "${selectedProduct.name}"!`);
                    setSelectedProduct(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#6DBE45] hover:bg-[#5aa835] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đặt Mua Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
