'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BedDouble,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Dumbbell,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
  Waves,
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
    CORE_FEATURES,
    ROOM_LIST,
    ABOUT_SECTION,
    STAT_COUNTERS,
    TEAM_MEMBERS,
    HOSPITALITY_SERVICES,
    EXPERIENCE_PROGRESS,
    TESTIMONIALS,
    WORKFLOW_STEPS,
    LATEST_NEWS,
    PARTNER_LOGOS,
  } = mockData;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [appointmentForm, setAppointmentForm] = useState({
    fullName: '',
    email: '',
    topic: 'Đặt phòng nghỉ dưỡng / Công tác',
    message: '',
  });
  const [appointmentSent, setAppointmentSent] = useState(false);

  const topRowRooms = useMemo(
    () => ROOM_LIST.filter((r) => r.featuredRow === 'top'),
    [ROOM_LIST]
  );
  const bottomRowRooms = useMemo(
    () => ROOM_LIST.filter((r) => r.featuredRow === 'bottom'),
    [ROOM_LIST]
  );

  const featuredLeftService = useMemo(
    () =>
      HOSPITALITY_SERVICES.find((s) => s.isFeaturedLeft) ||
      HOSPITALITY_SERVICES[0],
    [HOSPITALITY_SERVICES]
  );
  const gridServices = useMemo(
    () => HOSPITALITY_SERVICES.filter((s) => !s.isFeaturedLeft),
    [HOSPITALITY_SERVICES]
  );

  const activeTestimonial =
    TESTIMONIALS[activeTestimonialIdx] || TESTIMONIALS[0];

  const selectedRoom = useMemo(
    () => ROOM_LIST.find((r) => r.id === selectedRoomId) || null,
    [ROOM_LIST, selectedRoomId]
  );

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentForm.fullName.trim() || !appointmentForm.email.trim()) {
      return;
    }
    setAppointmentSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#178582] selection:text-white">
      {/* 1. TOPBAR + FLOATING WHITE PILL NAVBAR OVER DEEP TEAL-NAVY HEADER */}
      <div id="trang-chu" className="bg-[#0b2530] text-white">
        {/* Top Thin Bar */}
        <div className="border-b border-white/10 bg-[#081c24] text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 lg:px-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center gap-1.5 transition hover:text-[#23b5b1]"
              >
                <Phone className="h-3.5 w-3.5 text-[#178582]" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-1.5 transition hover:text-[#23b5b1]"
              >
                <Mail className="h-3.5 w-3.5 text-[#178582]" />
                <span>{BRAND_INFO.email}</span>
              </a>
              <span className="hidden items-center gap-1.5 md:flex">
                <Clock className="h-3.5 w-3.5 text-[#178582]" />
                <span>{BRAND_INFO.workingHours}</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
              <a href="#lien-he" className="hover:text-[#23b5b1]">
                FB
              </a>
              <span>•</span>
              <a href="#lien-he" className="hover:text-[#23b5b1]">
                IG
              </a>
              <span>•</span>
              <a href="#lien-he" className="hover:text-[#23b5b1]">
                IN
              </a>
            </div>
          </div>
        </div>

        {/* Main Header with Left Circular Wave MONA Logo + Floating White Pill Navbar */}
        <header className="sticky top-0 z-50 bg-[#0b2530]/95 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
            {/* Left Circular Wave Logo "MONA" */}
            <a href="#trang-chu" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#23b5b1] to-[#178582] text-white shadow-lg ring-2 ring-white/20">
                <Waves className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-widest text-white">
                  {BRAND_INFO.shortLogo}
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#23b5b1]">
                  Elevate Hospitality
                </span>
              </div>
            </a>

            {/* White Rounded-Full Pill Navbar (Matching XD024-xay_dung_24.png) */}
            <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-1.5 text-slate-800 shadow-xl lg:flex">
              <nav className="flex items-center gap-1 pl-3">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                      idx === 0
                        ? 'text-[#178582]'
                        : 'text-slate-700 hover:text-[#178582]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mx-1 h-5 w-[1px] bg-slate-200" />

              <button
                type="button"
                aria-label="Tìm kiếm hạng phòng"
                onClick={() => {
                  const el = document.getElementById('danh-sach-phong');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#178582]"
              >
                <Search className="h-4 w-4" />
              </button>

              <a
                href="#dat-lich-hen"
                className="inline-flex items-center gap-2 rounded-full bg-[#178582] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#126967]"
              >
                <span>ĐẶT LỊCH HẸN</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mx-4 mt-3 rounded-2xl bg-white p-4 text-slate-800 shadow-2xl lg:hidden">
              <div className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100 hover:text-[#178582]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#dat-lich-hen"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#178582] py-3 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span>ĐẶT LỊCH HẸN</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </header>

        {/* 2. HERO BANNER (Dark Teal Abstract Waves + Left Bold Typography + Right Circular Teal-Ring Portrait) */}
        <section className="relative overflow-hidden pb-20 pt-8 lg:pb-28 lg:pt-14">
          {/* Abstract Wave Background */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <img
              src={HERO_DATA.backgroundWaveImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b2530] via-[#0e3542]/95 to-[#135359]/90" />

          {/* Decorative Wave Circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[32px] border-[#178582]/20" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#178582]/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Bold Stack Typography + Outlined Word "CHUYÊN NGHIỆP" */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#23b5b1]">
                  <span>{HERO_DATA.eyebrow}</span>
                  <span className="h-[2px] w-10 bg-[#23b5b1]" />
                </div>

                <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
                  {HERO_DATA.titleLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                  <span
                    className="mt-1 block text-transparent"
                    style={{
                      WebkitTextStroke: '1.5px #23b5b1',
                    }}
                  >
                    {HERO_DATA.outlinedWord}
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {HERO_DATA.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#dat-lich-hen"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#178582] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-[#178582]/30 transition hover:bg-[#1d9e9a]"
                  >
                    <span>{HERO_DATA.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#danh-sach-phong"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/15"
                  >
                    <span>Khám phá hạng phòng</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Circular Teal-Ring Portrait */}
              <div className="flex justify-center lg:col-span-5 lg:justify-end">
                <div className="relative">
                  {/* Outer decorative ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#23b5b1]/50" />
                  <div className="relative h-72 w-72 overflow-hidden rounded-full border-[12px] border-[#178582] bg-[#0e3542] shadow-2xl sm:h-96 sm:w-96">
                    <img
                      src={HERO_DATA.portraitImage}
                      alt="Quản lý điều hành khách sạn MONA Elevate"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 -left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#178582] text-white">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">
                        Tiêu Chuẩn 5 Sao
                      </p>
                      <p className="text-[11px] text-slate-500">
                        25+ Năm Kinh Nghiệm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. SECTION 1: "Các Tính Năng Cốt Lõi / Tính Năng Vượt Trội" (3 Cards with Overlapping White Body & Diamond/Hexagon Icon) */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
              <span className="h-[2px] w-6 bg-[#178582]" />
              <span>Các Tính Năng Cốt Lõi</span>
              <span className="h-[2px] w-6 bg-[#178582]" />
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Tính Năng Vượt Trội
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {CORE_FEATURES.map((feat) => (
              <div key={feat.id} className="group flex flex-col">
                {/* Top Photo */}
                <div className="relative h-56 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                </div>

                {/* Overlapping White Card Body with Diamond/Hexagon Icon Badge */}
                <div className="relative mx-4 -mt-12 flex flex-1 flex-col items-center rounded-2xl border border-slate-100 bg-white px-6 pb-7 pt-12 text-center shadow-xl">
                  {/* Diamond White + Teal Icon Badge */}
                  <div className="absolute -top-7 flex h-14 w-14 rotate-45 items-center justify-center rounded-xl border-4 border-white bg-[#178582] text-white shadow-lg">
                    <div className="-rotate-45">
                      {feat.iconType === 'comfort' && (
                        <BedDouble className="h-6 w-6" />
                      )}
                      {feat.iconType === 'service' && (
                        <ShieldCheck className="h-6 w-6" />
                      )}
                      {feat.iconType === 'culinary' && (
                        <Utensils className="h-6 w-6" />
                      )}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#178582]">
                    {feat.subtitle}
                  </span>
                  <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {feat.description}
                  </p>

                  <a
                    href="#danh-sach-phong"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition group-hover:border-[#178582] group-hover:bg-[#178582] group-hover:text-white"
                  >
                    <span>ĐỌC THÊM</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: "Danh Sách Phòng / Phòng Mới Nhất" (3 Top Cards + 2 Centered Bottom Cards) */}
      <section id="danh-sach-phong" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
              <span className="h-[2px] w-6 bg-[#178582]" />
              <span>Danh Sách Phòng</span>
              <span className="h-[2px] w-6 bg-[#178582]" />
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Phòng Mới Nhất
            </h2>
          </div>

          {/* Row 1: 3 Cards (Phòng Superior, Deluxe, Phòng Gia Đình) */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {topRowRooms.map((room) => (
              <div
                key={room.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-[#178582] px-3.5 py-1 text-xs font-bold text-white shadow">
                    {room.priceFormatted}
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {room.area} • {room.viewType}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {room.name}
                    </h3>
                    <span className="text-xs font-bold text-[#178582]">
                      {room.priceFormatted}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {room.bedType} • {room.capacity}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                    {room.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {room.amenities.map((am, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {am}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className="text-xs font-bold uppercase tracking-wider text-[#178582] hover:underline"
                    >
                      Xem chi tiết phòng
                    </button>
                    <a
                      href="#dat-lich-hen"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#0b2530] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#178582]"
                    >
                      <span>Đặt ngay</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards (Phòng Hạng Trung, Phòng Executive) */}
          <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-2">
            {bottomRowRooms.map((room) => (
              <div
                key={room.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-[#178582] px-3.5 py-1 text-xs font-bold text-white shadow">
                    {room.priceFormatted}
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-md bg-slate-950/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {room.area} • {room.viewType}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {room.name}
                    </h3>
                    <span className="text-xs font-bold text-[#178582]">
                      {room.priceFormatted}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {room.bedType} • {room.capacity}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                    {room.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {room.amenities.map((am, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {am}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedRoomId(room.id)}
                      className="text-xs font-bold uppercase tracking-wider text-[#178582] hover:underline"
                    >
                      Xem chi tiết phòng
                    </button>
                    <a
                      href="#dat-lich-hen"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#0b2530] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#178582]"
                    >
                      <span>Đặt ngay</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Room Quick-View Modal if user clicks "Xem chi tiết phòng" */}
          {selectedRoom && (
            <div className="mt-8 rounded-2xl border-2 border-[#178582] bg-teal-50/40 p-6 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-[#178582] px-3 py-1 text-xs font-bold text-white">
                    Đang xem: {selectedRoom.name} ({selectedRoom.priceFormatted}{' '}
                    {selectedRoom.unitLabel})
                  </span>
                  <h4 className="mt-2 text-xl font-extrabold text-slate-900">
                    {selectedRoom.name} – {selectedRoom.area} (
                    {selectedRoom.viewType})
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    {selectedRoom.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRoomId(null)}
                  className="rounded-full bg-white p-2 text-slate-500 shadow hover:text-slate-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. SECTION 3: "Giới Thiệu / Tìm Thấy Sự Hoàn Hảo Và Trải Nghiệm Đẳng Cấp" + Dark 4-Stat Counter Bar */}
      <section id="gioi-thieu" className="bg-slate-50 pt-20">
        <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy + 2x4 Checklist + CTA & Phone */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
                <span>{ABOUT_SECTION.eyebrow}</span>
                <span className="h-[2px] w-8 bg-[#178582]" />
              </div>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                {ABOUT_SECTION.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {ABOUT_SECTION.description}
              </p>

              {/* 2x4 Teal Bullet Checklist */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {ABOUT_SECTION.checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs font-bold text-slate-800 sm:text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#178582]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#dat-lich-hen"
                  className="inline-flex items-center gap-2 rounded-full bg-[#178582] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#126967]"
                >
                  <span>XEM THÊM</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#178582]/15 text-[#178582]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">
                      Hotline Đặt Phòng 24/7
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-base font-extrabold text-slate-900 hover:text-[#178582]"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3-Photo Overlapping Collage */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <div className="h-80 overflow-hidden rounded-2xl shadow-lg sm:h-96">
                    <img
                      src={ABOUT_SECTION.collageImages[0]}
                      alt="Kiến trúc khách sạn MONA"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-5 flex flex-col gap-4">
                  <div className="h-38 overflow-hidden rounded-2xl shadow-lg sm:h-44">
                    <img
                      src={ABOUT_SECTION.collageImages[1]}
                      alt="Sảnh lễ tân sang trọng"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-38 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:h-48">
                    <img
                      src={ABOUT_SECTION.collageImages[2]}
                      alt="Khu nghỉ dưỡng hồ bơi"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Navy 4-Stat Counter Bar (#0b1622) */}
        <div className="bg-[#0b1622] py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {STAT_COUNTERS.map((stat, idx) => (
                <div
                  key={stat.id}
                  className="flex items-center gap-4 border-l-2 border-[#178582] pl-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#178582]/20 text-[#23b5b1]">
                    {idx === 0 && <Star className="h-6 w-6" />}
                    {idx === 1 && <Users className="h-6 w-6" />}
                    {idx === 2 && <Award className="h-6 w-6" />}
                    {idx === 3 && <Building2 className="h-6 w-6" />}
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: "Nhân Viên Cốt Lõi / Quản Lý Chuyên Nghiệp" (4 Team Cards) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
              <span className="h-[2px] w-6 bg-[#178582]" />
              <span>Nhân Viên Cốt Lõi</span>
              <span className="h-[2px] w-6 bg-[#178582]" />
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Quản Lý Chuyên Nghiệp
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition hover:-translate-y-1 hover:border-[#178582] hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b2530]/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-[#178582]">
                    {member.role}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {member.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: "Dịch Vụ Phòng Tốt Nhất Dành Cho Bạn" (Left Featured Card + Right 2x2 Grid) */}
      <section id="dich-vu" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
              <span className="h-[2px] w-6 bg-[#178582]" />
              <span>Dịch Vụ Của Chúng Tôi</span>
              <span className="h-[2px] w-6 bg-[#178582]" />
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Dịch Vụ Phòng Tốt Nhất Dành Cho Bạn
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Left 5-col Featured Card ("Dịch vụ phòng" with photo + icon badge + ĐỌC THÊM) */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-md lg:col-span-5">
              <div>
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={featuredLeftService.image}
                    alt={featuredLeftService.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#178582] text-white shadow-lg">
                    <BedDouble className="h-6 w-6" />
                  </div>
                </div>
                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-[#178582]">
                  {featuredLeftService.category}
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
                  {featuredLeftService.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {featuredLeftService.description}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="#dat-lich-hen"
                  className="inline-flex items-center gap-2 rounded-full border border-[#178582] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#178582] transition hover:bg-[#178582] hover:text-white"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right 7-col 2x2 Grid ("Dịch vụ quản lý", "Dịch vụ nhà hàng", "Dịch vụ thể dục và spa", "Dịch vụ hoạt động") */}
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {gridServices.map((srv, idx) => (
                <div
                  key={srv.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#178582] hover:shadow-lg"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#178582]">
                      {idx === 0 && <Building2 className="h-6 w-6" />}
                      {idx === 1 && <Coffee className="h-6 w-6" />}
                      {idx === 2 && <Dumbbell className="h-6 w-6" />}
                      {idx === 3 && <Sparkles className="h-6 w-6" />}
                    </div>
                    <span className="mt-4 block text-[11px] font-bold uppercase tracking-wider text-[#178582]">
                      {srv.category}
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-2">
                    <a
                      href="#dat-lich-hen"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-[#178582]"
                    >
                      <span>ĐỌC THÊM</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: "25 Năm Kinh Nghiệm Về Dịch Vụ Khách Sạn" (Dark Banner with 3 Progress Bars + Floating White "Đặt Lịch Hẹn" Form Card) */}
      <section
        id="dat-lich-hen"
        className="relative overflow-hidden bg-[#0b2530] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Heading + 3 Progress Bars (91%, 90%, 93%) + Bottom White Contact Strip */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#23b5b1]">
                <span>Năng Lực Vận Hành</span>
                <span className="h-[2px] w-8 bg-[#23b5b1]" />
              </div>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                25 Năm Kinh Nghiệm Về Dịch Vụ Khách Sạn
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                Chúng tôi đo lường chất lượng bằng sự hài lòng thực tế của hàng
                chục ngàn lượt khách lưu trú và hiệu quả đầu tư bền vững của các
                chủ sở hữu khách sạn.
              </p>

              {/* 3 Progress Bars */}
              <div className="mt-8 space-y-5">
                {EXPERIENCE_PROGRESS.map((bar) => (
                  <div key={bar.id}>
                    <div className="mb-2 flex items-center justify-between text-xs font-bold sm:text-sm">
                      <span>{bar.label}</span>
                      <span className="text-[#23b5b1]">{bar.percentage}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#178582] to-[#23b5b1]"
                        style={{ width: `${bar.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom White Contact Strip */}
              <div className="mt-10 grid gap-4 rounded-2xl bg-white p-5 text-slate-800 shadow-xl sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#178582] text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-slate-400">
                      Tư vấn trực tiếp
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-sm font-extrabold text-slate-900"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0b2530] text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-slate-400">
                      Hộp thư hỗ trợ
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-sm font-extrabold text-slate-900"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Floating White Form Card "Đặt Lịch Hẹn" */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-7 text-slate-800 shadow-2xl sm:p-9">
                <span className="text-xs font-bold uppercase tracking-widest text-[#178582]">
                  Phản hồi trong 15 phút
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
                  Đặt Lịch Hẹn
                </h3>

                {appointmentSent ? (
                  <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-[#178582]" />
                    <h4 className="mt-2 text-base font-bold text-slate-900">
                      Đã Gửi Yêu Cầu Đặt Lịch Hẹn!
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Cảm ơn <strong>{appointmentForm.fullName}</strong>. Bộ
                      phận Lễ tân & Đặt phòng MONA sẽ liên hệ qua email{' '}
                      <strong>{appointmentForm.email}</strong> ngay lập tức.
                    </p>
                    <button
                      type="button"
                      onClick={() => setAppointmentSent(false)}
                      className="mt-4 text-xs font-bold text-[#178582] underline"
                    >
                      Đặt lịch hẹn mới
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleAppointmentSubmit}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Họ tên *"
                        value={appointmentForm.fullName}
                        onChange={(e) =>
                          setAppointmentForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#178582] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={appointmentForm.email}
                        onChange={(e) =>
                          setAppointmentForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#178582] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <select
                        value={appointmentForm.topic}
                        onChange={(e) =>
                          setAppointmentForm((prev) => ({
                            ...prev,
                            topic: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-[#178582] focus:bg-white focus:outline-none"
                      >
                        <option>Đặt phòng nghỉ dưỡng / Công tác</option>
                        <option>Tư vấn quản lý & vận hành khách sạn</option>
                        <option>Đặt tiệc hội nghị & Sự kiện VIP</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Nội dung yêu cầu chi tiết..."
                        value={appointmentForm.message}
                        onChange={(e) =>
                          setAppointmentForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-[#178582] focus:bg-white focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#178582] py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#126967]"
                    >
                      <span>GỬI NGAY</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: "Phản hồi của khách hàng" + "Quy Trình Hoạt Động" (4 Steps 01-04) + Dark CTA + 2-Card News + 10K+ Partners */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          {/* Testimonial Split Block */}
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
                <span>Đánh Giá Thực Tế</span>
                <span className="h-[2px] w-8 bg-[#178582]" />
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Phản hồi của khách hàng
              </h2>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: activeTestimonial.rating }).map(
                      (_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      )
                    )}
                  </div>
                  <Quote className="h-8 w-8 text-[#178582]/30" />
                </div>

                <p className="mt-4 text-sm italic leading-relaxed text-slate-700 sm:text-base">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-[#178582]"
                    />
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        {activeTestimonial.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {activeTestimonial.role} – {activeTestimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTestimonialIdx(
                          (activeTestimonialIdx - 1 + TESTIMONIALS.length) %
                            TESTIMONIALS.length
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#178582] hover:bg-[#178582] hover:text-white"
                      aria-label="Đánh giá trước"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTestimonialIdx(
                          (activeTestimonialIdx + 1) % TESTIMONIALS.length
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-[#178582] hover:bg-[#178582] hover:text-white"
                      aria-label="Đánh giá tiếp"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={activeTestimonial.roomImage}
                  alt="Không gian thực tế khách sạn"
                  className="h-80 w-full object-cover sm:h-96"
                />
              </div>
            </div>
          </div>

          {/* Quy Trình Hoạt Động (4 Steps 01 - 04) */}
          <div className="mt-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
                <span className="h-[2px] w-6 bg-[#178582]" />
                <span>Cách Thức Làm Việc</span>
                <span className="h-[2px] w-6 bg-[#178582]" />
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Quy Trình Hoạt Động
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WORKFLOW_STEPS.map((step) => (
                <div
                  key={step.id}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:border-[#178582] hover:bg-white hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#178582] text-lg font-black text-white shadow-md">
                    {step.stepNumber}
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Full-Width CTA Banner ("Chúng Tôi Luôn Sẵn Sàng Đem Lại Cho Bạn Những Dịch Vụ Tốt Nhất") */}
          <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b2530] via-[#103b49] to-[#178582] p-8 text-white shadow-2xl sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#23b5b1]">
                  Trải Nghiệm Lưu Trú Thượng Lưu
                </span>
                <h2 className="mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">
                  Chúng Tôi Luôn Sẵn Sàng Đem Lại Cho Bạn Những Dịch Vụ Tốt Nhất
                </h2>
              </div>
              <a
                href="#dat-lich-hen"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-[#0b2530] shadow-lg transition hover:bg-[#23b5b1] hover:text-white"
              >
                <span>NHẬN TƯ VẤN NGAY</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Tin Tức Mới Nhất (2 Featured Blog Cards) */}
          <div id="tin-tuc" className="mt-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#178582]">
                <span className="h-[2px] w-6 bg-[#178582]" />
                <span>Tin Tức & Cẩm Nang</span>
                <span className="h-[2px] w-6 bg-[#178582]" />
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Tin Tức Mới Nhất
              </h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {LATEST_NEWS.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#178582] px-3.5 py-1 text-xs font-bold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#178582]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>Bởi {post.author}</span>
                    </div>
                    <h3 className="mt-2.5 text-xl font-extrabold text-slate-900 group-hover:text-[#178582]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                    <a
                      href="#dat-lich-hen"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#178582] hover:underline"
                    >
                      <span>ĐỌC THÊM</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 10K+ Đối Tác Tin Cậy Bar */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div className="text-center lg:text-left">
                <span className="text-2xl font-black text-[#178582]">10K+</span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Khách Hàng & Đối Tác Tin Cậy Toàn Cầu
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                {PARTNER_LOGOS.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold tracking-widest text-slate-500 shadow-sm"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TEAL WAVE FOOTER (#136f6d) */}
      <footer id="lien-he" className="bg-[#136f6d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Brand Info */}
            <div className="space-y-4 lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#136f6d] shadow">
                  <Waves className="h-6 w-6" />
                </div>
                <span className="text-2xl font-black tracking-widest text-white">
                  {BRAND_INFO.shortLogo}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-teal-50/90">
                {BRAND_INFO.tagline}. Kiến tạo không gian lưu trú sang trọng và
                giải pháp vận hành khách sạn toàn diện.
              </p>
              <div className="space-y-2 text-xs text-teal-50">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span>{BRAND_INFO.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-amber-300" />
                  <span>{BRAND_INFO.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-amber-300" />
                  <span>{BRAND_INFO.email}</span>
                </p>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3 lg:col-span-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Liên Kết Nhanh
              </h3>
              <ul className="space-y-2 text-xs text-teal-50/90">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition hover:text-amber-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Room Categories */}
            <div className="space-y-3 lg:col-span-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Hạng Phòng Nổi Bật
              </h3>
              <ul className="space-y-2 text-xs text-teal-50/90">
                {ROOM_LIST.map((r) => (
                  <li key={r.id}>
                    <a
                      href="#danh-sach-phong"
                      className="flex items-center justify-between hover:text-amber-300"
                    >
                      <span>{r.name}</span>
                      <span className="font-bold">{r.priceFormatted}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div className="space-y-3 lg:col-span-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Đăng Ký Nhận Ưu Đãi
              </h3>
              <p className="text-xs leading-relaxed text-teal-50/90">
                Nhận ngay voucher giảm 20% giá phòng và cẩm nang thiết kế – vận
                hành khách sạn mới nhất.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex overflow-hidden rounded-full bg-white p-1 shadow-md"
              >
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="w-full bg-transparent px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-[#0b2530] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-slate-800"
                >
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 bg-[#0e5654] py-4 text-center text-xs text-teal-100">
          © {new Date().getFullYear()} {BRAND_INFO.brandName}. Thiết kế & Vận
          hành theo tiêu chuẩn 5 sao Quốc tế.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
