"use client";

import React, { useState } from "react";
import {
  Monitor,
  Layers,
  Cpu,
  PenTool,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  X,
  Eye,
  GraduationCap,
  Sliders,
  Box,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung35Data,
  TuanKietArchCourse,
  TuanKietStudentWork,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung35Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive Dual-Monitor Workstation state inspired by XD035
  const [activeCompIdx, setActiveCompIdx] = useState(0);
  const [monitorMode, setMonitorMode] = useState<
    "DUAL_SPLIT" | "WIREFRAME_ONLY" | "RENDER_ONLY"
  >("DUAL_SPLIT");

  // Course & Gallery states
  const [activeTrack, setActiveTrack] = useState<string>("TẤT CẢ");
  const [selectedCourse, setSelectedCourse] =
    useState<TuanKietArchCourse | null>(null);
  const [selectedWork, setSelectedWork] =
    useState<TuanKietStudentWork | null>(null);
  const [showTrialModal, setShowTrialModal] = useState(false);

  // Trial registration form
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [chosenCourseTitle, setChosenCourseTitle] = useState(
    data.coursesSection.courses[0]?.title ||
      "Master 3ds Max & Corona Render Nội Thất Hạng Sang"
  );
  const [trialSubmitted, setTrialSubmitted] = useState(false);

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "0938 765 888");
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "tuyensinh@tuankietacademy.vn");

  const activeComparison =
    data.dualMonitorShowcase.comparisons[activeCompIdx] ||
    data.dualMonitorShowcase.comparisons[0];

  const filteredCourses =
    activeTrack === "TẤT CẢ"
      ? data.coursesSection.courses
      : data.coursesSection.courses.filter((c) => c.track === activeTrack);

  const handleOpenTrial = (courseName?: string) => {
    if (courseName) setChosenCourseTitle(courseName);
    setTrialSubmitted(false);
    setShowTrialModal(true);
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentPhone.trim()) return;
    setTrialSubmitted(true);
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-[#0c111d] text-slate-100 font-sans selection:bg-blue-600 selection:text-white"
    >
      {/* 1. STUDIO WORKSTATION TOPBAR WITH ELECTRIC BLUE LED ACCENT */}
      <div className="bg-[#070a12] text-slate-400 text-[11px] py-2 border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>
                Phòng Lab Dual-Monitor Workstation • GPU RTX 4090 • Bản vẽ & Mẫu
                Vật Liệu Thực Tế
              </span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{data.business.address}</span>
            </span>
          </div>
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-white font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Tư vấn lộ trình: {primaryPhone}</span>
          </a>
        </div>
      </div>

      {/* 2. STICKY STUDIO HEADER */}
      <header className="sticky top-0 z-40 bg-[#0c111d]/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <a href="#trang-chu" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-md bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-400/50 flex items-center justify-center text-white shadow-md shadow-blue-600/25">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black tracking-wider uppercase text-white group-hover:text-blue-400 transition-colors">
                {data.business.name}
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">
                {data.header.brandSub}
              </div>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-6">
            {data.header.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  idx === 0
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => handleOpenTrial()}
            className="px-4 sm:px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold uppercase tracking-wider rounded-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            {data.header.ctaLabel}
          </button>
        </div>
      </header>

      {/* 3. STUDIO HERO + DUAL-MONITOR PREVIEW */}
      <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0c111d] to-[#0c111d] border-b border-slate-800">
        {/* Ambient Studio Blue Neon Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 6 Cols: Headline, Software Pills & Metrics */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-300 text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{data.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.12] text-white">
              {data.hero.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {data.hero.subtitle}
            </p>

            {/* Software Ecosystem Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "3ds Max 2025",
                "Corona Renderer 11",
                "V-Ray 6 GPU",
                "Revit BIM",
                "AutoCAD",
                "SketchUp + Vantage",
              ].map((sw) => (
                <span
                  key={sw}
                  className="px-3 py-1 rounded bg-slate-800/90 border border-slate-700 text-xs font-semibold text-amber-300"
                >
                  {sw}
                </span>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#khoa-hoc"}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-sm shadow-lg shadow-blue-600/30 transition-all"
              >
                {data.hero.ctaText}
              </a>
              <a
                href="#dual-monitor"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all"
              >
                {data.hero.secondaryCtaText || "Xem Màn Hình Đôi 2D/3D"}
              </a>
            </div>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
              {(data.stats || []).map((st, idx) => (
                <div key={st.id || idx}>
                  <div className="text-xl sm:text-2xl font-black text-blue-400">
                    {st.value || st.number}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {st.label || st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Dual-Monitor Workstation Frame matching XD035 */}
          <div className="lg:col-span-6">
            <div className="bg-[#131b2e] border-2 border-blue-500/40 rounded-lg p-4 sm:p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span>DUAL-MONITOR STUDIO WORKSTATION (XD035)</span>
                </div>
                <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                  Wacom + Material Swatch Desk
                </span>
              </div>

              {/* Dual Screens Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Left Screen: 2D Wireframe / Blueprint */}
                <div className="bg-slate-950 rounded border-2 border-slate-700 overflow-hidden">
                  <div className="bg-slate-900 px-3 py-1.5 text-[10px] font-mono text-slate-300 flex items-center justify-between">
                    <span>MONITOR 1: 2D WIREFRAME / CAD</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={activeComparison.wireframeImage}
                      alt="2D Wireframe View"
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/75 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      Viewport: Wireframe + Floorplan
                    </div>
                  </div>
                </div>

                {/* Right Screen: Final Photorealistic 3D Render */}
                <div className="bg-slate-950 rounded border-2 border-blue-500/70 overflow-hidden">
                  <div className="bg-blue-950/80 px-3 py-1.5 text-[10px] font-mono text-blue-200 flex items-center justify-between">
                    <span>MONITOR 2: 3D CORONA / V-RAY RENDER</span>
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={activeComparison.finalRenderImage}
                      alt="3D Photorealistic Render"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-blue-600/90 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      Final Render: 4K Photorealistic
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor Stand & Material Swatch Bar */}
              <div className="mt-3 bg-[#1e1812] border border-amber-800/40 rounded p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-amber-200">
                  <PenTool className="w-4 h-4 text-amber-400" />
                  <span>
                    Bàn vẽ Wacom + Bản vẽ mặt bằng + Mẫu gỗ & đá thực tế
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveCompIdx(
                      (prev) =>
                        (prev + 1) % data.dualMonitorShowcase.comparisons.length
                    )
                  }
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded cursor-pointer"
                >
                  Đổi Project 3D ({activeCompIdx + 1}/
                  {data.dualMonitorShowcase.comparisons.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DUAL-MONITOR WORKSTATION DEEP-DIVE */}
      <section id="dual-monitor" className="py-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
              {data.dualMonitorShowcase.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              {data.dualMonitorShowcase.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {data.dualMonitorShowcase.subtitle}
            </p>
          </div>

          {/* Project & Viewport Mode Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-[#0c111d] p-4 rounded-md border border-slate-800">
            <div className="flex flex-wrap gap-2">
              {data.dualMonitorShowcase.comparisons.map((cmp, idx) => (
                <button
                  key={cmp.id}
                  type="button"
                  onClick={() => setActiveCompIdx(idx)}
                  className={`px-4 py-2 rounded text-xs font-bold transition-colors cursor-pointer ${
                    activeCompIdx === idx
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  Đồ án 0{idx + 1}: {cmp.projectTitle}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {[
                { id: "DUAL_SPLIT", label: "2 Màn Hình Song Song" },
                { id: "WIREFRAME_ONLY", label: "Chỉ Xem Bản Vẽ 2D" },
                { id: "RENDER_ONLY", label: "Chỉ Xem Render 3D" },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMonitorMode(m.id as any)}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold cursor-pointer ${
                    monitorMode === m.id
                      ? "bg-amber-500 text-slate-950"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Comparison Display */}
          {activeComparison && (
            <div className="bg-[#0c111d] border border-slate-800 rounded-md p-6 shadow-xl">
              <div
                className={`grid gap-6 ${
                  monitorMode === "DUAL_SPLIT"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {(monitorMode === "DUAL_SPLIT" ||
                  monitorMode === "WIREFRAME_ONLY") && (
                  <div className="space-y-3">
                    <div className="relative h-72 sm:h-80 rounded overflow-hidden border border-slate-700">
                      <img
                        src={activeComparison.wireframeImage}
                        alt={activeComparison.projectTitle}
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                      <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-mono font-bold px-3 py-1 rounded border border-slate-600">
                        MÀN HÌNH TRÁI: WIREFRAME & BẢN VẼ KỸ THUẬT
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeComparison.wireframeDesc}
                    </p>
                  </div>
                )}

                {(monitorMode === "DUAL_SPLIT" ||
                  monitorMode === "RENDER_ONLY") && (
                  <div className="space-y-3">
                    <div className="relative h-72 sm:h-80 rounded overflow-hidden border-2 border-blue-500/60">
                      <img
                        src={activeComparison.finalRenderImage}
                        alt={activeComparison.projectTitle}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-mono font-bold px-3 py-1 rounded shadow">
                        MÀN HÌNH PHẢI: KẾT XUẤT 3D PHOTOREALISTIC
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeComparison.finalRenderDesc}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-4 text-slate-400">
                  <span>
                    • Phần mềm:{" "}
                    <strong className="text-white">
                      {activeComparison.softwareStack}
                    </strong>
                  </span>
                  <span>
                    • Thời gian Render:{" "}
                    <strong className="text-amber-400">
                      {activeComparison.renderTime}
                    </strong>
                  </span>
                  <span>
                    • Quy mô lưới:{" "}
                    <strong className="text-blue-400">
                      {activeComparison.polyCount}
                    </strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenTrial(activeComparison.projectTitle)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase rounded cursor-pointer"
                >
                  Học Dựng & Render Đồ Án Này
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. 3 FLAGSHIP COURSES SECTION */}
      <section id="khoa-hoc" className="py-20 bg-[#0c111d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
                {data.coursesSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5">
                {data.coursesSection.heading}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "TẤT CẢ",
                "DIỄN HỌA NỘI THẤT",
                "KIẾN TRÚC NGOẠI THẤT",
                "BIM & BẢN VẼ KỸ THUẬT",
              ].map((tr) => (
                <button
                  key={tr}
                  type="button"
                  onClick={() => setActiveTrack(tr)}
                  className={`px-3.5 py-1.5 text-[11px] font-bold uppercase rounded transition-colors cursor-pointer ${
                    activeTrack === tr
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {tr}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {filteredCourses.map((crs) => (
              <div
                key={crs.id}
                className="group bg-[#131b2e] border border-slate-800 hover:border-blue-500 rounded-md overflow-hidden transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setSelectedCourse(crs)}
                    className="relative h-52 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={crs.image}
                      alt={crs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {crs.track}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-amber-400 mb-1">
                      Mã: {crs.code} • {crs.duration}
                    </div>
                    <h3
                      onClick={() => setSelectedCourse(crs)}
                      className="text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors cursor-pointer mb-2.5"
                    >
                      {crs.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {crs.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {crs.software.map((sw) => (
                        <span
                          key={sw}
                          className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-blue-300"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0f1626] border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block">
                      Học phí trọn khóa
                    </span>
                    <span className="text-base font-black text-amber-400">
                      {crs.tuition}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCourse(crs)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase rounded cursor-pointer"
                  >
                    Đề cương chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STUDENT GRADUATION WORKS */}
      <section id="do-an" className="py-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-400">
              {data.studentGallerySection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              {data.studentGallerySection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {data.studentGallerySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.studentGallerySection.works.map((wrk) => (
              <div
                key={wrk.id}
                onClick={() => setSelectedWork(wrk)}
                className="group bg-[#0c111d] border border-slate-800 hover:border-amber-400/60 rounded-md overflow-hidden cursor-pointer transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={wrk.image}
                    alt={wrk.projectType}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/80 text-amber-300 text-[10px] font-mono px-2.5 py-1 rounded">
                    {wrk.renderEngine}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold text-blue-400 mb-1">
                    {wrk.studentName}
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-1">
                    {wrk.projectType}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Ánh sáng: {wrk.lightingSetup}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MENTOR ARCHITECTS */}
      <section id="giang-vien" className="py-20 bg-[#0c111d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
              {data.mentorsSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              {data.mentorsSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {data.mentorsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.mentorsSection.mentors.map((mnt) => (
              <div
                key={mnt.id}
                className="bg-[#131b2e] border border-slate-800 rounded-md p-6 text-center hover:border-blue-500/50 transition-all"
              >
                <img
                  src={mnt.avatar}
                  alt={mnt.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-blue-500"
                />
                <h3 className="text-lg font-extrabold text-white">
                  {mnt.name}
                </h3>
                <div className="text-xs font-bold text-blue-400 mt-1">
                  {mnt.title}
                </div>
                <div className="text-xs text-amber-300 mt-2">
                  {mnt.experience}
                </div>
                <p className="text-xs text-slate-400 mt-2">{mnt.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer
        id="lien-he"
        className="bg-[#070a12] text-slate-400 pt-14 pb-8 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
            <div>
              <div className="text-lg font-black text-white uppercase mb-3">
                {data.business.name}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.footer.tagline}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-4">
                Địa Chỉ Phòng Lab & Studio
              </h3>
              <ul className="space-y-2 text-xs">
                <li>{data.business.address}</li>
                <li>Hotline: {primaryPhone}</li>
                <li>Email: {primaryEmail}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-4">
                Đăng Ký Học Thử & Nhận Thư Viện 3D
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Tặng ngay bộ thư viện vật liệu PBR 8K và buổi học thử thực hành
                trên máy trạm Dual-Monitor RTX 4090.
              </p>
              <button
                type="button"
                onClick={() => handleOpenTrial()}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold uppercase rounded cursor-pointer"
              >
                Đăng Ký Học Thử Ngay
              </button>
            </div>
          </div>
          <div className="pt-6 text-center text-xs text-slate-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: COURSE SYLLABUS MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#131b2e] text-white max-w-xl w-full rounded-md overflow-hidden border border-blue-500/40 shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-blue-400 font-bold">
                  {selectedCourse.code} • {selectedCourse.duration}
                </span>
                <span className="font-extrabold text-amber-400">
                  Học phí: {selectedCourse.tuition}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {selectedCourse.title}
              </h3>
              <ul className="space-y-1.5 pt-1">
                {selectedCourse.modules.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:bg-slate-800 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedCourse.title;
                    setSelectedCourse(null);
                    handleOpenTrial(title);
                  }}
                  className="px-5 py-2 bg-blue-600 text-white text-xs font-extrabold uppercase rounded cursor-pointer"
                >
                  Đăng Ký Khóa Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: STUDENT WORK MODAL */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#131b2e] text-white max-w-xl w-full rounded-md overflow-hidden border border-amber-400/40 shadow-2xl">
            <img
              src={selectedWork.image}
              alt={selectedWork.projectType}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-2">
              <div className="text-xs font-bold text-blue-400">
                {selectedWork.studentName} — {selectedWork.courseName}
              </div>
              <h3 className="text-xl font-extrabold text-white">
                {selectedWork.projectType}
              </h3>
              <p className="text-xs text-slate-300">
                Trình kết xuất: {selectedWork.renderEngine} • Thiết lập ánh
                sáng: {selectedWork.lightingSetup}
              </p>
              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedWork(null)}
                  className="px-5 py-2 bg-blue-600 text-white text-xs font-bold uppercase rounded cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: TRIAL CLASS REGISTRATION MODAL */}
      {showTrialModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#131b2e] text-white max-w-md w-full rounded-md overflow-hidden border border-blue-500/40 shadow-2xl">
            <div className="bg-[#0c111d] px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase text-blue-400">
                  {data.business.name}
                </span>
                <h3 className="text-base font-extrabold text-white">
                  Đăng Ký Học Thử & Nhận Thư Viện 3D
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowTrialModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {trialSubmitted ? (
                <div className="text-center py-5 space-y-3">
                  <CheckCircle2 className="w-11 h-11 text-blue-400 mx-auto" />
                  <h4 className="text-base font-extrabold text-white">
                    Đăng Ký Học Thử Thành Công!
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Cảm ơn <strong>{studentName}</strong>. Bộ phận Giáo vụ{" "}
                    <strong>{data.business.name}</strong> sẽ liên hệ qua số{" "}
                    <strong>{studentPhone}</strong> để xếp lịch máy trạm cho
                    khóa <strong>{chosenCourseTitle}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowTrialModal(false)}
                    className="px-6 py-2 bg-blue-600 text-white text-xs font-extrabold uppercase rounded cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTrialSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Họ và tên học viên *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Nhập họ và tên..."
                      className="w-full px-3.5 py-2 text-xs bg-[#0c111d] border border-slate-700 text-white rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-3.5 py-2 text-xs bg-[#0c111d] border border-slate-700 text-white rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Khóa học quan tâm
                    </label>
                    <input
                      type="text"
                      value={chosenCourseTitle}
                      onChange={(e) => setChosenCourseTitle(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#0c111d] border border-slate-700 text-white rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowTrialModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-400 hover:bg-slate-800 rounded cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold uppercase rounded cursor-pointer"
                    >
                      Xác Nhận Đăng Ký
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
