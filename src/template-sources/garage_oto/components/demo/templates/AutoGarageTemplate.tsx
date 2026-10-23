'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Car,
  Bike,
  SlidersHorizontal,
  X,
  Plus,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { DemoPageData, GalleryItem } from '../../../types/demo';

interface AutoGarageTemplateProps {
  data: DemoPageData;
}

const MODES = {
  car: {
    id: 'car' as const,
    code: '01 // AUTOMOTIVE DIVISION',
    shortLabel: 'Ô TÔ / SUPERCAR',
    headlineTop: 'CARBON.',
    headlineMid: 'PRECISION.',
    headlineBot: 'VELOCITY.',
    tagline: 'Detailing · PPF TPU 8.5Mil · Ceramic 10H · Performance Tuning',
    heroImage:
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=2000&auto=format&fit=crop',
    machine: 'PORSCHE 911 GT3 RS (992)',
    specs: [
      { label: 'FINISH', val: '99.6 GU' },
      { label: 'ARMOR', val: '8.5 MIL PPF' },
      { label: 'COATING', val: '10H GRAPHENE' },
    ],
    placeholderModel: 'Porsche 911 / BMW M4 / Mercedes G63 / Mazda CX-5...',
  },
  moto: {
    id: 'moto' as const,
    code: '02 // MOTORRAD ATELIER',
    shortLabel: 'MÔ TÔ PKL / XE MÁY',
    headlineTop: 'TORQUE.',
    headlineMid: 'TITANIUM.',
    headlineBot: 'ASPHALT.',
    tagline: '18-Step Strip Detailing · Ohlins Setup · Brembo Lab · Matte PPF',
    heroImage:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=85&w=2000&auto=format&fit=crop',
    machine: 'DUCATI PANIGALE V4S CORSE',
    specs: [
      { label: 'STRIP DETAIL', val: '18 STEPS' },
      { label: 'SUSPENSION', val: 'OHLINS LAB' },
      { label: 'EXHAUST', val: 'FULL TITAN' },
    ],
    placeholderModel: 'Ducati Panigale V4 / BMW S1000RR / Vespa 946 / SH350i...',
  },
};

