'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wrench,
  ShieldCheck,
  Gauge,
  Sparkles,
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  Car,
  Bike,
  SlidersHorizontal,
  Eye,
  X,
  FileText,
  Layers,
  Activity,
  ChevronRight,
  Menu,
  Star,
  Zap,
} from 'lucide-react';
import { DemoPageData, GalleryItem } from '../../../types/demo';

interface AutoGarageTemplateProps {
  data: DemoPageData;
}

const VEHICLE_MODES = {
  car: {
    id: 'car' as const,
    badge: 'SUPERCAR & LUXURY AUTOMOTIVE LAB',
    label: 'Ô Tô & Siêu Xe',
    heroTitle: 'Đánh Thức Bản Năng Cỗ Máy Của Bạn',
    heroHighlight: 'Chuẩn Motorsport.',
    heroSubtitle:
      'Tổ hợp Phòng sạch Dán PPF TPU, Hiệu chỉnh sơn phủ Ceramic Graphene 10H, Bảo dưỡng định kỳ chuẩn hãng và Nâng cấp hiệu suất dành riêng cho Ô tô & Siêu xe.',
    heroImage:
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=1800&auto=format&fit=crop',
    heroMachineName: 'PORSCHE 911 GT3 RS (992)',
    heroPlate: '51K-888.99',
    telemetry: [
      { code: 'GLOSS_INDEX', value: '99.6 GU', label: 'Độ bóng gương hiệu chỉnh 3 bước' },
      { code: 'PPF_SHIELD', value: '8.5 MIL', label: 'Màng TPU tự phục hồi vết xước 60°C' },
      { code: 'ECU_DIAG', value: '45 ĐIỂM', label: 'Chẩn đoán điện tử & gầm máy' },
      { code: 'WARRANTY', value: '10 NĂM', label: 'Bảo hành điện tử theo Biển số' },
    ],
    placeholderModel: 'VD: Porsche 911, Mercedes GLC300, Mazda CX-5...',
    placeholderPlate: 'VD: 51K-888.88',
  },
  moto: {
    id: 'moto' as const,
    badge: 'HYPERBIKE & BESPOKE MOTORCYCLE ATELIER',
    label: 'Mô Tô PKL & Xe Máy',
    heroTitle: 'Chế Tác & Chăm Sóc Chi Tiết Từng',
    heroHighlight: 'Chiến Mã Hai Bánh.',
    heroSubtitle:
      'Phòng Lab chuyên biệt với bàn nâng thủy lực dành cho Mô tô Phân khối lớn & Xe tay ga cao cấp: Rã dàn áo Detailing 18 bước, Dán PPF nhám/bóng, Độ pô Titanium, Cân chỉnh phuộc Ohlins & Heo Brembo.',
    heroImage:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=85&w=1800&auto=format&fit=crop',
    heroMachineName: 'DUCATI PANIGALE V4S CORSE',
    heroPlate: '59-A3 388.88',
    telemetry: [
      { code: 'DETAILING', value: '18 BƯỚC', label: 'Rã dàn áo vệ sinh lốc máy & ốc tán' },
      { code: 'SUSPENSION', value: 'OHLINS', label: 'Cân chỉnh tải trọng & Sag phuộc chuẩn' },
      { code: 'BRAKE_LAB', value: 'BREMBO', label: 'Bảo dưỡng heo dầu & dầu phanh DOT 5.1' },
      { code: 'CHAIN_ALIGN', value: 'LASER', label: 'Căn chỉnh nhông sên dĩa bằng tia Laser' },
    ],
    placeholderModel: 'VD: Ducati Panigale V4, BMW S1000RR, Honda SH350i, Vespa 946...',
    placeholderPlate: 'VD: 59-A3 388.88',
  },
};

