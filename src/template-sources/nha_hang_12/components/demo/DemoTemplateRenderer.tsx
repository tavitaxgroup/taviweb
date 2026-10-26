'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  Wrench,
  CheckCircle2,
  ChevronRight,
  SlidersHorizontal,
  Sparkles,
  Check,
  X,
  Calendar,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultData,
  NhaHang12Data,
  GiaBaoEquipmentItem,
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
  const data: NhaHang12Data = useMemo(
    () => adaptClonedTemplateData(defaultData, incomingData || customData),
    [incomingData, customData]
  );

  const [activeCategory, setActiveCategory] = useState<
    'all' | 'oven_combi' | 'wine_cooling' | 'dishwasher_hob' | 'coffee_bar'
  >('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState<GiaBaoEquipmentItem | null>(
    null
  );
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    city: 'Hà Nội',
    note: '',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const filteredEquipment = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return data.equipmentItems.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchBrand =
        selectedBrand === 'ALL' ||
        item.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q);
      return matchCat && matchBrand && matchSearch;
    });
  }, [data.equipmentItems, activeCategory, selectedBrand, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#4A0E17] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#C8A26A]/50 text-xs font-semibold">
          <Check className="w-4 h-4 text-[#C8A26A] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Showroom Utility Bar */}
      <div className="bg-[#23060B] text-stone-300 text-[11px] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#E5C384] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Nhập khẩu chính hãng Đức & Châu Âu 100%</span>
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:inline text-stone-300">
              Trụ sở Hà Nội & Chi nhánh Sala TP.HCM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${data.business.phone[0].replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-white font-bold hover:text-[#E5C384]"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5C384]" />
              <span>Hotline Kỹ Thuật: {data.business.phone[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#3B0A12]/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          {/* GIA BAO Luxhome Metallic Serif Brand */}
          <a href="#top" className="flex flex-col leading-none group">
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-wider bg-gradient-to-r from-stone-100 via-[#E5C384] to-stone-200 bg-clip-text text-transparent">
              {data.brandLogo.main}
            </span>
            <span className="text-[11px] font-serif tracking-[0.22em] text-stone-300 mt-0.5">
              {data.brandLogo.sub}
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-200">
            {data.navItems.map((item, idx) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  if (idx === 1 || idx === 2) scrollToSection('catalog-section');
                  else if (idx === 3) scrollToSection('dishwasher-spotlight');
                  else if (idx === 4) scrollToSection('projects-section');
                  else if (idx === 5) scrollToSection('showroom-section');
                  else scrollToSection('top');
                }}
                className="hover:text-[#E5C384] transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Search & Showroom Booking Button */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block w-48">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm Miele, Bosch, mã SP..."
                className="w-full pl-3.5 pr-8 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder:text-stone-300 focus:outline-none focus:border-[#E5C384]"
              />
              <Search className="w-3.5 h-3.5 text-stone-300 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="button"
              onClick={() => setConsultOpen(true)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C8A26A] to-[#DFBD86] text-[#2B060B] text-xs font-extrabold uppercase tracking-wider shadow-md hover:brightness-105 transition-all cursor-pointer"
            >
              Tư Vấn Lắp Đặt
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION MATCHING NH012 (DEEP BURGUNDY LEFT GRADIENT + WALNUT KITCHEN RIGHT + STAINLESS STEEL DISHWASHER SHOWCASE) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] bg-[#3D0A12] text-white overflow-hidden flex items-center">
        {/* Background Walnut Kitchen Image on Right */}
        <div className="absolute inset-0">
          <img
            src={data.hero.image}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Burgundy Left-to-Right Gradient Overlay exactly like NH012 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A0E17] via-[#4A0E17]/92 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left Typography Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block">
              <p className="text-3xl sm:text-4xl font-serif font-bold tracking-wider bg-gradient-to-b from-white via-stone-200 to-stone-400 bg-clip-text text-transparent">
                GIA BAO
              </p>
              <p className="text-xs font-serif tracking-[0.25em] text-stone-300 text-center">
                Luxhome
              </p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase leading-[1.12] tracking-tight text-white drop-shadow-sm">
              THIẾT BỊ BẾP
              <br />
              VÀ GIA DỤNG
              <br />
              NHẬP KHẨU CHÍNH HÃNG
            </h1>

            <p className="text-sm sm:text-lg text-stone-200 font-normal leading-relaxed max-w-xl">
              Miele, Bosch, Liebherr, LG, Philips, Dyson, trụ sở Hà Nội và chi nhánh TP.HCM
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('catalog-section')}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-[#C8A26A] to-[#E5C384] text-[#2A050A] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xl hover:brightness-105 transition-all cursor-pointer"
              >
                {data.hero.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => setConsultOpen(true)}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                {data.hero.secondaryCta}
              </button>
            </div>

            {/* Key Showroom Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg border-t border-white/15 text-xs">
              <div>
                <span className="block text-lg font-black text-[#E5C384]">6 Hãng</span>
                <span className="text-stone-300 text-[11px]">Châu Âu Chính Hãng</span>
              </div>
              <div>
                <span className="block text-lg font-black text-[#E5C384]">36 Tháng</span>
                <span className="text-stone-300 text-[11px]">Bảo Hành Tận Nơi</span>
              </div>
              <div>
                <span className="block text-lg font-black text-[#E5C384]">HN & HCM</span>
                <span className="text-stone-300 text-[11px]">Showroom Trải Nghiệm</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Card: Stainless Steel Dishwasher & Level Precision Installation (5 cols) */}
          <div id="dishwasher-spotlight" className="lg:col-span-5">
            <div className="bg-gradient-to-b from-stone-900/90 to-[#23060B]/95 backdrop-blur-md rounded-2xl p-6 border border-[#C8A26A]/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A26A]/20 text-[#E5C384] text-[10px] font-extrabold uppercase tracking-wider">
                  <Wrench className="w-3 h-3" />
                  {data.featuredDishwasherCard.badge}
                </span>
                <span className="w-12 h-3 rounded-xs bg-yellow-400 border border-stone-900 flex items-center justify-center">
                  <span className="w-3 h-1.5 rounded-full bg-lime-300 border border-stone-800" />
                </span>
              </div>

              <div className="relative h-52 rounded-xl overflow-hidden border border-white/15 bg-stone-800">
                <img
                  src={data.featuredDishwasherCard.image}
                  alt={data.featuredDishwasherCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#4A0E17]/90 border border-[#C8A26A]/50 text-[#E5C384] text-xs font-black">
                  {data.featuredDishwasherCard.price}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#E5C384]">
                  {data.featuredDishwasherCard.model}
                </p>
                <h3 className="text-base font-extrabold text-white mt-0.5">
                  {data.featuredDishwasherCard.title}
                </h3>
              </div>

              <ul className="space-y-1.5 text-xs text-stone-300">
                {data.featuredDishwasherCard.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C384] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setConsultOpen(true)}
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-[#C8A26A] hover:text-[#23060B] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Nhận Báo Giá & Khảo Sát Tủ Bếp Miễn Phí
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL EUROPEAN BRAND PARTNERS STRIP */}
      <section className="bg-white border-b border-stone-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-stone-400 mb-5">
            ĐỐI TÁC PHÂN PHỐI CHÍNH HÃNG TẠI HÀ NỘI & TP. HỒ CHÍ MINH
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {data.partnerBrands.map((brand) => {
              const isSelected =
                selectedBrand.toLowerCase() === brand.name.split(' ')[0].toLowerCase();
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => {
                    const key = brand.name.split(' ')[0];
                    setSelectedBrand(isSelected ? 'ALL' : key);
                    scrollToSection('catalog-section');
                  }}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#4A0E17] text-white border-[#4A0E17] shadow-md'
                      : 'bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-800'
                  }`}
                >
                  <span className="block text-sm font-black tracking-widest">
                    {brand.name}
                  </span>
                  <span
                    className={`block text-[10px] font-semibold mt-0.5 ${
                      isSelected ? 'text-[#E5C384]' : 'text-[#7A1C2A]'
                    }`}
                  >
                    {brand.origin}
                  </span>
                  <span
                    className={`block text-[10px] mt-1 line-clamp-1 ${
                      isSelected ? 'text-stone-200' : 'text-stone-500'
                    }`}
                  >
                    {brand.specialty}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE LUXURY KITCHEN EQUIPMENT CATALOG */}
      <section id="catalog-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A1C2A]">
              DANH MỤC THIẾT BỊ BẾP NHẬP KHẨU
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-stone-900">
              Tuyển Tập Thiết Bị Bếp Thượng Hạng Châu Âu
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {data.equipmentCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#4A0E17] text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-700 hover:border-[#4A0E17]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {selectedBrand !== 'ALL' && (
          <div className="mb-6 flex items-center gap-2 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#4A0E17]" />
            <span>
              Đang lọc thương hiệu: <strong>{selectedBrand}</strong>
            </span>
            <button
              type="button"
              onClick={() => setSelectedBrand('ALL')}
              className="text-[#4A0E17] underline font-bold ml-2 cursor-pointer"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedEquipment(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-[#4A0E17] text-white text-[10px] font-extrabold uppercase tracking-wider">
                      {item.brand}
                    </span>
                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-[#C8A26A] text-[#23060B] text-[10px] font-extrabold uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 text-white text-[10px] font-semibold">
                    {item.origin}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span>Mã: {item.code}</span>
                    <span>{item.warranty}</span>
                  </div>
                  <h3 className="mt-1.5 text-base font-extrabold text-stone-900 group-hover:text-[#4A0E17] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.specs.map((sp, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-semibold"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
                <div>
                  {item.originalPrice && (
                    <span className="block text-[11px] text-stone-400 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="text-base font-black text-[#4A0E17]">{item.price}</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerToast(`Đã gửi yêu cầu báo giá kỹ thuật cho ${item.code}!`);
                  }}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#4A0E17] hover:bg-[#31080E] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Nhận Báo Giá</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ARCHITECTURAL WALNUT KITCHEN & FINE DINING PROJECTS */}
      <section id="projects-section" className="py-16 bg-[#231B18] text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5C384]">
              CÔNG TRÌNH THỰC TẾ HÀ NỘI & TP.HCM
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black">
              Giải Pháp Không Gian Bếp Gỗ Óc Chó & Nhà Hàng Fine Dining
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-300">
              Đồng bộ thiết kế kỹ thuật điện - nước, mặt đá bàn đảo và cân chỉnh lắp đặt chuẩn xác từng milimet theo tiêu chuẩn Miele & Bosch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.kitchenProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => triggerToast(`Đang xem hồ sơ kỹ thuật: ${proj.title}`)}
                className="group bg-[#2E2420] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A26A]/60 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#4A0E17] text-[#E5C384] text-[10px] font-bold">
                      {proj.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <p className="text-[11px] font-semibold text-[#E5C384]">
                      {proj.location}
                    </p>
                    <h3 className="text-base font-extrabold text-white leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-black/25 border-t border-white/10 text-[11px] font-bold text-[#E5C384]">
                  {proj.equipmentPackage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOWROOM HÀ NỘI & CHI NHÁNH TP.HCM */}
      <section id="showroom-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4A0E17]">
            HỆ THỐNG SHOWROOM CHÍNH HÃNG
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-black text-stone-900">
            Trụ Sở Hà Nội & Chi Nhánh TP. Hồ Chí Minh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.showrooms.map((sr) => (
            <div
              key={sr.city}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                <img
                  src={sr.image}
                  alt={sr.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#4A0E17] text-[#E5C384] text-[10px] font-extrabold uppercase tracking-wider">
                    {sr.city}
                  </span>
                  <h3 className="mt-2 text-base font-black text-stone-900">
                    {sr.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#4A0E17] shrink-0 mt-0.5" />
                    <span>{sr.address}</span>
                  </p>
                  <p className="mt-1.5 text-xs text-stone-600 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#4A0E17] shrink-0" />
                    <strong className="text-stone-900">{sr.phone}</strong>
                  </p>
                  <p className="mt-1.5 text-[11px] text-stone-500">{sr.hours}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setConsultOpen(true)}
                  className="self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 hover:bg-[#4A0E17] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#E5C384]" />
                  <span>Đặt Lịch Trải Nghiệm Bếp Mẫu</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B0509] text-stone-300 text-xs border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-3">
            <div>
              <span className="text-2xl font-serif font-bold tracking-wider text-white">
                {data.brandLogo.main}
              </span>
              <span className="block text-[11px] font-serif tracking-[0.22em] text-[#E5C384]">
                {data.brandLogo.sub}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {data.business.description}
            </p>
            <p className="text-xs text-[#E5C384] font-semibold">
              Hotline toàn quốc: {data.business.phone[0]} • {data.business.phone[1]}
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Thương Hiệu Phân Phối Chính Hãng
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              {data.partnerBrands.map((b) => (
                <li key={b.id}>
                  • <strong className="text-stone-200">{b.name}</strong> ({b.origin}) —{' '}
                  {b.specialty}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
              Dịch Vụ Kỹ Thuật Gia Bảo
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>• Khảo sát & bản vẽ kỹ thuật tủ bếp 3D</li>
              <li>• Lắp đặt cân bằng thủy chuẩn Đức</li>
              <li>• Bảo dưỡng định kỳ Miele, Bosch, Liebherr</li>
              <li>• Cung cấp linh kiện chính hãng Châu Âu</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/40 py-3.5 text-center text-[11px] text-stone-400 border-t border-white/5">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* Equipment Detail Modal */}
      {selectedEquipment && (
        <div
          onClick={() => setSelectedEquipment(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
          >
            <div className="relative h-60 bg-stone-100">
              <img
                src={selectedEquipment.image}
                alt={selectedEquipment.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedEquipment(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#4A0E17]">
                <span>
                  {selectedEquipment.brand} • {selectedEquipment.code}
                </span>
                <span>{selectedEquipment.origin}</span>
              </div>
              <h3 className="text-lg font-black text-stone-900">
                {selectedEquipment.name}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedEquipment.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedEquipment.specs.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 text-[11px] font-semibold"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
              <div className="pt-3 flex items-center justify-between border-t border-stone-100">
                <span className="text-xl font-black text-[#4A0E17]">
                  {selectedEquipment.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEquipment(null);
                    setConsultOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#4A0E17] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đặt Lịch Xem Thực Tế
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Showroom & Installation Consultation Modal */}
      {consultOpen && (
        <div
          onClick={() => setConsultOpen(false)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          >
            <div className="p-4 bg-[#4A0E17] text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#E5C384]" />
                <span>Đặt Lịch Tư Vấn Showroom & Kỹ Thuật</span>
              </div>
              <button type="button" onClick={() => setConsultOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConsultOpen(false);
                triggerToast(
                  `Cảm ơn ${consultForm.name || 'Quý khách'}! Kỹ sư trưởng Gia Bảo Luxhome tại ${consultForm.city} sẽ liên hệ ngay.`
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
                  value={consultForm.name}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, name: e.target.value })
                  }
                  placeholder="Nhập họ tên..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#4A0E17]"
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
                    value={consultForm.phone}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, phone: e.target.value })
                    }
                    placeholder="0903..."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#4A0E17]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Showroom đăng ký
                  </label>
                  <select
                    value={consultForm.city}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, city: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#4A0E17]"
                  >
                    <option value="Trụ sở Hà Nội">Trụ sở Hà Nội</option>
                    <option value="Chi nhánh TP.HCM">Chi nhánh TP.HCM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Thiết bị quan tâm (Miele, Bosch, Liebherr...)
                </label>
                <textarea
                  rows={3}
                  value={consultForm.note}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, note: e.target.value })
                  }
                  placeholder="Ví dụ: Tư vấn bộ lò hấp nướng Miele + máy rửa chén Bosch âm tủ..."
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-[#4A0E17]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#4A0E17] hover:bg-[#31080E] text-white font-extrabold uppercase tracking-wider cursor-pointer"
              >
                Gửi Yêu Cầu Tư Vấn Chính Hãng
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
