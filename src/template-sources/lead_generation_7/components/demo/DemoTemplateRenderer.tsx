"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Search,
  Menu,
  Calendar,
  Compass,
  Clock,
  Wallet,
  Sparkles,
  Play,
  Star,
  ArrowRight,
  Headphones,
  Send,
  User,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration7DefaultData,
  type LeadGeneration7Data,
  type TourPackageItem
} from "@/template-sources/lead_generation_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration7Data = adaptClonedTemplateData(
    leadGeneration7DefaultData,
    incomingData
  );

  const [selectedTour, setSelectedTour] = useState<TourPackageItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingDone, setBookingDone] = useState<boolean>(false);

  const handleOpenTourModal = (tour?: TourPackageItem) => {
    setSelectedTour(tour || null);
    setBookingDone(false);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#3DAE49] selection:text-white">
      {/* TOP GREEN UTILITY BAR */}
      <div className="bg-[#3DAE49] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white text-[#3DAE49] flex items-center justify-center">
                <Mail className="w-3 h-3" />
              </span>
              {data.business.email[0]}
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white text-[#3DAE49] flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </span>
              {data.business.phone[0]}
            </span>
          </div>

          <button
            onClick={() => handleOpenTourModal()}
            className="h-10 px-3.5 bg-[#F5B400] text-slate-950 font-bold flex items-center justify-center cursor-pointer"
            aria-label="Tài khoản"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MAIN WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#3DAE49]/15 border border-[#3DAE49] flex items-center justify-center text-[#3DAE49]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black italic text-slate-900 block leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#3DAE49]">
                Eco Travel & Tours
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-700">
            <a href="#trang-chu" className="text-[#3DAE49]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#3DAE49] transition">
              Giới thiệu
            </a>
            <a href="#goi-du-lich" className="hover:text-[#3DAE49] transition">
              Tours ▾
            </a>
            <a href="#tin-tuc" className="hover:text-[#3DAE49] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#3DAE49] transition">
              Liên hệ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleOpenTourModal()}
              className="w-9 h-9 rounded-full bg-[#3DAE49] text-white flex items-center justify-center hover:bg-green-700 transition cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOpenTourModal()}
              className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH VERTICAL SEARCH CARD */}
      <section id="trang-chu" className="relative py-16 sm:py-24 overflow-hidden bg-slate-900">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/35" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-white">
              <span className="font-serif italic text-base sm:text-lg text-[#4AE35B] block mb-2">
                {data.hero.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black leading-[1.15] mb-5">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl mb-7">
                {data.hero.subtitle}
              </p>
              <a
                href={data.hero.ctaLink || "#goi-du-lich"}
                className="inline-block bg-[#3DAE49] hover:bg-green-600 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-md transition shadow-lg"
              >
                {data.hero.ctaText}
              </a>
            </div>

            {/* Right Vertical Search Filter Box */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl max-w-sm ml-auto">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleOpenTourModal();
                  }}
                  className="space-y-3.5"
                >
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#3DAE49]">
                      {data.searchOptions.destinations.map((d, i) => (
                        <option key={i}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <Compass className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#3DAE49]">
                      {data.searchOptions.activities.map((a, i) => (
                        <option key={i}>{a}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#3DAE49]">
                      {data.searchOptions.durations.map((du, i) => (
                        <option key={i}>{du}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <Wallet className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#3DAE49]">
                      {data.searchOptions.budgets.map((b, i) => (
                        <option key={i}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#3DAE49] hover:bg-green-600 text-white text-xs font-extrabold uppercase tracking-wider transition cursor-pointer shadow-md"
                  >
                    Tìm ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BEST TOUR PACKAGES ("GÓI DU LỊCH TỐT NHẤT") */}
      <section id="goi-du-lich" className="bg-[#F8FAF8] py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-sm text-[#3DAE49] block mb-1">
              Chuyến Tham Quan Tuyệt Vời
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Gói Du Lịch Tốt Nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {tour.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#F5B400] text-slate-950 text-[10px] font-extrabold">
                      Nổi bật
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-3 group-hover:text-[#3DAE49] transition">
                      {tour.title}
                    </h3>

                    <div className="flex items-end justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                      <div className="space-y-1 text-[11px] text-slate-500">
                        <p className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#3DAE49] shrink-0" />
                          <span>{tour.location}</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#3DAE49] shrink-0" />
                          <span>{tour.duration}</span>
                        </p>
                      </div>
                      <div className="text-base font-black text-slate-900">
                        {tour.price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenTourModal(tour)}
                    className="w-full py-2.5 rounded-md bg-[#3DAE49] hover:bg-green-600 text-white text-xs font-extrabold transition cursor-pointer"
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => handleOpenTourModal()}
              className="px-6 py-2.5 rounded-md bg-[#3DAE49] hover:bg-green-600 text-white text-xs font-extrabold uppercase cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT US ("GIỚI THIỆU — CHUYẾN ĐI TỐT NHẤT") */}
      <section id="gioi-thieu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Copy & Checklist */}
          <div className="lg:col-span-6">
            <span className="font-serif italic text-sm text-[#3DAE49] block mb-1">
              Giới Thiệu
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4">
              {data.business.aboutTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {data.business.aboutText[0]}
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-7">
              {data.aboutChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3DAE49] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleOpenTourModal()}
              className="px-6 py-2.5 rounded-md bg-[#3DAE49] hover:bg-green-600 text-white text-xs font-extrabold uppercase cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>

          {/* Right 3-Photo Collage with Yellow-Framed Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden h-60 sm:h-68 shadow-lg mb-4">
              <img
                src={data.aboutCollage[0]}
                alt="Điểm đến nổi bật"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-7 rounded-2xl overflow-hidden h-36 shadow-md">
                <img
                  src={data.aboutCollage[1]}
                  alt="Biển đảo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 rounded-2xl overflow-hidden h-48 -mt-16 border-4 border-[#F5B400] shadow-xl relative z-10">
                <img
                  src={data.aboutCollage[2]}
                  alt="Khám phá"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DARK LIMITED OFFER COUNTDOWN BANNER */}
      <section className="bg-[#14191D] py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left White Countdown Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-9 shadow-2xl lg:-mr-12 relative z-20">
              <span className="font-serif italic text-sm text-[#3DAE49] block mb-1">
                {data.countdownOffer.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
                {data.countdownOffer.title}
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                {data.countdownOffer.subtitle}
              </p>

              {/* 4 Dark Circle Timers */}
              <div className="flex items-center gap-3 mb-7">
                {[
                  { val: data.countdownOffer.days, label: "Ngày" },
                  { val: data.countdownOffer.hours, label: "Giờ" },
                  { val: data.countdownOffer.minutes, label: "Phút" },
                  { val: data.countdownOffer.seconds, label: "Giây" }
                ].map((t, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-slate-950 text-white text-sm font-black flex items-center justify-center mb-1">
                      {t.val}
                    </div>
                    <span className="text-[10px] text-slate-500">{t.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleOpenTourModal()}
                className="px-6 py-2.5 rounded-md bg-[#F5B400] hover:bg-amber-500 text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
              >
                {data.countdownOffer.ctaText}
              </button>
            </div>

            {/* Right Hot Air Balloon Video Card */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden h-80 sm:h-96 shadow-2xl">
              <img
                src={data.countdownOffer.videoImage}
                alt="Trải nghiệm khinh khí cầu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button
                  onClick={() => handleOpenTourModal()}
                  className="w-16 h-16 rounded-full bg-[#3DAE49] text-white flex items-center justify-center shadow-xl hover:scale-110 transition cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 4 GREEN FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.greenFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#3DAE49] text-white rounded-2xl p-6 text-center shadow-lg relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-full bg-white text-[#F5B400] flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold mb-2">{feat.title}</h3>
              <p className="text-xs text-green-50 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: GREEN 35% OFF PROMO BANNER */}
      <section className="relative bg-gradient-to-r from-[#267D43] via-[#359C47] to-[#46B852] text-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-serif italic text-sm text-green-100 block mb-1">
                {data.specialPromoBanner.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-3">
                {data.specialPromoBanner.title}
              </h2>
              <p className="text-xs text-green-50 leading-relaxed mb-6">
                {data.specialPromoBanner.description}
              </p>
              <button
                onClick={() => handleOpenTourModal()}
                className="px-6 py-2.5 rounded bg-white text-[#267D43] text-xs font-extrabold uppercase shadow cursor-pointer"
              >
                {data.specialPromoBanner.ctaText}
              </button>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-44 h-44 rounded-full bg-white/25 p-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#3DAE49] border-4 border-white flex flex-col items-center justify-center shadow-xl">
                  <span className="text-3xl font-black leading-none">
                    {data.specialPromoBanner.discountPercent}
                  </span>
                  <span className="text-xs font-bold uppercase">GIẢM NGAY</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex justify-center">
              <img
                src={data.specialPromoBanner.image}
                alt="Ưu đãi du lịch"
                className="w-56 h-44 object-cover rounded-2xl border-4 border-white/30 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: AMAZING CITIES ("THÀNH PHỐ TUYỆT VỜI") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-serif italic text-sm text-[#3DAE49] block mb-1">
            Khám Phá & Trải Nghiệm
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
            Thành Phố Tuyệt Vời
          </h2>
          <p className="text-xs text-slate-500">
            Khám phá những thành phố tuyệt vời trên thế giới, nơi sự kết hợp hoàn hảo giữa kiến trúc, văn hóa đa dạng và cuộc sống sôi động tạo nên những trải nghiệm đáng nhớ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {data.cities.map((city) => (
            <div key={city.id} className="group cursor-pointer" onClick={() => handleOpenTourModal()}>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-3 shadow-md">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#F5B400] text-slate-950 text-[10px] font-extrabold">
                  {city.tripsCount}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#3DAE49] flex items-center gap-1">
                <span>{city.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: DARK WORLD MAP TESTIMONIALS */}
      <section className="bg-[#14191D] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <span className="font-serif italic text-sm text-[#F5B400] block mb-1">
              Các Đánh Giá Tích Cực
            </span>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              Hơn 50,000 khách hàng hài lòng trên khắp thế giới
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {(data.testimonials || []).map((rev) => (
              <div key={rev.id} className="text-center">
                <div className="bg-white text-slate-800 rounded-2xl p-6 shadow-xl mb-5 relative">
                  <p className="text-xs italic text-slate-600 leading-relaxed mb-3">
                    “{rev.content}”
                  </p>
                  <div className="flex items-center justify-center gap-1 text-[#F5B400]">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5B400]" />
                    ))}
                  </div>
                </div>
                <h4 className="text-sm font-extrabold text-white">{rev.author}</h4>
                <span className="text-[11px] text-slate-400 block mb-2">
                  {rev.role}
                </span>
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover mx-auto border-2 border-[#3DAE49]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: LATEST TRAVEL BLOG ("TIN TỨC MỚI NHẤT") */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-serif italic text-sm text-[#3DAE49] block mb-1">
            Blog & Tin Tức
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
            Tin Tức Mới Nhất
          </h2>
          <p className="text-xs text-slate-500">
            Khám phá bài viết mới nhất với thông tin nổi bật, các xu hướng mới nhất và nội dung hữu ích để giúp bạn cập nhật tức thời.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition p-4 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#3DAE49]" />
                  <span>{post.date}</span>
                </div>
                <a
                  href="#tin-tuc"
                  className="inline-flex items-center gap-1 bg-[#3DAE49] hover:bg-green-600 text-white text-[11px] font-bold px-4 py-2 rounded transition"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 10: DARK FOOTER */}
      <footer id="lien-he" className="bg-[#14191D] text-slate-300 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Call & Subscribe Bar */}
          <div className="pb-10 border-b border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8 text-[#3DAE49]" />
              <div>
                <span className="text-xs font-extrabold text-white block">
                  Gọi 24/7
                </span>
                <span className="text-xs text-slate-400">
                  {data.business.phone[0]}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Send className="w-7 h-7 text-[#3DAE49]" />
              <div>
                <span className="text-xs font-extrabold text-white block">
                  Đăng ký bản tin
                </span>
                <span className="text-[11px] text-slate-400">
                  Đăng ký để cập nhật ưu đãi hàng ngày
                </span>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full sm:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Nhập Email..."
                className="px-4 py-2.5 rounded bg-white/10 border border-white/15 text-xs text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded bg-[#3DAE49] text-white text-xs font-extrabold uppercase cursor-pointer"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>

          {/* 4 Footer Columns */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-xl font-black italic text-white block mb-3">
                {data.business.name}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {data.business.aboutText[0]}
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#trang-chu" className="hover:text-white">› Trang chủ</a></li>
                <li><a href="#gioi-thieu" className="hover:text-white">› Giới thiệu</a></li>
                <li><a href="#goi-du-lich" className="hover:text-white">› Tour</a></li>
                <li><a href="#tin-tuc" className="hover:text-white">› Tin tức</a></li>
                <li><a href="#lien-he" className="hover:text-white">› Liên hệ</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Liên hệ
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#3DAE49] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#3DAE49] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#3DAE49] shrink-0" />
                  <span>{data.business.phone[0]}</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Hình ảnh
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Travel"
                    className="w-full h-14 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-4">
              <a href="#lien-he" className="hover:text-white">Chính sách bảo mật</a>
              <a href="#lien-he" className="hover:text-white">Điều khoản & điều kiện</a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {bookingDone ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#3DAE49] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">
                  Đặt Giữ Chỗ Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Chuyên viên tư vấn <strong>{data.business.name}</strong> sẽ liên hệ xác nhận lịch trình và ưu đãi ngay.
                </p>
                <button
                  onClick={() => setBookingOpen(false)}
                  className="px-6 py-2.5 rounded bg-[#3DAE49] text-white text-xs font-bold cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <>
                <span className="text-xs font-bold text-[#3DAE49] block mb-1">
                  Đặt Tour Nhanh
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-3">
                  {selectedTour ? selectedTour.title : "Tư Vấn Lịch Trình Du Lịch"}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingDone(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <input
                    type="number"
                    min={1}
                    defaultValue={2}
                    placeholder="Số lượng khách"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#3DAE49] hover:bg-green-600 text-white text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Nhận Báo Giá & Ưu Đãi
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
