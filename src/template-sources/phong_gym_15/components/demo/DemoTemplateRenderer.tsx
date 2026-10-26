"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Dumbbell,
  ShieldCheck,
  Smartphone,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym15DefaultData,
  type Gym15Data
} from "@/template-sources/phong_gym_15/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Gym15Data = adaptClonedTemplateData(
    phongGym15DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeEqCategory, setActiveEqCategory] = useState<string>("ALL");
  const [gymAreaM2, setGymAreaM2] = useState<number>(250);
  const [gymTier, setGymTier] = useState<"STANDARD" | "PRO" | "LUXURY">("PRO");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(
    "Tư vấn Setup Phòng Gym Trọn Gói"
  );

  const primaryPhone = data.business.phone?.[0] || "0909 888 765";
  const primaryEmail = data.business.email?.[0] || "setup@vmtfitness.vn";

  const allEquipment =
    data.equipmentCatalog || phongGym15DefaultData.equipmentCatalog;
  const filteredEquipment =
    activeEqCategory === "ALL"
      ? allEquipment
      : allEquipment.filter((eq) => eq.category === activeEqCategory);

  const estimatedBudgetMillion =
    gymAreaM2 * (gymTier === "STANDARD" ? 2.2 : gymTier === "PRO" ? 3.5 : 5.2);

  const scrollToQuote = (topic?: string) => {
    if (topic) setSelectedEquipment(topic);
    setQuoteSubmitted(false);
    const el = document.getElementById("bao-gia-setup");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1e242b] font-sans selection:bg-[#7b12d1] selection:text-white">
      {/* 1. CLEAN CORPORATE HEADER WITH EMERALD DIAMOND MONOGRAM */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Emerald Diamond Monogram Logo */}
          <a href="#trang-chu" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-lg bg-[#0d6e26] text-white flex items-center justify-center shadow-sm rotate-45 group-hover:rotate-0 transition-transform">
              <Dumbbell className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <div className="leading-tight ml-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base sm:text-lg font-black uppercase tracking-tight text-[#111111]">
                  {data.business.name}
                </span>
                <span className="text-xs font-extrabold uppercase text-gray-400">
                  CO.,LTD.
                </span>
              </div>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#0d6e26]">
                Gym Setup &amp; Equipment Supply
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold uppercase tracking-wider text-gray-700">
            <a href="#trang-chu" className="text-[#7b12d1]">
              Trang Chủ
            </a>
            <a href="#dich-vu" className="hover:text-[#7b12d1] transition-colors">
              Giải Pháp Setup
            </a>
            <a href="#thiet-bi-gym" className="hover:text-[#7b12d1] transition-colors">
              Máy Tập Gym
            </a>
            <a href="#quy-trinh" className="hover:text-[#7b12d1] transition-colors">
              Quy Trình 4 Bước
            </a>
            <a href="#bao-gia-setup" className="hover:text-[#7b12d1] transition-colors">
              Dự Toán Chi Phí
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="text-xs font-extrabold text-[#0d6e26] flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>{primaryPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToQuote()}
              className="bg-gradient-to-r from-[#7b12d1] to-[#ef197b] hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md transition-all cursor-pointer"
            >
              Báo Giá Nhanh
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2.5 text-xs font-extrabold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#7b12d1]"
            >
              Trang Chủ
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giải Pháp Setup
            </a>
            <a
              href="#thiet-bi-gym"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Máy Tập Gym
            </a>
            <a
              href="#quy-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Quy Trình
            </a>
            <a
              href="#bao-gia-setup"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#ef197b]"
            >
              Nhận Báo Giá Setup
            </a>
          </div>
        )}
      </header>

      {/* 2. SIGNATURE POLAROID COLLAGE & PURPLE/PINK BANNER HERO */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-br from-[#fffdf9] via-[#f6efe2] to-[#ead9be] py-12 sm:py-16 lg:py-20 border-b border-amber-900/10"
      >
        {/* Background Warehouse / Gym Facility Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Cols: Floating Polaroids + Purple & Hot Pink Headline Ribbons */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top 2 Floating Polaroid Frames */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {(data.polaroidCards || phongGym15DefaultData.polaroidCards)
                  .slice(0, 2)
                  .map((pol, idx) => (
                    <div
                      key={pol.id}
                      className={`bg-white p-2.5 rounded-2xl shadow-xl border-4 border-white transition-transform hover:rotate-0 ${
                        idx === 0 ? "-rotate-3" : "rotate-2 sm:mt-6"
                      }`}
                    >
                      <div className="h-36 sm:h-40 rounded-xl overflow-hidden relative">
                        <img
                          src={pol.image}
                          alt={pol.caption}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/65 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg">
                          <span className="block text-[10px] font-black uppercase tracking-wider text-emerald-300">
                            {pol.caption}
                          </span>
                          <span className="block text-[10px] text-white/90">
                            {pol.subCaption}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Signature Stacked Purple & Hot Pink Headline Pills */}
              <div className="space-y-3 pt-2">
                {/* Purple Pill */}
                <div className="inline-block w-full bg-[#7b12d1] text-white px-6 py-4 rounded-xl shadow-[0_12px_30px_rgba(123,18,209,0.35)]">
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none text-center sm:text-left">
                    {data.purpleBannerText || data.hero.title}
                  </h1>
                </div>

                {/* Hot Pink Pill */}
                <div className="inline-block w-full bg-[#ef197b] text-white px-6 py-4 rounded-xl shadow-[0_12px_30px_rgba(239,25,123,0.35)]">
                  <p className="text-base sm:text-2xl font-extrabold uppercase leading-snug text-center sm:text-left">
                    {data.pinkBannerText ||
                      `SETUP PHÒNG TẬP AN TOÀN, TIẾT KIỆM CÙNG ${data.business.name.toUpperCase()}`}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToQuote()}
                  className="bg-[#0d6e26] hover:bg-[#09521c] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{data.hero.ctaText || "Nhận Báo Giá Setup Gym"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#thiet-bi-gym"
                  className="bg-white hover:bg-gray-50 text-[#1e242b] border border-gray-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition-colors"
                >
                  {data.hero.secondaryCtaText || "Xem Danh Mục Máy Tập"}
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Specialist Cutout Portrait + Side Polaroid Frames */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Top-Right Polaroid */}
              {data.polaroidCards?.[2] && (
                <div className="hidden sm:block absolute -top-4 -right-2 z-20 w-52 bg-white p-2 rounded-2xl shadow-xl rotate-6">
                  <img
                    src={data.polaroidCards[2].image}
                    alt={data.polaroidCards[2].caption}
                    className="w-full h-28 object-cover rounded-xl mb-1.5"
                  />
                  <p className="text-[10px] font-black text-center text-[#111111]">
                    {data.polaroidCards[2].caption}
                  </p>
                </div>
              )}

              {/* Main Specialist Portrait with Thick White Cutout Frame */}
              <div className="relative z-10 w-72 sm:w-80 h-[380px] sm:h-[430px] rounded-[32px] overflow-hidden border-[8px] border-white shadow-2xl bg-white">
                <img
                  src={data.coachPortraitImage}
                  alt="Chuyên gia tư vấn Setup Phòng Gym"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                  <span className="inline-block bg-[#0d6e26] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded mb-1">
                    Chuyên gia Setup Phòng Tập
                  </span>
                  <p className="text-xs font-bold">
                    Đồng hành từ bản vẽ 3D đến khi phòng tập kín hội viên
                  </p>
                </div>
              </div>

              {/* Bottom-Right Polaroid */}
              {data.polaroidCards?.[3] && (
                <div className="hidden sm:block absolute -bottom-4 -right-2 z-20 w-48 bg-white p-2 rounded-2xl shadow-xl -rotate-3">
                  <img
                    src={data.polaroidCards[3].image}
                    alt={data.polaroidCards[3].caption}
                    className="w-full h-24 object-cover rounded-xl mb-1"
                  />
                  <p className="text-[10px] font-black text-center text-[#0d6e26]">
                    {data.polaroidCards[3].caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="bg-[#111827] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {(data.stats || phongGym15DefaultData.stats || []).map((st) => (
            <div key={st.id} className="border-r last:border-r-0 border-white/10 px-2">
              <span className="block text-2xl sm:text-4xl font-black text-[#f5b700] mb-1">
                {st.number}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                {st.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 4-PILLAR CORE SERVICES */}
      <section id="dich-vu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#7b12d1]/10 text-[#7b12d1] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-2">
              Giải Pháp Toàn Diện
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
              {data.business.aboutTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.services || phongGym15DefaultData.services || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => scrollToQuote(srv.title)}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#7b12d1] overflow-hidden shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#7b12d1] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {srv.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-sm text-[#111111] group-hover:text-[#7b12d1] transition-colors mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#ef197b]">
                  <span>Nhận tư vấn &amp; báo giá</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL GYM EQUIPMENT CATALOG */}
      <section id="thiet-bi-gym" className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block bg-[#0d6e26]/10 text-[#0d6e26] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-2">
                Nhập Khẩu Chính Ngạch
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                Danh Mục Thiết Bị Phòng Tập
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: "ALL", label: "Tất cả máy tập" },
                { key: "CARDIO", label: "Máy Cardio" },
                { key: "STRENGTH", label: "Giàn Tạ Khối" },
                { key: "FREEWEIGHT", label: "Tạ Rời & Ghế" },
                { key: "CROSSFIT", label: "CrossFit" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveEqCategory(tab.key)}
                  className={`text-xs font-extrabold uppercase px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeEqCategory === tab.key
                      ? "bg-[#7b12d1] text-white shadow"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#7b12d1]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEquipment.map((eq) => (
              <div
                key={eq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    <img
                      src={eq.image}
                      alt={eq.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0d6e26] text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                      {eq.warranty}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase text-gray-400">
                      Mã máy: {eq.code}
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#111111] line-clamp-2 mt-0.5 mb-2">
                      {eq.name}
                    </h3>
                    <span className="block text-sm font-black text-[#ef197b]">
                      {eq.price}
                    </span>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={() => scrollToQuote(`${eq.name} (${eq.code})`)}
                    className="w-full bg-[#111827] hover:bg-[#7b12d1] text-white text-xs font-extrabold uppercase py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Nhận Giá Sỉ Dự Án
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 4-STEP TURNKEY SETUP WORKFLOW */}
      <section id="quy-trinh" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] mb-2">
              Quy Trình Setup Phòng Gym 4 Bước
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Chuẩn hóa tiến độ từ lúc khảo sát mặt bằng đến ngày khai trương đón hội viên.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.setupWorkflow || phongGym15DefaultData.setupWorkflow).map(
              (st) => (
                <div
                  key={st.id}
                  className="bg-[#faf8ff] border border-purple-100 rounded-2xl p-6 relative"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#7b12d1] to-[#ef197b] text-white text-base font-black mb-4 shadow">
                    {st.stepNumber}
                  </span>
                  <h3 className="font-extrabold text-sm text-[#111111] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE GYM SETUP CALCULATOR & QUOTE FORM */}
      <section
        id="bao-gia-setup"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#2a0845] via-[#4b0d7a] to-[#7b12d1] text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 6 Cols: Interactive Budget Estimator */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-[#ff85c0] mb-2">
              <Calculator className="w-5 h-5" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                Công Cụ Dự Toán Chi Phí Mở Phòng Gym
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase mb-6">
              Ước Tính Vốn Đầu Tư Thiết Bị
            </h3>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Diện tích mặt bằng dự kiến:</span>
                  <span className="text-[#ffd700] text-sm font-black">
                    {gymAreaM2} m²
                  </span>
                </div>
                <input
                  type="range"
                  min={80}
                  max={1000}
                  step={10}
                  value={gymAreaM2}
                  onChange={(e) => setGymAreaM2(Number(e.target.value))}
                  className="w-full accent-[#ef197b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/60 mt-1">
                  <span>80 m² (Private Studio)</span>
                  <span>500 m² (CLB Tiêu chuẩn)</span>
                  <span>1.000 m² (Luxury Center)</span>
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold mb-2">
                  Phân khúc phòng tập:
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { key: "STANDARD" as const, label: "Tiêu Chuẩn" },
                    { key: "PRO" as const, label: "Thương Mại Pro" },
                    { key: "LUXURY" as const, label: "Cao Cấp 5 Sao" }
                  ].map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setGymTier(t.key)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-extrabold uppercase border transition-all cursor-pointer ${
                        gymTier === t.key
                          ? "bg-[#ef197b] border-[#ef197b] text-white shadow"
                          : "bg-white/5 border-white/20 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-black/35 rounded-xl p-4 border border-white/15 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-white/75">
                    Ngân sách thiết bị ước tính:
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#ffd700]">
                    ~ {Math.round(estimatedBudgetMillion).toLocaleString("vi-VN")}{" "}
                    Triệu VNĐ
                  </span>
                </div>
                <span className="bg-[#0d6e26] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  Tặng Bản Vẽ 3D
                </span>
              </div>
            </div>
          </div>

          {/* Right 6 Cols: Quote Request Form */}
          <div className="lg:col-span-6 bg-white text-[#1e242b] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-lg sm:text-xl font-black uppercase text-[#7b12d1] mb-1">
              Đăng Ký Nhận Báo Giá &amp; Bản Vẽ 3D
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Kỹ sư trưởng {data.business.name} sẽ gửi bảng kê chi tiết danh mục máy tập theo diện
              tích mặt bằng của bạn.
            </p>

            {quoteSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-[#0d6e26] mx-auto mb-3" />
                <p className="font-extrabold text-base text-gray-900 mb-1">
                  Đã Tiếp Nhận Yêu Cầu Báo Giá!
                </p>
                <p className="text-xs text-gray-500 mb-5">
                  Chuyên viên dự án phụ trách <strong>{selectedEquipment}</strong> (diện tích{" "}
                  {gymAreaM2}m²) sẽ liên hệ với bạn trong 15 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setQuoteSubmitted(false)}
                  className="bg-[#7b12d1] text-white text-xs font-extrabold uppercase px-6 py-2.5 rounded-lg cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Họ và tên chủ đầu tư *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7b12d1]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Số điện thoại Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7b12d1]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Hạng mục quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedEquipment}
                    onChange={(e) => setSelectedEquipment(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7b12d1]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Tỉnh / Thành phố triển khai
                  </label>
                  <input
                    type="text"
                    placeholder="VD: TP.HCM, Hà Nội, Bình Dương..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#7b12d1]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7b12d1] to-[#ef197b] hover:opacity-95 text-white font-black uppercase py-3 rounded-lg shadow-lg transition-all cursor-pointer"
                >
                  NHẬN BẢNG BÁO GIÁ CHI TIẾT
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. DARK FOOTER */}
      <footer className="bg-[#0f172a] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#0d6e26] text-white flex items-center justify-center">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-base font-black uppercase text-white">
                {data.business.name} CO., LTD.
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          <div>
            <h4 className="font-extrabold uppercase text-white mb-3">
              Văn Phòng &amp; Tổng Kho Máy Tập
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ef197b] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ef197b] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ef197b] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold uppercase text-white mb-3">
              Cam Kết Chủ Đầu Tư
            </h4>
            <ul className="space-y-2 text-gray-400">
              {(data.business.highlights || []).map((hl, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0d6e26] shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/10 text-center text-[11px] text-gray-400">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
