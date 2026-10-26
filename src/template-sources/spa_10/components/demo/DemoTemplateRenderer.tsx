'use client';

import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  Send,
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

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-[1px] w-10 bg-[#e5a93c]" />
        <span className="font-serif text-xs italic text-[#e5a93c]">
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-1.5 font-serif text-2xl font-bold uppercase tracking-wide sm:text-3xl ${
          light ? 'text-white' : 'text-stone-900'
        }`}
      >
        {title}
      </h2>
    </div>
  );
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
    HERO_SLIDES,
    WELCOME_STORY,
    FOUR_PILLARS,
    ROOM_TYPES,
    TESTIMONIAL_BANNER,
    LATEST_NEWS,
    WELLNESS_EVENTS,
    FIVE_PHOTO_STRIP,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '076 922 0162';
  const primaryEmail = business.email?.[0] || 'demonhunterg@gmail.com';
  const secondaryEmail = business.email?.[1] || 'mon@mona.media';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [searchForm, setSearchForm] = useState({
    checkIn: '',
    checkOut: '',
    adults: '1',
    children: '0',
  });
  const [searchToast, setSearchToast] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const currentSlide = HERO_SLIDES[activeSlideIdx] || HERO_SLIDES[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchToast(
      `Đã kiểm tra tình trạng phòng trống và lịch trị liệu thảo mộc cho ${searchForm.adults} người lớn. Vui lòng chọn hạng phòng bên dưới!`
    );
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 antialiased selection:bg-[#e5a93c] selection:text-white">
      {/* 1. HEADER (White Bar with Mountain Line Emblem "HOTEL MONA" + Gold CTA "#e5a93c") */}
      <header
        id="trang-chu"
        className="sticky top-0 z-50 border-b border-stone-100 bg-white/95 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          {/* Left Mountain Emblem Logo */}
          <a href="#trang-chu" className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-stone-900">
              <Mountain className="h-6 w-6 stroke-[1.75] text-stone-800" />
            </div>
            <span className="mt-0.5 text-xs font-extrabold uppercase tracking-[0.18em] text-stone-900">
              {business.shortLogo}
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wider transition ${
                  idx === 0
                    ? 'text-[#e5a93c]'
                    : 'text-stone-700 hover:text-[#e5a93c]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Phone + Gold "ĐẶT PHÒNG" Button */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
              className="hidden items-center gap-1.5 text-xs font-bold text-stone-800 hover:text-[#e5a93c] sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-stone-700" />
              <span>{primaryPhone}</span>
            </a>

            <a
              href="#loai-phong"
              className="rounded bg-[#e5a93c] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#cf942c]"
            >
              ĐẶT PHÒNG
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-stone-200 text-stone-700 lg:hidden"
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
          <div className="border-t border-stone-100 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#e5a93c]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="pt-1 text-xs font-bold text-[#e5a93c]"
              >
                Hotline: {primaryPhone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER ("MONA MEDIA / Mountain Hotel" + Inline 5-Col Booking Bar + Slider Dots) */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="relative flex min-h-[540px] flex-col items-center justify-center px-4 py-20">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/45 to-slate-950/75" />

          <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-stone-200">
              {currentSlide.eyebrow}
            </span>
            <h1 className="mt-2 font-serif text-5xl font-bold tracking-wide text-white sm:text-6xl lg:text-7xl">
              {currentSlide.title}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-xs text-stone-200 sm:text-sm">
              {currentSlide.subtitle}
            </p>

            {/* Inline 5-Column White + Gold Booking Bar */}
            <form
              onSubmit={handleSearch}
              className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-5"
            >
              <input
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                placeholder="Check-in Date"
                value={searchForm.checkIn}
                onChange={(e) =>
                  setSearchForm((prev) => ({
                    ...prev,
                    checkIn: e.target.value,
                  }))
                }
                className="w-full bg-white px-3.5 py-3 text-xs text-stone-700 placeholder-stone-400 focus:outline-none"
              />
              <input
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
                placeholder="Check-out Date"
                value={searchForm.checkOut}
                onChange={(e) =>
                  setSearchForm((prev) => ({
                    ...prev,
                    checkOut: e.target.value,
                  }))
                }
                className="w-full bg-white px-3.5 py-3 text-xs text-stone-700 placeholder-stone-400 focus:outline-none"
              />
              <select
                value={searchForm.adults}
                onChange={(e) =>
                  setSearchForm((prev) => ({ ...prev, adults: e.target.value }))
                }
                className="w-full bg-white px-3.5 py-3 text-xs text-stone-700 focus:outline-none"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select
                value={searchForm.children}
                onChange={(e) =>
                  setSearchForm((prev) => ({
                    ...prev,
                    children: e.target.value,
                  }))
                }
                className="w-full bg-white px-3.5 py-3 text-xs text-stone-700 focus:outline-none"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#e5a93c] py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#cf942c]"
              >
                SEARCH
              </button>
            </form>

            {searchToast && (
              <div className="mx-auto mt-4 max-w-2xl rounded bg-black/70 px-4 py-2 text-xs text-amber-200 backdrop-blur-sm">
                {searchToast}
              </div>
            )}
          </div>

          {/* Bottom Slider Dots */}
          <div className="absolute bottom-6 flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSlideIdx(idx)}
                className={`h-2.5 w-2.5 rounded-full border border-white transition ${
                  idx === activeSlideIdx ? 'bg-white' : 'bg-transparent'
                }`}
                aria-label={s.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: "— Chào mừng đến với / MONA HOTEL" (2-Col Story) + 4 Vertical Hover Strips ("Phòng", "Nhà hàng", "Spa", "Khác") */}
      <section id="gioi-thieu" className="bg-white pt-16">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <SectionHeading
            eyebrow={WELCOME_STORY.eyebrow}
            title={WELCOME_STORY.heading}
          />

          <div className="mt-6 grid gap-8 text-xs leading-relaxed text-stone-600 md:grid-cols-2 sm:text-sm">
            <p>{WELCOME_STORY.leftColumn}</p>
            <p>{WELCOME_STORY.rightColumn}</p>
          </div>
        </div>

        {/* Full-Width 4-Column Vertical Image Strip ("Phòng", "Nhà hàng", "Spa", "Khác") */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FOUR_PILLARS.map((pillar) => (
            <a
              key={pillar.id}
              href={pillar.href}
              className="group relative h-80 overflow-hidden bg-stone-900 sm:h-96"
            >
              <img
                src={pillar.image}
                alt={pillar.title}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/25" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="font-serif text-2xl font-normal tracking-wide text-white sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-xs text-stone-200 opacity-0 transition duration-300 group-hover:opacity-100">
                  {pillar.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. SECTION 2: "— Chào mừng đến với / LOẠI PHÒNG" (3 Cards with Specs, Price & 5 Gold Stars) */}
      <section id="loai-phong" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <SectionHeading eyebrow="Chào mừng đến với" title="LOẠI PHÒNG" />
            <a
              href="#lien-he"
              className="text-xs font-bold text-[#e5a93c] hover:underline"
            >
              Xem tất cả
            </a>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {ROOM_TYPES.map((room) => (
              <div
                key={room.id}
                className="group border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-stone-800">
                    {room.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-stone-500">
                    <span>» {room.size}</span>
                    <span>» {room.bed}</span>
                    <span>» {room.view}</span>
                  </div>
                  <p className="mt-2 text-[11px] text-stone-400">
                    {room.vndNote}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                    <div className="text-xs font-bold uppercase text-stone-600">
                      GIÁ:{' '}
                      <span className="text-sm text-[#e5a93c]">
                        {room.priceDisplay}
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 text-[#e5a93c]">
                      {Array.from({ length: room.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: FULL-WIDTH DARK WOOD VILLA BANNER WITH GOLD-BORDERED "Khách hàng nhận xét" BOX */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <img
          src={TESTIMONIAL_BANNER.backgroundImage}
          alt="Không gian nghỉ dưỡng"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="max-w-lg border border-[#e5a93c] bg-black/55 p-8 text-white backdrop-blur-sm sm:p-10">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#e5a93c]" />
              <span className="font-serif text-xs italic text-[#e5a93c]">
                {TESTIMONIAL_BANNER.eyebrow}
              </span>
            </div>

            <div className="mt-5">
              <img
                src={TESTIMONIAL_BANNER.avatar}
                alt={TESTIMONIAL_BANNER.authorLabel}
                className="h-16 w-16 rounded-full border-2 border-[#e5a93c] object-cover"
              />
            </div>

            <div className="mt-4 flex items-center gap-1 text-[#e5a93c]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>

            <blockquote className="mt-3 font-serif text-sm italic leading-relaxed text-stone-100">
              &ldquo;{TESTIMONIAL_BANNER.quote}&rdquo;
            </blockquote>

            <p className="mt-4 font-serif text-sm font-bold text-white">
              {TESTIMONIAL_BANNER.authorLabel}
            </p>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: SPLIT "TIN MỚI NHẤT" (Left 2 Cards) + "SỰ KIỆN" (Right Gold-Bordered Event List) */}
      <section id="tin-tuc" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left 8 Columns: TIN MỚI NHẤT */}
            <div className="lg:col-span-8">
              <SectionHeading eyebrow="Chào mừng đến với" title="TIN MỚI NHẤT" />

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {LATEST_NEWS.map((post) => (
                  <article key={post.id} className="group">
                    <div className="h-52 overflow-hidden bg-stone-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-serif text-lg font-bold text-stone-800 group-hover:text-[#e5a93c]">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs text-stone-400">{post.date}</p>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-600">
                        {post.excerpt}
                      </p>
                      <a
                        href="#lien-he"
                        className="mt-4 inline-block border border-[#e5a93c] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#e5a93c] transition hover:bg-[#e5a93c] hover:text-white"
                      >
                        CHI TIẾT
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 4 Columns: SỰ KIỆN (Gold-Bordered Box) */}
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Chào mừng đến với" title="SỰ KIỆN" />

              <div className="mt-8 space-y-5 border border-[#e5a93c]/60 bg-white p-5">
                {WELLNESS_EVENTS.map((ev) => (
                  <a
                    key={ev.id}
                    href="#lien-he"
                    className="group flex items-start gap-3.5"
                  >
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="h-16 w-24 shrink-0 object-cover"
                    />
                    <div>
                      <h3 className="text-xs font-bold leading-snug text-stone-800 group-hover:text-[#e5a93c]">
                        {ev.title}
                      </h3>
                      <span className="mt-1 block text-[11px] text-stone-400">
                        {ev.date}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: 5-IMAGE FULL-WIDTH STRIP + WARM OFF-WHITE FOOTER (#f5f3ef) + DARK COPYRIGHT BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {FIVE_PHOTO_STRIP.map((imgUrl, index) => (
          <div key={index} className="h-48 overflow-hidden sm:h-56">
            <img
              src={imgUrl}
              alt={`Không gian MountSpa ${index + 1}`}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <footer id="lien-he" className="bg-[#f5f3ef] text-stone-700">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: HOTEL MONA Emblem + Intro */}
            <div className="space-y-3 lg:col-span-3">
              <div className="inline-flex flex-col items-start">
                <Mountain className="h-7 w-7 text-stone-800" />
                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-stone-900">
                  {business.shortLogo}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-stone-500">
                Khách sạn & Viện dưỡng sinh thảo mộc Mona được thành lập vào năm
                2017 với 26 phòng nghỉ và Bungalow phù hợp với nhiều nhu cầu
                nghỉ dưỡng của khách hàng.
              </p>
            </div>

            {/* Col 2: MENU + Gold "Đặt phòng" Button */}
            <div className="space-y-3 lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                MENU
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                <a href="#trang-chu" className="text-[#e5a93c]">
                  Trang chủ
                </a>
                <a href="#gioi-thieu" className="hover:text-[#e5a93c]">
                  Giới thiệu
                </a>
                <a href="#loai-phong" className="hover:text-[#e5a93c]">
                  Phòng
                </a>
                <a href="#tin-tuc" className="hover:text-[#e5a93c]">
                  Tin tức
                </a>
                <a href="#lien-he" className="hover:text-[#e5a93c]">
                  Liên hệ
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#loai-phong"
                  className="inline-block rounded bg-[#e5a93c] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#cf942c]"
                >
                  Đặt phòng
                </a>
              </div>
            </div>

            {/* Col 3: LIÊN HỆ */}
            <div className="space-y-2.5 text-xs text-stone-600 lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                LIÊN HỆ
              </h3>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-stone-700" />
                <span>{business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-stone-700" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-[#e5a93c]"
                >
                  {primaryPhone}
                </a>
              </p>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-stone-700" />
                <div>
                  <p>{primaryEmail}</p>
                  <p>{secondaryEmail}</p>
                </div>
              </div>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-stone-700" />
                <span>{business.skype}</span>
              </p>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div className="space-y-3 lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-800">
                ĐĂNG KÝ
              </h3>
              <p className="text-xs leading-relaxed text-stone-500">
                Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
              </p>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 rounded bg-emerald-50 p-2.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Đã đăng ký bản tin thành công!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex items-center border border-stone-200 bg-white px-3 py-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-stone-700 placeholder-stone-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-[#e5a93c] hover:text-[#cf942c]"
                    aria-label="Gửi đăng ký"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}

              <div className="flex items-center gap-3 pt-1 text-xs font-bold text-stone-500">
                <a href="#lien-he" className="hover:text-[#e5a93c]">
                  FB
                </a>
                <a href="#lien-he" className="hover:text-[#e5a93c]">
                  IG
                </a>
                <a href="#lien-he" className="hover:text-[#e5a93c]">
                  TW
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1b1b1b] py-3.5 text-center text-[11px] text-stone-400">
          © Bản quyền thuộc về . Thiết kế website {business.name}
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
