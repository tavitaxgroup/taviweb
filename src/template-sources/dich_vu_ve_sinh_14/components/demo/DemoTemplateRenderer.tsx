'use client';

import React, { useMemo, useState } from 'react';
import {
  Award,
  Bot,
  Bug,
  CheckCircle2,
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNhaSachData,
  NhaSachCoreServiceCard,
  NhaSachTemplateData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () =>
      adaptClonedTemplateData(defaultNhaSachData, data) as NhaSachTemplateData,
    [data]
  );

  const [selectedServiceCard, setSelectedServiceCard] =
    useState<NhaSachCoreServiceCard | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationSent, setConsultationSent] = useState(false);
  const [companyNameInput, setCompanyNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  const renderServiceIcon = (icon: string) => {
    switch (icon) {
      case 'sparkles':
        return <Sparkles className="h-10 w-10 text-white" />;
      case 'trees':
        return <Trees className="h-10 w-10 text-white" />;
      case 'bug':
        return <Bug className="h-10 w-10 text-white" />;
      default:
        return <Users className="h-10 w-10 text-white" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-neutral-800 antialiased selection:bg-[#149b56] selection:text-white"
    >
      {/* 1. TOP EMERALD GREEN BAR + NHÀ SẠCH (ISO 9001:2015) HEADER */}
      <header className="sticky top-0 z-40 shadow-sm">
        {/* Top Emerald Strip (matching top green bar with VN flag in screenshot) */}
        <div className="bg-[#149b56] text-xs text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
            <span className="hidden font-medium sm:inline">
              {templateData.business.tagline}
            </span>
            <div className="ml-auto flex items-center gap-4">
              <a
                href={`tel:${templateData.business.phone[0]}`}
                className="font-bold hover:underline"
              >
                Hotline: {templateData.business.phone[0]}
              </a>
              <span className="inline-flex items-center gap-1 rounded-xs bg-white/15 px-2 py-0.5 text-[11px] font-bold">
                <span>VN</span>
                <span className="inline-block h-2.5 w-3.5 rounded-2xs bg-red-600 text-center text-[8px] leading-2.5 text-yellow-300">
                  ★
                </span>
                <ChevronDown className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Main White Header with Authentic "Nhà Sạch ISO 9001:2015" House Logo */}
        <div className="border-b border-emerald-100 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
            {/* Nhà Sạch Logo (Green Roof + Terracotta House + ISO 9001:2015 + Script Title) */}
            <a href="#top" className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                {/* House SVG matching reference logo */}
                <svg
                  viewBox="0 0 64 52"
                  className="h-10 w-12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Green Roof */}
                  <path
                    d="M4 26L32 4L60 26"
                    stroke="#149b56"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M46 10V18H52V14" fill="#149b56" />
                  {/* Terracotta Walls */}
                  <path
                    d="M11 26H53V48H38V34H26V48H11V26Z"
                    fill="#d97c43"
                  />
                </svg>
                <span className="mt-0.5 text-[9px] font-black tracking-tighter text-[#0054a6]">
                  {templateData.business.certification}
                </span>
              </div>

              <div>
                <span className="font-serif text-2xl font-black italic tracking-tight text-[#149b56] sm:text-3xl">
                  {templateData.business.name}
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  Tiên Phong Robot Vệ Sinh 4.0
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-6 lg:flex">
              {templateData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-extrabold uppercase tracking-wider text-neutral-700 transition hover:text-[#149b56]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right CTA & Mobile Button */}
            <div className="flex items-center gap-2.5">
              <a
                href="#lien-he"
                className="hidden rounded-full bg-[#d97c43] px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#149b56] sm:inline-block"
              >
                Báo Giá Nhanh
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="rounded-lg border border-neutral-200 p-2 text-neutral-700 lg:hidden"
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
            <div className="border-t border-neutral-100 bg-white px-4 py-3 lg:hidden">
              <div className="flex flex-col gap-2">
                {templateData.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 text-xs font-bold uppercase text-neutral-700 hover:text-[#149b56]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 2. HERO SECTION: MULTI-PHOTO STAFF MOSAIC + OVERLAPPING TERRACOTTA STATS BAR */}
      <section
        id="thong-ke"
        className="relative overflow-hidden bg-gradient-to-br from-[#e6f7ef] via-white to-[#d5f2e3] pt-10 pb-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left 6 Cols: Hero Typography */}
            <div className="space-y-4 lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#149b56]/10 px-3.5 py-1 text-xs font-extrabold text-[#149b56]">
                <ShieldCheck className="h-4 w-4" />
                {templateData.hero.badge}
              </span>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                <span className="block text-[#149b56]">
                  {templateData.hero.headline}
                </span>
                <span className="mt-1 block text-[#d97c43]">
                  {templateData.hero.subheadline}
                </span>
              </h1>

              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                {templateData.hero.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#dich-vu-nha-sach"
                  className="rounded-lg bg-[#149b56] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:bg-emerald-800"
                >
                  Khám Phá Dịch Vụ Nhà Sạch
                </a>
                <a
                  href="#robot-40"
                  className="rounded-lg border-2 border-[#d97c43] bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#d97c43] transition hover:bg-[#d97c43] hover:text-white"
                >
                  Xem Robot Vệ Sinh 4.0
                </a>
              </div>
            </div>

            {/* Right 6 Cols: 4x3 Vibrant Photo Mosaic Grid (exact match to top-right photo collage in screenshot!) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-4 gap-1.5 rounded-xl border-4 border-white bg-white p-1.5 shadow-xl">
                {templateData.hero.mosaicImages.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="group aspect-square overflow-hidden rounded-xs bg-neutral-100"
                  >
                    <img
                      src={imgUrl}
                      alt={`Hoạt động Nhà Sạch ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OVERLAPPING TERRACOTTA STATS BAR (#d87a46) — EXACT MATCH TO SCREENSHOT */}
          <div className="mt-10 rounded-xl bg-[#d87a46] px-6 py-7 text-white shadow-xl">
            <div className="grid grid-cols-2 divide-y divide-white/25 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {templateData.hero.stats.map((st) => (
                <div
                  key={st.label}
                  className="flex flex-col items-center justify-center px-4 py-3 text-center sm:py-1"
                >
                  <span className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {st.value}
                  </span>
                  <span className="mt-1 text-xs font-semibold tracking-wide text-orange-50">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. "DỊCH VỤ CỦA NHÀ SẠCH" SECTION — EXACT 12-COLUMN SPLIT LAYOUT FROM SCREENSHOT */}
      <section
        id="dich-vu-nha-sach"
        className="relative overflow-hidden bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Top Decorative Dotted Orange Label + Serif Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#d97c43]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#d97c43]" />
              <span className="inline-block w-12 border-t border-dashed border-[#d97c43]" />
              <span className="inline-block h-2 w-2 rounded-full bg-[#d97c43]" />
              <span>{templateData.coreServicesSection.smallLabel}</span>
            </div>
            <h2 className="mt-2 font-serif text-2xl font-black uppercase tracking-wide text-neutral-900 sm:text-3xl">
              {templateData.coreServicesSection.heading}
            </h2>
          </div>

          {/* 12-Column Split: Left Hospital Lobby + AI Robot Photo | Right 2x2 Green Service Cards */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Left 6 Cols: Supervisor & Green Robot 4.0 in International Hospital Lobby */}
            <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-neutral-200 shadow-md lg:col-span-6">
              <img
                src={templateData.coreServicesSection.supervisorImage}
                alt={templateData.coreServicesSection.heading}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Top Hospital Location Sign Callout */}
              <div className="absolute top-4 left-4 rounded-md bg-white/95 px-3.5 py-2 text-neutral-900 shadow-sm">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#149b56]">
                  Information Desk
                </span>
                <span className="text-xs font-black">
                  {templateData.coreServicesSection.locationCaption}
                </span>
              </div>

              {/* Green AI Robot 4.0 Badge at Bottom Right */}
              <div className="absolute right-4 bottom-4 left-16 flex items-center gap-3 rounded-xl border border-emerald-400/50 bg-[#149b56]/95 p-3.5 text-white shadow-lg backdrop-blur-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#149b56]">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                    Triển khai thực tế tại công trình
                  </span>
                  <p className="text-xs font-black sm:text-sm">
                    {templateData.coreServicesSection.robotBadgeText}
                  </p>
                </div>
              </div>

              {/* Signature Terracotta Quarter-Circle Corner Accent at Bottom-Left (exact match to screenshot!) */}
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#d87a46]" />
            </div>

            {/* Right 6 Cols: 2x2 Grid of 4 Emerald Green (#3ea36e) Rounded Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
              {templateData.coreServicesSection.cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedServiceCard(card)}
                  className="group flex cursor-pointer flex-col items-center justify-between rounded-xl bg-[#3ea36e] p-6 text-center text-white shadow-md transition hover:-translate-y-1 hover:bg-[#149b56] hover:shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 transition group-hover:scale-110">
                      {renderServiceIcon(card.icon)}
                    </div>
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-emerald-50">
                      {card.shortDescription}
                    </p>
                  </div>

                  <span className="mt-4 inline-block rounded-full border border-white/40 px-4 py-1 text-[11px] font-bold text-white transition group-hover:bg-white group-hover:text-[#149b56]">
                    Xem chi tiết &rarr;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE CLIENT LOGOS SECTION (2x4 WHITE ROUNDED CARDS — INTEL, SAMSUNG, HSBC, AEON MALL, OLAM, JABIL, H&M, COCA-COLA) */}
      <section
        id="khach-hang"
        className="bg-gradient-to-r from-[#149b56] via-[#22a863] to-[#3ea36e] py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              {templateData.enterpriseClients.title}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-emerald-50 sm:text-sm">
              {templateData.enterpriseClients.subtitle}
            </p>
          </div>

          {/* 4x2 White Rounded Card Container matching the tilted logo board in screenshot */}
          <div className="mx-auto max-w-5xl rounded-2xl bg-white/20 p-4 backdrop-blur-xs sm:p-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {templateData.enterpriseClients.logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex h-24 flex-col items-center justify-center rounded-xl bg-white px-4 text-center shadow-md transition hover:scale-105"
                >
                  <span
                    className={`text-xl font-black tracking-tight sm:text-2xl ${
                      logo.fontStyle === 'italic' ? 'font-serif italic' : ''
                    }`}
                    style={{ color: logo.brandColor }}
                  >
                    {logo.name}
                  </span>
                  <span className="mt-1 text-[10px] font-medium text-neutral-500">
                    {logo.subline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROBOT 4.0 SHOWCASE SECTION */}
      <section id="robot-40" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#d97c43]">
            {templateData.robot40Section.badge}
          </span>
          <h2 className="mt-2 text-2xl font-black text-neutral-900 sm:text-3xl">
            {templateData.robot40Section.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-neutral-600 sm:text-sm">
            {templateData.robot40Section.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {templateData.robot40Section.models.map((rb) => (
            <div
              key={rb.id}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-[#149b56] hover:shadow-lg"
            >
              <div className="relative h-60 overflow-hidden bg-neutral-100">
                <img
                  src={rb.image}
                  alt={rb.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-md bg-[#149b56] px-3 py-1 text-[11px] font-extrabold text-white">
                  {rb.modelCode}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-neutral-900">
                  {rb.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#d97c43]">
                  Khu vực triển khai: {rb.applicationArea}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-emerald-50/70 p-3 text-xs">
                  <div>
                    <span className="block text-neutral-500">Năng suất làm sạch</span>
                    <strong className="text-[#149b56]">{rb.productivity}</strong>
                  </div>
                  <div>
                    <span className="block text-neutral-500">Thời lượng vận hành</span>
                    <strong className="text-neutral-800">{rb.batteryRuntime}</strong>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-xs text-neutral-600">
                  {rb.features.map((ft) => (
                    <li key={ft} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#149b56]" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRAINING ACADEMY & CONSULTATION FORM */}
      <section
        id="dao-tao"
        className="border-t border-neutral-200 bg-[#f6fbf8] py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#149b56]">
                <Award className="h-4 w-4" />
                <span>Con người là giá trị cốt lõi</span>
              </span>
              <h2 className="text-2xl font-black text-neutral-900 sm:text-3xl">
                {templateData.trainingAcademy.title}
              </h2>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {templateData.trainingAcademy.description}
              </p>

              <div className="space-y-3 pt-2">
                {templateData.trainingAcademy.highlights.map((hl) => (
                  <div
                    key={hl.title}
                    className="rounded-xl border border-emerald-200 bg-white p-4"
                  >
                    <h4 className="text-sm font-extrabold text-[#149b56]">
                      {hl.title}
                    </h4>
                    <p className="mt-1 text-xs text-neutral-600">{hl.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-6">
              {templateData.trainingAcademy.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Đào tạo Nhà Sạch ${i + 1}`}
                  className="h-44 w-full rounded-xl object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="lien-he" className="bg-[#0e3522] pt-14 text-xs text-emerald-100">
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="space-y-3 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="font-serif text-2xl font-black italic text-white">
                  {templateData.business.name}
                </span>
                <span className="rounded-xs bg-[#d97c43] px-2 py-0.5 text-[10px] font-bold text-white">
                  {templateData.business.certification}
                </span>
              </div>
              <p className="leading-relaxed text-emerald-200/80">
                {templateData.business.tagline}
              </p>
              <div className="space-y-2 pt-2">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d97c43]" />
                  <span>{templateData.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#d97c43]" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#d97c43]" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </p>
              </div>
            </div>

            {/* Col 2: Services (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                Dịch Vụ Của Nhà Sạch
              </h4>
              <ul className="space-y-2">
                {templateData.footer.services.map((s) => (
                  <li key={s}>
                    <a
                      href="#dich-vu-nha-sach"
                      className="transition hover:text-[#d97c43]"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Quote Form (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                Đăng Ký Khảo Sát &amp; Demo Robot 4.0
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultationSent(true);
                  setCompanyNameInput('');
                  setPhoneInput('');
                }}
                className="space-y-2.5"
              >
                <input
                  type="text"
                  value={companyNameInput}
                  onChange={(e) => setCompanyNameInput(e.target.value)}
                  placeholder="Tên doanh nghiệp / Tòa nhà / Bệnh viện..."
                  className="w-full rounded-lg bg-white/10 px-3.5 py-2 text-xs text-white outline-none placeholder:text-emerald-200/60 focus:ring-1 focus:ring-[#d97c43]"
                />
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="Số điện thoại liên hệ..."
                  className="w-full rounded-lg bg-white/10 px-3.5 py-2 text-xs text-white outline-none placeholder:text-emerald-200/60 focus:ring-1 focus:ring-[#d97c43]"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#d97c43] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-orange-500"
                >
                  Gửi Yêu Cầu Tư Vấn
                </button>
                {consultationSent && (
                  <p className="text-[11px] font-semibold text-amber-300">
                    ✓ Đã ghi nhận! Bộ phận Dự án Nhà Sạch sẽ liên hệ ngay.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900 py-4 text-center text-[11px] text-emerald-300/70">
          {templateData.business.copyright}
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {selectedServiceCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedServiceCard(null)}
              className="absolute top-4 right-4 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-extrabold uppercase text-[#149b56]">
              Chuẩn {templateData.business.certification}
            </span>
            <h3 className="mt-2 text-lg font-black text-neutral-900">
              {selectedServiceCard.title}
            </h3>
            <p className="mt-1 text-xs text-neutral-600">
              {selectedServiceCard.shortDescription}
            </p>
            <ul className="mt-4 space-y-2 rounded-xl bg-emerald-50/70 p-4 text-xs text-neutral-700">
              {selectedServiceCard.fullDetails.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#149b56]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-bold text-[#d97c43]">
                {selectedServiceCard.priceReference}
              </span>
              <button
                type="button"
                onClick={() => setSelectedServiceCard(null)}
                className="rounded-lg bg-[#149b56] px-5 py-2 text-xs font-extrabold uppercase text-white hover:bg-emerald-800"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
