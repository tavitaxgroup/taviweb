"use client";

import React, { useState } from "react";
import {
  Calendar,
  Users,
  BedDouble,
  Bath,
  Search,
  ChevronDown,
  MapPin,
  Car,
  ConciergeBell,
  Waves,
  Wifi,
  Coffee,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  X,
  CheckCircle2,
  Crown,
  Folder,
  MessageSquare,
  Plus,
  Minus,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung29Data,
  MonaHotelRoomItem,
  MonaHotelChessService,
  MonaHotelBlogPost,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung29Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive Booking / Filter Bar state matching XD029 6-column bar
  const [checkInDate, setCheckInDate] = useState("2025-06-15");
  const [checkOutDate, setCheckOutDate] = useState("2025-06-18");
  const [guestsCount, setGuestsCount] = useState(2);
  const [bedsCount, setBedsCount] = useState(1);
  const [bathsCount, setBathsCount] = useState(1);
  const [filterApplied, setFilterApplied] = useState(false);

  // Modals & active selections
  const [selectedRoom, setSelectedRoom] = useState<MonaHotelRoomItem | null>(
    null
  );
  const [selectedService, setSelectedService] =
    useState<MonaHotelChessService | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<MonaHotelBlogPost | null>(
    null
  );
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTestimonialDot, setActiveTestimonialDot] = useState(0);

  // Booking form state
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestRoomChoice, setGuestRoomChoice] = useState(
    data.roomsSection.rooms[1]?.name || "VIP Room"
  );
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "(+84) 0313-728-397");
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "info@themona.global");

  const filteredRooms = filterApplied
    ? data.roomsSection.rooms.filter(
        (r) => r.beds >= bedsCount && r.baths >= bathsCount
      )
    : data.roomsSection.rooms;

  const displayedRooms =
    filteredRooms.length > 0 ? filteredRooms : data.roomsSection.rooms;

  const handleSearchRooms = () => {
    setFilterApplied(true);
    const el = document.getElementById("danh-sach-phong");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenRoomBooking = (roomName?: string) => {
    if (roomName) setGuestRoomChoice(roomName);
    setBookingSuccess(false);
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;
    setBookingSuccess(true);
  };

  const renderAmenityIcon = (
    iconName:
      | "shuttle"
      | "parking"
      | "room-service"
      | "pool"
      | "wifi"
      | "breakfast"
  ) => {
    const cls = "w-9 h-9 text-[#d48806] stroke-[1.5]";
    switch (iconName) {
      case "shuttle":
        return <MapPin className={cls} />;
      case "parking":
        return <Car className={cls} />;
      case "room-service":
        return <ConciergeBell className={cls} />;
      case "pool":
        return <Waves className={cls} />;
      case "wifi":
        return <Wifi className={cls} />;
      case "breakfast":
        return <Coffee className={cls} />;
    }
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#d48806] selection:text-white"
    >
      {/* 1. DARK MIDNIGHT NAVBAR (#0c1220) */}
      <header className="sticky top-0 z-40 bg-[#0c1220]/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Golden Crest Logo + MONA MEDIA */}
          <a href="#trang-chu" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full border border-[#d48806]/70 bg-[#d48806]/10 flex items-center justify-center text-[#d48806]">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] text-[#d48806] uppercase font-semibold">
                LUXURY HOSPITALITY
              </span>
              <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-white group-hover:text-[#d48806] transition-colors">
                {data.business.name}
              </span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {data.header.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                  idx === 0
                    ? "text-[#d48806]"
                    : "text-slate-200 hover:text-[#d48806]"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </nav>

          {/* Right Gold Outlined CTA Button */}
          <button
            type="button"
            onClick={() => handleOpenRoomBooking()}
            className="px-4 sm:px-5 py-2.5 border border-[#d48806] text-[#d48806] hover:bg-[#d48806] hover:text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer"
          >
            {data.header.bookCta}
          </button>
        </div>
      </header>

      {/* 2. TWILIGHT RESORT HERO + OVERLAPPING 6-COLUMN SEARCH BAR */}
      <section className="relative">
        <div className="relative h-[500px] sm:h-[580px] lg:h-[640px] w-full overflow-hidden bg-[#0c1220]">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center opacity-75 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1220]/70 via-[#0c1220]/45 to-[#0c1220]/80" />

          {/* Centered Serif Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto h-full px-4 sm:px-6 flex flex-col items-center justify-center text-center text-white pb-16">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-medium leading-[1.2] tracking-tight text-white drop-shadow-md">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 font-normal tracking-wide max-w-xl">
              {data.hero.subtitle}
            </p>
            <div className="mt-7">
              <a
                href={data.hero.ctaLink || "#danh-sach-phong"}
                className="inline-block px-7 py-3.5 bg-[#d48806] hover:bg-[#b87404] text-white text-xs font-bold uppercase tracking-widest rounded-xs shadow-lg transition-all"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Overlapping 6-Column White Booking/Filter Bar matching XD029 */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-14 sm:-mt-16">
          <div className="bg-white rounded-xs shadow-2xl border border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden">
            {/* Col 1: Nhận phòng */}
            <div className="p-3.5 sm:p-4 flex flex-col items-center text-center justify-center">
              <Calendar className="w-4 h-4 text-[#d48806] mb-1" />
              <span className="text-[11px] font-bold text-slate-700">
                Nhận phòng
              </span>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="mt-1 text-[11px] text-slate-500 bg-transparent text-center focus:outline-none cursor-pointer"
              />
            </div>

            {/* Col 2: Trả phòng */}
            <div className="p-3.5 sm:p-4 flex flex-col items-center text-center justify-center">
              <Calendar className="w-4 h-4 text-[#d48806] mb-1" />
              <span className="text-[11px] font-bold text-slate-700">
                Trả phòng
              </span>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="mt-1 text-[11px] text-slate-500 bg-transparent text-center focus:outline-none cursor-pointer"
              />
            </div>

            {/* Col 3: Khách */}
            <div className="p-3.5 sm:p-4 flex flex-col items-center text-center justify-center">
              <Users className="w-4 h-4 text-[#d48806] mb-1" />
              <span className="text-[11px] font-bold text-slate-700">
                Khách
              </span>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="mt-1 text-xs text-slate-600 font-medium bg-transparent focus:outline-none cursor-pointer"
              >
                <option value={1}>1 Người</option>
                <option value={2}>2 Người</option>
                <option value={3}>3 Người</option>
                <option value={4}>4 Người</option>
              </select>
            </div>

            {/* Col 4: Giường (- 1 +) */}
            <div className="p-3.5 sm:p-4 flex flex-col items-center text-center justify-center">
              <BedDouble className="w-4 h-4 text-[#d48806] mb-1" />
              <span className="text-[11px] font-bold text-slate-700">
                Giường
              </span>
              <div className="mt-1 flex items-center gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setBedsCount((c) => Math.max(1, c - 1))}
                  className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-bold text-slate-800">{bedsCount}</span>
                <button
                  type="button"
                  onClick={() => setBedsCount((c) => Math.min(4, c + 1))}
                  className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Col 5: Phòng tắm (- 1 +) */}
            <div className="p-3.5 sm:p-4 flex flex-col items-center text-center justify-center">
              <Bath className="w-4 h-4 text-[#d48806] mb-1" />
              <span className="text-[11px] font-bold text-slate-700">
                Phòng tắm
              </span>
              <div className="mt-1 flex items-center gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setBathsCount((c) => Math.max(1, c - 1))}
                  className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-bold text-slate-800">{bathsCount}</span>
                <button
                  type="button"
                  onClick={() => setBathsCount((c) => Math.min(3, c + 1))}
                  className="w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Col 6: Solid Gold Tìm kiếm Button */}
            <button
              type="button"
              onClick={handleSearchRooms}
              className="bg-[#d48806] hover:bg-[#b87404] text-white p-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC "GIỚI THIỆU" SECTION WITH 2 STAGGERED VERTICAL PHOTOS */}
      <section id="gioi-thieu" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 5 cols: Copy */}
            <div className="lg:col-span-5">
              <div className="text-xs italic uppercase tracking-widest text-slate-400 mb-2">
                {data.aboutSection.eyebrow}
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-slate-900 leading-snug mb-5">
                {data.business.aboutTitle || data.aboutSection.heading}
              </h2>
              <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed mb-4">
                {data.business.aboutText?.[0] || data.aboutSection.leadText}
              </p>
              <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed mb-6">
                {data.business.aboutText?.[1] || data.aboutSection.bodyText}
              </p>

              {/* Architectural Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                {data.aboutSection.architecturalHighlights.map((hl, idx) => (
                  <div key={idx}>
                    <div className="text-base sm:text-lg font-serif font-bold text-[#d48806]">
                      {hl.value}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {hl.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 7 cols: 2 Staggered Vertical Images matching XD029 */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-5 sm:gap-7 items-start">
              <div className="rounded-xs overflow-hidden shadow-lg">
                <img
                  src={data.aboutSection.primaryImage}
                  alt="Toàn cảnh hồ bơi & kiến trúc nghỉ dưỡng"
                  className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-xs overflow-hidden shadow-lg mt-8 sm:mt-12">
                <img
                  src={data.aboutSection.secondaryImage}
                  alt="Trải nghiệm sảnh đón khách sang trọng"
                  className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6-CARD "DỊCH VỤ CHUYÊN NGHIỆP — Các dịch vụ tiện nghi" GRID */}
      <section className="pb-20 sm:pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="text-xs italic uppercase tracking-widest text-slate-400 mb-1.5">
              {data.amenitiesSection.eyebrow}
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-slate-900">
              {data.amenitiesSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.amenitiesSection.items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-100 rounded-xs p-6 shadow-xs hover:shadow-md hover:border-[#d48806]/40 transition-all flex flex-col justify-between min-h-[170px]"
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="shrink-0 pt-2">
                      {renderAmenityIcon(item.iconName)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH DARK NAVY (#0c1220) "PHÒNG TỐT CHO NGHỈ DƯỠNG — Phòng nghỉ đẳng cấp" */}
      <section
        id="danh-sach-phong"
        className="py-20 sm:py-24 bg-[#0c1220] text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs italic uppercase tracking-widest text-slate-400 mb-1.5">
              {data.roomsSection.eyebrow}
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white">
              {data.roomsSection.heading}
            </h2>
            {filterApplied && (
              <div className="mt-3 inline-flex items-center gap-2 text-xs text-[#d48806] bg-white/5 px-3.5 py-1 rounded-full">
                <span>
                  Đang lọc theo tiêu chí: từ {bedsCount} giường, {bathsCount}{" "}
                  phòng tắm ({guestsCount} khách)
                </span>
                <button
                  type="button"
                  onClick={() => setFilterApplied(false)}
                  className="underline hover:text-white ml-1 cursor-pointer"
                >
                  Xem tất cả
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {displayedRooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className="group cursor-pointer text-center"
              >
                <div className="relative h-64 sm:h-72 rounded-xs overflow-hidden mb-5 bg-slate-800">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Room Specs Line matching XD029 */}
                <div className="text-xs text-slate-300 font-medium mb-1.5">
                  {room.beds} Giường <span className="mx-1">•</span> {room.area}{" "}
                  <span className="mx-1">•</span> {room.perk}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-[#d48806] transition-colors mb-1.5">
                  {room.name}
                </h3>

                <div className="text-xs text-slate-300">
                  Từ{" "}
                  <span className="text-base sm:text-lg font-bold text-[#d48806] underline decoration-[#d48806]/60 underline-offset-4 mx-1">
                    {room.pricePerDay}
                  </span>{" "}
                  /ngày
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 3-COLUMN "ĐÁNH GIÁ CHẤT LƯỢNG — TRẢI NGHIỆM KHÁCH HÀNG" */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs italic uppercase tracking-widest text-slate-400 mb-1.5">
              {data.testimonialsSection.eyebrow}
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl uppercase tracking-wide text-slate-900">
              {data.testimonialsSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((tes, idx) => (
              <div
                key={tes.id || idx}
                onClick={() => setActiveTestimonialDot(idx)}
                className={`bg-white rounded-xs p-7 border transition-all cursor-pointer ${
                  activeTestimonialDot === idx
                    ? "border-[#d48806]/50 shadow-md"
                    : "border-slate-100 shadow-xs hover:shadow-md"
                }`}
              >
                <p className="text-xs sm:text-[13px] italic text-slate-600 leading-relaxed mb-6">
                  “{tes.quote || tes.content}”
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        tes.avatar ||
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                      }
                      alt={tes.name || tes.author}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-serif font-bold text-slate-900">
                        {tes.name || tes.author}
                      </div>
                      <div className="text-[11px] font-semibold text-[#d48806]">
                        {tes.role}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-7 h-7 text-slate-200 fill-slate-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Pills */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {(data.testimonials || []).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTestimonialDot(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeTestimonialDot === idx
                    ? "w-6 bg-[#d48806]"
                    : "w-3 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Đánh giá ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. 4-BLOCK ALTERNATING CHESSBOARD "DỊCH VỤ CHẤT LƯỢNG" GRID (#fdf6eb) */}
      <section id="dich-vu" className="bg-[#fdf6eb]">
        <div className="max-w-[1440px] mx-auto">
          {/* Row 1: [Image Gym] [Text Gym] [Image Restaurant] [Text Restaurant] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Cell 1: Gym Image */}
            <div className="h-72 sm:h-80 lg:h-96 overflow-hidden">
              <img
                src={data.chessServices[0]?.image}
                alt={data.chessServices[0]?.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Cell 2: Gym Text */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-[#fdf6eb]">
              <span className="text-[11px] italic uppercase tracking-widest text-slate-400 mb-1.5">
                {data.chessServices[0]?.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 mb-3">
                {data.chessServices[0]?.title}
              </h3>
              <p className="text-xs text-slate-600 italic leading-relaxed mb-6">
                “{data.chessServices[0]?.quote}”
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedService(data.chessServices[0])}
                  className="px-5 py-2.5 bg-[#d48806] hover:bg-[#b87404] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  ĐỌC THÊM
                </button>
              </div>
            </div>

            {/* Cell 3: Restaurant Image */}
            <div className="h-72 sm:h-80 lg:h-96 overflow-hidden">
              <img
                src={data.chessServices[1]?.image}
                alt={data.chessServices[1]?.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Cell 4: Restaurant Text */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-[#fdf6eb]">
              <span className="text-[11px] italic uppercase tracking-widest text-slate-400 mb-1.5">
                {data.chessServices[1]?.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 mb-3">
                {data.chessServices[1]?.title}
              </h3>
              <p className="text-xs text-slate-600 italic leading-relaxed mb-6">
                “{data.chessServices[1]?.quote}”
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedService(data.chessServices[1])}
                  className="px-5 py-2.5 bg-[#d48806] hover:bg-[#b87404] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  ĐỌC THÊM
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: [Text Spa] [Image Spa] [Text Pool] [Image Pool] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Cell 5: Spa Text */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-[#fdf6eb] order-2 lg:order-1">
              <span className="text-[11px] italic uppercase tracking-widest text-slate-400 mb-1.5">
                {data.chessServices[2]?.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 mb-3">
                {data.chessServices[2]?.title}
              </h3>
              <p className="text-xs text-slate-600 italic leading-relaxed mb-6">
                “{data.chessServices[2]?.quote}”
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedService(data.chessServices[2])}
                  className="px-5 py-2.5 bg-[#d48806] hover:bg-[#b87404] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  ĐỌC THÊM
                </button>
              </div>
            </div>
            {/* Cell 6: Spa Image */}
            <div className="h-72 sm:h-80 lg:h-96 overflow-hidden order-1 lg:order-2">
              <img
                src={data.chessServices[2]?.image}
                alt={data.chessServices[2]?.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Cell 7: Pool Text */}
            <div className="p-8 sm:p-10 flex flex-col justify-center bg-[#fdf6eb] order-4 lg:order-3">
              <span className="text-[11px] italic uppercase tracking-widest text-slate-400 mb-1.5">
                {data.chessServices[3]?.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 mb-3">
                {data.chessServices[3]?.title}
              </h3>
              <p className="text-xs text-slate-600 italic leading-relaxed mb-6">
                “{data.chessServices[3]?.quote}”
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedService(data.chessServices[3])}
                  className="px-5 py-2.5 bg-[#d48806] hover:bg-[#b87404] text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  ĐỌC THÊM
                </button>
              </div>
            </div>
            {/* Cell 8: Pool Image */}
            <div className="h-72 sm:h-80 lg:h-96 overflow-hidden order-3 lg:order-4">
              <img
                src={data.chessServices[3]?.image}
                alt={data.chessServices[3]?.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. 3-COLUMN "TIN TỨC & BLOG — Trải nghiệm tuyệt vời" SECTION */}
      <section id="tin-tuc" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs italic uppercase tracking-widest text-slate-400 mb-1.5">
                {data.blogSection.eyebrow}
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-slate-900">
                {data.blogSection.heading}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedBlog(data.blogSection.posts[0])}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#d48806] text-slate-500 hover:text-[#d48806] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Bài trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedBlog(data.blogSection.posts[1])}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#d48806] text-slate-500 hover:text-[#d48806] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Bài tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.blogSection.posts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="group bg-white border border-slate-100 rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col"
              >
                <div className="h-56 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-2.5">
                      <span className="inline-flex items-center gap-1">
                        <Folder className="w-3.5 h-3.5 text-[#d48806]" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-[#d48806]" />
                        {post.commentsCount} Bình luận
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#d48806] transition-colors line-clamp-2 mb-2.5">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-50">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d48806] group-hover:translate-x-1 transition-transform">
                      <span>Đọc thêm</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK MIDNIGHT NAVY (#0c1220) 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#0c1220] text-slate-300 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-full border border-[#d48806] flex items-center justify-center text-[#d48806]">
                  <Crown className="w-4 h-4" />
                </div>
                <span className="text-lg font-serif font-bold text-white tracking-wider">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.footer.description}
              </p>
            </div>

            {/* Col 2: Liên Kết */}
            <div>
              <h3 className="font-serif text-base font-bold text-white mb-4">
                Liên Kết
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {data.footer.quickLinks.map((lnk, idx) => (
                  <li key={idx}>
                    <a
                      href={lnk.href}
                      className="hover:text-[#d48806] transition-colors"
                    >
                      {lnk.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Địa Chỉ */}
            <div>
              <h3 className="font-serif text-base font-bold text-white mb-4">
                Địa Chỉ
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {data.business.address}
              </p>
              <button
                type="button"
                onClick={() => handleOpenRoomBooking()}
                className="text-xs font-semibold text-[#d48806] hover:underline cursor-pointer"
              >
                {data.footer.mapLinkText}
              </button>
            </div>

            {/* Col 4: Liên Hệ */}
            <div>
              <h3 className="font-serif text-base font-bold text-white mb-4">
                Liên Hệ
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-400 mb-4">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d48806] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#d48806] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                {["FB", "TW", "IG", "TK"].map((soc) => (
                  <button
                    key={soc}
                    type="button"
                    onClick={() => handleOpenRoomBooking()}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#d48806] text-white text-[10px] font-bold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {soc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: ROOM ARCHITECTURE & DETAILS MODAL */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xs max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-56 bg-slate-900">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#d48806] text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#d48806] font-bold">
                  {selectedRoom.architecturalStyle}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-0.5">
                  {selectedRoom.name}
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  {selectedRoom.beds} Giường • {selectedRoom.baths} Phòng tắm •{" "}
                  {selectedRoom.area} • Giá:{" "}
                  <strong className="text-[#d48806]">
                    {selectedRoom.pricePerDay}/ngày
                  </strong>
                </p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedRoom.description}
              </p>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Tiêu chuẩn Kỹ thuật & Nội thất:
                </h4>
                <ul className="space-y-1.5">
                  {selectedRoom.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#d48806] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xs cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedRoom.name;
                    setSelectedRoom(null);
                    handleOpenRoomBooking(name);
                  }}
                  className="px-6 py-2 bg-[#d48806] hover:bg-[#b87404] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                >
                  Đặt phòng này ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: CHESS SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xs max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[11px] italic uppercase tracking-widest text-[#d48806]">
                {selectedService.eyebrow}
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {selectedService.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedService.detail}
              </p>
              <div className="bg-[#fdf6eb] p-3.5 rounded-xs text-xs space-y-1 text-slate-700">
                <div>
                  <strong>Giờ mở cửa:</strong> {selectedService.openingHours}
                </div>
                <div>
                  <strong>Vị trí:</strong> {selectedService.locationFloor}
                </div>
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 bg-[#0c1220] text-white text-xs font-bold uppercase rounded-xs cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: BLOG POST MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xs max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="relative h-52">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="text-xs text-[#d48806] font-bold">
                {selectedBlog.category} • {selectedBlog.date}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                {selectedBlog.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedBlog.content}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-2 bg-[#d48806] text-white text-xs font-bold uppercase rounded-xs cursor-pointer"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: BOOKING / RESERVATION MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xs max-w-md w-full overflow-hidden shadow-2xl">
            <div className="bg-[#0c1220] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d48806] font-bold">
                  {data.business.name}
                </span>
                <h3 className="font-serif text-lg font-bold">
                  Đặt Phòng & Tư Vấn Lưu Trú
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {bookingSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#d48806] mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-slate-900">
                    Xác Nhận Yêu Cầu Đặt Phòng!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cảm ơn quý khách <strong>{guestName}</strong>. Bộ phận Lễ
                    tân 24/7 của <strong>{data.business.name}</strong> sẽ liên
                    hệ qua số <strong>{guestPhone}</strong> trong ít phút để xác
                    nhận hạng phòng <strong>{guestRoomChoice}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-6 py-2 bg-[#d48806] text-white text-xs font-bold uppercase rounded-xs cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên quý khách *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Nhập họ tên..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xs focus:outline-none focus:border-[#d48806]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xs focus:outline-none focus:border-[#d48806]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hạng phòng quan tâm
                    </label>
                    <select
                      value={guestRoomChoice}
                      onChange={(e) => setGuestRoomChoice(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xs bg-white focus:outline-none focus:border-[#d48806]"
                    >
                      {data.roomsSection.rooms.map((r) => (
                        <option key={r.id} value={r.name}>
                          {r.name} — {r.pricePerDay}/ngày
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xs cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#d48806] hover:bg-[#b87404] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                    >
                      Xác Nhận Đặt Phòng
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
