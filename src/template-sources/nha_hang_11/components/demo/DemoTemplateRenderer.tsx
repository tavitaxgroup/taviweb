'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Award,
  Headphones,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Share2,
  Check,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang11Data,
  TetVietProductItem,
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
  const data: NhaHang11Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [activeNavIdx, setActiveNavIdx] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ item: TetVietProductItem; qty: number }[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<TetVietProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2600);
  };

  const handleAddCart = (item: TetVietProductItem) => {
    setCart((prev) => {
      const found = prev.find((p) => p.item.id === item.id);
      if (found) {
        return prev.map((p) => (p.item.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { item, qty: 1 }];
    });
    triggerToast(`Đã thêm "${item.name}" vào giỏ quà Tết!`);
  };

  const totalCartAmount = useMemo(() => {
    return cart.reduce((sum, entry) => {
      const val = parseInt(entry.item.price.replace(/[^\d]/g, ''), 10) || 0;
      return sum + val * entry.qty;
    }, 0);
  }, [cart]);

  const filterList = (key: TetVietProductItem['rowKey']) => {
    const base = data.products.filter((p) => p.rowKey === key);
    const q = searchQuery.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  };

  const bestSellers = useMemo(() => filterList('bestseller'), [data.products, searchQuery]);
  const hopQuaTet = useMemo(() => filterList('hop_qua_tet'), [data.products, searchQuery]);
  const gioTet = useMemo(() => filterList('gio_tet'), [data.products, searchQuery]);
  const sanPhamKhac = useMemo(
    () => filterList('san_pham_khac'),
    [data.products, searchQuery]
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderProductCard = (item: TetVietProductItem) => (
    <div
      key={item.id}
      onClick={() => setSelectedProduct(item)}
      className="group relative bg-white border border-slate-200/90 rounded-xs p-3 flex flex-col justify-between hover:border-[#A61B1B] hover:shadow-md transition-all cursor-pointer"
    >
      {item.discountBadge && (
        <span className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-[#D4AF37] text-white text-[10px] font-extrabold flex items-center justify-center shadow">
          {item.discountBadge}
        </span>
      )}

      <div>
        <div className="w-full aspect-square overflow-hidden rounded-xs bg-slate-50 mb-2.5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h4 className="text-xs font-semibold text-slate-700 text-center line-clamp-2 min-h-[34px] group-hover:text-[#A61B1B] transition-colors">
          {item.name}
        </h4>
      </div>

      <div className="mt-2 pt-1 text-center">
        <div className="flex items-center justify-center gap-1.5 text-xs">
          {item.originalPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              {item.originalPrice}
            </span>
          )}
          <span className="font-extrabold text-[#A61B1B]">{item.price}</span>
        </div>
      </div>
    </div>
  );

  const renderOrnamentalDivider = (gold = false) => (
    <div className="flex items-center justify-center gap-2 my-2">
      <span className={`w-8 h-[1px] ${gold ? 'bg-[#E5A93C]' : 'bg-[#A61B1B]'}`} />
      <span
        className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold ${
          gold ? 'bg-[#E5A93C] text-[#3A0608]' : 'bg-[#A61B1B] text-white'
        }`}
      >
        ❀
      </span>
      <span className={`w-8 h-[1px] ${gold ? 'bg-[#E5A93C]' : 'bg-[#A61B1B]'}`} />
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#9E1115] text-white px-4 py-3 rounded-lg shadow-xl text-xs font-bold border border-[#E5A93C]/50">
          <Check className="w-4 h-4 text-[#E5A93C] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. TOP UTILITY BAR + IMPERIAL BURGUNDY HERO BANNER */}
      <div className="bg-[#290406] text-white/90 text-[11px] border-b border-white/10">
        <div className="max-w-[1060px] mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span>
              <strong className="text-[#E5A93C]">HOTLINE:</strong> {data.topBar.hotline}
            </span>
            <span className="hidden sm:inline">
              <strong className="text-[#E5A93C]">EMAIL:</strong> {data.topBar.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => triggerToast('Chức năng đăng nhập thành viên VIP Mona Tết Việt!')}
              className="hover:text-[#E5A93C] cursor-pointer"
            >
              {data.topBar.loginLabel}
            </button>
            <button
              type="button"
              onClick={() =>
                triggerToast(
                  cart.length > 0
                    ? `Giỏ hàng đang có ${cart.length} món (${totalCartAmount.toLocaleString('vi-VN')} ₫)`
                    : 'Giỏ quà Tết của bạn đang trống!'
                )
              }
              className="inline-flex items-center gap-1 hover:text-[#E5A93C] cursor-pointer"
            >
              <span>
                Giỏ hàng /{' '}
                {totalCartAmount > 0 ? `${totalCartAmount.toLocaleString('vi-VN')} ₫` : '0 ₫'}
              </span>
              <ShoppingBag className="w-3.5 h-3.5 text-[#E5A93C]" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[380px] sm:min-h-[430px] bg-[#3B0609] text-white overflow-hidden flex flex-col justify-between">
        <img
          src={data.hero.image}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A0406]/95 via-[#4A080C]/80 to-[#2A0406]/90" />

        {/* Header Navigation inside Hero */}
        <header className="relative z-20 max-w-[1060px] w-full mx-auto px-4 pt-4 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded border border-[#E5A93C] bg-[#7A0C10] flex items-center justify-center font-black text-xs text-[#E5A93C]">
              TẾT
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-black tracking-wider text-white">
                MONA
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#E5A93C]">
                TẾT VIỆT
              </span>
            </div>
          </a>

          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-6 text-xs font-bold">
              {data.navLinks.map((lnk, idx) => (
                <button
                  key={lnk}
                  type="button"
                  onClick={() => {
                    setActiveNavIdx(idx);
                    if (idx === 1) scrollToId('philosophy-section');
                    if (idx === 2) scrollToId('catalog-section');
                    if (idx === 3) scrollToId('story-section');
                    if (idx === 4) scrollToId('footer-section');
                  }}
                  className={`transition-colors cursor-pointer ${
                    activeNavIdx === idx
                      ? 'text-[#E5A93C]'
                      : 'text-white hover:text-[#E5A93C]'
                  }`}
                >
                  {lnk}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-[#E5A93C] cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </header>

        {searchOpen && (
          <div className="relative z-20 max-w-md mx-auto w-full px-4 pt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm giỏ quà Tết, hộp bánh cung đình, khay mứt..."
              className="w-full px-4 py-1.5 rounded-full bg-white text-slate-800 text-xs focus:outline-none"
            />
          </div>
        )}

        {/* Center Hero Typography */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 text-center my-auto space-y-2.5">
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-wide text-white drop-shadow">
            {data.hero.title}
          </h1>
          <p className="text-base sm:text-xl font-extrabold text-[#FDE68A]">
            {data.hero.highlight}
          </p>
          <p className="text-xs sm:text-sm italic text-white/90 leading-relaxed max-w-xl mx-auto">
            {data.hero.subtitle}
          </p>
        </div>

        <div className="h-4" />
      </section>

      {/* 2. 4-ROW × 5-COLUMN PRODUCT CATALOG SHOWCASE */}
      <section id="catalog-section" className="py-12 max-w-[1060px] mx-auto px-4 space-y-10">
        {/* Top Intro Heading + Row 1: SẢN PHẨM BÁN CHẠY */}
        <div>
          <div className="text-center mb-6">
            <p className="text-xs sm:text-sm font-bold text-[#A61B1B]">
              {data.catalogIntro.subtitle}
            </p>
            <h2 className="text-base sm:text-xl font-black uppercase text-[#A61B1B] mt-0.5">
              {data.catalogIntro.title}
            </h2>
            <h3 className="mt-4 text-lg sm:text-xl font-black uppercase text-slate-900">
              {data.catalogIntro.bestSellerHeading}
            </h3>
            {renderOrnamentalDivider(false)}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {bestSellers.map((item) => renderProductCard(item))}
          </div>
        </div>

        {/* Row 2: HỘP QUÀ TẾT */}
        <div>
          <div className="flex items-center justify-between mb-3 pb-1.5 border-b border-slate-100">
            <h3 className="text-sm font-black uppercase text-[#A61B1B]">
              {data.catalogIntro.row2Heading}
            </h3>
            <button
              type="button"
              onClick={() => triggerToast('Đang mở toàn bộ danh mục Hộp Quà Tết!')}
              className="px-3.5 py-1 rounded-full bg-[#A61B1B] hover:bg-[#821212] text-white text-[10px] font-bold uppercase cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {hopQuaTet.map((item) => renderProductCard(item))}
          </div>
        </div>

        {/* Row 3: GIỎ TẾT */}
        <div>
          <div className="flex items-center justify-between mb-3 pb-1.5 border-b border-slate-100">
            <h3 className="text-sm font-black uppercase text-[#A61B1B]">
              {data.catalogIntro.row3Heading}
            </h3>
            <button
              type="button"
              onClick={() => triggerToast('Đang mở toàn bộ danh mục Giỏ Tết Đoàn Viên!')}
              className="px-3.5 py-1 rounded-full bg-[#A61B1B] hover:bg-[#821212] text-white text-[10px] font-bold uppercase cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {gioTet.map((item) => renderProductCard(item))}
          </div>
        </div>

        {/* Row 4: SẢN PHẨM KHÁC */}
        <div>
          <div className="flex items-center justify-between mb-3 pb-1.5 border-b border-slate-100">
            <h3 className="text-sm font-black uppercase text-[#A61B1B]">
              {data.catalogIntro.row4Heading}
            </h3>
            <button
              type="button"
              onClick={() => triggerToast('Đang mở danh mục Khay Mứt & Phụ Kiện Tết!')}
              className="px-3.5 py-1 rounded-full bg-[#A61B1B] hover:bg-[#821212] text-white text-[10px] font-bold uppercase cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {sanPhamKhac.map((item) => renderProductCard(item))}
          </div>
        </div>
      </section>

      {/* 3. FESTIVE STORY, DUAL 3-COLUMN GALLERY & POETIC BANNER */}
      <section id="story-section" className="pt-6">
        {/* Top Gold Text on White + First 3-Image Gallery Overlapping Dark Banner */}
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <p className="text-[11px] sm:text-xs text-[#C68B2C] italic">
            {data.festiveMidBanner.topIntroLine1}
          </p>
          <p className="text-[11px] sm:text-xs text-[#C68B2C] italic mt-1">
            {data.festiveMidBanner.topIntroLine2}
          </p>

          <div className="relative z-10 mt-6 -mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.festiveMidBanner.topGallery.map((imgUrl, idx) => (
              <div
                key={`top-gal-${idx}`}
                className="aspect-[4/3] rounded-xs overflow-hidden shadow-lg border-2 border-[#A61B1B]"
              >
                <img
                  src={imgUrl}
                  alt={`Mâm quà Tết ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Crimson Fireworks Story Section */}
        <div className="bg-gradient-to-b from-[#3B0609] via-[#260406] to-[#1A0304] text-white pt-24 pb-12 px-4">
          <div className="max-w-[1000px] mx-auto text-center space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {data.festiveMidBanner.mainTitle}
            </h2>
            <p className="text-xs sm:text-sm font-extrabold text-white">
              {data.festiveMidBanner.subTitle}
            </p>
            <p className="text-[11px] text-[#E5A93C] italic pt-1">
              {data.festiveMidBanner.descLine1}
            </p>
            <p className="text-[11px] text-[#E5A93C] italic max-w-2xl mx-auto">
              {data.festiveMidBanner.descLine2}
            </p>

            {/* Second 3-Column Gold-Framed Gallery */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.festiveMidBanner.bottomGallery.map((imgUrl, idx) => (
                <div
                  key={`bot-gal-${idx}`}
                  className="aspect-[4/3] rounded-xs overflow-hidden shadow-xl border-2 border-[#E5A93C]/80"
                >
                  <img
                    src={imgUrl}
                    alt={`Đoàn viên Tết ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Poetic 2-Column Dragon Banner */}
          <div className="max-w-[1000px] mx-auto mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Festive Emblem (3 cols) */}
            <div className="md:col-span-3 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#A61B1B] to-[#E5A93C] p-1 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#2B0406] flex flex-col items-center justify-center text-center p-2">
                  <Sparkles className="w-6 h-6 text-[#E5A93C] mb-1" />
                  <span className="text-[10px] font-black uppercase text-[#E5A93C] tracking-wider">
                    LONG PHỤNG
                  </span>
                  <span className="text-[9px] text-white/80">SUM VẦY</span>
                </div>
              </div>
            </div>

            {/* Left Poem (5 cols) */}
            <div className="md:col-span-5 space-y-1 text-center md:text-left">
              <h4 className="text-sm font-extrabold text-[#E5A93C]">
                {data.festiveMidBanner.poemLeftTitle}
              </h4>
              {data.festiveMidBanner.poemLeftLines.map((line, idx) => (
                <p key={idx} className="text-[11px] text-white/90">
                  {line}
                </p>
              ))}
            </div>

            {/* Right Poem (4 cols) */}
            <div className="md:col-span-4 space-y-1 text-center md:text-left">
              <h4 className="text-sm font-extrabold text-[#E5A93C]">
                {data.festiveMidBanner.poemRightTitle}
              </h4>
              {data.festiveMidBanner.poemRightLines.map((line, idx) => (
                <p key={idx} className="text-[11px] text-white/90">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 2×2 TRUST & SERVICE BADGES */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-[640px] mx-auto px-4 grid grid-cols-2 gap-8 text-center">
          {data.trustBadges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mb-2 shadow-2xs">
                {badge.badgeType === 'new' && (
                  <span className="px-2 py-0.5 rounded-full bg-[#F59E0B] text-white text-[10px] font-black">
                    NEW
                  </span>
                )}
                {badge.badgeType === 'clean' && (
                  <ShieldCheck className="w-6 h-6 text-[#16A34A]" />
                )}
                {badge.badgeType === 'quality' && (
                  <Award className="w-6 h-6 text-[#D97706]" />
                )}
                {badge.badgeType === 'hotline' && (
                  <Headphones className="w-6 h-6 text-[#0284C7]" />
                )}
              </div>
              <span className="text-xs font-extrabold text-slate-800">{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ALTERNATING ZIG-ZAG PHILOSOPHY SECTION ("CHÂN – THIỆN – MỸ") */}
      <section id="philosophy-section" className="py-14 max-w-[920px] mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-base sm:text-lg font-extrabold text-[#A61B1B]">
            {data.philosophySection.subtitle}
          </h3>
          <p className="text-xs italic font-semibold text-slate-700 mt-1">
            {data.philosophySection.quote}
          </p>
          <h2 className="mt-2 text-lg sm:text-xl font-black uppercase text-[#A61B1B]">
            {data.philosophySection.valuesTitle}
          </h2>
          {renderOrnamentalDivider(false)}
        </div>

        <div className="space-y-0 border border-slate-100 shadow-xs">
          {data.philosophySection.rows.map((row) => {
            const isLeft = row.imagePosition === 'left';
            return (
              <div
                key={row.id}
                className="grid grid-cols-1 md:grid-cols-2 items-center bg-white"
              >
                {/* Image Column */}
                <div
                  className={`aspect-square md:aspect-[4/3] overflow-hidden ${
                    isLeft ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={row.image}
                    alt={row.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Column */}
                <div
                  className={`p-8 sm:p-10 space-y-3 ${
                    isLeft ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <h4 className="text-base sm:text-lg font-extrabold text-[#A61B1B]">
                    {row.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{row.excerpt}</p>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => triggerToast(`Đang mở câu chuyện: ${row.title}`)}
                      className="px-4 py-1.5 rounded-full bg-[#A61B1B] hover:bg-[#7f1313] text-white text-[11px] font-bold cursor-pointer"
                    >
                      {row.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. DARK BURGUNDY 2-COLUMN COMMITMENT & CUSTOMER REVIEW SECTION */}
      <section className="relative py-14 px-4 bg-[#380608] text-white overflow-hidden">
        <img
          src={data.commitmentSection.bgImage}
          alt="Cam kết khách hàng"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D0406]/95 via-[#3B0609]/85 to-[#2D0406]/95" />

        <div className="relative z-10 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Commitments */}
          <div>
            <div className="text-center mb-5">
              <h3 className="text-base sm:text-lg font-extrabold text-[#E5A93C]">
                {data.commitmentSection.leftTitle}
              </h3>
              {renderOrnamentalDivider(true)}
            </div>

            <ul className="space-y-3 text-xs text-white/90 leading-relaxed">
              {data.commitmentSection.commitments.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Customer Review */}
          <div>
            <div className="text-center mb-5">
              <h3 className="text-base sm:text-lg font-extrabold text-[#E5A93C]">
                {data.commitmentSection.rightTitle}
              </h3>
              {renderOrnamentalDivider(true)}
            </div>

            <div className="space-y-3 text-xs text-white/90 leading-relaxed">
              <p className="font-extrabold text-white">
                {data.commitmentSection.customerName}
              </p>
              <p className="text-white/85 leading-relaxed">
                {data.commitmentSection.customerQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK TRADITIONAL SEAL FOOTER (#141010) */}
      <footer id="footer-section" className="relative bg-[#141010] text-slate-300 text-xs overflow-hidden">
        {/* Decorative Traditional Seal Watermark in Center */}
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-56 h-56 border-4 border-red-500 rounded-lg rotate-12 flex items-center justify-center text-4xl font-black text-red-500 text-center leading-tight">
            PHÚ QUÝ
            <br />
            ĐOÀN VIÊN
          </div>
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white">Liên hệ với chúng tôi</h4>
            <ul className="space-y-2.5 text-[11px] text-slate-300">
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-3 h-3" />
                </span>
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3" />
                </span>
                <span>{data.business.phone[0]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3" />
                </span>
                <span>{data.business.email[0]}</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              {[Share2, Globe, MessageCircle, Phone].map((Icon, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => triggerToast('Kết nối tư vấn quà Tết & mâm cỗ Mona Tết Việt!')}
                  className="hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Danh mục */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white">Danh mục</h4>
            <ul className="space-y-2 text-[11px]">
              {data.navLinks.map((lnk, idx) => (
                <li key={lnk}>
                  <button
                    type="button"
                    onClick={() => scrollToId('top')}
                    className={`hover:text-[#E5A93C] transition-colors cursor-pointer ${
                      idx === 0 ? 'text-[#A61B1B] font-bold' : 'text-slate-300'
                    }`}
                  >
                    {lnk}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-black/60 py-3 text-center text-[11px] text-slate-400 border-t border-white/5">
          © Thiết kế và lập trình bởi <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl border-2 border-[#A61B1B]"
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
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-base font-black text-[#A61B1B]">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {selectedProduct.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {selectedProduct.originalPrice}
                    </span>
                  )}
                  <span className="text-lg font-black text-[#A61B1B]">
                    {selectedProduct.price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleAddCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#A61B1B] hover:bg-[#7f1313] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Thêm Vào Giỏ Quà
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