export default function AutoGarageTemplate({ data }: AutoGarageTemplateProps) {
  const [vehicleMode, setVehicleMode] = useState<'car' | 'moto'>('car');
  const [shutterTrigger, setShutterTrigger] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick Hero Intake bar state
  const [quickModel, setQuickModel] = useState('');
  const [quickPlate, setQuickPlate] = useState('');

  // Before/After Slider state (0 to 100)
  const [sliderPos, setSliderPos] = useState(54);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Gallery Filter & Lightbox Modal state
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'car' | 'moto' | 'ppf' | 'tuning'>('all');
  const [selectedBuild, setSelectedBuild] = useState<GalleryItem | null>(null);

  // Inline CRM Lead & Vehicle Profile Form state
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    vehicleType: 'Ô tô',
    vehicleModel: '',
    licensePlate: '',
    odoKm: '',
    service: '',
    message: '',
  });
  const [submittingLead, setSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);

  const activeConfig = VEHICLE_MODES[vehicleMode];
  const bookingBaseUrl = data.bookingUrl || '/apex-garage/booking';
  const blogBaseUrl = data.blogUrl || '/apex-garage/blog';
  const liveServices = data.ecosystemProps?.services || [];
  const liveResources = data.ecosystemProps?.resources || [];
  const livePosts = data.ecosystemProps?.posts || [];

  const handleModeSwitch = (mode: 'car' | 'moto') => {
    if (mode === vehicleMode) return;
    setShutterTrigger(prev => prev + 1);
    setVehicleMode(mode);
    setLeadForm(prev => ({
      ...prev,
      vehicleType: mode === 'car' ? 'Ô tô' : 'Xe máy / Mô tô PKL',
    }));
  };

  const handlePointerMoveSlider = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!sliderContainerRef.current) return;
    if (e.buttons !== 1 && e.pointerType === 'mouse') return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(4, Math.min(rect.width - 4, e.clientX - rect.left));
    setSliderPos(Math.round((x / rect.width) * 100));
  };

  const handleClickSlider = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = Math.max(4, Math.min(rect.width - 4, e.clientX - rect.left));
    setSliderPos(Math.round((x / rect.width) * 100));
  };

  const scrollToIntakeWithPreset = (preset: {
    serviceName?: string;
    vehicleType?: string;
    vehicleModel?: string;
    licensePlate?: string;
  }) => {
    setLeadForm(prev => ({
      ...prev,
      service: preset.serviceName || prev.service,
      vehicleType: preset.vehicleType || prev.vehicleType,
      vehicleModel: preset.vehicleModel || quickModel || prev.vehicleModel,
      licensePlate: preset.licensePlate || quickPlate || prev.licensePlate,
    }));
    const el = document.getElementById('crm-lead-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buildBookingLink = (extra?: {
    serviceId?: string;
    serviceName?: string;
    resourceId?: string;
  }) => {
    const params = new URLSearchParams();
    params.set('vehicleType', vehicleMode === 'car' ? 'Ô tô' : 'Xe máy - PKL');
    if (quickModel.trim()) params.set('vehicleModel', quickModel.trim());
    if (quickPlate.trim()) params.set('licensePlate', quickPlate.trim());
    if (extra?.serviceId) params.set('serviceId', extra.serviceId);
    if (extra?.serviceName) params.set('service', extra.serviceName);
    if (extra?.resourceId) params.set('resourceId', extra.resourceId);
    const qs = params.toString();
    return qs ? `${bookingBaseUrl}?${qs}` : bookingBaseUrl;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name.trim() || !leadForm.phone.trim()) return;
    setSubmittingLead(true);
    setLeadError(null);

    try {
      const matchedSvc = liveServices.find(s => s.name === leadForm.service);
      const res = await fetch('/api/public/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId: data.ecosystemProps?.tenantId || data.business.id,
          tenantSlug: data.ecosystemProps?.tenantSlug,
          name: leadForm.name.trim(),
          phone: leadForm.phone.trim(),
          service:
            leadForm.service ||
            (vehicleMode === 'car'
              ? 'Chăm sóc & Bảo dưỡng Ô tô'
              : 'Chăm sóc & Độ Mô tô PKL / Xe máy'),
          servicePrice: matchedSvc?.price || 0,
          vehicleType: leadForm.vehicleType,
          vehicleModel: leadForm.vehicleModel.trim() || 'Chưa rõ dòng xe',
          licensePlate: leadForm.licensePlate.trim().toUpperCase() || 'Chưa cập nhật',
          odoKm: leadForm.odoKm.trim() || '',
          source: 'Web Garage Telemetry',
          message: leadForm.message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error('Không thể gửi thông tin lúc này');
      }

      setLeadSuccess(true);
    } catch (err: any) {
      setLeadError(err.message || 'Có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setSubmittingLead(false);
    }
  };

  const filteredGallery = (data.gallery || []).filter(item => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <div className="min-h-dvh bg-[#06070A] text-[#F1F5F9] font-sans antialiased selection:bg-[#FF4D1C] selection:text-white overflow-x-hidden relative">
      {/* Subtle Fixed Carbon Telemetry Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Diagonal Shutter Transition Overlay when switching Car <-> Moto Mode */}
      <AnimatePresence mode="wait">
        {shutterTrigger > 0 && (
          <motion.div
            key={`shutter-${shutterTrigger}`}
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{
              clipPath: [
                'polygon(0 0, 0 0, 0 100%, 0% 100%)',
                'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
              ],
            }}
            transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-r from-[#FF4D1C]/90 via-[#0B0D13] to-[#06070A] flex items-center justify-center"
          >
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-white/90 px-6 py-3 rounded-full border border-white/20 bg-black/60">
              CHUYỂN CHẾ ĐỘ KHOANG DỊCH VỤ: {vehicleMode === 'car' ? 'SUPERCAR & Ô TÔ' : 'MÔ TÔ PKL & XE MÁY'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. FLOATING FLUID ISLAND HUD NAVBAR */}
      <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
            <div className="px-4 sm:px-6 py-2.5 rounded-full bg-[#0B0D13]/90 flex items-center justify-between gap-3">
              {/* Brand & Live Telemetry Status */}
              <a href="#" className="flex items-center gap-3 group shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#FF4D1C] text-white flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-[0_0_20px_rgba(255,77,28,0.45)]">
                  APX
                </div>
                <div>
                  <div className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                    <span>{data.business.name}</span>
                    <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {liveResources.length || 4} BAYS ONLINE
                    </span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                    AUTO & MOTO DETAILING LAB
                  </div>
                </div>
              </a>

              {/* Vehicle Mode Toggle Pill (Ô tô <-> Xe máy PKL) */}
              <div className="hidden md:flex items-center p-1 rounded-full bg-[#131722] border border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => handleModeSwitch('car')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    vehicleMode === 'car'
                      ? 'bg-[#FF4D1C] text-white shadow-[0_4px_16px_rgba(255,77,28,0.35)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Ô Tô / Supercar</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleModeSwitch('moto')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    vehicleMode === 'moto'
                      ? 'bg-[#FF4D1C] text-white shadow-[0_4px_16px_rgba(255,77,28,0.35)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Mô Tô PKL & Xe Máy</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
                <a href="#before-after" className="hover:text-[#FF4D1C] transition-colors">
                  So Sánh Sơn & PPF
                </a>
                <a href="#gallery" className="hover:text-[#FF4D1C] transition-colors">
                  Bản Độ Thực Tế
                </a>
                <a href="#services" className="hover:text-[#FF4D1C] transition-colors">
                  Bảng Giá Dịch Vụ
                </a>
                <a href="#bays" className="hover:text-[#FF4D1C] transition-colors">
                  Sơ Đồ Khoang
                </a>
                <a href="#journal" className="hover:text-[#FF4D1C] transition-colors">
                  Cẩm Nang Kỹ Thuật
                </a>
              </nav>

              {/* Island Button CTA */}
              <div className="flex items-center gap-2">
                <a
                  href={buildBookingLink()}
                  className="group inline-flex items-center gap-3 bg-white hover:bg-[#FF4D1C] text-[#06070A] hover:text-white font-semibold text-xs pl-4 pr-1.5 py-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  <span>Đặt Lịch Khoang</span>
                  <span className="w-7 h-7 rounded-full bg-[#06070A] text-white flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mt-2 p-5 rounded-3xl bg-[#0D1017]/95 backdrop-blur-2xl border border-white/10 lg:hidden space-y-4"
              >
                <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#131722] border border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      handleModeSwitch('car');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold ${
                      vehicleMode === 'car' ? 'bg-[#FF4D1C] text-white' : 'text-slate-400'
                    }`}
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Ô Tô / Supercar</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleModeSwitch('moto');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold ${
                      vehicleMode === 'moto' ? 'bg-[#FF4D1C] text-white' : 'text-slate-400'
                    }`}
                  >
                    <Bike className="w-3.5 h-3.5" />
                    <span>Mô Tô PKL & Xe Máy</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2.5 text-sm font-medium text-slate-200">
                  <a href="#before-after" onClick={() => setMobileMenuOpen(false)} className="py-1.5">
                    01. So Sánh Hiệu Chỉnh Sơn & PPF
                  </a>
                  <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-1.5">
                    02. Hình Ảnh Thực Tế Các Bản Độ
                  </a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1.5">
                    03. Bảng Giá Dịch Vụ & Bảo Dưỡng
                  </a>
                  <a href="#bays" onClick={() => setMobileMenuOpen(false)} className="py-1.5">
                    04. Sơ Đồ Khoang & Kỹ Thuật Viên
                  </a>
                  <a href="#crm-lead-section" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-[#FF4D1C]">
                    05. Lập Hồ Sơ Xe & Nhận Báo Giá CRM
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* 2. HERO SECTION WITH TELEMETRY STAGE & QUICK VEHICLE INTAKE */}
      <section className="relative min-h-[100dvh] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 flex flex-col justify-between overflow-hidden">
        {/* Overhead Studio Softbox Lighting Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[920px] h-[420px] rounded-full bg-[#FF4D1C]/12 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Top Mode Eyebrow & Telemetry Coordinates */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF4D1C]" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-slate-300">
                {activeConfig.badge}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-slate-400">
              <span>LAT 10.7769° N · LON 106.7219° E</span>
              <span className="text-white/20">|</span>
              <span className="text-[#FF4D1C]">CRM VEHICLE TRACKING: ACTIVE</span>
            </div>
          </div>

          {/* Asymmetric Split Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 7 Columns: Kinetic Typography & Quick Vehicle Intake Console */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={vehicleMode}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  className="space-y-5"
                >
                  <h1 className="text-4xl sm:text-6xl xl:text-[68px] font-bold tracking-[-0.03em] leading-[1.03] text-white">
                    {activeConfig.heroTitle}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D1C] via-orange-400 to-amber-200 italic pr-2">
                      {activeConfig.heroHighlight}
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-[60ch]">
                    {activeConfig.heroSubtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Double-Bezel Quick Vehicle Intake Bar (Links directly to Booking & CRM) */}
              <div className="p-1.5 rounded-[1.75rem] bg-white/[0.04] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                <div className="p-4 sm:p-5 rounded-[calc(1.75rem-0.375rem)] bg-[#0E1118] border border-white/[0.06]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#FF4D1C]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300 font-semibold">
                        NHẬP THÔNG TIN XE ĐỂ ĐẶT KHOANG DỊCH VỤ & ĐỒNG BỘ HỒ SƠ CRM
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleModeSwitch('car')}
                        className={`px-2.5 py-1 rounded-lg font-mono text-[10px] uppercase transition-all ${
                          vehicleMode === 'car'
                            ? 'bg-[#FF4D1C] text-white font-semibold'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        Ô Tô
                      </button>
                      <button
                        type="button"
                        onClick={() => handleModeSwitch('moto')}
                        className={`px-2.5 py-1 rounded-lg font-mono text-[10px] uppercase transition-all ${
                          vehicleMode === 'moto'
                            ? 'bg-[#FF4D1C] text-white font-semibold'
                            : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        Xe Máy / PKL
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-5">
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                        Hãng & Dòng xe của bạn
                      </label>
                      <input
                        type="text"
                        value={quickModel}
                        onChange={e => setQuickModel(e.target.value)}
                        placeholder={activeConfig.placeholderModel}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                        Biển số xe
                      </label>
                      <input
                        type="text"
                        value={quickPlate}
                        onChange={e => setQuickPlate(e.target.value.toUpperCase())}
                        placeholder={activeConfig.placeholderPlate}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-amber-300 font-mono font-semibold text-xs sm:text-sm uppercase outline-none transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-4 flex flex-col justify-end">
                      <a
                        href={buildBookingLink()}
                        className="w-full h-[42px] bg-[#FF4D1C] hover:bg-[#ff5f33] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(255,77,28,0.35)] transition-all active:scale-[0.98]"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Đặt Lịch Khoang Ngay</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <span>
                      Hoặc gửi thông tin xe để cố vấn kỹ thuật lên phác đồ & báo giá chi tiết:
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        scrollToIntakeWithPreset({
                          vehicleType: vehicleMode === 'car' ? 'Ô tô' : 'Xe máy / Mô tô PKL',
                          vehicleModel: quickModel,
                          licensePlate: quickPlate,
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#FF4D1C] hover:text-orange-300 font-semibold transition-colors"
                    >
                      <span>Lập hồ sơ xe vào CRM</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Telemetry Readout Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeConfig.telemetry.map(item => (
                  <div
                    key={item.code}
                    className="p-3.5 rounded-2xl bg-[#0C0F16] border border-white/[0.07] hover:border-[#FF4D1C]/40 transition-colors"
                  >
                    <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                      {item.code}
                    </div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
                      {item.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Double-Bezel Showroom Visual Card with Clip-Path Reveal */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={vehicleMode}
                  initial={{
                    opacity: 0,
                    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
                    scale: 0.97,
                  }}
                  transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
                  className="p-2 rounded-[2rem] bg-white/[0.04] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
                >
                  <div className="relative h-[420px] sm:h-[500px] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-[#0B0D13]">
                    <img
                      src={activeConfig.heroImage}
                      alt={activeConfig.heroMachineName}
                      className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-[#06070A]/25 to-transparent" />

                    {/* Top Telemetry Badge on Image */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[10px] uppercase tracking-widest text-white">
                        IN BAY #01 · {activeConfig.heroMachineName}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-400 text-[#06070A] font-mono font-bold text-xs tracking-wider shadow-md">
                        {activeConfig.heroPlate}
                      </span>
                    </div>

                    {/* Bottom Telemetry Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0B0D13]/90 backdrop-blur-md border border-white/10">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4D1C]">
                            HỒ SƠ PHƯƠNG TIỆN TRONG CRM
                          </div>
                          <div className="text-sm font-bold text-white mt-0.5">
                            {activeConfig.heroMachineName}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            Đang thi công: Hiệu chỉnh sơn + Full PPF TPU 8.5Mil
                          </div>
                        </div>
                        <a
                          href="#gallery"
                          className="shrink-0 w-10 h-10 rounded-full bg-[#FF4D1C] text-white flex items-center justify-center hover:scale-105 transition-transform"
                          title="Xem bộ sưu tập bản độ"
                        >
                          <Eye className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BEFORE / AFTER PAINT CORRECTION & PPF COMPARISON SLIDER */}
      <section id="before-after" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D1C]/10 border border-[#FF4D1C]/30 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D1C] mb-3">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>INTERACTIVE SURFACE TELEMETRY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-white">
                Kéo Thanh Trượt Để Xem Sự Khác Biệt
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-400 max-w-md">
              So sánh trực quan bề mặt sơn xe bị xước xoáy, ố mờ trước khi xử lý và độ bóng sâu như gương sau khi Hiệu chỉnh sơn 3 bước & Phủ Ceramic Graphene 10H / Dán PPF.
            </p>
          </div>

          {/* Double-Bezel Interactive Comparison Container */}
          <div className="p-2 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
            <div
              ref={sliderContainerRef}
              onPointerMove={handlePointerMoveSlider}
              onClick={handleClickSlider}
              className="relative h-[340px] sm:h-[480px] rounded-[calc(2rem-0.5rem)] overflow-hidden cursor-ew-resize select-none bg-[#0B0D13]"
            >
              {/* AFTER LAYER (Full width underneath: Glossy Mirror Finish) */}
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=1800&auto=format&fit=crop"
                alt="Sau khi hiệu chỉnh sơn và phủ Ceramic 10H"
                className="w-full h-full object-cover object-center pointer-events-none brightness-110 contrast-110 saturate-125"
              />
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-emerald-500/90 text-[#06070A] font-mono font-bold text-xs tracking-wider shadow-lg">
                AFTER · SAU KHI PHỦ CERAMIC 10H & PPF (ĐỘ BÓNG 99.6 GU)
              </div>

              {/* BEFORE LAYER (Clipped by sliderPos: Dull, Oxidized, Swirl Marks) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=1800&auto=format&fit=crop"
                  alt="Trước khi hiệu chỉnh sơn"
                  className="w-full h-full object-cover object-center pointer-events-none brightness-75 contrast-75 saturate-50 blur-[0.6px]"
                />
                {/* Simulated Swirl Marks / Oxidation Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-45"
                  style={{
                    backgroundImage:
                      'repeating-radial-gradient(circle at 35% 50%, rgba(255,255,255,0.14) 0px, transparent 2px, transparent 9px)',
                  }}
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 text-amber-300 font-mono font-bold text-xs tracking-wider">
                  BEFORE · SƠN XƯỚC XOÁY & OXI HÓA (ĐỘ BÓNG 42.0 GU)
                </div>
              </div>

              {/* Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-[#FF4D1C] shadow-[0_0_20px_#FF4D1C]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FF4D1C] text-white border-2 border-white flex items-center justify-center shadow-[0_0_30px_rgba(255,77,28,0.8)]">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Range Input for Mobile/Keyboard Accessibility */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 sm:w-96 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/15 flex items-center gap-3">
                <span className="font-mono text-[10px] text-amber-300 uppercase">TRƯỚC</span>
                <input
                  type="range"
                  min={5}
                  max={95}
                  value={sliderPos}
                  onChange={e => setSliderPos(Number(e.target.value))}
                  className="w-full accent-[#FF4D1C] cursor-pointer"
                />
                <span className="font-mono text-[10px] text-emerald-400 uppercase">SAU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOWROOM GALLERY & REAL VEHICLE BUILDS (WITH TELEMETRY LIGHTBOX) */}
      <section id="gallery" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D1C] mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>SHOWROOM PORTFOLIO & VEHICLE LOGS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-white">
                Hình Ảnh Thực Tế Các Xe Đã Thi Công
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Bấm vào bất kỳ chiếc Ô tô hoặc Mô tô PKL nào bên dưới để xem chi tiết hồ sơ kỹ thuật, biển số và các hạng mục đã hoàn thiện.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'Tất cả xe (06)' },
                { key: 'car', label: 'Ô tô / Supercar' },
                { key: 'moto', label: 'Mô tô PKL & Xe máy' },
                { key: 'ppf', label: 'Dán PPF & Ceramic' },
                { key: 'tuning', label: 'Độ Performance & Bảo dưỡng' },
              ].map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setGalleryFilter(tab.key as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    galleryFilter === tab.key
                      ? 'bg-[#FF4D1C] text-white shadow-[0_8px_20px_rgba(255,77,28,0.3)]'
                      : 'bg-[#10141D] text-slate-400 hover:text-white border border-white/[0.07]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Bento Grid with Clip-Path Hover & Vehicle License Plate Badges */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {filteredGallery.map((item, idx) => {
              const isWide = idx === 0 || idx === 4;
              return (
                <motion.div
                  key={`${item.caption}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  onClick={() => setSelectedBuild(item)}
                  className={`${
                    isWide ? 'md:col-span-7' : 'md:col-span-5'
                  } group cursor-pointer p-1.5 rounded-[1.75rem] bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#FF4D1C]/50 transition-all duration-500`}
                >
                  <div className="relative h-72 sm:h-80 rounded-[calc(1.75rem-0.375rem)] overflow-hidden bg-[#0D1017]">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-[#06070A]/35 to-transparent" />

                    {/* Top Bar: Vehicle Type + License Plate */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[10px] uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                        {item.category === 'moto' ? (
                          <Bike className="w-3.5 h-3.5 text-[#FF4D1C]" />
                        ) : (
                          <Car className="w-3.5 h-3.5 text-[#FF4D1C]" />
                        )}
                        {item.vehicleModel || 'Showroom Build'}
                      </span>

                      {item.licensePlate && (
                        <span className="px-2.5 py-1 rounded-md bg-amber-400 text-[#06070A] font-mono font-bold text-xs tracking-wider shadow">
                          {item.licensePlate}
                        </span>
                      )}
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div>
                        {item.ownerName && (
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF4D1C] mb-1">
                            KHÁCH HÀNG: {item.ownerName} · HOÀN THIỆN: {item.completionTime || 'Trong ngày'}
                          </div>
                        )}
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {item.caption}
                        </h3>
                      </div>

                      <div className="shrink-0 w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#FF4D1C] text-white border border-white/20 flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LIVE SERVICES & PRICING CATALOG (CONNECTED DIRECTLY TO BOOKING_SERVICES DB) */}
      <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/[0.06] bg-[#080A0F]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D1C]/10 border border-[#FF4D1C]/30 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D1C] mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>LIVE SERVICE MENU · ĐỒNG BỘ MODULE BOOKING</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-white">
                Danh Mục Gói Chăm Sóc, Bảo Dưỡng & Độ Xe
              </h2>
            </div>
            <a
              href={buildBookingLink()}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF4D1C] hover:text-orange-300"
            >
              <span>Mở lịch trống tất cả khoang dịch vụ</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(liveServices.length > 0
              ? liveServices.map((svc, index) => {
                  const fallbackDesc =
                    data.services[index % data.services.length]?.description ||
                    'Quy trình thi công tiêu chuẩn phòng sạch quốc tế, lưu hồ sơ bảo hành điện tử theo biển số xe trên hệ thống CRM.';
                  const isMotoSvc =
                    svc.name.toLowerCase().includes('mô tô') ||
                    svc.name.toLowerCase().includes('pkl') ||
                    svc.name.toLowerCase().includes('xe máy') ||
                    svc.name.toLowerCase().includes('sh350');
                  return {
                    id: svc.id,
                    title: svc.name,
                    description: fallbackDesc,
                    priceFormatted: new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                      maximumFractionDigits: 0,
                    }).format(svc.price),
                    durationLabel: `${svc.duration_minutes} phút`,
                    vehicleBadge: isMotoSvc ? 'MÔ TÔ PKL & XE MÁY' : 'Ô TÔ & SUPERCAR',
                    isMoto: isMotoSvc,
                  };
                })
              : data.services.map(s => ({
                  id: s.id,
                  title: s.title,
                  description: s.description,
                  priceFormatted: s.priceLabel || 'Liên hệ',
                  durationLabel: s.durationLabel || '90 phút',
                  vehicleBadge: s.vehicleType === 'moto' ? 'MÔ TÔ PKL & XE MÁY' : 'Ô TÔ & SUPERCAR',
                  isMoto: s.vehicleType === 'moto',
                }))
            ).map(service => (
              <div
                key={service.id}
                className="p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.08] hover:border-[#FF4D1C]/50 transition-all flex flex-col justify-between group"
              >
                <div className="p-6 rounded-[calc(1.75rem-0.375rem)] bg-[#0D1017] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider font-semibold ${
                          service.isMoto
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            : 'bg-[#FF4D1C]/15 text-[#FF4D1C] border border-[#FF4D1C]/30'
                        }`}
                      >
                        {service.vehicleBadge}
                      </span>
                      <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {service.durationLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF4D1C] transition-colors mb-2.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.07] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[11px] font-mono uppercase text-slate-500">
                        Chi phí trọn gói
                      </span>
                      <span className="font-mono text-lg font-bold text-white tabular-nums">
                        {service.priceFormatted}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={buildBookingLink({
                          serviceId: service.id,
                          serviceName: service.title,
                        })}
                        className="py-2.5 px-3 rounded-xl bg-[#FF4D1C] hover:bg-[#ff5f33] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Đặt Khoang</span>
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          scrollToIntakeWithPreset({
                            serviceName: service.title,
                            vehicleType: service.isMoto ? 'Xe máy / Mô tô PKL' : 'Ô tô',
                          })
                        }
                        className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 transition-all"
                      >
                        Lập Hồ Sơ CRM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LIVE WORKSHOP BAYS & MASTER TECHNICIANS (CONNECTED TO BOOKING_RESOURCES) */}
      <section id="bays" className="py-24 sm:py-28 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 mb-3">
                <Gauge className="w-3.5 h-3.5" />
                <span>LIVE WORKSHOP BAY TELEMETRY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-white">
                Sơ Đồ Khoang Dịch Vụ & Kỹ Thuật Viên Trưởng
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Dữ liệu đồng bộ thời gian thực với Sơ đồ Điều phối (Timeline) trong trang Quản trị Đặt lịch. Khách hàng có thể chọn đích danh Khoang hoặc Kỹ thuật viên.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(liveResources.length > 0
              ? liveResources
              : [
                  {
                    id: 'bay-1',
                    name: 'Khoang 01: Phòng Sạch PPF & Ceramic',
                    role_or_capacity: 'Kiểm soát bụi ISO · 2 Siêu xe',
                    status: 'active',
                  },
                  {
                    id: 'bay-2',
                    name: 'Khoang 02: Cầu Nâng Bảo Dưỡng Gầm Máy',
                    role_or_capacity: 'Cầu nâng 4 tấn + Máy chẩn đoán ECU',
                    status: 'active',
                  },
                  {
                    id: 'bay-3',
                    name: 'Khoang 03: Bàn Nâng Thủy Lực Mô Tô PKL',
                    role_or_capacity: 'Chuyên Hyperbike, Ducati, BMW, SH350i',
                    status: 'active',
                  },
                  {
                    id: 'bay-4',
                    name: 'KTV Trưởng: Master Hoàng Nam',
                    role_or_capacity: '12 năm kinh nghiệm Supercar & PKL',
                    status: 'active',
                  },
                ]
            ).map((bay, idx) => (
              <div
                key={bay.id}
                className="p-5 rounded-3xl bg-[#0D1017] border border-white/[0.08] hover:border-emerald-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      BAY #0{idx + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 font-mono text-[10px] text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{bay.name}</h3>
                  <p className="text-xs text-slate-400 mb-5">
                    {bay.role_or_capacity || 'Khoang dịch vụ tiêu chuẩn Motorsport'}
                  </p>
                </div>

                <a
                  href={buildBookingLink({ resourceId: bay.id })}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-[#FF4D1C] text-white font-semibold text-xs flex items-center justify-between transition-colors"
                >
                  <span>Đặt lịch tại khoang này</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIRECT VEHICLE INTAKE & CRM SYNC CONSOLE (#crm-lead-section) */}
      <section
        id="crm-lead-section"
        className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 border-t border-white/[0.06] bg-gradient-to-b from-[#080A0F] to-[#06070A]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Cols: Explain How CRM Tracks Customer + Vehicle + License Plate */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D1C]/10 border border-[#FF4D1C]/30 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D1C]">
                <Zap className="w-3.5 h-3.5" />
                <span>DIRECT CRM VEHICLE PROFILE SYNC</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-white leading-tight">
                Lập Hồ Sơ Quản Lý Xe Điện Tử & Nhận Báo Giá Kỹ Thuật
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Khi bạn gửi thông tin phương tiện tại đây, hệ thống <strong className="text-white">CRM của {data.business.name}</strong> tự động khởi tạo thẻ Hồ sơ Xe gắn liền với <strong className="text-amber-300">Biển số xe, Dòng xe, Số ODO</strong> và thông tin chủ xe để theo dõi tiến độ thi công & nhắc bảo dưỡng định kỳ.
              </p>

              {/* Sample CRM Vehicle Card Preview */}
              <div className="p-5 rounded-3xl bg-[#0D1017] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    MẪU THẺ HỒ SƠ XE TRONG CRM KANBAN
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-400 text-[#06070A] font-mono font-bold text-xs">
                    {leadForm.licensePlate || quickPlate || '51K-888.99'}
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  {leadForm.vehicleModel || quickModel || 'Porsche 911 Carrera S / Ducati V4S'}
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                    Loại: {leadForm.vehicleType}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                    Chủ xe: {leadForm.name || 'Anh Hoàng Minh'}
                  </span>
                  {leadForm.odoKm && (
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                      ODO: {leadForm.odoKm} km
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Double-Bezel Vehicle Intake Form */}
            <div className="lg:col-span-7">
              <div className="p-2 rounded-[2rem] bg-white/[0.04] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <div className="p-6 sm:p-8 rounded-[calc(2rem-0.5rem)] bg-[#0D1017]">
                  {leadSuccess ? (
                    <div className="py-10 text-center space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Đã Khởi Tạo Hồ Sơ Xe Trong Hệ Thống CRM!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Thông tin xe <strong className="text-amber-300 font-mono">{leadForm.licensePlate}</strong> ({leadForm.vehicleModel}) của <strong className="text-white">{leadForm.name}</strong> đã được đẩy thẳng vào bảng Kanban CRM của xưởng. Cố vấn kỹ thuật sẽ liên hệ trong 5 phút!
                      </p>
                      <div className="pt-4 flex flex-wrap justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setLeadSuccess(false);
                            setLeadForm({
                              name: '',
                              phone: '',
                              vehicleType: 'Ô tô',
                              vehicleModel: '',
                              licensePlate: '',
                              odoKm: '',
                              service: '',
                              message: '',
                            });
                          }}
                          className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                        >
                          Đăng ký thêm xe khác
                        </button>
                        <a
                          href={buildBookingLink()}
                          className="px-5 py-2.5 rounded-full bg-[#FF4D1C] text-white text-xs font-semibold"
                        >
                          Chọn giờ đặt khoang trực tiếp →
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          Phiếu Tiếp Nhận Hồ Sơ Phương Tiện (Ô Tô / Xe Máy)
                        </h3>
                        <span className="font-mono text-[11px] text-emerald-400">
                          ● AUTO-SYNC CRM
                        </span>
                      </div>

                      {leadError && (
                        <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                          {leadError}
                        </div>
                      )}

                      {/* Vehicle Type Switcher */}
                      <div className="grid grid-cols-2 gap-3">
                        {['Ô tô', 'Xe máy / Mô tô PKL'].map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setLeadForm({ ...leadForm, vehicleType: type })}
                            className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                              leadForm.vehicleType === type
                                ? 'bg-[#FF4D1C] border-[#FF4D1C] text-white'
                                : 'bg-[#07090E] border-white/10 text-slate-400 hover:text-white'
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

                      {/* Owner Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Họ tên chủ xe <span className="text-[#FF4D1C]">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={leadForm.name}
                            onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                            placeholder="Nguyễn Hoàng Minh"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white text-sm outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Số điện thoại (Zalo) <span className="text-[#FF4D1C]">*</span>
                          </label>
                          <input
                            required
                            type="tel"
                            value={leadForm.phone}
                            onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                            placeholder="0909 888 911"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white font-mono text-sm outline-none"
                          />
                        </div>
                      </div>

                      {/* Vehicle Make/Model, License Plate, ODO */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                        <div className="sm:col-span-5">
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Hãng & Dòng xe <span className="text-[#FF4D1C]">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={leadForm.vehicleModel}
                            onChange={e =>
                              setLeadForm({ ...leadForm, vehicleModel: e.target.value })
                            }
                            placeholder="Porsche 911 / BMW M4 / SH350i"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white text-sm outline-none"
                          />
                        </div>
                        <div className="sm:col-span-4">
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Biển số xe <span className="text-[#FF4D1C]">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={leadForm.licensePlate}
                            onChange={e =>
                              setLeadForm({
                                ...leadForm,
                                licensePlate: e.target.value.toUpperCase(),
                              })
                            }
                            placeholder="51K-888.88"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-amber-300 font-mono font-bold text-sm uppercase outline-none"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Số ODO (Km)
                          </label>
                          <input
                            type="text"
                            value={leadForm.odoKm}
                            onChange={e => setLeadForm({ ...leadForm, odoKm: e.target.value })}
                            placeholder="15.000 km"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white font-mono text-sm outline-none"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Hạng mục cần tư vấn / đặt lịch
                        </label>
                        <select
                          value={leadForm.service}
                          onChange={e => setLeadForm({ ...leadForm, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white text-sm outline-none"
                        >
                          <option value="">-- Chọn gói chăm sóc / bảo dưỡng / độ xe --</option>
                          {(liveServices.length > 0
                            ? liveServices.map(s => s.name)
                            : data.services.map(s => s.title)
                          ).map(name => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Tình trạng xe hoặc yêu cầu đặc biệt
                        </label>
                        <textarea
                          rows={2}
                          value={leadForm.message}
                          onChange={e => setLeadForm({ ...leadForm, message: e.target.value })}
                          placeholder="VD: Xe bị xước dăm nắp capo, cần báo giá dán PPF + bảo dưỡng mốc 20.000km..."
                          className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/10 focus:border-[#FF4D1C] text-white text-sm outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submittingLead}
                        className="w-full py-4 px-6 rounded-full bg-[#FF4D1C] hover:bg-[#ff5f33] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(255,77,28,0.4)] transition-all disabled:opacity-50"
                      >
                        <span>
                          {submittingLead
                            ? 'Đang khởi tạo hồ sơ xe vào CRM...'
                            : 'Gửi Hồ Sơ Xe & Nhận Báo Giá Kỹ Thuật'}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LIVE GARAGE TECHNICAL JOURNAL (CONNECTED TO AI CMS POSTS) */}
      <section id="journal" className="py-24 sm:py-28 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF4D1C] mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>GARAGE TECHNICAL JOURNAL · POWERED BY AI CMS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.02em] text-white">
                Cẩm Nang Chăm Sóc Ô Tô & Mô Tô Phân Khối Lớn
              </h2>
            </div>

            <a
              href={blogBaseUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
            >
              <span>Xem toàn bộ chuyên trang kỹ thuật</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(livePosts.length > 0
              ? livePosts.slice(0, 3)
              : [
                  {
                    id: 'p1',
                    title:
                      'So Sánh Dán Phim PPF TPU 8.5Mil Và Phủ Ceramic Graphene 10H: Đâu Là Lựa Chọn Tối Ưu Cho Xe Sang?',
                    slug: 'so-sanh-dan-phim-ppf-tpu-va-phu-ceramic-graphene-10h',
                    content:
                      'Phân tích chi tiết cơ chế tự phục hồi vết xước của màng PPF TPU 8.5Mil và hiệu ứng lá sen kỵ nước của Ceramic Graphene 10H...',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
                    created_at: new Date().toISOString(),
                  },
                  {
                    id: 'p2',
                    title:
                      'Lịch Bảo Dưỡng Mô Tô Phân Khối Lớn (PKL) Định Kỳ Theo Từng Cấp ODO Chủ Xe Cần Nhớ',
                    slug: 'lich-bao-duong-mo-to-phan-khoi-lon-pkl-dinh-ky-theo-odo',
                    content:
                      'Hướng dẫn chi tiết các mốc thay nhớt 300V, vệ sinh kim phun, bảo dưỡng heo dầu Brembo và cân chỉnh phuộc Ohlins cho mô tô PKL...',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1000&auto=format&fit=crop',
                    created_at: new Date().toISOString(),
                  },
                  {
                    id: 'p3',
                    title:
                      'Quy Trình Detailing Khoang Máy Ô Tô Bằng Hơi Nước Nóng Chuẩn An Toàn Điện Tử ECU',
                    slug: 'quy-trinh-detailing-khoang-may-o-to-bang-hoi-nuoc-nong',
                    content:
                      'Tại sao không nên xịt nước áp lực cao trực tiếp vào khoang động cơ xe Đức? Khám phá quy trình vệ sinh khoang máy 12 bước an toàn tuyệt đối...',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop',
                    created_at: new Date().toISOString(),
                  },
                ]
            ).map(post => {
              const excerpt =
                post.content
                  ?.replace(/<[^>]*>/g, ' ')
                  .replace(/\s+/g, ' ')
                  .trim()
                  .slice(0, 130) + '...';
              return (
                <a
                  key={post.id}
                  href={`${blogBaseUrl}/${post.slug}`}
                  className="group p-1.5 rounded-[1.75rem] bg-white/[0.03] border border-white/[0.08] hover:border-[#FF4D1C]/50 transition-all flex flex-col justify-between"
                >
                  <div className="rounded-[calc(1.75rem-0.375rem)] bg-[#0D1017] overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={
                            post.thumbnail_url ||
                            'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop'
                          }
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md font-mono text-[10px] text-[#FF4D1C]">
                          AI CMS TECHNICAL ARTICLE
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold text-white group-hover:text-[#FF4D1C] transition-colors line-clamp-2 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                          {excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Đọc bài phân tích</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FF4D1C]" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS & FOOTER */}
      <footer className="py-16 px-4 sm:px-6 border-t border-white/10 bg-[#050608] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {data.reviews.map(rev => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-[#0B0D13] border border-white/[0.07] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FF4D1C]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-amber-300 font-semibold">
                    {rev.vehicle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">“{rev.text}”</p>
                <div className="pt-2 text-xs font-bold text-white">— {rev.author}</div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <div className="font-bold text-white text-sm">{data.business.name}</div>
              <div className="flex flex-wrap items-center gap-4 mt-1">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF4D1C]" />
                  {data.business.address}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-[#FF4D1C]" />
                  {data.business.phone}
                </span>
              </div>
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              POWERED BY TAVIWEB · INTEGRATED BOOKING + VEHICLE CRM + AI CMS
            </div>
          </div>
        </div>
      </footer>

      {/* FULL-SCREEN BUILD TELEMETRY LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedBuild && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBuild(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full rounded-3xl bg-[#0D1017] border border-white/15 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 relative h-72 md:h-auto bg-black">
                  <img
                    src={selectedBuild.image.src}
                    alt={selectedBuild.image.alt}
                    className="w-full h-full object-cover"
                  />
                  {selectedBuild.licensePlate && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-amber-400 text-[#06070A] font-mono font-bold text-xs">
                      BIỂN SỐ: {selectedBuild.licensePlate}
                    </div>
                  )}
                </div>

                <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF4D1C]">
                        HỒ SƠ BẢN ĐỘ & CHĂM SÓC XE
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedBuild(null)}
                        className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{selectedBuild.caption}</h3>

                    <div className="grid grid-cols-2 gap-2.5 my-4 p-3.5 rounded-2xl bg-[#07090E] border border-white/10 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[10px] font-mono">DÒNG XE</span>
                        <span className="font-semibold text-white">
                          {selectedBuild.vehicleModel || 'Supercar / PKL'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] font-mono">CHỦ XE</span>
                        <span className="font-semibold text-white">
                          {selectedBuild.ownerName || 'Khách VIP'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] font-mono">
                          THỜI GIAN THI CÔNG
                        </span>
                        <span className="font-mono font-semibold text-emerald-400">
                          {selectedBuild.completionTime || 'Trong ngày'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] font-mono">
                          CHI PHÍ THAM KHẢO
                        </span>
                        <span className="font-mono font-semibold text-amber-300">
                          {selectedBuild.packagePrice || 'Liên hệ'}
                        </span>
                      </div>
                    </div>

                    {selectedBuild.workSummary && (
                      <div className="space-y-2">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          CÁC HẠNG MỤC ĐÃ THỰC HIỆN:
                        </div>
                        {selectedBuild.workSummary.map((step, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#FF4D1C] shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => {
                        const model = selectedBuild.vehicleModel || '';
                        const isMoto = selectedBuild.category === 'moto';
                        setSelectedBuild(null);
                        scrollToIntakeWithPreset({
                          serviceName: selectedBuild.caption,
                          vehicleType: isMoto ? 'Xe máy / Mô tô PKL' : 'Ô tô',
                          vehicleModel: model,
                        });
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-[#FF4D1C] hover:bg-[#ff5f33] text-white font-semibold text-xs flex items-center justify-center gap-2"
                    >
                      <span>Đặt làm gói tương tự cho xe của tôi</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
