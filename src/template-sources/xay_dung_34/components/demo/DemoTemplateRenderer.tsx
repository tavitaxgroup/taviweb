"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Sun,
  Gauge,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Layers,
  ShieldCheck,
  X,
  FileCode2,
  Zap,
  Building2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung34Data,
  VcnLightingSolution,
  VcnLuminaireProduct,
  VcnProjectCase,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung34Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive states
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [dimmerPercent, setDimmerPercent] = useState(100);
  const [activeCategory, setActiveCategory] = useState<string>("TẤT CẢ");
  const [selectedSolution, setSelectedSolution] =
    useState<VcnLightingSolution | null>(null);
  const [selectedProduct, setSelectedProduct] =
    useState<VcnLuminaireProduct | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<VcnProjectCase | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  // Quote / IES request form state
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [projectType, setProjectType] = useState(
    "Khách sạn 5 Sao & Nhà hàng Fine Dining"
  );
  const [selectedItemLabel, setSelectedItemLabel] = useState(
    "Bộ File IES + Mô phỏng DIALux Evo miễn phí"
  );
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "0909 452 888");
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "projects@vcnlight.vn");

  const activeScene =
    data.luxSimulator.scenes[activeSceneIdx] || data.luxSimulator.scenes[0];

  const baseLuxNumber = parseInt(
    activeScene?.luxReading.replace(/\D+/g, "") || "452",
    10
  );
  const computedLux = Math.round((baseLuxNumber * dimmerPercent) / 100);

  const filteredProducts =
    activeCategory === "TẤT CẢ"
      ? data.luminairesSection.products
      : data.luminairesSection.products.filter(
          (p) => p.category === activeCategory
        );

  const handleOpenQuote = (itemTitle?: string) => {
    if (itemTitle) setSelectedItemLabel(itemTitle);
    setQuoteSubmitted(false);
    setShowQuoteModal(true);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;
    setQuoteSubmitted(true);
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-[#120e0a] text-stone-100 font-sans selection:bg-[#d49450] selection:text-slate-950"
    >
      {/* 1. ARCHITECTURAL STANDARDS TOPBAR */}
      <div className="bg-[#0b0806] text-stone-400 text-[11px] py-2 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-amber-200/90 font-semibold">
              <Gauge className="w-3.5 h-3.5 text-[#d49450]" />
              <span>Chuẩn Quang Học: CRI 97+ • UGR &lt; 12 • DALI-2 / KNX</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d49450]" />
              <span>{data.business.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-[#e0a96d] hover:text-white font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline Kỹ Thuật: {primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY DARK LUXURY HEADER WITH METALLIC VCN LIGHT LOGO */}
      <header className="sticky top-0 z-40 bg-[#120e0a]/95 backdrop-blur-md border-b border-[#d49450]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Metallic Bronze/Gold VCN LIGHT Logo matching XD034 */}
          <a href="#trang-chu" className="flex flex-col group">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-black tracking-wider bg-gradient-to-r from-stone-300 via-[#e0a96d] to-[#c88a4b] bg-clip-text text-transparent">
                {data.header.brandMain}
              </span>
              <span className="text-[11px] font-bold tracking-[0.35em] text-[#e0a96d] border-l border-[#d49450]/40 pl-2">
                {data.header.brandSub}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#e0a96d]" />
            </div>
            <span className="text-[8px] tracking-[0.28em] uppercase text-stone-400 mt-0.5">
              {data.header.slogan}
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {data.header.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  idx === 0
                    ? "text-[#e0a96d]"
                    : "text-stone-300 hover:text-[#e0a96d]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copper-Gold CTA Button */}
          <button
            type="button"
            onClick={() => handleOpenQuote()}
            className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-[#c88a4b] to-[#e0a96d] hover:brightness-110 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xs shadow-lg transition-all cursor-pointer"
          >
            {data.header.ctaLabel}
          </button>
        </div>
      </header>

      {/* 3. DRAMATIC DARK LUXURY HERO MATCHING XD034 COVER */}
      <section className="relative min-h-[540px] sm:min-h-[620px] w-full overflow-hidden bg-[#120e0a] flex items-center">
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-right opacity-75"
          />
          {/* Deep Espresso/Obsidian Left Gradient matching XD034 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120e0a] via-[#18120c]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 7 Cols: VCN Light Headline & Subtitle */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d49450]/15 border border-[#d49450]/40 text-[#e0a96d] text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{data.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight leading-[1.12] text-white">
              {data.hero.title}
            </h1>

            <p className="text-base sm:text-xl text-stone-300 font-normal leading-relaxed max-w-xl">
              {data.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#giai-phap"}
                className="px-7 py-3.5 bg-gradient-to-r from-[#c88a4b] to-[#e0a96d] hover:brightness-110 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xs shadow-lg transition-all"
              >
                {data.hero.ctaText}
              </a>
              <a
                href="#mo-phong-lux"
                className="px-6 py-3.5 bg-white/5 hover:bg-white/15 border border-[#d49450]/40 text-[#e0a96d] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-all"
              >
                {data.hero.secondaryCtaText || "Mô Phỏng Độ Rọi 452 LUX"}
              </a>
            </div>

            {/* 4 Optical Metrics */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
              {(data.stats || []).map((st, idx) => (
                <div key={st.id || idx}>
                  <div className="text-xl sm:text-2xl font-black text-[#e0a96d]">
                    {st.value || st.number}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    {st.label || st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Interactive Digital Lux Meter Widget (452 LUX) inspired by XD034 */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-[#1c150f]/95 backdrop-blur-md border border-[#d49450]/40 p-6 sm:p-7 rounded-sm shadow-2xl max-w-md w-full space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e0a96d]">
                    DIGITAL LUX METER • VCN LAB
                  </span>
                  <h3 className="text-base font-extrabold text-white mt-0.5">
                    Máy Đo Độ Rọi & Quang Thông Thực Tế
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded bg-sky-950/90 border border-sky-400/50 text-sky-300 font-mono text-lg font-black tracking-wider shadow-inner">
                  {computedLux} <span className="text-[10px]">LUX</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-300 font-semibold">
                    Điều chỉnh Dimmer DALI-2:
                  </span>
                  <span className="text-[#e0a96d] font-bold">
                    {dimmerPercent}% Công suất
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={120}
                  value={dimmerPercent}
                  onChange={(e) => setDimmerPercent(Number(e.target.value))}
                  className="w-full accent-[#d49450] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500">
                  <span>20% Night Lounge</span>
                  <span>100% Chuẩn Thiết Kế (452 LUX)</span>
                  <span>120% Boost</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs bg-black/40 p-3.5 rounded-xs border border-white/5">
                <div>
                  <span className="text-stone-500 block text-[10px]">
                    Nhiệt độ màu:
                  </span>
                  <strong className="text-amber-300">2700K – 3000K</strong>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">
                    Độ hoàn màu & Chống chói:
                  </span>
                  <strong className="text-emerald-400">
                    CRI 98 • UGR &lt; 10
                  </strong>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleOpenQuote(
                    `Yêu cầu tính toán DIALux chuẩn ${computedLux} LUX`
                  )
                }
                className="w-full py-3 bg-[#d49450] hover:bg-[#c0803c] text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
              >
                Đặt Lịch Đo Kiểm & Chạy DIALux Miễn Phí
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE LUX & KELVIN ARCHITECTURAL SCENE SIMULATOR */}
      <section id="mo-phong-lux" className="py-20 bg-[#17120d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e0a96d]">
              {data.luxSimulator.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              {data.luxSimulator.heading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {data.luxSimulator.subtitle}
            </p>
          </div>

          {/* Scene Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {data.luxSimulator.scenes.map((sc, idx) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setActiveSceneIdx(idx)}
                className={`px-5 py-2.5 rounded-xs text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSceneIdx === idx
                    ? "bg-[#d49450] text-slate-950 shadow-lg"
                    : "bg-[#221a13] text-stone-300 border border-stone-800 hover:border-[#d49450]"
                }`}
              >
                {sc.name} ({sc.luxReading})
              </button>
            ))}
          </div>

          {/* Active Scene Visual + Optical Telemetry */}
          {activeScene && (
            <div className="bg-[#120e0a] border border-[#d49450]/30 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
              <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={activeScene.image}
                  alt={activeScene.name}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    filter: `brightness(${0.65 + (dimmerPercent / 100) * 0.4})`,
                  }}
                />
                <div
                  className={`absolute inset-0 pointer-events-none ${activeScene.warmOverlayClass}`}
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs border border-[#d49450]/50 px-3.5 py-1.5 rounded-xs text-xs font-mono text-[#e0a96d]">
                  Độ rọi đo thực tế: <strong>{computedLux} LUX</strong> •{" "}
                  {activeScene.kelvin}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#e0a96d]">
                    KỊCH BẢN QUANG HỌC TIÊU CHUẨN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-3">
                    {activeScene.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5">
                    {activeScene.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-[#1c150f] p-4 rounded-xs border border-stone-800">
                    <div>
                      <span className="text-stone-500 block text-[10px]">
                        Chỉ số hoàn màu:
                      </span>
                      <strong className="text-white">
                        {activeScene.criIndex}
                      </strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">
                        Hệ số chống chói:
                      </span>
                      <strong className="text-white">
                        {activeScene.ugrRating}
                      </strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">
                        Giao thức điều khiển:
                      </span>
                      <strong className="text-[#e0a96d]">
                        {activeScene.controlProtocol}
                      </strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px]">
                        Khu vực áp dụng:
                      </span>
                      <strong className="text-stone-200">
                        {activeScene.applicationArea}
                      </strong>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleOpenQuote(`Kịch bản chiếu sáng: ${activeScene.name}`)
                  }
                  className="w-full py-3 bg-gradient-to-r from-[#c88a4b] to-[#e0a96d] text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xs cursor-pointer"
                >
                  Tải Bản Vẽ Bố Trí Đèn & File DIALux Kịch Bản Này
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. 3 CORE ARCHITECTURAL LIGHTING SOLUTIONS */}
      <section id="giai-phap" className="py-20 bg-[#120e0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e0a96d]">
              {data.solutionsSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              {data.solutionsSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              {data.solutionsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.solutionsSection.items.map((sol) => (
              <div
                key={sol.id}
                onClick={() => setSelectedSolution(sol)}
                className="group bg-[#1b140e] border border-stone-800 hover:border-[#d49450] rounded-sm overflow-hidden cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-[#120e0a]/90 border border-[#d49450]/50 text-[#e0a96d] text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs">
                      {sol.luxStandard}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-bold uppercase text-[#d49450] mb-1">
                      {sol.targetSector}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-[#e0a96d] transition-colors mb-2.5">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed mb-4">
                      {sol.summary}
                    </p>
                    <ul className="space-y-1.5">
                      {sol.technicalPoints.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-stone-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d49450] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-stone-800/80 flex items-center justify-between text-xs font-bold text-[#e0a96d]">
                  <span>Xem hồ sơ kỹ thuật</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL LUMINAIRE CATALOG (HỆ ĐÈN KIẾN TRÚC CHUYÊN DỤNG) */}
      <section id="he-den" className="py-20 bg-[#17120d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e0a96d]">
                {data.luminairesSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5">
                {data.luminairesSection.heading}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                "TẤT CẢ",
                "DOWNLIGHT CHỐNG CHÓI",
                "RAY NAM CHÂM 48V",
                "ĐÈN MẶT DỰNG IP67",
                "ĐÈN THẢ KIẾN TRÚC",
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-[10px] font-extrabold uppercase rounded-xs transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#d49450] text-slate-950"
                      : "bg-[#221a13] text-stone-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prd) => (
              <div
                key={prd.id}
                onClick={() => setSelectedProduct(prd)}
                className="group bg-[#120e0a] border border-stone-800 hover:border-[#d49450] rounded-sm overflow-hidden cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-900">
                    <img
                      src={prd.image}
                      alt={prd.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-black/80 text-[#e0a96d] text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs border border-[#d49450]/40">
                      {prd.modelCode}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold uppercase text-[#d49450] mb-1">
                      {prd.category}
                    </div>
                    <h3 className="text-sm font-extrabold text-white group-hover:text-[#e0a96d] transition-colors line-clamp-2 mb-3">
                      {prd.name}
                    </h3>
                    <div className="space-y-1 text-[11px] text-stone-400">
                      <div>
                        • Công suất:{" "}
                        <strong className="text-stone-200">{prd.power}</strong>
                      </div>
                      <div>
                        • Góc chiếu:{" "}
                        <strong className="text-stone-200">
                          {prd.beamAngles}
                        </strong>
                      </div>
                      <div>
                        • Quang học:{" "}
                        <strong className="text-emerald-400">
                          {prd.cri} | {prd.ugr}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3.5 bg-[#1b140e] border-t border-stone-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#e0a96d]">
                    {prd.priceEstimate}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase text-white underline">
                    Thông số & IES
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPLETED ICONIC LIGHTING PROJECTS */}
      <section id="cong-trinh" className="py-20 bg-[#120e0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e0a96d]">
              {data.projectsSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              {data.projectsSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              {data.projectsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.projectsSection.projects.map((prj) => (
              <div
                key={prj.id}
                onClick={() => setSelectedProject(prj)}
                className="group bg-[#1b140e] border border-stone-800 hover:border-[#d49450] rounded-sm overflow-hidden cursor-pointer transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/85 text-[#e0a96d] text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs">
                    {prj.category} • {prj.location}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-mono text-amber-300/90 mb-1.5">
                    {prj.fixtureCount}
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#e0a96d] transition-colors mb-2">
                    {prj.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {prj.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OBSIDIAN & COPPER FOOTER */}
      <footer
        id="lien-he"
        className="bg-[#0b0806] text-stone-400 pt-14 pb-8 border-t border-[#d49450]/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-black text-[#e0a96d]">
                  {data.header.brandMain}
                </span>
                <span className="text-xs font-bold tracking-[0.3em] text-white">
                  {data.header.brandSub}
                </span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {data.footer.tagline}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#e0a96d] mb-4">
                Phòng Lab Quang Học & Showroom
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d49450] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d49450] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d49450] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#e0a96d] mb-4">
                Hỗ Trợ Kiến Trúc Sư & Nhà Thầu MEP
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                Cung cấp miễn phí thư viện File IES chuẩn quốc tế, bản vẽ bố trí
                đèn AutoCAD và thuyết minh tính toán độ rọi DIALux Evo.
              </p>
              <button
                type="button"
                onClick={() => handleOpenQuote()}
                className="px-5 py-2.5 bg-[#d49450] hover:bg-[#c0803c] text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-xs cursor-pointer"
              >
                Tải Thư Viện IES & Nhận Báo Giá
              </button>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-stone-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: PRODUCT TECHNICAL SHEET MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1b140e] text-white max-w-xl w-full rounded-sm overflow-hidden border border-[#d49450]/50 shadow-2xl">
            <div className="relative h-52">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-[#e0a96d]">
                  Model: {selectedProduct.modelCode} • {selectedProduct.chipLed}
                </span>
                <span className="font-bold text-emerald-400">
                  {selectedProduct.cri} | {selectedProduct.ugr}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {selectedProduct.name}
              </h3>
              <ul className="space-y-1.5 pt-1">
                {selectedProduct.specs.map((sp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-stone-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d49450] shrink-0 mt-0.5" />
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-stone-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-stone-400 hover:bg-stone-800 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const name = `${selectedProduct.modelCode} - ${selectedProduct.name}`;
                    setSelectedProduct(null);
                    handleOpenQuote(name);
                  }}
                  className="px-5 py-2 bg-[#d49450] text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
                >
                  Tải File IES & Báo Giá Dự Án
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: SOLUTION MODAL */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1b140e] text-white max-w-lg w-full rounded-sm overflow-hidden border border-[#d49450]/50 shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedSolution.image}
                alt={selectedSolution.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-bold text-[#e0a96d]">
                Tiêu chuẩn độ rọi: {selectedSolution.luxStandard}
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {selectedSolution.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedSolution.summary}
              </p>
              <ul className="space-y-1.5">
                {selectedSolution.technicalPoints.map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-stone-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d49450] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSolution(null)}
                  className="px-4 py-2 text-xs font-bold text-stone-400 hover:bg-stone-800 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedSolution.title;
                    setSelectedSolution(null);
                    handleOpenQuote(title);
                  }}
                  className="px-5 py-2 bg-[#d49450] text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
                >
                  Nhận Tư Vấn Giải Pháp Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1b140e] text-white max-w-lg w-full rounded-sm overflow-hidden border border-[#d49450]/50 shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-mono text-[#e0a96d]">
                {selectedProject.fixtureCount} • {selectedProject.controlSystem}
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedProject.summary}
              </p>
              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 bg-[#d49450] text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: IES & DIALUX QUOTE REQUEST MODAL */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1b140e] text-white max-w-md w-full rounded-sm overflow-hidden border border-[#d49450]/50 shadow-2xl">
            <div className="bg-[#120e0a] px-6 py-4 flex items-center justify-between border-b border-stone-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e0a96d]">
                  {data.business.name} • LIGHTING DESIGN LAB
                </span>
                <h3 className="text-base font-extrabold text-white">
                  Nhận Hồ Sơ Kỹ Thuật IES & Báo Giá Dự Án
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowQuoteModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {quoteSubmitted ? (
                <div className="text-center py-5 space-y-3">
                  <CheckCircle2 className="w-11 h-11 text-[#e0a96d] mx-auto" />
                  <h4 className="text-base font-extrabold text-white">
                    Đã Gửi Yêu Cầu Kỹ Thuật Chiếu Sáng!
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Cảm ơn <strong>{clientName}</strong>. Kỹ sư Quang học của{" "}
                    <strong>{data.business.name}</strong> sẽ liên hệ qua số{" "}
                    <strong>{clientPhone}</strong> để gửi thư viện IES và báo
                    giá hạng mục <strong>{selectedItemLabel}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(false)}
                    className="px-6 py-2 bg-[#d49450] text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Họ và tên Kiến trúc sư / Chủ đầu tư *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Nhập họ tên..."
                      className="w-full px-3.5 py-2 text-xs bg-[#120e0a] border border-stone-700 text-white focus:outline-none focus:border-[#d49450]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Số điện thoại / Zalo nhận file *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-3.5 py-2 text-xs bg-[#120e0a] border border-stone-700 text-white focus:outline-none focus:border-[#d49450]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Loại hình công trình
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#120e0a] border border-stone-700 text-white focus:outline-none focus:border-[#d49450]"
                    >
                      <option>Khách sạn 5 Sao & Nhà hàng Fine Dining</option>
                      <option>Tòa nhà Văn phòng Hạng A / Trụ sở</option>
                      <option>Mặt dựng Cao ốc & Công trình Công cộng</option>
                      <option>Biệt thự Penthouse / Showroom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Hạng mục / Thiết bị yêu cầu
                    </label>
                    <input
                      type="text"
                      value={selectedItemLabel}
                      onChange={(e) => setSelectedItemLabel(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#120e0a] border border-stone-700 text-white focus:outline-none focus:border-[#d49450]"
                    />
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowQuoteModal(false)}
                      className="px-4 py-2 text-xs font-bold text-stone-400 hover:bg-stone-800 cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#d49450] hover:bg-[#c0803c] text-slate-950 text-xs font-extrabold uppercase cursor-pointer"
                    >
                      Gửi Yêu Cầu Ngay
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
