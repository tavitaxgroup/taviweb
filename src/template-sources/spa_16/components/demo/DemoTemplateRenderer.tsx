'use client';

import React, { useMemo, useState } from 'react';
import {
  Armchair,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Layers,
  Mail,
  MapPin,
  Menu,
  Minus,
  Plus,
  Printer,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShoppingBag,
  Sparkles,
  Star,
  User,
  X,
} from 'lucide-react';
import { SubpageData } from '@/components/demo/shared/SubpageLayout';
import {
  adaptClonedTemplateData,
  ClonedTemplateInput,
} from '@/lib/demo/clonedTemplateUtils';
import * as defaultMockData from '../../data/mockData';

interface DemoTemplateRendererProps {
  companyName?: string;
  subpageData?: SubpageData;
  templateInput?: ClonedTemplateInput;
}

export function DemoTemplateRenderer({
  companyName,
  subpageData,
  templateInput,
}: DemoTemplateRendererProps) {
  const mockData = useMemo(
    () =>
      adaptClonedTemplateData(defaultMockData, {
        companyName,
        subpageData,
        templateInput,
      }),
    [companyName, subpageData, templateInput]
  );

  const {
    business,
    NAV_ITEMS,
    HERO_PRESIDENT,
    CUSTOMIZER_SEAT_OPTIONS,
    CUSTOMIZER_BASES,
    RELATED_FURNITURE,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '0909 235 889';
  const primaryEmail = business.email?.[0] || 'sales@tspa-furniture.vn';

  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [activeRailStep, setActiveRailStep] = useState<
    'base' | 'seat' | 'option' | 'print'
  >('seat');
  const [activeTabGroup, setActiveTabGroup] = useState<
    'massage-chair' | 'pedi-set'
  >('massage-chair');
  const [selectedSeatId, setSelectedSeatId] = useState(
    CUSTOMIZER_SEAT_OPTIONS[0]?.id || 'seat-throne-2'
  );
  const [selectedBaseId, setSelectedBaseId] = useState(
    CUSTOMIZER_BASES[0]?.id || 'base-white-gold'
  );
  const [addonVentilation, setAddonVentilation] = useState(true);
  const [addonAutoFill, setAddonAutoFill] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(1);
  const [cartBannerMessage, setCartBannerMessage] = useState<string | null>(
    null
  );
  const [quoteForm, setQuoteForm] = useState({
    fullName: '',
    phone: '',
    salonName: '',
    chairQuantity: '06 - 10 Ghế Pedicure + Bàn Nail đồng bộ',
    notes: '',
  });
  const [quoteSent, setQuoteSent] = useState(false);

  const selectedSeat = useMemo(
    () =>
      CUSTOMIZER_SEAT_OPTIONS.find((s) => s.id === selectedSeatId) ||
      CUSTOMIZER_SEAT_OPTIONS[0],
    [CUSTOMIZER_SEAT_OPTIONS, selectedSeatId]
  );

  const selectedBase = useMemo(
    () =>
      CUSTOMIZER_BASES.find((b) => b.id === selectedBaseId) ||
      CUSTOMIZER_BASES[0],
    [CUSTOMIZER_BASES, selectedBaseId]
  );

  const unitPriceUsd = useMemo(() => {
    let total = selectedSeat.priceUsd + (selectedBase?.surchargeUsd || 0);
    if (addonVentilation) total += 90;
    if (addonAutoFill) total += 110;
    return total;
  }, [selectedSeat, selectedBase, addonVentilation, addonAutoFill]);

  const totalPriceUsd = unitPriceUsd * quantity;

  const handleResetCustomizer = () => {
    setActiveRailStep('seat');
    setActiveTabGroup('massage-chair');
    setSelectedSeatId(CUSTOMIZER_SEAT_OPTIONS[0]?.id || 'seat-throne-2');
    setSelectedBaseId(CUSTOMIZER_BASES[0]?.id || 'base-white-gold');
    setAddonVentilation(false);
    setAddonAutoFill(false);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + quantity);
    setCartBannerMessage(
      `Đã thêm ${quantity} x Cấu hình "${selectedSeat.codeName}" (${selectedBase.name}) — Tổng: $${totalPriceUsd.toLocaleString()}.00 vào danh sách báo giá!`
    );
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.fullName.trim() || !quoteForm.phone.trim()) return;
    setQuoteSent(true);
  };

  return (
    <div
      id="top-tspa"
      className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8b1e24] selection:text-white"
    >
      {/* 1. OBSIDIAN BLACK HEADER (#111111 with Left Menu, Center Circular Gold TP Monogram, Right Icons) */}
      <header className="sticky top-0 z-50 border-b border-[#d4af37]/25 bg-[#111111] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-6">
          {/* Left Hamburger Menu Trigger + Desktop Quick Nav */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setMenuDrawerOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-200 transition hover:text-[#e6c37a]"
            >
              {menuDrawerOpen ? (
                <X className="h-4 w-4 text-[#e6c37a]" />
              ) : (
                <Menu className="h-4 w-4 text-[#e6c37a]" />
              )}
              <span>Menu</span>
            </button>

            <nav className="hidden items-center gap-5 xl:flex">
              {NAV_ITEMS.slice(1, 5).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-wider text-stone-300 transition hover:text-[#e6c37a]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center Circular Metallic Gold TP / T-SPA Monogram (Exact Match to SPA019-spa_16.png) */}
          <a
            href="#top-tspa"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#1a1815] text-[#e6c37a] shadow-inner"
            title={business.name}
          >
            <span className="font-serif text-base font-black tracking-tighter">
              {business.monogram}
            </span>
          </a>

          {/* Right Icons (Search, Wishlist, Account, Gold Cart Circle) */}
          <div className="flex items-center gap-4">
            <a
              href="#customizer-studio"
              className="text-stone-300 transition hover:text-[#e6c37a]"
              aria-label="Tìm kiếm cấu hình ghế"
            >
              <Search className="h-4 w-4" />
            </a>
            <a
              href="#noi-that-phu-kien"
              className="hidden text-stone-300 transition hover:text-[#e6c37a] sm:inline-block"
              aria-label="Danh sách yêu thích"
            >
              <Heart className="h-4 w-4" />
            </a>
            <a
              href="#lien-he-tspa"
              className="hidden text-stone-300 transition hover:text-[#e6c37a] sm:inline-block"
              aria-label="Tài khoản đại lý"
            >
              <User className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById('customizer-studio')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#e6c37a] to-[#b88c3e] text-xs font-black text-stone-950 shadow"
              aria-label="Giỏ hàng cấu hình"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className=" -right-1 -top-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-[#8b1e24] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Dropdown Navigation Drawer */}
        {menuDrawerOpen && (
          <div className="border-t border-white/10 bg-[#181818] px-4 py-4">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuDrawerOpen(false)}
                    className="rounded px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-200 hover:bg-white/10 hover:text-[#e6c37a]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="text-xs font-bold text-[#e6c37a]"
              >
                Hotline Showroom: {primaryPhone}
              </a>
            </div>
          </div>
        )}

        {cartBannerMessage && (
          <div className="bg-[#8b1e24] px-4 py-2 text-center text-xs font-semibold text-white">
            <span>{cartBannerMessage}</span>
            <button
              type="button"
              onClick={() => setCartBannerMessage(null)}
              className="ml-3 underline"
            >
              Đóng
            </button>
          </div>
        )}
      </header>

      {/* 2. DARK GOLD-WAVE HERO BANNER ("PRESIDENT / Pedicure Chair" — Matching Top-Right of SPA019-spa_16.png) */}
      <section
        id="president-hero"
        className="relative overflow-hidden bg-[#0e0e0e] py-16 text-white lg:py-24"
      >
        {/* Decorative Golden Wave Mesh Lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 60%, rgba(212, 175, 55, 0.35), transparent 45%), radial-gradient(circle at 80% 40%, rgba(139, 30, 36, 0.35), transparent 50%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Typography ("PRESIDENT / Pedicure Chair / > More Details") */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#e6c37a]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Flagship Collection 2026</span>
              </div>

              <h1 className="mt-4 font-sans text-5xl font-black uppercase tracking-wider text-[#e6c37a] sm:text-6xl lg:text-7xl">
                {HERO_PRESIDENT.modelTitle}
              </h1>
              <p className="mt-1 text-xl font-medium tracking-wide text-white sm:text-2xl">
                {HERO_PRESIDENT.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-xs leading-relaxed text-stone-300 sm:text-sm">
                {HERO_PRESIDENT.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#customizer-studio"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-black/60 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#e6c37a] transition hover:bg-[#d4af37] hover:text-stone-950"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>{HERO_PRESIDENT.ctaLabel}</span>
                </a>
                <a
                  href="#customizer-studio"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8b1e24] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#a6242b]"
                >
                  <span>Tự Custom Ghế Ngay</span>
                </a>
              </div>
            </div>

            {/* Right Luxury White & Gold LED Pedicure Throne Preview */}
            <div className="relative lg:col-span-6">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-stone-900 to-black p-4 shadow-2xl">
                {/* Red/Gold Underglow */}
                <div className="pointer-events-none absolute -bottom-6 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-[#8b1e24]/60 blur-2xl" />
                <img
                  src={HERO_PRESIDENT.heroChairImage}
                  alt={HERO_PRESIDENT.modelTitle}
                  className="relative z-10 h-80 w-full rounded-2xl object-cover sm:h-96"
                />

                <div className="relative z-10 mt-4 flex items-center justify-between px-2 text-xs text-stone-400">
                  <span>Bồn ngâm chân Pipeless LED Vàng Champagne</span>
                  <span className="font-mono text-sm font-bold text-[#e6c37a]">
                    {HERO_PRESIDENT.slideIndex} / 04
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 3-COLUMN CHAIR CUSTOMIZER STUDIO ("CUSTOMIZE HERE" + "Pedicure Chair — Wyatt — $3,000.00") */}
      <section id="customizer-studio" className="bg-stone-100 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#8b1e24]">
                Trải Nghiệm Tự Custom Ghế Spa Tại {business.shortName}
              </span>
              <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl">
                Bàn Thiết Kế & Tùy Chỉnh Ghế Pedicure Trực Tuyến
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Chọn kiểu dáng ghế, màu da, bồn sứ LED và phụ kiện để nhận báo giá
              tức thì
            </p>
          </div>

          {/* 3-Column Customizer Interface Matching Screenshot */}
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl lg:grid-cols-12">
            {/* LEFT PANEL (5 Cols): Vertical Icon Rail + "CUSTOMIZE HERE" Selector Grid + Prev/Next Bar */}
            <div className="flex flex-col border-b border-slate-200 lg:col-span-5 lg:border-b-0 lg:border-r">
              <div className="flex flex-1">
                {/* Left Vertical Icon Rail (Base, Seat, Option, Print, Reset) */}
                <div className="flex w-16 shrink-0 flex-col items-center justify-between border-r border-slate-200 bg-slate-50 py-4">
                  <div className="flex flex-col items-center gap-5">
                    <button
                      type="button"
                      onClick={() => setActiveRailStep('base')}
                      className={`flex flex-col items-center gap-1 text-[10px] font-bold ${
                        activeRailStep === 'base'
                          ? 'text-[#8b1e24]'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Layers className="h-5 w-5" />
                      <span>Base</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveRailStep('seat')}
                      className={`flex flex-col items-center gap-1 text-[10px] font-bold ${
                        activeRailStep === 'seat'
                          ? 'text-[#8b1e24]'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Armchair className="h-5 w-5" />
                      <span>Seat</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveRailStep('option')}
                      className={`flex flex-col items-center gap-1 text-[10px] font-bold ${
                        activeRailStep === 'option'
                          ? 'text-[#8b1e24]'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Settings className="h-5 w-5" />
                      <span>Option</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveRailStep('print');
                        setCartBannerMessage(
                          `Đã xuất phiếu thông số kỹ thuật cho mã ${selectedSeat.sku} (${selectedSeat.codeName}).`
                        );
                      }}
                      className={`flex flex-col items-center gap-1 text-[10px] font-bold ${
                        activeRailStep === 'print'
                          ? 'text-[#8b1e24]'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Printer className="h-5 w-5" />
                      <span>Print</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetCustomizer}
                    className="flex flex-col items-center gap-1 pt-6 text-[10px] font-bold text-slate-400 hover:text-[#8b1e24]"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Middle Selector Body ("CUSTOMIZE HERE") */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="border-b border-slate-200 pb-2.5 text-center">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-900">
                      CUSTOMIZE HERE
                    </span>
                  </div>

                  {/* Sub-tabs: Massage Chair | Pedi Set */}
                  <div className="mt-3 grid grid-cols-2 border-b border-slate-200 text-center text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTabGroup('massage-chair');
                        setActiveRailStep('seat');
                      }}
                      className={`border-b-2 pb-2.5 transition ${
                        activeTabGroup === 'massage-chair'
                          ? 'border-slate-900 text-slate-900'
                          : 'border-transparent text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      Massage Chair
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTabGroup('pedi-set');
                        setSelectedSeatId('pedi-set-luxury');
                      }}
                      className={`border-b-2 pb-2.5 transition ${
                        activeTabGroup === 'pedi-set'
                          ? 'border-slate-900 text-slate-900'
                          : 'border-transparent text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      Pedi Set
                    </button>
                  </div>

                  {/* Step Content based on activeRailStep */}
                  {activeRailStep === 'base' ? (
                    <div className="mt-4 space-y-2.5">
                      <p className="text-xs font-bold text-slate-700">
                        Chọn chất liệu Chân bồn & Đèn LED:
                      </p>
                      {CUSTOMIZER_BASES.map((base) => {
                        const active = base.id === selectedBaseId;
                        return (
                          <button
                            key={base.id}
                            type="button"
                            onClick={() => setSelectedBaseId(base.id)}
                            className={`w-full rounded-xl border-2 p-3 text-left transition ${
                              active
                                ? 'border-[#8b1e24] bg-rose-50/30'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <p className="text-xs font-bold text-slate-900">
                              {base.name}
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-500">
                              {base.finish} •{' '}
                              {base.surchargeUsd > 0
                                ? `+$${base.surchargeUsd}`
                                : 'Tiêu chuẩn'}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  ) : activeRailStep === 'option' ? (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs font-bold text-slate-700">
                        Tùy chọn công nghệ tích hợp thêm:
                      </p>
                      <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3 text-xs">
                        <div>
                          <span className="block font-bold text-slate-900">
                            Hệ thống hút mùi Exhaust Vent âm bồn
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Đạt chuẩn thông khí Nail Salon Hoa Kỳ
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={addonVentilation}
                          onChange={(e) =>
                            setAddonVentilation(e.target.checked)
                          }
                          className="h-4 w-4 accent-[#8b1e24]"
                        />
                      </label>

                      <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3 text-xs">
                        <div>
                          <span className="block font-bold text-slate-900">
                            Cảm biến xả nước tự động Auto-Fill
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Tự ngắt khi đủ mực nước ấm tiêu chuẩn
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={addonAutoFill}
                          onChange={(e) => setAddonAutoFill(e.target.checked)}
                          className="h-4 w-4 accent-[#8b1e24]"
                        />
                      </label>
                    </div>
                  ) : (
                    /* Default 2-Column Chair Card Grid Matching Screenshot ("Chair", "T-essential", "Throne 2") */
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {CUSTOMIZER_SEAT_OPTIONS.map((seat) => {
                        const isSelected = seat.id === selectedSeat.id;
                        return (
                          <button
                            key={seat.id}
                            type="button"
                            onClick={() => setSelectedSeatId(seat.id)}
                            className={`flex flex-col justify-between rounded-lg border-2 p-2.5 text-left transition ${
                              isSelected
                                ? 'border-[#8b1e24] bg-white shadow-md'
                                : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                            }`}
                          >
                            <div className="h-24 w-full overflow-hidden rounded bg-white">
                              <img
                                src={seat.image}
                                alt={seat.codeName}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="mt-2">
                              <p className="text-[11px] font-bold text-slate-800">
                                {seat.codeName.split(' — ')[0]}
                              </p>
                              <p className="text-[10px] text-slate-500">
                                {seat.leatherColor}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Prev / Next Split Bar (Burgundy Prev + Black Next) */}
              <div className="grid grid-cols-2 text-xs font-bold uppercase tracking-wider text-white">
                <button
                  type="button"
                  onClick={() =>
                    setActiveRailStep((prev) =>
                      prev === 'option'
                        ? 'seat'
                        : prev === 'seat'
                        ? 'base'
                        : 'seat'
                    )
                  }
                  className="bg-[#6e1c20] py-3 transition hover:bg-[#8b1e24]"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveRailStep((prev) =>
                      prev === 'base'
                        ? 'seat'
                        : prev === 'seat'
                        ? 'option'
                        : 'base'
                    )
                  }
                  className="bg-[#111111] py-3 transition hover:bg-slate-800"
                >
                  Next
                </button>
              </div>
            </div>

            {/* RIGHT PANEL (7 Cols): Live Chair Render + "Pedicure Chair / Wyatt / $3,000.00" Spec & Add To Cart */}
            <div className="grid items-center gap-6 p-6 sm:p-8 lg:col-span-7 lg:grid-cols-12">
              {/* Center Live Render of Selected Pedicure Chair */}
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-inner">
                  <img
                    src={selectedSeat.image}
                    alt={selectedSeat.codeName}
                    className="h-72 w-full rounded-xl object-cover sm:h-80"
                  />
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                    <span>Màu da: {selectedSeat.leatherColor}</span>
                    <span className="font-bold text-[#8b1e24]">
                      LED: {selectedSeat.ledBasinColor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Spec Details ("Pedicure Chair / Wyatt / SKU: MONAMEDIA2358 / $3,000.00") */}
              <div className="space-y-3.5 lg:col-span-6">
                <span className="text-xs font-bold text-[#8b1e24]">
                  Pedicure Chair
                </span>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  Wyatt ({selectedSeat.codeName.split(' — ')[0]})
                </h3>

                {/* 4 Gold Stars + 1 Gray Star */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                  <Star className="h-3.5 w-3.5 text-slate-300" />
                </div>

                <p className="text-xs font-semibold text-slate-500">
                  SKU: {selectedSeat.sku}
                </p>

                <p className="text-xs leading-relaxed text-slate-600">
                  {selectedSeat.description}
                </p>

                <div className="flex items-center justify-between border-y border-slate-100 py-3 text-xs">
                  <div>
                    <span className="block text-slate-400">Availability:</span>
                    <span className="font-bold text-[#8b1e24]">In stock</span>
                  </div>
                  <div>
                    <span className="block text-slate-400">Share to:</span>
                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="rounded-full bg-[#1877f2] px-2 py-0.5 text-[10px] font-bold text-white">
                        FB
                      </span>
                      <span className="rounded-full bg-[#1da1f2] px-2 py-0.5 text-[10px] font-bold text-white">
                        TW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity + Price ($3,000.00) */}
                <div>
                  <span className="block text-xs text-slate-500">
                    Quantity:
                  </span>
                  <div className="mt-1.5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-slate-200 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
                        aria-label="Giảm số lượng"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 text-xs font-bold text-slate-900">
                        {String(quantity).padStart(2, '0')}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
                        aria-label="Tăng số lượng"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="block text-xl font-black text-[#8b1e24]">
                        ${totalPriceUsd.toLocaleString()}.00
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        ~ {selectedSeat.priceVnd} / ghế
                      </span>
                    </div>
                  </div>
                </div>

                {/* Black Pill "Add to cart" + Heart Button */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#111111] py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#8b1e24]"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Add to cart</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCartBannerMessage(
                        `Đã lưu cấu hình "${selectedSeat.codeName}" vào danh sách yêu thích.`
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#8b1e24] transition hover:bg-rose-50"
                    aria-label="Lưu cấu hình"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED SPA FURNITURE, NAIL TABLES & PARTS CAROUSEL (Matching Bottom Row of SPA019-spa_16.png) */}
      <section id="noi-that-phu-kien" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8b1e24]">
                Đồng Bộ Không Gian Salon & Spa
              </span>
              <h2 className="mt-1 text-2xl font-black uppercase text-slate-900 sm:text-3xl">
                Bàn Nail Đá Cẩm Thạch, Quầy Lễ Tân & Linh Kiện Chính Hãng
              </h2>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600">
                <ChevronLeft className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600">
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {RELATED_FURNITURE.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-xl"
              >
                <div>
                  <div className="h-40 overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-xs font-extrabold text-slate-900 sm:text-sm">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                      {item.category}
                    </p>
                    <p className="mt-2 line-clamp-2 text-[11px] text-slate-600">
                      {item.specSummary}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3 text-center">
                  <span className="block text-sm font-black text-[#8b1e24]">
                    {item.priceDisplay}
                  </span>
                  <span className="block text-[10px] text-slate-400">
                    {item.vndPrice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TURNKEY SALON & SPA DESIGN CONSULTATION + OBSIDIAN GOLD FOOTER (#111111) */}
      <footer id="lien-he-tspa" className="bg-[#111111] text-stone-300">
        <div
          id="giai-phap-tron-goi"
          className="mx-auto max-w-7xl px-4 py-16 lg:px-6"
        >
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Company Info */}
            <div className="space-y-4 lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#1a1815] text-[#e6c37a]">
                  <span className="font-serif text-lg font-black">
                    {business.monogram}
                  </span>
                </div>
                <div>
                  <span className="block text-lg font-black tracking-wider text-white">
                    {business.shortName}
                  </span>
                  <span className="block text-xs text-[#e6c37a]">
                    Luxury Spa & Salon Furniture
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-stone-400 sm:text-sm">
                {business.tagline}. Bảo hành khung gầm & bồn sứ 5 năm, hỗ trợ
                bản vẽ bố trí mặt bằng 3D miễn phí cho các chủ đầu tư Spa & Nail
                Salon.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-stone-300">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e6c37a]" />
                  <span>{business.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#e6c37a]" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="text-xs font-bold text-[#e6c37a]">
                  Hotline Dự Án & Đại Lý: {primaryPhone}
                </p>
              </div>
            </div>

            {/* Right Wholesale & Project Quotation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#d4af37]/30 bg-[#1a1a1a] p-6 shadow-2xl sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e6c37a]">
                  Ưu Đãi Dự Án Mở Mới & Nâng Cấp Spa
                </span>
                <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Nhận Báo Giá Sỉ Ghế Spa & Bản Vẽ Thiết Kế Phòng Trị Liệu 3D
                </h3>

                {quoteSent ? (
                  <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-400" />
                    <h4 className="mt-2 text-base font-bold text-white">
                      Đã Gửi Yêu Cầu Báo Giá Tới {business.shortName}!
                    </h4>
                    <p className="mt-1 text-xs text-emerald-200">
                      Chuyên viên dự án sẽ gửi каталог và bảng giá chiết khấu đại
                      lý tới số <strong>{quoteForm.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setQuoteSent(false)}
                      className="mt-4 text-xs font-bold text-[#e6c37a] underline"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleQuoteSubmit}
                    className="mt-5 space-y-3.5"
                  >
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên Chủ đầu tư *"
                        value={quoteForm.fullName}
                        onChange={(e) =>
                          setQuoteForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-[#111111] px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#d4af37] focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại nhận báo giá *"
                        value={quoteForm.phone}
                        onChange={(e) =>
                          setQuoteForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-[#111111] px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#d4af37] focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Tên Spa / Salon & Tỉnh thành"
                        value={quoteForm.salonName}
                        onChange={(e) =>
                          setQuoteForm((prev) => ({
                            ...prev,
                            salonName: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-[#111111] px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#d4af37] focus:outline-none"
                      />
                      <select
                        value={quoteForm.chairQuantity}
                        onChange={(e) =>
                          setQuoteForm((prev) => ({
                            ...prev,
                            chairQuantity: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-[#111111] px-4 py-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                      >
                        <option>02 - 05 Ghế Pedicure Cao Cấp</option>
                        <option>
                          06 - 10 Ghế Pedicure + Bàn Nail đồng bộ
                        </option>
                        <option>
                          Trên 10 Ghế + Thiết kế thi công trọn gói
                        </option>
                      </select>
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Ghi chú màu sắc da ghế, kiểu bồn hoặc kích thước mặt bằng..."
                      value={quoteForm.notes}
                      onChange={(e) =>
                        setQuoteForm((prev) => ({
                          ...prev,
                          notes: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-stone-700 bg-[#111111] px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:border-[#d4af37] focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e6c37a] py-3.5 text-xs font-black uppercase tracking-widest text-stone-950 shadow-lg transition hover:brightness-110"
                    >
                      <Send className="h-4 w-4" />
                      <span>NHẬN BÁO GIÁ DỰ ÁN & CATALOGUE 2026</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black py-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} {business.name}. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
