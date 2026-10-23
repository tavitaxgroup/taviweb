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
  Calendar,
} from 'lucide-react';
import { DemoPageData, GalleryItem } from '../../../types/demo';

interface AutoGarageTemplateProps {
  data: DemoPageData;
}

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900&auto=format&fit=crop',
];

const MODES = {
  car: {
    id: 'car' as const,
    badge: 'CHĂM SÓC & NÂNG CẤP Ô TÔ CHUYÊN SÂU',
    shortLabel: 'Ô Tô & Siêu Xe',
    headlineMain: 'Đánh Thức Đẳng Cấp',
    headlineAccent: 'Cỗ Máy Của Bạn.',
    subtitle:
      'Hệ thống Detailing, Dán phim PPF tự phục hồi, Phủ Ceramic 10H và Bảo dưỡng kỹ thuật tiêu chuẩn quốc tế dành cho Ô tô & Xe máy.',
    heroImage:
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=2000&auto=format&fit=crop',
    machine: 'Porsche 911 GT3 RS',
    stats: [
      { label: 'Độ bóng sơn', val: '99.6 GU' },
      { label: 'Màng bảo vệ', val: 'PPF 8.5 Mil' },
      { label: 'Bảo hành điện tử', val: '10 Năm' },
    ],
    placeholderModel: 'VD: Porsche 911, Mercedes GLC300, Mazda CX-5...',
  },
  moto: {
    id: 'moto' as const,
    badge: 'CHĂM SÓC & ĐỘ MÔ TÔ PKL – XE MÁY CAO CẤP',
    shortLabel: 'Mô Tô PKL & Xe Máy',
    headlineMain: 'Chế Tác Hoàn Hảo',
    headlineAccent: 'Chiến Mã Hai Bánh.',
    subtitle:
      'Rã dàn áo vệ sinh chi tiết 18 bước, Dán PPF chống trầy, Bảo dưỡng heo dầu Brembo, Cân chỉnh phuộc Ohlins và Nâng cấp hiệu suất.',
    heroImage:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=85&w=2000&auto=format&fit=crop',
    machine: 'Ducati Panigale V4S',
    stats: [
      { label: 'Rã dàn áo vệ sinh', val: '18 Bước' },
      { label: 'Cân chỉnh phuộc', val: 'Chuẩn Ohlins' },
      { label: 'Bảo dưỡng phanh', val: 'Brembo Lab' },
    ],
    placeholderModel: 'VD: Ducati Panigale V4, BMW S1000RR, Vespa 946, SH350i...',
  },
};

