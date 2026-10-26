'use client';

import React, { useMemo, useState } from 'react';
import {
  Waves,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Compass,
  ChevronRight,
  Users,
  Sparkles,
  Check,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang14Data,
  GanhHaoSeafoodDish,
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
  const data: NhaHang14Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [activeCategory, setActiveCategory] = useState<
    'all' | 'signature' | 'abalone_lobster' | 'crab_squid' | 'hotpot_salad'
  >('all');
  const [selectedDish, setSelectedDish] = useState<GanhHaoSeafoodDish | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    location: 'Gành Hào 1 (03 Trần Phú)',
    seating: 'Bàn Sát Biển Ngắm Hoàng Hôn',
    guests: '6 người',
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

  const renderGanhHaoLogo = (large = false) => (
    <div className="inline-flex flex-col items-center text-white select-none">
      {/* Stylized Ocean Wave G Icon */}
      <div
        className={`rounded-full border-2 border-sky-300/80 bg-[#0B2D52]/80 flex items-center justify-center shadow-inner ${
          large ? 'w-14 h-14 mb-1.5' : 'w-9 h-9 mb-0.5'
        }`}
      >
        <Waves className={large ? 'w-8 h-8 text-white' : 'w-5 h-5 text-white'} />
      </div>
      <div
        className={`font-black tracking-wider flex items-center ${
          large ? 'text-2xl sm:text-3xl' : 'text-base sm:text-lg'
        }`}
      >
        <span>GANH HA</span>
        <Compass
          className={`inline text-sky-300 ml-0.5 ${
            large ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-4 h-4'
          }`}
        />
      </div>
      <span
        className={`uppercase tracking-[0.22em] text-sky-200 font-semibold ${
          large ? 'text-[9px]' : 'text-[7px]'
        }`}
      >
        {data.brandLogo.subtitle}
      </span>
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-[#F3F8FC] text-slate-900 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#0E3C6B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-sky-400/50 text-xs font-semibold">
          <Check className="w-4 h-4 text-amber-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Oceanfront Info Bar */}
      <div className="bg-[#082442] text-sky-100 text-[11px] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-sky-300 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gành Hào 1: 03 Trần Phú • Gành Hào 2: 09 Hạ Long, TP. Vũng Tàu</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${data.business.phone[0].replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-amber-300 font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Đặt bàn View Biển: {data.business.phone[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0D355E]/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          <a href="#top" className="focus:outline-none">
            {renderGanhHaoLogo(false)}
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-sky-100">
            {data.navItems.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  if (idx === 1 || idx === 2) scrollToSection('menu-section');
                  else if (idx === 3) scrollToSection('locations-section');
                  else if (idx === 4) scrollToSection('seaview-section');
                  else if (idx === 5) setBookingOpen(true);
                  else scrollToSection('top');
                }}
                className="hover:text-amber-300 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:brightness-105 transition-all cursor-pointer"
          >
            Đặt Bàn Sát Biển
          </button>
        </div>
      </header>

      {/* 1. HERO SECTION MATCHING NH014 (DEEP OCEAN BLUE LEFT + AERIAL COASTAL VIEW + 2 OVERLAPPING CIRCULAR SEAFOOD PLATES ON RIGHT) */}
      <section className="relative min-h-[600px] lg:min-h-[660px] bg-[#0E3C6B] text-white overflow-hidden flex items-center">
        {/* Background Aerial Oceanfront Image */}
        <div className="absolute inset-0">
          <img
            src={data.hero.image}
            alt={data.hero.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3C6B] via-[#12467A]/90 to-[#0E3C6B]/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left Typography Column matching NH014 (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div>{renderGanhHaoLogo(true)}</div>

            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black uppercase leading-[1.08] tracking-tight text-white drop-shadow-md">
              THƯƠNG HIỆU
              <br />
              NHÀ HÀNG GẮN BÓ
              <br />
              VỚI VÙNG BIỂN
              <br />
              VŨNG TÀU
            </h1>

            <p className="text-lg sm:text-2xl font-medium text-sky-100 leading-snug">
              Ẩm thực đẳng cấp
              <br />
              giữa lòng phố biển
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl hover:brightness-105 transition-all cursor-pointer"
              >
                {data.hero.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('menu-section')}
                className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                {data.hero.secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Overlapping Circular Seafood Plates matching NH014 (6 cols) */}
          <div className="lg:col-span-6 relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center">
            {/* Top-Right Circular Abalone Bowl */}
            <div
              onClick={() => scrollToSection('menu-section')}
              className="group absolute top-0 right-2 sm:right-6 z-20 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-[#FDF8EC] p-3 shadow-2xl border-4 border-amber-200/80 cursor-pointer hover:scale-105 transition-transform duration-500"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={data.heroCircularPlates.topPlate.image}
                  alt={data.heroCircularPlates.topPlate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-center">
                  <p className="text-[10px] font-bold text-amber-300">
                    {data.heroCircularPlates.topPlate.price}
                  </p>
                  <p className="text-[11px] font-extrabold text-white line-clamp-1">
                    {data.heroCircularPlates.topPlate.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-Left Large Circular White Plate (Crispy Garlic Chili Crab/Squid) */}
            <div
              onClick={() => scrollToSection('menu-section')}
              className="group relative z-10 mt-20 sm:mt-24 mr-8 sm:mr-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-white p-4 sm:p-5 shadow-2xl border-8 border-white/95 cursor-pointer hover:scale-102 transition-transform duration-500"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={data.heroCircularPlates.mainPlate.image}
                  alt={data.heroCircularPlates.mainPlate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082442]/90 via-[#082442]/50 to-transparent p-4 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                    Món Trứ Danh Gành Hào
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white mt-1">
                    {data.heroCircularPlates.mainPlate.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & OCEANFRONT ARCHITECTURE HIGHLIGHTS */}
      <section className="bg-white border-b border-sky-100 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {data.seaViewHighlights.stats.map((st, idx) => (
            <div key={idx} className="p-3">
              <span className="block text-2xl sm:text-3xl font-black text-[#0E3C6B]">
                {st.value}
              </span>
              <span className="mt-1 block text-xs font-semibold text-slate-600">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE SEAFOOD MENU (BÀO NGƯ, TÔM HÙM, CUA GHẸ, LẨU CÁ ĐUỐI) */}
      <section id="menu-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
              HẢI SẢN TƯƠI SỐNG BẮT TẠI HỒ NƯỚC BIỂN
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#0E3C6B]">
              Thực Đơn Hải Sản Trứ Danh Gành Hào
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
                    ? 'bg-[#0E3C6B] text-white shadow-sm'
                    : 'bg-white border border-sky-200 text-slate-700 hover:border-[#0E3C6B]'
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
              className="group bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-sky-50">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {dish.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#EA580C] text-white text-[10px] font-extrabold uppercase">
                      {dish.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#082442]/85 text-sky-200 text-[10px] font-semibold">
                    {dish.unit}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-[#0284C7]">
                    {dish.cookingStyle}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#0E3C6B] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="px-5 py-4 bg-sky-50/50 border-t border-sky-100 flex items-center justify-between">
                <span className="text-base font-black text-[#EA580C]">{dish.price}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBookingOpen(true);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0E3C6B] hover:text-[#EA580C] cursor-pointer"
                >
                  <span>Đặt Món & Giữ Bàn</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GÀNH HÀO 1 (TRẦN PHÚ) & GÀNH HÀO 2 (HẠ LONG) SHOWCASE */}
      <section id="locations-section" className="py-16 bg-[#0B2D52] text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
              HAI TỌA ĐỘ VÀNG SÁT BỜ BIỂN VŨNG TÀU
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black">
              Hệ Thống Nhà Hàng Gành Hào 1 & Gành Hào 2
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-[#123D6B] rounded-2xl overflow-hidden border border-sky-400/25 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                      View Sát Mặt Biển
                    </span>
                  </div>

                  <div className="p-6 space-y-2.5 text-xs">
                    <h3 className="text-lg font-black text-white">{loc.name}</h3>
                    <p className="text-sky-200 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                    <p className="text-sky-200 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                      <strong className="text-white">{loc.hotline}</strong>
                    </p>
                    <p className="text-sky-200 flex items-start gap-2">
                      <Users className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <span>{loc.capacity}</span>
                    </p>
                    <p className="text-sky-100/90 italic pt-1">“{loc.highlight}”</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      setBookingForm((prev) => ({ ...prev, location: loc.name }));
                      setBookingOpen(true);
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:brightness-105 cursor-pointer"
                  >
                    Đặt Bàn Tại {loc.name.split('—')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUNSET SEA-VIEW GALLERY */}
      <section id="seaview-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
            TRẢI NGHIỆM PHỐ BIỂN
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-black text-[#0E3C6B]">
            {data.seaViewHighlights.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {data.seaViewHighlights.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.seaViewHighlights.gallery.map((g, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-xs"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-extrabold text-[#0E3C6B]">{g.title}</h3>
                <p className="mt-1 text-xs text-slate-600">{g.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071D36] text-sky-100/80 text-xs border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-3">
            {renderGanhHaoLogo(false)}
            <p className="text-sky-200/75 leading-relaxed max-w-md pt-1">
              {data.business.description}
            </p>
            <p className="text-amber-300 font-bold">
              Tổng đài Đặt Bàn: {data.business.phone[0]} • {data.business.phone[1]}
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Địa Chỉ 2 Cơ Sở Sát Biển Vũng Tàu
            </h4>
            <ul className="space-y-2 text-sky-200/80">
              <li>
                <strong className="text-white">Gành Hào 1:</strong> 03 Trần Phú, Phường 5, TP. Vũng Tàu
              </li>
              <li>
                <strong className="text-white">Gành Hào 2:</strong> 09 Hạ Long, Phường 2, TP. Vũng Tàu
              </li>
              <li>
                <strong className="text-white">Giờ mở cửa:</strong> {data.business.workingHours}
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Dịch Vụ Tiệc & Đoàn Khách
            </h4>
            <ul className="space-y-1.5 text-sky-200/80">
              <li>• Đặt bàn gia đình sát mặt biển</li>
              <li>• Tổ chức Gala Dinner & Tiệc Cưới Biển</li>
              <li>• Thực đơn đoàn du lịch & MICE</li>
              <li>• Đóng gói hải sản tươi sống mang về</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/40 py-3.5 text-center text-[11px] text-sky-200/60 border-t border-white/5">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* Dish Modal */}
      {selectedDish && (
        <div
          onClick={() => setSelectedDish(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
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
              <span className="text-xs font-bold text-[#0284C7]">
                {selectedDish.categoryLabel} • {selectedDish.cookingStyle}
              </span>
              <h3 className="text-lg font-black text-[#0E3C6B]">{selectedDish.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedDish.description}
              </p>
              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-lg font-black text-[#EA580C]">
                  {selectedDish.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDish(null);
                    setBookingOpen(true);
                  }}
                  className="px-5 py-2 rounded-full bg-[#0E3C6B] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đặt Bàn Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sea-View Table Reservation Modal */}
      {bookingOpen && (
        <div
          onClick={() => setBookingOpen(false)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="p-4 bg-[#0E3C6B] text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Đặt Bàn View Biển Gành Hào Vũng Tàu</span>
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
                  `Đã giữ vị trí "${bookingForm.seating}" tại ${bookingForm.location} cho ${bookingForm.name}!`
                );
              }}
              className="p-6 space-y-3.5 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-700 mb-1">
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
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E3C6B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    placeholder="0909..."
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E3C6B]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Chọn cơ sở Gành Hào
                  </label>
                  <select
                    value={bookingForm.location}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, location: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E3C6B]"
                  >
                    <option value="Gành Hào 1 (03 Trần Phú)">
                      Gành Hào 1 (03 Trần Phú)
                    </option>
                    <option value="Gành Hào 2 (09 Hạ Long)">
                      Gành Hào 2 (09 Hạ Long)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Khu vực bàn yêu thích
                  </label>
                  <select
                    value={bookingForm.seating}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, seating: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E3C6B]"
                  >
                    <option value="Bàn Sát Biển Ngắm Hoàng Hôn">
                      Bàn Sát Biển Ngắm Hoàng Hôn
                    </option>
                    <option value="Phòng Lạnh VIP View Biển">
                      Phòng Lạnh VIP View Biển
                    </option>
                    <option value="Sảnh Tiệc Đoàn Lớn">Sảnh Tiệc Đoàn Lớn</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Số lượng thực khách
                  </label>
                  <input
                    type="text"
                    value={bookingForm.guests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, guests: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E3C6B]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white font-extrabold uppercase tracking-wider cursor-pointer"
              >
                Xác Nhận Giữ Bàn Sát Biển
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
