"use client";

import React, { useState } from "react";
import {
  Crown,
  Phone,
  Mail,
  MapPin,
  Monitor,
  Maximize2,
  Sun,
  ShieldCheck,
  Calculator,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Award,
  Layers,
  Cpu,
  X,
  Menu,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile22MockData,
  CorporateProfile22Data,
  VietkingLedProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  companyName?: string;
  customData?: Partial<CorporateProfile22Data>;
}

export function DemoTemplateRenderer({
  companyName,
  customData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(corporateProfile22MockData, {
    ...customData,
    business: {
      ...corporateProfile22MockData.business,
      ...(customData?.business || {}),
      ...(companyName ? { name: companyName } : {}),
    },
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [activeProductModal, setActiveProductModal] =
    useState<VietkingLedProductItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Interactive LED Screen Calculator State
  const [calcWidth, setCalcWidth] = useState<number>(4);
  const [calcHeight, setCalcHeight] = useState<number>(2.5);
  const [calcPitch, setCalcPitch] = useState<number>(2.0);
  const [calcEnvironment, setCalcEnvironment] = useState<"indoor" | "outdoor">(
    "indoor"
  );
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);
  const [quotePhone, setQuotePhone] = useState<string>("");

  const totalArea = Number((calcWidth * calcHeight).toFixed(2));
  const resolutionW = Math.round((calcWidth * 1000) / calcPitch);
  const resolutionH = Math.round((calcHeight * 1000) / calcPitch);
  const unitPricePerM2 =
    calcPitch <= 1.53
      ? 24500000
      : calcPitch <= 2.0
      ? 15500000
      : calcPitch <= 2.5
      ? 12800000
      : calcEnvironment === "outdoor"
      ? 16900000
      : 11500000;
  const estimatedBudget = (totalArea * unitPricePerM2).toLocaleString("vi-VN");

  const filteredProducts =
    selectedCategory === "Tất cả"
      ? data.ledProducts
      : data.ledProducts.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans antialiased selection:bg-[#e31b23] selection:text-white">
      {/* 1. TOP CORPORATE BAR & NAVIGATION HEADER */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* VIETKING® Royal Emblem Logo */}
          <a href="#" className="flex items-center gap-2.5 select-none group">
            <div className="w-11 h-11 rounded-full bg-[#e31b23]/10 border-2 border-[#e31b23] flex flex-col items-center justify-center text-[#e31b23] group-hover:bg-[#e31b23] group-hover:text-white transition-colors">
              <Crown className="w-5 h-5" />
            </div>
            <div className="leading-none">
              <div className="flex items-start">
                <span className="text-2xl font-black tracking-tight text-[#e31b23]">
                  VIETKING
                </span>
                <span className="text-[10px] font-bold text-[#e31b23] ml-0.5">
                  ®
                </span>
              </div>
              <span className="block text-[10px] font-bold tracking-widest uppercase text-[#0284c7]">
                led display screen
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {data.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#e31b23] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Hotline CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${data.business.phone[0].replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#e31b23] hover:bg-[#b91c1c] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded shadow-md shadow-[#e31b23]/25 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{data.business.phone[0]}</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-[#e31b23]"
              aria-label="Mở menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
            {data.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-extrabold uppercase text-slate-700 hover:text-[#e31b23]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (MATCHING THE EXACT VIETKING MONITOR SHOWCASE IN DN025) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#0369a1] pt-10 pb-16 sm:pt-14 sm:pb-24">
        {/* Ocean Horizon & City Skyline Atmosphere */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071936] via-[#0c4a6e]/90 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Floating Red Quick-Contact Tab on Right Edge (as seen in reference) */}
        <a
          href="#du-toan-led"
          className="hidden md:flex fixed right-0 top-1/3 z-30 bg-[#e31b23] hover:bg-[#b91c1c] text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-l-md shadow-lg items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          <span>BÁO GIÁ LED</span>
        </a>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Top Centered VIETKING Emblem & Red Headline */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex flex-col items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-[#e31b23]/30 flex items-center justify-center text-[#e31b23] mb-1">
                <Crown className="w-6 h-6" />
              </div>
              <span className="text-lg font-black tracking-tight text-[#e31b23]">
                VIETKING®
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#0284c7]">
                led display screen
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-[34px] font-black uppercase tracking-tight text-[#b91c1c] leading-snug drop-shadow-xs">
              CUNG CẤP CÁC GIẢI PHÁP HIỂN THỊ
              <span className="block text-[#e31b23]">
                CHUYÊN NGHIỆP VỀ MÀN HÌNH LED
              </span>
            </h1>
          </div>

          {/* 3 VERTICAL LED DISPLAY TOTEM PILLARS (Exact 3-Card Layout in Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {data.heroPillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                onClick={() => {
                  setSelectedCategory(
                    idx === 0
                      ? "Màn Hình LED Ngoài Trời"
                      : idx === 1
                      ? "Màn Hình LED Trong Nhà"
                      : "Màn Hình LED Sáng Tạo"
                  );
                  const el = document.getElementById("danh-muc-led");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative rounded-xl bg-[#071326] p-2.5 border-[3px] border-slate-700/80 hover:border-[#38bdf8] shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col"
              >
                {/* Top Metallic Bezel Camera Dot */}
                <div className="flex items-center justify-center py-1">
                  <span className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-[#e31b23]" />
                </div>

                {/* Vertical LED Screen Display Area */}
                <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-900">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-[#040d1a]/30 to-transparent" />

                  {/* Top Pixel Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#e31b23] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow">
                      {pillar.badgeText}
                    </span>
                  </div>

                  {/* Overlay VIETKING Watermark on Screen */}
                  <div className="absolute bottom-20 inset-x-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/55 backdrop-blur-xs border border-white/20 text-[11px] font-bold text-[#38bdf8]">
                      {pillar.pixelRange}
                    </span>
                  </div>

                  {/* Bottom Pillar Title Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center bg-gradient-to-t from-[#030914] via-[#030914]/95 to-transparent">
                    <h2 className="text-sm sm:text-base font-black uppercase tracking-wider text-white group-hover:text-[#38bdf8] transition-colors">
                      {pillar.title}
                    </h2>
                    <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Metallic Standee Base */}
                <div className="mt-2 mx-auto w-2/3 h-2 rounded-full bg-gradient-to-r from-slate-500 via-slate-200 to-slate-500 opacity-80" />
              </div>
            ))}
          </div>

          {/* Bottom-left VỀ VIETKING Anchor & Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-white border-t border-white/20 pt-6">
            <a
              href="#ve-vietking"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white hover:text-[#fde047]"
            >
              <span>VỀ VIETKING</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs sm:text-sm font-bold text-sky-100">
              ★ Lựa chọn số 1 trong ngành công nghệ hiển thị màn hình LED tại
              Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* 3. VỀ VIETKING — HƠN 10 NĂM KINH NGHIỆM & ĐỐI TÁC CÔNG NGHỆ */}
      <section id="ve-vietking" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#e31b23]">
                <Award className="w-4 h-4" />
                HỒ SƠ NĂNG LỰC VIETKING LED
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 leading-tight">
                DOANH NGHIỆP HƠN 10 NĂM KINH NGHIỆM CUNG CẤP GIẢI PHÁP{" "}
                <span className="text-[#e31b23]">MÀN HÌNH LED</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.business.description}
              </p>

              {/* 4 Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {(data.stats || []).map((st: any) => (
                  <div
                    key={st.label}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center"
                  >
                    <span className="block text-xl sm:text-2xl font-black text-[#e31b23]">
                      {st.value}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 mt-1 block">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 4 Global LED Component Partners */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.technologyPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="p-5 rounded-xl bg-gradient-to-br from-[#07172b] to-[#0f2942] text-white border border-sky-500/20 shadow-md flex flex-col justify-between"
                >
                  <Cpu className="w-7 h-7 text-[#38bdf8] mb-3" />
                  <div>
                    <h3 className="text-base font-black tracking-wider text-white">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-sky-200 mt-1">{partner.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DANH MỤC SẢN PHẨM & GIẢI PHÁP MÀN HÌNH LED */}
      <section id="danh-muc-led" className="py-16 sm:py-20 bg-[#f1f5f9]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#e31b23]">
                SẢN PHẨM CHÍNH HÃNG CO, CQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mt-1">
                CÁC DÒNG MÀN HÌNH LED CHỦ LỰC
              </h2>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {data.ledCategories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                      active
                        ? "bg-[#e31b23] text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-[#e31b23]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Technical Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#e31b23] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-[#38bdf8] text-xs font-black px-3 py-1 rounded">
                      Pitch: {item.pixelPitch}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-[#e31b23] transition-colors mb-3">
                      {item.name}
                    </h3>

                    {/* Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Độ sáng:
                        </span>
                        <strong className="text-slate-800">
                          {item.brightness}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Tần số làm tươi:
                        </span>
                        <strong className="text-slate-800">
                          {item.refreshRate}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Chuẩn bảo vệ:
                        </span>
                        <strong className="text-slate-800">
                          {item.ipRating}
                        </strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">
                          Kích thước Cabin:
                        </span>
                        <strong className="text-slate-800">
                          {item.cabinetSize}
                        </strong>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {item.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#e31b23] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">
                      Đơn giá tham khảo
                    </span>
                    <span className="text-sm font-black text-[#e31b23]">
                      {item.priceEstimate}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProductModal(item)}
                    className="bg-[#07172b] hover:bg-[#e31b23] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    Nhận Báo Giá
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE LED SCREEN DIMENSION & COST CALCULATOR */}
      <section
        id="du-toan-led"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#07172b] via-[#0c2340] to-[#0f172a] text-white"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Cols: Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#38bdf8]">
                  <Calculator className="w-4 h-4" />
                  CÔNG CỤ TÍNH TOÁN THÔNG SỐ KỸ THUẬT
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase mt-1">
                  DỰ TOÁN KÍCH THƯỚC & CHI PHÍ MÀN HÌNH LED
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Nhập kích thước chiều ngang, chiều cao và chọn dòng module LED
                  để xem độ phân giải điểm ảnh & dự toán kinh phí đầu tư.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                {/* Môi trường lắp đặt */}
                <div>
                  <label className="block text-xs font-bold uppercase text-sky-300 mb-2">
                    1. Môi trường lắp đặt
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcEnvironment("indoor")}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase border transition-all ${
                        calcEnvironment === "indoor"
                          ? "bg-[#e31b23] text-white border-[#e31b23]"
                          : "bg-white/5 text-slate-300 border-white/15"
                      }`}
                    >
                      Trong Nhà (Indoor)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcEnvironment("outdoor")}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase border transition-all ${
                        calcEnvironment === "outdoor"
                          ? "bg-[#e31b23] text-white border-[#e31b23]"
                          : "bg-white/5 text-slate-300 border-white/15"
                      }`}
                    >
                      Ngoài Trời (IP65)
                    </button>
                  </div>
                </div>

                {/* Chọn chủng loại Pixel Pitch */}
                <div>
                  <label className="block text-xs font-bold uppercase text-sky-300 mb-2">
                    2. Chủng loại Module (Pixel Pitch)
                  </label>
                  <select
                    value={calcPitch}
                    onChange={(e) => setCalcPitch(Number(e.target.value))}
                    className="w-full h-10 px-3 rounded-lg bg-[#07172b] border border-white/20 text-xs font-bold text-white focus:outline-none focus:border-[#38bdf8]"
                  >
                    <option value={1.53}>P1.53 Siêu Mịn 4K</option>
                    <option value={2.0}>P2.0 Hội Trường Chuẩn HD/4K</option>
                    <option value={2.5}>P2.5 Phòng Họp & Sân Khấu</option>
                    <option value={3.0}>P3.0 Độ Sáng Cao</option>
                    <option value={4.0}>P4.0 Quảng Cáo Lớn</option>
                  </select>
                </div>

                {/* Chiều ngang (m) */}
                <div>
                  <label className="block text-xs font-bold uppercase text-sky-300 mb-2">
                    3. Chiều ngang màn hình: {calcWidth} mét
                  </label>
                  <input
                    type="range"
                    min={2}
                    max={20}
                    step={0.5}
                    value={calcWidth}
                    onChange={(e) => setCalcWidth(Number(e.target.value))}
                    className="w-full accent-[#e31b23] cursor-pointer"
                  />
                </div>

                {/* Chiều cao (m) */}
                <div>
                  <label className="block text-xs font-bold uppercase text-sky-300 mb-2">
                    4. Chiều cao màn hình: {calcHeight} mét
                  </label>
                  <input
                    type="range"
                    min={1.5}
                    max={12}
                    step={0.5}
                    value={calcHeight}
                    onChange={(e) => setCalcHeight(Number(e.target.value))}
                    className="w-full accent-[#e31b23] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Real-time Result Box */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border-t-4 border-[#e31b23]">
              <h3 className="text-lg font-black uppercase text-slate-900 mb-4">
                Kết Quả Thông Số & Báo Giá Sơ Bộ
              </h3>

              <div className="space-y-3 text-xs border-b border-slate-200 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Tổng diện tích hiển thị:</span>
                  <strong className="text-base font-black text-[#07172b]">
                    {totalArea} m² ({calcWidth}m x {calcHeight}m)
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Độ phân giải điểm ảnh thực:
                  </span>
                  <strong className="font-bold text-slate-800">
                    {resolutionW} x {resolutionH} pixels
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Khoảng cách nhìn tối ưu:
                  </span>
                  <strong className="font-bold text-slate-800">
                    Từ {calcPitch}m đến {Math.round(calcPitch * 15)}m
                  </strong>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-slate-600 font-bold">
                    Dự toán trọn gói tham khảo:
                  </span>
                  <span className="text-xl font-black text-[#e31b23]">
                    ~ {estimatedBudget} ₫
                  </span>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!quotePhone.trim()) return;
                  setQuoteSubmitted(true);
                  setQuotePhone("");
                }}
                className="space-y-2.5"
              >
                <input
                  type="tel"
                  value={quotePhone}
                  onChange={(e) => setQuotePhone(e.target.value)}
                  placeholder="Nhập số điện thoại nhận bản vẽ CAD & báo giá..."
                  required
                  className="w-full h-10 px-3.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#e31b23]"
                />
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-[#e31b23] hover:bg-[#b91c1c] text-white font-black text-xs uppercase tracking-wider transition-colors"
                >
                  GỬI BẢNG DỰ TOÁN CHI TIẾT QUA ZALO
                </button>
              </form>
              {quoteSubmitted && (
                <p className="text-xs font-bold text-emerald-600 mt-2">
                  ✓ Kỹ sư trưởng VIETKING sẽ gửi bản vẽ & báo giá trong 5 phút!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CÔNG TRÌNH TIÊU BIỂU & QUY TRÌNH 4 BƯỚC */}
      <section id="cong-trinh-led" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#e31b23]">
              NĂNG LỰC THI CÔNG THỰC TẾ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mt-1">
              DỰ ÁN MÀN HÌNH LED ĐÃ TRIỂN KHAI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
            {data.completedProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#07172b]/90 text-[#38bdf8] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                    Quy mô: {proj.areaSize}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold text-[#e31b23] uppercase mb-1">
                    {proj.ledType} • {proj.location}
                  </p>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Chủ đầu tư: <strong>{proj.client}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4-Step Installation Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.installationSteps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative"
              >
                <span className="text-3xl font-black text-[#e31b23]/20 absolute top-4 right-5">
                  {st.step}
                </span>
                <h4 className="text-sm font-black uppercase text-slate-900 mb-2 pr-8">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VIETKING® FOOTER */}
      <footer
        id="lien-he-vietking"
        className="bg-[#050e1d] text-slate-300 pt-14 pb-8 border-t-4 border-[#e31b23]"
      >
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#e31b23] text-white flex items-center justify-center">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-black text-white">
                    VIETKING®
                  </span>
                  <span className="block text-[9px] uppercase tracking-widest text-[#38bdf8]">
                    led display screen
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {data.business.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
                Giải Pháp Hiển Thị LED
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Màn hình LED Trong nhà P1.25 / P1.53 / P2.0 / P2.5</li>
                <li>Màn hình LED Ngoài trời P3.0 / P4.0 / P5.0 / P10</li>
                <li>Màn hình LED 3D Mắt thường & LED Cong</li>
                <li>Màn hình LED Trong suốt & Standee LED</li>
                <li>Bộ xử lý hình ảnh Novastar & Nguồn Mean Well</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
                Trụ Sở & Showroom
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#e31b23] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e31b23] shrink-0" />
                  <span>Hotline Dự Án: {data.business.phone[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#e31b23] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4">
                Chứng Nhận Chất Lượng
              </h4>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <p className="text-[#38bdf8] font-bold">
                  ✓ Chuẩn Quản lý Chất lượng ISO 9001:2015
                </p>
                <p className="text-slate-300">
                  ✓ Đầy đủ CO, CQ nhập khẩu chính ngạch
                </p>
                <p className="text-slate-300">
                  ✓ Bảo hành tận nơi 24 - 36 tháng toàn quốc
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500">
            © Bản quyền thuộc về{" "}
            <span className="text-white font-bold">{data.business.name}</span>.
            Lựa chọn số 1 trong ngành công nghệ hiển thị.
          </div>
        </div>
      </footer>

      {/* PRODUCT QUOTE MODAL */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="p-5 bg-[#07172b] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#38bdf8]">
                  {activeProductModal.category}
                </span>
                <h3 className="text-base font-black">
                  {activeProductModal.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProductModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#e31b23]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl">
                <div>
                  <span className="text-slate-400 block">Pixel Pitch:</span>
                  <strong>{activeProductModal.pixelPitch}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Độ sáng:</span>
                  <strong>{activeProductModal.brightness}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Tần số quét:</span>
                  <strong>{activeProductModal.refreshRate}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Báo giá:</span>
                  <strong className="text-[#e31b23]">
                    {activeProductModal.priceEstimate}
                  </strong>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Liên hệ ngay Hotline{" "}
                <strong className="text-[#e31b23]">
                  {data.business.phone[0]}
                </strong>{" "}
                để nhận hồ sơ kỹ thuật, chứng chỉ CO/CQ và khảo sát lắp đặt miễn
                phí.
              </p>
              <div className="flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveProductModal(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg"
                >
                  Đóng
                </button>
                <a
                  href="#du-toan-led"
                  onClick={() => setActiveProductModal(null)}
                  className="px-5 py-2 text-xs font-bold bg-[#e31b23] text-white rounded-lg"
                >
                  Tính Chi Phí Thi Công
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
