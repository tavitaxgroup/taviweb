'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  CheckCircle2,
  Factory,
  FileCheck2,
  HardHat,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sun,
  Trees,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultKNICCleanData,
  KNICCleanServicePackage,
  KNICCleanTemplateData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () =>
      adaptClonedTemplateData(
        defaultKNICCleanData,
        data
      ) as KNICCleanTemplateData,
    [data]
  );

  const [activeZoneId, setActiveZoneId] = useState<string>(
    templateData.hero.zoneHotspots[0]?.id || 'zh-1'
  );
  const [selectedTab, setSelectedTab] = useState<string>(
    templateData.serviceSection.tabs[0] || 'Tất cả hạng mục'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Industrial Park Estimator State
  const [areaM2, setAreaM2] = useState<number>(10000);
  const [solarMWp, setSolarMWp] = useState<number>(2);
  const [includeLandscape, setIncludeLandscape] = useState<boolean>(true);
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<KNICCleanServicePackage | null>(null);

  const activeZone = useMemo(
    () =>
      templateData.hero.zoneHotspots.find((z) => z.id === activeZoneId) ||
      templateData.hero.zoneHotspots[0],
    [templateData.hero.zoneHotspots, activeZoneId]
  );

  const filteredPackages = useMemo(() => {
    if (
      !selectedTab ||
      selectedTab === templateData.serviceSection.tabs[0]
    ) {
      return templateData.serviceSection.packages;
    }
    return templateData.serviceSection.packages.filter(
      (pkg) => pkg.category.toLowerCase() === selectedTab.toLowerCase()
    );
  }, [templateData.serviceSection, selectedTab]);

  const estimatedCost = useMemo(() => {
    const floorCost = areaM2 * 4500;
    const solarCost = solarMWp * 4200000;
    const greenCost = includeLandscape ? 12000000 : 0;
    return floorCost + solarCost + greenCost;
  }, [areaM2, solarMWp, includeLandscape]);

  return (
    <div
      id="tong-quan"
      className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#0054a6] selection:text-white"
    >
      {/* TOP INDUSTRIAL HSE & ISO UTILITY BAR */}
      <div className="bg-[#0f172a] text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2">
          <div className="flex flex-wrap items-center gap-3">
            {templateData.business.certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-sky-300 ring-1 ring-sky-400/30"
              >
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                {cert}
              </span>
            ))}
            <span className="hidden text-slate-400 md:inline">
              | {templateData.business.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${templateData.business.phone[0]}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-sky-300"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <span>Hotline KCN: {templateData.business.phone[0]}</span>
            </a>
            <span className="hidden text-slate-600 sm:inline">|</span>
            <a
              href="#bao-gia-thau"
              className="hidden font-semibold text-amber-300 hover:underline sm:inline"
            >
              Cổng Đấu Thầu BQL KCN
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER WITH "THE MONA" MOUNTAIN EMBLEM LOGO */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5">
          {/* Logo inspired by THE MONA blue-and-red peak emblem in reference */}
          <a href="#tong-quan" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 shadow-sm">
              {/* Dual mountain peak SVG */}
              <svg
                viewBox="0 0 40 28"
                className="h-6 w-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 24L15 6L24 19L19 24H3Z"
                  fill="#2563EB"
                />
                <path
                  d="M19 19L26 9L37 24H23L19 19Z"
                  fill="#EF4444"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-slate-900">
                  THE MONA
                </span>
                <span className="rounded-md bg-emerald-600 px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-white">
                  KNIC
                </span>
              </div>
              <span className="block text-[11px] font-medium text-slate-500">
                Vệ sinh &amp; Cảnh quan Khu Công Nghiệp
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {templateData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-[#0054a6]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2.5">
            <a
              href="#bao-gia-thau"
              className="hidden items-center gap-1.5 rounded-lg bg-[#0054a6] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-slate-900 sm:inline-flex"
            >
              <FileCheck2 className="h-4 w-4" />
              <span>Hồ Sơ Năng Lực</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {templateData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-xs font-bold uppercase text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION: INDUSTRIAL PARK MASTERPLAN & SOLAR ROOFTOP SHOWCASE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0b2948] to-[#0f3d3e] py-12 text-white lg:py-16">
        {/* Diagonal Architectural Blue Stripe Accent (like the reference window frame) */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rotate-12 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left 6 Cols: Headline, KPIs & CTAs */}
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3.5 py-1.5 text-xs font-bold tracking-wider text-emerald-300">
                <Leaf className="h-3.5 w-3.5" />
                <span>{templateData.hero.badge}</span>
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                {templateData.hero.title}{' '}
                <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  {templateData.hero.highlight}
                </span>
              </h1>

              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                {templateData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#bao-gia-thau"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                >
                  <span>{templateData.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#dich-vu-kcn"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs transition hover:bg-white/20"
                >
                  <span>{templateData.hero.secondaryCta}</span>
                </a>
              </div>

              {/* 4 KPI Counters */}
              <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
                {templateData.hero.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border border-white/15 bg-white/5 p-3.5 backdrop-blur-xs"
                  >
                    <p className="text-xl font-black text-sky-300 sm:text-2xl">
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-300">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Cols: Interactive 3D Industrial Park Scale-Model Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={templateData.hero.panoramaImage}
                    alt={templateData.business.name}
                    className="h-72 w-full object-cover sm:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />

                  {/* Hard-Hat Chief Engineer Mascot Callout Badge (directly referencing the THE MONA hard-hat mascot with blueprint!) */}
                  <div className="absolute top-3 left-3 flex items-center gap-3 rounded-xl border border-white/30 bg-white/95 px-3.5 py-2.5 text-slate-900 shadow-lg">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0054a6] text-white">
                      <HardHat className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900">
                        {templateData.hero.mascotBadgeTitle}
                      </p>
                      <p className="text-[10px] font-medium text-slate-600">
                        {templateData.hero.mascotBadgeSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Zone Selector Tabs at Bottom of Image */}
                  <div className="absolute inset-x-3 bottom-3">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {templateData.hero.zoneHotspots.map((zone) => {
                        const isSelected = zone.id === activeZone?.id;
                        return (
                          <button
                            key={zone.id}
                            type="button"
                            onClick={() => setActiveZoneId(zone.id)}
                            className={`rounded-lg px-3 py-1.5 text-[11px] font-extrabold uppercase transition ${
                              isSelected
                                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                                : 'bg-slate-900/80 text-white hover:bg-slate-800'
                            }`}
                          >
                            {zone.zoneCode}: {zone.name.split(' ')[0]}{' '}
                            {zone.name.split(' ')[1]}
                          </button>
                        );
                      })}
                    </div>

                    {activeZone && (
                      <div className="rounded-xl border border-white/20 bg-slate-950/90 p-3.5 text-xs backdrop-blur-md">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-extrabold text-emerald-300">
                            [{activeZone.zoneCode}] {activeZone.name}
                          </span>
                          <span className="rounded-full bg-sky-500/20 px-2.5 py-0.5 text-[10px] font-bold text-sky-300">
                            {activeZone.standard}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
                          {activeZone.description} — Quy mô:{' '}
                          <strong className="text-white">
                            {activeZone.areaScale}
                          </strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL PARK SERVICES & TENDER PACKAGES */}
      <section id="dich-vu-kcn" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0054a6]">
              {templateData.serviceSection.subtitle}
            </span>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              {templateData.serviceSection.title}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {templateData.serviceSection.tabs.map((tab) => {
              const active = selectedTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedTab(tab)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-[#0054a6] text-white shadow-xs'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-[#0054a6]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Industrial Package Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:-translate-y-1 hover:border-[#0054a6] hover:shadow-lg"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-slate-900/85 px-2.5 py-1 text-[10px] font-bold uppercase text-sky-300 backdrop-blur-xs">
                    {pkg.category}
                  </span>
                  {pkg.badge && (
                    <span className="absolute top-3 right-3 rounded-md bg-emerald-600 px-2.5 py-1 text-[10px] font-extrabold uppercase text-white shadow-xs">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base font-extrabold leading-snug text-slate-900 group-hover:text-[#0054a6]">
                    {pkg.title}
                  </h3>

                  {/* Technical Spec Box */}
                  <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-3 text-[11px] ring-1 ring-slate-200/70">
                    <div>
                      <span className="block text-slate-400">Công suất đáp ứng</span>
                      <strong className="text-slate-800">{pkg.capacity}</strong>
                    </div>
                    <div>
                      <span className="block text-slate-400">Thiết bị chủ lực</span>
                      <strong className="line-clamp-1 text-slate-800">
                        {pkg.equipment}
                      </strong>
                    </div>
                  </div>

                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600">
                    {pkg.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-5 py-3.5">
                <div>
                  <span className="block text-[10px] font-semibold uppercase text-slate-400">
                    Đơn giá dự toán
                  </span>
                  <span className="text-base font-black text-[#0054a6]">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {pkg.unit}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedServiceModal(pkg)}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0054a6]"
                >
                  Chi Tiết Thầu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLAR ROOFTOP & ECO-INDUSTRIAL PARK HIGHLIGHT SECTION */}
      <section
        id="dien-mat-troi"
        className="border-y border-slate-200 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <img
                  src={templateData.solarAndEnvironment.image}
                  alt={templateData.solarAndEnvironment.title}
                  className="h-80 w-full object-cover sm:h-96"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-900/90 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Sun className="h-8 w-8 shrink-0 text-amber-400" />
                    <div>
                      <p className="text-xs font-bold uppercase text-amber-300">
                        Bảo dưỡng Solar Rooftop Chuẩn IEC 62446
                      </p>
                      <p className="text-xs text-slate-300">
                        Tự động hóa bằng Robot chổi xoay sợi nano kết hợp nước tinh khiết DI độ dẫn điện &lt; 5 µS/cm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0054a6]">
                <Trees className="h-4 w-4 text-emerald-600" />
                {templateData.solarAndEnvironment.badge}
              </span>

              <h2 className="text-2xl font-black leading-snug text-slate-900 sm:text-3xl">
                {templateData.solarAndEnvironment.title}
              </h2>

              <p className="text-sm leading-relaxed text-slate-600">
                {templateData.solarAndEnvironment.description}
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                {templateData.solarAndEnvironment.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-2xl font-black text-emerald-600">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-800">
                      {m.label}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP HSE WORKFLOW & INTERACTIVE TENDER ESTIMATOR */}
      <section
        id="quy-trinh-hse"
        className="mx-auto max-w-7xl px-4 py-16"
      >
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            {templateData.workflow.title}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-500 sm:text-sm">
            {templateData.workflow.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templateData.workflow.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0054a6] text-sm font-black text-white">
                {step.stepNumber}
              </span>
              <h3 className="mt-4 text-sm font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Industrial Park Tender Cost Calculator */}
        <div
          id="bao-gia-thau"
          className="mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d2f52] to-slate-900 p-6 text-white shadow-xl sm:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                <Calculator className="h-4 w-4" />
                <span>Công cụ dự toán ngân sách thầu KCN</span>
              </div>
              <h3 className="text-2xl font-black">
                Tính Nhanh Chi Phí Vệ Sinh Nhà Xưởng &amp; Điện Mặt Trời
              </h3>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Diện tích sàn nhà xưởng / kho vận:</span>
                    <span className="text-sky-300">
                      {areaM2.toLocaleString('vi-VN')} m²
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={50000}
                    step={1000}
                    value={areaM2}
                    onChange={(e) => setAreaM2(Number(e.target.value))}
                    className="mt-2 w-full accent-emerald-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Công suất hệ thống Pin mặt trời áp mái:</span>
                    <span className="text-amber-300">{solarMWp} MWp</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={15}
                    step={1}
                    value={solarMWp}
                    onChange={(e) => setSolarMWp(Number(e.target.value))}
                    className="mt-2 w-full accent-amber-400"
                  />
                </div>

                <label className="flex cursor-pointer items-center gap-2.5 text-xs font-semibold text-slate-200">
                  <input
                    type="checkbox"
                    checked={includeLandscape}
                    onChange={(e) => setIncludeLandscape(e.target.checked)}
                    className="h-4 w-4 rounded accent-emerald-500"
                  />
                  <span>
                    Bao gồm gói cắt tỉa cây xanh &amp; quét hút bụi đường nội khu định kỳ
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-xs lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Ngân sách dự kiến (Chưa gồm VAT)
              </span>
              <p className="mt-2 text-3xl font-black text-emerald-400 sm:text-4xl">
                {estimatedCost.toLocaleString('vi-VN')} ₫
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                * Đã bao gồm nhân sự có chứng chỉ HSE, máy chà sàn ngồi lái và bảo hiểm công trình.
              </p>

              <button
                type="button"
                onClick={() => setQuoteSubmitted(true)}
                className="mt-5 w-full rounded-xl bg-emerald-500 py-3 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition hover:bg-emerald-400"
              >
                Nhận Bảng Chào Giá Thầu Chi Tiết
              </button>

              {quoteSubmitted && (
                <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                  <CheckCircle2 className="h-4 w-4" /> Phòng Đấu Thầu KCN sẽ liên hệ trong 15 phút!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section
        id="du-an-kcn"
        className="border-t border-slate-200 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              {templateData.caseStudies.title}
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              {templateData.caseStudies.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {templateData.caseStudies.items.map((cs) => (
              <div
                key={cs.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xs"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.parkName}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-[#0054a6] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                    {cs.location}
                  </span>
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <Award className="h-3.5 w-3.5" />
                    {cs.certification}
                  </span>
                  <h3 className="mt-1 text-base font-extrabold text-slate-900">
                    {cs.parkName}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    Quy mô: {cs.scale}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {cs.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE FOOTER */}
      <footer className="bg-slate-950 pt-14 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand Info (4 cols) */}
            <div className="space-y-3 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <Factory className="h-6 w-6 text-emerald-400" />
                <span className="text-lg font-black text-white">
                  {templateData.business.name}
                </span>
              </div>
              <p className="leading-relaxed text-slate-400">
                {templateData.business.tagline}
              </p>
              <div className="space-y-2 pt-2 text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{templateData.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </p>
              </div>
            </div>

            {/* Services (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                Dịch Vụ Khu Công Nghiệp
              </h4>
              <ul className="space-y-2">
                {templateData.footer.industrialServices.map((s) => (
                  <li key={s}>
                    <a
                      href="#dich-vu-kcn"
                      className="transition hover:text-emerald-400"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tender Docs (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                Hồ Sơ Đấu Thầu
              </h4>
              <ul className="space-y-2">
                {templateData.footer.quickLinks.map((q) => (
                  <li key={q}>
                    <a
                      href="#bao-gia-thau"
                      className="transition hover:text-emerald-400"
                    >
                      {q}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regional Offices (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-white">
                Trạm Điều Hành Vùng KCN
              </h4>
              <div className="space-y-3">
                {templateData.footer.regionalOffices.map((off) => (
                  <div
                    key={off.region}
                    className="rounded-lg border border-slate-800 bg-slate-900/70 p-2.5"
                  >
                    <p className="font-bold text-emerald-400">{off.region}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {off.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-4 text-center text-[11px] text-slate-500">
          {templateData.business.copyright}
        </div>
      </footer>

      {/* TENDER PACKAGE MODAL */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2.5 py-1 text-[11px] font-bold text-[#0054a6]">
              <Building2 className="h-3.5 w-3.5" />
              {selectedServiceModal.category}
            </span>
            <h3 className="mt-2 text-lg font-black text-slate-900">
              {selectedServiceModal.title}
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Thiết bị: {selectedServiceModal.equipment} | Năng lực:{' '}
              {selectedServiceModal.capacity}
            </p>
            <ul className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
              {selectedServiceModal.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400">Đơn giá thầu</span>
                <p className="text-xl font-black text-[#0054a6]">
                  {selectedServiceModal.price} {selectedServiceModal.unit}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedServiceModal(null);
                  const el = document.getElementById('bao-gia-thau');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-extrabold uppercase text-white hover:bg-emerald-700"
              >
                Yêu cầu khảo sát
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
