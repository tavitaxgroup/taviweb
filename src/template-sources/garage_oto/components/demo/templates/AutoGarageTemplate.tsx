'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
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
  Menu,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
  ChevronDown,
} from 'lucide-react';
import { DemoPageData, GalleryItem } from '../../../types/demo';
import '../../../index.css';

interface AutoGarageTemplateProps {
  data: DemoPageData;
}

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900&auto=format&fit=crop',
];

const MODES = {
  car: {
    id: 'car' as const,
    eyebrow: 'XƯỞNG CHĂM SÓC & BẢO DƯỠNG Ô TÔ HẠNG SANG',
    shortLabel: 'Ô tô',
    headlineLine1: 'Đánh Thức Đẳng Cấp',
    headlineLine2: 'Tuyệt Tác Cơ Khí.',
    subtitle:
      'Phòng sạch dán phim PPF tiêu chuẩn ISO, hiệu chỉnh sơn phủ Ceramic 10H và chẩn đoán kỹ thuật chuyên sâu dành cho các dòng xe sang Châu Âu.',
    heroImage:
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=2000&auto=format&fit=crop',
    machine: 'Porsche 911 GT3 Touring',
    placeholderModel: 'VD: Porsche 911, Mercedes-AMG G63, BMW M4...',
  },
  moto: {
    id: 'moto' as const,
    eyebrow: 'XƯỞNG CHĂM SÓC & HIỆU CHỈNH MÔ TÔ PHÂN KHỐI LỚN',
    shortLabel: 'Mô tô PKL',
    headlineLine1: 'Chuẩn Mực Cơ Khí',
    headlineLine2: 'Chiến Mã Hai Bánh.',
    subtitle:
      'Rã dàn áo vệ sinh chi tiết 18 bước, dán PPF chống đá văng, bảo dưỡng phanh Brembo và cân chỉnh hệ thống treo Ohlins chuẩn xác đến từng milimet.',
    heroImage:
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=85&w=2000&auto=format&fit=crop',
    machine: 'Ducati Panigale V4S',
    placeholderModel: 'VD: Ducati Panigale V4, BMW S1000RR, Vespa 946, SH350i...',
  },
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tiếp nhận & Chẩn đoán',
    desc: 'Đo độ dày sơn bằng sóng siêu âm, soi bề mặt dưới đèn chuyên dụng và quét lỗi hệ thống điện tử.',
  },
  {
    step: '02',
    title: 'Tư vấn & Báo giá',
    desc: 'Phân tích phương án tối ưu, lập báo giá minh bạch từng hạng mục vật tư và thời gian hoàn thiện.',
  },
  {
    step: '03',
    title: 'Thi công Chuẩn hãng',
    desc: 'Thực hiện trong phòng sạch kiểm soát bụi tĩnh điện hoặc cầu nâng chuyên dụng bởi Kỹ thuật viên trưởng.',
  },
  {
    step: '04',
    title: 'Kiểm định Chất lượng',
    desc: 'Nghiệm thu đa điểm theo tiêu chuẩn Đức (độ bóng GU, mép phim PPF, lực siết ốc tiêu chuẩn).',
  },
  {
    step: '05',
    title: 'Bàn giao & Bảo hành',
    desc: 'Kích hoạt bảo hành điện tử và lưu hồ sơ nhắc lịch chăm sóc định kỳ theo số ODO của xe.',
  },
];

const BRANDS_SERVED = [
  { id: 'porsche', name: 'PORSCHE', specialty: 'Stuttgart Specialist' },
  { id: 'mercedes', name: 'MERCEDES-BENZ', specialty: 'AMG & Maybach Care' },
  { id: 'bmw', name: 'BMW', specialty: 'M Performance Lab' },
  { id: 'audi', name: 'AUDI', specialty: 'RS & Quattro Care' },
  { id: 'landrover', name: 'LAND ROVER', specialty: 'Autobiography Atelier' },
  { id: 'lexus', name: 'LEXUS', specialty: 'Takumi Detailing' },
  { id: 'bentley', name: 'BENTLEY', specialty: 'Crewe Luxury Care' },
  { id: 'ducati', name: 'DUCATI', specialty: 'Desmo & Brembo Lab' },
  { id: 'triumph', name: 'TRIUMPH', specialty: 'Hinckley Moto Lab' },
  { id: 'vespa', name: 'VESPA 946', specialty: 'Piaggio Atelier' },
];

function BrandEmblem({ id }: { id: string }) {
  switch (id) {
    case 'mercedes':
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="18" cy="18" r="15" />
          <circle cx="18" cy="18" r="12.5" strokeOpacity="0.35" strokeWidth="0.8" />
          <path d="M18 3.5V18M18 18L6.2 26.5M18 18L29.8 26.5" strokeLinecap="round" strokeWidth="1.7" />
        </svg>
      );
    case 'audi':
      return (
        <svg viewBox="0 0 56 24" className="w-12 h-7 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="12" r="7.5" />
          <circle cx="22.3" cy="12" r="7.5" />
          <circle cx="33.6" cy="12" r="7.5" />
          <circle cx="45" cy="12" r="7.5" />
        </svg>
      );
    case 'bmw':
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="18" cy="18" r="15" />
          <circle cx="18" cy="18" r="9.5" />
          <path d="M18 8.5V27.5M8.5 18H27.5" />
          <path d="M18 8.5A9.5 9.5 0 0 1 27.5 18H18V8.5Z" fill="currentColor" fillOpacity="0.28" stroke="none" />
          <path d="M8.5 18A9.5 9.5 0 0 0 18 27.5V18H8.5Z" fill="currentColor" fillOpacity="0.28" stroke="none" />
        </svg>
      );
    case 'porsche':
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 5H29V17C29 25.5 18 31.5 18 31.5C18 31.5 7 25.5 7 17V5Z" />
          <path d="M18 5V31.5M7 16.5H29" strokeOpacity="0.65" />
          <rect x="14.5" y="12.5" width="7" height="8" strokeWidth="1.2" fill="#0B0B0C" />
        </svg>
      );
    case 'landrover':
      return (
        <svg viewBox="0 0 48 28" className="w-10 h-7 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="24" cy="14" rx="20" ry="10" />
          <ellipse cx="24" cy="14" rx="17" ry="7.5" strokeOpacity="0.4" strokeWidth="0.9" />
          <path d="M11 14H37" strokeOpacity="0.5" />
        </svg>
      );
    case 'lexus':
      return (
        <svg viewBox="0 0 44 30" className="w-10 h-7 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.6">
          <ellipse cx="22" cy="15" rx="18" ry="11.5" />
          <path d="M19 8.5L14.5 20.5H29.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case 'bentley':
      return (
        <svg viewBox="0 0 52 28" className="w-11 h-7 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 10L17 12M4 14L17 15M7 18L17 17.5" strokeLinecap="round" />
          <path d="M50 10L35 12M48 14L35 15M45 18L35 17.5" strokeLinecap="round" />
          <circle cx="26" cy="14" r="7.5" fill="#0B0B0C" />
          <text x="26" y="17.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10" fontWeight="700">B</text>
        </svg>
      );
    case 'ducati':
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6C14 4.5 22 4.5 30 6L27 21C25 27.5 18 32 18 32C18 32 11 27.5 9 21L6 6Z" />
          <path d="M11 6L24 27.5" strokeWidth="2" strokeOpacity="0.75" />
        </svg>
      );
    case 'triumph':
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 7H31L18 31L5 7Z" strokeLinejoin="round" />
          <path d="M10 14C15 11.5 21 11.5 26 14" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#C8A96A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="18,4 31,11.5 31,24.5 18,32 5,24.5 5,11.5" />
          <circle cx="18" cy="18" r="5" />
        </svg>
      );
  }
}

