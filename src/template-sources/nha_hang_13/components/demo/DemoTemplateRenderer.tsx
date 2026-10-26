'use client';

import React, { useMemo, useState } from 'react';
import {
  Plane,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Users,
  Check,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang13Data,
  TohokuMenuItem,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, any>;
  customData?: Record<string, any>;
  templateKey?: string;
}

export function DemoTemplateRenderer({
  data: incomingData,
  customData,
}: DemoTemplateRendererProps) {
  const data: NhaHang13Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [activeCategory, setActiveCategory] = useState<
    'all' | 'sashimi_air' | 'omakase_sushi' | 'wagyu_hotpot' | 'kaiseki_set'
  >('all');
  const [selectedDish, setSelectedDish] = useState<TohokuMenuItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    branch: 'Chi nhánh Hà Nội',
    guests: '4 khách (Phòng Tatami VIP)',
    date: '',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'all') return data.menuItems;
    return data.menuItems.filter((item) => item.category === activeCategory);
  }, [data.menuItems, activeCategory]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderTohokuLogo = (large = false) => (
    <div className="inline-flex flex-col items-center">
      <div
        className={`flex items-center font-serif font-black tracking-[0.14em] text-white ${
          large ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'
        }`}
      >
        <span>{data.brandLogo.prefix}</span>
        {/* Red Japanese Kamon Emblem replacing the second O */}
        <span
          className={`inline-flex items-center justify-center rounded-full border-2 border-[#B91C1C] bg-[#2A0A0A] mx-1 ${
            large ? 'w-9 h-9 sm:w-11 sm:h-11' : 'w-6 h-6 sm:w-7 sm:h-7'
          }`}
        >
          <span
            className={`rotate-45 bg-[#DC2626] block ${
              large ? 'w-4 h-4' : 'w-2.5 h-2.5'
            }`}
          />
        </span>
        <span>{data.brandLogo.suffix}</span>
      </div>
      <span
        className={`font-serif uppercase tracking-[0.18em] text-stone-300 mt-1 ${
          large ? 'text-[9px] sm:text-[10px]' : 'text-[7px] sm:text-[8px]'
        }`}
      >
        {data.brandLogo.subline}
      </span>
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-[#FBF8F3] text-stone-900 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#1C0D0B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#C82829] text-xs font-semibold">
          <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Air-Cargo Freshness Bar */}
      <div className="bg-[#0E0706] text-stone-300 text-[11px] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#E5C158] font-semibold">
            <Plane className="w-3.5 h-3.5" />
            <span>
              ANA Air-Cargo: Hải sản tươi sống hạ cánh trực tiếp từ chợ Toyosu & vùng biển Tohoku Nhật Bản
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span>Hà Nội • Hải Phòng • Nghệ An</span>
            <a
              href={`tel:${data.business.phone[0].replace(/\s+/g, '')}`}
              className="text-white font-bold hover:text-[#E5C158]"
            >
              Đặt bàn VIP: {data.business.phone[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#160B09]/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          <a href="#top" className="focus:outline-none">
            {renderTohokuLogo(false)}
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-200">
            {data.navItems.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  if (idx === 1) scrollToSection('aircargo-section');
                  else if (idx === 2) scrollToSection('menu-section');
                  else if (idx === 3) scrollToSection('omakase-section');
                  else if (idx === 4) scrollToSection('branches-section');
                  else if (idx === 5) setBookingOpen(true);
                  else scrollToSection('top');
                }}
                className="hover:text-[#E5C158] transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="px-5 py-2.5 rounded-full bg-[#C82829] hover:bg-[#a61f20] text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
          >
            Đặt Bàn VIP Ngay
          </button>
        </div>
      </header>

      {/* 1. HERO SECTION MATCHING NH013 (DARK URUSHI LACQUER LEFT + ANA AIR-CARGO SEAFOOD & SUSHI SHOWCASE RIGHT) */}
      <section className="relative min-h-[600px] lg:min-h-[650px] bg-[#160A08] text-white overflow-hidden flex items-center">
        {/* Background Seafood Image */}
        <div className="absolute inset-0">
          <img
            src={data.hero.image}
            alt={data.hero.title}
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140A08] via-[#1C0E0C]/92 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left Typography Column matching NH013 (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>{renderTohokuLogo(true)}</div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase leading-[1.12] tracking-tight text-white drop-shadow">
              CHUỖI NHÀ HÀNG
              <br />
              NHẬT BẢN CAO CẤP
              <br />
              TẠI VIỆT NAM
            </h1>

            <p className="text-base sm:text-xl text-stone-200 font-normal leading-relaxed max-w-xl">
              Ba chi nhánh Hà Nội, Hải Phòng, Nghệ An, nguyên liệu hàng bay từ Nhật
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-7 py-3 rounded-full bg-[#C82829] hover:bg-[#a81e1f] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                {data.hero.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('aircargo-section')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                {data.hero.secondaryCta}
              </button>
            </div>

            {/* 3 Branches Quick Pills */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              {data.branches.map((br) => (
                <button
                  key={br.id}
                  type="button"
                  onClick={() => scrollToSection('branches-section')}
                  className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 transition-colors cursor-pointer"
                >
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#E5C158]">
                    {br.city}
                  </span>
                  <span className="block text-xs font-bold text-white truncate mt-0.5">
                    {br.address.split(',')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right ANA Cargo Seafood Box & Wooden Geta Sushi Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E100E]/95 backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/35 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1E3A8A] text-white text-[10px] font-black tracking-wider uppercase">
                  <Plane className="w-3 h-3" />
                  ANA CARGO • NARITA → HAN
                </span>
                <span className="px-2.5 py-1 rounded bg-[#C82829] text-white text-[10px] font-bold uppercase">
                  Hàng Bay Tươi Sống
                </span>
              </div>

              {/* 2x2 Fresh Catch Grid (Kinmedai, Shima-Aji, Botan Ebi, Kegani Crab) */}
              <div className="grid grid-cols-2 gap-2.5">
                {data.airCargoSection.items.map((fish) => (
                  <div
                    key={fish.id}
                    onClick={() => scrollToSection('aircargo-section')}
                    className="group relative h-28 rounded-lg overflow-hidden border border-white/15 cursor-pointer"
                  >
                    <img
                      src={fish.image}
                      alt={fish.vietnameseName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 inset-x-2">
                      <p className="text-[10px] font-bold text-[#E5C158] leading-none">
                        {fish.japaneseName}
                      </p>
                      <p className="text-[11px] font-extrabold text-white truncate mt-0.5">
                        {fish.vietnameseName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wooden Geta Nigiri Platter Highlight */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#2B1712] to-[#3B2119] border border-[#D4AF37]/40 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E5C158]">
                    ITAMAE HANDCRAFTED NIGIRI
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    Thưởng thức Sashimi & Sushi vừa hạ cánh trong ngày
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('menu-section')}
                  className="px-3.5 py-2 rounded-lg bg-[#D4AF37] text-[#160A08] text-[11px] font-black uppercase shrink-0 cursor-pointer"
                >
                  Xem Thực Đơn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NGUYÊN LIỆU HẢI SẢN HÀNG BAY TỪ NHẬT (ANA AIR CARGO SCHEDULE) */}
      <section id="aircargo-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C82829]/10 text-[#C82829] text-xs font-extrabold uppercase tracking-wider">
            <Plane className="w-3.5 h-3.5" />
            {data.airCargoSection.badge}
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-serif font-black text-stone-900">
            {data.airCargoSection.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            {data.airCargoSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.airCargoSection.items.map((fish) => (
            <div
              key={fish.id}
              onClick={() =>
                triggerToast(
                  `Đặt trước ${fish.vietnameseName} (${fish.flightSchedule}) tại lễ tân Tohoku!`
                )
              }
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img
                    src={fish.image}
                    alt={fish.vietnameseName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#160A08]/85 text-[#E5C158] text-[10px] font-bold">
                    {fish.prefecture}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <p className="text-xs font-serif font-bold text-[#C82829]">
                    {fish.japaneseName}
                  </p>
                  <h3 className="text-base font-extrabold text-stone-900 group-hover:text-[#C82829] transition-colors">
                    {fish.vietnameseName}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {fish.seasonNote}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-stone-500">
                  {fish.flightSchedule}
                </span>
                <span className="font-black text-[#C82829]">{fish.pricePer100g}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE SIGNATURE MENU (SASHIMI / SUSHI / WAGYU A5 / KAISEKI) */}
      <section id="menu-section" className="py-16 bg-white border-y border-stone-200/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C82829]">
                TINH HOA ẨM THỰC VÙNG TOHOKU & TOKYO
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-black text-stone-900">
                Thực Đơn Tuyệt Phẩm Hàng Bay & Kaiseki
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {data.menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#C82829] text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredMenu.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="group bg-[#FBF8F3] rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C82829]/50 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {dish.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#C82829] text-white text-[10px] font-extrabold uppercase">
                        {dish.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/75 text-[#E5C158] text-[10px] font-bold">
                      {dish.originTag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-xs font-serif text-stone-500">
                      {dish.jpTitle}
                    </span>
                    <h3 className="text-base font-extrabold text-stone-900 group-hover:text-[#C82829] transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-stone-200/60 flex items-center justify-between">
                  <span className="text-base font-black text-[#C82829]">{dish.price}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setBookingOpen(true);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-stone-900 hover:text-[#C82829] cursor-pointer"
                  >
                    <span>Đặt Món Trước</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HINOKI OMAKASE SPOTLIGHT */}
      <section id="omakase-section" className="py-16 bg-[#160B09] text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#E5C158] text-[11px] font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {data.omakaseHighlight.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black leading-tight">
              {data.omakaseHighlight.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#E5C158]">
              {data.omakaseHighlight.chefName} — {data.omakaseHighlight.chefTitle}
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {data.omakaseHighlight.description}
            </p>

            <ul className="space-y-2 pt-2 text-xs text-stone-200">
              {data.omakaseHighlight.courses.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-5">
              <div>
                <span className="block text-[10px] uppercase text-stone-400">
                  Giá Trải Nghiệm Omakase
                </span>
                <span className="text-xl font-black text-[#E5C158]">
                  {data.omakaseHighlight.pricePerGuest}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-6 py-3 rounded-full bg-[#C82829] hover:bg-[#a61f20] text-white text-xs font-extrabold uppercase tracking-wider cursor-pointer"
              >
                Đặt Ghế Quầy Hinoki Omakase
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl">
              <img
                src={data.omakaseHighlight.image}
                alt={data.omakaseHighlight.title}
                className="w-full h-[380px] sm:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. BA CHI NHÁNH: HÀ NỘI • HẢI PHÒNG • NGHỆ AN */}
      <section id="branches-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#C82829]">
            HỆ THỐNG CHUỖI NHÀ HÀNG TOHOKU
          </span>
          <h2 className="mt-1 text-2xl sm:text-4xl font-serif font-black text-stone-900">
            Ba Chi Nhánh Hà Nội • Hải Phòng • Nghệ An
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600">
            Không gian phòng Tatami VIP riêng tư chuẩn kiến trúc Kyoto, lý tưởng cho những buổi tiệc tiếp đón đối tác và sum họp gia đình.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {data.branches.map((br) => (
            <div
              key={br.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={br.image}
                    alt={br.branchName}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#160A08] text-[#E5C158] text-[10px] font-extrabold uppercase tracking-wider">
                    {br.city}
                  </span>
                </div>

                <div className="p-6 space-y-2.5 text-xs">
                  <h3 className="text-base font-extrabold text-stone-900">
                    {br.branchName}
                  </h3>
                  <p className="text-stone-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C82829] shrink-0 mt-0.5" />
                    <span>{br.address}</span>
                  </p>
                  <p className="text-stone-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C82829] shrink-0" />
                    <strong className="text-stone-900">{br.hotline}</strong>
                  </p>
                  <p className="text-stone-600 flex items-start gap-2">
                    <Users className="w-4 h-4 text-[#C82829] shrink-0 mt-0.5" />
                    <span>{br.vipRooms}</span>
                  </p>
                  <p className="text-stone-500 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{br.openingHours}</span>
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => {
                    setBookingForm((prev) => ({ ...prev, branch: br.city }));
                    setBookingOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#160A08] hover:bg-[#C82829] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Đặt Bàn Tại {br.city}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#110807] text-stone-300 text-xs border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-3">
            {renderTohokuLogo(false)}
            <p className="text-stone-400 leading-relaxed max-w-md pt-1">
              {data.business.description}
            </p>
            <p className="text-[#E5C158] font-bold">
              Hotline Đặt Bàn Toàn Hệ Thống: {data.business.phone[0]}
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Hệ Thống 3 Chi Nhánh Tohoku
            </h4>
            <ul className="space-y-2 text-stone-400">
              {data.branches.map((b) => (
                <li key={b.id}>
                  <strong className="text-white">{b.city}:</strong> {b.address} ({b.hotline})
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Cam Kết Hải Sản Hàng Bay
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>• Nhập khẩu đường bay ANA Cargo 2-3 chuyến/tuần</li>
              <li>• Giấy chứng nhận xuất xứ Chợ Toyosu & Hokkaido</li>
              <li>• Phòng Tatami VIP riêng tư tuyệt đối</li>
              <li>• Đội ngũ Bếp trưởng Nhật Bản trực tiếp chế biến</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/50 py-3.5 text-center text-[11px] text-stone-500 border-t border-white/5">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div
          onClick={() => setSelectedDish(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-56">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-serif text-[#C82829]">
                {selectedDish.jpTitle} • {selectedDish.originTag}
              </span>
              <h3 className="text-lg font-black text-stone-900">{selectedDish.name}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedDish.description}
              </p>
              <div className="pt-3 flex items-center justify-between border-t border-stone-100">
                <span className="text-lg font-black text-[#C82829]">
                  {selectedDish.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDish(null);
                    setBookingOpen(true);
                  }}
                  className="px-5 py-2 rounded-full bg-[#C82829] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đặt Bàn Thưởng Thức
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIP Table Reservation Modal */}
      {bookingOpen && (
        <div
          onClick={() => setBookingOpen(false)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="p-4 bg-[#160A08] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#E5C158]">
                <Calendar className="w-4 h-4" />
                <span>Đặt Bàn VIP & Hải Sản Hàng Bay Tohoku</span>
              </div>
              <button type="button" onClick={() => setBookingOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBookingOpen(false);
                triggerToast(
                  `Đã ghi nhận đặt bàn tại ${bookingForm.branch} cho ${bookingForm.name}! Lễ tân sẽ gọi xác nhận ngay.`
                );
              }}
              className="p-6 space-y-3.5 text-xs"
            >
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Họ và tên Quý khách *
                </label>
                <input
                  type="text"
                  required
                  value={bookingForm.name}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, name: e.target.value })
                  }
                  placeholder="Nhập họ tên..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C82829]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    placeholder="0918..."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C82829]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Chọn chi nhánh
                  </label>
                  <select
                    value={bookingForm.branch}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, branch: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C82829]"
                  >
                    <option value="Chi nhánh Hà Nội">Tohoku Hà Nội</option>
                    <option value="Chi nhánh Hải Phòng">Tohoku Hải Phòng</option>
                    <option value="Chi nhánh Nghệ An">Tohoku Nghệ An</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Không gian & Số khách
                  </label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, guests: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C82829]"
                  >
                    <option value="2 khách (Quầy Omakase)">2 khách (Quầy Omakase)</option>
                    <option value="4-6 khách (Phòng Tatami VIP)">
                      4-6 khách (Phòng Tatami VIP)
                    </option>
                    <option value="8-12 khách (Phòng Tiệc VIP)">
                      8-12 khách (Phòng Tiệc VIP)
                    </option>
                    <option value="Trên 15 khách (Sảnh Yến Tiệc)">
                      Trên 15 khách (Sảnh Yến Tiệc)
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Ngày dùng bữa
                  </label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, date: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#C82829]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#C82829] hover:bg-[#a61f20] text-white font-extrabold uppercase tracking-wider cursor-pointer"
              >
                Xác Nhận Đặt Bàn VIP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
