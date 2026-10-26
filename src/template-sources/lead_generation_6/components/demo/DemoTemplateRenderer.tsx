"use client";

import React, { useState } from "react";
import {
  Leaf,
  Sprout,
  Apple,
  Trees,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Plus,
  User,
  Calendar,
  CheckCircle2,
  X,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration6DefaultData,
  type LeadGeneration6Data
} from "@/template-sources/lead_generation_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration6Data = adaptClonedTemplateData(
    leadGeneration6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadPackage, setLeadPackage] = useState("Combo Cam Tươi Hữu Cơ 2kg (89k/kg)");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const testimonials = data.testimonials || leadGeneration6DefaultData.testimonials || [];
  const currentTestimonial = testimonials[activeTestimonialIdx] || testimonials[0];
  const newsList = data.news || leadGeneration6DefaultData.news || [];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setOrderModalOpen(false);
      setLeadName("");
      setLeadPhone("");
    }, 3000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#18202c] font-sans selection:bg-[#74c138] selection:text-white"
    >
      {/* 1. DARK HEADER (#18202c) + ORGANIC FARM HARVEST HERO */}
      <header className="sticky top-0 z-40 bg-[#18202c] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Left Citrus/Leaf Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ffa800] to-[#74c138] flex items-center justify-center text-white shadow">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="leading-none">
              <span className="block text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#ffa800]">
                {data.business.name}
              </span>
              <span className="block font-serif italic text-xs text-[#74c138]">
                Francois Organic
              </span>
            </div>
          </a>

          {/* Right Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-white/90">
            <a href="#top" className="text-[#74c138]">
              Trang Chủ
            </a>
            <a href="#about" className="hover:text-[#74c138] transition-colors">
              Giới Thiệu
            </a>
            <a href="#services" className="hover:text-[#74c138] transition-colors">
              Dịch Vụ
            </a>
            <a href="#blog" className="hover:text-[#74c138] transition-colors">
              Kiến Thức
            </a>
            <a href="#testimonials" className="hover:text-[#74c138] transition-colors">
              Đội Ngũ
            </a>
            <button
              type="button"
              onClick={() => setOrderModalOpen(true)}
              className="hover:text-[#74c138] transition-colors"
            >
              Liên Hệ
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141920] px-6 py-4 space-y-2 text-xs font-bold border-t border-white/10">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#74c138]"
            >
              Giới Thiệu Nông Trại
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#74c138]"
            >
              Dịch Vụ Hữu Cơ
            </a>
            <a
              href="#sale"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#74c138]"
            >
              Ưu Đãi Trong Tuần
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#74c138]"
            >
              Kiến Thức & Tin Tức
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center overflow-hidden bg-[#141920] text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Left / Right Slider Arrows */}
        <button
          type="button"
          aria-label="Slide trước"
          className="hidden sm:flex absolute left-6 z-20 w-10 h-10 rounded-full bg-white text-[#74c138] hover:bg-[#74c138] hover:text-white items-center justify-center shadow transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Slide tiếp"
          className="hidden sm:flex absolute right-6 z-20 w-10 h-10 rounded-full bg-white text-[#74c138] hover:bg-[#74c138] hover:text-white items-center justify-center shadow transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Center Hero Text */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/90 mb-2">
            {data.hero.eyebrow || "MONA JUICE"}
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.12] text-white mb-7 drop-shadow">
            {data.hero.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setOrderModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#74c138] hover:bg-[#62a82b] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-all"
            >
              <span>{data.hero.ctaText || "LIÊN HỆ"}</span>
              <Plus className="w-3.5 h-3.5" />
            </button>
            <a
              href={data.hero.secondaryCtaLink || "#about"}
              className="inline-flex items-center gap-1.5 bg-[#ffa800] hover:bg-[#e59700] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-all"
            >
              <span>{data.hero.secondaryCtaText || "GIỚI THIỆU"}</span>
              <Plus className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. "GIỚI THIỆU — KHÁM PHÁ NÔNG TRẠI HỮU CƠ" + 2x2 GREEN FEATURE CARDS */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Intro Text */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-extrabold text-[#74c138]">Giới Thiệu</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18202c] leading-snug">
                {data.business.aboutTitle || "Khám phá nông trại hữu cơ"}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                {data.business.aboutText[0]}
              </p>
              <div className="pt-2">
                <a
                  href="#services"
                  className="inline-flex items-center gap-1.5 bg-[#74c138] hover:bg-[#62a82b] text-white text-[11px] font-extrabold uppercase px-6 py-2.5 rounded-full transition-colors"
                >
                  <span>XEM THÊM</span>
                  <Plus className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 2x2 Grid of 4 Organic Green Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.greenFeatureCards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`bg-[#74c138] text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:-translate-y-1 ${
                    idx % 2 === 1 ? "sm:translate-y-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-3">
                    {card.icon === "apple" && <Apple className="w-6 h-6" />}
                    {card.icon === "sprout" && <Sprout className="w-6 h-6" />}
                    {card.icon === "leaf" && <Leaf className="w-6 h-6" />}
                    {card.icon === "trees" && <Trees className="w-6 h-6" />}
                  </div>
                  <h3 className="text-sm font-extrabold mb-1.5">{card.title}</h3>
                  <p className="text-[11px] text-white/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DARK SLATE ORGANIC PRODUCE BANNER ("Trang trại cung cấp thực phẩm tươi 100%") */}
      <section className="relative py-20 lg:py-24 bg-[#222629] text-white overflow-hidden">
        <img
          src={data.freshBanner.mainImage}
          alt={data.freshBanner.title}
          className="absolute inset-0 w-full h-full object-cover object-left opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/65 to-[#222629]/95" />

        {/* Floating Circular Salad Bowl in Top-Right */}
        <div className="hidden lg:block absolute -top-6 right-16 w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-2xl z-20">
          <img
            src={data.freshBanner.floatingPlateImage}
            alt="Rau hữu cơ tươi"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="hidden lg:block lg:col-span-5" />
            <div className="lg:col-span-7 text-center space-y-4">
              <p className="text-xs font-semibold text-white/85">
                {data.freshBanner.subtitle}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                {data.freshBanner.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/75 max-w-lg mx-auto leading-relaxed">
                {data.freshBanner.description}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setOrderModalOpen(true)}
                  className="inline-flex items-center gap-1.5 bg-[#ffa800] hover:bg-[#e59700] text-white text-xs font-extrabold uppercase px-7 py-3 rounded-full shadow-lg transition-colors"
                >
                  <span>{data.freshBanner.ctaText}</span>
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "DỊCH VỤ CHÚNG TÔI CUNG CẤP CÓ LỢI CHO SỨC KHỎE" (#f3f8ef section) */}
      <section id="services" className="py-16 lg:py-24 bg-[#f3f8ef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-md mx-auto mb-12">
            <p className="text-xs font-extrabold text-[#74c138] mb-1">Dịch Vụ</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18202c] leading-snug">
              Dịch vụ Chúng tôi Cung cấp có Lợi Cho Sức Khỏe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.greenFeatureCards.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-6 text-center shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f3f8ef] text-[#74c138] flex items-center justify-center mb-4">
                    {srv.icon === "apple" && <Apple className="w-5 h-5" />}
                    {srv.icon === "sprout" && <Sprout className="w-5 h-5" />}
                    {srv.icon === "leaf" && <Leaf className="w-5 h-5" />}
                    {srv.icon === "trees" && <Trees className="w-5 h-5" />}
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#18202c] mb-2">
                    {srv.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="w-3 h-0.5 bg-[#ffa800]" />
                    <span className="w-3 h-0.5 bg-[#ffa800]" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOrderModalOpen(true)}
                  className="text-slate-400 hover:text-[#74c138] transition-colors"
                  aria-label={srv.title}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DARK NAVY (#18202c) 4 CIRCULAR PROGRESS GAUGES STRIP */}
      <section className="py-16 lg:py-20 bg-[#18202c] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {data.gaugeStats.map((g) => (
              <div key={g.id} className="flex flex-col items-center">
                <div
                  className={`w-28 h-28 rounded-full border-4 flex items-center justify-center mb-4 ${
                    g.color === "green"
                      ? "border-[#74c138] text-[#ffa800]"
                      : "border-[#ffa800] text-[#ffa800]"
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-extrabold">{g.percentage}%</span>
                </div>
                <h3 className="text-sm font-extrabold text-white mb-1">{g.title}</h3>
                <p className="text-[11px] text-white/65 max-w-[180px] leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "MONA SALE — ƯU ĐÃI TRONG TUẦN: CAM TƯƠI" COUNTDOWN SECTION */}
      <section id="sale" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Deal Copy & Countdown Boxes */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#74c138]">
                {data.weeklyDeal.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18202c]">
                {data.weeklyDeal.title}
              </h2>
              <div>
                <h3 className="text-lg font-extrabold text-[#18202c]">
                  {data.weeklyDeal.productName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sale từ 2kg{" "}
                  <strong className="text-[#74c138]">{data.weeklyDeal.priceNote}</strong>
                </p>
              </div>

              {/* 4 Green-Bordered Countdown Boxes */}
              <div className="flex items-center gap-3 py-2">
                {[
                  { label: "DAYS", val: data.weeklyDeal.countdown.days },
                  { label: "HOUR", val: data.weeklyDeal.countdown.hours },
                  { label: "MIN", val: data.weeklyDeal.countdown.mins },
                  { label: "SEC", val: data.weeklyDeal.countdown.secs }
                ].map((box) => (
                  <div
                    key={box.label}
                    className="w-16 h-16 border border-[#74c138] rounded flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-[9px] font-bold uppercase text-slate-400">
                      {box.label}
                    </span>
                    <span className="text-lg font-extrabold text-[#74c138] leading-tight">
                      {box.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setOrderModalOpen(true)}
                  className="inline-flex items-center gap-1.5 bg-[#ffa800] hover:bg-[#e59700] text-white text-xs font-extrabold uppercase px-7 py-3 rounded-full shadow transition-colors"
                >
                  <span>{data.weeklyDeal.ctaText}</span>
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Fresh Orange Visual with Organic Stamp */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg border-8 border-[#f3f8ef]">
                <img
                  src={data.weeklyDeal.image}
                  alt={data.weeklyDeal.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#74c138] bg-white text-[#74c138] flex flex-col items-center justify-center text-center p-2 shadow-md absolute top-2 right-6 sm:right-12">
                <Leaf className="w-5 h-5 mb-0.5" />
                <span className="text-[9px] font-extrabold uppercase leading-tight">
                  100% Organic
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPLIT GARDEN HEDGE PHOTO & BRIGHT GREEN (#74c138) TESTIMONIAL SECTION */}
      <section id="testimonials" className="relative grid grid-cols-1 lg:grid-cols-12">
        {/* Left Garden Hedge Background */}
        <div className="lg:col-span-4 bg-[#1d2d18] min-h-[260px] lg:min-h-[420px] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
            alt="Chăm sóc nông trại"
            className="w-full h-full object-cover opacity-65"
          />
        </div>

        {/* Right Bright Green Panel with Overlapping Customer Portrait */}
        <div className="lg:col-span-8 bg-[#74c138] text-white py-14 px-6 sm:px-12 lg:px-16 flex items-center">
          <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Overlapping Customer Portrait Card */}
            {currentTestimonial && (
              <>
                <div className="md:col-span-5 lg:-ml-28">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white h-64 sm:h-72">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote Text */}
                <div className="md:col-span-7 space-y-4">
                  <div className="text-5xl font-serif font-extrabold leading-none text-white">
                    “
                  </div>
                  <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                    {currentTestimonial.content}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.author}
                        className="w-9 h-9 rounded-full object-cover border border-white"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-white">
                          {currentTestimonial.author}
                        </h4>
                        <p className="text-[10px] text-white/80">{currentTestimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveTestimonialIdx((idx) =>
                            idx > 0 ? idx - 1 : testimonials.length - 1
                          )
                        }
                        className="w-8 h-8 rounded-full border border-white/60 hover:bg-white hover:text-[#74c138] flex items-center justify-center transition-colors"
                        aria-label="Đánh giá trước"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveTestimonialIdx((idx) =>
                            idx < testimonials.length - 1 ? idx + 1 : 0
                          )
                        }
                        className="w-8 h-8 rounded-full border border-white/60 hover:bg-white hover:text-[#74c138] flex items-center justify-center transition-colors"
                        aria-label="Đánh giá tiếp"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 8. "MONA NEW — KIẾN THỨC & TIN TỨC" (3 Organic Blog Cards) */}
      <section id="blog" className="py-16 lg:py-24 bg-[#fafcf8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold uppercase text-[#74c138] mb-1">MONA NEW</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18202c]">
              Kiến Thức & Tin Tức
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold mb-2">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-[#74c138]" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#74c138]" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#18202c] mb-2 leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() => setOrderModalOpen(true)}
                    className="inline-flex items-center gap-1.5 bg-[#74c138] hover:bg-[#62a82b] text-white text-[10px] font-extrabold uppercase px-4 py-2 rounded-full transition-colors"
                  >
                    <span>XEM THÊM</span>
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BRIGHT GREEN (#74c138) 5 ORGANIC SEALS STRIP + DARK FOOTER (#141920) */}
      <section className="py-8 bg-[#74c138]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            {data.organicSeals.map((seal) => (
              <div
                key={seal.id}
                className="flex flex-col items-center justify-center text-center bg-white/95 rounded-full py-3 px-4 shadow-xs"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-[#18202c]">
                  {seal.label}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-[#74c138]">
                  {seal.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK FOOTER (#141920) */}
      <footer className="bg-[#141920] text-white/75 pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Brand Col */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ffa800] to-[#74c138] flex items-center justify-center text-white">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-extrabold uppercase text-[#ffa800]">
                    {data.business.name}
                  </span>
                  <span className="block font-serif italic text-xs text-[#74c138]">
                    Francois Organic
                  </span>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Mỗi loại trái cây trên trang web không chỉ là một sản phẩm để mua sắm mà còn là một
                hành trình khám phá về nguồn gốc, cách trồng và những lợi ích dinh dưỡng mà nó mang
                lại.
              </p>
            </div>

            {/* Giới Thiệu */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-white mb-3">Giới Thiệu</h4>
              <ul className="space-y-2 text-xs text-white/65">
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#about" className="hover:text-[#74c138]">
                    Giới Thiệu
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#blog" className="hover:text-[#74c138]">
                    Tin Tức
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#testimonials" className="hover:text-[#74c138]">
                    Đội Ngũ
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#sale" className="hover:text-[#74c138]">
                    Thư Viện
                  </a>
                </li>
              </ul>
            </div>

            {/* Liên Kết Nhanh */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-white mb-3">Liên Kết Nhanh</h4>
              <ul className="space-y-2 text-xs text-white/65">
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#blog" className="hover:text-[#74c138]">
                    Blog
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#sale" className="hover:text-[#74c138]">
                    Khuyến Mãi
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <a href="#services" className="hover:text-[#74c138]">
                    Dịch Vụ
                  </a>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#74c138]" />
                  <button
                    type="button"
                    onClick={() => setOrderModalOpen(true)}
                    className="hover:text-[#74c138]"
                  >
                    Đặt Hàng
                  </button>
                </li>
              </ul>
            </div>

            {/* Thư Viện (3x2 Grid of 6 Thumbnails) */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-extrabold text-white mb-3">Thư Viện</h4>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded overflow-hidden bg-slate-800">
                    <img
                      src={img}
                      alt={`Nông trại ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/45">
            © Lập Trình Và Thiết Kế Bởi <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* Order / Farm Visit Lead Capture Modal */}
      {orderModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOrderModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#74c138] text-xs font-extrabold uppercase mb-1">
              <Leaf className="w-4 h-4" />
              <span>{data.business.name}</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#18202c] mb-4">
              Đặt Mua Rau Quả Hữu Cơ & Tham Quan Nông Trại
            </h3>

            {leadSubmitted ? (
              <div className="bg-[#f3f8ef] border border-[#74c138] rounded-xl p-5 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#74c138] mx-auto" />
                <p className="text-sm font-bold text-[#18202c]">
                  Đăng ký thành công! Nông trại sẽ liên hệ xác nhận ngay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Họ và tên quý khách*"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#74c138]"
                />
                <input
                  type="tel"
                  required
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="Số điện thoại liên hệ*"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#74c138]"
                />
                <select
                  value={leadPackage}
                  onChange={(e) => setLeadPackage(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#74c138]"
                >
                  <option value="Combo Cam Tươi Hữu Cơ 2kg (89k/kg)">
                    Combo Cam Tươi Hữu Cơ 2kg (89k/kg)
                  </option>
                  <option value="Giỏ Rau Củ Quả Hữu Cơ Theo Tuần">
                    Giỏ Rau Củ Quả Hữu Cơ Theo Tuần
                  </option>
                  <option value="Đăng Ký Tham Quan Nông Trại Cuối Tuần">
                    Đăng Ký Tham Quan Nông Trại Cuối Tuần
                  </option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#74c138] hover:bg-[#62a82b] text-white text-xs font-extrabold uppercase py-3 rounded-full shadow transition-colors"
                >
                  GỬI ĐĂNG KÝ NGAY
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
