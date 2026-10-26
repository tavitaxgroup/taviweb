'use client';

import React, { useMemo, useState } from 'react';
import {
  Leaf,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Clock,
  Award,
  Phone,
  MapPin,
  Mail,
  ShoppingBag,
  Check,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang15Data,
  VnttProductItem,
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
  const data: NhaHang15Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [selectedProduct, setSelectedProduct] = useState<VnttProductItem | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2600);
  };

  const ocopProducts = useMemo(
    () => data.products.filter((p) => p.brandLine === 'ocop_vtnn'),
    [data.products]
  );
  const chinsanProducts = useMemo(
    () => data.products.filter((p) => p.brandLine === 'chinsan'),
    [data.products]
  );
  const thomThucProducts = useMemo(
    () => data.products.filter((p) => p.brandLine === 'thom_thuc'),
    [data.products]
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderJFoodsLogo = () => (
    <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl shadow-xs border border-emerald-100">
      <div className="w-8 h-8 rounded-lg bg-[#15803D] text-white flex items-center justify-center font-black text-xl italic shadow-inner">
        {data.brandLogo.symbol}
      </div>
      <div className="leading-none">
        <div className="flex items-center gap-0.5">
          <span className="text-base font-black text-[#15803D] italic">
            {data.brandLogo.name}
          </span>
          <span className="text-[9px] font-bold text-[#15803D] -mt-2">®</span>
        </div>
        <span className="block text-[9px] italic text-[#15803D] font-medium">
          {data.brandLogo.slogan}
        </span>
      </div>
    </div>
  );

  const renderProductRow = (
    id: string,
    title: string,
    items: VnttProductItem[],
    showLeafIcons = false
  ) => (
    <div id={id} className="py-8 border-b border-slate-100 last:border-b-0">
      <div className="text-center mb-6">
        <h3 className="text-base sm:text-lg font-extrabold text-[#1E7E34]">
          {title}
        </h3>
        {showLeafIcons && (
          <div className="mt-1.5 flex items-center justify-center gap-3 text-[10px] text-[#1E7E34] font-semibold">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
              <Leaf className="w-3 h-3" /> Gia vị tự nhiên
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
              <ShieldCheck className="w-3 h-3" /> Chuẩn an toàn
            </span>
          </div>
        )}
      </div>

      <div className="relative flex items-center gap-3">
        {/* Left Green Circle Arrow matching NH015 */}
        <button
          type="button"
          onClick={() => triggerToast(`Đang xem dòng ${title}`)}
          className="hidden md:flex w-7 h-7 rounded-full bg-[#1E7E34] text-white items-center justify-center shrink-0 shadow cursor-pointer hover:bg-[#145a24]"
          aria-label="Xem thêm"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              className="group bg-white rounded-xl p-3.5 border border-slate-100 hover:border-[#1E7E34]/50 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between text-center"
            >
              <div>
                <div className="relative h-40 rounded-lg overflow-hidden bg-emerald-50/40 mb-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#D91B5C] text-white text-[9px] font-extrabold uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-bold text-[#1E7E34] uppercase">
                  {item.weight}
                </span>
                <h4 className="mt-1 text-xs font-extrabold text-slate-800 line-clamp-2 min-h-[34px] group-hover:text-[#1E7E34] transition-colors">
                  {item.name}
                </h4>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black text-[#D91B5C]">{item.price}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartCount((c) => c + 1);
                    triggerToast(`Đã thêm "${item.name}" vào giỏ hàng!`);
                  }}
                  className="px-2.5 py-1 rounded bg-[#1E7E34] hover:bg-[#145a24] text-white text-[10px] font-bold cursor-pointer"
                >
                  + Chọn mua
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#1E7E34] text-white px-4 py-3 rounded-xl shadow-xl text-xs font-bold">
          <Check className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Promo Banner */}
      <div className="bg-[#114B1F] text-white text-[11px] py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="font-bold tracking-wide text-emerald-200">
            VNTT FOODS MANG CHẤT LƯỢNG VƯỢT TRỘI — GIỮ TRỌN HƯƠNG VỊ TỪNG BỮA ĂN
          </span>
          <div className="flex items-center gap-4">
            <span>Hotline CSKH & Đại Lý: {data.business.phone[0]}</span>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="focus:outline-none">
            {renderJFoodsLogo()}
          </a>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-bold text-slate-700">
            {data.navItems.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  if (idx === 1) scrollToSection('about-section');
                  else if (idx === 2) scrollToSection('row-ocop');
                  else if (idx === 3) scrollToSection('row-chinsan');
                  else if (idx === 4) scrollToSection('row-thomthuc');
                  else if (idx === 5) scrollToSection('what-to-eat');
                  else if (idx === 6) scrollToSection('news-section');
                  else scrollToSection('top');
                }}
                className="hover:text-[#1E7E34] transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() =>
              triggerToast(
                cartCount > 0
                  ? `Giỏ hàng của bạn đang có ${cartCount} sản phẩm gia vị VNTT Foods!`
                  : 'Hãy chọn các gói Xốt Lẩu Hoàn Chỉnh & Gia Vị bên dưới!'
              )
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1E7E34] hover:bg-[#155d26] text-white text-xs font-extrabold cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Giỏ hàng ({cartCount})</span>
          </button>
        </div>
      </header>

      {/* 1. GREEN GRADIENT HERO BANNER ("LẨU NGON BÙNG HƯƠNG VỊ") MATCHING NH015 */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1A6B2A] via-[#2B8A3E] to-[#3B9E4B] text-white py-14 sm:py-18 px-4">
        {/* Subtle herbal leaf background glow */}
        <div className="absolute -top-16 right-1/4 w-72 h-72 rounded-full bg-lime-300/15 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Content (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex flex-col gap-1">
              <span className="inline-block px-3 py-1 rounded bg-[#6B11B4] text-white text-[11px] font-black uppercase tracking-wider shadow">
                VNTT FOODS MANG CHẤT LƯỢNG VƯỢT TRỘI
              </span>
              <span className="inline-block px-3 py-1 rounded bg-[#E91E63] text-white text-[11px] font-black uppercase tracking-wider shadow self-start">
                GIỮ TRỌN HƯƠNG VỊ TỪNG BỮA ĂN
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase leading-tight tracking-tight drop-shadow">
              {data.hero.title}
            </h1>

            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed max-w-lg">
              {data.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('row-ocop')}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border-2 border-white bg-white/10 hover:bg-white hover:text-[#1A6B2A] text-white text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>{data.hero.primaryCta}</span>
                <span>▸</span>
              </button>
            </div>
          </div>

          {/* Right Hotpot & Floating Seasoning Pouches Showcase (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
            {/* Central Hotpot Bowl */}
            <div className="relative z-10 w-64 h-64 sm:w-76 sm:h-76 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl">
              <img
                src={data.hero.image}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Pouch Top-Left: Xốt Lẩu Bò */}
            <div
              onClick={() => setSelectedProduct(data.products[0])}
              className="absolute -top-2 left-2 sm:left-6 z-20 w-28 sm:w-32 bg-gradient-to-b from-[#D0021B] to-[#231F20] p-2.5 rounded-xl shadow-2xl border border-white/40 -rotate-12 cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="block text-[8px] text-emerald-300 font-bold">
                Xốt Lẩu Hoàn Chỉnh
              </span>
              <span className="block text-sm font-serif font-black text-red-400 leading-tight">
                Lẩu Bò
              </span>
              <span className="block text-[8px] text-white/80 mt-0.5">
                Chiết xuất rau củ tươi
              </span>
            </div>

            {/* Floating Jar Bottom-Left: Satế Tôm */}
            <div
              onClick={() => setSelectedProduct(data.products[4])}
              className="absolute bottom-2 left-0 sm:left-4 z-20 w-28 sm:w-32 bg-white text-slate-900 p-2.5 rounded-xl shadow-2xl border-2 border-red-500 rotate-6 cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="inline-block px-1.5 py-0.5 rounded bg-red-600 text-white text-[8px] font-black uppercase">
                SATẾ TÔM
              </span>
              <p className="text-[10px] font-extrabold text-slate-800 mt-1">
                Hũ đặc biệt 170g
              </p>
            </div>

            {/* Floating Pouch Right: Gia vị Xá Xíu */}
            <div
              onClick={() => setSelectedProduct(data.products[6])}
              className="absolute bottom-4 right-2 sm:right-6 z-20 w-28 sm:w-32 bg-[#14532D] text-white p-2.5 rounded-xl shadow-2xl border border-lime-300/50 -rotate-6 cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="block text-[8px] text-lime-300 font-bold uppercase">
                Chinsan
              </span>
              <span className="block text-xs font-black text-white mt-0.5">
                Gia Vị Xá Xíu
              </span>
              <span className="block text-[9px] text-emerald-200">Ướp 15 phút</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION "VỀ VNTT FOODS" (SPLIT 2-COLUMN ON WHITE MATCHING NH015) */}
      <section id="about-section" className="py-14 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#1E7E34]">
              {data.aboutSection.heading}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {data.aboutSection.description}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('brand-values')}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#1E7E34] text-[#1E7E34] hover:bg-[#1E7E34] hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <span>{data.aboutSection.ctaText}</span>
                <span>▸</span>
              </button>
            </div>
          </div>

          {/* Right Rounded Chef/Homemaker Photo with Seasoning Packs (7 cols) */}
          <div className="md:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-100">
              <img
                src={data.aboutSection.image}
                alt={data.aboutSection.heading}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-xs rounded-xl p-3 flex items-center justify-between shadow">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#1E7E34] text-white flex items-center justify-center font-black text-xs">
                    J
                  </span>
                  <span className="text-xs font-extrabold text-slate-800">
                    Trọn bộ Gia Vị Hoàn Chỉnh cho căn bếp Việt
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#1E7E34]">Chuẩn OCOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION "GIÁ TRỊ THƯƠNG HIỆU" (DARK FOREST GREEN #0E2414 MATCHING NH015) */}
      <section id="brand-values" className="bg-[#0F2415] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Homemaker/Chef Showcase Image (5 cols) */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl">
              <img
                src={data.brandValuesSection.image}
                alt={data.brandValuesSection.heading}
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F2415] via-[#0F2415]/60 to-transparent p-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1E7E34] text-white text-[10px] font-extrabold uppercase">
                  Nâng tầm gia vị Việt
                </span>
              </div>
            </div>
          </div>

          {/* Right 4 Core Values List (7 cols) */}
          <div className="md:col-span-7 space-y-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white">
              {data.brandValuesSection.heading}
            </h2>

            <div className="space-y-4">
              {data.brandValuesSection.values.map((val, idx) => (
                <div key={val.id} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 1 && <Sparkles className="w-4 h-4" />}
                    {idx === 2 && <Clock className="w-4 h-4" />}
                    {idx === 3 && <Award className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold uppercase text-emerald-300">
                      {val.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE PRODUCT LINE ROWS ON WHITE BACKGROUND MATCHING NH015 */}
      <section className="py-10 max-w-5xl mx-auto px-4">
        {renderProductRow(
          'row-ocop',
          data.productLines.ocopTitle,
          ocopProducts,
          false
        )}
        {renderProductRow(
          'row-chinsan',
          data.productLines.chinsanTitle,
          chinsanProducts,
          true
        )}
        {renderProductRow(
          'row-thomthuc',
          data.productLines.thomThucTitle,
          thomThucProducts,
          true
        )}
      </section>

      {/* 5. SECTION "BẠN ĂN GÌ HÔM NAY" ("BỮA ĂN GIA ĐÌNH TIỆN LỢI HƠN BAO GIỜ HẾT") */}
      <section id="what-to-eat" className="py-14 bg-[#F7FAF7] border-y border-emerald-100 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-lg sm:text-xl font-black uppercase text-[#1E7E34] mb-8">
            {data.whatToEatToday.sectionTitle}
          </h2>

          {/* 3-Column Feature Block matching NH015 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Left Image Collage (3 cols) */}
            <div className="md:col-span-3 rounded-xl overflow-hidden shadow-xs">
              <img
                src={data.whatToEatToday.leftImage}
                alt="Thực đơn gia đình"
                className="w-full h-56 md:h-full object-cover"
              />
            </div>

            {/* Center Text Card (4 cols) */}
            <div className="md:col-span-4 bg-white rounded-xl p-6 border border-emerald-100 shadow-xs flex flex-col justify-center space-y-3">
              <h3 className="text-sm sm:text-base font-black uppercase text-[#1E7E34] leading-snug">
                {data.whatToEatToday.cardTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.whatToEatToday.cardDescription}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    triggerToast('Đang mở cẩm nang 30 công thức nấu ngon cùng VNTT Foods!')
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#1E7E34] text-[#1E7E34] hover:bg-[#1E7E34] hover:text-white text-[11px] font-bold transition-colors cursor-pointer"
                >
                  <span>{data.whatToEatToday.ctaText}</span>
                  <span>▸</span>
                </button>
              </div>
            </div>

            {/* Right Cooked Dish + Seasoning Pack Image (5 cols) */}
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-xs">
              <img
                src={data.whatToEatToday.rightImage}
                alt="Món ngon mỗi ngày"
                className="w-full h-56 md:h-full object-cover"
              />
            </div>
          </div>

          {/* 3 Quick Recipe Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {data.whatToEatToday.recipes.map((rc) => (
              <div
                key={rc.id}
                onClick={() => triggerToast(`Công thức: ${rc.title}`)}
                className="bg-white rounded-xl p-3 border border-emerald-100 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <img
                  src={rc.image}
                  alt={rc.title}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#1E7E34]">
                    ⏱ {rc.prepTime} • {rc.seasoningUsed}
                  </span>
                  <h4 className="text-xs font-extrabold text-slate-800 line-clamp-2 mt-0.5">
                    {rc.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION "TIN TỨC & SỰ KIỆN" */}
      <section id="news-section" className="py-14 max-w-5xl mx-auto px-4">
        <h2 className="text-center text-lg sm:text-xl font-black uppercase text-[#1E7E34] mb-8">
          {data.newsSection.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.newsSection.items.map((nw) => (
            <article
              key={nw.id}
              onClick={() => triggerToast(`Đang đọc bài viết: ${nw.title}`)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/80 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={nw.image}
                  alt={nw.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <span className="text-[10px] font-bold text-[#1E7E34]">{nw.date}</span>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-[#1E7E34] line-clamp-2">
                  {nw.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {nw.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D2112] text-slate-300 text-xs border-t border-emerald-900">
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-3">
            {renderJFoodsLogo()}
            <p className="text-slate-400 leading-relaxed pt-1">
              {data.business.description}
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Các Dòng Sản Phẩm Chủ Lực
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Sản phẩm OCOP, Nông nghiệp sạch VTNN</li>
              <li>• Xốt Lẩu Hoàn Chỉnh Lẩu Bò & Lẩu Hải Sản</li>
              <li>• Gia vị Chinsan: Sa Tế Tôm, Xá Xíu, Thịt Nướng</li>
              <li>• Nước chấm & Gia vị Thơm Thực</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Thông Tin Liên Hệ
            </h4>
            <p className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{data.business.address}</span>
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <strong className="text-white">{data.business.phone[0]}</strong>
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{data.business.email[0]}</span>
            </p>
          </div>
        </div>

        <div className="bg-black/40 py-3 text-center text-[11px] text-slate-400 border-t border-white/5">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
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
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-56 bg-emerald-50">
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
            <div className="p-6 space-y-3">
              <span className="text-xs font-bold text-[#1E7E34]">
                {selectedProduct.brandLineLabel} • {selectedProduct.weight}
              </span>
              <h3 className="text-base font-black text-slate-900">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-lg font-black text-[#D91B5C]">
                  {selectedProduct.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    triggerToast(`Đã thêm "${selectedProduct.name}" vào giỏ hàng!`);
                    setSelectedProduct(null);
                  }}
                  className="px-5 py-2 rounded-full bg-[#1E7E34] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Thêm Vào Giỏ Hàng
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
