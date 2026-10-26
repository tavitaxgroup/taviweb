"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Search,
  Menu,
  Compass,
  Clock,
  Wallet,
  Calendar,
  Play,
  Sparkles,
  Star,
  ArrowRight,
  User,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration8DefaultData,
  type LeadGeneration8Data
} from "@/template-sources/lead_generation_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration8Data = adaptClonedTemplateData(
    leadGeneration8DefaultData,
    incomingData
  );

  const [activeSlide, setActiveSlide] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Đặt Vé & Tư Vấn Tour");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const openLeadModal = (title?: string) => {
    if (title) setModalTitle(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  const mainTestimonial = data.testimonials?.[0] || {
    author: "Khánh An",
    role: "Pháp",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    content:
      "TravelSpark xử lý mọi tình huống một cách chuyên nghiệp và cẩn thận. Tôi thực sự hài lòng vì chuyến đi."
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F36B21] selection:text-white">
      {/* TOP DARK UTILITY BAR */}
      <div className="bg-[#16191E] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white text-[#F36B21] flex items-center justify-center">
                <Mail className="w-3 h-3" />
              </span>
              {data.business.email[0]}
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white text-[#F36B21] flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </span>
              {data.business.phone[0]}
            </span>
          </div>

          <button
            onClick={() => openLeadModal("Đăng nhập / Đăng ký thành viên")}
            className="h-10 px-3.5 bg-[#17A2B8] text-white flex items-center justify-center cursor-pointer"
            aria-label="Tài khoản"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#F36B21] text-white flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black italic text-slate-900 block leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F36B21]">
                Vivu Travel
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-700">
            <a href="#trang-chu" className="text-[#F36B21]">
              Trang chủ
            </a>
            <a href="#goi-du-lich" className="hover:text-[#F36B21] transition">
              Tours ▾
            </a>
            <a href="#gioi-thieu" className="hover:text-[#F36B21] transition">
              Về chúng tôi
            </a>
            <a href="#tin-tuc" className="hover:text-[#F36B21] transition">
              Blog
            </a>
            <a href="#lien-he" className="hover:text-[#F36B21] transition">
              Liên hệ
            </a>
          </nav>

          {/* Right Orange Circle Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => openLeadModal("Tìm kiếm hành trình")}
              className="w-9 h-9 rounded-full bg-[#F36B21] text-white flex items-center justify-center hover:bg-orange-600 transition cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => openLeadModal("Tư vấn đặt tour")}
              className="w-9 h-9 rounded-full bg-[#F36B21] text-white flex items-center justify-center hover:bg-orange-600 transition cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION + HORIZONTAL SEARCH BAR */}
      <section id="trang-chu" className="relative bg-[#FFF4EC] pt-14 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy with Numbered Step Dots */}
            <div className="lg:col-span-6 flex items-center gap-6">
              <div className="hidden sm:flex flex-col gap-3">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveSlide(num)}
                    className={`w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center transition cursor-pointer ${
                      activeSlide === num
                        ? "bg-[#F36B21] text-white shadow"
                        : "bg-white text-slate-600 border border-orange-200"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <div>
                <span className="font-serif italic text-sm sm:text-base text-[#F36B21] block mb-1.5">
                  {data.hero.eyebrow}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
                  {data.hero.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mb-6">
                  {data.hero.subtitle}
                </p>
                <button
                  onClick={() => openLeadModal("Đặt vé khám phá ngay")}
                  className="px-6 py-3 rounded-md bg-[#F36B21] hover:bg-orange-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md transition cursor-pointer"
                >
                  {data.hero.ctaText}
                </button>
              </div>
            </div>

            {/* Right Dual Overlapping Circular/Pill Images */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="w-60 h-68 sm:w-68 sm:h-76 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src={data.hero.images?.[0] || data.hero.backgroundImage}
                  alt="Vịnh biển"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-52 h-60 sm:w-60 sm:h-68 rounded-full overflow-hidden border-8 border-white shadow-2xl -ml-14 mt-16 relative z-10">
                <img
                  src={data.hero.images?.[1] || data.hero.backgroundImage}
                  alt="Du khách"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Horizontal Search Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mb-32 pt-10 relative z-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              openLeadModal("Tìm tour theo yêu cầu");
            }}
            className="bg-white rounded-xl shadow-xl border border-orange-100 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
          >
            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <select className="w-full text-xs text-slate-600 bg-transparent focus:outline-none">
                <option>Điểm đến</option>
                <option>Phú Quốc</option>
                <option>Đà Nẵng - Hội An</option>
                <option>Vịnh Hạ Long</option>
              </select>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5">
              <Compass className="w-4 h-4 text-slate-400 shrink-0" />
              <select className="w-full text-xs text-slate-600 bg-transparent focus:outline-none">
                <option>Hoạt động</option>
                <option>Nghỉ dưỡng biển</option>
                <option>Khinh khí cầu</option>
              </select>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <select className="w-full text-xs text-slate-600 bg-transparent focus:outline-none">
                <option>0 Ngày - 8 Ngày</option>
                <option>3 Ngày 2 Đêm</option>
                <option>5 Ngày 4 Đêm</option>
              </select>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2.5">
              <Wallet className="w-4 h-4 text-slate-400 shrink-0" />
              <select className="w-full text-xs text-slate-600 bg-transparent focus:outline-none">
                <option>0đ - 19,999,000đ</option>
                <option>Dưới 5,000,000đ</option>
              </select>
            </div>

            <button
              type="submit"
              className="py-2.5 px-5 rounded-lg bg-[#F36B21] hover:bg-orange-600 text-white text-xs font-extrabold uppercase cursor-pointer"
            >
              Tìm ngay
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 2: TRAVEL TIPS ZIG-ZAG CARDS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-md mx-auto mb-12">
          <span className="font-serif italic text-sm text-[#F36B21] block mb-1">
            Mẹo Vặt Cần Thiết
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
            Những Mẹo Tuyệt Vời Làm Cho Chuyến Đi Của Bạn
          </h2>
        </div>

        <div className="space-y-12">
          {data.travelTips.map((tip, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={tip.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div
                  className={`lg:col-span-6 relative rounded-2xl overflow-hidden h-64 sm:h-72 shadow-lg ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-white text-[#F36B21] text-[10px] font-extrabold shadow">
                    • {tip.tag}
                  </span>
                </div>

                <div
                  className={`lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 relative z-10 ${
                    isReversed ? "lg:order-1 lg:-mr-10" : "lg:-ml-10"
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#F36B21] flex items-center gap-1.5 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {tip.date}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2.5">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {tip.excerpt}
                  </p>
                  <button
                    onClick={() => openLeadModal(tip.title)}
                    className="px-4 py-2 rounded bg-[#F36B21] hover:bg-orange-600 text-white text-[11px] font-extrabold uppercase cursor-pointer"
                  >
                    ĐỌC THÊM
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: BEST TOUR PACKAGES ("GÓI DU LỊCH TỐT NHẤT") */}
      <section id="goi-du-lich" className="bg-[#F9FAFB] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-serif italic text-sm text-[#F36B21] block mb-1">
              Chuyến Tham Quan Tuyệt Vời
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
              Gói du lịch tốt nhất
            </h2>
            <p className="text-xs text-slate-500">
              Gói du lịch tốt nhất của chúng tôi đã được thiết kế đặc biệt để mang đến cho bạn trải nghiệm tuyệt vời nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  {tour.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#17A2B8] text-white text-[10px] font-extrabold">
                      {tour.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-3">
                      {tour.title}
                    </h3>

                    <div className="flex items-end justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                      <div className="space-y-1 text-[11px] text-slate-500">
                        <p className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#F36B21]" />
                          <span>{tour.location}</span>
                        </p>
                        <p className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#F36B21]" />
                          <span>{tour.duration}</span>
                        </p>
                      </div>
                      <div className="text-base font-black text-slate-900">
                        {tour.price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => openLeadModal(tour.title)}
                    className="w-full py-2.5 rounded-md bg-[#F36B21] hover:bg-orange-600 text-white text-xs font-extrabold transition cursor-pointer"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => openLeadModal("Xem toàn bộ gói du lịch")}
              className="px-6 py-2.5 rounded-md bg-[#F36B21] hover:bg-orange-600 text-white text-xs font-extrabold uppercase cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: AMAZING CITIES COLLAGE & VIDEO + 4 ORANGE FEATURE CARDS */}
      <section id="gioi-thieu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Copy + 2 Vertical Images */}
          <div className="lg:col-span-5">
            <span className="font-serif italic text-sm text-[#F36B21] block mb-1">
              {data.amazingCitiesSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-3">
              {data.amazingCitiesSection.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              {data.amazingCitiesSection.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {data.amazingCitiesSection.smallImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="City"
                  className="w-full h-44 object-cover rounded-2xl shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Right Large Video Card */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl overflow-hidden h-80 sm:h-96 shadow-xl">
              <img
                src={data.amazingCitiesSection.videoImage}
                alt="Video giới thiệu"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => openLeadModal("Xem video hành trình")}
              className="bg-white rounded-full px-5 py-2.5 shadow-xl border border-orange-100 inline-flex items-center gap-3 absolute top-5 left-5 cursor-pointer"
            >
              <span className="text-xs font-extrabold text-slate-800">
                Xem video
              </span>
              <span className="w-7 h-7 rounded-full bg-[#F36B21] text-white flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </span>
            </button>
          </div>
        </div>

        {/* 4 Orange Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.orangeFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-[#F36B21] text-white rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-white text-[#F36B21] flex items-center justify-center mx-auto mb-4 shadow">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold mb-2">{feat.title}</h3>
              <p className="text-xs text-orange-50 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: ORANGE 35% OFF PROMO BANNER */}
      <section className="relative bg-gradient-to-r from-[#E65C19] to-[#F57D34] text-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-serif italic text-sm text-orange-100 block mb-1">
                {data.specialOfferBanner.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-3">
                {data.specialOfferBanner.title}
              </h2>
              <p className="text-xs text-orange-50 leading-relaxed mb-6">
                {data.specialOfferBanner.description}
              </p>
              <button
                onClick={() => openLeadModal("Nhận ưu đãi giảm 35%")}
                className="px-6 py-2.5 rounded bg-white text-[#F36B21] text-xs font-extrabold uppercase shadow cursor-pointer"
              >
                {data.specialOfferBanner.ctaText}
              </button>
            </div>

            <div className="lg:col-span-4 text-center">
              <div className="text-6xl sm:text-7xl font-black leading-none tracking-tight">
                {data.specialOfferBanner.discountPercent}
                <span className="text-2xl sm:text-3xl block font-extrabold mt-1">
                  GIẢM NGAY
                </span>
              </div>
            </div>

            <div className="lg:col-span-3 flex justify-center">
              <img
                src={data.specialOfferBanner.image}
                alt="Ưu đãi"
                className="w-56 h-44 object-cover rounded-2xl border-4 border-white/30 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BEAUTIFUL CITIES ("NHỮNG THÀNH PHỐ ĐẸP") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-serif italic text-sm text-[#F36B21] block mb-1">
            Đi & Khám Phá
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
            Những thành phố đẹp
          </h2>
          <p className="text-xs text-slate-500">
            Khám phá những thành phố đẹp trên thế giới, nơi sự kết hợp hoàn hảo giữa kiến trúc tuyệt vời, văn hóa đa dạng và cuộc sống sôi động tạo nên những trải nghiệm đáng nhớ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {data.beautifulCities.map((city) => (
            <div
              key={city.id}
              onClick={() => openLeadModal(city.name)}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-3 shadow-md">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#17A2B8] text-white text-[10px] font-extrabold">
                  {city.tripsLabel}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#F36B21] flex items-center gap-1">
                <span>{city.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: DARK SECTION WITH ORANGE CIRCULAR TESTIMONIAL WHEEL */}
      <section className="bg-[#16191E] text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Intro */}
            <div className="lg:col-span-5">
              <span className="font-serif italic text-sm text-[#17A2B8] block mb-1">
                Đi & Khám Phá
              </span>
              <h2 className="text-2xl sm:text-4xl font-black leading-tight mb-4">
                Khách hàng của chúng tôi
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Đánh giá khách hàng là một phần quan trọng trong việc đánh giá chất lượng dịch vụ hoặc sản phẩm mà chúng tôi cung cấp.
              </p>
              <button
                onClick={() => openLeadModal("Xem thêm đánh giá khách hàng")}
                className="px-6 py-2.5 rounded bg-[#17A2B8] hover:bg-teal-600 text-white text-xs font-extrabold uppercase cursor-pointer"
              >
                XEM THÊM
              </button>
            </div>

            {/* Right Orange Circle Testimonial Wheel */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-[#F36B21] text-white p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                {/* Orbiting Avatars */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Client"
                  className="w-11 h-11 rounded-full object-cover ring-4 ring-white absolute top-4 left-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Client"
                  className="w-11 h-11 rounded-full object-cover ring-4 ring-white absolute top-4 right-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                  alt="Client"
                  className="w-11 h-11 rounded-full object-cover ring-4 ring-white absolute bottom-4 left-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
                  alt="Client"
                  className="w-11 h-11 rounded-full object-cover ring-4 ring-white absolute bottom-4 right-8"
                />

                <span className="text-4xl font-black leading-none mb-2">”</span>
                <div className="flex items-center gap-1 text-white mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white" />
                  ))}
                </div>
                <p className="text-xs font-bold leading-relaxed max-w-xs mb-4">
                  “{mainTestimonial.content}”
                </p>
                <img
                  src={mainTestimonial.avatar}
                  alt={mainTestimonial.author}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-white mb-2"
                />
                <h4 className="text-sm font-black">{mainTestimonial.author}</h4>
                <span className="text-[11px] text-orange-100">
                  {mainTestimonial.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: LATEST BLOG POSTS ("BÀI VIẾT MỚI") */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-serif italic text-sm text-[#F36B21] block mb-1">
            Blog & Tin Tức
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">
            Bài viết mới
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
                  <Calendar className="w-3.5 h-3.5 text-[#F36B21]" />
                  <span>{post.date}</span>
                </div>
                <button
                  onClick={() => openLeadModal(post.title)}
                  className="inline-flex items-center gap-1 bg-[#F36B21] hover:bg-orange-600 text-white text-[11px] font-bold px-4 py-2 rounded transition cursor-pointer"
                >
                  <span>ĐỌC THÊM</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => openLeadModal("Khám phá cẩm nang du lịch")}
            className="px-6 py-2.5 rounded bg-[#17A2B8] text-white text-xs font-extrabold uppercase cursor-pointer"
          >
            XEM THÊM
          </button>
        </div>
      </section>

      {/* SECTION 10: ORANGE BOTTOM CTA BANNER & DARK FOOTER */}
      <footer id="lien-he" className="bg-[#16191E] text-slate-300 pt-10 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Orange CTA Card */}
          <div className="bg-[#F36B21] text-white rounded-2xl p-8 sm:p-10 mb-14 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black mb-1.5">
                {data.bottomCtaBanner.title}
              </h3>
              <p className="text-xs text-orange-100 mb-5">
                {data.bottomCtaBanner.subtitle}
              </p>
              <button
                onClick={() => openLeadModal("Đăng ký tài khoản miễn phí")}
                className="px-6 py-2.5 rounded bg-white text-[#F36B21] text-xs font-extrabold uppercase shadow cursor-pointer"
              >
                {data.bottomCtaBanner.buttonText}
              </button>
            </div>
            <div className="w-28 h-28 rounded-full bg-white/15 flex items-center justify-center">
              <Compass className="w-14 h-14 text-white" />
            </div>
          </div>

          {/* 4 Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="lg:col-span-4">
              <span className="text-xl font-black italic text-white block mb-3">
                {data.business.name}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Điều hướng
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#trang-chu" className="hover:text-white">› Trang chủ</a></li>
                <li><a href="#goi-du-lich" className="hover:text-white">› Tours</a></li>
                <li><a href="#gioi-thieu" className="hover:text-white">› Về chúng tôi</a></li>
                <li><a href="#tin-tuc" className="hover:text-white">› Blog</a></li>
                <li><a href="#lien-he" className="hover:text-white">› Liên hệ</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Instagram
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {data.instagramGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Instagram"
                    className="w-full h-14 object-cover rounded"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                Theo dõi
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Đăng ký để nhận được tin tức mới nhất
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  openLeadModal("Đăng ký bản tin");
                }}
                className="space-y-2.5"
              >
                <input
                  type="email"
                  placeholder="Email..."
                  className="w-full px-3.5 py-2.5 rounded bg-white/10 border border-white/15 text-xs text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-[#F36B21] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-4">
              <a href="#lien-he" className="hover:text-white">Chính sách</a>
              <a href="#lien-he" className="hover:text-white">Điều khoản</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#F36B21] text-white flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Đội ngũ tư vấn <strong>{data.business.name}</strong> sẽ liên hệ với bạn ngay.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded bg-[#F36B21] text-white text-xs font-bold cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <>
                <span className="text-xs font-bold text-[#F36B21] block mb-1">
                  Ưu đãi chiến dịch du lịch
                </span>
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  {modalTitle}
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#F36B21] hover:bg-orange-600 text-white text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Nhận Tư Vấn & Ưu Đãi 35%
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
