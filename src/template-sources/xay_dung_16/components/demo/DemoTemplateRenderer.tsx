"use client";

import React, { useState } from "react";
import {
  Star,
  Search,
  ChevronDown,
  ArrowRight,
  Quote,
  MapPin,
  Phone,
  Mail,
  Award,
  ChevronRight,
  Share2,
  X,
  CheckCircle2
} from "lucide-react";
import { Facebook, Instagram } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung16DefaultData,
  type XayDung16Data,
  type XayDung16RoomItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: XayDung16Data = adaptClonedTemplateData(xayDung16DefaultData, incomingData);

  const [categoryFilter, setCategoryFilter] = useState("Tất cả danh mục");
  const [bedFilter, setBedFilter] = useState("Loại giường");
  const [daysFilter, setDaysFilter] = useState("Số ngày");
  const [priceFilter, setPriceFilter] = useState("Giá phòng");
  const [selectedRoom, setSelectedRoom] = useState<XayDung16RoomItem | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const currentTestimonial =
    (data.testimonials && data.testimonials[testimonialIdx]) ||
    (data.testimonials && data.testimonials[0]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedRoom(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-neutral-200 font-sans selection:bg-[#9e8a68] selection:text-white">
      {/* 1. LUXURY CENTERED BLACK HEADER */}
      <header className="bg-[#0b0b0b] text-white pt-7 pb-4 border-b border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* 5 Gold Stars */}
          <div className="flex items-center justify-center gap-1.5 text-[#b59f7b] mb-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="w-3 h-3 fill-[#b59f7b]" />
            ))}
          </div>

          {/* Brand Title */}
          <a href="#trang-chu" className="inline-block">
            <h1 className="text-2xl sm:text-3xl font-serif tracking-[0.25em] uppercase text-white">
              {data.business.name}
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mt-1">
              {data.brandSubline || "LUXURY HOTEL VIETNAM"}
            </p>
          </a>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] font-semibold uppercase tracking-widest text-neutral-300">
            <a
              href="#trang-chu"
              className="text-white border-b-2 border-[#9e8a68] pb-1.5"
            >
              TRANG CHỦ
            </a>
            <a
              href="#phong-khach-san"
              className="inline-flex items-center gap-1 hover:text-[#b59f7b] pb-1.5 transition-colors"
            >
              <span>LOẠI PHÒNG</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#b59f7b] pb-1.5 transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#b59f7b] pb-1.5 transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#b59f7b] pb-1.5 transition-colors"
            >
              LIÊN HỆ
            </a>
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="text-neutral-400 hover:text-white pb-1.5"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>
      </header>

      {/* 2. HERO BANNER + FILTER/BOOKING BAR */}
      <section id="trang-chu" className="relative">
        <div className="relative h-[430px] md:h-[520px] w-full overflow-hidden bg-black">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />

          {/* Centered Romantic Serif Headline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide drop-shadow-md">
              {data.hero.title}
            </h2>
            <p className="mt-3 text-sm sm:text-lg font-serif text-neutral-200 tracking-wide">
              {data.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Horizontal Filter Bar (#2d2721) */}
        <div className="bg-[#2d2721] py-7 px-4 border-y border-neutral-800">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2.5">
            <div className="relative w-36 sm:w-40">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                aria-label="Danh mục"
                className="w-full appearance-none bg-white text-neutral-700 text-xs px-3 py-2.5 pr-7 focus:outline-none"
              >
                <option>Danh mục</option>
                <option>Phòng Tiêu Chuẩn</option>
                <option>Phòng Cao Cấp</option>
                <option>Phòng Suite Hạng Sang</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative w-36 sm:w-40">
              <select
                value={bedFilter}
                onChange={(e) => setBedFilter(e.target.value)}
                aria-label="Loại giường"
                className="w-full appearance-none bg-white text-neutral-700 text-xs px-3 py-2.5 pr-7 focus:outline-none"
              >
                <option>Loại giường</option>
                <option>Giường Đôi Lớn (King)</option>
                <option>Hai Giường Đôi</option>
                <option>Giường Hoàng Gia</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative w-28 sm:w-32">
              <select
                value={daysFilter}
                onChange={(e) => setDaysFilter(e.target.value)}
                aria-label="Số ngày"
                className="w-full appearance-none bg-white text-neutral-700 text-xs px-3 py-2.5 pr-7 focus:outline-none"
              >
                <option>Số ngày</option>
                <option>1 Đêm</option>
                <option>2 Đêm</option>
                <option>3+ Đêm</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative w-32 sm:w-36">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                aria-label="Giá phòng"
                className="w-full appearance-none bg-white text-neutral-700 text-xs px-3 py-2.5 pr-7 focus:outline-none"
              >
                <option>Giá phòng</option>
                <option>800,000 ₫</option>
                <option>850,000 ₫</option>
                <option>1,000,000 ₫</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <a
              href="#phong-khach-san"
              className="bg-[#9e8a68] hover:bg-[#b59f7b] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              {data.hero.ctaText || "TÌM KIẾM"}
            </a>
          </div>
        </div>
      </section>

      {/* 3. 3-COLUMN FEATURE PILLARS ON PITCH BLACK (#050505) */}
      <section className="py-16 md:py-20 bg-[#050505] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.pillars.map((pillar) => (
            <div key={pillar.id} className="text-center flex flex-col items-center">
              <div className="w-full h-48 overflow-hidden mb-5">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                {pillar.title}
              </h3>
              <div className="w-5 h-0.5 bg-[#9e8a68] my-3" />
              <p className="text-xs font-serif text-neutral-300 leading-relaxed px-2">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PHÒNG KHÁCH SẠN (LIGHT MARBLE / OFF-WHITE SECTION #f2f2f2) */}
      <section
        id="phong-khach-san"
        className="py-16 md:py-24 bg-[#f2f2f2] text-neutral-800 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-neutral-800">
              PHÒNG KHÁCH SẠN
            </h2>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 text-xs font-serif italic text-[#8c7856] hover:text-neutral-900 mt-2"
            >
              <span>Xem tất cả các phòng</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="group cursor-pointer"
              >
                <div className="h-48 overflow-hidden bg-white shadow-sm mb-3.5">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[11px] font-serif uppercase tracking-wider text-neutral-500 group-hover:text-neutral-900 transition-colors">
                  {room.title}
                </h3>
                <p className="text-xs font-serif italic font-bold text-neutral-800 mt-1">
                  {room.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VÀI ĐIỀU VỀ MONA (DARK NIGHT PARALLAX BANNER) */}
      <section
        id="gioi-thieu"
        className="relative py-20 md:py-28 bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${data.aboutBannerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f24]/85 via-black/75 to-black/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-white">
              {data.business.aboutTitle || `VÀI ĐIỀU VỀ ${data.business.name}`}
            </h2>
            <div className="w-8 h-0.5 bg-white mx-auto my-3" />
            <p className="text-xs font-serif italic text-neutral-200">
              {data.aboutInspiration}
            </p>
          </div>

          <div className="md:col-span-7">
            <p className="text-xs sm:text-sm font-serif text-neutral-100 leading-relaxed">
              <Quote className="inline-block w-4 h-4 text-neutral-400 mr-1.5 -mt-1 rotate-180" />
              {data.aboutQuote}
              <Quote className="inline-block w-4 h-4 text-neutral-400 ml-1.5 -mt-1" />
            </p>
          </div>
        </div>
      </section>

      {/* 6. TIN TỨC & THƯ VIỆN (DARK CHARCOAL #262626 2-COLUMN SECTION) */}
      <section id="tin-tuc" className="py-16 md:py-20 bg-[#262626] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: TIN TỨC */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
                TIN TỨC
              </h2>
              <div className="w-6 h-0.5 bg-white mt-2" />
            </div>

            <div className="divide-y divide-neutral-700/60">
              {data.hotelNews.map((item) => (
                <article key={item.id} className="py-4 first:pt-0 flex items-start gap-4">
                  {/* Champagne Gold Date Box */}
                  <div className="w-11 h-11 bg-[#a89574] text-white flex flex-col items-center justify-center shrink-0 text-center leading-tight">
                    <span className="text-xs font-bold">{item.day}</span>
                    <span className="text-[9px]">{item.month}</span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-white hover:text-[#b59f7b] cursor-pointer mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-1.5 text-xs font-serif italic text-[#b59f7b] hover:text-white"
              >
                <span>Đọc tất cả tin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: THƯ VIỆN MOSAIC GRID */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white">
                THƯ VIỆN
              </h2>
              <div className="w-6 h-0.5 bg-white mt-2" />
            </div>

            {/* Top Mosaic Row: 1 Large 2x2 Square on Left + 4 Small Squares on Right */}
            <div className="grid grid-cols-4 gap-2.5">
              <div
                onClick={() => setLightboxImg(data.galleryMainImage)}
                className="col-span-2 row-span-2 h-44 sm:h-48 overflow-hidden cursor-pointer group"
              >
                <img
                  src={data.galleryMainImage}
                  alt="Hồ bơi nghỉ dưỡng"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {data.galleryRightImages.slice(0, 4).map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImg(imgUrl)}
                  className="col-span-1 h-[83px] sm:h-[91px] overflow-hidden cursor-pointer group"
                >
                  <img
                    src={imgUrl}
                    alt={`Thư viện ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Mosaic Row: 4 Small Squares */}
            <div className="grid grid-cols-4 gap-2.5 mt-2.5">
              {data.galleryBottomImages.slice(0, 4).map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxImg(imgUrl)}
                  className="h-[83px] sm:h-[91px] overflow-hidden cursor-pointer group"
                >
                  <img
                    src={imgUrl}
                    alt={`Thư viện dưới ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. NHẬN XÉT KHÁCH HÀNG (#1d1d1d STRIP) */}
      <section className="py-14 md:py-16 bg-[#1d1d1d] text-center border-t border-neutral-800/80">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-base md:text-lg font-normal uppercase tracking-widest text-[#b59f7b] mb-6">
            NHẬN XÉT KHÁCH HÀNG
          </h2>

          {currentTestimonial && (
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-serif text-neutral-200 leading-relaxed max-w-xl mx-auto">
                {currentTestimonial.content}
              </p>
              <div className="text-neutral-400 text-xs">▾</div>
              <div className="text-xs font-serif text-white">
                {currentTestimonial.author} – {currentTestimonial.role}
              </div>
            </div>
          )}

          {data.testimonials && data.testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-5">
              {data.testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTestimonialIdx(idx)}
                  aria-label={`Đánh giá ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === testimonialIdx ? "bg-[#b59f7b]" : "bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 8. FOOTER (#141414 DEEP BLACK 3 COLUMNS) */}
      <footer id="lien-he" className="bg-[#141414] text-neutral-300 pt-14 pb-6 border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
            {/* Col 1: ĐẶT PHÒNG NGAY ! */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-xs font-serif uppercase tracking-widest text-[#b59f7b]">
                ĐẶT PHÒNG NGAY !
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-serif">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#b59f7b] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#b59f7b] shrink-0" />
                  <span>{data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#b59f7b] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>

              <div className="flex items-center gap-3 pt-2">
                {[Facebook, Instagram, Share2].map((Icon, i) => (
                  <a
                    key={i}
                    href="#lien-he"
                    className="text-neutral-400 hover:text-[#b59f7b] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: BÀI VIẾT MỚI */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-xs font-serif uppercase tracking-widest text-[#b59f7b]">
                BÀI VIẾT MỚI
              </h3>
              <ul className="space-y-2.5 text-xs font-serif text-neutral-300">
                {data.recentLinks.map((link, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 hover:text-[#b59f7b] cursor-pointer">
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: GIẢI THƯỞNG */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-xs font-serif uppercase tracking-widest text-[#b59f7b]">
                GIẢI THƯỞNG
              </h3>

              <div className="bg-[#1f1f1f] border border-neutral-800 p-4 flex items-center justify-around gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-7 h-7 text-[#b59f7b] shrink-0" />
                  <div className="text-[10px] font-extrabold uppercase leading-tight text-white">
                    HOTEL MASTER AWARD
                    <div className="text-[#b59f7b]">2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Award className="w-7 h-7 text-[#b59f7b] shrink-0" />
                  <div className="text-[10px] font-extrabold uppercase leading-tight text-white">
                    BOUTIQUE
                    <div className="text-neutral-400">CHOICE</div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] font-serif text-neutral-400 leading-relaxed">
                {data.awardsNote}
              </p>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-neutral-500">
            © All rights reserved. Thiết kế bởi{" "}
            <strong className="text-neutral-300">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* ROOM DETAIL & BOOKING MODAL */}
      {selectedRoom && (
        <div
          onClick={() => setSelectedRoom(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-[#1b1b1b] border border-[#9e8a68]/40 text-white overflow-hidden shadow-2xl"
          >
            <div className="relative h-56">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#9e8a68]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-serif uppercase tracking-wider text-[#b59f7b]">
                  {selectedRoom.title}
                </h4>
                <span className="text-sm font-serif italic font-bold text-white">
                  {selectedRoom.price} / đêm
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {selectedRoom.description}
              </p>

              <div className="flex gap-6 text-xs text-neutral-400 border-y border-neutral-800 py-2.5">
                <span>Diện tích: <strong className="text-white">{selectedRoom.area}</strong></span>
                <span>Sức chứa: <strong className="text-white">{selectedRoom.capacity}</strong></span>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên quý khách"
                    className="bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#9e8a68]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    className="bg-neutral-900 border border-neutral-700 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#9e8a68]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#9e8a68] hover:bg-[#b59f7b] text-white text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  XÁC NHẬN ĐẶT PHÒNG
                </button>
                {bookingSuccess && (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đã gửi yêu cầu đặt phòng thành công!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
        >
          <div className="relative max-w-3xl w-full">
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#b59f7b]"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImg}
              alt="Thư viện khách sạn"
              className="w-full max-h-[80vh] object-cover border border-[#9e8a68]/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
