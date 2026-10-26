'use client';

import React, { useMemo, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Home,
  Layers,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Trees,
  X,
} from 'lucide-react';
type SubpageData = any;
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

function LeafOrnament({ light = false }: { light?: boolean }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-2">
      <span
        className={`h-[1px] w-10 ${
          light ? 'bg-emerald-300/60' : 'bg-[#2a9d5c]/60'
        }`}
      />
      <div
        className={`flex items-center gap-1 ${
          light ? 'text-emerald-300' : 'text-[#2a9d5c]'
        }`}
      >
        <Leaf className="h-4 w-4 -rotate-45 fill-current" />
        <Leaf className="h-5 w-5 -translate-y-0.5 fill-current" />
        <Leaf className="h-4 w-4 rotate-45 fill-current" />
      </div>
      <span
        className={`h-[1px] w-10 ${
          light ? 'bg-emerald-300/60' : 'bg-[#2a9d5c]/60'
        }`}
      />
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
    BRAND_INFO,
    NAV_ITEMS,
    HERO_DATA,
    LOCATION_DATA,
    INTERNAL_AMENITIES,
    EXTERNAL_HUB_NODES,
    EXTERNAL_INTERSECTION_IMAGE,
    FOUR_PRIVILEGES,
    DESIGN_SHOWCASE,
    FLOOR_PLAN_TABS,
    PAYMENT_SCHEDULE,
    PAYMENT_HIGHLIGHT_IMAGE,
    STRATEGIC_PARTNERS,
  } = mockData;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);
  const [activeFloorPlanId, setActiveFloorPlanId] = useState(
    FLOOR_PLAN_TABS[0]?.id || 'fp-7-30'
  );
  const [selectedInstallmentId, setSelectedInstallmentId] = useState(
    PAYMENT_SCHEDULE[0]?.id || 'pay-01'
  );
  const [leadForm, setLeadForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    unitInterest: 'Căn hộ 2 Phòng Ngủ (70 - 79m²)',
    message: '',
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const currentAmenity =
    INTERNAL_AMENITIES[activeAmenityIndex] || INTERNAL_AMENITIES[0];
  const prevAmenity =
    INTERNAL_AMENITIES[
      (activeAmenityIndex - 1 + INTERNAL_AMENITIES.length) %
        INTERNAL_AMENITIES.length
    ];
  const nextAmenity =
    INTERNAL_AMENITIES[(activeAmenityIndex + 1) % INTERNAL_AMENITIES.length];

  const activeFloorPlan = useMemo(
    () =>
      FLOOR_PLAN_TABS.find((tab) => tab.id === activeFloorPlanId) ||
      FLOOR_PLAN_TABS[0],
    [FLOOR_PLAN_TABS, activeFloorPlanId]
  );

  const selectedInstallment = useMemo(
    () =>
      PAYMENT_SCHEDULE.find((item) => item.id === selectedInstallmentId) ||
      PAYMENT_SCHEDULE[0],
    [PAYMENT_SCHEDULE, selectedInstallmentId]
  );

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.fullName.trim() || !leadForm.phone.trim()) return;
    setLeadSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#135d66] selection:text-white">
      {/* 1. HEADER (#135d66 Deep Teal-Green with Gold Serif KINGDOM 101 Logo) */}
      <header className="sticky top-0 z-50 border-b border-teal-800/70 bg-[#135d66] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-6">
          <a
            href="#tong-quan"
            className="flex items-center gap-3 text-left group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2b857]/60 bg-[#0d464d] text-[#e2b857] shadow-inner">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-serif text-xl font-bold tracking-[0.14em] text-[#e2b857] sm:text-2xl">
                {BRAND_INFO.brandName}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-teal-100/80">
                Hoa Lam Corp • Quận 10
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            <a
              href="#tong-quan"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e2b857]/15 text-[#e2b857] transition hover:bg-[#e2b857] hover:text-[#0d464d]"
              title="Trang chủ"
            >
              <Home className="h-4 w-4" />
            </a>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded px-2.5 py-2 text-xs font-semibold tracking-wider text-white/90 transition hover:bg-white/10 hover:text-[#e2b857] xl:px-3"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hotline CTA + Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
              className="hidden items-center gap-2 rounded-full border border-[#e2b857] bg-[#e2b857] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0f3d44] shadow-sm transition hover:bg-[#ecc974] sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{BRAND_INFO.hotline}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
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

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-teal-800 bg-[#0f4c54] px-4 py-4 lg:hidden">
            <div className="flex flex-col space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:text-[#e2b857]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
                className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[#e2b857] py-2.5 text-xs font-bold uppercase text-[#0f3d44]"
              >
                <Phone className="h-4 w-4" />
                Hotline PKD: {BRAND_INFO.hotline}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER + CIRCULAR WHITE "TỔNG QUAN DỰ ÁN" BADGE + INTRO BLOCK */}
      <section id="tong-quan" className="relative overflow-hidden bg-slate-900">
        <div className="relative min-h-[600px] w-full lg:min-h-[680px]">
          <img
            src={HERO_DATA.heroImage}
            alt={BRAND_INFO.brandName}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e36]/80 via-[#0a2e36]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e36]/75 via-transparent to-black/20" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-4 py-12 lg:flex-row lg:items-center lg:px-6 lg:py-16">
            {/* Left Circular White Badge "TỔNG QUAN DỰ ÁN" */}
            <div className="relative mx-auto w-full max-w-[470px] rounded-full border-[6px] border-[#2a9d5c]/40 bg-white/95 p-8 text-slate-800 shadow-2xl backdrop-blur-sm sm:p-11 lg:mx-0">
              {/* Decorative green leaf accent on top-right of circle */}
              <div className="absolute -right-2 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#2a9d5c] text-white shadow-lg">
                <Leaf className="h-7 w-7" />
              </div>

              <div className="text-center">
                <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#135d66]">
                  Quận 10 • TP. Hồ Chí Minh
                </span>
                <h1 className="mt-2 font-serif text-xl font-bold uppercase tracking-wide text-[#135d66] sm:text-2xl">
                  {HERO_DATA.badgeTitle}
                </h1>
                <p className="mt-1 flex items-center justify-center gap-1 text-xs font-medium text-[#2a9d5c]">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>{HERO_DATA.addressLine}</span>
                </p>
              </div>

              {/* 2x4 Spec Grid inside the Circle */}
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-200 pt-4 text-left">
                {HERO_DATA.overviewSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-[#2a9d5c] pl-2.5"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-tight text-slate-500">
                      {spec.label}
                    </p>
                    <p className="text-xs font-bold text-slate-900 sm:text-[13px]">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-center">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 rounded-full bg-[#135d66] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#e2b857] shadow-md transition hover:bg-[#0e464d]"
                >
                  <span>Nhận trọn bộ hồ sơ pháp lý</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Floating Glass Highlight Box on Hero */}
            <div className="max-w-md rounded-2xl border border-white/25 bg-[#0e3f47]/80 p-6 text-white backdrop-blur-md lg:ml-auto">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#e2b857]/20 px-3 py-1 text-xs font-semibold text-[#e2b857]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Biểu tượng sống xanh chuẩn Bắc Âu</span>
              </div>
              <h2 className="font-serif text-2xl font-bold leading-snug text-white sm:text-3xl">
                3 Tòa Tháp 30 Tầng & Công Viên Nội Khu 1,4 Ha
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-50/90">
                Sở hữu căn hộ hạng sang bàn giao hoàn thiện ngay trung tâm Quận
                10 với pháp lý minh bạch, ngân hàng Vietbank bảo lãnh và hỗ trợ
                lãi suất ưu đãi.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/15 pt-4 text-center">
                <div>
                  <p className="font-serif text-xl font-bold text-[#e2b857]">
                    3,36 ha
                  </p>
                  <p className="text-[11px] text-teal-100">Quy mô đất vàng</p>
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-[#e2b857]">
                    986 căn
                  </p>
                  <p className="text-[11px] text-teal-100">Giới hạn độc bản</p>
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-[#e2b857]">
                    85 vườn
                  </p>
                  <p className="text-[11px] text-teal-100">Vườn treo tầng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Intro Block below Hero Banner */}
        <div className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-14 bg-[#135d66]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a9d5c]">
                    Giới thiệu dự án
                  </span>
                </div>
                <h2 className="mt-3 font-serif text-3xl font-bold tracking-wide text-[#135d66] sm:text-4xl">
                  {HERO_DATA.introHeadline}
                </h2>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-amber-600">
                  {HERO_DATA.introSubtitle}
                </p>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-slate-600 lg:col-span-8 sm:text-base">
                {HERO_DATA.introParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 1: "VỊ TRÍ ĐẮC ĐỊA" (#116466 Teal Background + Travel Times + Map + Angle Quote) */}
      <section id="vi-tri" className="relative bg-[#116466] pt-16 text-white">
        <div className="mx-auto max-w-7xl px-4 pb-14 lg:px-6">
          <div className="text-center">
            <LeafOrnament light />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl">
              {LOCATION_DATA.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-teal-50/90 sm:text-base">
              {LOCATION_DATA.leadText}
            </p>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-12">
            {/* Left Column: Location Details & 4 Travel Time Rows */}
            <div className="space-y-5 lg:col-span-5">
              <div className="rounded-xl border border-teal-400/30 bg-[#0d4d4f]/90 p-5 shadow-lg">
                <div className="flex items-center gap-2 text-[#e2b857]">
                  <Compass className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Tọa độ giao lộ trung tâm Quận 10
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-teal-50">
                  Dự án sở hữu mặt tiền dài hơn 200m trên trục Tô Hiến Thành &
                  Thành Thái, kết nối nhanh chóng đến toàn bộ các quận nội thành
                  mà không lo ngại ùn tắc giao thông.
                </p>
              </div>

              <div className="space-y-3">
                {LOCATION_DATA.travelTimes.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm transition hover:bg-white/15"
                  >
                    <div className="flex h-14 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-[#e2b857] text-[#0d464d] shadow">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="mt-0.5 text-xs font-extrabold tracking-tight">
                        {item.minutes}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.destination}
                      </h3>
                      <p className="mt-0.5 text-xs text-teal-100/85">
                        {item.routeNote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: District 10 Connectivity Map Card */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border-4 border-white/90 bg-white shadow-2xl">
                <img
                  src={LOCATION_DATA.mapImage}
                  alt="Bản đồ vị trí Kingdom 101 Quận 10"
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b383a]/90 via-[#0b383a]/25 to-transparent" />

                {/* Interactive Map Pin Callout */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex flex-col items-center">
                    <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-[#e2b857] opacity-60" />
                    <div className="relative flex items-center gap-2 rounded-full border-2 border-white bg-[#135d66] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#e2b857] shadow-xl">
                      <MapPin className="h-4 w-4 text-[#e2b857]" />
                      <span>KINGDOM 101 • 334 TÔ HIẾN THÀNH</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Legend */}
                <div className="absolute bottom-0 inset-x-0 flex flex-wrap items-center justify-between gap-2 bg-[#0b383a]/95 px-5 py-3.5 text-xs text-teal-50">
                  <span>• Đông giáp: Đường Thành Thái & Quận 3</span>
                  <span>• Tây giáp: Khu TDTT Phú Thọ & Quận 11</span>
                  <span>• Nam giáp: Đường 3/2 & Quận 1, Quận 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Angled Quote Strip Below Location Map */}
        <div className="relative bg-white py-10 text-center shadow-sm">
          <div className="mx-auto max-w-4xl px-4">
            <p className="font-serif text-base font-medium italic leading-relaxed text-[#135d66] sm:text-lg">
              &ldquo;{LOCATION_DATA.highlightQuote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: "TIỆN ÍCH ĐẲNG CẤP XỨNG TẦM" (Leaf Ornament + Center Stage Carousel + Side Previews + Radio Dots) */}
      <section id="tien-ich" className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <LeafOrnament />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-[#135d66] sm:text-3xl">
              TIỆN ÍCH ĐẲNG CẤP XỨNG TẦM
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Hệ sinh thái tiện ích nội khu chuẩn Resort 5 sao khép kín phục vụ
              trọn vẹn nhu cầu nghỉ dưỡng, rèn luyện thể chất và gắn kết gia
              đình mỗi ngày.
            </p>
          </div>

          {/* 3-Panel Stage Carousel (Left Preview + Center Main Image + Right Preview) */}
          <div className="mt-10 grid items-center gap-4 lg:grid-cols-12">
            {/* Left Side Thumbnail Preview */}
            <button
              type="button"
              onClick={() =>
                setActiveAmenityIndex(
                  (activeAmenityIndex - 1 + INTERNAL_AMENITIES.length) %
                    INTERNAL_AMENITIES.length
                )
              }
              className="group relative hidden h-[300px] overflow-hidden rounded-xl border border-slate-200 shadow-md lg:col-span-2 lg:block"
              aria-label="Tiện ích trước"
            >
              <img
                src={prevAmenity.image}
                alt={prevAmenity.title}
                className="h-full w-full object-cover opacity-65 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-slate-900/45 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#135d66] shadow">
                  <ChevronLeft className="h-5 w-5" />
                </span>
              </div>
            </button>

            {/* Center Featured Amenity Stage */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-900 shadow-2xl lg:col-span-8">
              <div className="relative h-[340px] sm:h-[430px]">
                <img
                  src={currentAmenity.image}
                  alt={currentAmenity.title}
                  className="h-full w-full object-cover transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-[#2a9d5c] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                  {currentAmenity.category}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3.5 py-1 text-xs font-semibold text-[#e2b857] backdrop-blur-sm">
                  {currentAmenity.areaScale}
                </div>

                {/* Mobile Prev/Next arrows */}
                <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between lg:hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveAmenityIndex(
                        (activeAmenityIndex - 1 + INTERNAL_AMENITIES.length) %
                          INTERNAL_AMENITIES.length
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#135d66] shadow"
                    aria-label="Trước"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveAmenityIndex(
                        (activeAmenityIndex + 1) % INTERNAL_AMENITIES.length
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#135d66] shadow"
                    aria-label="Tiếp"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Bottom Dark Caption Bar (Matching screenshot "KHU VUI CHƠI TRẺ EM") */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 px-6 py-4 text-center backdrop-blur-sm">
                  <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-[#e2b857] sm:text-xl">
                    {currentAmenity.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side Thumbnail Preview */}
            <button
              type="button"
              onClick={() =>
                setActiveAmenityIndex(
                  (activeAmenityIndex + 1) % INTERNAL_AMENITIES.length
                )
              }
              className="group relative hidden h-[300px] overflow-hidden rounded-xl border border-slate-200 shadow-md lg:col-span-2 lg:block"
              aria-label="Tiện ích tiếp theo"
            >
              <img
                src={nextAmenity.image}
                alt={nextAmenity.title}
                className="h-full w-full object-cover opacity-65 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-slate-900/45 flex items-center justify-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#135d66] shadow">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </div>
            </button>
          </div>

          {/* 6 Radio Dots Selector + Active Description Paragraph */}
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="flex items-center gap-2.5">
              {INTERNAL_AMENITIES.map((slide, idx) => {
                const isSelected = idx === activeAmenityIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveAmenityIndex(idx)}
                    className={`h-3.5 rounded-full transition-all ${
                      isSelected
                        ? 'w-9 bg-[#135d66] ring-2 ring-[#2a9d5c]/40'
                        : 'w-3.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={slide.title}
                  />
                );
              })}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {currentAmenity.description}
            </p>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: "LIÊN KẾT NGOẠI KHU HOÀN HẢO" (Dark Teal Split: Left Hexagonal Hub Diagram + Right Intersection Photo) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <LeafOrnament />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-[#135d66] sm:text-3xl">
              LIÊN KẾT NGOẠI KHU HOÀN HẢO
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Từ tâm điểm Kingdom 101, cư dân tiếp cận ngay hệ thống trường đại
              học danh tiếng, bệnh viện tuyến đầu và trung tâm thương mại lớn
              nhất TP.HCM.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 shadow-xl lg:grid-cols-12">
            {/* Left (#0f4c5c): Central Gold Hexagon "KINGDOM 101" + 8 Surrounding Nodes */}
            <div className="flex flex-col justify-between bg-[#0f4c5c] p-6 text-white sm:p-8 lg:col-span-7">
              <div className="mb-6 flex flex-col items-center text-center">
                <div className="relative flex h-24 w-48 flex-col items-center justify-center rounded-2xl border-2 border-[#e2b857] bg-[#135d66] px-4 shadow-lg">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                    Tâm Điểm Kết Nối
                  </span>
                  <span className="mt-0.5 font-serif text-xl font-bold tracking-widest text-[#e2b857]">
                    {BRAND_INFO.brandName}
                  </span>
                  <span className="text-[11px] text-teal-100">
                    334 Tô Hiến Thành, Q.10
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {EXTERNAL_HUB_NODES.map((node) => (
                  <div
                    key={node.id}
                    className="flex items-center gap-3 rounded-xl border border-teal-400/25 bg-[#135d66]/90 p-3 transition hover:border-[#e2b857]"
                  >
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full border border-[#e2b857] bg-[#0b3844] text-[#e2b857]">
                      <span className="text-[11px] font-extrabold leading-tight">
                        {node.minutes.split(' ')[0]}
                      </span>
                      <span className="text-[9px] uppercase">Phút</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                        {node.category}
                      </span>
                      <h3 className="text-xs font-bold leading-snug text-white sm:text-sm">
                        {node.place}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Aerial Intersection Map of To Hien Thanh & Thanh Thai */}
            <div className="relative min-h-[360px] bg-slate-900 lg:col-span-5">
              <img
                src={EXTERNAL_INTERSECTION_IMAGE}
                alt="Giao lộ Tô Hiến Thành và Thành Thái Quận 10"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092c35]/90 via-[#092c35]/30 to-transparent" />
              <div className="absolute bottom-6 inset-x-6 rounded-xl border border-white/20 bg-[#0f4c5c]/90 p-5 text-white backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#e2b857]">
                  Hạ tầng đồng bộ hiện hữu
                </p>
                <h3 className="mt-1 font-serif text-lg font-bold">
                  Giao Lộ Thương Mại Sầm Uất Bậc Nhất Quận 10
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-teal-100">
                  Liền kề tuyến Metro số 2 & số 5, bao quanh bởi mạng lưới y tế
                  – giáo dục – tài chính lâu đời của Sài Gòn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: "04 ĐẶC QUYỀN ĐẲNG CẤP" (Large Teal 04 + 4 Vertical Columns) */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
            <span className="font-serif text-6xl font-extrabold leading-none text-[#135d66] sm:text-7xl">
              04
            </span>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a9d5c]">
                Giá trị độc bản chỉ có tại {BRAND_INFO.brandName}
              </span>
              <h2 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#135d66] sm:text-3xl">
                ĐẶC QUYỀN ĐẲNG CẤP
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FOUR_PRIVILEGES.map((priv) => (
              <div
                key={priv.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#135d66] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-serif text-3xl font-bold text-[#135d66]">
                      {priv.number}.
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-[#2a9d5c]">
                      {priv.subtitle}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-slate-900">
                    {priv.number}. {priv.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {priv.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {priv.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2a9d5c]" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: "THIẾT KẾ ĐỈNH CAO" + "MẶT BẰNG" (6 Interactive Floor Tabs + 3-Block Architectural Blueprint) */}
      <section id="thiet-ke" className="bg-white pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <LeafOrnament />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-[#135d66] sm:text-3xl">
              {DESIGN_SHOWCASE.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {DESIGN_SHOWCASE.description}
            </p>
          </div>
        </div>

        {/* Full-width Luxury Green-View Apartment Living Room Banner */}
        <div className="relative mt-8 h-[360px] w-full overflow-hidden sm:h-[460px]">
          <img
            src={DESIGN_SHOWCASE.bannerImage}
            alt="Không gian nội thất căn hộ Kingdom 101"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2f35]/90 via-transparent to-black/20" />
          <div className="absolute bottom-6 inset-x-0 mx-auto max-w-7xl px-4 lg:px-6">
            <div className="grid gap-3 rounded-xl border border-white/20 bg-[#135d66]/90 p-4 text-white backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
              {DESIGN_SHOWCASE.interiorSpecs.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#e2b857]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MẶT BẰNG Interactive Ribbon & 6 Floor Plan Tabs */}
        <div id="mat-bang" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            {/* Teal Ribbon Header "MẶT BẰNG" */}
            <div className="overflow-hidden rounded-t-2xl bg-[#135d66] px-6 py-5 text-white shadow-md">
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div className="flex items-center gap-3">
                  <Layers className="h-6 w-6 text-[#e2b857]" />
                  <h2 className="font-serif text-xl font-bold uppercase tracking-[0.14em] text-white sm:text-2xl">
                    MẶT BẰNG TỔNG THỂ & TẦNG ĐIỂN HÌNH
                  </h2>
                </div>

                {/* 6 Interactive Floor Tabs ("TẦNG 7 - 30", "TẦNG 2", "TẦNG 3", "TẦNG 4", "TẦNG 5", "TẦNG 6") */}
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {FLOOR_PLAN_TABS.map((tab) => {
                    const active = tab.id === activeFloorPlan.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveFloorPlanId(tab.id)}
                        className={`rounded-md px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                          active
                            ? 'bg-[#e2b857] text-[#0d3f46] shadow'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {tab.tabLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active Floor Plan Blueprint & Architectural Breakdown */}
            <div className="rounded-b-2xl border border-t-0 border-slate-200 bg-white p-6 shadow-xl lg:p-8">
              <div className="grid items-center gap-8 lg:grid-cols-12">
                {/* 3-Wing Blueprint Image */}
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <img
                      src={activeFloorPlan.image}
                      alt={activeFloorPlan.title}
                      className="h-[320px] w-full object-cover sm:h-[400px]"
                    />
                    <div className="absolute left-4 top-4 rounded-md bg-[#135d66] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e2b857] shadow">
                      {activeFloorPlan.tabLabel}
                    </div>
                    <div className="bg-slate-900 px-4 py-2.5 text-center text-xs font-medium text-teal-100">
                      {activeFloorPlan.elevationInfo}
                    </div>
                  </div>
                </div>

                {/* Floor Plan Specs */}
                <div className="space-y-4 lg:col-span-5">
                  <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#2a9d5c]">
                    {activeFloorPlan.areaRange}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#135d66] sm:text-2xl">
                    {activeFloorPlan.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    {activeFloorPlan.unitSummary}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {activeFloorPlan.description}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-100 pt-4">
                    {activeFloorPlan.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-medium text-slate-700 sm:text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#135d66]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href="#lien-he"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#135d66] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#e2b857] transition hover:bg-[#0e464d]"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Tải bản vẽ chi tiết từng căn (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: "CHÍNH SÁCH & PHƯƠNG THỨC THANH TOÁN" (Teal Background Table + Infinity Pool Photo) */}
      <section id="thanh-toan" className="bg-[#116466] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center">
            <LeafOrnament light />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-white sm:text-3xl">
              CHÍNH SÁCH & PHƯƠNG THỨC THANH TOÁN
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-teal-100">
              Lịch thanh toán chuẩn linh hoạt chia làm 09 đợt theo tiến độ xây
              dựng thực tế cùng gói vay ưu đãi lãi suất từ ngân hàng Vietbank.
            </p>
          </div>

          {/* 9-Row Bordered Payment Schedule Table */}
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-[#e2b857]/60 bg-[#0d4d4f] shadow-2xl">
            <div className="grid grid-cols-12 border-b-2 border-[#e2b857]/50 bg-[#09383a] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-[#e2b857] sm:px-6">
              <div className="col-span-3 sm:col-span-2">Tiến độ</div>
              <div className="col-span-6 sm:col-span-5">
                Mốc thanh toán & Tỷ lệ
              </div>
              <div className="col-span-3 text-right sm:col-span-5 sm:text-left">
                Chi tiết áp dụng
              </div>
            </div>

            <div className="divide-y divide-teal-700/60">
              {PAYMENT_SCHEDULE.map((row) => {
                const isSelected = row.id === selectedInstallment.id;
                return (
                  <button
                    key={row.id}
                    type="button"
                    onClick={() => setSelectedInstallmentId(row.id)}
                    className={`grid w-full grid-cols-12 items-center px-4 py-3.5 text-left transition sm:px-6 ${
                      isSelected
                        ? 'bg-[#e2b857]/20 text-white'
                        : 'hover:bg-white/5 text-teal-50'
                    }`}
                  >
                    <div className="col-span-3 sm:col-span-2">
                      <span className="inline-block rounded bg-[#e2b857] px-2.5 py-1 text-xs font-extrabold text-[#0b383a]">
                        {row.stageCode}
                      </span>
                    </div>
                    <div className="col-span-6 pr-2 font-serif text-xs font-bold tracking-wide text-white sm:col-span-5 sm:text-sm">
                      {row.milestone}
                    </div>
                    <div className="col-span-3 text-right text-xs text-teal-100 sm:col-span-5 sm:text-left">
                      <span className="hidden sm:inline">{row.note}</span>
                      <span className="font-bold text-[#e2b857] sm:hidden">
                        {row.percentage}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Installment Detail Footer Bar */}
            <div className="flex flex-col items-start justify-between gap-3 border-t border-teal-700 bg-[#09383a] px-6 py-4 text-xs text-teal-100 sm:flex-row sm:items-center">
              <div>
                <strong className="text-[#e2b857]">
                  Đang chọn {selectedInstallment.stageCode} (
                  {selectedInstallment.percentage}):
                </strong>{' '}
                {selectedInstallment.note}
              </div>
              <a
                href="#lien-he"
                className="shrink-0 rounded-full bg-[#e2b857] px-4 py-1.5 text-xs font-bold uppercase text-[#09383a] transition hover:bg-amber-300"
              >
                Nhận bảng tính dòng tiền vay
              </a>
            </div>
          </div>

          {/* Bottom Infinity Pool Photo */}
          <div className="relative mt-8 overflow-hidden rounded-2xl border-4 border-white/90 shadow-2xl">
            <img
              src={PAYMENT_HIGHLIGHT_IMAGE}
              alt="Tiện ích hồ bơi và cảnh quan thực tế Kingdom 101"
              className="h-[260px] w-full object-cover sm:h-[340px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09383a]/85 via-[#09383a]/30 to-transparent flex items-center">
              <div className="max-w-lg p-6 sm:p-8">
                <span className="rounded-full bg-[#2a9d5c] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Chính sách ưu đãi đặc biệt
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold text-white sm:text-2xl">
                  Chiết Khấu Thanh Toán Nhanh & Ân Hạn Nợ Gốc Đến Khi Nhận Nhà
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-teal-50 sm:text-sm">
                  Tặng ngay gói nội thất cao cấp và miễn phí quản lý vận hành 02
                  năm đầu tiên cho khách hàng đăng ký giữ chỗ sớm trong tháng
                  này.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: "ĐỐI TÁC CHIẾN LƯỢC" (HOA LAM CORPORATION & COTECCONS / CEN LAND) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="text-center">
            <LeafOrnament />
            <h2 className="font-serif text-2xl font-bold uppercase tracking-[0.1em] text-[#135d66] sm:text-3xl">
              ĐỐI TÁC CHIẾN LƯỢC
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Bảo chứng chất lượng công trình, tiến độ bàn giao và tiềm năng gia
              tăng giá trị bởi những thương hiệu uy tín hàng đầu thị trường.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:border-[#135d66] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#2a9d5c]">
                        {partner.role}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-extrabold tracking-wide text-[#135d66]">
                        {partner.code}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#135d66] text-[#e2b857]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>

                  <h4 className="mt-4 text-sm font-bold text-slate-900">
                    {partner.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {partner.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4">
                  {partner.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-slate-700"
                    >
                      <Trees className="mt-0.5 h-4 w-4 shrink-0 text-[#2a9d5c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER (#2b3a42 Dark Slate/Teal with 3 Columns: Contact Info + Registration Form + Social Links) */}
      <footer id="lien-he" className="bg-[#2b3a42] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column: Project Contact Info */}
            <div className="space-y-4 lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2b857] bg-[#135d66] text-[#e2b857]">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-widest text-[#e2b857]">
                  {BRAND_INFO.brandName}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {BRAND_INFO.tagline}. Phân phối chính thức căn hộ giá gốc Chủ
                đầu tư Tập đoàn Hoa Lâm.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e2b857]" />
                  <span>
                    <strong>Vị trí dự án & Nhà mẫu:</strong>{' '}
                    {BRAND_INFO.projectAddress}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#e2b857]" />
                  <span>
                    <strong>Hotline Phòng Kinh Doanh 24/7:</strong>{' '}
                    <a
                      href={`tel:${BRAND_INFO.hotline.replace(/\s+/g, '')}`}
                      className="font-bold text-[#e2b857] hover:underline"
                    >
                      {BRAND_INFO.hotline}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#e2b857]" />
                  <span>
                    <strong>Email:</strong> {BRAND_INFO.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Center Column: "ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN & BẢNG GIÁ CHI TIẾT" Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-[#223038] p-6 shadow-xl">
                <h3 className="text-center font-serif text-sm font-bold uppercase tracking-wider text-[#e2b857] sm:text-base">
                  ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN & BẢNG GIÁ CHI TIẾT
                </h3>
                <p className="mt-1 text-center text-xs text-slate-300">
                  Cam kết bảo mật thông tin tuyệt đối & gửi bảng giá rổ căn đẹp
                  nhất qua Zalo/Email sau 3 phút.
                </p>

                {leadSubmitted ? (
                  <div className="mt-5 rounded-xl border border-emerald-500/40 bg-emerald-950/60 p-5 text-center">
                    <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-400" />
                    <h4 className="mt-2 text-sm font-bold text-white">
                      Đăng ký nhận bảng giá thành công!
                    </h4>
                    <p className="mt-1 text-xs text-emerald-200">
                      Chuyên viên tư vấn cấp cao dự án {BRAND_INFO.brandName} sẽ
                      liên hệ tới số <strong>{leadForm.phone}</strong> ngay lập
                      tức.
                    </p>
                    <button
                      type="button"
                      onClick={() => setLeadSubmitted(false)}
                      className="mt-3 text-xs font-semibold text-[#e2b857] underline"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên quý khách *"
                        value={leadForm.fullName}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-slate-600 bg-[#2b3a42] px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#e2b857] focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại (Zalo) *"
                        value={leadForm.phone}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-slate-600 bg-[#2b3a42] px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#e2b857] focus:outline-none"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="email"
                        placeholder="Địa chỉ Email nhận bảng giá"
                        value={leadForm.email}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-slate-600 bg-[#2b3a42] px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#e2b857] focus:outline-none"
                      />
                      <select
                        value={leadForm.unitInterest}
                        onChange={(e) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            unitInterest: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg border border-slate-600 bg-[#2b3a42] px-3.5 py-2.5 text-xs text-white focus:border-[#e2b857] focus:outline-none"
                      >
                        <option>Căn hộ 1 Phòng Ngủ (48 - 60m²)</option>
                        <option>Căn hộ 2 Phòng Ngủ (70 - 79m²)</option>
                        <option>Căn hộ 3 Phòng Ngủ (102 - 103m²)</option>
                        <option>Shophouse & Căn hộ Sân vườn</option>
                      </select>
                    </div>

                    <textarea
                      rows={2}
                      placeholder="Ghi chú nhu cầu (Tầng cao, hướng ban công, vay ngân hàng...)"
                      value={leadForm.message}
                      onChange={(e) =>
                        setLeadForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg border border-slate-600 bg-[#2b3a42] px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:border-[#e2b857] focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#135d66] py-3 text-xs font-bold uppercase tracking-widest text-[#e2b857] shadow-lg ring-1 ring-[#e2b857]/50 transition hover:bg-[#197480]"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>ĐĂNG KÝ NHẬN BẢNG GIÁ & THAM QUAN NHÀ MẪU</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: "LIÊN KẾT VỚI CHÚNG TÔI" & Quick Links */}
            <div className="space-y-4 lg:col-span-3">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#e2b857]">
                LIÊN KẾT VỚI CHÚNG TÔI
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Đặt lịch tham quan sa bàn và căn hộ thực tế tại dự án Kingdom
                101 tất cả các ngày trong tuần (08:00 – 20:00).
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                {['Facebook', 'Youtube', 'Zalo Official'].map((social) => (
                  <a
                    key={social}
                    href="#lien-he"
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-teal-100 transition hover:border-[#e2b857] hover:text-[#e2b857]"
                  >
                    {social}
                  </a>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                <p className="font-bold text-white">Giờ mở cửa Nhà mẫu:</p>
                <p className="mt-1">Thứ 2 – Chủ Nhật: 08h00 – 20h30</p>
                <p className="mt-1 text-emerald-300">
                  • Có khu vực đỗ xe ô tô miễn phí tại cổng 334 Tô Hiến Thành
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#202c33] py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {BRAND_INFO.brandName} –{' '}
          {BRAND_INFO.developer}. Bảo lưu mọi quyền.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