export default function AutoGarageTemplate({ data }: AutoGarageTemplateProps) {
  const [vehicleMode, setVehicleMode] = useState<'car' | 'moto'>('car');
  const [bladeKey, setBladeKey] = useState(0);

  // Interactive Before/After Laser Slider
  const [sliderPos, setSliderPos] = useState(52);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Gallery Filter & Lightbox
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'car' | 'moto'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  // Hover state for minimalist service rows
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState<number>(0);

  // Minimalist CRM Vehicle Intake
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    vehicleType: 'Ô tô',
    vehicleModel: '',
    service: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeMode = MODES[vehicleMode];
  const bookingBaseUrl = data.bookingUrl || '/apex-garage/booking';
  const blogBaseUrl = data.blogUrl || '/apex-garage/blog';
  const liveServices = data.ecosystemProps?.services || [];
  const liveResources = data.ecosystemProps?.resources || [];
  const livePosts = data.ecosystemProps?.posts || [];

  const switchMode = (mode: 'car' | 'moto') => {
    if (mode === vehicleMode) return;
    setBladeKey(k => k + 1);
    setVehicleMode(mode);
    setLeadForm(prev => ({
      ...prev,
      vehicleType: mode === 'car' ? 'Ô tô' : 'Xe máy / Mô tô PKL',
    }));
  };

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(4, Math.min(rect.width - 4, clientX - rect.left));
    setSliderPos(Math.round((x / rect.width) * 100));
  };

  const buildBookingHref = (extra?: {
    serviceId?: string;
    serviceName?: string;
    resourceId?: string;
  }) => {
    const params = new URLSearchParams();
    params.set('vehicleType', vehicleMode === 'car' ? 'Ô tô' : 'Xe máy - PKL');
    if (leadForm.vehicleModel.trim()) params.set('vehicleModel', leadForm.vehicleModel.trim());
    if (extra?.serviceId) params.set('serviceId', extra.serviceId);
    if (extra?.serviceName) params.set('service', extra.serviceName);
    if (extra?.resourceId) params.set('resourceId', extra.resourceId);
    const qs = params.toString();
    return qs ? `${bookingBaseUrl}?${qs}` : bookingBaseUrl;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name.trim() || !leadForm.phone.trim()) return;
    setSubmitting(true);
    try {
      const matchedSvc = liveServices.find(s => s.name === leadForm.service);
      await fetch('/api/public/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId: data.ecosystemProps?.tenantId || data.business.id,
          tenantSlug: data.ecosystemProps?.tenantSlug,
          name: leadForm.name.trim(),
          phone: leadForm.phone.trim(),
          service:
            leadForm.service ||
            (vehicleMode === 'car' ? 'Chăm sóc & Nâng cấp Ô tô' : 'Chăm sóc & Độ Mô tô PKL'),
          servicePrice: matchedSvc?.price || 0,
          vehicleType: leadForm.vehicleType,
          vehicleModel: leadForm.vehicleModel.trim() || 'Chưa nhập dòng xe',
          source: 'Web Garage',
        }),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const galleryList = (data.gallery || []).filter(item => {
    if (galleryFilter === 'all') return true;
    if (galleryFilter === 'moto') return item.category === 'moto';
    return item.category !== 'moto';
  });

  const displayServices =
    liveServices.length > 0
      ? liveServices.map((s, idx) => ({
          id: s.id,
          index: `0${idx + 1}`,
          title: s.name,
          duration: `${s.duration_minutes} MIN`,
          price: new Intl.NumberFormat('vi-VN').format(s.price) + ' ₫',
          isMoto:
            s.name.toLowerCase().includes('mô tô') ||
            s.name.toLowerCase().includes('pkl') ||
            s.name.toLowerCase().includes('sh350'),
        }))
      : data.services.map((s, idx) => ({
          id: s.id,
          index: `0${idx + 1}`,
          title: s.title,
          duration: s.durationLabel || '120 MIN',
          price: s.priceLabel || 'LIÊN HỆ',
          isMoto: s.vehicleType === 'moto',
        }));

  return (
    <div className="min-h-dvh bg-[#050507] text-white font-sans antialiased selection:bg-[#FF3B1F] selection:text-white overflow-x-hidden">
      {/* FULL-SCREEN DIAGONAL BLADE TRANSITION OVERLAY */}
      <AnimatePresence mode="wait">
        {bladeKey > 0 && (
          <motion.div
            key={`blade-${bladeKey}`}
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{
              clipPath: [
                'polygon(0 0, 0 0, 0 100%, 0% 100%)',
                'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
              ],
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 pointer-events-none bg-[#FF3B1F] flex items-center justify-center"
          >
            <span className="font-mono text-2xl sm:text-5xl font-black tracking-[-0.04em] text-black uppercase">
              {vehicleMode === 'car' ? '// 01 SUPERCAR LAB' : '// 02 MOTORRAD LAB'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. MINIMALIST FLOATING RAZOR NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-5 pointer-events-none">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/10"
          >
            <span className="w-2.5 h-2.5 bg-[#FF3B1F] rotate-45" />
            <span className="font-mono text-xs font-bold tracking-[0.22em] uppercase text-white">
              {data.business.name}
            </span>
          </a>

          {/* Center Mode Switcher (Ô tô <-> Mô tô PKL) */}
          <div className="pointer-events-auto flex items-center p-1 rounded-full bg-black/75 backdrop-blur-xl border border-white/12">
            <button
              type="button"
              onClick={() => switchMode('car')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${
                vehicleMode === 'car'
                  ? 'bg-[#FF3B1F] text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>01 // AUTO</span>
            </button>
            <button
              type="button"
              onClick={() => switchMode('moto')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${
                vehicleMode === 'moto'
                  ? 'bg-[#FF3B1F] text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>02 // MOTO</span>
            </button>
          </div>

          {/* Right Quick Links & Book CTA */}
          <div className="pointer-events-auto flex items-center gap-3">
            <nav className="hidden lg:flex items-center gap-6 px-5 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 font-mono text-[11px] uppercase tracking-widest text-white/70">
              <a href="#work" className="hover:text-white transition-colors">
                Showroom
              </a>
              <a href="#shield" className="hover:text-white transition-colors">
                Before/After
              </a>
              <a href="#specs" className="hover:text-white transition-colors">
                Bảng giá
              </a>
              <a href="#intake" className="hover:text-white transition-colors">
                Hồ sơ Xe
              </a>
            </nav>

            <a
              href={buildBookingHref()}
              className="group inline-flex items-center gap-2.5 bg-[#FF3B1F] hover:bg-white text-white hover:text-black font-mono text-[11px] font-bold uppercase tracking-widest pl-5 pr-2 py-2 rounded-full transition-all duration-300"
            >
              <span>Đặt Lịch</span>
              <span className="w-7 h-7 rounded-full bg-black/25 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. FULL-BLEED ARCHITECTURAL STAGE HERO (BRABUS / MANSORY STYLE) */}
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden border-b border-white/10">
        {/* Full-screen Background Machine with Smooth Scale & Clip-Path Reveal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={vehicleMode}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={activeMode.heroImage}
              alt={activeMode.machine}
              className="w-full h-full object-cover object-center"
            />
            {/* Moody Showroom Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/45 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 pb-12 sm:pb-16 pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={vehicleMode}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow Telemetry Code */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="font-mono text-xs font-bold tracking-[0.28em] text-[#FF3B1F] uppercase">
                  {activeMode.code}
                </span>
                <span className="w-12 h-px bg-white/25" />
                <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
                  {activeMode.machine}
                </span>
              </div>

              {/* Massive Stacked Display Typography */}
              <h1 className="font-black uppercase tracking-[-0.05em] leading-[0.86] text-[54px] sm:text-[88px] lg:text-[124px] text-white select-none">
                <span className="block">{activeMode.headlineTop}</span>
                <span
                  className="block text-transparent"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255,255,255,0.85)',
                  }}
                >
                  {activeMode.headlineMid}
                </span>
                <span className="block text-[#FF3B1F]">{activeMode.headlineBot}</span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Bottom HUD Bar: Minimal Tagline + 3 Telemetry Specs + Direct Actions */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.15em] text-white/75">
                {activeMode.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-3 gap-4 border-l border-white/15 pl-6">
              {activeMode.specs.map(s => (
                <div key={s.label}>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    {s.label}
                  </div>
                  <div className="font-mono text-base sm:text-xl font-bold text-white mt-0.5 tabular-nums">
                    {s.val}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <a
                href={buildBookingHref()}
                className="px-7 py-4 bg-[#FF3B1F] hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%)',
                }}
              >
                <span>Đặt Khoang Dịch Vụ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#intake"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all"
              >
                Nhận Báo Giá CRM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL LOOKBOOK GALLERY (BỐ CỤC TỐI GIẢN, ẢNH LỚN, KHÔNG RƯỜM RÀ) */}
      <section id="work" className="py-28 sm:py-36 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          {/* Minimalist Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="font-mono text-xs text-[#FF3B1F] tracking-[0.28em] uppercase mb-3">
                // 01 ARCHIVE
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.04em] leading-none">
                SELECTED BUILDS.
              </h2>
            </div>

            {/* Minimalist Filter Tabs */}
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
              {[
                { id: 'all', label: 'ALL (06)' },
                { id: 'car', label: 'SUPERCAR / AUTO' },
                { id: 'moto', label: 'HYPERBIKE / MOTO' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setGalleryFilter(tab.id as any)}
                  className={`px-4 py-2 border transition-all ${
                    galleryFilter === tab.id
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* High-Impact Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {galleryList.map((item, idx) => {
              const spanClass =
                idx % 3 === 0
                  ? 'md:col-span-8 h-[420px] sm:h-[540px]'
                  : 'md:col-span-4 h-[420px] sm:h-[540px]';
              return (
                <motion.div
                  key={`${item.caption}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveLightbox(item)}
                  className={`${spanClass} group relative overflow-hidden bg-[#0C0E14] border border-white/10 cursor-pointer`}
                >
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Index & Category */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between font-mono text-xs">
                    <span className="text-white/60">0{idx + 1}</span>
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/15 uppercase tracking-widest text-[10px] text-[#FF3B1F]">
                      {item.category === 'moto' ? 'MOTO ATELIER' : 'AUTO DIVISION'}
                    </span>
                  </div>

                  {/* Bottom Minimalist Machine Title */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-1">
                        {item.completionTime || '48H BUILD'} · {item.packagePrice || 'BESPOKE'}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-[-0.03em] text-white">
                        {item.vehicleModel || item.caption}
                      </h3>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-[#FF3B1F] border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. RAW VS PERFECTED — LASER SURFACE SLIDER (BEFORE / AFTER) */}
      <section id="shield" className="py-28 sm:py-36 px-4 sm:px-8 border-b border-white/10 bg-[#07080C]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs text-[#FF3B1F] tracking-[0.28em] uppercase mb-3">
                // 02 SURFACEOPTICS
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.04em] leading-none">
                RAW VS. 10H SHIELD.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              DRAG LASER LINE TO INSPECT CLEARCOAT CORRECTION
            </div>
          </div>

          <div
            ref={sliderRef}
            onPointerMove={e => {
              if (e.buttons === 1 || e.pointerType !== 'mouse') {
                handleSliderMove(e.clientX);
              }
            }}
            onClick={e => handleSliderMove(e.clientX)}
            className="relative h-[380px] sm:h-[580px] w-full overflow-hidden border border-white/15 cursor-ew-resize select-none"
          >
            {/* AFTER: Mirror Finish */}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2000&auto=format&fit=crop"
              alt="After 10H Ceramic"
              className="w-full h-full object-cover object-center pointer-events-none brightness-110 contrast-115 saturate-125"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/15 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              AFTER // 99.6 GU MIRROR GLOSS
            </div>

            {/* BEFORE: Oxidized & Swirl Marks */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2000&auto=format&fit=crop"
                alt="Before correction"
                className="w-full h-full object-cover object-center pointer-events-none brightness-70 contrast-75 saturate-50 blur-[0.8px]"
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/15 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                BEFORE // 42.0 GU SWIRL & OXIDATION
              </div>
            </div>

            {/* Laser Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#FF3B1F] shadow-[0_0_24px_#FF3B1F]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF3B1F] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,59,31,0.9)]">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MINIMALIST SPEC-SHEET SERVICE MENU (CONNECTED TO BOOKING_SERVICES) */}
      <section id="specs" className="py-28 sm:py-36 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="font-mono text-xs text-[#FF3B1F] tracking-[0.28em] uppercase mb-3">
                // 03 TELEMETRY PACKAGES
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.04em] leading-none">
                SERVICE INDEX.
              </h2>
            </div>
            <a
              href={buildBookingHref()}
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF3B1F] hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>OPEN FULL BOOKING CALENDAR</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Architectural Row Table */}
          <div className="border-t border-white/15">
            {displayServices.map((svc, idx) => {
              const isActive = hoveredServiceIdx === idx;
              return (
                <div
                  key={svc.id}
                  onMouseEnter={() => setHoveredServiceIdx(idx)}
                  className={`group border-b border-white/15 py-6 sm:py-8 px-4 sm:px-6 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                    isActive ? 'bg-white/[0.04]' : 'bg-transparent'
                  }`}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#FF3B1F]">
                      {svc.index}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 border border-white/15 text-white/60">
                          {svc.isMoto ? 'MOTO / PKL' : 'AUTO / SUPERCAR'}
                        </span>
                        <span className="font-mono text-xs text-white/40 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {svc.duration}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-bold tracking-[-0.02em] text-white group-hover:translate-x-2 transition-transform duration-300">
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10 pl-12 lg:pl-0">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                      {svc.price}
                    </div>

                    <a
                      href={buildBookingHref({
                        serviceId: svc.id,
                        serviceName: svc.title,
                      })}
                      className="px-5 py-3 bg-white group-hover:bg-[#FF3B1F] text-black group-hover:text-white font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all flex items-center gap-2 shrink-0"
                    >
                      <span>Đặt Khoang</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LIVE PIT-LANE BAYS + MINIMALIST VEHICLE CRM INTAKE */}
      <section id="intake" className="py-28 sm:py-36 px-4 sm:px-8 border-b border-white/10 bg-[#07080C]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 6 Cols: Live Pit-Lane Bays (from booking_resources) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="font-mono text-xs text-[#FF3B1F] tracking-[0.28em] uppercase mb-3">
                // 04 PIT-LANE TELEMETRY
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-[-0.04em] leading-none">
                ACTIVE BAYS.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(liveResources.length > 0
                ? liveResources
                : [
                    {
                      id: 'b1',
                      name: 'Khoang 01: Phòng Sạch PPF & Ceramic',
                      role_or_capacity: 'ISO Cleanroom · 2 Cars',
                    },
                    {
                      id: 'b2',
                      name: 'Khoang 02: Cầu Nâng Bảo Dưỡng Gầm Máy',
                      role_or_capacity: '4-Ton Lift · ECU Diagnostics',
                    },
                    {
                      id: 'b3',
                      name: 'Khoang 03: Bàn Nâng Thủy Lực Mô Tô PKL',
                      role_or_capacity: 'Hyperbike & Scooter Lab',
                    },
                    {
                      id: 'b4',
                      name: 'KTV Trưởng: Master Hoàng Nam',
                      role_or_capacity: '12 Years Supercar & PKL',
                    },
                  ]
              ).map((bay, idx) => (
                <a
                  key={bay.id}
                  href={buildBookingHref({ resourceId: bay.id })}
                  className="group p-6 bg-[#0C0E14] border border-white/10 hover:border-[#FF3B1F] transition-all flex flex-col justify-between min-h-[170px]"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-white/40">BAY // 0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      READY
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B1F] transition-colors">
                      {bay.name}
                    </h3>
                    <div className="font-mono text-xs text-white/45 mt-1">
                      {bay.role_or_capacity}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Minimalist 4-Field CRM Vehicle Intake */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-[#0C0E14] border border-white/15">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div>
                  <div className="font-mono text-xs text-[#FF3B1F] uppercase tracking-[0.22em]">
                    // DIRECT CRM SYNC
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-[-0.03em] text-white mt-1">
                    HỒ SƠ XE & BÁO GIÁ.
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-white/40 uppercase">
                  KHÁCH + DÒNG XE
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-14 h-14 bg-[#FF3B1F] text-white flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight">
                    ĐÃ ĐỒNG BỘ HỒ SƠ XE VÀO CRM
                  </h4>
                  <p className="text-sm text-white/60 max-w-md mx-auto">
                    Thông tin của <strong className="text-white">{leadForm.name}</strong> cùng mẫu xe{' '}
                    <strong className="text-white">{leadForm.vehicleModel}</strong> đã được chuyển thẳng vào bảng Kanban CRM của xưởng.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setLeadForm({
                        name: '',
                        phone: '',
                        vehicleType: 'Ô tô',
                        vehicleModel: '',
                        service: '',
                      });
                    }}
                    className="px-6 py-3 border border-white/20 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    Gửi thêm xe khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-5">
                  {/* Vehicle Category Toggle */}
                  <div className="grid grid-cols-2 gap-3">
                    {['Ô tô', 'Xe máy / Mô tô PKL'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setLeadForm({ ...leadForm, vehicleType: type })}
                        className={`py-3.5 font-mono text-xs font-bold uppercase tracking-widest border transition-all flex items-center justify-center gap-2 ${
                          leadForm.vehicleType === type
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-white/50 border-white/15 hover:text-white'
                        }`}
                      >
                        {type === 'Ô tô' ? (
                          <Car className="w-4 h-4" />
                        ) : (
                          <Bike className="w-4 h-4" />
                        )}
                        <span>{type}</span>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2">
                      01 // DÒNG XE CỦA BẠN *
                    </label>
                    <input
                      required
                      type="text"
                      value={leadForm.vehicleModel}
                      onChange={e => setLeadForm({ ...leadForm, vehicleModel: e.target.value })}
                      placeholder={activeMode.placeholderModel}
                      className="w-full px-4 py-3.5 bg-[#050507] border border-white/15 focus:border-[#FF3B1F] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2">
                        02 // HỌ VÀ TÊN CHỦ XE *
                      </label>
                      <input
                        required
                        type="text"
                        value={leadForm.name}
                        onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="Nguyễn Hoàng Minh"
                        className="w-full px-4 py-3.5 bg-[#050507] border border-white/15 focus:border-[#FF3B1F] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2">
                        03 // SỐ ĐIỆN THOẠI *
                      </label>
                      <input
                        required
                        type="tel"
                        value={leadForm.phone}
                        onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="0909 888 911"
                        className="w-full px-4 py-3.5 bg-[#050507] border border-white/15 focus:border-[#FF3B1F] text-white font-mono text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest text-white/50 mb-2">
                      04 // HẠNG MỤC QUAN TÂM
                    </label>
                    <select
                      value={leadForm.service}
                      onChange={e => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#050507] border border-white/15 focus:border-[#FF3B1F] text-white text-sm outline-none transition-colors"
                    >
                      <option value="">-- Chọn hạng mục dịch vụ --</option>
                      {displayServices.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#FF3B1F] hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    <span>
                      {submitting ? 'ĐANG ĐỒNG BỘ CRM...' : 'LƯU HỒ SƠ XE & NHẬN TƯ VẤN'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MINIMALIST VISUAL JOURNAL (AI CMS) */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs text-[#FF3B1F] tracking-[0.28em] uppercase mb-3">
                // 05 AI CMS JOURNAL
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.04em] leading-none">
                TECH NOTES.
              </h2>
            </div>
            <a
              href={blogBaseUrl}
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white flex items-center gap-2"
            >
              <span>ALL ARTICLES</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(livePosts.length > 0
              ? livePosts.slice(0, 3)
              : [
                  {
                    id: '1',
                    title: 'So Sánh Dán Phim PPF TPU 8.5Mil Và Phủ Ceramic Graphene 10H',
                    slug: 'so-sanh-dan-phim-ppf-tpu-va-phu-ceramic-graphene-10h',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
                  },
                  {
                    id: '2',
                    title: 'Các Mốc Bảo Dưỡng Mô Tô Phân Khối Lớn (PKL) Theo Số ODO',
                    slug: 'cac-moc-bao-duong-mo-to-phan-khoi-lon-pkl-theo-so-odo',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000&auto=format&fit=crop',
                  },
                  {
                    id: '3',
                    title: 'Quy Trình Detailing Khoang Máy Bằng Hơi Nước Nóng Chuẩn ECU',
                    slug: 'quy-trinh-detailing-khoang-may-o-to-bang-hoi-nuoc-nong',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop',
                  },
                ]
            ).map((post, idx) => (
              <a
                key={post.id}
                href={`${blogBaseUrl}/${post.slug}`}
                className="group block bg-[#0C0E14] border border-white/10 hover:border-[#FF3B1F] transition-all overflow-hidden"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={
                      post.thumbnail_url ||
                      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop'
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 font-mono text-[10px] uppercase tracking-widest text-[#FF3B1F]">
                    0{idx + 1} // TECH NOTE
                  </span>
                </div>
                <div className="p-6 flex items-end justify-between gap-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF3B1F] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#FF3B1F] shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MINIMALIST FOOTER */}
      <footer className="py-12 px-4 sm:px-8 bg-[#050507]">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-white font-bold tracking-[0.2em] uppercase">
              {data.business.name}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF3B1F]" />
              {data.business.address}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white">
              <Phone className="w-3.5 h-3.5 text-[#FF3B1F]" />
              {data.business.phone}
            </span>
          </div>
          <div>TAVIWEB MOTORSPORT SUITE · BOOKING + VEHICLE CRM + AI CMS</div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL FOR BUILD PHOTO & SPECS */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-5xl w-full bg-[#0C0E14] border border-white/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-8 h-[340px] sm:h-[480px] bg-black relative">
                <img
                  src={activeLightbox.image.src}
                  alt={activeLightbox.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-4 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#FF3B1F] uppercase tracking-widest">
                      // BUILD SPEC
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveLightbox(null)}
                      className="w-8 h-8 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                    {activeLightbox.vehicleModel || activeLightbox.caption}
                  </h3>
                  <div className="font-mono text-xs text-white/50 mb-6">
                    {activeLightbox.ownerName} · {activeLightbox.completionTime} ·{' '}
                    <span className="text-white">{activeLightbox.packagePrice}</span>
                  </div>

                  {activeLightbox.workSummary && (
                    <div className="space-y-2.5 border-t border-white/10 pt-5">
                      {activeLightbox.workSummary.map((s, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                          <span className="font-mono text-[#FF3B1F]">0{i + 1}</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href={buildBookingHref({
                    serviceName: activeLightbox.caption,
                  })}
                  className="mt-8 w-full py-4 bg-[#FF3B1F] hover:bg-white text-white hover:text-black font-mono text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all"
                >
                  <span>Đặt Lịch Làm Gói Này</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
