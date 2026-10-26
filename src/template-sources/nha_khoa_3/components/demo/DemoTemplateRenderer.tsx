"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Printer,
  Send,
  CheckSquare,
  Award,
  Trophy,
  Sparkles,
  Check
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa3DefaultData,
  type NhaKhoa3Data,
  type NhaKhoa3Partner
} from "@/template-sources/nha_khoa_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function LeftScrollRail({
  activeStep,
  darkTheme = false
}: {
  activeStep: 1 | 2 | 3;
  darkTheme?: boolean;
}) {
  const chevrons = [1, 2, 3, 4];
  return (
    <div className="hidden lg:flex flex-col items-center gap-3 select-none">
      <div className="flex flex-col items-center gap-2">
        {chevrons.map((idx) => {
          const isActive = idx === activeStep;
          if (darkTheme) {
            return (
              <ChevronDown
                key={idx}
                className={`w-7 h-7 -my-1.5 transition-all ${
                  isActive
                    ? "text-white stroke-[3.2]"
                    : "text-white/55 stroke-[1.5]"
                }`}
              />
            );
          }
          return (
            <ChevronDown
              key={idx}
              className={`w-7 h-7 -my-1.5 transition-all ${
                isActive
                  ? "text-[#005ba9] stroke-[3.2]"
                  : "text-[#005ba9]/55 stroke-[1.5]"
              }`}
            />
          );
        })}
      </div>

      <div
        className={`w-px h-14 my-1 ${
          darkTheme ? "bg-white/45" : "bg-neutral-400"
        }`}
      />

      <div
        className={`text-[11px] tracking-wider flex flex-col items-center gap-1 ${
          darkTheme ? "text-white/80" : "text-neutral-600"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        <span>Kéo xuống</span>
      </div>
      <ChevronDown
        className={`w-3.5 h-3.5 ${
          darkTheme ? "text-white/80" : "text-neutral-600"
        }`}
      />
    </div>
  );
}

function BrandHeaderBlock({
  brandName,
  slogan,
  darkTheme = false,
  onOpenMenu
}: {
  brandName: string;
  slogan: string;
  darkTheme?: boolean;
  onOpenMenu: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Mở menu"
        className={`w-10 h-10 flex items-center justify-center rounded-xs transition cursor-pointer ${
          darkTheme
            ? "bg-white text-[#005ba9] hover:bg-sky-50"
            : "bg-[#005ba9] text-white hover:bg-[#004887]"
        }`}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Emblem Icon + Brand Title */}
      <div className="flex items-center gap-2.5">
        <div
          className={`w-10 h-10 rounded-xs flex flex-col items-center justify-center border ${
            darkTheme
              ? "bg-white/10 border-white/40 text-white"
              : "bg-[#005ba9]/10 border-[#005ba9]/30 text-[#005ba9]"
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[7px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">
            DENTARIO
          </span>
        </div>
        <div>
          <p
            className={`text-xs sm:text-[13px] font-extrabold tracking-tight uppercase leading-tight ${
              darkTheme ? "text-white" : "text-[#005ba9]"
            }`}
          >
            {brandName}
          </p>
          <p
            className={`text-[10px] italic leading-tight ${
              darkTheme ? "text-sky-100" : "text-[#005ba9]/80"
            }`}
          >
            {slogan}
          </p>
        </div>
      </div>
    </div>
  );
}

function PartnerBadge({ partner }: { partner: NhaKhoa3Partner }) {
  switch (partner.style) {
    case "red-bold":
      return (
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-black tracking-wider text-[#d9232e] leading-none">
            {partner.name}
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-neutral-700 mt-1">
            {partner.tagline}
          </div>
        </div>
      );
    case "stripe-dark":
      return (
        <div className="text-center">
          <div className="text-4xl sm:text-5xl font-black italic tracking-tighter text-neutral-800 leading-none decoration-wavy">
            {partner.name}
          </div>
          <div className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1">
            {partner.tagline}
          </div>
        </div>
      );
    case "circle-red":
      return (
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl rotate-12 bg-[#e11d48] text-white flex items-center justify-center shadow-sm">
            <span className="-rotate-12 font-serif italic text-3xl font-bold">
              l
            </span>
          </div>
          <span className="text-[10px] font-semibold text-neutral-600 mt-1.5">
            {partner.name}
          </span>
        </div>
      );
    case "blue-gold":
      return (
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-extrabold italic text-[#0072bc]">
            Viettel
          </span>
          <span className="text-2xl sm:text-3xl font-black text-[#f59e0b]">
            CARE
          </span>
          <span className="text-[10px] text-neutral-500 font-semibold">.vn</span>
        </div>
      );
    case "orange-box":
      return (
        <div className="bg-[#f97316] text-white px-4 py-2 rounded-md shadow-xs text-center">
          <span className="block text-xs font-medium leading-none">just</span>
          <span className="block text-2xl font-black tracking-tight leading-none bg-white text-[#16a34a] px-2 py-0.5 rounded-xs mt-0.5">
            Kids
          </span>
        </div>
      );
    case "navy-wave":
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
            {partner.name}
          </span>
          <span className="w-8 h-8 rounded-full bg-[#0284c7] text-white font-serif italic font-black flex items-center justify-center text-lg">
            M
          </span>
        </div>
      );
    case "sky-clean":
      return (
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-light tracking-wider text-[#0284c7] leading-none border-b border-neutral-300 pb-1">
            {partner.name}
          </div>
          <div className="text-[11px] text-neutral-600 font-medium mt-1">
            {partner.tagline}
          </div>
        </div>
      );
    case "seal-red":
      return (
        <div className="w-16 h-16 rounded-full border-4 border-[#dc2626] bg-amber-50 flex flex-col items-center justify-center p-1 text-center shadow-xs">
          <Award className="w-6 h-6 text-[#dc2626]" />
          <span className="text-[7px] font-black text-[#dc2626] uppercase leading-tight">
            CHUẨN Y KHOA
          </span>
        </div>
      );
    case "serif-academic":
      return (
        <div className="text-center">
          <p className="font-serif text-xs sm:text-sm font-bold text-neutral-800">
            Academic <span className="text-[#0284c7]">Consulting</span> &amp; Dental
          </p>
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mt-0.5">
            {partner.tagline}
          </p>
        </div>
      );
    case "ribbon-blue":
      return (
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#004b8d] p-1 flex items-center justify-center shadow-sm">
            <div className="bg-[#dc2626] text-white px-2 py-1.5 text-center rounded-xs">
              <span className="block text-[8px] font-bold uppercase leading-tight">
                TỦ SÁCH
              </span>
              <span className="block text-[10px] font-black uppercase leading-tight">
                LAM SƠN
              </span>
            </div>
          </div>
        </div>
      );
    case "kr-tech":
      return (
        <div className="flex items-center gap-1.5">
          <span className="bg-amber-400/20 border border-amber-500 text-neutral-900 font-black text-lg px-1.5 py-0.5 rounded-xs">
            NR
          </span>
          <span className="text-sm sm:text-base font-bold text-neutral-800">
            (주)노리소프트
          </span>
        </div>
      );
    default:
      return (
        <div className="text-center">
          <span className="font-serif text-3xl sm:text-4xl font-black text-[#e11d48] tracking-wider">
            {partner.name}
          </span>
        </div>
      );
  }
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaKhoa3Data = adaptClonedTemplateData(
    nhaKhoa3DefaultData,
    incomingData
  );

  const milestones = data.milestones || nhaKhoa3DefaultData.milestones;
  const programs = data.programs || nhaKhoa3DefaultData.programs;
  const partners = data.partners || nhaKhoa3DefaultData.partners;
  const newsList = data.news || nhaKhoa3DefaultData.news || [];

  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(2); // Default "03." like screenshot
  const [activeProgramIdx, setActiveProgramIdx] = useState(2); // Default "03." like screenshot
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const currentMilestone = milestones[activeMilestoneIdx] || milestones[0];
  const currentProgram = programs[activeProgramIdx] || programs[0];
  const primaryPhone = data.business.phone?.[0] || "(024) 3519-0591";
  const primaryEmail = data.business.email?.[0] || "info@dentario.edu.vn";

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#005ba9] selection:text-white">
      {/* FULL-SCREEN NAVIGATION DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#004a8f]/95 backdrop-blur-md text-white flex flex-col justify-between p-6 sm:p-12">
          <div className="flex items-center justify-between">
            <BrandHeaderBlock
              brandName={data.business.name}
              slogan={data.slogan}
              darkTheme
              onOpenMenu={() => setDrawerOpen(false)}
            />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-8">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.25em] uppercase text-sky-300 font-semibold">
                DANH MỤC ĐIỀU HƯỚNG
              </p>
              <nav className="space-y-3 text-2xl sm:text-3xl font-extrabold">
                <a
                  href="#hanh-trinh"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-sky-300 transition"
                >
                  01. Hành Trình 12 Năm
                </a>
                <a
                  href="#chuong-trinh"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-sky-300 transition"
                >
                  02. Chương Trình Nha Khoa
                </a>
                <a
                  href="#doi-tac"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-sky-300 transition"
                >
                  03. Đối Tác Chiến Lược
                </a>
                <a
                  href="#lien-he"
                  onClick={() => setDrawerOpen(false)}
                  className="block hover:text-sky-300 transition"
                >
                  04. Liên Hệ &amp; Tin Tức
                </a>
              </nav>
            </div>

            <div className="bg-white/10 border border-white/20 p-6 rounded-sm space-y-3 text-sm">
              <h3 className="font-bold text-base uppercase tracking-wider text-sky-200">
                Thông tin liên hệ trực tiếp
              </h3>
              <p className="flex items-start gap-2.5 text-white/90">
                <MapPin className="w-4 h-4 shrink-0 mt-1 text-sky-300" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-white/90">
                <Phone className="w-4 h-4 shrink-0 text-sky-300" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2.5 text-white/90">
                <Mail className="w-4 h-4 shrink-0 text-sky-300" />
                <span>{primaryEmail}</span>
              </p>
            </div>
          </div>

          <div className="text-xs text-sky-200/70">
            © {data.business.name} — {data.slogan}
          </div>
        </div>
      )}

      {/* =====================================================================
          SECTION 1: HERO - HÀNH TRÌNH 12 NĂM & ACHIEVEMENTS (Matches Top Slide)
         ===================================================================== */}
      <section
        id="hanh-trinh"
        className="relative min-h-[680px] lg:min-h-[740px] w-full overflow-hidden flex flex-col justify-between border-b border-sky-100"
      >
        {/* Split Background: White Left (35%) + Sky Blue Right (65%) */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 pointer-events-none">
          <div className="lg:col-span-4 bg-white" />
          <div className="lg:col-span-8 bg-gradient-to-br from-[#e7f5fe] via-[#d7effe] to-[#eff8ff] relative overflow-hidden">
            {/* Decorative Confetti / Sparkle Circles */}
            <div className="absolute top-12 left-1/4 w-10 h-10 rounded-full bg-amber-300/70 blur-[1px]" />
            <div className="absolute top-24 right-16 w-8 h-8 rounded-full bg-rose-400/70" />
            <div className="absolute top-16 left-12 w-6 h-6 rounded-full bg-blue-500/60" />

            {/* Giant Cyan Watermark "ACHIEVEMENTS" */}
            <div className="absolute bottom-6 left-4 right-0 select-none pointer-events-none overflow-hidden">
              <span className="text-[64px] sm:text-[96px] xl:text-[122px] font-black tracking-wider uppercase text-[#4fc3f7]/45 leading-none block">
                {data.hero.eyebrow || "ACHIEVEMENTS"}
              </span>
            </div>
          </div>
        </div>

        {/* Top Bar with Menu & Brand Logo */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-6">
          <BrandHeaderBlock
            brandName={data.business.name}
            slogan={data.slogan}
            onOpenMenu={() => setDrawerOpen(true)}
          />
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-10 lg:py-14 flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Scroll Rail (1 col) */}
            <div className="lg:col-span-1 flex justify-center">
              <LeftScrollRail activeStep={1} />
            </div>

            {/* Vertical Numbers (01..05) + Notched Royal Blue Box (5 cols) */}
            <div className="lg:col-span-5 flex items-center gap-4 sm:gap-6">
              {/* Vertical Numbered Tabs 01. - 05. */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {milestones.map((ms, idx) => {
                  const active = idx === activeMilestoneIdx;
                  return (
                    <button
                      key={ms.id}
                      type="button"
                      onClick={() => setActiveMilestoneIdx(idx)}
                      className={`text-left font-bold transition-all cursor-pointer pb-1 border-b-2 ${
                        active
                          ? "text-xl sm:text-2xl text-[#005ba9] border-[#005ba9]"
                          : "text-sm sm:text-base text-neutral-600 border-neutral-300 hover:text-[#005ba9]"
                      }`}
                    >
                      {ms.number}
                    </button>
                  );
                })}
              </div>

              {/* Signature Royal Blue Box with Top-Center Cutout Notch */}
              <div className="relative flex-1 bg-[#005ba9] text-white p-6 sm:p-9 shadow-xl">
                {/* Top-Center White Cutout Notch (Matches NK006 Hero Box) */}
                <div className="hidden sm:block absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-7 bg-white" />

                <div className="pt-4 sm:pt-6 space-y-4">
                  <span className="inline-block text-[10px] tracking-[0.22em] uppercase text-sky-200 font-semibold">
                    {currentMilestone.subtitle}
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-[26px] font-extrabold uppercase tracking-wide leading-snug">
                    {currentMilestone.title}
                  </h1>

                  <div className="w-12 h-0.5 bg-white/80" />

                  <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                    {currentMilestone.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="#chuong-trinh"
                      className="inline-flex items-center gap-2.5 text-xs font-bold text-white hover:text-sky-200 transition"
                    >
                      <span>{data.hero.ctaText || "Tìm hiểu thêm"}</span>
                      <span className="w-6 h-6 rounded-full bg-white text-[#005ba9] flex items-center justify-center shadow-xs">
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    </a>

                    <div className="text-right">
                      <span className="block text-lg font-black text-amber-300 leading-none">
                        {currentMilestone.metricNumber}
                      </span>
                      <span className="block text-[10px] text-sky-100 mt-0.5">
                        {currentMilestone.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Celebration Trophy & Clinical Team Visual (6 cols) */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Floating Golden Trophy Badge (Matching screenshot trophy motif) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-b from-amber-300 to-amber-500 text-[#003d73] px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 border-2 border-white">
                  <Trophy className="w-7 h-7 text-[#003d73] shrink-0" />
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider leading-none">
                      TOP 10 NHA KHOA QUỐC TẾ
                    </p>
                    <p className="text-xs font-black mt-0.5">
                      {currentMilestone.metricNumber} — {currentMilestone.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Main Clinical Showcase Photo Frame */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white mt-6">
                  <img
                    src={currentMilestone.image}
                    alt={currentMilestone.title}
                    className="w-full h-[320px] sm:h-[360px] object-cover object-center transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: CHƯƠNG TRÌNH NHA KHOA (Royal Blue Left + Purple/Blue Wave Panel)
         ===================================================================== */}
      <section
        id="chuong-trinh"
        className="relative min-h-[680px] w-full overflow-hidden grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Left Royal Blue Column (4 cols) */}
        <div className="lg:col-span-4 bg-[#0062b1] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Figure Watermark */}
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full border-[28px] border-white/5 pointer-events-none" />
          <div className="absolute bottom-20 right-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

          <BrandHeaderBlock
            brandName={data.business.name}
            slogan={data.slogan}
            darkTheme
            onOpenMenu={() => setDrawerOpen(true)}
          />

          <div className="my-auto py-12 flex items-center gap-8">
            <LeftScrollRail activeStep={2} darkTheme />

            {/* Overlapping Dark Navy Index Block (01. | 02. | 03. | 04.) */}
            <div className="bg-[#004a8f] p-6 sm:p-8 shadow-xl border border-white/10 w-full">
              <p className="text-[10px] uppercase tracking-[0.2em] text-sky-200 mb-3">
                CHỌN CHƯƠNG TRÌNH ĐIỀU TRỊ
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {programs.map((prog, idx) => {
                  const isSelected = idx === activeProgramIdx;
                  return (
                    <button
                      key={prog.id}
                      type="button"
                      onClick={() => setActiveProgramIdx(idx)}
                      className={`text-lg sm:text-2xl font-bold pr-3 border-r border-white/25 last:border-none transition cursor-pointer ${
                        isSelected
                          ? "text-[#00e1ff] scale-105"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {prog.number}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-sky-100/80 mt-4 leading-relaxed">
                Nhấn vào từng số thứ tự (01 - 04) để xem chi tiết phác đồ cá nhân hóa
                tại {data.business.name}.
              </p>
            </div>
          </div>

          <div className="hidden lg:block text-[11px] text-sky-100/70">
            Hệ thống phác đồ nha khoa chuẩn quốc tế
          </div>
        </div>

        {/* Right Column: Section Heading + Blue-Indigo-Purple Wave Panel (8 cols) */}
        <div className="lg:col-span-8 bg-white flex flex-col justify-between">
          {/* Top White Header Bar with Cyan Square + Bold Heading */}
          <div className="px-6 sm:px-12 pt-10 pb-8 flex items-center justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3.5">
              <span className="w-6 h-6 bg-[#00b5cc] inline-block shrink-0" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-neutral-800 border-b-2 border-neutral-700 pb-1.5 tracking-wide">
                CHƯƠNG TRÌNH NHA KHOA
              </h2>
            </div>
          </div>

          {/* Main Gradient Wave Panel (Matches Speakup.vn Blue-Indigo-Magenta Panel) */}
          <div className="flex-1 bg-gradient-to-br from-[#2b72b5] via-[#2b3595] to-[#7b1fa2] text-white p-6 sm:p-10 md:p-12 relative overflow-hidden">
            {/* Decorative Wave Blobs */}
            <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#26c6da]/20 blur-xl pointer-events-none" />
            <div className="absolute top-8 right-10 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Top Right White Logo Pill ("Smile up") */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white">
                  {currentProgram.heading}
                </h3>

                <div className="bg-white text-neutral-900 px-5 py-2.5 shadow-md inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                  <span className="font-bold text-lg tracking-tight text-neutral-800">
                    {currentProgram.badgeText.split(" ")[0]}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#e5322d] text-white text-xs font-extrabold italic flex items-center justify-center">
                    {currentProgram.badgeText.split(" ")[1] || "up"}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed mb-6">
                {currentProgram.description}
              </p>

              <p className="text-xs sm:text-sm font-bold text-white mb-5">
                {currentProgram.subHeading}
              </p>

              {/* 3 Bordered Feature Cards (Center Card in Vibrant Red #e5322d) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {currentProgram.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`border-2 border-white p-6 flex flex-col justify-between min-h-[230px] text-center shadow-lg transition-transform hover:-translate-y-1 ${
                      card.highlight
                        ? "bg-[#e5322d] text-white"
                        : "bg-[#23408e]/85 backdrop-blur-xs text-white"
                    }`}
                  >
                    {/* Top Mini Logo inside Highlighted Red Card */}
                    {card.highlight ? (
                      <div className="flex items-center justify-center gap-1 pb-2 border-b border-white/40">
                        <span className="text-xs font-bold">Smile</span>
                        <span className="w-4 h-4 rounded-full bg-white text-[#e5322d] text-[9px] font-black flex items-center justify-center">
                          up
                        </span>
                      </div>
                    ) : (
                      <div className="h-4" />
                    )}

                    <div className="my-auto py-3 space-y-3">
                      <h4 className="text-xs sm:text-sm font-extrabold uppercase leading-snug tracking-wide">
                        {card.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Mini Logo inside Standard Blue Cards */}
                    {!card.highlight ? (
                      <div className="pt-2 border-t border-white/30 flex items-center justify-center gap-1">
                        <span className="text-xs font-bold">Smile</span>
                        <span className="w-4 h-4 rounded-full bg-white text-[#23408e] text-[9px] font-black flex items-center justify-center">
                          up
                        </span>
                      </div>
                    ) : (
                      <div className="h-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: ĐỐI TÁC / PARTNERS (12 Partner Grid with Horizontal Dividers)
         ===================================================================== */}
      <section
        id="doi-tac"
        className="relative py-16 lg:py-24 px-4 sm:px-8 bg-white overflow-hidden"
      >
        {/* Giant Faint "PARTNERS" Watermark */}
        <div className="absolute top-6 right-0 left-1/3 select-none pointer-events-none overflow-hidden text-right">
          <span className="text-[70px] sm:text-[110px] lg:text-[140px] font-black uppercase text-neutral-100 leading-none tracking-wider">
            PARTNERS
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Brand Bar + Centered "ĐỐI TÁC" Heading */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
            <BrandHeaderBlock
              brandName={data.business.name}
              slogan={data.slogan}
              onOpenMenu={() => setDrawerOpen(true)}
            />

            <div className="md:mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-neutral-800 border-b-2 border-neutral-800 pb-1.5 inline-block tracking-wide">
                ĐỐI TÁC
              </h2>
            </div>

            <div className="hidden md:block w-48" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Scroll Rail (1 col) */}
            <div className="lg:col-span-1 flex justify-center">
              <LeftScrollRail activeStep={3} />
            </div>

            {/* 3x4 Partners Grid with Row Divider Lines (11 cols) */}
            <div className="lg:col-span-11">
              {/* Row 1 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 items-center justify-items-center border-b border-neutral-300">
                {partners.slice(0, 4).map((partner) => (
                  <div
                    key={partner.id}
                    className="px-4 py-2 hover:scale-105 transition-transform"
                  >
                    <PartnerBadge partner={partner} />
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 items-center justify-items-center border-b border-neutral-300">
                {partners.slice(4, 8).map((partner) => (
                  <div
                    key={partner.id}
                    className="px-4 py-2 hover:scale-105 transition-transform"
                  >
                    <PartnerBadge partner={partner} />
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 items-center justify-items-center">
                {partners.slice(8, 12).map((partner) => (
                  <div
                    key={partner.id}
                    className="px-4 py-2 hover:scale-105 transition-transform"
                  >
                    <PartnerBadge partner={partner} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: ROYAL BLUE 3-COLUMN FOOTER (#005ba9)
         ===================================================================== */}
      <footer
        id="lien-he"
        className="bg-[#005ba9] text-white py-14 px-4 sm:px-8 relative overflow-hidden"
      >
        {/* Subtle Diagonal Geometric Overlay */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-white/[0.03] -skew-x-12 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Brand Info & Address (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/25">
              <div className="w-10 h-10 bg-white text-[#005ba9] rounded-xs flex flex-col items-center justify-center font-black">
                <Sparkles className="w-5 h-5" />
                <span className="text-[6px] tracking-tighter">DENTARIO</span>
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-tight">
                  {data.business.name}
                </h3>
                <p className="text-[10px] text-sky-200 italic">{data.slogan}</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-white/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-sky-200" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-sky-200" />
                <a
                  href={`tel:${primaryPhone.replace(/[^\d+]/g, "")}`}
                  className="hover:underline"
                >
                  {primaryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-sky-200" />
                <a href={`mailto:${primaryEmail}`} className="hover:underline">
                  {primaryEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 shrink-0 text-sky-200" />
                <span>{data.fax || "+84 (24) 3519-0587"}</span>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs font-bold mb-2">Kết nối với chúng tôi</p>
              <div className="flex items-center gap-3">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-xs bg-white/15 hover:bg-white hover:text-[#005ba9] flex items-center justify-center text-xs font-bold transition"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-xs bg-white/15 hover:bg-white hover:text-[#005ba9] flex items-center justify-center text-xs font-bold transition"
                >
                  ig
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-xs bg-white/15 hover:bg-white hover:text-[#005ba9] flex items-center justify-center text-xs font-bold transition"
                >
                  yt
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Underline Contact Form "☑ LIÊN HỆ" (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 mb-4">
              <CheckSquare className="w-4 h-4 text-sky-200" />
              <span>LIÊN HỆ</span>
            </h3>

            {contactSubmitted ? (
              <div className="bg-white/10 border border-white/25 p-5 rounded-xs space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-300 font-bold">
                  <Check className="w-4 h-4" />
                  <span>Đã gửi thông tin thành công!</span>
                </div>
                <p className="text-white/85 leading-relaxed">
                  Bộ phận Chăm sóc Khách hàng của {data.business.name} sẽ liên hệ tư
                  vấn phác đồ trong ít phút.
                </p>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="mt-2 bg-white text-[#005ba9] font-bold px-4 py-1.5 text-[11px] uppercase"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ Tên"
                  className="w-full bg-transparent border-b border-white/45 py-2 text-white placeholder:text-white/65 focus:outline-none focus:border-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                  className="w-full bg-transparent border-b border-white/45 py-2 text-white placeholder:text-white/65 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/45 py-2 text-white placeholder:text-white/65 focus:outline-none focus:border-white"
                />
                <textarea
                  rows={2}
                  placeholder="Nội dung yêu cầu"
                  className="w-full bg-transparent border-b border-white/45 py-2 text-white placeholder:text-white/65 focus:outline-none focus:border-white resize-none"
                />
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-white text-[#005ba9] hover:bg-sky-50 font-extrabold text-xs uppercase px-8 py-2.5 inline-flex items-center gap-2 shadow-sm transition cursor-pointer"
                  >
                    <span>GỬI</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Column 3: TIN TỨC (3 Thumbnail News Items) (4 cols) */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider mb-4">
              TIN TỨC
            </h3>
            <div className="space-y-4">
              {newsList.slice(0, 3).map((item) => (
                <article
                  key={item.id}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-14 object-cover rounded-xs shrink-0 border border-white/25 group-hover:opacity-90 transition"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-snug line-clamp-2 group-hover:text-sky-200 transition">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-white/75 line-clamp-2 mt-1 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
