'use client';

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Star,
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
    HERO_COLLAGE,
    POLAROID_HIGHLIGHTS,
    PRICE_MENU_ITEMS,
    COMBO_PACKAGES,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '0909 188 319';
  const primaryEmail = business.email?.[0] || 'cskh@enbibaobaospa.vn';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePriceTab, setActivePriceTab] = useState<
    'all' | 'skincare' | 'hair-spa' | 'body-laser' | 'nail-art'
  >('all');
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    phone: '',
    service:
      'Combo Nàng Thơ Thư Giãn (Gội Dưỡng Sinh + Massage Vai Gáy + Đắp Mặt Nạ)',
    date: '2026-11-16',
    timeSlot: '15:00',
    notes: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const visibleMenuItems = useMemo(() => {
    if (activePriceTab === 'all') return PRICE_MENU_ITEMS;
    return PRICE_MENU_ITEMS.filter((item) => item.category === activePriceTab);
  }, [PRICE_MENU_ITEMS, activePriceTab]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.fullName.trim() || !bookingForm.phone.trim()) return;
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#fff7fa] text-slate-800 antialiased selection:bg-[#e11d74] selection:text-white">
      {/* 1. BLUSH PINK & ROSE HEADER WITH "ENBI Bảo Bảo — Nail. Beauty. Spa" EMBLEM */}
      <header
        id="trang-chu"
        className="sticky top-0 z-50 border-b border-pink-200/80 bg-white/95 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          {/* Left ENBI Bảo Bảo Emblem Logo (Matching top-left of SPA018-spa_15.jpg) */}
          <a href="#trang-chu" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white shadow-md ring-2 ring-pink-300">
              <Sparkles className="h-5 w-5 text-[#ec4899]" />
              <span className=" -bottom-0.5 -right-0.5 absolute h-3.5 w-3.5 rounded-full bg-[#e11d74] ring-2 ring-white" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-900">
                  {business.brandTitle}
                </span>
                <span className="font-serif text-xl font-bold italic text-[#d81b60]">
                  {business.scriptTitle}
                </span>
              </div>
              <span className="block text-[10px] font-medium tracking-[0.18em] text-pink-600">
                {business.subBrand}
              </span>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden items-center gap-5 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-[#e11d74]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2.5">
            <a
              href="#dat-lich-enbi"
              className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#e11d74] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:brightness-110"
            >
              ĐẶT HẸN NGAY
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 text-pink-700 lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-pink-100 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#e11d74]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (Blush Pink Silk Curtain Backdrop + Tilted White-Framed Photo Collage + Purple/Magenta Headline Badges) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fce4ec] via-[#f8bbd0]/65 to-[#f3e5f5] py-14 lg:py-20">
        {/* Decorative Lantern Glows */}
        <div className="pointer-events-none absolute -top-10 left-10 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-pink-400/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Tilted Polaroid Collage + Purple & Pink Headline Banner Boxes (Matching SPA018-spa_15.jpg) */}
            <div className="lg:col-span-7">
              {/* Top 2 Tilted White-Framed Spa Service Photos */}
              <div className="mb-6 grid grid-cols-2 gap-4 sm:gap-6">
                {POLAROID_HIGHLIGHTS.slice(0, 2).map((pol) => (
                  <div
                    key={pol.id}
                    className={`overflow-hidden rounded-2xl border-[5px] border-white bg-white shadow-xl transition duration-300 hover:rotate-0 ${pol.rotationClass}`}
                  >
                    <img
                      src={pol.image}
                      alt={pol.title}
                      className="h-36 w-full object-cover sm:h-44"
                    />
                    <div className="bg-white px-3 py-2">
                      <p className="truncate text-[11px] font-extrabold text-[#d81b60]">
                        {pol.category}
                      </p>
                      <p className="truncate text-xs font-bold text-slate-800">
                        {pol.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bold Purple & Pink Stacked Headline Ribbons (Exact Match to SPA018-spa_15.jpg) */}
              <div className="space-y-2.5">
                <div className="inline-block rounded-xl bg-[#7b1fa2] px-5 py-3 shadow-lg">
                  <h1 className="text-xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-[34px]">
                    {HERO_COLLAGE.purpleBadgeText}
                  </h1>
                </div>

                <div className="block">
                  <div className="inline-block rounded-xl bg-[#e91e63] px-5 py-3 shadow-lg">
                    <h2 className="text-lg font-black uppercase leading-tight tracking-tight text-white sm:text-2xl">
                      {HERO_COLLAGE.pinkBadgeText}
                    </h2>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                {HERO_COLLAGE.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#bang-gia-dich-vu"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e91e63] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-pink-500/30 transition hover:bg-[#c2185b]"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Xem Bảng Giá Nail & Beauty</span>
                </a>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#7b1fa2] bg-white px-6 py-3 text-xs font-extrabold text-[#7b1fa2] transition hover:bg-[#7b1fa2] hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  <span>Tư vấn: {primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Pink-Outlined Hero Portrait + 2 Side Tilted Service Frames */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                {/* Main Portrait with Hot-Pink Outline */}
                <div className="overflow-hidden rounded-[32px] border-[6px] border-[#e91e63] bg-white shadow-2xl">
                  <img
                    src={HERO_COLLAGE.mainPortraitImage}
                    alt="Khách hàng trải nghiệm tại Enbi Bảo Bảo Spa"
                    className="h-[400px] w-full object-cover sm:h-[460px]"
                  />
                </div>

                {/* Floating Top-Right Tilted Frame */}
                <div className=" -right-3 -top-6 absolute hidden w-48 rotate-3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl sm:block">
                  <img
                    src={POLAROID_HIGHLIGHTS[2].image}
                    alt={POLAROID_HIGHLIGHTS[2].title}
                    className="h-28 w-full object-cover"
                  />
                  <p className="p-2 text-center text-[10px] font-bold text-slate-700">
                    Massage Đá Nóng & Vai Gáy
                  </p>
                </div>

                {/* Floating Bottom-Right Tilted Frame */}
                <div className=" -bottom-5 -right-3 absolute w-52 -rotate-2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
                  <img
                    src={POLAROID_HIGHLIGHTS[3].image}
                    alt={POLAROID_HIGHLIGHTS[3].title}
                    className="h-28 w-full object-cover"
                  />
                  <div className="bg-pink-50 px-3 py-1.5 text-center">
                    <p className="text-[10px] font-extrabold uppercase text-[#e91e63]">
                      NAIL & BEAUTY MENU
                    </p>
                    <p className="text-[11px] font-bold text-slate-800">
                      Trẻ Hóa Da & Triệt Lông Lạnh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: 4 CORE POLAROID SERVICE CARDS */}
      <section id="dich-vu-noi-bat" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-pink-100 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#e91e63]">
              Chăm Sóc Từ Tâm • Đẹp Chuẩn Toàn Diện
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              4 Liệu Pháp Được Yêu Thích Nhất Tại Enbi Bảo Bảo
            </h2>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {POLAROID_HIGHLIGHTS.map((card) => (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-3xl border border-pink-100 bg-[#fff9fb] p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#e91e63] hover:shadow-xl"
              >
                <div>
                  <div className="relative h-52 overflow-hidden rounded-2xl border-4 border-white shadow">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-2.5 top-2.5 rounded-full bg-[#e91e63] px-3 py-1 text-xs font-extrabold text-white shadow">
                      Từ {card.priceFrom}
                    </span>
                  </div>

                  <div className="px-2 pt-4">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#7b1fa2]">
                      <span>{card.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {card.duration}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-base font-extrabold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 px-2 pt-2">
                  <a
                    href="#dat-lich-enbi"
                    onClick={() =>
                      setBookingForm((prev) => ({
                        ...prev,
                        service: card.title,
                      }))
                    }
                    className="block w-full rounded-full bg-pink-100 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-[#d81b60] transition group-hover:bg-[#e91e63] group-hover:text-white"
                  >
                    Đặt lịch dịch vụ này
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: INTERACTIVE "NAIL & BEAUTY — BẢNG GIÁ DỊCH VỤ" MENU BOOKLET */}
      <section
        id="bang-gia-dich-vu"
        className="bg-gradient-to-b from-[#fdf2f7] to-white py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7b1fa2]">
              Minh Bạch 100% • Không Phát Sinh Phụ Phí
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              NAIL & BEAUTY — BẢNG GIÁ DỊCH VỤ NIÊM YẾT
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">
              Cẩm nang bảng giá chính thức của Enbi Bảo Bảo Spa giúp các nàng dễ
              dàng lựa chọn gói làm đẹp lẻ hoặc thẻ liệu trình tiết kiệm đến
              30%.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { key: 'all', label: 'Tất Cả Dịch Vụ' },
              { key: 'skincare', label: 'Chăm Sóc & Điều Trị Da' },
              { key: 'hair-spa', label: 'Gội Đầu Dưỡng Sinh' },
              { key: 'body-laser', label: 'Massage Body & Triệt Lông' },
              { key: 'nail-art', label: 'Nail Art & Chà Gót Hồng' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() =>
                  setActivePriceTab(
                    tab.key as
                      | 'all'
                      | 'skincare'
                      | 'hair-spa'
                      | 'body-laser'
                      | 'nail-art'
                  )
                }
                className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition ${
                  activePriceTab === tab.key
                    ? 'bg-[#e91e63] text-white shadow-md'
                    : 'border border-pink-200 bg-white text-slate-700 hover:border-[#e91e63]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Floral Pink Menu Booklet Card */}
          <div className="mt-8 overflow-hidden rounded-3xl border-2 border-pink-200 bg-white shadow-xl">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#7b1fa2] to-[#e91e63] px-6 py-4 text-white">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs font-extrabold uppercase tracking-widest sm:text-sm">
                  ENBI BẢO BẢO • MENU DỊCH VỤ CHI TIẾT
                </span>
              </div>
              <span className="text-xs font-semibold text-pink-100">
                Cam kết không nhận Tip
              </span>
            </div>

            <div className="divide-y divide-pink-100 p-4 sm:p-6">
              {visibleMenuItems.map((row) => (
                <div
                  key={row.id}
                  className="flex flex-col justify-between gap-4 py-4 sm:flex-row sm:items-center"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-pink-50 px-2.5 py-0.5 text-[10px] font-bold text-[#e91e63]">
                        {row.categoryLabel}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        • {row.duration}
                      </span>
                      {row.popular && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-800">
                          <Star className="h-3 w-3 fill-current" />
                          Hot
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
                      {row.serviceName}
                    </h3>
                    <p className="text-xs text-slate-500">{row.detail}</p>
                  </div>

                  <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
                    <div className="text-left sm:text-right">
                      <span className="block text-sm font-black text-[#e91e63] sm:text-base">
                        {row.singlePrice} / buổi
                      </span>
                      <span className="block text-[11px] font-semibold text-[#7b1fa2]">
                        Thẻ: {row.comboPrice}
                      </span>
                    </div>

                    <a
                      href="#dat-lich-enbi"
                      onClick={() =>
                        setBookingForm((prev) => ({
                          ...prev,
                          service: row.serviceName,
                        }))
                      }
                      className="rounded-full border border-[#e91e63] px-4 py-2 text-xs font-extrabold text-[#e91e63] transition hover:bg-[#e91e63] hover:text-white"
                    >
                      Chọn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: COMBO ƯU ĐÃI THÁNG & KHÔNG GIAN HỒNG PASTEL */}
      <section id="combo-uu-dai" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e91e63]">
              Đặc Quyền Đặt Hẹn Online
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Gói Combo Thư Giãn Toàn Diện Tiết Kiệm 35%
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {COMBO_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-between rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white via-[#fff8fb] to-pink-50/70 p-7 shadow-lg"
              >
                <div>
                  <span className="inline-block rounded-full bg-[#7b1fa2] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {pkg.badge} • {pkg.duration}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                    {pkg.name}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-2xl font-black text-[#e91e63]">
                      {pkg.salePrice}
                    </span>
                    <span className="text-sm font-medium text-slate-400 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-pink-100 pt-4">
                    {pkg.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-medium text-slate-700 sm:text-sm"
                      >
                        <Heart className="mt-0.5 h-4 w-4 shrink-0 fill-[#e91e63] text-[#e91e63]" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="#dat-lich-enbi"
                    onClick={() =>
                      setBookingForm((prev) => ({
                        ...prev,
                        service: pkg.name,
                      }))
                    }
                    className="block w-full rounded-full bg-[#e91e63] py-3 text-center text-xs font-extrabold uppercase tracking-widest text-white shadow transition hover:bg-[#c2185b]"
                  >
                    Giữ suất ưu đãi Combo này
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPOINTMENT FORM & ROSE-PLUM FOOTER */}
      <footer
        id="dat-lich-enbi"
        className="bg-gradient-to-b from-[#4a154b] to-[#2e0d30] text-pink-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Info */}
            <div className="space-y-4 lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e91e63] text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-extrabold uppercase tracking-widest text-pink-200">
                    {business.brandTitle} {business.scriptTitle}
                  </span>
                  <span className="block text-xs text-pink-300">
                    {business.subBrand}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-pink-100/85 sm:text-sm">
                {business.tagline}. Không gian rèm hồng ấm cúng, kỹ thuật viên
                đồng phục hồng chỉnh chu, nhẹ nhàng và tận tâm.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-pink-100">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f48fb1]" />
                  <span>{business.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#f48fb1]" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                    className="font-bold text-white hover:text-[#f48fb1]"
                  >
                    {primaryPhone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#f48fb1]" />
                  <span>{primaryEmail}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#f48fb1]" />
                  <span>{business.workingHours}</span>
                </p>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-8">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#e91e63]">
                  Giữ Giường Trước • Không Cần Chờ Đợi
                </span>
                <h3 className="mt-1 font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                  Đặt Lịch Hẹn Làm Đẹp Cùng Enbi Bảo Bảo
                </h3>

                {bookingSuccess ? (
                  <div className="mt-6 rounded-2xl border border-pink-200 bg-pink-50 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-[#e91e63]" />
                    <h4 className="mt-2 text-base font-extrabold text-slate-900">
                      Đặt Lịch Hẹn Thành Công!
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Cảm ơn nàng <strong>{bookingForm.fullName}</strong>! Lễ
                      tân Enbi Spa sẽ gọi xác nhận qua số{' '}
                      <strong>{bookingForm.phone}</strong> ngay.
                    </p>
                    <button
                      type="button"
                      onClick={() => setBookingSuccess(false)}
                      className="mt-4 text-xs font-extrabold text-[#e91e63] underline"
                    >
                      Đặt thêm lịch cho bạn bè
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleBookingSubmit}
                    className="mt-5 space-y-3.5"
                  >
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Tên của nàng *"
                        value={bookingForm.fullName}
                        onChange={(e) =>
                          setBookingForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#e91e63] focus:bg-white focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại (Zalo) *"
                        value={bookingForm.phone}
                        onChange={(e) =>
                          setBookingForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#e91e63] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <input
                          type="date"
                          value={bookingForm.date}
                          onChange={(e) =>
                            setBookingForm((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-3.5 py-3 text-xs text-slate-700 focus:border-[#e91e63] focus:outline-none"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <input
                          type="text"
                          value={bookingForm.service}
                          onChange={(e) =>
                            setBookingForm((prev) => ({
                              ...prev,
                              service: e.target.value,
                            }))
                          }
                          placeholder="Dịch vụ quan tâm"
                          className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-3 text-xs text-slate-800 focus:border-[#e91e63] focus:outline-none"
                        />
                      </div>
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Ghi chú (Đi 2 người, chọn kỹ thuật viên quen, da nhạy cảm...)"
                      value={bookingForm.notes}
                      onChange={(e) =>
                        setBookingForm((prev) => ({
                          ...prev,
                          notes: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-pink-200 bg-pink-50/40 px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#e91e63] focus:bg-white focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7b1fa2] to-[#e91e63] py-3.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition hover:brightness-110"
                    >
                      <Send className="h-4 w-4" />
                      <span>XÁC NHẬN ĐẶT LỊCH HẸN</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#230924] py-4 text-center text-xs text-pink-200/70">
          © {new Date().getFullYear()} {business.name}. Nail • Beauty • Spa.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
