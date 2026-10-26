'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';
import { SubpageData } from '@/components/demo/shared/SubpageLayout';
import {
  adaptClonedTemplateData,
  ClonedTemplateInput,
} from '@/lib/demo/clonedTemplateUtils';
import * as defaultMockData from '../../data/mockData';
import type { ScentProductItem } from '../../data/mockData';

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
    HERO_COLLECTION,
    SMELL_GOOD_SECTION,
    SCENT_PRODUCTS,
    AROMA_SPA_TREATMENTS,
  } = mockData;

  const primaryPhone = business.phone?.[0] || '0909 317 889';
  const primaryEmail = business.email?.[0] || 'concierge@lanperfume.vn';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFamily, setActiveFamily] = useState<
    'all' | 'woody' | 'floral' | 'aroma-oil'
  >('all');
  const [selectedScent, setSelectedScent] = useState<ScentProductItem | null>(
    SCENT_PRODUCTS[0] || null
  );
  const [consultForm, setConsultForm] = useState({
    fullName: '',
    phone: '',
    scentPreference: 'Hương Hoa Trắng & Xạ Hương Thanh Khiết',
    serviceInterest: 'Tư vấn Nước Hoa Niche + Liệu trình Aroma Facial',
    notes: '',
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeFamily === 'all') return SCENT_PRODUCTS;
    return SCENT_PRODUCTS.filter((p) => p.olfactoryFamily === activeFamily);
  }, [SCENT_PRODUCTS, activeFamily]);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultForm.fullName.trim() || !consultForm.phone.trim()) return;
    setConsultSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f6] text-stone-900 antialiased selection:bg-stone-900 selection:text-white">
      {/* 1. LUXURY EDITORIAL HEADER WITH SIGNATURE "LAN / Lan Perfume" MONOGRAM */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-6">
          {/* Signature LAN Typographic Logo (Matching bottom-left card in SPA017-spa_14.png) */}
          <a href="#bo-suu-tap" className="relative flex items-center py-1">
            <span className="font-serif text-3xl font-black tracking-[0.22em] text-stone-950 sm:text-4xl">
              {business.monogram}
            </span>
            <span className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif text-xs italic tracking-wider text-stone-500">
              {business.scriptOverlay}
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-700 transition hover:text-stone-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#tu-van-huong"
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-stone-800"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#c9a96e]" />
              <span>Đặt Lịch Thử Hương & Spa</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-stone-200 text-stone-800 lg:hidden"
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
                  className="py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER ("Bộ sưu tập nước hoa / LAN Perfume" with Stone Pedestal & Pearl Aesthetic) */}
      <section
        id="bo-suu-tap"
        className="relative overflow-hidden bg-gradient-to-br from-[#7e7d79] via-[#6e6d69] to-[#4f4e4b] py-16 text-white lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Manifesto Typography (Matching bottom-left banner in SPA017-spa_14.png) */}
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.22em] text-stone-200">
                {HERO_COLLECTION.eyebrow}
              </span>
              <h1 className="mt-3 font-sans text-5xl font-light tracking-wide text-white sm:text-6xl lg:text-7xl">
                {HERO_COLLECTION.title}
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-100 sm:text-base">
                {HERO_COLLECTION.manifesto}
              </p>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-stone-300 sm:text-sm">
                {HERO_COLLECTION.subManifesto}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#tuyen-tap-huong"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-stone-950 shadow-lg transition hover:bg-stone-100"
                >
                  <span>Khám phá Bộ Sưu Tập</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#aroma-spa"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <span>Liệu trình Aroma Spa</span>
                </a>
              </div>
            </div>

            {/* Right Classical Pedestal & Pearl Flacon Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/25 bg-stone-900/40 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative h-80 overflow-hidden rounded-2xl sm:h-96">
                  <img
                    src={HERO_COLLECTION.pedestalBottleImage}
                    alt="LAN Perfume Extrait de Parfum"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 inset-x-5 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c992]">
                        UNIQUE • EXTRAIT DE PARFUM
                      </span>
                      <p className="mt-0.5 font-serif text-lg font-bold">
                        Crème De Soie & Pearl
                      </p>
                    </div>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-stone-900">
                      100ml
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXACT SPLIT SECTION FROM SCREENSHOT: ROCK-CAVE SHELF + "Smell good - Feel good" + "Con số ấn tượng" (80%, 100%, >300, 2000+) + BOUTIQUE PHOTO */}
      <section id="con-so-an-tuong" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="overflow-hidden rounded-3xl border border-teal-800/20 bg-white p-6 shadow-xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* Left Column: Cave Illuminated Shelf Photo + "Smell good - Feel good" Story */}
              <div className="space-y-6 lg:col-span-6">
                <div className="overflow-hidden rounded-2xl bg-stone-900 shadow-md">
                  <img
                    src={SMELL_GOOD_SECTION.caveShelfImage}
                    alt="Kệ trưng bày nước hoa và tinh dầu LAN Perfume"
                    className="h-64 w-full object-cover sm:h-72"
                  />
                </div>

                <div className="pt-2">
                  <h2 className="font-sans text-2xl font-extrabold tracking-tight text-stone-950 sm:text-3xl">
                    {SMELL_GOOD_SECTION.quoteHeading}
                  </h2>
                  <p className="mt-3 text-xs leading-relaxed text-stone-600 sm:text-sm">
                    {SMELL_GOOD_SECTION.storyParagraph}
                  </p>
                </div>
              </div>

              {/* Right Column: "Con số ấn tượng" (2x2 Grid: 80%, 100%, >300, 2000+) + Flagship Boutique Photo */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
                <div>
                  <h3 className="text-xl font-extrabold text-stone-950 sm:text-2xl">
                    {SMELL_GOOD_SECTION.statsHeading}
                  </h3>

                  <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
                    {SMELL_GOOD_SECTION.stats.map((st) => (
                      <div
                        key={st.id}
                        className="border-l-2 border-stone-900 pl-4"
                      >
                        <p className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
                          {st.value}
                        </p>
                        <p className="mt-1 text-xs font-medium text-stone-500">
                          {st.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-stone-900 shadow-md">
                  <img
                    src={SMELL_GOOD_SECTION.boutiqueConsultImage}
                    alt="Không gian tư vấn mùi hương tại showroom LAN Perfume"
                    className="h-64 w-full object-cover sm:h-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: TUYỂN TẬP TẦNG HƯƠNG & TINH DẦU TRỊ LIỆU (Interactive Olfactory Pyramid Filter) */}
      <section id="tuyen-tap-huong" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                Haute Parfumerie & Essential Oils
              </span>
              <h2 className="mt-1 font-serif text-3xl font-bold text-stone-950 sm:text-4xl">
                Tuyển Tập Mùi Hương & Tinh Dầu Độc Bản
              </h2>
            </div>

            {/* Olfactory Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'Tất cả (06)' },
                { key: 'floral', label: 'Hương Hoa & Trà Trắng' },
                { key: 'woody', label: 'Hương Gỗ & Trầm Hương' },
                { key: 'aroma-oil', label: 'Tinh Dầu Chăm Sóc Da' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() =>
                    setActiveFamily(
                      tab.key as 'all' | 'woody' | 'floral' | 'aroma-oil'
                    )
                  }
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                    activeFamily === tab.key
                      ? 'bg-stone-950 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedScent(product)}
                className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-[#fafbfa] transition hover:-translate-y-1 hover:border-stone-900 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-stone-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {product.brandLine}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-stone-900 shadow">
                      {product.volume}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                      {product.familyLabel}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-stone-950">
                      {product.name}
                    </h3>

                    {/* 3-Layer Olfactory Pyramid */}
                    <div className="mt-4 space-y-1.5 border-t border-stone-200/80 pt-3 text-xs text-stone-600">
                      <p>
                        <strong className="text-stone-900">Hương đầu:</strong>{' '}
                        {product.topNotes}
                      </p>
                      <p>
                        <strong className="text-stone-900">Hương giữa:</strong>{' '}
                        {product.heartNotes}
                      </p>
                      <p>
                        <strong className="text-stone-900">Hương cuối:</strong>{' '}
                        {product.baseNotes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-stone-200/70 bg-white px-6 py-4">
                  <span className="text-sm font-black text-stone-950">
                    {product.price}
                  </span>
                  <a
                    href="#tu-van-huong"
                    onClick={(e) => {
                      e.stopPropagation();
                      setConsultForm((prev) => ({
                        ...prev,
                        scentPreference: product.name,
                      }));
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-900 hover:underline"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Đặt thử mùi</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {selectedScent && (
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-stone-950 p-6 text-white sm:flex-row sm:items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a96e]">
                  Tầng hương đang chọn để thử tại Showroom
                </span>
                <h4 className="mt-1 font-serif text-lg font-bold">
                  {selectedScent.name} — {selectedScent.price}
                </h4>
                <p className="text-xs text-stone-300">
                  Nốt hương chủ đạo: {selectedScent.heartNotes} •{' '}
                  {selectedScent.baseNotes}
                </p>
              </div>
              <a
                href="#tu-van-huong"
                className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950"
              >
                Giữ mẫu thử tại quầy
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 5. SECTION 3: VIỆN TRỊ LIỆU HƯƠNG THƠM & CHĂM SÓC DA AROMA SPA */}
      <section id="aroma-spa" className="bg-[#eff2f0] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
              Liệu Pháp Đánh Thức Giác Quan
            </span>
            <h2 className="mt-1.5 font-serif text-3xl font-bold text-stone-950 sm:text-4xl">
              Viện Chăm Sóc Da & Trị Liệu Hương Thơm LAN Aroma Spa
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-stone-600">
              Trải nghiệm liệu trình chăm sóc da mặt nâng cơ và massage trị liệu
              bằng 100% tinh dầu nước hoa hữu cơ chưng cất tinh khiết.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {AROMA_SPA_TREATMENTS.map((tr) => (
              <div
                key={tr.id}
                className="flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tr.image}
                      alt={tr.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      <Clock className="h-3.5 w-3.5 text-[#c9a96e]" />
                      <span>{tr.duration}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-teal-800">
                      {tr.subtitle}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-stone-950">
                      {tr.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-stone-600 sm:text-sm">
                      {tr.description}
                    </p>
                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-stone-50 p-3 text-xs text-stone-700">
                      <Droplets className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                      <span>
                        <strong>Tinh dầu sử dụng:</strong> {tr.signatureOil}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-stone-100 px-6 py-4">
                  <span className="text-base font-black text-stone-950">
                    {tr.price}
                  </span>
                  <a
                    href="#tu-van-huong"
                    onClick={() =>
                      setConsultForm((prev) => ({
                        ...prev,
                        serviceInterest: tr.title,
                      }))
                    }
                    className="rounded-full bg-stone-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-teal-900"
                  >
                    Đặt lịch Spa
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BESPOKE CONSULTATION FORM & ONYX FOOTER (#111111) */}
      <footer id="tu-van-huong" className="bg-[#111111] text-stone-300">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Brand Info */}
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-block rounded-2xl bg-white px-5 py-3 text-stone-950">
                <span className="font-serif text-3xl font-black tracking-[0.22em]">
                  {business.monogram}
                </span>
                <span className="block text-[10px] italic tracking-widest text-stone-500">
                  {business.scriptOverlay}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-stone-400 sm:text-sm">
                {business.name} — {business.tagline}. Khám phá mùi hương định
                danh của riêng bạn cùng {business.founderName}.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-stone-300">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a96e]" />
                  <span>{business.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#c9a96e]" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                    className="font-bold text-white hover:text-[#c9a96e]"
                  >
                    {primaryPhone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#c9a96e]" />
                  <span>{primaryEmail}</span>
                </p>
              </div>
            </div>

            {/* Right Scent & Aroma Spa Booking Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/15 bg-stone-900 p-6 shadow-2xl sm:p-8">
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                  Đặt Lịch Tư Vấn Mùi Hương Cá Nhân 1:1 & Liệu Trình Aroma Spa
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  Chuyên gia điều hương (Perfumer) sẽ chuẩn bị sẵn bộ 12 nốt
                  hương phù hợp với tính cách và làn da của quý khách.
                </p>

                {consultSubmitted ? (
                  <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-400" />
                    <h4 className="mt-2 font-serif text-lg font-bold text-white">
                      Đã Đặt Lịch Hẹn Thử Hương Thành Công!
                    </h4>
                    <p className="mt-1 text-xs text-emerald-200">
                      LAN Perfume sẽ liên hệ xác nhận với{' '}
                      <strong>{consultForm.fullName}</strong> qua số{' '}
                      <strong>{consultForm.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setConsultSubmitted(false)}
                      className="mt-4 text-xs font-bold text-[#c9a96e] underline"
                    >
                      Đặt lịch mới
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleConsultSubmit}
                    className="mt-5 space-y-3.5"
                  >
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên quý khách *"
                        value={consultForm.fullName}
                        onChange={(e) =>
                          setConsultForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#c9a96e] focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại (Zalo) *"
                        value={consultForm.phone}
                        onChange={(e) =>
                          setConsultForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-xs text-white placeholder-stone-500 focus:border-[#c9a96e] focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        value={consultForm.scentPreference}
                        onChange={(e) =>
                          setConsultForm((prev) => ({
                            ...prev,
                            scentPreference: e.target.value,
                          }))
                        }
                        placeholder="Nhóm hương yêu thích"
                        className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-xs text-white focus:border-[#c9a96e] focus:outline-none"
                      />
                      <select
                        value={consultForm.serviceInterest}
                        onChange={(e) =>
                          setConsultForm((prev) => ({
                            ...prev,
                            serviceInterest: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-xs text-white focus:border-[#c9a96e] focus:outline-none"
                      >
                        <option>
                          Tư vấn Nước Hoa Niche + Liệu trình Aroma Facial
                        </option>
                        <option>Workshop Pha Chế Nước Hoa Cá Nhân 1:1</option>
                        <option>
                          Trị Liệu Toàn Thân Hương Gỗ Đàn Hương 90 Phút
                        </option>
                      </select>
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Ghi chú thời gian ghé Showroom hoặc yêu cầu quà tặng khắc tên..."
                      value={consultForm.notes}
                      onChange={(e) =>
                        setConsultForm((prev) => ({
                          ...prev,
                          notes: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-2.5 text-xs text-white placeholder-stone-500 focus:border-[#c9a96e] focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-xs font-extrabold uppercase tracking-widest text-stone-950 transition hover:bg-[#c9a96e]"
                    >
                      <Send className="h-4 w-4" />
                      <span>GỬI YÊU CẦU TƯ VẤN MÙI HƯƠNG</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black py-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} {business.name}. Smell good – Feel good.
        </div>
      </footer>

      {/* Floating Right-Edge Quick Contact Dock (Matching Messenger + Zalo + Menu icons in SPA017-spa_14.png) */}
      <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-2.5">
        <a
          href="#tu-van-huong"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-lg transition hover:scale-105"
          title="Chat tư vấn mùi hương"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0088ff] text-[11px] font-black text-white shadow-lg transition hover:scale-105"
          title="Zalo tư vấn"
        >
          Zalo
        </a>
      </div>
    </div>
  );
}

export default DemoTemplateRenderer;