export default function AutoGarageTemplate({ data }: AutoGarageTemplateProps) {
  const prefersReducedMotion = useReducedMotion();

  const [vehicleMode, setVehicleMode] = useState<'car' | 'moto'>('car');
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroOffsetY, setHeroOffsetY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Before/After Slider
  const [sliderPos, setSliderPos] = useState(52);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Gallery & Service Filters
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'car' | 'moto'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [serviceFilter, setServiceFilter] = useState<'all' | 'car' | 'moto'>('all');

  // Testimonials Carousel
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  // Booking / Quote Form
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    vehicleType: 'Ô tô',
    vehicleModel: '',
    service: '',
    preferredTime: 'Buổi sáng (08:30 – 11:30)',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 32);
      if (!prefersReducedMotion && y < 900) {
        setHeroOffsetY(Math.round(y * 0.16));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const activeMode = MODES[vehicleMode];
  const bookingBaseUrl = data.bookingUrl || '/apex-garage/booking';
  const blogBaseUrl = data.blogUrl || '/apex-garage/blog';
  const liveServices = data.ecosystemProps?.services || [];
  const liveResources = data.ecosystemProps?.resources || [];
  const livePosts = data.ecosystemProps?.posts || [];
  const reviews = data.reviews && data.reviews.length > 0 ? data.reviews : [];

  const phoneClean = (data.business.phone || '0909888911').replace(/\s+/g, '');

  const switchMode = (mode: 'car' | 'moto') => {
    if (mode === vehicleMode) return;
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
    setFormError(null);

    const trimmedName = leadForm.name.trim();
    const trimmedPhone = leadForm.phone.trim();
    const trimmedModel = leadForm.vehicleModel.trim();

    if (!trimmedName || !trimmedPhone || !trimmedModel) {
      setFormError('Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Dòng xe của bạn.');
      return;
    }

    if (!/^[0-9+\s.-]{9,15}$/.test(trimmedPhone)) {
      setFormError('Số điện thoại chưa đúng định dạng (cần 9–11 chữ số).');
      return;
    }

    setSubmitting(true);
    try {
      const matchedSvc = liveServices.find(s => s.name === leadForm.service);
      await fetch('/api/public/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId: data.ecosystemProps?.tenantId || data.business.id,
          tenantSlug: data.ecosystemProps?.tenantSlug,
          name: trimmedName,
          phone: trimmedPhone,
          service:
            leadForm.service ||
            (vehicleMode === 'car' ? 'Chăm sóc & Nâng cấp Ô tô' : 'Chăm sóc & Độ Mô tô PKL'),
          servicePrice: matchedSvc?.price || 0,
          vehicleType: leadForm.vehicleType,
          vehicleModel: `${trimmedModel} (${leadForm.preferredTime})`,
          source: 'Web Booking',
        }),
      });
      setSubmitted(true);
    } catch {
      setFormError('Không thể gửi yêu cầu lúc này. Vui lòng gọi trực tiếp Hotline hỗ trợ.');
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
            'Thi công trực tiếp bởi Kỹ thuật viên trưởng với vật tư chính hãng và quy trình kiểm định chất lượng tiêu chuẩn.';
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
            isFlagship: idx < 2,
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
          isFlagship: idx < 2,
        }));

  const filteredServices = allServices.filter(s => {
    if (serviceFilter === 'all') return true;
    if (serviceFilter === 'moto') return s.isMoto;
    return !s.isMoto;
  });

  const fadeUpProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  return (
    <div className="atelier-luxury-root min-h-dvh pb-16 md:pb-0 selection:bg-[#C8A96A] selection:text-[#0B0B0C] overflow-x-hidden">
      {/* Skip to content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C8A96A] focus:text-[#0B0B0C] focus:font-semibold"
      >
        Chuyển đến nội dung chính
      </a>

      {/* ====================================================================
          1. HEADER — Transparent over Hero, Solid + Blur on Scroll, No Wrapping
          ==================================================================== */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5'
            : 'bg-gradient-to-b from-[#0B0B0C]/85 via-[#0B0B0C]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
          {/* Left: Brand + Refined Mode Switcher */}
          <div className="flex items-center gap-5 min-w-0">
            <a
              href="#"
              className="flex items-center gap-2.5 whitespace-nowrap focus-visible:outline-[#C8A96A]"
            >
              <span className="w-2.5 h-2.5 rotate-45 border border-[#C8A96A] bg-[#C8A96A]/20 shrink-0" />
              <span className="text-sm sm:text-[15px] font-semibold tracking-[0.08em] uppercase text-[#F2EFE9]">
                {data.business.name}
              </span>
            </a>

            {/* Subtle Car / Moto Switcher (Desktop) */}
            <div
              role="group"
              aria-label="Chọn phân khu phương tiện"
              className="hidden xl:inline-flex items-center p-0.5 rounded bg-[#141416] border border-white/[0.08] shrink-0"
            >
              <button
                type="button"
                onClick={() => switchMode('car')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-[3px] text-xs font-medium whitespace-nowrap transition-all ${
                  vehicleMode === 'car'
                    ? 'bg-[#C8A96A] text-[#0B0B0C] font-semibold'
                    : 'text-[#A8A49C] hover:text-[#F2EFE9]'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Ô tô</span>
              </button>
              <button
                type="button"
                onClick={() => switchMode('moto')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-[3px] text-xs font-medium whitespace-nowrap transition-all ${
                  vehicleMode === 'moto'
                    ? 'bg-[#C8A96A] text-[#0B0B0C] font-semibold'
                    : 'text-[#A8A49C] hover:text-[#F2EFE9]'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Mô tô PKL</span>
              </button>
            </div>
          </div>

          {/* Center: Minimal Navigation (Single-line locked) */}
          <nav
            aria-label="Điều hướng chính"
            className="hidden lg:flex items-center gap-7 text-[13px] font-medium whitespace-nowrap"
          >
            <a href="#services" className="nav-link-luxury">
              Dịch vụ & Bảng giá
            </a>
            <a href="#process" className="nav-link-luxury">
              Quy trình
            </a>
            <a href="#work" className="nav-link-luxury">
              Thư viện xe
            </a>
            <a href="#reviews" className="nav-link-luxury">
              Đánh giá
            </a>
            <a href="#quote" className="nav-link-luxury">
              Nhận báo giá
            </a>
          </nav>

          {/* Right: Visible Phone + Primary Gold CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${phoneClean}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#F2EFE9] hover:text-[#C8A96A] transition-colors whitespace-nowrap luxury-numeral py-2 px-2.5 rounded border border-white/[0.08] lg:border-transparent bg-[#141416]/80 lg:bg-transparent"
              aria-label={`Gọi hotline ${data.business.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
              <span>{data.business.phone}</span>
            </a>

            <a
              href={buildBookingHref()}
              className="hidden sm:inline-flex items-center gap-2 btn-gold-primary text-xs sm:text-[13px] px-5 py-2.5 whitespace-nowrap"
            >
              <span>Đặt lịch ngay</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden w-10 h-10 rounded bg-[#141416] border border-white/[0.08] flex items-center justify-center text-[#F2EFE9] hover:border-[#C8A96A]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Elegant Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0B0B0C]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rotate-45 border border-[#C8A96A] bg-[#C8A96A]/20" />
                <span className="text-sm font-semibold tracking-[0.08em] uppercase text-[#F2EFE9]">
                  {data.business.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Đóng menu"
                className="w-10 h-10 rounded bg-[#141416] border border-white/[0.08] flex items-center justify-center text-[#F2EFE9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-auto py-8 space-y-6">
              <div className="eyebrow-label">CHỌN PHÂN KHU DỊCH VỤ</div>
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                <button
                  type="button"
                  onClick={() => switchMode('car')}
                  className={`py-3 px-4 rounded border text-xs font-semibold flex items-center justify-center gap-2 ${
                    vehicleMode === 'car'
                      ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A]'
                      : 'bg-[#141416] text-[#A8A49C] border-white/[0.08]'
                  }`}
                >
                  <Car className="w-4 h-4" />
                  <span>Ô tô & Siêu xe</span>
                </button>
                <button
                  type="button"
                  onClick={() => switchMode('moto')}
                  className={`py-3 px-4 rounded border text-xs font-semibold flex items-center justify-center gap-2 ${
                    vehicleMode === 'moto'
                      ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A]'
                      : 'bg-[#141416] text-[#A8A49C] border-white/[0.08]'
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  <span>Mô tô PKL</span>
                </button>
              </div>

              <nav className="flex flex-col space-y-4 pt-4">
                {[
                  { href: '#services', label: '01. Dịch vụ & Bảng giá' },
                  { href: '#process', label: '02. Quy trình kỹ thuật 5 bước' },
                  { href: '#work', label: '03. Thư viện xe đã hoàn thiện' },
                  { href: '#shield', label: '04. Đối chiếu Trước & Sau' },
                  { href: '#reviews', label: '05. Đánh giá từ chủ xe' },
                  { href: '#quote', label: '06. Nhận báo giá & Đặt lịch' },
                ].map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-luxury-display text-2xl sm:text-3xl text-[#F2EFE9] hover:text-[#C8A96A] transition-colors py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={buildBookingHref()}
                className="btn-gold-primary py-3.5 px-6 text-center text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Đặt lịch ngay</span>
              </a>
              <a
                href={`tel:${phoneClean}`}
                className="btn-outline-luxury py-3.5 px-6 text-center text-sm flex items-center justify-center gap-2 luxury-numeral"
              >
                <Phone className="w-4 h-4 text-[#C8A96A]" />
                <span>Gọi {data.business.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">
        {/* ====================================================================
            2. HERO — Full-Bleed Cinematic Workshop, Large Serif Headline, 2 CTAs
            ==================================================================== */}
        <section className="relative min-h-[92dvh] lg:min-h-[96dvh] w-full flex flex-col justify-end overflow-hidden border-b border-white/[0.08]">
          <AnimatePresence mode="wait">
            <motion.div
              key={vehicleMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 z-0 overflow-hidden"
            >
              <img
                src={activeMode.heroImage}
                alt={activeMode.machine}
                width={2000}
                height={1200}
                style={{
                  transform: prefersReducedMotion
                    ? 'none'
                    : `translate3d(0, ${heroOffsetY}px, 0) scale(1.04)`,
                }}
                className="w-full h-full object-cover object-center transition-transform duration-100 ease-out"
              />
              {/* Warm Charcoal Atmospheric Overlays for WCAG AAA Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/70 to-[#0B0B0C]/45" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#0B0B0C]/65 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 pt-32 pb-16 sm:pb-24">
            {/* Compact Mode Switcher on Mobile/Tablet (<1280px) */}
            <div className="flex xl:hidden items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => switchMode('car')}
                className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                  vehicleMode === 'car'
                    ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A]'
                    : 'bg-[#141416]/85 text-[#A8A49C] border-white/[0.12]'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Ô tô & Siêu xe</span>
              </button>
              <button
                type="button"
                onClick={() => switchMode('moto')}
                className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                  vehicleMode === 'moto'
                    ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A]'
                    : 'bg-[#141416]/85 text-[#A8A49C] border-white/[0.12]'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Mô tô PKL & Xe máy</span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={vehicleMode}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-[#C8A96A]" />
                  <span className="eyebrow-label">{activeMode.eyebrow}</span>
                </div>

                <h1
                  className="font-luxury-display text-[#F2EFE9]"
                  style={{ fontSize: 'var(--text-hero)' }}
                >
                  <span className="block">{activeMode.headlineLine1}</span>
                  <span className="block text-[#C8A96A] mt-1">{activeMode.headlineLine2}</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#A8A49C] leading-relaxed max-w-[60ch]">
                  {activeMode.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Hero CTAs & Subtle Scroll Indicator */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={buildBookingHref()}
                  className="btn-gold-primary px-7 py-4 text-sm inline-flex items-center gap-2.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Đặt lịch ngay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="btn-outline-luxury px-7 py-4 text-sm inline-flex items-center gap-2"
                >
                  <span>Xem bảng giá dịch vụ</span>
                </a>
              </div>

              <a
                href="#trust"
                className="hidden md:inline-flex items-center gap-2.5 text-xs text-[#A8A49C] hover:text-[#C8A96A] transition-colors"
              >
                <span className="uppercase tracking-[0.16em]">Khám phá xưởng</span>
                <ChevronDown className="w-4 h-4 text-[#C8A96A]" />
              </a>
            </div>
          </div>
        </section>

        {/* ====================================================================
            3. TRUST STRIP — 4 Key Facts in Large Serif Numerals + Small Labels
            ==================================================================== */}
        <section id="trust" className="bg-[#141416] border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
              {[
                {
                  num: '12+',
                  unit: 'Năm',
                  label: 'KINH NGHIỆM XE SANG & PKL',
                  sub: 'Đội ngũ Master Technician chứng chỉ quốc tế',
                },
                {
                  num: '4.800',
                  unit: '+',
                  label: 'PHƯƠNG TIỆN ĐÃ HOÀN THIỆN',
                  sub: 'Lưu trữ hồ sơ chăm sóc định kỳ theo ODO',
                },
                {
                  num: '10',
                  unit: 'Năm',
                  label: 'BẢO HÀNH ĐIỆN TỬ',
                  sub: 'Cam kết màng PPF XPEL & Ceramic chính hãng',
                },
                {
                  num: '99.6',
                  unit: 'GU',
                  label: 'ĐỘ BÓNG SƠN TIÊU CHUẨN',
                  sub: 'Đo kiểm bằng máy quang phổ trước khi bàn giao',
                },
              ].map((stat, i) => (
                <div key={stat.label} className={i > 0 ? 'lg:pl-10' : 'lg:pr-10'}>
                  <div className="font-luxury-display luxury-numeral text-3xl sm:text-5xl text-[#F2EFE9] flex items-baseline gap-1.5">
                    <span>{stat.num}</span>
                    <span className="text-xl sm:text-2xl text-[#C8A96A]">{stat.unit}</span>
                  </div>
                  <div className="mt-3 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C8A96A]">
                    {stat.label}
                  </div>
                  <p className="mt-1 text-xs text-[#A8A49C] leading-relaxed">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. SERVICES — Asymmetric Editorial Grid (2 Flagships + 4 Specialists)
            ==================================================================== */}
        <section id="services" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              {...fadeUpProps}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-6 h-px bg-[#C8A96A]" />
                  <span className="eyebrow-label">DANH MỤC KỸ THUẬT & BẢNG GIÁ NIÊM YẾT</span>
                </div>
                <h2
                  className="font-luxury-display text-[#F2EFE9]"
                  style={{ fontSize: 'var(--text-h2)' }}
                >
                  Dịch Vụ & Bảng Giá Trọn Gói
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'Tất cả dịch vụ' },
                  { id: 'car', label: 'Dịch vụ Ô tô' },
                  { id: 'moto', label: 'Dịch vụ Mô tô PKL' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setServiceFilter(tab.id as any)}
                    className={`px-4 py-2 rounded text-xs font-medium transition-all border ${
                      serviceFilter === tab.id
                        ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A] font-semibold'
                        : 'bg-[#141416] text-[#A8A49C] border-white/[0.08] hover:border-white/25 hover:text-[#F2EFE9]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Asymmetric 12-Column Grid:
                When showing 'all' (6 items): Top 2 Flagship packages take 6 cols each (12 cols total),
                Bottom 4 Specialist packages take 3 cols each on desktop (12 cols total).
                When filtered (2 or 4 items): 6 cols each so every row is 100% balanced. */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {filteredServices.map((svc, idx) => {
                const isTopRowFlagship = serviceFilter === 'all' && idx < 2;
                const colSpanClass =
                  serviceFilter === 'all'
                    ? isTopRowFlagship
                      ? 'md:col-span-6'
                      : 'md:col-span-6 lg:col-span-3'
                    : 'md:col-span-6';

                return (
                  <motion.article
                    key={svc.id}
                    {...fadeUpProps}
                    className={`${colSpanClass} luxury-card group relative overflow-hidden flex flex-col justify-between`}
                  >
                    <div>
                      {/* Image Container — consistent aspect ratio per tier */}
                      <div
                        className={`relative w-full overflow-hidden bg-[#0B0B0C] ${
                          isTopRowFlagship ? 'aspect-[16/9]' : 'aspect-[16/10]'
                        }`}
                      >
                        <img
                          src={svc.image}
                          alt={svc.title}
                          loading="lazy"
                          width={800}
                          height={500}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-[#0B0B0C]/40" />

                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded bg-[#0B0B0C]/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-medium text-[#F2EFE9] inline-flex items-center gap-1.5">
                            {svc.isMoto ? (
                              <Bike className="w-3.5 h-3.5 text-[#C8A96A]" />
                            ) : (
                              <Car className="w-3.5 h-3.5 text-[#C8A96A]" />
                            )}
                            <span>{svc.isMoto ? 'Mô tô PKL' : 'Ô tô'}</span>
                          </span>

                          <span className="px-2.5 py-1 rounded bg-[#0B0B0C]/85 backdrop-blur-md border border-white/[0.1] text-[11px] text-[#A8A49C] luxury-numeral inline-flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#C8A96A]" />
                            <span>{svc.duration}</span>
                          </span>
                        </div>
                      </div>

                      {/* Card Copy */}
                      <div className="p-6">
                        {isTopRowFlagship && (
                          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A] mb-2">
                            GÓI CHỦ ĐẠO · FLAGSHIP SERVICE
                          </div>
                        )}
                        <h3
                          className={`font-luxury-display text-[#F2EFE9] group-hover:text-[#C8A96A] transition-colors line-clamp-2 min-h-[3.2rem] ${
                            isTopRowFlagship ? 'text-xl sm:text-2xl' : 'text-lg'
                          }`}
                        >
                          {svc.title}
                        </h3>
                        <p className="mt-2.5 text-xs sm:text-sm text-[#A8A49C] leading-relaxed line-clamp-2 min-h-[2.6rem]">
                          {svc.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer with Price + Gold Underline Reveal */}
                    <div className="px-6 pb-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3 relative">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.12em] text-[#6F6B64] block">
                          Chi phí trọn gói
                        </span>
                        <span className="text-lg sm:text-xl font-semibold text-[#F2EFE9] luxury-numeral">
                          {svc.price}
                        </span>
                      </div>

                      <a
                        href={buildBookingHref({
                          serviceId: svc.id,
                          serviceName: svc.title,
                        })}
                        className="btn-gold-primary px-4 py-2.5 text-xs inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <span>Đặt lịch ngay</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {/* Hover Gold Underline */}
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A96A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            5. PROCESS — 5 Numbered Steps with Thin Architectural Connector Line
            ==================================================================== */}
        <section id="process" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-[#141416] border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div {...fadeUpProps} className="max-w-2xl mb-16">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-[#C8A96A]" />
                <span className="eyebrow-label">QUY TRÌNH KỸ THUẬT MINH BẠCH</span>
              </div>
              <h2
                className="font-luxury-display text-[#F2EFE9]"
                style={{ fontSize: 'var(--text-h2)' }}
              >
                5 Bước Chuẩn Mực Tại Xưởng
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#A8A49C]">
                Mọi chiếc xe khi vào xưởng đều trải qua quy trình kiểm tra, báo giá trước khi làm và nghiệm thu chất lượng nghiêm ngặt.
              </p>
            </motion.div>

            <div className="relative">
              {/* Thin Horizontal Connector Line on Desktop */}
              <div className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-white/[0.08]" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {PROCESS_STEPS.map(item => (
                  <motion.div key={item.step} {...fadeUpProps} className="relative">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="w-12 h-12 rounded bg-[#0B0B0C] border border-[#C8A96A]/50 text-[#C8A96A] font-luxury-display luxury-numeral text-lg flex items-center justify-center relative z-10">
                        {item.step}
                      </span>
                      <div className="lg:hidden flex-1 h-px bg-white/[0.08]" />
                    </div>
                    <h3 className="text-base font-semibold text-[#F2EFE9] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            6. CURATED GALLERY & BEFORE/AFTER COMPARISON
            ==================================================================== */}
        <section id="work" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              {...fadeUpProps}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-6 h-px bg-[#C8A96A]" />
                  <span className="eyebrow-label">HỒ SƠ BÀN GIAO THỰC TẾ</span>
                </div>
                <h2
                  className="font-luxury-display text-[#F2EFE9]"
                  style={{ fontSize: 'var(--text-h2)' }}
                >
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
                    className={`px-4 py-2 rounded text-xs font-medium transition-all border ${
                      galleryFilter === tab.id
                        ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A] font-semibold'
                        : 'bg-[#141416] text-[#A8A49C] border-white/[0.08] hover:border-white/25 hover:text-[#F2EFE9]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Uniform 3-Column Curated Grid — No Truncated Text, Consistent 16:10 Crop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryList.map((item, idx) => (
                <motion.div
                  key={`${item.caption}-${idx}`}
                  {...fadeUpProps}
                  onClick={() => setActiveLightbox(item)}
                  className="luxury-card group overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0B0C]">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                      width={700}
                      height={440}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-[#0B0B0C]/35" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#0B0B0C]/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-medium text-[#F2EFE9] inline-flex items-center gap-1.5">
                        {item.category === 'moto' ? (
                          <Bike className="w-3.5 h-3.5 text-[#C8A96A]" />
                        ) : (
                          <Car className="w-3.5 h-3.5 text-[#C8A96A]" />
                        )}
                        <span>{item.category === 'moto' ? 'Mô tô PKL' : 'Ô tô'}</span>
                      </span>
                      {item.packagePrice && (
                        <span className="px-2.5 py-1 rounded bg-[#0B0B0C]/90 border border-[#C8A96A]/40 text-[#C8A96A] text-xs font-semibold luxury-numeral">
                          {item.packagePrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs text-[#A8A49C] mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span>{item.ownerName}</span>
                        <span className="text-[#6F6B64]">•</span>
                        <span className="text-[#C8A96A] luxury-numeral">
                          Hoàn thiện: {item.completionTime || 'Trong ngày'}
                        </span>
                      </div>
                      <h3 className="font-luxury-display text-lg sm:text-xl text-[#F2EFE9] group-hover:text-[#C8A96A] transition-colors">
                        {item.vehicleModel || item.caption}
                      </h3>
                    </div>

                    <div className="w-9 h-9 rounded bg-[#0B0B0C] group-hover:bg-[#C8A96A] border border-white/[0.1] group-hover:border-[#C8A96A] flex items-center justify-center transition-all shrink-0 text-[#F2EFE9] group-hover:text-[#0B0B0C]">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Before / After Surface Inspection */}
            <div id="shield" className="mt-20 pt-20 border-t border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="eyebrow-label block mb-2">KIỂM ĐỊNH BỀ MẶT SƠN QUANG HỌC</span>
                  <h3 className="font-luxury-display text-2xl sm:text-3xl text-[#F2EFE9]">
                    Đối Chiếu Trước & Sau Khi Hiệu Chỉnh Sơn – Phủ Ceramic 10H
                  </h3>
                </div>
                <span className="text-xs text-[#A8A49C]">
                  Kéo thanh trượt ngang để đối chiếu bề mặt sơn
                </span>
              </div>

              <div
                ref={sliderRef}
                onPointerMove={e => {
                  if (e.buttons === 1 || e.pointerType !== 'mouse') {
                    handleSliderMove(e.clientX);
                  }
                }}
                onClick={e => handleSliderMove(e.clientX)}
                className="relative h-[340px] sm:h-[480px] w-full rounded-md overflow-hidden border border-white/[0.1] cursor-ew-resize select-none"
              >
                {/* AFTER */}
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2000&auto=format&fit=crop"
                  alt="Sau khi hiệu chỉnh sơn và phủ Ceramic 10H"
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover object-center pointer-events-none brightness-105 contrast-110"
                />
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded bg-[#0B0B0C]/90 border border-[#C8A96A]/50 text-[#C8A96A] font-semibold text-xs luxury-numeral">
                  SAU KHI LÀM · ĐỘ BÓNG GƯƠNG 99.6 GU
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
                    alt="Trước khi xử lý bề mặt sơn"
                    loading="lazy"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover object-center pointer-events-none brightness-70 contrast-75 saturate-50 blur-[0.7px]"
                  />
                  <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded bg-[#0B0B0C]/90 border border-white/[0.15] text-[#A8A49C] font-medium text-xs">
                    TRƯỚC KHI LÀM · SƠN XƯỚC XOÁY & OXY HÓA
                  </div>
                </div>

                {/* Gold Hairline Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-px bg-[#C8A96A]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded bg-[#0B0B0C] text-[#C8A96A] border border-[#C8A96A] flex items-center justify-center shadow-lg">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            7. BRANDS WE SERVE — Infinite Horizontal Logo Marquee Roll
            ==================================================================== */}
        <section className="py-14 sm:py-18 bg-[#141416] border-b border-white/[0.08] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 mb-9 text-center">
            <span className="eyebrow-label">CHUYÊN GIA CHO CÁC DÒNG XE CHÂU ÂU & MÔ TÔ PKL</span>
          </div>

          <div className="luxury-marquee-mask">
            <div className="luxury-marquee-track gap-5 px-2.5">
              {[...BRANDS_SERVED, ...BRANDS_SERVED].map((brand, idx) => (
                <div
                  key={`${brand.id}-${idx}`}
                  className="w-[210px] sm:w-[230px] shrink-0 py-5 px-5 rounded-md border border-white/[0.07] bg-[#0B0B0C]/80 hover:border-[#C8A96A]/50 hover:bg-[#1C1C1F] transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded bg-[#141416] border border-white/[0.06] group-hover:border-[#C8A96A]/40 flex items-center justify-center shrink-0 transition-colors">
                    <BrandEmblem id={brand.id} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold tracking-[0.14em] text-[#F2EFE9] group-hover:text-[#C8A96A] transition-colors truncate">
                      {brand.name}
                    </div>
                    <div className="text-[11px] text-[#6F6B64] truncate mt-0.5">
                      {brand.specialty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            8. TESTIMONIALS — Editorial Pull-Quote Carousel
            ==================================================================== */}
        {reviews.length > 0 && (
          <section id="reviews" className="py-20 sm:py-28 px-5 sm:px-8 border-b border-white/[0.08]">
            <div className="max-w-[1024px] mx-auto">
              <div className="flex items-center justify-between mb-10">
                <div className="inline-flex items-center gap-3">
                  <span className="w-6 h-px bg-[#C8A96A]" />
                  <span className="eyebrow-label">ĐÁNH GIÁ TỪ CHỦ XE</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveReviewIdx(i => (i - 1 + reviews.length) % reviews.length)
                    }
                    aria-label="Đánh giá trước"
                    className="w-10 h-10 rounded border border-white/[0.1] bg-[#141416] hover:border-[#C8A96A] text-[#F2EFE9] flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReviewIdx(i => (i + 1) % reviews.length)}
                    aria-label="Đánh giá tiếp theo"
                    className="w-10 h-10 rounded border border-white/[0.1] bg-[#141416] hover:border-[#C8A96A] text-[#F2EFE9] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={reviews[activeReviewIdx].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="p-8 sm:p-12 rounded-md bg-[#141416] border border-white/[0.08]"
                >
                  <blockquote className="font-luxury-display text-xl sm:text-3xl text-[#F2EFE9] leading-relaxed">
                    “{reviews[activeReviewIdx].text}”
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-[#F2EFE9]">
                        {reviews[activeReviewIdx].author}
                      </div>
                      <div className="text-xs text-[#C8A96A] mt-0.5">
                        {reviews[activeReviewIdx].vehicle}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {reviews.map((r, idx) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setActiveReviewIdx(idx)}
                          aria-label={`Xem đánh giá ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === activeReviewIdx
                              ? 'w-8 bg-[#C8A96A]'
                              : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* ====================================================================
            9. BOOKING & QUOTE SECTION — Workshop Status + Form + Zalo/Phone
            ==================================================================== */}
        <section id="quote" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 bg-[#141416] border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Workshop Areas (No Truncation) + Direct Zalo / Hotline */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-6 h-px bg-[#C8A96A]" />
                  <span className="eyebrow-label">ĐẶT LỊCH HẸN & TIẾP NHẬN XE</span>
                </div>
                <h2
                  className="font-luxury-display text-[#F2EFE9]"
                  style={{ fontSize: 'var(--text-h2)' }}
                >
                  Đặt Lịch Trực Tuyến Không Cần Chờ Đợi
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#A8A49C] leading-relaxed">
                  Chọn trước khu vực kỹ thuật hoặc chuyên viên phụ trách. Phòng sạch PPF và cầu nâng bảo dưỡng sẽ được chuẩn bị sẵn sàng trước giờ hẹn của bạn.
                </p>
              </div>

              {/* Workshop Areas Grid — Full Text Visible */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(liveResources.length > 0
                  ? liveResources
                  : [
                      {
                        id: 'b1',
                        name: 'Phòng Sạch PPF & Ceramic',
                        role_or_capacity: 'Tiêu chuẩn chống bụi ISO · Ô tô & Siêu xe',
                      },
                      {
                        id: 'b2',
                        name: 'Khu Bảo Dưỡng & Chẩn Đoán Điện Tử',
                        role_or_capacity: 'Cầu nâng 4 tấn · Máy chẩn đoán chuyên hãng',
                      },
                      {
                        id: 'b3',
                        name: 'Khu Chăm Sóc & Độ Mô Tô PKL',
                        role_or_capacity: 'Bàn nâng thủy lực · Ducati, BMW, SH350i',
                      },
                      {
                        id: 'b4',
                        name: 'Kỹ Thuật Viên Trưởng Hoàng Nam',
                        role_or_capacity: '12 năm kinh nghiệm Ô tô Châu Âu & PKL',
                      },
                    ]
                ).map(bay => (
                  <a
                    key={bay.id}
                    href={buildBookingHref({ resourceId: bay.id })}
                    className="group p-5 rounded-md bg-[#0B0B0C] border border-white/[0.08] hover:border-[#C8A96A] transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#1E3A2F] text-[#76B59B] text-[11px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76B59B]" />
                        <span>Đang nhận lịch</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#6F6B64] group-hover:text-[#C8A96A] transition-colors" />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-semibold text-[#F2EFE9] group-hover:text-[#C8A96A] transition-colors leading-snug">
                        {bay.name.replace(/^Khoang\s+\d+:\s*/i, '')}
                      </h3>
                      <p className="text-xs text-[#A8A49C] mt-1 leading-relaxed">
                        {bay.role_or_capacity}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct Call & Zalo Concierge Alternatives */}
              <div className="p-6 rounded-md bg-[#0B0B0C] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                    CẦN TƯ VẤN KỸ THUẬT KHẨN CẤP?
                  </div>
                  <p className="text-xs text-[#A8A49C] mt-1">
                    Kết nối trực tiếp với Cố vấn Dịch vụ qua Hotline hoặc gửi ảnh tình trạng xe qua Zalo.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={`tel:${phoneClean}`}
                    className="btn-outline-luxury px-4 py-2.5 text-xs inline-flex items-center gap-1.5 luxury-numeral"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
                    <span>{data.business.phone}</span>
                  </a>
                  <a
                    href={`https://zalo.me/${phoneClean}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold-primary px-4 py-2.5 text-xs inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Nhắn Zalo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Quote & Appointment Form */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-10 rounded-md bg-[#0B0B0C] border border-white/[0.1]">
                <div className="pb-5 mb-6 border-b border-white/[0.08]">
                  <span className="eyebrow-label block mb-1.5">TƯ VẤN & BÁO GIÁ 1:1</span>
                  <h3 className="font-luxury-display text-2xl sm:text-3xl text-[#F2EFE9]">
                    Nhận Báo Giá & Đặt Lịch Nhanh
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-12 h-12 rounded bg-[#1E3A2F] text-[#76B59B] border border-[#76B59B]/30 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-luxury-display text-2xl text-[#F2EFE9]">
                      Yêu cầu của bạn đã được ghi nhận
                    </h4>
                    <p className="text-sm text-[#A8A49C] max-w-md mx-auto leading-relaxed">
                      Cảm ơn <strong className="text-[#F2EFE9]">{leadForm.name}</strong>. Cố vấn kỹ thuật sẽ liên hệ qua số{' '}
                      <strong className="text-[#F2EFE9] luxury-numeral">{leadForm.phone}</strong> trong ít phút để báo giá chi tiết cho xe{' '}
                      <strong className="text-[#C8A96A]">{leadForm.vehicleModel}</strong>.
                    </p>
                    <div className="pt-4 flex flex-wrap justify-center gap-3">
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
                            preferredTime: 'Buổi sáng (08:30 – 11:30)',
                          });
                        }}
                        className="btn-outline-luxury px-5 py-2.5 text-xs"
                      >
                        Gửi yêu cầu khác
                      </button>
                      <a
                        href={buildBookingHref()}
                        className="btn-gold-primary px-5 py-2.5 text-xs inline-flex items-center gap-1.5"
                      >
                        <span>Chọn giờ hẹn trực tiếp</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} noValidate className="space-y-4">
                    {formError && (
                      <div
                        role="alert"
                        className="p-3.5 rounded bg-red-950/60 border border-red-500/40 text-xs text-red-200"
                      >
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                      {['Ô tô', 'Xe máy / Mô tô PKL'].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setLeadForm({ ...leadForm, vehicleType: type })}
                          className={`py-3 px-3 rounded text-xs font-medium border transition-all flex items-center justify-center gap-2 ${
                            leadForm.vehicleType === type
                              ? 'bg-[#C8A96A] text-[#0B0B0C] border-[#C8A96A] font-semibold'
                              : 'bg-[#141416] text-[#A8A49C] border-white/[0.08] hover:text-[#F2EFE9]'
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
                      <label
                        htmlFor="garage-vehicle-model"
                        className="block text-xs font-medium text-[#F2EFE9] mb-1.5"
                      >
                        Dòng xe & Đời xe <span className="text-[#C8A96A]">*</span>
                      </label>
                      <input
                        id="garage-vehicle-model"
                        required
                        type="text"
                        value={leadForm.vehicleModel}
                        onChange={e => setLeadForm({ ...leadForm, vehicleModel: e.target.value })}
                        placeholder={activeMode.placeholderModel}
                        className="w-full px-4 py-3 rounded bg-[#141416] border border-white/[0.1] focus:border-[#C8A96A] text-[#F2EFE9] placeholder:text-[#6F6B64] text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="garage-customer-name"
                          className="block text-xs font-medium text-[#F2EFE9] mb-1.5"
                        >
                          Họ và tên <span className="text-[#C8A96A]">*</span>
                        </label>
                        <input
                          id="garage-customer-name"
                          required
                          type="text"
                          value={leadForm.name}
                          onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                          placeholder="Nguyễn Hoàng Minh"
                          className="w-full px-4 py-3 rounded bg-[#141416] border border-white/[0.1] focus:border-[#C8A96A] text-[#F2EFE9] placeholder:text-[#6F6B64] text-sm outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="garage-customer-phone"
                          className="block text-xs font-medium text-[#F2EFE9] mb-1.5"
                        >
                          Số điện thoại <span className="text-[#C8A96A]">*</span>
                        </label>
                        <input
                          id="garage-customer-phone"
                          required
                          type="tel"
                          value={leadForm.phone}
                          onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
                          placeholder="0909 888 911"
                          className="w-full px-4 py-3 rounded bg-[#141416] border border-white/[0.1] focus:border-[#C8A96A] text-[#F2EFE9] placeholder:text-[#6F6B64] text-sm outline-none transition-colors luxury-numeral"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="garage-service-select"
                          className="block text-xs font-medium text-[#F2EFE9] mb-1.5"
                        >
                          Dịch vụ quan tâm
                        </label>
                        <select
                          id="garage-service-select"
                          value={leadForm.service}
                          onChange={e => setLeadForm({ ...leadForm, service: e.target.value })}
                          className="w-full px-3.5 py-3 rounded bg-[#141416] border border-white/[0.1] focus:border-[#C8A96A] text-[#F2EFE9] text-sm outline-none transition-colors"
                        >
                          <option value="">-- Chọn hạng mục dịch vụ --</option>
                          {allServices.map(s => (
                            <option key={s.id} value={s.title}>
                              {s.title} ({s.price})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="garage-preferred-time"
                          className="block text-xs font-medium text-[#F2EFE9] mb-1.5"
                        >
                          Khung giờ dự kiến
                        </label>
                        <select
                          id="garage-preferred-time"
                          value={leadForm.preferredTime}
                          onChange={e =>
                            setLeadForm({ ...leadForm, preferredTime: e.target.value })
                          }
                          className="w-full px-3.5 py-3 rounded bg-[#141416] border border-white/[0.1] focus:border-[#C8A96A] text-[#F2EFE9] text-sm outline-none transition-colors"
                        >
                          <option value="Buổi sáng (08:30 – 11:30)">
                            Buổi sáng (08:30 – 11:30)
                          </option>
                          <option value="Buổi chiều (13:30 – 17:00)">
                            Buổi chiều (13:30 – 17:00)
                          </option>
                          <option value="Cuối tuần (Thứ 7 / Chủ Nhật)">
                            Cuối tuần (Thứ 7 / Chủ Nhật)
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 btn-gold-primary text-sm flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
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

        {/* ====================================================================
            10. TECHNICAL JOURNAL (AI CMS ARTICLES)
            ==================================================================== */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 border-b border-white/[0.08]">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-6 h-px bg-[#C8A96A]" />
                  <span className="eyebrow-label">CHUYÊN SAN KỸ THUẬT & CHĂM SÓC XE</span>
                </div>
                <h2
                  className="font-luxury-display text-[#F2EFE9]"
                  style={{ fontSize: 'var(--text-h2)' }}
                >
                  Cẩm Nang Bảo Dưỡng & Detailing
                </h2>
              </div>
              <a
                href={blogBaseUrl}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C8A96A] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Xem toàn bộ bài viết</span>
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
                  className="luxury-card group overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0B0C]">
                    <img
                      src={
                        post.thumbnail_url ||
                        'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop'
                      }
                      alt={post.title}
                      loading="lazy"
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h3 className="font-luxury-display text-lg text-[#F2EFE9] group-hover:text-[#C8A96A] transition-colors line-clamp-2 min-h-[3.25rem]">
                      {post.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#A8A49C] group-hover:text-[#C8A96A] shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          11. LUXURY FOOTER — Address, Hours, Direct Links, Legal
          ==================================================================== */}
      <footer className="bg-[#0B0B0C] pt-16 pb-12 px-5 sm:px-8 text-xs text-[#A8A49C]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
            {/* Col 1: Brand & Positioning */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rotate-45 border border-[#C8A96A] bg-[#C8A96A]/20" />
                <span className="text-sm font-semibold tracking-[0.08em] uppercase text-[#F2EFE9]">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-[#A8A49C] leading-relaxed max-w-sm">
                Xưởng dịch vụ chăm sóc Detailing, dán phim bảo vệ sơn PPF, phủ Ceramic 10H và bảo dưỡng kỹ thuật tiêu chuẩn Châu Âu dành cho Ô tô hạng sang & Mô tô phân khối lớn.
              </p>
            </div>

            {/* Col 2: Address & Map Link */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">
                ĐỊA CHỈ XƯỞNG DỊCH VỤ
              </div>
              <p className="text-xs text-[#F2EFE9] leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <div className="pt-1 flex items-center gap-4">
                <a
                  href={`tel:${phoneClean}`}
                  className="text-xs text-[#F2EFE9] hover:text-[#C8A96A] font-semibold inline-flex items-center gap-1.5 luxury-numeral"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
                  <span>{data.business.phone}</span>
                </a>
                <a
                  href={`https://zalo.me/${phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#C8A96A] hover:underline inline-flex items-center gap-1"
                >
                  <span>Zalo Official</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 3: Opening Hours & Quick Booking */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">
                GIỜ MỞ CỬA & TIẾP NHẬN XE
              </div>
              <p className="text-xs text-[#F2EFE9] luxury-numeral">
                Thứ 2 – Thứ 7: 08:00 – 19:30
              </p>
              <p className="text-xs text-[#A8A49C] luxury-numeral">
                Chủ Nhật: 08:30 – 17:30 (Ưu tiên xe đặt lịch trước)
              </p>
              <div className="pt-2">
                <a
                  href={buildBookingHref()}
                  className="btn-gold-primary px-5 py-2.5 text-xs inline-flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Đặt lịch hẹn trực tuyến</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#6F6B64]">
            <div>
              © {new Date().getFullYear()} {data.business.name}. Bảo lưu mọi quyền.
            </div>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-[#A8A49C]">
                Chính sách bảo hành điện tử
              </a>
              <a href="#process" className="hover:text-[#A8A49C]">
                Tiêu chuẩn kỹ thuật
              </a>
              <a href={bookingBaseUrl} className="hover:text-[#A8A49C]">
                Đặt lịch trực tuyến
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          12. MOBILE STICKY BOTTOM BAR (Touch Targets >= 44px)
          ==================================================================== */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B0B0C]/95 backdrop-blur-lg border-t border-white/[0.1] px-4 py-2.5 grid grid-cols-12 gap-2.5">
        <a
          href={`tel:${phoneClean}`}
          className="col-span-4 min-h-[44px] rounded bg-[#141416] border border-white/[0.12] text-[#F2EFE9] text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
          <span>Gọi điện</span>
        </a>
        <a
          href={`https://zalo.me/${phoneClean}`}
          target="_blank"
          rel="noreferrer"
          className="col-span-3 min-h-[44px] rounded bg-[#141416] border border-white/[0.12] text-[#F2EFE9] text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#C8A96A]" />
          <span>Zalo</span>
        </a>
        <a
          href={buildBookingHref()}
          className="col-span-5 min-h-[44px] btn-gold-primary text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Đặt lịch ngay</span>
        </a>
      </div>

      {/* LIGHTBOX MODAL XEM CHI TIẾT HỒ SƠ XE */}
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
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full rounded-md bg-[#141416] border border-white/[0.12] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
            >
              <div className="lg:col-span-7 h-[280px] sm:h-[420px] bg-[#0B0B0C] relative">
                <img
                  src={activeLightbox.image.src}
                  alt={activeLightbox.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="eyebrow-label">HỒ SƠ KỸ THUẬT HOÀN THIỆN</span>
                    <button
                      type="button"
                      onClick={() => setActiveLightbox(null)}
                      aria-label="Đóng cửa sổ"
                      className="w-8 h-8 rounded bg-[#0B0B0C] border border-white/[0.1] flex items-center justify-center text-[#F2EFE9] hover:border-[#C8A96A]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-luxury-display text-2xl text-[#F2EFE9] mb-2">
                    {activeLightbox.vehicleModel || activeLightbox.caption}
                  </h3>
                  <div className="text-xs text-[#A8A49C] mb-5 luxury-numeral">
                    {activeLightbox.ownerName} · Thời gian: {activeLightbox.completionTime} ·{' '}
                    <span className="text-[#C8A96A] font-semibold">
                      {activeLightbox.packagePrice}
                    </span>
                  </div>

                  {activeLightbox.workSummary && (
                    <div className="space-y-2.5 border-t border-white/[0.08] pt-5">
                      {activeLightbox.workSummary.map((s, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2EFE9]">
                          <Check className="w-4 h-4 text-[#C8A96A] shrink-0 mt-0.5" />
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
                  className="mt-8 w-full py-3.5 btn-gold-primary text-xs flex items-center justify-center gap-2"
                >
                  <span>Đặt lịch gói tương tự</span>
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
