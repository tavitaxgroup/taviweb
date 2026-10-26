'use client';

import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Coffee,
  Compass,
  Diamond,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Umbrella,
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
    HERO_DATA,
    EDITORIAL_INTRO,
    BENTO_SUITES,
    AMAN_WELLNESS_SPLIT,
    ECO_HIGHLIGHTS,
    VIDEO_PARALLAX,
    GUEST_REVIEWS,
    COUNTDOWN_BANNER,
    NEWS_ARTICLES,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '076 922 0162';
  const primaryEmail = business.email?.[0] || 'mon@mona.media';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    checkIn: '2026-11-20',
    checkOut: '2026-11-23',
    adults: '1',
    children: '0',
  });
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [selectedSuite, setSelectedSuite] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const largeLeftSuite = BENTO_SUITES[0];
  const wideTopRightSuite = BENTO_SUITES[1];
  const bottomRightSuites = BENTO_SUITES.slice(2, 4);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus(
      `Hệ thống đã ghi nhận yêu cầu giữ chỗ từ ${bookingForm.checkIn} đến ${bookingForm.checkOut} cho ${bookingForm.adults} khách. Chuyên viên Concierge sẽ liên hệ xác nhận ngay.`
    );
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 antialiased selection:bg-[#c5b393] selection:text-stone-900">
      {/* 1. HEADER (White Bar with Dark Navy Vertical Crest "Mona" on Left + Champagne Gold "#c5b393" CTA "ĐẶT NGAY") */}
      <header
        id="trang-chu"
        className="sticky top-0 z-50 border-b border-stone-100 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-8">
            {/* Dark Navy Vertical Crest Badge */}
            <a
              href="#trang-chu"
              className="flex flex-col items-center justify-center bg-[#1b2a47] px-5 py-3 text-white shadow-md"
            >
              <Diamond className="h-4 w-4 text-[#c5b393]" />
              <span className="mt-1 font-serif text-base tracking-wider text-white">
                {business.crestName}
              </span>
            </a>

            {/* Clean Navigation Links */}
            <nav className="hidden items-center gap-6 md:flex">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-medium text-stone-600 transition hover:text-[#1b2a47]"
                >
                  <span>{item.label}</span>
                  {idx === 1 && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Champagne CTA Button */}
          <div className="flex items-center gap-3 py-2">
            <a
              href="#loai-phong"
              className="bg-[#c5b393] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#b39f7d]"
            >
              ĐẶT NGAY
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center border border-stone-200 text-stone-700 md:hidden"
              aria-label="Menu"
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
          <div className="border-t border-stone-100 bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs font-medium text-stone-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (Aerial Turquoise Pool + Outlined CTA + Bottom Dark Booking Bar) */}
      <section className="relative bg-slate-900 text-white">
        <div className="relative flex min-h-[540px] flex-col justify-between">
          <img
            src={HERO_DATA.backgroundImage}
            alt={business.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f293a]/55" />

          <div className="relative mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-stone-200">
              {HERO_DATA.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
              {HERO_DATA.title}
            </h1>
            <a
              href="#loai-phong"
              className="mt-7 border border-white/80 bg-white/10 px-7 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-[#c5b393] hover:border-[#c5b393]"
            >
              {HERO_DATA.ctaLabel}
            </a>
          </div>

          {/* Dark Booking Bar */}
          <div className="relative bg-[#11161d]/95">
            <form
              onSubmit={handleBookingSubmit}
              className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
            >
              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-stone-300">
                  CHECK-IN *
                </label>
                <input
                  type="date"
                  value={bookingForm.checkIn}
                  onChange={(e) =>
                    setBookingForm((prev) => ({
                      ...prev,
                      checkIn: e.target.value,
                    }))
                  }
                  className="w-full border border-stone-700 bg-transparent px-3 py-2 text-xs text-stone-200 focus:border-[#c5b393] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-stone-300">
                  CHECK-OUT *
                </label>
                <input
                  type="date"
                  value={bookingForm.checkOut}
                  onChange={(e) =>
                    setBookingForm((prev) => ({
                      ...prev,
                      checkOut: e.target.value,
                    }))
                  }
                  className="w-full border border-stone-700 bg-transparent px-3 py-2 text-xs text-stone-200 focus:border-[#c5b393] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-stone-300">
                  ADULTS
                </label>
                <select
                  value={bookingForm.adults}
                  onChange={(e) =>
                    setBookingForm((prev) => ({
                      ...prev,
                      adults: e.target.value,
                    }))
                  }
                  className="w-full border border-stone-700 bg-[#11161d] px-3 py-2 text-xs text-stone-200 focus:border-[#c5b393] focus:outline-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-stone-300">
                  CHILDREN
                </label>
                <select
                  value={bookingForm.children}
                  onChange={(e) =>
                    setBookingForm((prev) => ({
                      ...prev,
                      children: e.target.value,
                    }))
                  }
                  className="w-full border border-stone-700 bg-[#11161d] px-3 py-2 text-xs text-stone-200 focus:border-[#c5b393] focus:outline-none"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#c5b393] py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b39f7d]"
                >
                  SEARCH
                </button>
              </div>
            </form>

            {bookingStatus && (
              <div className="mx-auto max-w-6xl px-4 pb-4">
                <p className="rounded bg-[#c5b393]/20 px-4 py-2 text-xs text-[#e3d5bc]">
                  {bookingStatus}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: EDITORIAL INTRO STRIP (Left Pool Photo with Stamp + Center Heading + Right Quote) */}
      <section id="gioi-thieu" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* Left Image with Circular Stamp */}
            <div className="relative md:col-span-4">
              <div className="overflow-hidden">
                <img
                  src={EDITORIAL_INTRO.image}
                  alt={EDITORIAL_INTRO.heading}
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className=" -top-5 -right-3 absolute hidden h-16 w-16 items-center justify-center rounded-full border border-stone-300 bg-white/95 p-2 text-center font-serif text-[10px] italic leading-tight text-stone-500 shadow-sm sm:flex">
                {EDITORIAL_INTRO.stampText}
              </div>
            </div>

            {/* Center Heading */}
            <div className="md:col-span-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                {EDITORIAL_INTRO.locationEyebrow}
              </span>
              <h2 className="mt-2 font-serif text-xl leading-snug text-stone-800 sm:text-2xl">
                {EDITORIAL_INTRO.heading}
              </h2>
            </div>

            {/* Right Quote */}
            <div className="md:col-span-4">
              <p className="text-xs italic leading-relaxed text-stone-500">
                {EDITORIAL_INTRO.quote}
              </p>
              <p className="mt-3 text-[11px] font-medium text-stone-400">
                {EDITORIAL_INTRO.quoteAuthor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: "DU LỊCH & NGHỈ DƯỠNG / Khách sạn lấy cảm hứng từ sinh thái" (Asymmetric Bento Grid) */}
      <section id="loai-phong" className="bg-white pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
              DU LỊCH & NGHỈ DƯỠNG
            </span>
            <h2 className="mt-1.5 font-serif text-2xl text-stone-800 sm:text-3xl">
              Khách sạn & Spa lấy cảm hứng từ sinh thái
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {/* Left Large Square */}
            {largeLeftSuite && (
              <div
                onClick={() => setSelectedSuite(largeLeftSuite.subtitle)}
                className="group relative h-[360px] cursor-pointer overflow-hidden bg-stone-900 lg:col-span-6 lg:h-[420px]"
              >
                <img
                  src={largeLeftSuite.image}
                  alt={largeLeftSuite.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="font-serif text-lg font-medium">
                    {largeLeftSuite.title}
                  </h3>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-stone-200">
                    XEM CHI TIẾT • {largeLeftSuite.price}
                  </span>
                </div>
              </div>
            )}

            {/* Right Column: Top Wide + Bottom 2 Small Squares */}
            <div className="grid gap-5 lg:col-span-6">
              {wideTopRightSuite && (
                <div
                  onClick={() => setSelectedSuite(wideTopRightSuite.subtitle)}
                  className="group relative h-48 cursor-pointer overflow-hidden bg-stone-900"
                >
                  <img
                    src={wideTopRightSuite.image}
                    alt={wideTopRightSuite.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-serif text-base font-medium">
                      {wideTopRightSuite.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-stone-200">
                      XEM CHI TIẾT • {wideTopRightSuite.price}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-5">
                {bottomRightSuites.map((suite) => (
                  <div
                    key={suite.id}
                    onClick={() => setSelectedSuite(suite.subtitle)}
                    className="group relative h-48 cursor-pointer overflow-hidden bg-stone-900"
                  >
                    <img
                      src={suite.image}
                      alt={suite.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-serif text-base font-medium">
                        {suite.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-stone-200">
                        XEM CHI TIẾT
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedSuite && (
            <div className="mt-4 rounded border border-[#c5b393] bg-stone-50 px-4 py-2.5 text-center text-xs text-stone-700">
              Đang chọn: <strong>{selectedSuite}</strong> — Liên hệ Hotline{' '}
              <strong>{primaryPhone}</strong> để nhận ưu đãi đặt sớm.
            </div>
          )}

          <div className="mt-8 text-center">
            <a
              href="#lien-he"
              className="inline-block border-b border-stone-400 pb-1 text-[11px] font-semibold uppercase tracking-widest text-stone-500 hover:border-stone-800 hover:text-stone-900"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: SPLIT DARK BROWN/CHARCOAL BOX ("Thưởng thức bơi lội và hơn thế nữa") + RIGHT POOLSIDE PHOTO */}
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#2b2623] px-6 py-16 text-white sm:px-12 lg:px-16">
          <div className="mx-auto max-w-md">
            <h2 className="font-serif text-3xl leading-snug text-white">
              {AMAN_WELLNESS_SPLIT.heading}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-stone-300 sm:text-sm">
              {AMAN_WELLNESS_SPLIT.description}
            </p>
            <div className="mt-7">
              <a
                href="#lien-he"
                className="inline-block bg-[#c5b393] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#b39f7d]"
              >
                {AMAN_WELLNESS_SPLIT.ctaLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="min-h-[340px] overflow-hidden bg-stone-900">
          <img
            src={AMAN_WELLNESS_SPLIT.image}
            alt={AMAN_WELLNESS_SPLIT.heading}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* 6. SECTION 4: "DU LỊCH & NGHỈ DƯỠNG / Khách sạn lấy cảm hứng từ sinh thái" (3 Minimalist Gold Line-Icon Cards) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
              DU LỊCH & NGHỈ DƯỠNG
            </span>
            <h2 className="mt-1.5 font-serif text-2xl text-stone-800 sm:text-3xl">
              Khách sạn lấy cảm hứng từ sinh thái
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ECO_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                className="border border-stone-100 bg-white p-8 text-center shadow-sm transition hover:border-[#c5b393]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-[#c5b393]">
                  {item.iconType === 'umbrella' && (
                    <Umbrella className="h-8 w-8 stroke-[1.25]" />
                  )}
                  {item.iconType === 'breakfast' && (
                    <Coffee className="h-8 w-8 stroke-[1.25]" />
                  )}
                  {item.iconType === 'compass' && (
                    <Compass className="h-8 w-8 stroke-[1.25]" />
                  )}
                </div>
                <h3 className="mt-4 font-serif text-base font-medium text-stone-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: FULL-WIDTH VIDEO BANNER */}
      <section className="relative h-80 overflow-hidden bg-slate-900 text-white sm:h-96">
        <img
          src={VIDEO_PARALLAX.image}
          alt={VIDEO_PARALLAX.heading}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#102a3a]/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/10 text-white backdrop-blur-sm">
            <Play className="h-5 w-5 fill-current" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-200">
            {VIDEO_PARALLAX.eyebrow}
          </span>
          <h2 className="mt-2 max-w-xl font-serif text-2xl leading-snug text-white sm:text-3xl">
            {VIDEO_PARALLAX.heading}
          </h2>
        </div>
      </section>

      {/* 8. SECTION 6: "NGƯỜI YÊU THÍCH KHÁCH SẠN / Khách hàng nhận xét" (3 Cards with TripAdvisor & Booking.com Badges) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
              NGƯỜI YÊU THÍCH KHÁCH SẠN
            </span>
            <h2 className="mt-1.5 font-serif text-2xl text-stone-800 sm:text-3xl">
              Khách hàng nhận xét
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GUEST_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col items-center border border-stone-100 bg-white p-7 text-center shadow-sm"
              >
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h3 className="mt-3 font-serif text-sm italic text-stone-700">
                  {rev.name}
                </h3>
                <p className="mt-3 flex-1 text-xs italic leading-relaxed text-stone-500">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="mt-5 pt-2 text-xs font-extrabold tracking-tight text-stone-800">
                  {rev.platform === 'tripadvisor' ? (
                    <span className="inline-flex items-center gap-1">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />
                      tripadvisor
                    </span>
                  ) : (
                    <span className="text-[#003580]">Booking.com</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: COUPLES RELAXATION BANNER WITH 4-BOX COUNTDOWN (4 NGÀY : 7 GIỜ : 11 PHÚT : 28 GIÂY) */}
      <section className="relative overflow-hidden py-20 text-white">
        <img
          src={COUNTDOWN_BANNER.image}
          alt={COUNTDOWN_BANNER.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-200">
            {COUNTDOWN_BANNER.eyebrow}
          </span>
          <h2 className="mt-2 font-serif text-3xl leading-snug text-white sm:text-4xl">
            {COUNTDOWN_BANNER.heading}
          </h2>
          <div className="mt-5">
            <a
              href="#lien-he"
              className="inline-block bg-[#c5b393] px-7 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#b39f7d]"
            >
              {COUNTDOWN_BANNER.ctaLabel}
            </a>
          </div>

          {/* 4 Dark Translucent Countdown Boxes */}
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 gap-3">
            {COUNTDOWN_BANNER.timerBoxes.map((box, i) => (
              <div
                key={i}
                className="bg-black/75 py-4 text-center backdrop-blur-sm"
              >
                <span className="block font-sans text-2xl font-bold text-white sm:text-3xl">
                  {box.value}
                </span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-stone-400">
                  {box.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION 8: "Tin tức & Ưu đãi" (3 Cards) + Map Callout + Deep Navy Footer (#16253d) */}
      <section id="tin-tuc" className="bg-white pt-16">
        <div className="mx-auto max-w-5xl px-4 pb-16">
          <div className="text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
              NGƯỜI YÊU THÍCH KHÁCH SẠN
            </span>
            <h2 className="mt-1.5 font-serif text-2xl text-stone-800 sm:text-3xl">
              Tin tức & Ưu đãi
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {NEWS_ARTICLES.map((art) => (
              <article
                key={art.id}
                className="group border border-stone-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-sm font-bold leading-snug text-stone-800 group-hover:text-[#1b2a47]">
                    {art.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-stone-400">{art.date}</p>
                  <p className="mt-3 text-xs leading-relaxed text-stone-500">
                    {art.excerpt}
                  </p>
                  <a
                    href="#lien-he"
                    className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest text-stone-600 hover:text-[#1b2a47]"
                  >
                    ĐỌC THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Full-Width Stylized Map Section with Pin Callout */}
        <div className="relative h-64 w-full overflow-hidden border-t border-stone-200 bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
            alt="Bản đồ vị trí LuxeSpa"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute left-6 top-6 max-w-xs rounded bg-white p-3.5 text-xs shadow-lg">
            <p className="font-bold text-stone-900">
              Công ty TNHH - MONA MEDIA ({business.name})
            </p>
            <p className="mt-0.5 text-[11px] text-stone-500">
              {business.address}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-amber-600">
              5.0 ★★★★★ (128 đánh giá)
            </p>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              <MapPin className="h-4 w-4" />
              <span>{business.crestName} LuxeSpa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Navy Footer (#16253d) */}
      <footer id="lien-he" className="bg-[#16253d] text-stone-300">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Mona Crest */}
            <div className="space-y-3 lg:col-span-3">
              <div className="flex items-center gap-2 text-white">
                <Diamond className="h-5 w-5 text-[#c5b393]" />
                <span className="font-serif text-xl">{business.crestName}</span>
              </div>
              <p className="text-xs leading-relaxed text-stone-400">
                {business.foundedNote}
              </p>
            </div>

            {/* Col 2: THÔNG TIN */}
            <div className="space-y-2.5 text-xs lg:col-span-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">
                THÔNG TIN
              </h3>
              <p className="flex items-start gap-2 text-stone-300">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c5b393]" />
                <span>{business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-stone-300">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#c5b393]" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white"
                >
                  {primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-stone-300">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#c5b393]" />
                <a href={`mailto:${primaryEmail}`} className="hover:text-white">
                  {primaryEmail}
                </a>
              </p>
            </div>

            {/* Col 3: GIỮ LIÊN LẠC */}
            <div className="space-y-2 text-xs lg:col-span-2">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">
                GIỮ LIÊN LẠC
              </h3>
              <ul className="space-y-1.5 text-stone-400">
                <li>
                  <a href="#trang-chu" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#loai-phong" className="hover:text-white">
                    Loại phòng
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    Tin tức
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: KHÔNG BỎ LỠ THÔNG TIN */}
            <div className="space-y-3 lg:col-span-4">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-white">
                KHÔNG BỎ LỠ THÔNG TIN
              </h3>
              {newsletterDone ? (
                <div className="flex items-center gap-2 rounded bg-emerald-950/60 p-3 text-xs text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Cảm ơn bạn đã đăng ký nhận ưu đãi từ LuxeSpa!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="space-y-2.5">
                  <input
                    type="email"
                    required
                    placeholder="Email của bạn"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#c5b393] py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#b39f7d]"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#101c2e] py-4 text-center text-[11px] text-stone-400">
          © All rights reserved. Thiết kế website {business.name}
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
