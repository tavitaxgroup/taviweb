"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Search,
  CheckCircle2,
  Flower2,
  Droplets,
  Flame,
  Heart,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa2DefaultData,
  type Spa2Data
} from "@/template-sources/spa_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa2Data = adaptClonedTemplateData(spa2DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(
    data.services?.[0]?.title || "Chăm sóc da mặt chuyên sâu"
  );
  const [bookingDone, setBookingDone] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const primaryPhone = data.business.phone?.[0] || "0906 888 789";
  const primaryEmail = data.business.email?.[0] || "booking@beautyblendz.vn";

  const radialSteps = data.radialSteps || spa2DefaultData.radialSteps;
  const leftSteps = radialSteps.filter((s) => s.side === "left");
  const rightSteps = radialSteps.filter((s) => s.side === "right");

  const openBooking = (treatmentName?: string) => {
    if (treatmentName) setSelectedTreatment(treatmentName);
    setBookingDone(false);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fdf8f5] text-[#2c1e18] font-sans selection:bg-[#8c4a32] selection:text-white">
      {/* 1. ELEGANT CREAM HEADER + FLORAL SPA HERO */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f0e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Botanical Script/Serif Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[#f5ebe6] border border-[#8c4a32]/30 flex items-center justify-center text-[#8c4a32]">
              <Flower2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif italic text-xl sm:text-2xl font-bold text-[#2c1e18] leading-none">
                {data.business.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#8c4a32] mt-1 font-semibold">
                Luxury Botanical Spa
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-widest text-[#2c1e18]/80">
            <a href="#trang-chu" className="text-[#8c4a32]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#8c4a32] transition-colors">
              Giới thiệu
            </a>
            <a href="#dich-vu" className="hover:text-[#8c4a32] transition-colors">
              Dịch vụ
            </a>
            <a href="#san-pham" className="hover:text-[#8c4a32] transition-colors">
              Sản phẩm
            </a>
            <a href="#bang-gia" className="hover:text-[#8c4a32] transition-colors">
              Bảng giá
            </a>
            <a href="#tin-tuc" className="hover:text-[#8c4a32] transition-colors">
              Tin tức
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => openBooking()}
              className="p-2 text-[#2c1e18]/70 hover:text-[#8c4a32] transition-colors cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => openBooking("Tư vấn bộ sản phẩm Spa")}
              className="relative p-2 text-[#2c1e18]/70 hover:text-[#8c4a32] transition-colors cursor-pointer"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#8c4a32] text-white text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
            <button
              onClick={() => openBooking()}
              className="bg-[#8c4a32] hover:bg-[#733b27] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors cursor-pointer"
            >
              LIÊN HỆ NGAY
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2c1e18]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#f0e2d8] px-4 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2c1e18] hover:text-[#8c4a32]"
            >
              Giới thiệu
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2c1e18] hover:text-[#8c4a32]"
            >
              Dịch vụ Spa
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2c1e18] hover:text-[#8c4a32]"
            >
              Sản phẩm độc quyền
            </a>
            <a
              href="#bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2c1e18] hover:text-[#8c4a32]"
            >
              Bảng giá liệu trình
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full bg-[#8c4a32] text-white py-3 text-xs font-bold uppercase tracking-widest"
            >
              Đặt lịch ngay
            </button>
          </div>
        )}
      </header>

      {/* FLORAL SPA HERO */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-r from-[#f7ece6] via-[#fdf8f5] to-[#f5ebe6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Editorial Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <p className="font-serif italic text-lg sm:text-xl text-[#8c4a32]">
                {data.hero.eyebrow || "Thư giãn & Tái tạo năng lượng"}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#2c1e18] leading-[1.15]">
                {data.hero.title}
              </h1>
              <p className="text-[#5c473d] text-sm sm:text-base leading-relaxed max-w-lg">
                {data.hero.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBooking()}
                  className="inline-flex items-center gap-3 bg-[#f5ebe6] hover:bg-[#8c4a32] text-[#2c1e18] hover:text-white border border-[#8c4a32]/30 font-semibold text-sm pl-6 pr-2 py-2 transition-all group cursor-pointer"
                >
                  <span>{data.hero.ctaText || "Đặt Lịch Ngay"}</span>
                  <span className="w-9 h-9 bg-[#8c4a32] text-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-xs font-bold uppercase tracking-widest text-[#8c4a32] hover:underline flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline: {primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Botanical Spa Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg">
                <div className="absolute -inset-4 rounded-full bg-[#e8d2c5]/50 blur-2xl -z-10" />
                <div className="rounded-t-[180px] rounded-b-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src={data.hero.backgroundImage}
                    alt={data.business.name}
                    className="w-full h-[420px] sm:h-[490px] object-cover"
                  />
                </div>
                <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white px-5 py-3.5 shadow-lg border border-[#f0e2d8] items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f5ebe6] text-[#8c4a32] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2c1e18]">
                      100% Thảo Mộc Hữu Cơ
                    </p>
                    <p className="text-[11px] text-[#8c4a32]">
                      An toàn cho mọi làn da nhạy cảm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3 TREATMENT ICON CARDS ("Điều trị da mặt & toàn thân") */}
      <section className="py-16 lg:py-24 bg-[#fdf8f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a65d43]">
              CHĂM SÓC DA MẶT
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Điều trị da mặt & toàn thân
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#a65d43]/60">
              <span className="w-10 h-px bg-[#a65d43]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#a65d43]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.treatmentPillars || spa2DefaultData.treatmentPillars).map(
              (pillar, idx) => (
                <div
                  key={pillar.id}
                  className="bg-white p-3 shadow-sm hover:shadow-md transition-shadow border border-[#f0e2d8]"
                >
                  <div className="border border-[#e8d5c8] p-7 text-center flex flex-col items-center h-full">
                    <div className="w-16 h-16 rounded-full bg-[#f5ebe6] text-[#8c4a32] flex items-center justify-center mb-4">
                      {idx === 0 ? (
                        <Sparkles className="w-7 h-7" />
                      ) : idx === 1 ? (
                        <Droplets className="w-7 h-7" />
                      ) : (
                        <Flame className="w-7 h-7" />
                      )}
                    </div>
                    <span className="text-[10px] tracking-[0.3em] text-[#a65d43] uppercase mb-2">
                      ••••
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2c1e18]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#5c473d] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SPLIT SECTION ("Khám phá mới — 25 năm kinh nghiệm") */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Overlapping Spa Treatment Photos + Vertical FEATURE text */}
            <div className="lg:col-span-6 relative">
              <div className="relative bg-[#f5ebe6] p-5 sm:p-7">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
                  alt="Chăm sóc da chuyên sâu"
                  className="w-full h-[360px] object-cover shadow-md"
                />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c4a32]">
                    FEATURE EXPERIENCE
                  </span>
                  <span className="bg-[#8c4a32] text-white text-xs font-bold px-3.5 py-1.5">
                    {data.business.experienceYears || "25 Năm"} Kinh Nghiệm
                  </span>
                </div>
              </div>
            </div>

            {/* Right About Copy + Checklist Bars + Terracotta CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8c4a32]">
                <span>KINH NGHIỆM CHĂM SÓC DA</span>
                <span className="border border-[#8c4a32]/40 px-2.5 py-0.5 text-[#8c4a32]">
                  {data.business.experienceYears || "25 NĂM"}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
                Khám phá <span className="text-[#a65d43] italic">mới</span>
              </h2>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#fdf8f5] border-l-4 border-[#8c4a32]">
                <div className="w-10 h-10 rounded-full bg-[#8c4a32] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Flower2 className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#2c1e18] leading-relaxed">
                  {data.business.aboutText[0]}
                </p>
              </div>

              {data.business.aboutText[1] && (
                <p className="text-xs sm:text-sm text-[#5c473d] leading-relaxed">
                  {data.business.aboutText[1]}
                </p>
              )}

              {/* Highlight Bars */}
              <div className="space-y-2.5 pt-2">
                {(
                  data.business.highlights || [
                    "DỊCH VỤ CHẤT LƯỢNG CAO VÀ HIỆN ĐẠI NHẤT",
                    "SPA CHUYÊN NGHIỆP, THOẢI MÁI VÀ SANG TRỌNG"
                  ]
                ).map((hl, i) => (
                  <div
                    key={i}
                    className="bg-[#f5ebe6] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#8c4a32] flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8c4a32] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBooking()}
                  className="bg-[#8c4a32] hover:bg-[#733b27] text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-colors cursor-pointer"
                >
                  ĐẶT LỊCH TRẢI NGHIỆM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-COLUMN "DỊCH VỤ SPA THƯ GIÃN" GALLERY CARDS */}
      <section id="dich-vu" className="py-16 lg:py-24 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a65d43]">
              CHĂM SÓC TOÀN THÂN
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Dịch vụ Spa thư giãn
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#a65d43]/60">
              <span className="w-10 h-px bg-[#a65d43]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#a65d43]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {(data.services || spa2DefaultData.services || []).map((srv, idx) => (
              <div
                key={srv.id}
                className={`group relative overflow-hidden bg-[#2c1e18] shadow-lg ${
                  idx === 1 ? "md:h-[430px]" : "md:h-[390px]"
                } h-[360px]`}
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e18]/90 via-[#2c1e18]/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-center text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#e8c6b0]">
                    {srv.category}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-bold">{srv.title}</h3>
                  <p className="mt-2 text-xs text-stone-200 line-clamp-2">
                    {srv.description}
                  </p>
                  <button
                    onClick={() => openBooking(srv.title)}
                    className="mt-4 inline-flex items-center gap-2 bg-[#8c4a32] hover:bg-[#a65d43] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors cursor-pointer"
                  >
                    <span>Đặt liệu trình • {srv.price}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Center Seal + Prev/Next Indicator */}
          <div className="mt-8 flex items-center justify-center gap-12 text-xs font-bold uppercase tracking-widest text-[#8c4a32]">
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-1 hover:text-[#2c1e18] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>TRƯỚC</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-[#8c4a32] text-white flex items-center justify-center shadow-md">
              <ArrowRight className="w-5 h-5" />
            </div>
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-1 hover:text-[#2c1e18] cursor-pointer"
            >
              <span>TIẾP</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. 6-STEP "KHÁM PHÁ DỊCH VỤ SPA" RADIAL DIAGRAM */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a65d43]">
              DỊCH VỤ CHUYÊN NGHIỆP
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Khám phá dịch vụ spa
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#a65d43]/60">
              <span className="w-10 h-px bg-[#a65d43]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#a65d43]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdf8f5] p-6 sm:p-10 rounded-3xl border border-[#f0e2d8]">
            {/* Left 3 Steps (01, 02, 03) */}
            <div className="lg:col-span-4 space-y-8">
              {leftSteps.map((st) => (
                <div
                  key={st.id}
                  className="flex items-center lg:flex-row-reverse gap-4 lg:text-right"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8c4a32] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                    {st.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2c1e18]">
                      {st.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#5c473d] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Essential Oil & Botanical Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src={data.radialCenterImage || spa2DefaultData.radialCenterImage}
                  alt="Tinh dầu thảo mộc"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 3 Steps (04, 05, 06) */}
            <div className="lg:col-span-4 space-y-8">
              {rightSteps.map((st) => (
                <div key={st.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8c4a32] text-white font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                    {st.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2c1e18]">
                      {st.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#5c473d] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. "SẢN PHẨM SPA ĐỘC QUYỀN" (4 BOTANICAL SKINCARE PRODUCT CARDS) + PARTNER STRIP */}
      <section id="san-pham" className="pt-12 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a65d43]">
              CHẤT LƯỢNG HÀNG ĐẦU
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Sản phẩm Spa độc quyền
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#a65d43]/60">
              <span className="w-10 h-px bg-[#a65d43]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#a65d43]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.products || spa2DefaultData.products).map((prd) => (
              <div
                key={prd.id}
                className="group text-center bg-[#fdf8f5] border border-[#f0e2d8] p-4 hover:shadow-lg transition-all"
              >
                <div className="relative h-60 overflow-hidden bg-white mb-4">
                  <img
                    src={prd.image}
                    alt={prd.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => setCartCount((c) => c + 1)}
                    className="absolute bottom-3 inset-x-3 bg-[#8c4a32]/95 text-white text-[11px] font-bold uppercase tracking-wider py-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    + Thêm vào giỏ
                  </button>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#a65d43]">
                  {prd.category}
                </span>
                <h3 className="mt-1 font-serif text-base font-bold text-[#2c1e18] line-clamp-1">
                  {prd.name}
                </h3>
                <p className="mt-1 text-sm font-extrabold text-[#8c4a32]">
                  {prd.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => openBooking("Đặt mua sản phẩm Spa độc quyền")}
              className="bg-[#8c4a32] hover:bg-[#733b27] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors cursor-pointer"
            >
              XEM TẤT CẢ
            </button>
          </div>
        </div>
      </section>

      {/* Terracotta / Bronze Partner Brand Strip */}
      <div className="bg-[#8c4a32] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {(data.clients || spa2DefaultData.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="opacity-85 hover:opacity-100 transition-opacity flex flex-col items-center gap-1"
              >
                <Flower2 className="w-5 h-5 text-[#f5ebe6]" />
                <span className="font-serif tracking-[0.2em] text-xs font-semibold uppercase">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. TESTIMONIALS ("Khách hàng nói gì về chúng tôi") + 4 CIRCULAR SPECIALIST AVATARS */}
      <section className="py-16 lg:py-24 bg-[#f5ebe6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8c4a32]">
              CHĂM SÓC KHÁCH HÀNG
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Khách hàng nói gì về chúng tôi
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#8c4a32]/60">
              <span className="w-10 h-px bg-[#8c4a32]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#8c4a32]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || spa2DefaultData.testimonials || []).map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 sm:p-7 shadow-sm border border-[#e8d5c8] relative mt-6"
              >
                <div className="flex items-center justify-between -mt-12 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <span className="font-serif text-5xl text-[#e8d5c8] leading-none">
                    ”
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-[#a65d43] mb-3">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#a65d43]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5c473d] leading-relaxed mb-4">
                  “{t.content}”
                </p>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2c1e18]">
                    {t.author}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c4a32]">
                    {t.role || "KHÁCH HÀNG"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Circular Specialist Avatars ("Chuyên gia trị liệu") */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a65d43]">
              CHUYÊN GIA LÀM ĐẸP
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Chuyên gia trị liệu
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#a65d43]/60">
              <span className="w-10 h-px bg-[#a65d43]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#a65d43]/40" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {(data.team || spa2DefaultData.team || []).map((member) => (
              <div key={member.id} className="group">
                <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden border-4 border-[#f5ebe6] shadow-md group-hover:border-[#8c4a32] transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#2c1e18]">
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8c4a32] mt-1">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DUAL-COLUMN MENU & PRICING SHEET */}
      <section
        id="bang-gia"
        className="py-16 lg:py-24 bg-gradient-to-r from-[#f5ebe6] via-[#f9efe9] to-[#f5ebe6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8c4a32]">
              CHĂM SÓC TẬN TÂM, HOÀN HẢO
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Bảng giá dịch vụ chăm sóc
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Spa Model Portrait */}
            <div className="hidden lg:block lg:col-span-4 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
                alt="Spa Menu"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dual-Column Menu Sheets */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: CHĂM SÓC DA MẶT */}
              <div className="bg-white p-6 sm:p-8 shadow-md border border-[#e8d5c8]">
                <div className="text-center pb-5 mb-6 border-b border-[#f0e2d8]">
                  <span className="font-serif italic text-xs text-[#a65d43]">
                    Chăm sóc làn da chống lão hóa
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2c1e18] uppercase tracking-wider mt-1">
                    CHĂM SÓC DA MẶT
                  </h3>
                </div>

                <div className="space-y-5">
                  {(data.menuFacial || spa2DefaultData.menuFacial).map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-serif font-bold text-sm text-[#2c1e18] group-hover:text-[#8c4a32] transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[#c9b1a3] mx-1" />
                        <span className="text-xs font-extrabold text-[#8c4a32] shrink-0">
                          {item.price} / {item.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6e584d] mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: MASSAGE BODY & TRỊ LIỆU */}
              <div className="bg-white p-6 sm:p-8 shadow-md border border-[#e8d5c8]">
                <div className="text-center pb-5 mb-6 border-b border-[#f0e2d8]">
                  <span className="font-serif italic text-xs text-[#a65d43]">
                    Chuyên gia trị liệu thảo dược
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2c1e18] uppercase tracking-wider mt-1">
                    MASSAGE BODY & TRỊ LIỆU
                  </h3>
                </div>

                <div className="space-y-5">
                  {(data.menuBody || spa2DefaultData.menuBody).map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-serif font-bold text-sm text-[#2c1e18] group-hover:text-[#8c4a32] transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[#c9b1a3] mx-1" />
                        <span className="text-xs font-extrabold text-[#8c4a32] shrink-0">
                          {item.price} / {item.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6e584d] mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 3 BLOG CARDS ("Cẩm nang làm đẹp") */}
      <section id="tin-tuc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a65d43]">
              TIN TỨC & BLOG
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
              Cẩm nang làm đẹp
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#a65d43]/60">
              <span className="w-10 h-px bg-[#a65d43]/40" />
              <Flower2 className="w-4 h-4" />
              <span className="w-10 h-px bg-[#a65d43]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || spa2DefaultData.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="h-56 overflow-hidden mb-4 bg-[#f5ebe6]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2c1e18] group-hover:text-[#8c4a32] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-[#5c473d] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-3 pt-3 border-t border-[#f0e2d8] text-[10px] font-bold uppercase tracking-widest text-[#a65d43]">
                  BỞI {data.business.name} / {post.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA BANNER ("Nhận tư vấn miễn phí") */}
      <section className="py-14 bg-gradient-to-r from-[#d8bda9] via-[#e5cfc0] to-[#d8bda9] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#8c4a32] text-white flex items-center justify-center mx-auto shadow-md">
            <ArrowRight className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2c1e18]">
            Nhận tư vấn miễn phí
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openBooking()}
              className="bg-[#8c4a32] hover:bg-[#733b27] text-white text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors cursor-pointer"
            >
              ĐĂNG KÝ NGAY
            </button>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-white hover:bg-[#fdf8f5] text-[#2c1e18] text-xs font-bold uppercase tracking-widest px-6 py-3 flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c4a32]" />
              <span>GỌI NGAY: {primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* DEEP ESPRESSO FOOTER (#2c1e18) */}
      <footer className="bg-[#2c1e18] text-stone-300 pt-14 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Social + Brand + Newsletter Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-stone-400">
                Kết nối:
              </span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8c4a32] text-white"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${primaryEmail}`}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8c4a32] text-white"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="md:text-center">
              <span className="font-serif italic text-2xl font-bold text-white">
                {data.business.name}
              </span>
            </div>

            <div>
              {newsletterDone ? (
                <p className="text-xs text-[#e8c6b0] font-semibold md:text-right">
                  Cảm ơn bạn đã đăng ký bản tin làm đẹp!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white/10 p-1"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email nhận ưu đãi..."
                    className="bg-transparent text-white text-xs px-3 py-2 w-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#8c4a32] hover:bg-[#a65d43] text-white text-[11px] font-bold uppercase px-4 py-2 shrink-0 cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 4 Columns */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-white text-sm">
                GIỚI THIỆU VỀ {data.business.name.toUpperCase()}
              </h4>
              <div className="space-y-2 text-stone-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#a65d43] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#a65d43] shrink-0" />
                  <span>{primaryPhone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#a65d43] shrink-0" />
                  <span>{primaryEmail}</span>
                </p>
              </div>
              <div className="pt-2">
                <span className="font-bold text-white block">Giờ hoạt động:</span>
                <span className="text-stone-400">
                  {data.business.workingHours || "Thứ 2 - Chủ Nhật: 09:00 - 21:00"}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-white text-sm mb-4">
                LIÊN KẾT
              </h4>
              <ul className="space-y-2.5 text-stone-300">
                <li>
                  <a href="#dich-vu" className="hover:text-[#e8c6b0]">
                    • Dịch vụ trị liệu
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#e8c6b0]">
                    • Giới thiệu Spa
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-[#e8c6b0]">
                    • Bảng giá niêm yết
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#e8c6b0]">
                    • Sản phẩm thảo mộc
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-white text-sm mb-4">
                DANH MỤC
              </h4>
              <ul className="space-y-2.5 text-stone-300">
                <li>• Chăm sóc da chuyên sâu</li>
                <li>• Massage đá nóng Himalaya</li>
                <li>• Tinh dầu Aromatherapy</li>
                <li>• Tắm trắng thảo dược</li>
                <li>• Gội đầu dưỡng sinh</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-white text-sm mb-4">
                TIN TỨC MỚI
              </h4>
              <div className="space-y-3">
                {(data.news || spa2DefaultData.news || []).slice(0, 2).map((n) => (
                  <div key={n.id} className="flex items-center gap-3">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-14 h-14 object-cover shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-white line-clamp-2 text-xs">
                        {n.title}
                      </p>
                      <span className="text-[10px] text-stone-400">{n.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-xs text-stone-400">
            © {new Date().getFullYear()} {data.business.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* SPA BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-[#2c1e18]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fdf8f5] border border-[#e8d5c8] max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 text-[#2c1e18]/60 hover:text-[#2c1e18] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingDone ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#8c4a32] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2c1e18]">
                  Đặt lịch hẹn thành công
                </h3>
                <p className="text-xs sm:text-sm text-[#5c473d]">
                  Chuyên viên lễ tân của <strong>{data.business.name}</strong> sẽ liên hệ xác nhận
                  khung giờ thư giãn dành riêng cho quý khách.
                </p>
                <button
                  onClick={() => setBookingOpen(false)}
                  className="bg-[#8c4a32] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingDone(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8c4a32]">
                    Đặt lịch liệu trình Spa
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2c1e18] mt-1">
                    {data.business.name}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2c1e18] mb-1">
                    Họ và tên quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Minh Anh"
                    className="w-full bg-white border border-[#e8d5c8] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#8c4a32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2c1e18] mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0906 xxx xxx"
                    className="w-full bg-white border border-[#e8d5c8] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#8c4a32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2c1e18] mb-1">
                    Liệu trình quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full bg-white border border-[#e8d5c8] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#8c4a32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8c4a32] hover:bg-[#733b27] text-white text-xs font-bold uppercase tracking-widest py-3.5 transition-colors cursor-pointer"
                >
                  XÁC NHẬN ĐẶT LỊCH
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
