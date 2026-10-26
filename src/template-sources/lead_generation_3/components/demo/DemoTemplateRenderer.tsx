"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Camera,
  Clock,
  Compass,
  Gauge,
  RefreshCw,
  Radio,
  Truck,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  ArrowUp,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration3DefaultData,
  type LeadGeneration3Data
} from "@/template-sources/lead_generation_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LeadGeneration3Data = adaptClonedTemplateData(
    leadGeneration3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDarkTabIdx, setActiveDarkTabIdx] = useState(0);
  const [leadInput, setLeadInput] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const leftSpecs = data.specCallouts.filter((s) => s.side === "left");
  const rightSpecs = data.specCallouts.filter((s) => s.side === "right");
  const currentDarkTab =
    data.darkShowcaseTabs[activeDarkTabIdx] || data.darkShowcaseTabs[0];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadInput.trim()) return;
    setLeadSubmitted(true);
    setLeadInput("");
    setTimeout(() => setLeadSubmitted(false), 5000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#009ee3] selection:text-white"
    >
      {/* 1. WHITE TOPBAR + SKY BLUE STICKY NAVBAR (#009ee3) */}
      <div className="bg-white border-b border-slate-100 text-[11px] text-slate-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <p>
            Miễn phí giao hàng khi mua{" "}
            <a href="#perks" className="text-[#009ee3] underline font-semibold">
              Combo
            </a>
          </p>
          <a
            href="#footer"
            className="flex items-center gap-1 hover:text-[#009ee3] transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Hệ thống cửa hàng</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#009ee3] text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Left Drone Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-white/15 flex items-center justify-center font-extrabold text-sm">
              M
            </div>
            <div className="leading-none">
              <span className="block text-sm sm:text-base font-extrabold uppercase tracking-wider">
                {data.business.name}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.22em] text-white/80 mt-0.5">
                DRONE TECHNOLOGY
              </span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-white/95">
            <a href="#top" className="hover:text-white font-semibold">
              Trang chủ
            </a>
            <a href="#features" className="hover:text-white/80 transition-colors">
              Tính năng
            </a>
            <a href="#perks" className="hover:text-white/80 transition-colors">
              Ưu đãi
            </a>
            <a href="#specs" className="hover:text-white/80 transition-colors">
              Thông số kỹ thuật
            </a>
            <a href="#promo" className="hover:text-white/80 transition-colors">
              Sản phẩm
            </a>
            <a href="#lead-form" className="hover:text-white/80 transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Right White Pill Phone Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-white text-[#009ee3] hover:bg-slate-50 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{primaryPhone}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-white"
              aria-label="Mở menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0086c3] px-6 py-4 space-y-2 text-xs font-semibold border-t border-white/15">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tính năng nâng cao
            </a>
            <a
              href="#perks"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Ưu đãi đặt hàng
            </a>
            <a
              href="#specs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Thông số kỹ thuật
            </a>
            <a
              href="#promo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Khuyến mãi giới hạn
            </a>
            <a
              href="#lead-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Liên hệ nhận ưu đãi
            </a>
          </div>
        )}
      </header>

      {/* 2. SOFT GRAY-BEIGE SPLIT HERO BANNER */}
      <section className="relative bg-gradient-to-r from-[#ecebe6] via-[#f3f3f0] to-[#eef4f8] overflow-hidden py-14 sm:py-20 lg:py-24">
        {/* Stylized Background Watermark Typography ("MINI 4") */}
        <div className="pointer-events-none select-none absolute right-6 top-1/2 -translate-y-1/2 text-[130px] sm:text-[200px] font-black tracking-tighter text-[#009ee3]/15 leading-none hidden md:block">
          MINI
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-slate-500">
                {data.hero.eyebrow || "KHÁM PHÁ THẾ GIỚI"}
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                {data.hero.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href={data.hero.ctaLink || "#lead-form"}
                  className="inline-flex items-center gap-2 bg-[#009ee3] hover:bg-[#0086c3] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all"
                >
                  <span>{data.hero.ctaText || "LIÊN HỆ NGAY"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Floating Drone Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full max-w-xl h-72 sm:h-96 object-cover rounded-2xl shadow-xl border-4 border-white/80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. "THÔNG SỐ VƯỢT TRỘI — TÍNH NĂNG NÂNG CAO" (Center Drone + 6 Spec Callouts) */}
      <section id="features" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#009ee3] mb-1.5">
              THÔNG SỐ VƯỢT TRỘI
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              TÍNH NĂNG NÂNG CAO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left 3 Callouts */}
            <div className="md:col-span-4 space-y-10">
              {leftSpecs.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between md:justify-end gap-4 text-left md:text-right"
                >
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">
                      {item.value}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-1">
                      {item.label}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#009ee3] flex items-center justify-center shrink-0">
                    {item.icon === "camera" && <Camera className="w-5 h-5" />}
                    {item.icon === "clock" && <Clock className="w-5 h-5" />}
                    {item.icon === "drone" && <Compass className="w-5 h-5" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Center Drone Hardware Visual */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-full bg-slate-50 p-4 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={data.centerDroneImage}
                  alt="Cấu trúc Flycam"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right 3 Callouts */}
            <div className="md:col-span-4 space-y-10">
              {rightSpecs.map((item) => (
                <div key={item.id} className="flex items-center gap-4 text-left">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#009ee3] flex items-center justify-center shrink-0">
                    {item.icon === "speed" && <Gauge className="w-5 h-5" />}
                    {item.icon === "gimbal" && <RefreshCw className="w-5 h-5" />}
                    {item.icon === "signal" && <Radio className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">
                      {item.value}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-1">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. "HIỆU SUẤT NÂNG CAO — ƯU ĐÃI KHI ĐẶT HÀNG" (#f4f6f9 Bento Grid) */}
      <section id="perks" className="py-16 lg:py-24 bg-[#f4f6f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#009ee3] mb-1.5">
              HIỆU SUẤT NÂNG CAO
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              ƯU ĐÃI KHI ĐẶT HÀNG
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Tall Card: Giá cả ưu đãi lên đến 10% */}
            <div className="lg:col-span-3 bg-white rounded-xl p-6 flex flex-col justify-between items-center text-center shadow-xs border border-slate-100">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-2">
                  {data.perks.featuredDiscountTitle}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {data.perks.featuredDiscountDesc}
                </p>
              </div>

              {/* Stylized DJI Gold Coin Medallions */}
              <div className="my-8 relative flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#d99b66] via-[#f3c69f] to-[#fff0e0] shadow-lg border-4 border-[#e8b384] flex items-center justify-center">
                  <span className="text-xl font-black italic tracking-tighter text-[#8c5326]">
                    DJI -10%
                  </span>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#c98850] to-[#f2c49b] shadow-md border-2 border-white flex items-center justify-center -ml-6 mt-14">
                  <span className="text-xs font-extrabold text-[#7a451b]">VIP</span>
                </div>
              </div>

              <a
                href="#lead-form"
                className="text-[11px] font-bold text-[#009ee3] hover:underline"
              >
                Nhận mã giảm ngay →
              </a>
            </div>

            {/* Right 3x2 Grid of 6 Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.perks.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl p-5 flex flex-col items-center justify-between text-center shadow-xs border border-slate-100 hover:shadow-md transition-shadow min-h-[180px]"
                >
                  <h3 className="text-xs font-bold text-slate-800">{card.title}</h3>

                  {card.iconType === "free" && (
                    <div className="my-auto py-4">
                      <span className="text-3xl sm:text-4xl font-black italic tracking-wider text-[#ff6b00]">
                        {card.badgeText || "FREE"}
                      </span>
                    </div>
                  )}

                  {card.iconType === "truck" && (
                    <div className="my-auto py-4 flex items-center gap-1 text-[#ff6b00]">
                      <div className="space-y-1">
                        <span className="block w-5 h-0.5 bg-[#ff6b00]" />
                        <span className="block w-3 h-0.5 bg-[#ff6b00] ml-2" />
                      </div>
                      <Truck className="w-12 h-12 text-slate-800 stroke-[1.5]" />
                    </div>
                  )}

                  {card.iconType === "image" && card.image && (
                    <div className="w-full h-28 mt-3 rounded-lg overflow-hidden bg-slate-50">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULLWIDTH DARK DRONE SHOWCASE (#0b0e13) WITH 3 INTERACTIVE FEATURE TABS */}
      <section className="bg-[#0b0e13] text-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Dramatic Dark Drone Image + Overlay Info */}
          <div className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[440px] mb-8">
            <img
              src={currentDarkTab.image}
              alt={currentDarkTab.title}
              className="w-full h-full object-cover object-center opacity-75 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e13] via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#009ee3] block mb-1">
                {currentDarkTab.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {currentDarkTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {currentDarkTab.description}
              </p>
            </div>
          </div>

          {/* 3 Interactive Bottom Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
            {data.darkShowcaseTabs.map((tab, idx) => {
              const isActive = activeDarkTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDarkTabIdx(idx)}
                  className={`py-6 px-4 text-center transition-all border-b-2 ${
                    isActive
                      ? "border-[#009ee3] text-white"
                      : "border-transparent text-white/45 hover:text-white/80"
                  }`}
                >
                  <span
                    className={`block text-[10px] font-bold uppercase tracking-[0.25em] mb-1 ${
                      isActive ? "text-[#009ee3]" : "text-white/40"
                    }`}
                  >
                    {tab.eyebrow}
                  </span>
                  <span className="text-base sm:text-lg font-extrabold">{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. "TÍCH HỢP HIỆN ĐẠI — THÔNG SỐ KỸ THUẬT" (2-Column Spec Table) */}
      <section id="specs" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#009ee3] mb-1.5">
              TÍCH HỢP HIỆN ĐẠI
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              THÔNG SỐ KỸ THUẬT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Table: Điều khiển từ xa DJI RC-N2 */}
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-center text-slate-900 mb-4">
                Điều khiển từ xa DJI RC-N2
              </h3>
              <div className="bg-[#f7f8fa] rounded-lg overflow-hidden divide-y divide-white">
                {data.controllerSpecs.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 px-4 py-3 text-xs items-center gap-3"
                  >
                    <span className="col-span-5 text-slate-500">{row.label}</span>
                    <span className="col-span-7 font-bold text-slate-800">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Table: Cảm biến và Gimbal */}
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-center text-slate-900 mb-4">
                Cảm biến và Gimbal
              </h3>
              <div className="bg-[#f7f8fa] rounded-lg overflow-hidden divide-y divide-white">
                {data.sensorGimbalSpecs.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 px-4 py-3 text-xs items-center gap-3"
                  >
                    <span className="col-span-4 text-slate-500">{row.label}</span>
                    <span className="col-span-8 font-bold text-slate-800 leading-relaxed">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "CAMERA CHẤT LƯỢNG CAO — DJI MAVIC 4 PRO" SPLIT BANNER */}
      <section className="bg-[#f4f6f9] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#009ee3]">
                {data.secondaryBanner.eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
                {data.secondaryBanner.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.secondaryBanner.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#lead-form"
                  className="inline-block bg-[#009ee3] hover:bg-[#0086c3] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors"
                >
                  {data.secondaryBanner.ctaText}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <img
                src={data.secondaryBanner.image}
                alt={data.secondaryBanner.title}
                className="w-full h-64 sm:h-72 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. "KHUYẾN MÃI GIỚI HẠN — 14,590,000₫" CENTER SHOWCASE */}
      <section id="promo" className="py-16 lg:py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-900 mb-2">
            {data.limitedOffer.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#009ee3] underline underline-offset-4 mb-5">
            {data.limitedOffer.price}
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-1.5 bg-[#009ee3] hover:bg-[#0086c3] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow transition-all mb-10"
          >
            <span>{data.limitedOffer.ctaText}</span>
            <Phone className="w-3.5 h-3.5" />
          </a>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden">
            <img
              src={data.limitedOffer.droneImage}
              alt="Flycam DJI Mini Pro"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 9. 3 TRUST BADGES BAR (#f4f6f9) + LEAD CAPTURE SPLIT + DARK FOOTER */}
      <section className="py-12 bg-[#f4f6f9] border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.trustItems.map((tr, idx) => (
              <div key={tr.id} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#009ee3] text-white flex items-center justify-center shrink-0 shadow-xs">
                  {idx === 0 && <Truck className="w-5 h-5" />}
                  {idx === 1 && <CreditCard className="w-5 h-5" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                    {tr.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{tr.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Split Section */}
      <section id="lead-form" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                Liên hệ với chúng tôi ngay để nhận ưu đãi hấp dẫn mới nhất
              </h2>

              {leadSubmitted ? (
                <div className="bg-sky-50 border border-[#009ee3]/30 rounded-lg p-4 flex items-center gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#009ee3] shrink-0" />
                  <span>
                    Đã đăng ký nhận ưu đãi! Chuyên viên {data.business.name} sẽ liên hệ gửi báo giá
                    Combo sớm nhất.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    required
                    value={leadInput}
                    onChange={(e) => setLeadInput(e.target.value)}
                    placeholder="Nhập Email hoặc Số điện thoại..."
                    className="flex-1 bg-[#f4f6f9] border border-slate-200 rounded px-4 py-2.5 text-xs focus:outline-none focus:border-[#009ee3]"
                  />
                  <button
                    type="submit"
                    className="bg-[#009ee3] hover:bg-[#0086c3] text-white text-xs font-bold px-6 py-2.5 rounded transition-colors shrink-0"
                  >
                    Liên hệ
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-6">
              <img
                src={data.centerDroneImage}
                alt="Đăng ký nhận ưu đãi Flycam"
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DARK FOOTER */}
      <footer id="footer" className="bg-[#11151c] text-white/75 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Col */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-[#009ee3] text-white flex items-center justify-center font-extrabold text-xs">
                  M
                </div>
                <span className="text-base font-extrabold uppercase text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
            </div>

            {/* DANH MỤC */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">DANH MỤC</h4>
              <ul className="space-y-2 text-xs text-white/65">
                <li>
                  <a href="#top" className="hover:text-[#009ee3]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#009ee3]">
                    Tính năng
                  </a>
                </li>
                <li>
                  <a href="#perks" className="hover:text-[#009ee3]">
                    Ưu đãi
                  </a>
                </li>
                <li>
                  <a href="#specs" className="hover:text-[#009ee3]">
                    Thông số kỹ thuật
                  </a>
                </li>
                <li>
                  <a href="#promo" className="hover:text-[#009ee3]">
                    Sản phẩm
                  </a>
                </li>
              </ul>
            </div>

            {/* LIÊN HỆ */}
            <div className="lg:col-span-3 space-y-2 text-xs text-white/65">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">LIÊN HỆ</h4>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#009ee3] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#009ee3] shrink-0" />
                <span>{primaryEmail}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#009ee3] shrink-0" />
                <span>{primaryPhone}</span>
              </p>
            </div>

            {/* THỜI GIAN HOẠT ĐỘNG */}
            <div className="lg:col-span-3 space-y-2 text-xs text-white/65">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                THỜI GIAN HOẠT ĐỘNG
              </h4>
              <p>{data.business.workingHours}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${primaryEmail}`} className="text-[#009ee3] hover:underline">
                  {primaryEmail}
                </a>
              </p>
            </div>
          </div>

          <div className="pt-6 flex items-center justify-between text-[11px] text-white/45">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="w-7 h-7 rounded bg-white/10 hover:bg-[#009ee3] text-white flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