export default function AutoGarageTemplate({ data }: AutoGarageTemplateProps) {
  const [vehicleMode, setVehicleMode] = useState<'car' | 'moto'>('car');
  const [bladeKey, setBladeKey] = useState(0);

  // Interactive Before/After Slider
  const [sliderPos, setSliderPos] = useState(52);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Gallery Filter & Lightbox
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'car' | 'moto'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  // Service Filter
  const [serviceFilter, setServiceFilter] = useState<'all' | 'car' | 'moto'>('all');

  // Quote Form
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
          source: 'Web Booking',
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

  const allServices =
    liveServices.length > 0
      ? liveServices.map((s, idx) => {
          const fallbackDesc =
            data.services[idx % data.services.length]?.description ||
            'Thi công trực tiếp bởi kỹ thuật viên trưởng với vật tư chính hãng và quy trình kiểm định chất lượng tiêu chuẩn.';
          const isMoto =
            s.name.toLowerCase().includes('mô tô') ||
            s.name.toLowerCase().includes('pkl') ||
            s.name.toLowerCase().includes('sh350');
          return {
            id: s.id,
            title: s.name,
            description: fallbackDesc,
            duration: `${s.duration_minutes} phút`,
            price: new Intl.NumberFormat('vi-VN').format(s.price) + ' ₫',
            image: SERVICE_IMAGES[idx % SERVICE_IMAGES.length],
            isMoto,
          };
        })
      : data.services.map((s, idx) => ({
          id: s.id,
          title: s.title,
          description: s.description,
          duration: s.durationLabel || '120 phút',
          price: s.priceLabel || 'Liên hệ',
          image: SERVICE_IMAGES[idx % SERVICE_IMAGES.length],
          isMoto: s.vehicleType === 'moto',
        }));

  const filteredServices = allServices.filter(s => {
    if (serviceFilter === 'all') return true;
    if (serviceFilter === 'moto') return s.isMoto;
    return !s.isMoto;
  });

  return (
    <div className="min-h-dvh bg-[#090B10] text-white font-sans antialiased selection:bg-[#FF5526] selection:text-white overflow-x-hidden">
      {/* DIAGONAL SHUTTER TRANSITION WHEN SWITCHING CAR <-> MOTO */}
      <AnimatePresence mode="wait">
        {bladeKey > 0 && (
          <motion.div
            key={`blade-${bladeKey}`}
            initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
            animate={{
              clipPath: [
                'polygon(0 0, 0 0, 0 100%, 0% 100%)',
                'polygon(0 0, 100% 0, 88% 100%, 0% 100%)',
                'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
              ],
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 pointer-events-none bg-[#FF5526] flex items-center justify-center"
          >
            <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {vehicleMode === 'car' ? 'CHẾ ĐỘ: Ô TÔ & SIÊU XE' : 'CHẾ ĐỘ: MÔ TÔ PKL & XE MÁY'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. FLOATING NAVBAR */}
      <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-[#11151F]/90 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-xs bg-[#FF5526] rotate-45" />
            <span className="text-sm sm:text-base font-extrabold tracking-tight text-white">
              {data.business.name}
            </span>
          </a>

          {/* Mode Switcher (Ô tô <-> Xe máy PKL) */}
          <div className="hidden md:flex items-center p-1 rounded-full bg-[#090B10] border border-white/15">
            <button
              type="button"
              onClick={() => switchMode('car')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                vehicleMode === 'car'
                  ? 'bg-[#FF5526] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Ô Tô & Siêu Xe</span>
            </button>
            <button
              type="button"
              onClick={() => switchMode('moto')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                vehicleMode === 'moto'
                  ? 'bg-[#FF5526] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>Mô Tô PKL & Xe Máy</span>
            </button>
          </div>

          {/* Nav Links & Primary CTA */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-200">
              <a href="#work" className="hover:text-[#FF5526] transition-colors">
                Hình ảnh thực tế
              </a>
              <a href="#services" className="hover:text-[#FF5526] transition-colors">
                Dịch vụ & Bảng giá
              </a>
              <a href="#shield" className="hover:text-[#FF5526] transition-colors">
                So sánh trước/sau
              </a>
              <a href="#quote" className="hover:text-[#FF5526] transition-colors">
                Nhận báo giá
              </a>
            </nav>

            <a
              href={buildBookingHref()}
              className="inline-flex items-center gap-2 bg-[#FF5526] hover:bg-[#ff6a42] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-[0_8px_20px_rgba(255,85,38,0.35)]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Đặt lịch ngay</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. FULL-BLEED CINEMATIC HERO */}
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-end overflow-hidden border-b border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={vehicleMode}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
          >
            <img
              src={activeMode.heroImage}
              alt={activeMode.machine}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-[#090B10]/65 to-[#090B10]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090B10]/95 via-[#090B10]/55 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 pb-14 sm:pb-20 pt-32">
          {/* Mobile Mode Switcher */}
          <div className="flex md:hidden items-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => switchMode('car')}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                vehicleMode === 'car'
                  ? 'bg-[#FF5526] text-white'
                  : 'bg-white/10 text-slate-200'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Ô Tô</span>
            </button>
            <button
              type="button"
              onClick={() => switchMode('moto')}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                vehicleMode === 'moto'
                  ? 'bg-[#FF5526] text-white'
                  : 'bg-white/10 text-slate-200'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>Mô Tô & Xe Máy</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={vehicleMode}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FF5526]" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  {activeMode.badge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
                {activeMode.headlineMain}{' '}
                <span className="text-[#FF5526] block sm:inline">
                  {activeMode.headlineAccent}
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                {activeMode.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Action & Highlight Bar */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={buildBookingHref()}
                className="px-7 py-4 rounded-full bg-[#FF5526] hover:bg-[#ff6a42] text-white font-bold text-sm flex items-center gap-2.5 shadow-[0_12px_30px_rgba(255,85,38,0.4)] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Đặt lịch ngay</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#quote"
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-sm transition-all"
              >
                Nhận báo giá
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              {activeMode.stats.map(s => (
                <div key={s.label}>
                  <div className="text-xs font-medium text-slate-300">{s.label}</div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white mt-0.5">
                    {s.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HÌNH ẢNH THỰC TẾ CÁC XE ĐÃ THI CÔNG (GRID 3 CỘT ĐỒNG ĐỀU 100%, KHÔNG LỆCH BỐ CỤC) */}
      <section id="work" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5526] block mb-2">
                THƯ VIỆN HÌNH ẢNH THỰC TẾ
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Các Dòng Xe Đã Hoàn Thiện
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'Tất cả xe' },
                { id: 'car', label: 'Ô tô & Siêu xe' },
                { id: 'moto', label: 'Mô tô PKL & Xe máy' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setGalleryFilter(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    galleryFilter === tab.id
                      ? 'bg-[#FF5526] text-white shadow-md'
                      : 'bg-[#131824] text-slate-200 border border-white/10 hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Uniform 3-Column Grid — Every image & card has identical size and aspect ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryList.map((item, idx) => (
              <motion.div
                key={`${item.caption}-${idx}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveLightbox(item)}
                className="group rounded-3xl overflow-hidden bg-[#141926] border border-white/12 hover:border-[#FF5526] cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Fixed 16:10 Image Header */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#090B10]">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141926] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-1.5">
                      {item.category === 'moto' ? (
                        <Bike className="w-3.5 h-3.5 text-[#FF5526]" />
                      ) : (
                        <Car className="w-3.5 h-3.5 text-[#FF5526]" />
                      )}
                      {item.category === 'moto' ? 'Mô tô & Xe máy' : 'Ô tô'}
                    </span>
                    {item.packagePrice && (
                      <span className="px-3.5 py-1.5 rounded-full bg-[#FF5526] text-white text-xs font-bold shadow-md">
                        {item.packagePrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Uniform Card Footer */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-300 truncate mb-1">
                      {item.ownerName} · Hoàn thiện: {item.completionTime || 'Trong ngày'}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#FF5526] transition-colors truncate">
                      {item.vehicleModel || item.caption}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#FF5526] border border-white/20 flex items-center justify-center transition-all shrink-0">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ & BẢNG GIÁ (GRID 3 CỘT ĐỒNG ĐỀU, CÙNG KÍCH THƯỚC ẢNH & CHIỀU CAO THẺ) */}
      <section id="services" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5526] block mb-2">
                DỊCH VỤ CHĂM SÓC, BẢO DƯỠNG & NÂNG CẤP
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Dịch Vụ & Bảng Giá Trọn Gói
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'Tất cả dịch vụ' },
                { id: 'car', label: 'Dịch vụ Ô tô' },
                { id: 'moto', label: 'Dịch vụ Xe máy & PKL' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setServiceFilter(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    serviceFilter === tab.id
                      ? 'bg-[#FF5526] text-white shadow-md'
                      : 'bg-[#151A26] text-slate-200 border border-white/10 hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Visual Service Cards Grid — Identical 16:10 image + locked text height */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(svc => (
              <div
                key={svc.id}
                className="group rounded-3xl bg-[#141926] border border-white/12 hover:border-[#FF5526] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                <div>
                  {/* Fixed 16:10 Card Photo Header */}
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#090B10]">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141926] via-transparent to-black/30" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white flex items-center gap-1.5">
                        {svc.isMoto ? (
                          <Bike className="w-3.5 h-3.5 text-[#FF5526]" />
                        ) : (
                          <Car className="w-3.5 h-3.5 text-[#FF5526]" />
                        )}
                        {svc.isMoto ? 'Mô tô & Xe máy' : 'Ô tô'}
                      </span>

                      <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FF5526]" />
                        {svc.duration}
                      </span>
                    </div>
                  </div>

                  {/* Card Content with locked min-heights so all cards align */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#FF5526] transition-colors leading-snug line-clamp-2 min-h-[3.5rem] mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-2 min-h-[2.75rem]">
                      {svc.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Price + Đặt lịch ngay */}
                <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-slate-400 block">Giá trọn gói</span>
                    <span className="text-xl font-extrabold text-white">{svc.price}</span>
                  </div>

                  <a
                    href={buildBookingHref({
                      serviceId: svc.id,
                      serviceName: svc.title,
                    })}
                    className="px-5 py-3 rounded-full bg-[#FF5526] hover:bg-[#ff6a42] text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shrink-0"
                  >
                    <span>Đặt lịch ngay</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SO SÁNH TRƯỚC & SAU KHI XỬ LÝ SƠN / DÁN PPF */}
      <section id="shield" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5526] block mb-2">
                HIỆU QUẢ THỰC TẾ
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Trước & Sau Khi Hiệu Chỉnh Sơn – Phủ Ceramic
              </h2>
            </div>
            <p className="text-sm text-slate-300">
              Kéo thanh trượt qua lại để xem độ bóng bề mặt sơn
            </p>
          </div>

          <div
            ref={sliderRef}
            onPointerMove={e => {
              if (e.buttons === 1 || e.pointerType !== 'mouse') {
                handleSliderMove(e.clientX);
              }
            }}
            onClick={e => handleSliderMove(e.clientX)}
            className="relative h-[360px] sm:h-[520px] w-full rounded-3xl overflow-hidden border border-white/15 cursor-ew-resize select-none"
          >
            {/* AFTER */}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2000&auto=format&fit=crop"
              alt="Sau khi phủ Ceramic"
              className="w-full h-full object-cover object-center pointer-events-none brightness-110 contrast-115 saturate-125"
            />
            <div className="absolute bottom-5 right-5 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg">
              SAU KHI LÀM: BÓNG GƯƠNG 99.6 GU
            </div>

            {/* BEFORE */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2000&auto=format&fit=crop"
                alt="Trước khi xử lý"
                className="w-full h-full object-cover object-center pointer-events-none brightness-70 contrast-75 saturate-50 blur-[0.8px]"
              />
              <div className="absolute bottom-5 left-5 px-4 py-2 rounded-full bg-black/80 border border-white/20 text-slate-200 font-bold text-xs">
                TRƯỚC KHI LÀM: SƠN XƯỚC DĂM & Ố MỜ
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#FF5526] shadow-[0_0_24px_#FF5526]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF5526] text-white border-2 border-white flex items-center justify-center shadow-xl">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ĐẶT LỊCH & NHẬN BÁO GIÁ NHANH */}
      <section id="quote" className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10 bg-[#0D1017]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Khu vực & Kỹ thuật viên */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5526] block mb-2">
                HỆ THỐNG XƯỞNG TIÊU CHUẨN
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Đặt Lịch Trực Tuyến Không Cần Chờ Đợi
              </h2>
              <p className="text-base text-slate-300 mt-3 leading-relaxed">
                Chọn trước dịch vụ và khung giờ phù hợp với bạn. Đội ngũ kỹ thuật viên và khu vực chăm sóc xe sẽ được chuẩn bị sẵn sàng ngay khi bạn đến.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(liveResources.length > 0
                ? liveResources
                : [
                    {
                      id: 'b1',
                      name: 'Khu Phòng Sạch PPF & Ceramic',
                      role_or_capacity: 'Tiêu chuẩn chống bụi · Ô tô & Siêu xe',
                    },
                    {
                      id: 'b2',
                      name: 'Khu Bảo Dưỡng & Gầm Máy Ô Tô',
                      role_or_capacity: 'Cầu nâng 4 tấn & Chẩn đoán điện tử',
                    },
                    {
                      id: 'b3',
                      name: 'Khu Chăm Sóc & Độ Mô Tô PKL',
                      role_or_capacity: 'Bàn nâng thủy lực chuyên dụng',
                    },
                    {
                      id: 'b4',
                      name: 'Kỹ Thuật Viên Trưởng Hoàng Nam',
                      role_or_capacity: '12 năm kinh nghiệm Ô tô & PKL',
                    },
                  ]
              ).map(bay => (
                <a
                  key={bay.id}
                  href={buildBookingHref({ resourceId: bay.id })}
                  className="group p-5 rounded-2xl bg-[#141926] border border-white/12 hover:border-[#FF5526] transition-all flex flex-col justify-between min-h-[136px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Đang nhận lịch
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF5526]" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FF5526] transition-colors line-clamp-1">
                      {bay.name}
                    </h3>
                    <div className="text-xs text-slate-300 mt-1 line-clamp-1">
                      {bay.role_or_capacity}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form Nhận Báo Giá Nhanh */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#141926] border border-white/15 shadow-2xl">
              <div className="pb-5 mb-6 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5526]">
                  TƯ VẤN MIỄN PHÍ 1:1
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Nhận Báo Giá Theo Dòng Xe
                </h3>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-white">
                    Đã Nhận Yêu Cầu Báo Giá!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Cảm ơn <strong className="text-white">{leadForm.name}</strong>. Cố vấn kỹ thuật sẽ liên hệ qua số{' '}
                    <strong className="text-white">{leadForm.phone}</strong> trong ít phút để báo giá chi tiết cho xe{' '}
                    <strong className="text-white">{leadForm.vehicleModel}</strong>.
                  </p>
                  <div className="pt-3 flex flex-wrap justify-center gap-3">
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
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                    >
                      Gửi yêu cầu khác
                    </button>
                    <a
                      href={buildBookingHref()}
                      className="px-5 py-2.5 rounded-full bg-[#FF5526] text-white text-xs font-bold"
                    >
                      Đặt lịch ngay →
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {['Ô tô', 'Xe máy / Mô tô PKL'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setLeadForm({ ...leadForm, vehicleType: type })}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                          leadForm.vehicleType === type
                            ? 'bg-[#FF5526] text-white border-[#FF5526]'
                            : 'bg-[#090B10] text-slate-300 border-white/15 hover:text-white'
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
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Dòng xe của bạn <span className="text-[#FF5526]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={leadForm.vehicleModel}
                      onChange={e => setLeadForm({ ...leadForm, vehicleModel: e.target.value })}
                      placeholder={activeMode.placeholderModel}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090B10] border border-white/15 focus:border-[#FF5526] text-white placeholder:text-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Họ và tên <span className="text-[#FF5526]">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        value={leadForm.name}
                        onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="Nguyễn Hoàng Minh"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090B10] border border-white/15 focus:border-[#FF5526] text-white placeholder:text-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Số điện thoại <span className="text-[#FF5526]">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={leadForm.phone}
                        onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="0909 888 911"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090B10] border border-white/15 focus:border-[#FF5526] text-white placeholder:text-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Dịch vụ cần báo giá
                    </label>
                    <select
                      value={leadForm.service}
                      onChange={e => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090B10] border border-white/15 focus:border-[#FF5526] text-white text-sm outline-none transition-colors"
                    >
                      <option value="">-- Chọn gói dịch vụ --</option>
                      {allServices.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full bg-[#FF5526] hover:bg-[#ff6a42] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(255,85,38,0.35)] disabled:opacity-50"
                  >
                    <span>{submitting ? 'Đang gửi yêu cầu...' : 'Nhận báo giá ngay'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CẨM NANG CHĂM SÓC XE (GRID 3 CỘT ĐỒNG ĐỀU, CÙNG KÍCH THƯỚC ẢNH 16:10) */}
      <section className="py-24 sm:py-32 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5526] block mb-2">
                KIẾN THỨC & KINH NGHIỆM
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Cẩm Nang Chăm Sóc Xe
              </h2>
            </div>
            <a
              href={blogBaseUrl}
              className="text-xs font-bold text-slate-200 hover:text-[#FF5526] flex items-center gap-1.5 transition-colors"
            >
              <span>Xem tất cả bài viết</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    title: 'Quy Trình Detailing Khoang Máy Bằng Hơi Nước Nóng An Toàn',
                    slug: 'quy-trinh-detailing-khoang-may-o-to-bang-hoi-nuoc-nong',
                    thumbnail_url:
                      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop',
                  },
                ]
            ).map(post => (
              <a
                key={post.id}
                href={`${blogBaseUrl}/${post.slug}`}
                className="group rounded-3xl bg-[#141926] border border-white/12 hover:border-[#FF5526] transition-all overflow-hidden flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#090B10]">
                  <img
                    src={
                      post.thumbnail_url ||
                      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop'
                    }
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF5526] transition-colors line-clamp-2 min-h-[3.25rem] leading-snug">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#FF5526] shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-12 px-4 sm:px-8 bg-[#090B10]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-white font-extrabold text-sm">{data.business.name}</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF5526]" />
              {data.business.address}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white font-bold">
              <Phone className="w-4 h-4 text-[#FF5526]" />
              {data.business.phone}
            </span>
          </div>
          <div className="text-slate-400">© {new Date().getFullYear()} {data.business.name}</div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL XEM CHI TIẾT XE */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full rounded-3xl bg-[#141926] border border-white/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
            >
              <div className="lg:col-span-7 h-[300px] sm:h-[440px] bg-black relative">
                <img
                  src={activeLightbox.image.src}
                  alt={activeLightbox.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5526]">
                      CHI TIẾT GÓI HOÀN THIỆN
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveLightbox(null)}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {activeLightbox.vehicleModel || activeLightbox.caption}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mb-5">
                    {activeLightbox.ownerName} · Thời gian: {activeLightbox.completionTime} ·{' '}
                    <span className="text-[#FF5526] font-bold">{activeLightbox.packagePrice}</span>
                  </div>

                  {activeLightbox.workSummary && (
                    <div className="space-y-2.5 border-t border-white/10 pt-5">
                      {activeLightbox.workSummary.map((s, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className="w-4 h-4 text-[#FF5526] shrink-0 mt-0.5" />
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
                  className="mt-8 w-full py-3.5 rounded-full bg-[#FF5526] hover:bg-[#ff6a42] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>Đặt lịch ngay</span>
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
