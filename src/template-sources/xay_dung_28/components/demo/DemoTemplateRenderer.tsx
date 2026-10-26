'use client';

import React, { useState } from 'react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  mockData,
  SwingOneResortTemplateData,
  RoomStripItem,
  ExperienceCard,
} from '../../data/mockData';
import { getIcon } from '../../data/iconMap';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Sun,
  Waves,
  Maximize2,
  Globe,
} from 'lucide-react';

interface DemoTemplateRendererProps {
  data?: any;
  template?: any;
}

export function DemoTemplateRenderer({ data: incomingData, template }: DemoTemplateRendererProps) {
  const data: SwingOneResortTemplateData = adaptClonedTemplateData(
    mockData,
    incomingData || template
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Interactive Booking Form State
  const [checkIn, setCheckIn] = useState('2026-07-15');
  const [checkOut, setCheckOut] = useState('2026-07-18');
  const [adults, setAdults] = useState('02 Người lớn');
  const [children, setChildren] = useState('01 Trẻ em');
  const [selectedRoomName, setSelectedRoomName] = useState(
    data.roomsShowcase.rooms[0]?.name || 'Phòng Hoàng Gia'
  );
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Room detail modal
  const [modalRoom, setModalRoom] = useState<RoomStripItem | null>(null);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceCard | null>(null);

  const currentSlide =
    data.hero.slides[activeSlideIndex] || data.hero.slides[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-[#2b2b2b] font-sans selection:bg-[#c26a4a] selection:text-white">
      {/* 1. MAIN WHITE HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Sunset Palm Logo */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-full bg-gradient-to-b from-[#e07a5f] via-[#c26a4a] to-[#3d405b] flex items-center justify-center text-white shadow-sm relative overflow-hidden">
              <Sun className="w-5 h-5 text-amber-200 -translate-y-0.5" />
              <Waves className="w-6 h-3.5 text-white/90 absolute bottom-1" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-2xl font-bold tracking-tight text-[#2b2b2b] leading-none">
                {data.company.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#c26a4a] font-semibold mt-1">
                SWINGONE RESORT & SPA
              </span>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {data.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors py-2 ${
                  idx === 0
                    ? 'text-[#c26a4a] border-b-2 border-[#c26a4a]'
                    : 'text-stone-700 hover:text-[#c26a4a]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: ĐẶT PHÒNG + Search + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#booking-banner"
              className="hidden sm:inline-flex items-center justify-center bg-[#c26a4a] hover:bg-[#a95638] text-white text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-colors shadow-sm"
            >
              ĐẶT PHÒNG
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Tìm kiếm"
              className="p-2 text-stone-600 hover:text-[#c26a4a] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Mở menu"
              className="p-2 text-stone-700 hover:text-[#c26a4a] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="bg-stone-50 border-t border-stone-200 py-3 px-4">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <Search className="w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Tìm kiếm hạng phòng, dịch vụ Spa, tiệc cưới bờ biển..."
                className="w-full bg-transparent text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* Mobile / Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-5 space-y-3 shadow-lg">
            {data.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-bold uppercase tracking-widest text-stone-800 hover:text-[#c26a4a] border-b border-stone-100"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#booking-banner"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-[#c26a4a] text-white text-xs font-bold uppercase tracking-widest py-3"
              >
                ĐẶT PHÒNG NGAY
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Sunset Infinity Pool & Palms) */}
      <section
        id="hero"
        className="relative h-[540px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden bg-stone-900"
      >
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="w-full h-full object-cover object-center transition-all duration-700 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <p className="text-sm sm:text-base font-medium tracking-wide text-stone-200 mb-2">
              {currentSlide.eyebrow || data.hero.eyebrow}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-5 drop-shadow-sm">
              {activeSlideIndex === 0 ? data.hero.title : currentSlide.title}
            </h1>
            <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed mb-8 max-w-xl">
              {data.hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 bg-[#c26a4a] hover:bg-[#a95638] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 transition-all shadow-lg"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#service-pricing"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/40 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 transition-all"
              >
                <span>Bảng giá dịch vụ</span>
              </a>
            </div>
          </div>
        </div>

        {/* Slider Dots at Bottom Center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {data.hero.slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlideIndex(index)}
              aria-label={`Chuyển đến slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeSlideIndex === index
                  ? 'w-7 bg-white'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. INTRO EDITORIAL + 5-IMAGE BENTO COLLAGE */}
      <section id="intro" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 3-Column Editorial Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start mb-12 lg:mb-16">
            <div className="lg:text-right">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2b2b2b] leading-snug">
                {data.introBento.leadQuote}
              </h2>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.introBento.paragraph1}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.introBento.paragraph2}
              </p>
            </div>
          </div>

          {/* 5-Image Bento Collage (2 Stacked Left | 1 Tall Center | 2 Stacked Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Left Column: 2 Stacked Photos */}
            <div className="md:col-span-3 flex flex-col gap-5">
              {data.introBento.leftStack.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative h-56 md:h-60 overflow-hidden bg-stone-100"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e69577]">
                      {photo.category}
                    </span>
                    <p className="font-serif text-sm text-white font-semibold mt-0.5">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column: 1 Large Tall Photo */}
            <div className="md:col-span-6">
              <div className="group relative h-80 md:h-[500px] overflow-hidden bg-stone-100">
                <img
                  src={data.introBento.centerFeature.image}
                  alt={data.introBento.centerFeature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0a68b]">
                    {data.introBento.centerFeature.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-semibold mt-1">
                    {data.introBento.centerFeature.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: 2 Stacked Photos */}
            <div className="md:col-span-3 flex flex-col gap-5">
              {data.introBento.rightStack.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative h-56 md:h-60 overflow-hidden bg-stone-100"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e69577]">
                      {photo.category}
                    </span>
                    <p className="font-serif text-sm text-white font-semibold mt-0.5">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE PRICING TABLE ("Giá dịch vụ tại Mona Resort") */}
      <section id="service-pricing" className="py-16 lg:py-24 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (Right-Aligned Heading & Intro) */}
            <div className="lg:col-span-4 lg:text-right lg:pr-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b2b2b] leading-snug mb-4">
                {data.servicePricing.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.servicePricing.description}
              </p>
            </div>

            {/* Right Column: 5 Pricing Rows with Dotted Leaders */}
            <div className="lg:col-span-8 space-y-6">
              {data.servicePricing.items.map((item) => (
                <div key={item.id} className="group">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2b2b2b] shrink-0 group-hover:text-[#c26a4a] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-stone-400/80 mx-1" />
                    <span className="font-serif text-base sm:text-lg font-bold text-[#2b2b2b] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                    <span className="text-[11px] text-stone-400 italic">
                      {item.subtitle}
                    </span>
                    <span className="text-xs text-stone-500">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROOMS SHOWCASE (3-Col Editorial Intro + 4-Col Full-Bleed Room Strip) */}
      <section id="rooms" className="pt-16 lg:pt-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            <div className="lg:text-right">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2b2b2b] leading-snug">
                {data.roomsShowcase.leadQuote}
              </h2>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.roomsShowcase.paragraph1}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.roomsShowcase.paragraph2}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Full-Bleed Tall Room Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.roomsShowcase.rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setModalRoom(room)}
              className="group relative h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden cursor-pointer bg-stone-900 border-r border-white/10 last:border-r-0"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Top Right Hover Badge */}
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Centered Room Title & Price */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                <p className="text-[10px] uppercase tracking-[0.22em] text-stone-300 mb-1">
                  {room.subtitle} • {room.area}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-1 group-hover:text-[#f0a68b] transition-colors">
                  {room.name}
                </h3>
                <p className="text-sm font-bold text-[#e88d6d]">
                  {room.price}{' '}
                  <span className="text-xs font-normal text-stone-300">
                    {room.unit}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ON-SITE AMENITIES ("Tiện ích tại chỗ" - 3x2 Icon Grid) */}
      <section id="amenities" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b2b2b] mb-3">
              {data.onSiteAmenities.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              {data.onSiteAmenities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {data.onSiteAmenities.items.map((amenity) => {
              const IconComponent = getIcon(amenity.iconName);
              return (
                <div
                  key={amenity.id}
                  className="flex flex-col items-center text-center group px-4"
                >
                  <div className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-[#2b2b2b] group-hover:border-[#c26a4a] group-hover:bg-[#c26a4a] group-hover:text-white transition-all mb-4">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2b2b2b] mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. OCEAN PARALLAX BOOKING BANNER ("Đặt phòng & dịch vụ ngay hôm nay...") */}
      <section
        id="booking-banner"
        className="relative py-16 lg:py-24 bg-stone-900 overflow-hidden"
      >
        <img
          src={data.bookingBanner.backgroundImage}
          alt="Đặt phòng ưu đãi"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Right-Aligned White Serif Heading */}
            <div className="lg:col-span-5 text-white lg:text-right">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#f0a68b] mb-2">
                ƯU ĐÃI ĐẶT SỚM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
                {data.bookingBanner.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {data.bookingBanner.subtitle}
              </p>
            </div>

            {/* Right Column: Translucent Dark Booking Box */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleBookingSubmit}
                className="bg-black/65 backdrop-blur-md border border-white/15 p-6 sm:p-8 text-white"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Ngày nhận phòng *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        className="w-full bg-white text-stone-800 text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Ngày trả phòng *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                        className="w-full bg-white text-stone-800 text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Người lớn
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-white text-stone-800 text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                    >
                      <option>01 Người lớn</option>
                      <option>02 Người lớn</option>
                      <option>04 Người lớn</option>
                      <option>Gia đình / Đoàn riêng</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Trẻ em
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-white text-stone-800 text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                    >
                      <option>00 Trẻ em</option>
                      <option>01 Trẻ em</option>
                      <option>02 Trẻ em</option>
                      <option>03 Trẻ em</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Hạng phòng yêu thích
                    </label>
                    <select
                      value={selectedRoomName}
                      onChange={(e) => setSelectedRoomName(e.target.value)}
                      className="w-full bg-white text-stone-800 text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                    >
                      {data.roomsShowcase.rooms.map((rm) => (
                        <option key={rm.id} value={rm.name}>
                          {rm.name} ({rm.price})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-300 mb-1.5">
                      Số điện thoại liên hệ
                    </label>
                    <input
                      type="tel"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="Nhập SĐT nhận xác nhận..."
                      className="w-full bg-white text-stone-800 text-xs sm:text-sm px-3.5 py-2.5 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="bg-[#c26a4a] hover:bg-[#a95638] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-3.5 transition-colors"
                  >
                    {data.bookingBanner.ctaText}
                  </button>
                  {bookingSuccess && (
                    <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>
                        Đã ghi nhận yêu cầu giữ {selectedRoomName} ({checkIn} →{' '}
                        {checkOut})!
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEW SERVICES ("Dịch vụ mới" - 3 Square Photo Cards) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b2b2b] mb-3">
              {data.newExperiences.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              {data.newExperiences.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.newExperiences.items.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className="group cursor-pointer text-center"
              >
                <div className="relative aspect-square overflow-hidden bg-stone-100 mb-5">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#2b2b2b] text-xs font-bold uppercase tracking-widest px-4 py-2 shadow">
                      Xem chi tiết
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2b2b2b] group-hover:text-[#c26a4a] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm font-bold text-[#c26a4a] mt-1">
                  {exp.price}{' '}
                  <span className="text-xs font-normal text-stone-400">
                    {exp.unit}
                  </span>
                </p>
                <p className="text-xs text-stone-500 mt-2 line-clamp-2 px-2">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. POOLSIDE PARALLAX BANNER ("Thiên đường nghỉ dưỡng lý tưởng") */}
      <section className="relative py-24 lg:py-32 bg-stone-900 overflow-hidden text-center text-white">
        <img
          src={data.paradiseBanner.backgroundImage}
          alt={data.paradiseBanner.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-200 mb-3">
            {data.paradiseBanner.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-8 leading-tight">
            {data.paradiseBanner.title}
          </h2>
          <a
            href="#booking-banner"
            className="inline-block bg-[#c26a4a] hover:bg-[#a95638] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 transition-colors shadow-md"
          >
            {data.paradiseBanner.ctaText}
          </a>
        </div>
      </section>

      {/* 10. NEWS CHECKERBOARD ("Tin tức mới" - 3x2 Alternating Image/Text Grid) */}
      <section id="news" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b2b2b] mb-3">
              {data.newsCheckerboard.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              {data.newsCheckerboard.subtitle}
            </p>
          </div>

          {/* 3x2 Checkerboard Grid matching XD028 screenshot */}
          {(() => {
            const n1 = data.newsCheckerboard.items[0];
            const n2 = data.newsCheckerboard.items[1];
            const n3 = data.newsCheckerboard.items[2];
            return (
              <div className="grid grid-cols-1 md:grid-cols-3 border border-stone-100 shadow-sm">
                {/* Cell 1 (Row 1 Col 1): Image 1 */}
                <div className="aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={n1.image}
                    alt={n1.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Cell 2 (Row 1 Col 2): Text Card 1 */}
                <div className="aspect-square p-6 lg:p-8 flex flex-col justify-center items-center text-center bg-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c26a4a] mb-2">
                    {n1.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2b2b2b] mb-2 leading-snug hover:text-[#c26a4a] transition-colors">
                    {n1.title}
                  </h3>
                  <p className="text-[11px] text-[#c26a4a] italic mb-3">
                    {n1.date}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                    {n1.excerpt}
                  </p>
                </div>

                {/* Cell 3 (Row 1 Col 3): Image 2 */}
                <div className="aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={n2.image}
                    alt={n2.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Cell 4 (Row 2 Col 1): Text Card 2 */}
                <div className="aspect-square p-6 lg:p-8 flex flex-col justify-center items-center text-center bg-white border-t border-stone-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c26a4a] mb-2">
                    {n2.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2b2b2b] mb-2 leading-snug hover:text-[#c26a4a] transition-colors">
                    {n2.title}
                  </h3>
                  <p className="text-[11px] text-[#c26a4a] italic mb-3">
                    {n2.date}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                    {n2.excerpt}
                  </p>
                </div>

                {/* Cell 5 (Row 2 Col 2): Image 3 */}
                <div className="aspect-square overflow-hidden bg-stone-100 border-t border-stone-100">
                  <img
                    src={n3.image}
                    alt={n3.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Cell 6 (Row 2 Col 3): Text Card 3 */}
                <div className="aspect-square p-6 lg:p-8 flex flex-col justify-center items-center text-center bg-white border-t border-stone-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#c26a4a] mb-2">
                    {n3.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2b2b2b] mb-2 leading-snug hover:text-[#c26a4a] transition-colors">
                    {n3.title}
                  </h3>
                  <p className="text-[11px] text-[#c26a4a] italic mb-3">
                    {n3.date}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                    {n3.excerpt}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 11. DARK FOOTER (#1b1b1b) */}
      <footer id="contact" className="bg-[#1b1b1b] text-stone-400 pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Brand Info */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-5">
                {data.company.name}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed mb-6">
                {data.company.slogan}. Tổ hợp biệt thự nghỉ dưỡng biển nhiệt đới
                được quy hoạch kiến trúc và thi công hoàn thiện theo tiêu chuẩn
                5 sao quốc tế.
              </p>
              <div className="flex items-center gap-2.5">
                {['F', 'I', 'T', 'Y'].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c26a4a] text-white text-xs font-bold flex items-center justify-center transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: THÔNG TIN LIÊN HỆ */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-5">
                THÔNG TIN LIÊN HỆ
              </h3>
              <ul className="space-y-3.5 text-xs">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c26a4a] shrink-0 mt-0.5" />
                  <span>{data.company.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c26a4a] shrink-0" />
                  <span className="text-white font-semibold">
                    {data.company.phone}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#c26a4a] shrink-0" />
                  <span>{data.company.email}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#c26a4a] shrink-0" />
                  <span>{data.company.website}</span>
                </li>
              </ul>
            </div>

            {/* Column 3: LIÊN KẾT */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-5">
                LIÊN KẾT
              </h3>
              <ul className="space-y-2.5 text-xs">
                {data.navigation.map((item, idx) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 transition-colors ${
                        idx === 0
                          ? 'text-[#c26a4a] font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: HÌNH ẢNH (3x2 Thumbnail Grid) */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white mb-5">
                HÌNH ẢNH
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden bg-stone-800"
                  >
                    <img
                      src={imgUrl}
                      alt={`Hình ảnh resort ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-stone-500">
            © Bản quyền thuộc về{' '}
            <span className="text-white font-semibold">
              {data.company.name}
            </span>{' '}
            • Thiết kế & Thi công tổ hợp nghỉ dưỡng SwingOne.
          </div>
        </div>
      </footer>

      {/* ROOM DETAIL MODAL */}
      {modalRoom && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-72 bg-stone-900">
              <img
                src={modalRoom.image}
                alt={modalRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setModalRoom(null)}
                aria-label="Đóng"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#c26a4a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 bg-[#c26a4a] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5">
                {modalRoom.price} {modalRoom.unit}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-[#c26a4a] font-bold mb-1">
                {modalRoom.subtitle}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b2b2b] mb-3">
                {modalRoom.name}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                {modalRoom.description}
              </p>
              <div className="grid grid-cols-2 gap-4 bg-stone-50 p-4 mb-6 text-xs">
                <div>
                  <span className="text-stone-400 block">Diện tích</span>
                  <span className="font-bold text-stone-800">
                    {modalRoom.area}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block">Sức chứa tiêu chuẩn</span>
                  <span className="font-bold text-stone-800">
                    {modalRoom.capacity}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalRoom(null)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900"
                >
                  Đóng
                </button>
                <a
                  href="#booking-banner"
                  onClick={() => {
                    setSelectedRoomName(modalRoom.name);
                    setModalRoom(null);
                  }}
                  className="bg-[#c26a4a] hover:bg-[#a95638] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                >
                  Chọn đặt hạng phòng này
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPERIENCE DETAIL MODAL */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-64 bg-stone-900">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                aria-label="Đóng"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#c26a4a]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-[#2b2b2b] mb-1">
                {selectedExperience.title}
              </h3>
              <p className="text-sm font-bold text-[#c26a4a] mb-4">
                {selectedExperience.price} {selectedExperience.unit}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {selectedExperience.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-500"
                >
                  Đóng
                </button>
                <a
                  href="#booking-banner"
                  onClick={() => setSelectedExperience(null)}
                  className="bg-[#c26a4a] hover:bg-[#a95638] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5"
                >
                  Đăng ký trải nghiệm
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
