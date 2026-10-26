'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  ShoppingBasket,
  ChevronDown,
  ChevronRight,
  Play,
  Phone,
  ShieldCheck,
  Truck,
  ShoppingBag,
  X,
  Check,
  Sparkles,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang8Data,
  GreenBistroProductItem,
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
  const data: NhaHang8Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('drinks');
  const [activePromoIdx, setActivePromoIdx] = useState(0);
  const [cartItems, setCartItems] = useState<{ item: GreenBistroProductItem; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2600);
  };

  const handleAddToCart = (product: GreenBistroProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.item.id === product.id);
      if (existing) {
        return prev.map((p) => (p.item.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { item: product, qty: 1 }];
    });
    triggerToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  const totalCartCount = useMemo(
    () => cartItems.reduce((sum, entry) => sum + entry.qty, 0),
    [cartItems]
  );

  const totalCartValue = useMemo(() => {
    return cartItems.reduce((sum, entry) => {
      const numeric = parseInt(entry.item.price.replace(/[^\d]/g, ''), 10) || 0;
      return sum + numeric * entry.qty;
    }, 0);
  }, [cartItems]);

  const filterBySearch = (list: GreenBistroProductItem[]) => {
    const q = (searchQuery || sidebarSearch).trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  };

  const drinkProducts = useMemo(
    () => filterBySearch(data.products.filter((p) => p.sectionKey === 'drinks')),
    [data.products, searchQuery, sidebarSearch]
  );

  const milkProducts = useMemo(
    () => filterBySearch(data.products.filter((p) => p.sectionKey === 'milk_nutrition')),
    [data.products, searchQuery, sidebarSearch]
  );

  const noodleProducts = useMemo(
    () => filterBySearch(data.products.filter((p) => p.sectionKey === 'noodles_mains')),
    [data.products, searchQuery, sidebarSearch]
  );

  const suggestedProducts = useMemo(
    () => filterBySearch(data.products.filter((p) => p.sectionKey === 'suggested')),
    [data.products, searchQuery, sidebarSearch]
  );

  const activeBanner = data.promoBanners[activePromoIdx] || data.promoBanners[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderProductCard = (product: GreenBistroProductItem, compact = false) => (
    <div
      key={product.id}
      className="group relative flex flex-col justify-between bg-white border-r border-b border-slate-100 p-4 hover:shadow-md transition-all duration-200"
    >
      {product.discountBadge && (
        <span className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full bg-[#D0021B] text-white text-xs font-extrabold flex items-center justify-center shadow-sm">
          {product.discountBadge}
        </span>
      )}

      <div>
        <div
          className={`relative w-full ${
            compact ? 'h-36' : 'h-44'
          } mb-3 flex items-center justify-center overflow-hidden rounded-md bg-slate-50/60`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h4
          title={product.name}
          className="text-[13px] font-semibold text-slate-800 text-center line-clamp-2 min-h-[38px] leading-snug group-hover:text-[#008848] transition-colors"
        >
          {product.name}
        </h4>
      </div>

      <div className="mt-2 pt-1 flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 min-h-[22px]">
          {product.originalPrice && (
            <span className="text-xs text-slate-400 line-through">{product.originalPrice}</span>
          )}
          <span className="text-[13px] font-bold text-[#D0021B]">{product.price}</span>
        </div>

        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          className="mt-2.5 px-4 py-1.5 rounded bg-[#008848] hover:bg-[#006e3a] text-white text-[11px] font-bold uppercase tracking-wide transition-colors shadow-xs cursor-pointer"
        >
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#E9F1F4] text-slate-800 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#008848] text-white px-4 py-3 rounded-lg shadow-xl text-sm font-medium">
          <Check className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Green Header Bar (#008848) */}
      <header className="sticky top-0 z-40 bg-[#008848] text-white shadow-md">
        <div className="max-w-[1220px] mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 shrink-0 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-[#FACC15] text-[#008848] flex items-center justify-center font-black text-sm shadow-inner border-2 border-white">
              GB
            </div>
            <div className="leading-none">
              <span className="text-xs font-medium text-emerald-100 italic">
                {data.header.brandPrefix}
              </span>
              <span className="text-lg font-black tracking-tight text-[#FACC15]">
                {data.header.brandHighlight}
              </span>
              <span className="text-[11px] font-bold text-white ml-0.5">
                {data.header.brandDomain}
              </span>
            </div>
          </a>

          {/* Center Rounded White Search Input */}
          <div className="flex-1 max-w-xl">
            <div className="relative flex items-center w-full bg-white rounded-full overflow-hidden shadow-inner">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={data.header.searchPlaceholder}
                className="w-full pl-4 pr-10 py-1.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="absolute right-2.5 text-slate-500 hover:text-[#008848]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right User & Cart Actions */}
          <div className="flex items-center gap-5 shrink-0 text-xs font-semibold">
            <button
              type="button"
              onClick={() => triggerToast('Chức năng đăng nhập thành viên GreenBistro đang mở!')}
              className="hidden sm:inline-block hover:text-[#FACC15] transition-colors cursor-pointer"
            >
              {data.header.loginLabel}
            </button>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#00703B] hover:bg-[#005c30] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <span>
                Giỏ hàng /{' '}
                {totalCartValue > 0 ? `${totalCartValue.toLocaleString('vi-VN')} ₫` : '0 ₫'}
              </span>
              <div className="relative">
                <ShoppingBasket className="w-4 h-4 text-[#FACC15]" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#D0021B] text-white text-[10px] font-bold flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main 2-Column Container */}
      <main id="top" className="max-w-[1220px] mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* LEFT SIDEBAR: DANH MỤC SẢN PHẨM */}
          <aside className="w-full lg:w-[250px] shrink-0 lg:sticky lg:top-18 space-y-3">
            <div className="bg-white rounded shadow-xs border border-slate-200/70 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-[#008848]">
                  DANH MỤC SẢN PHẨM
                </h2>
              </div>

              <ul className="divide-y divide-slate-100 text-xs">
                {data.sidebarCategories.map((cat) => {
                  const isOpen = expandedCategory === cat.id;
                  return (
                    <li key={cat.id} className="bg-white">
                      <button
                        type="button"
                        onClick={() => {
                          setExpandedCategory(isOpen ? null : cat.id);
                          if (
                            cat.id === 'drinks' ||
                            cat.id === 'milk_nutrition' ||
                            cat.id === 'noodles_mains'
                          ) {
                            scrollToSection(`section-${cat.id}`);
                          }
                        }}
                        className="w-full px-4 py-2.5 flex items-center justify-between text-left font-medium text-slate-700 hover:text-[#008848] hover:bg-emerald-50/40 transition-colors cursor-pointer"
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-[#008848]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <ul className="bg-slate-50/80 px-4 py-1.5 space-y-1 border-t border-slate-100">
                          {cat.subItems.map((sub, idx) => (
                            <li key={idx}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSearchQuery(sub.split(' ')[0]);
                                  triggerToast(`Đang lọc nhóm: ${sub}`);
                                }}
                                className="w-full text-left py-1 text-[11px] text-slate-600 hover:text-[#008848] flex items-center gap-1.5 cursor-pointer"
                              >
                                <ChevronRight className="w-3 h-3 text-[#008848]" />
                                <span>{sub}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sidebar Secondary Quick Search */}
            <div className="bg-white p-2.5 rounded shadow-xs border border-slate-200/70 flex items-center gap-1.5">
              <input
                type="text"
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                placeholder="Tìm nhanh trong danh mục..."
                className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-[#008848]"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSidebarSearch('');
                }}
                className="px-2.5 py-1.5 bg-slate-200 hover:bg-[#008848] hover:text-white text-slate-600 rounded text-xs transition-colors"
                title="Xóa bộ lọc"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>

          {/* RIGHT MAIN COLUMN */}
          <div className="flex-1 min-w-0 space-y-4 w-full">
            {/* 1. Nhóm hàng thường mua (8 Circular Icons Strip) */}
            <section className="bg-white rounded shadow-xs border border-slate-200/70 p-4">
              <h3 className="text-[13px] font-bold text-slate-700 mb-3">
                {data.quickGroupsTitle}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {data.quickGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => scrollToSection(`section-${group.categoryKey}`)}
                    className="group flex flex-col items-center text-center p-1.5 rounded hover:bg-emerald-50/50 transition-colors cursor-pointer"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden mb-1.5 group-hover:border-[#008848] transition-colors">
                      <img
                        src={group.image}
                        alt={group.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <span
                        style={{ backgroundColor: group.badgeColor }}
                        className="absolute bottom-0 inset-x-0 text-[8px] font-black text-white uppercase py-0.5 tracking-tighter"
                      >
                        {group.badgeText}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-[#008848] leading-tight line-clamp-2">
                      {group.name}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* 2. Colorful Promotional Hero Banner ("QUÀ TO GIÁ SỐC") */}
            <section className="relative rounded overflow-hidden shadow-xs border border-slate-200/70">
              <div
                className={`relative min-h-[210px] sm:min-h-[240px] bg-gradient-to-r ${activeBanner.bgGradient} p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden`}
              >
                {/* Decorative Sunburst / Sparkle Circles */}
                <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-yellow-300/20 blur-xl pointer-events-none" />
                <div className="absolute -bottom-16 right-1/3 w-64 h-64 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

                {/* Left Product Pack Image */}
                <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                  <div className="relative w-56 h-36 sm:w-64 sm:h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-white/80 -rotate-2">
                    <img
                      src={activeBanner.image}
                      alt={activeBanner.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Center Festive Deal Typography */}
                <div className="relative z-10 flex-1 text-center text-white">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-black/25 text-yellow-200 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" />
                    {activeBanner.badge}
                  </span>
                  <div className="leading-none">
                    <span className="block text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-md">
                      {activeBanner.title}
                    </span>
                    <span className="block text-3xl sm:text-5xl font-black tracking-tight text-[#FACC15] drop-shadow-lg mt-0.5">
                      {activeBanner.highlight}
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-white/95 max-w-md mx-auto line-clamp-2">
                    {activeBanner.subtitle}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollToSection('section-drinks')}
                    className="mt-3 px-5 py-1.5 rounded-full bg-white text-[#D0021B] hover:bg-yellow-300 hover:text-slate-900 text-xs font-extrabold uppercase tracking-wide shadow-md transition-colors cursor-pointer"
                  >
                    {activeBanner.ctaText}
                  </button>
                </div>

                {/* Carousel Dots */}
                <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-10">
                  {data.promoBanners.map((b, idx) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setActivePromoIdx(idx)}
                      className={`w-2.5 h-2.5 rounded-full border border-white transition-all cursor-pointer ${
                        activePromoIdx === idx ? 'bg-[#FACC15] scale-110' : 'bg-white/40'
                      }`}
                      aria-label={`Banner ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 3. SECTION: ĐỒ UỐNG CÁC LOẠI */}
            <section
              id="section-drinks"
              className="bg-white rounded shadow-xs border border-slate-200/70 overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-[#F4F8FA] border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#008848] rounded-full" />
                  <h3 className="text-[13px] font-extrabold uppercase text-slate-800">
                    {data.sections.drinksTitle}
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500">
                  {drinkProducts.length} sản phẩm
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-t border-slate-100">
                {drinkProducts.map((product) => renderProductCard(product))}
              </div>

              <div className="py-2.5 text-center bg-white border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => triggerToast('Đang tải thêm danh sách Đồ uống & Nước ép hữu cơ...')}
                  className="text-xs font-semibold text-[#0066CC] hover:underline cursor-pointer"
                >
                  Xem thêm sản phẩm
                </button>
              </div>
            </section>

            {/* 4. SECTION: SỮA CÁC LOẠI, DINH DƯỠNG HỮU CƠ */}
            <section
              id="section-milk_nutrition"
              className="bg-white rounded shadow-xs border border-slate-200/70 overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-[#F4F8FA] border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#008848] rounded-full" />
                  <h3 className="text-[13px] font-extrabold uppercase text-slate-800">
                    {data.sections.milkTitle}
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500">
                  {milkProducts.length} sản phẩm
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-t border-slate-100">
                {milkProducts.map((product) => renderProductCard(product))}
              </div>

              <div className="py-2.5 text-center bg-white border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => triggerToast('Đang tải thêm danh sách Sữa hạt & Dinh dưỡng...')}
                  className="text-xs font-semibold text-[#0066CC] hover:underline cursor-pointer"
                >
                  Xem thêm sản phẩm
                </button>
              </div>
            </section>

            {/* 5. SECTION: MÌ, CHÁO, PHỞ ĂN LIỀN & MÓN CHÍNH */}
            <section
              id="section-noodles_mains"
              className="bg-white rounded shadow-xs border border-slate-200/70 overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-[#F4F8FA] border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-4 bg-[#008848] rounded-full" />
                  <h3 className="text-[13px] font-extrabold uppercase text-slate-800">
                    {data.sections.noodlesTitle}
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500">
                  {noodleProducts.length} sản phẩm
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-t border-slate-100">
                {noodleProducts.map((product) => renderProductCard(product))}
              </div>

              <div className="py-2.5 text-center bg-white border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => triggerToast('Đang tải thêm danh sách Mì, Cháo, Phở thực dưỡng...')}
                  className="text-xs font-semibold text-[#0066CC] hover:underline cursor-pointer"
                >
                  Xem thêm sản phẩm
                </button>
              </div>
            </section>

            {/* 6. SECTION: GỢI Ý CHO BẠN (5-Column Grid) */}
            <section
              id="section-suggested"
              className="bg-white rounded shadow-xs border border-slate-200/70 overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-[#F4F8FA] border-b border-slate-200/80 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#EA580C]" />
                <h3 className="text-[13px] font-extrabold uppercase text-slate-800">
                  {data.sections.suggestedTitle}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-l border-t border-slate-100">
                {suggestedProducts.map((product) => renderProductCard(product, true))}
              </div>
            </section>

            {/* 7. SECTION: MẸO HAY TRONG GIA ĐÌNH (Split Video + 4 Articles) */}
            <section className="bg-white rounded shadow-xs border border-slate-200/70 p-4">
              <h3 className="text-[13px] font-extrabold uppercase text-slate-800 mb-3">
                {data.sections.tipsTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                {/* Left Video Card (7 cols) */}
                <div className="md:col-span-7">
                  <div
                    onClick={() => setActiveVideoModal(true)}
                    className="group relative rounded overflow-hidden cursor-pointer aspect-video bg-slate-900 shadow-sm"
                  >
                    <img
                      src={data.featuredVideo.thumbnail}
                      alt={data.featuredVideo.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />

                    {/* Top Video Header Bar */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-6 h-6 rounded-full bg-[#008848] text-white font-bold flex items-center justify-center text-[10px]">
                          GB
                        </span>
                        <span className="font-medium truncate drop-shadow">
                          {data.featuredVideo.title}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-black/50 text-[10px]">
                        {data.featuredVideo.duration}
                      </span>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-10 rounded-xl bg-black/75 group-hover:bg-[#D0021B] text-white flex items-center justify-center transition-colors shadow-lg">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Bold Yellow/Green Graphic Text */}
                    <div className="absolute bottom-3 inset-x-4 text-center">
                      <p className="text-xl sm:text-2xl font-black uppercase text-[#FACC15] drop-shadow-md tracking-tight">
                        {data.featuredVideo.badge}
                      </p>
                      <span className="inline-block mt-0.5 px-3 py-0.5 rounded bg-[#008848] text-white text-sm sm:text-base font-black uppercase">
                        {data.featuredVideo.priceHighlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right 4 Articles Stack (5 cols) */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-2.5">
                  {data.tipArticles.map((art) => (
                    <article
                      key={art.id}
                      onClick={() => triggerToast(`Đang mở bài viết: ${art.title}`)}
                      className="group flex items-start gap-3 p-1.5 rounded hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-20 h-14 rounded object-cover shrink-0 border border-slate-200"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-slate-700 group-hover:text-[#008848] line-clamp-2 leading-snug">
                          {art.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">{art.readTime}</p>
                      </div>
                    </article>
                  ))}

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => triggerToast('Đang tải chuyên mục Mẹo hay Bếp Xanh...')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#008848] hover:underline cursor-pointer"
                    >
                      <span>Xem các tin bài khác</span>
                      <span>▸</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer matching NH008 */}
      <footer className="mt-6 bg-white border-t border-slate-200 text-xs text-slate-600">
        <div className="max-w-[1220px] mx-auto px-4 py-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Hotline & Links */}
          <div className="md:col-span-7 space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#008848] text-sm">
              <span className="w-6 h-6 rounded-full border border-[#008848] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>
                Tổng đài: {data.business.phone[0]} - {data.business.phone[1]} ({(data.business.workingHours || "").split(' ')[0]} - 21:30)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#0066CC]">
              {data.footerLinks.map((lnk, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => triggerToast(`Đang mở trang: ${lnk}`)}
                  className="hover:underline cursor-pointer"
                >
                  {lnk}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-500">
              <span>Hệ thống thành viên:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#008848] font-bold">
                GREENBISTRO.VN
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 font-bold">
                ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
              </span>
            </div>
          </div>

          {/* Right Commitments */}
          <div className="md:col-span-5 space-y-2 md:border-l md:border-slate-200 md:pl-6">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#008848] shrink-0" />
              <span>{data.footerCommitments[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Truck className="w-4 h-4 text-[#008848] shrink-0" />
              <span>{data.footerCommitments[1]}</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Địa chỉ: {data.business.address}
            </p>
          </div>
        </div>

        <div className="bg-[#E9F1F4] py-2.5 text-center text-[11px] text-slate-500 border-t border-slate-200/60">
          © Bản quyền thuộc về {data.business.name} • Thiết kế chuẩn Ẩm Thực Xanh & Thực Phẩm Hữu Cơ
        </div>
      </footer>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full flex flex-col justify-between shadow-2xl">
            <div className="p-4 bg-[#008848] text-white flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <ShoppingBasket className="w-5 h-5 text-[#FACC15]" />
                <span>Giỏ Hàng Bếp Xanh ({totalCartCount})</span>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:bg-white/10 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-sm">
                  Giỏ hàng của bạn đang trống. Hãy chọn thêm món ngon & thực phẩm hữu cơ!
                </div>
              ) : (
                cartItems.map(({ item, qty }) => (
                  <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-800 line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs font-bold text-[#D0021B] mt-0.5">
                        {item.price} × {qty}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCartItems((prev) => prev.filter((p) => p.item.id !== item.id))
                      }
                      className="text-xs text-slate-400 hover:text-red-600"
                    >
                      Xóa
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Tổng cộng tạm tính:</span>
                <span className="text-[#D0021B] text-base">
                  {totalCartValue.toLocaleString('vi-VN')} ₫
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  setCartItems([]);
                  triggerToast('Đặt đơn thành công! Tổng đài GreenBistro sẽ xác nhận trong 5 phút.');
                }}
                disabled={cartItems.length === 0}
                className="w-full py-2.5 rounded bg-[#008848] hover:bg-[#006e3a] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Xác Nhận Đặt Giao Ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <div className="p-3 bg-[#008848] text-white flex items-center justify-between text-xs font-bold">
              <span>{data.featuredVideo.title}</span>
              <button type="button" onClick={() => setActiveVideoModal(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 text-center space-y-3">
              <img
                src={data.featuredVideo.thumbnail}
                alt={data.featuredVideo.title}
                className="w-full h-56 object-cover rounded"
              />
              <p className="text-sm font-bold text-slate-800">
                Khám phá Combo Ăn Sập Bếp Xanh chỉ với 250.000₫ dành cho 2-3 người!
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveVideoModal(false);
                  scrollToSection('section-drinks');
                }}
                className="px-5 py-2 rounded bg-[#008848] text-white text-xs font-bold uppercase"
              >
                Chọn Mua Combo Ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
