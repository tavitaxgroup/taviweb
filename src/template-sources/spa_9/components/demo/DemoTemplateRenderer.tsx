'use client';

import React, { useMemo, useState } from 'react';
import {
  Bath,
  CheckCircle2,
  ChevronDown,
  Coffee,
  Flower2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
  Waves,
  Wine,
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
    HERO_CONTENT,
    THREE_HIGHLIGHT_CARDS,
    OASIS_INTRO,
    SPA_SUITES,
    REJUVENATION_BANNER,
    TESTIMONIALS,
    TEAM_SPECIALISTS,
    POOLSIDE_SERVICES,
    POOLSIDE_BG_IMAGE,
    RESORT_ACTIVITIES,
    GALLERY_PHOTOS,
    VIDEO_BANNER,
    NEWS_OFFERS,
    PARTNER_BRANDS,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '076 922 0162';
  const primaryEmail = business.email?.[0] || 'mon@mona.media';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    checkIn: '2026-11-15',
    checkOut: '2026-11-18',
    adults: '2',
    children: '0',
  });
  const [bookingResult, setBookingResult] = useState<string | null>(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [contactSent, setContactSent] = useState(false);

  const activeTestimonial =
    TESTIMONIALS[activeTestimonialIdx] || TESTIMONIALS[0];

  const handleBookingSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingResult(
      `Đã tìm thấy ${SPA_SUITES.length} hạng phòng & gói khoáng nóng còn trống từ ${bookingForm.checkIn} đến ${bookingForm.checkOut} cho ${bookingForm.adults} người lớn.`
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.fullName.trim() || !contactForm.email.trim()) return;
    setContactSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#c86d44] selection:text-white">
      {/* 1. HEADER (Top Hotline Bar + Centered Cursive Serif "Mona Hotel" Logo + Terracotta CTA "#c86d44") */}
      <header id="trang-chu" className="border-b border-stone-200 bg-white">
        {/* Top Thin Strip */}
        <div className="border-b border-stone-100 bg-stone-50/70 text-[11px] text-stone-500">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
            <div>
              Liên hệ với chúng tôi qua HOTLINE:{' '}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="font-semibold text-stone-700 hover:text-[#c86d44]"
              >
                {primaryPhone}
              </a>
            </div>
            <div className="flex items-center gap-3 font-medium text-stone-500">
              <a href="#lien-he" className="hover:text-[#c86d44]">
                FB
              </a>
              <a href="#lien-he" className="hover:text-[#c86d44]">
                IG
              </a>
              <a href="#lien-he" className="hover:text-[#c86d44]">
                TW
              </a>
              <a href="#lien-he" className="hover:text-[#c86d44]">
                YT
              </a>
            </div>
          </div>
        </div>

        {/* Center Logo Row */}
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-5">
          <a href="#trang-chu" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c86d44] text-white shadow-sm">
              <Flower2 className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="block font-serif text-3xl italic tracking-wide text-[#c86d44]">
                {business.shortName}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-stone-400">
                {business.name}
              </span>
            </div>
          </a>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="border-t border-stone-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById('phong-khach-san')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex h-9 w-9 items-center justify-center text-stone-500 hover:text-[#c86d44]"
              aria-label="Tìm kiếm"
            >
              <Search className="h-4 w-4" />
            </button>

            <nav className="hidden items-center gap-6 lg:flex">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stone-700 transition hover:text-[#c86d44]"
                >
                  <span>{item.label}</span>
                  {idx === 1 && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#lien-he"
                className="bg-[#c86d44] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#b05b35]"
              >
                ĐẶT NGAY
              </a>
              <a
                href="#hoat-dong"
                className="hidden h-9 w-9 items-center justify-center text-stone-600 hover:text-[#c86d44] sm:flex"
                aria-label="Giỏ dịch vụ"
              >
                <ShoppingBag className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex h-9 w-9 items-center justify-center text-stone-700 lg:hidden"
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
            <div className="border-t border-stone-200 bg-stone-50 px-4 py-3 lg:hidden">
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-[#c86d44]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 2. HERO BANNER + DARK BOOKING BAR */}
      <section className="relative bg-stone-900 text-white">
        <div className="relative flex min-h-[540px] flex-col justify-between">
          <img
            src={HERO_CONTENT.backgroundImage}
            alt={business.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/80" />

          {/* Centered Hero Copy */}
          <div className="relative mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-100/90 sm:text-xs">
              {HERO_CONTENT.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-normal tracking-wide text-white sm:text-5xl lg:text-6xl">
              {HERO_CONTENT.title}
            </h1>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-200 sm:text-sm">
              {HERO_CONTENT.subtitle}
            </p>
            <a
              href="#phong-khach-san"
              className="mt-6 rounded-full bg-[#c86d44] px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#b05b35]"
            >
              {HERO_CONTENT.ctaLabel}
            </a>
          </div>

          {/* Bottom Dark Booking Bar (CHECK-IN, CHECK-OUT, ADULTS, CHILDREN, SEARCH) */}
          <div className="relative border-t border-white/10 bg-black/85 backdrop-blur-sm">
            <form
              onSubmit={handleBookingSearch}
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
                  className="w-full border border-stone-700 bg-stone-950/90 px-3 py-2 text-xs text-stone-200 focus:border-[#c86d44] focus:outline-none"
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
                  className="w-full border border-stone-700 bg-stone-950/90 px-3 py-2 text-xs text-stone-200 focus:border-[#c86d44] focus:outline-none"
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
                  className="w-full border border-stone-700 bg-stone-950/90 px-3 py-2 text-xs text-stone-200 focus:border-[#c86d44] focus:outline-none"
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
                  className="w-full border border-stone-700 bg-stone-950/90 px-3 py-2 text-xs text-stone-200 focus:border-[#c86d44] focus:outline-none"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#c86d44] py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b05b35]"
                >
                  SEARCH
                </button>
              </div>
            </form>

            {bookingResult && (
              <div className="mx-auto max-w-6xl px-4 pb-4">
                <div className="flex items-center justify-between rounded bg-[#c86d44]/20 px-4 py-2 text-xs text-amber-200">
                  <span>{bookingResult}</span>
                  <a
                    href="#phong-khach-san"
                    className="font-bold underline hover:text-white"
                  >
                    Xem phòng ngay
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: 3 CATEGORY CARDS ("PHÒNG LUXURY", "SPA & MASSAGE", "BỮA TỐI CHÂU ÂU") + CENTERED OASIS INTRO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {THREE_HIGHLIGHT_CARDS.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className="group relative block h-56 overflow-hidden bg-stone-900 shadow-sm"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 bg-black/55 py-3 text-center backdrop-blur-[2px]">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* Centered Oasis Intro */}
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
              {OASIS_INTRO.eyebrow}
            </span>
            <h2 className="mt-3 font-serif text-2xl leading-snug text-stone-800 sm:text-3xl">
              {OASIS_INTRO.heading}
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-stone-500 sm:text-sm">
              {OASIS_INTRO.description}
            </p>
            <div className="mt-7">
              <a
                href="#dich-vu-spa"
                className="inline-block bg-stone-900 px-7 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#c86d44]"
              >
                {OASIS_INTRO.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: "Phòng khách sạn" (3 Room Cards + XEM TẤT CẢ) */}
      <section
        id="phong-khach-san"
        className="border-t border-stone-100 bg-white py-16"
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-stone-800">
              Phòng khách sạn & Biệt thự khoáng nóng
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Khách sạn ở một vị trí dễ thương như vậy ngay trên bãi biển
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SPA_SUITES.map((suite) => (
              <div
                key={suite.id}
                className="group border border-stone-200 bg-white transition hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xs font-medium uppercase tracking-wider text-stone-600">
                    {suite.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-stone-900">
                    {suite.price}
                  </p>
                  <p className="mt-1 text-[11px] text-[#c86d44]">
                    {suite.mineralFeature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#lien-he"
              className="inline-block bg-stone-900 px-7 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#c86d44]"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: FULL-WIDTH SPA REJUVENATION BANNER */}
      <section
        id="dich-vu-spa"
        className="relative overflow-hidden bg-stone-100 py-20 lg:py-24"
      >
        <img
          src={REJUVENATION_BANNER.bannerImage}
          alt="Trị liệu trẻ hóa chuyên sâu"
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/80 to-white/95" />

        <div className="relative mx-auto max-w-5xl px-4">
          <div className="ml-auto max-w-lg text-center sm:text-right">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              {REJUVENATION_BANNER.eyebrow}
            </span>
            <h2 className="mt-2 font-serif text-2xl leading-snug text-stone-800 sm:text-3xl">
              {REJUVENATION_BANNER.heading}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-stone-600 sm:text-sm">
              {REJUVENATION_BANNER.description}
            </p>
            <div className="mt-6">
              <a
                href="#lien-he"
                className="inline-block bg-stone-900 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#c86d44]"
              >
                {REJUVENATION_BANNER.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: "Khách hàng nhận xét" + "Đội ngũ chúng tôi" */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          {/* Centered Testimonial */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-stone-800">
              Khách hàng nhận xét
            </h2>
            <p className="mt-1 text-xs text-stone-400">
              Cảm nhận thực tế từ du khách nghỉ dưỡng khoáng nóng & trị liệu Spa
            </p>

            <div className="mt-8 flex flex-col items-center">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="h-20 w-20 rounded-full object-cover shadow-md"
              />
              <blockquote className="mt-5 font-serif text-sm italic leading-relaxed text-stone-600 sm:text-base">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-bold text-stone-800">
                {activeTestimonial.name}{' '}
                <span className="font-normal text-stone-400">
                  / {activeTestimonial.channel}
                </span>
              </p>

              <div className="mt-4 flex items-center gap-2">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      idx === activeTestimonialIdx
                        ? 'bg-[#c86d44]'
                        : 'bg-stone-300'
                    }`}
                    aria-label={item.name}
                  />
                ))}
              </div>
            </div>
          </div>

          <hr className="my-14 border-stone-100" />

          {/* Đội ngũ chúng tôi */}
          <div>
            <div className="text-center">
              <h2 className="font-serif text-3xl text-stone-800">
                Đội ngũ chúng tôi
              </h2>
              <p className="mt-1 text-xs text-stone-400">
                Luôn luôn lắng nghe yêu cầu của khách hàng
              </p>
            </div>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-12">
              {/* Left Info Box */}
              <div className="lg:col-span-3">
                <span className="text-xs font-bold text-stone-700">
                  Hỗ trợ khách hàng 24/7
                </span>
                <h3 className="mt-1 font-serif text-xl text-stone-800">
                  Chuyên nghiệp và tận tâm
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-stone-500">
                  Đội ngũ bác sĩ đông y, kỹ thuật viên trị liệu khoáng nóng và
                  chăm sóc khách hàng giàu kinh nghiệm, phục vụ tận tình suốt kỳ
                  nghỉ.
                </p>
              </div>

              {/* Right 3 Portrait Cards */}
              <div className="grid gap-6 sm:grid-cols-3 lg:col-span-9">
                {TEAM_SPECIALISTS.map((person) => (
                  <div
                    key={person.id}
                    className="border border-stone-100 bg-white text-center shadow-sm"
                  >
                    <div className="h-64 overflow-hidden bg-stone-50">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                        {person.name}
                      </h4>
                      <p className="mt-0.5 text-[10px] uppercase tracking-widest text-stone-400">
                        {person.role}
                      </p>
                      <div className="mt-2 flex justify-center gap-2 text-[10px] font-semibold text-stone-400">
                        <span>f</span>
                        <span>•</span>
                        <span>in</span>
                        <span>•</span>
                        <span>mail</span>
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-stone-500">
                        {person.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: "Kinh nghiệm & các dịch vụ" (Turquoise Pool Water Background + 2x3 Service Grid) */}
      <section className="relative overflow-hidden py-20 text-white">
        <img
          src={POOLSIDE_BG_IMAGE}
          alt="Hồ bơi khoáng nóng"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a5f6b]/85" />

        <div className="relative mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-white">
              Kinh nghiệm & các dịch vụ
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-cyan-100/90">
              Bầu không khí hạnh phúc, dịch vụ chu đáo, tiện nghi và sự kết hợp
              giữa truyền thống, lòng hiếu khách và sự thanh lịch của sự đơn
              giản là câu trả lời cho mơ ước của bạn.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {POOLSIDE_SERVICES.map((srv) => (
              <div key={srv.id} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e08b63] text-[#f3a683]">
                  {srv.iconKey === 'drink' && <Coffee className="h-5 w-5" />}
                  {srv.iconKey === 'pool' && <Waves className="h-5 w-5" />}
                  {srv.iconKey === 'massage' && (
                    <Flower2 className="h-5 w-5" />
                  )}
                  {srv.iconKey === 'skincare' && (
                    <Sparkles className="h-5 w-5" />
                  )}
                  {srv.iconKey === 'wine' && <Wine className="h-5 w-5" />}
                  {srv.iconKey === 'bath' && <Bath className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    {srv.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-cyan-100/85">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: "Các hoạt động trong khách sạn" (2x2 Checkerboard Cards) */}
      <section id="hoat-dong" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-stone-800">
              Các hoạt động trong khách sạn
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Một nơi đặc biệt nơi thiên nhiên và con người tồn tại hài hòa. Khu
              bảo tồn sinh thái thuộc sở hữu của gia đình trải dài với những bãi
              biển vàng vô tận
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {RESORT_ACTIVITIES.map((act) => (
              <div
                key={act.id}
                className="grid grid-cols-2 overflow-hidden border border-stone-100 bg-stone-50 shadow-sm"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center justify-center p-5 text-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700">
                    {act.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#c86d44]">
                    {act.priceLabel}
                  </p>
                  <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-stone-500">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: "Thư viện ảnh khách sạn" (3x2 Photo Grid) + Full-Width Video Banner */}
      <section className="border-t border-stone-100 bg-white pt-16">
        <div className="mx-auto max-w-5xl px-4 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-stone-800">
              Thư viện ảnh khách sạn
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Không gian nghỉ dưỡng khoáng nóng, phòng trị liệu thảo dược và ẩm
              thực biển sang trọng
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="group h-56 overflow-hidden bg-stone-100 sm:h-64"
              >
                <img
                  src={photo}
                  alt={`Thư viện ảnh ${idx + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full-Width Coastal Video Banner */}
        <div className="relative h-80 overflow-hidden bg-stone-900 text-white sm:h-96">
          <img
            src={VIDEO_BANNER.image}
            alt={VIDEO_BANNER.heading}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-cyan-950/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="max-w-xl font-serif text-2xl leading-snug text-white sm:text-3xl">
              {VIDEO_BANNER.heading}
            </h2>
            <p className="mt-2 max-w-lg text-xs text-stone-200">
              {VIDEO_BANNER.subtitle}
            </p>
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white/15 text-white backdrop-blur-sm transition hover:scale-110 hover:bg-[#c86d44]"
              aria-label="Xem video khu nghỉ dưỡng"
            >
              <Play className="h-5 w-5 fill-current" />
            </button>
          </div>
        </div>

        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="max-w-lg rounded-xl bg-white p-6 text-slate-800 shadow-2xl">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 className="font-serif text-lg font-bold">
                  Hành Trình Trải Nghiệm {business.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="rounded p-1 text-stone-500 hover:bg-stone-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-600">
                Khám phá nguồn suối khoáng nóng tự nhiên 52°C, quy trình tắm
                Onsen 7 bước chuẩn Nhật Bản và hệ thống biệt thự nghỉ dưỡng ven
                biển.
              </p>
              <div className="mt-4 text-right">
                <a
                  href="#lien-he"
                  onClick={() => setVideoModalOpen(false)}
                  className="inline-block bg-[#c86d44] px-5 py-2 text-xs font-bold uppercase text-white"
                >
                  Đặt lịch trải nghiệm
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 10. SECTION 8: "Tin tức & Ưu đãi mới nhất" (2 Bordered Text Cards) + 4 Partner Logos */}
      <section id="tin-tuc" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-stone-800">
              Tin tức & Ưu đãi mới nhất
            </h2>
            <p className="mt-1.5 text-xs text-stone-400">
              Cập nhật các gói ưu đãi nghỉ dưỡng khoáng nóng và cẩm nang chăm
              sóc sức khỏe theo mùa
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {NEWS_OFFERS.map((news) => (
              <article
                key={news.id}
                className="border border-stone-200 bg-white p-7 transition hover:border-[#c86d44]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                  {news.category}
                </span>
                <h3 className="mt-1.5 font-serif text-base font-bold uppercase leading-snug text-stone-800">
                  {news.title}
                </h3>
                <p className="mt-1 text-[11px] text-stone-400">{news.date}</p>
                <p className="mt-4 text-xs leading-relaxed text-stone-500">
                  {news.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* 4 Partner Logos */}
          <div className="mt-14 grid grid-cols-2 items-center gap-6 border-t border-stone-100 pt-10 text-center sm:grid-cols-4">
            {PARTNER_BRANDS.map((brand) => (
              <div
                key={brand}
                className="font-serif text-sm font-bold tracking-[0.2em] text-stone-500"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DARK CHARCOAL FOOTER (#222222 with "Liên hệ với chúng tôi", 3 Contact Columns & 2-Column Form) */}
      <footer id="lien-he" className="bg-[#222222] text-stone-300">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="font-serif text-2xl text-[#c86d44] sm:text-3xl">
            Liên hệ với chúng tôi
          </h2>
          <p className="mt-1 text-xs text-stone-400">
            Chúng tôi luôn hỗ trợ các bạn 24/7
          </p>

          {/* 3 Contact Info Icons */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <Phone className="h-5 w-5 text-stone-300" />
              <p className="mt-2 text-[11px] text-stone-400">
                Gọi cho chúng tôi :
              </p>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="mt-0.5 text-xs font-semibold text-white hover:text-[#c86d44]"
              >
                {primaryPhone}
              </a>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="h-5 w-5 text-stone-300" />
              <p className="mt-2 text-xs text-stone-300">{business.address}</p>
            </div>

            <div className="flex flex-col items-center">
              <Mail className="h-5 w-5 text-stone-300" />
              <p className="mt-2 text-[11px] text-stone-400">
                Gửi email cho chúng tôi :
              </p>
              <a
                href={`mailto:${primaryEmail}`}
                className="mt-0.5 text-xs font-semibold text-white hover:text-[#c86d44]"
              >
                {primaryEmail}
              </a>
            </div>
          </div>

          {/* 2-Column Contact Form */}
          <div className="mt-10">
            {contactSent ? (
              <div className="rounded border border-emerald-500/40 bg-emerald-950/40 p-5 text-center">
                <CheckCircle2 className="mx-auto h-7 w-7 text-emerald-400" />
                <p className="mt-2 text-xs font-bold text-white">
                  Cảm ơn {contactForm.fullName}! Yêu cầu đặt phòng & tư vấn liệu
                  trình đã được ghi nhận.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                className="grid gap-4 text-left sm:grid-cols-2"
              >
                <div className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={contactForm.fullName}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    className="w-full border border-stone-700 bg-[#2d2d2d] px-4 py-3 text-xs text-white placeholder-stone-400 focus:border-[#c86d44] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full border border-stone-700 bg-[#2d2d2d] px-4 py-3 text-xs text-white placeholder-stone-400 focus:border-[#c86d44] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <textarea
                    rows={3}
                    placeholder="Nội dung"
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full border border-stone-700 bg-[#2d2d2d] px-4 py-3 text-xs text-white placeholder-stone-400 focus:border-[#c86d44] focus:outline-none"
                  />
                  <div>
                    <button
                      type="submit"
                      className="border border-stone-600 bg-[#1a1a1a] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition hover:border-[#c86d44] hover:bg-[#c86d44]"
                    >
                      GỬI TIN NHẮN
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-stone-800 bg-[#1b1b1b] py-4 text-center text-[11px] text-stone-500">
          © All rights reserved. Thiết kế & Vận hành bởi {business.name}.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
