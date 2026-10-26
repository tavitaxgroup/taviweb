"use client";

import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Sun,
  Star,
  ThumbsUp,
  Heart,
  ChevronRight,
  Play,
  Plus,
  Minus,
  Users,
  Lightbulb,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh6DefaultData,
  TrungTamTiengAnh6Data,
  LifeSkillsCampProgram,
} from "@/template-sources/trung_tam_tieng_anh_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function LifeSkillsLogo({
  brandName,
  light = false,
}: {
  brandName: string;
  light?: boolean;
}) {
  return (
    <a href="#" className="inline-flex items-center gap-2.5 select-none group">
      <div className="w-10 h-10 rounded-full bg-[#e6194b] flex items-center justify-center text-white shadow-sm relative overflow-hidden shrink-0">
        <BookOpen className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span
          className={`text-lg font-extrabold tracking-tight leading-none ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {brandName}
        </span>
        <span
          className={`text-[9px] font-medium tracking-wider uppercase mt-0.5 ${
            light ? "text-teal-100" : "text-slate-400"
          }`}
        >
          TRẠI HÈ ANH NGỮ &amp; KỸ NĂNG
        </span>
      </div>
    </a>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh6Data = adaptClonedTemplateData(
    trungTamTiengAnh6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqSection.items[0]?.id || "faq-1"
  );
  const [selectedProgram, setSelectedProgram] =
    useState<LifeSkillsCampProgram | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(
    null
  );
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [registerSubmitted, setRegisterSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const filteredPrograms = data.campProgramsSection.programs.filter((prog) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      prog.title.toLowerCase().includes(q) ||
      prog.description.toLowerCase().includes(q) ||
      prog.category.toLowerCase().includes(q)
    );
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#ef476f] selection:text-white overflow-x-hidden">
      {/* 1. HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <LifeSkillsLogo brandName={data.business.name} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a
              href="#"
              className="text-[#ef476f] hover:text-[#d9365e] transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#ef476f] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#chuong-trinh"
              className="hover:text-[#ef476f] transition-colors"
            >
              Chương trình trại hè
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#ef476f] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#ef476f] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Tìm kiếm"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#ef476f] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setRegisterSubmitted(false);
                setRegisterModalOpen(true);
              }}
              className="hidden sm:inline-flex items-center justify-center bg-[#38b2ac] hover:bg-[#2c9a94] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm transition-all cursor-pointer"
            >
              {data.hero.ctaText || "Đăng ký ngay"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Drawer */}
        {searchOpen && (
          <div className="bg-slate-50 border-t border-slate-100 py-3 px-4">
            <div className="max-w-xl mx-auto flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm chương trình trại hè (Mỹ thuật, Âm nhạc, Công nghệ, Phân tích)..."
                className="w-full text-sm focus:outline-none text-slate-700"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-[#ef476f]"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700"
            >
              Giới thiệu
            </a>
            <a
              href="#chuong-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700"
            >
              Chương trình trại hè
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700"
            >
              Liên hệ
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setRegisterSubmitted(false);
                setRegisterModalOpen(true);
              }}
              className="w-full bg-[#38b2ac] text-white text-sm font-bold py-2.5 rounded-full"
            >
              {data.hero.ctaText || "Đăng ký ngay"}
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (Playful 3D Typography + Circular Collage + Hand-drawn Doodles) */}
      <section className="relative bg-[#fffdf8] pt-8 pb-16 lg:py-16 overflow-hidden border-b border-amber-100/60">
        {/* Decorative Doodles */}
        <svg
          className="hidden lg:block absolute top-6 left-[23%] w-16 h-16 text-teal-300/70 -rotate-12 pointer-events-none"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 16C18 12 28 16 32 22C36 16 46 12 56 16V48C46 44 36 48 32 54C28 48 18 44 8 48V16Z" />
          <path d="M32 22V54" />
        </svg>
        <svg
          className="hidden lg:block absolute top-8 right-[24%] w-14 h-14 text-amber-300/80 rotate-6 pointer-events-none"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="14" y="18" width="36" height="36" rx="10" />
          <path d="M24 18V12C24 9 27 7 32 7C37 7 40 9 40 12V18" />
          <rect x="20" y="30" width="24" height="14" rx="4" />
        </svg>
        <svg
          className="hidden lg:block absolute bottom-6 left-[21%] w-14 h-14 text-rose-300/70 pointer-events-none"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="32" cy="28" r="16" />
          <path d="M18 44C26 52 38 52 46 44" />
          <path d="M32 48V58M22 58H42" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
            {/* Left Circular Image with Teal Ring & Yellow Book Badge */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2.5 bg-[#38b2ac] shadow-xl">
                {/* Yellow Star on Top-Left */}
                <div className="absolute -top-2 left-2 w-12 h-12 text-[#ffd166] drop-shadow">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <img
                  src={
                    data.hero.backgroundImage ||
                    data.heroCollageImages.leftMain
                  }
                  alt={data.hero.title}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
                {/* Floating Yellow Book Badge */}
                <div className="absolute bottom-2 left-0 w-20 h-20 rounded-full bg-[#ffd166] border-4 border-white shadow-lg flex items-center justify-center text-slate-900">
                  <BookOpen className="w-9 h-9 stroke-[2.2]" />
                </div>
              </div>
            </div>

            {/* Center 3D Headline & 4 Feature Dots */}
            <div className="lg:col-span-4 text-center flex flex-col items-center">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#38b2ac] bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full mb-3">
                {data.hero.eyebrow}
              </span>
              <h1
                className="text-5xl sm:text-6xl xl:text-[64px] font-black uppercase leading-[1.08] tracking-tight text-[#ff2a55] select-none"
                style={{
                  textShadow:
                    "0 4px 0 #ffd166, 0 8px 0 #f4b942, 0 12px 20px rgba(239,71,111,0.22)",
                }}
              >
                {data.hero.title.includes("KỸ NĂNG") ? (
                  <>
                    <span className="block">TRẠI HÈ</span>
                    <span className="block mt-1">KỸ NĂNG</span>
                  </>
                ) : (
                  data.hero.title
                )}
              </h1>

              <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
                {data.hero.subtitle}
              </p>

              {/* 2x2 Bullet Grid */}
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-left">
                {data.heroPills.map((pill) => (
                  <div key={pill.id} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: pill.dotColor }}
                    />
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#0f8a9d]">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dual Overlapping Circular Photos */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Large Yellow Circle */}
                <div className="w-56 h-56 sm:w-72 sm:h-72 ml-auto rounded-full p-2.5 bg-[#ffd166] shadow-xl">
                  <img
                    src={data.heroCollageImages.rightMain}
                    alt="Hoạt động trại hè ngoài trời"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
                {/* Overlapping Smaller Cyan Circle */}
                <div className="absolute -bottom-3 left-0 w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-[#38b2ac] shadow-lg">
                  <img
                    src={data.heroCollageImages.rightSub}
                    alt="Kết nối bạn bè quốc tế"
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS: NHỮNG ĐIỀU CHỈ CÓ TẠI KỸ NĂNG TRẠI HÈ */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md shadow-xs">
              {data.corePillarsSection.badge}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              {data.corePillarsSection.title}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.corePillarsSection.subtitle}
            </p>
          </div>

          {/* 4 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.corePillarsSection.pillars.map((pillar) => {
              const colorMap = {
                pink: {
                  iconBg: "bg-[#fff0f3] text-[#ef476f]",
                  dotBg: "bg-[#ef476f] text-white",
                  borderHover: "hover:border-[#ef476f]/40",
                },
                teal: {
                  iconBg: "bg-[#e6fffa] text-[#2bb0a6]",
                  dotBg: "bg-[#2bb0a6] text-white",
                  borderHover: "hover:border-[#2bb0a6]/40",
                },
                yellow: {
                  iconBg: "bg-[#fef3c7] text-[#f59e0b]",
                  dotBg: "bg-[#f59e0b] text-white",
                  borderHover: "hover:border-[#f59e0b]/40",
                },
                blue: {
                  iconBg: "bg-[#eff6ff] text-[#3b82f6]",
                  dotBg: "bg-[#3b82f6] text-white",
                  borderHover: "hover:border-[#3b82f6]/40",
                },
              }[pillar.accentColor];

              const IconComponent =
                pillar.iconName === "sun"
                  ? Sun
                  : pillar.iconName === "star"
                  ? Star
                  : pillar.iconName === "thumbsUp"
                  ? ThumbsUp
                  : Heart;

              return (
                <div
                  key={pillar.id}
                  className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center ${colorMap.borderHover}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${colorMap.iconBg}`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 flex-1">
                    {pillar.description}
                  </p>
                  <a
                    href="#chuong-trinh"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#ef476f] transition-colors"
                  >
                    <span>Khám phá</span>
                    <span
                      className={`w-4 h-4 rounded-full inline-flex items-center justify-center ${colorMap.dotBg}`}
                    >
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* 4. SPLIT STORY SECTION: TRAU DỒI KỸ NĂNG, KHƠI MỞ THẾ MẠNH BẢN THÂN */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            {/* Left Copy */}
            <div className="lg:col-span-6 relative">
              {/* Decorative Sun Doodle */}
              <div className="text-amber-300 mb-2">
                <Sun className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase leading-snug">
                {data.aboutStorySection.title}
              </h2>
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.aboutStorySection.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setRegisterSubmitted(false);
                    setRegisterModalOpen(true);
                  }}
                  className="bg-[#ef476f] hover:bg-[#d9365e] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-md transition-all cursor-pointer"
                >
                  {data.aboutStorySection.ctaText}
                </button>
              </div>
              {/* Decorative Yellow Chevrons */}
              <div className="mt-8 flex items-center gap-1 text-[#ffd166] font-black text-2xl tracking-tighter select-none">
                <span>&gt;&gt;&gt;&gt;</span>
              </div>
            </div>

            {/* Right Rounded Workshop Photo with Play Button */}
            <div className="lg:col-span-6 relative">
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-rose-100/70 -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] group">
                <img
                  src={data.aboutStorySection.image}
                  alt={data.aboutStorySection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/15 group-hover:bg-slate-900/25 transition-colors flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    aria-label="Xem video giới thiệu"
                    className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-[#ef476f] flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHƯƠNG TRÌNH TRẠI HÈ (Mint Pastel Section with 3x2 Grid) */}
      <section
        id="chuong-trinh"
        className="py-16 lg:py-24 bg-[#e8f6f5] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#ef476f] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md shadow-xs">
              {data.campProgramsSection.badge}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
              {data.campProgramsSection.title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.campProgramsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className="group cursor-pointer text-center"
              >
                <div className="rounded-3xl overflow-hidden shadow-md bg-white aspect-[4/3] mb-4 relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                      Xem chi tiết lộ trình
                    </span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#ef476f] transition-colors">
                  {prog.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-[#ef476f]">
                  • {prog.ageRange}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS BAR + CÁC CÂU HỎI THƯỜNG GẶP (FAQ) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 Colorful Stats Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-14 border-b border-slate-100">
            {(data.stats || []).map((stat, idx) => {
              const badgeStyles = [
                { bg: "bg-[#ef476f]", Icon: Users },
                { bg: "bg-[#38b2ac]", Icon: Lightbulb },
                { bg: "bg-[#fbbf24]", Icon: Award },
                { bg: "bg-[#7dd3fc]", Icon: Sparkles },
              ][idx % 4];
              const StatIcon = badgeStyles.Icon;

              return (
                <div
                  key={stat.id}
                  className="flex items-center justify-center sm:justify-start gap-3.5"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${badgeStyles.bg} text-white flex items-center justify-center shadow-sm shrink-0`}
                  >
                    <StatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {stat.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ 2-Column Split */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            {/* Left Piano / Music Class Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/4]">
                <img
                  src={data.faqSection.sideImage}
                  alt={data.faqSection.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7">
              <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md">
                {data.faqSection.badge}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
                {data.faqSection.title}
              </h2>

              <div className="mt-6 space-y-3.5">
                {data.faqSection.items.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-slate-200/80 bg-white shadow-xs overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaqId(isOpen ? "" : item.id)
                        }
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-800">
                          {item.question}
                        </span>
                        <span className="w-6 h-6 rounded-md bg-[#38b2ac] text-white flex items-center justify-center shrink-0">
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CƠ SỞ VẬT CHẤT (Soft Pastel Pink Background) */}
      <section className="py-16 lg:py-20 bg-[#fdf0f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md">
              {data.facilitiesSection.badge}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
              {data.facilitiesSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.facilitiesSection.items.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setActiveGalleryImage(fac.image)}
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-white aspect-[4/3] cursor-pointer"
              >
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                  <h3 className="text-sm font-bold text-white">{fac.title}</h3>
                  <p className="text-xs text-slate-200 mt-0.5">
                    {fac.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GIẢNG VIÊN CHUYÊN NGHIỆP */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md">
              {data.teachersSection.badge}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
              {data.teachersSection.title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.teachersSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.teachersSection.teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-slate-900"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-base font-extrabold text-white">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#38b2ac] mt-0.5">
                    {teacher.role}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    {teacher.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FULL-WIDTH SUPERVISION QUOTE BANNER */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <img
          src={data.supervisionBanner.backgroundImage}
          alt="Giám sát an toàn lớp học"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md">
            {data.supervisionBanner.badge}
          </span>
          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed">
            {data.supervisionBanner.quote}
          </p>
        </div>
      </section>

      {/* 10. THƯ VIỆN HÌNH ẢNH (3x3 Grid) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md">
              {data.gallerySection.badge}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
              {data.gallerySection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.gallerySection.images.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveGalleryImage(item.image)}
                className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-slate-100 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FULL-WIDTH VIDEO PLAY BANNER */}
      <section className="relative h-72 sm:h-96 lg:h-[420px] overflow-hidden">
        <img
          src={data.videoBanner.backgroundImage}
          alt={data.videoBanner.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 flex flex-col items-center justify-center p-4 text-center">
          <button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            aria-label="Phát video"
            className="w-20 h-20 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-xs border-2 border-white text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </button>
        </div>
      </section>

      {/* 12. TIN TỨC MỚI NHẤT */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-[#38b2ac] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md">
              KHÁM PHÁ TUYỆT VỜI
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
              TIN TỨC MỚI NHẤT
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Trong một thế giới không ngừng thay đổi, việc trang bị cho bản thân
              những kỹ năng mới không chỉ là một lựa chọn, mà là một nhu cầu
              thiết yếu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-5 flex flex-col"
              >
                <div className="text-[11px] text-slate-400 font-semibold mb-1.5">
                  {post.date}
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 line-clamp-1 mb-4 hover:text-[#ef476f] transition-colors">
                  {post.title}
                </h3>
                <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-auto pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      setRegisterSubmitted(false);
                      setRegisterModalOpen(true);
                    }}
                    className="text-xs font-bold text-slate-800 hover:text-[#ef476f] transition-colors cursor-pointer"
                  >
                    Xem thêm
                  </button>
                  <span className="w-5 h-5 rounded-full bg-[#ef476f] text-white flex items-center justify-center">
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => {
                setRegisterSubmitted(false);
                setRegisterModalOpen(true);
              }}
              className="bg-[#ef476f] hover:bg-[#d9365e] text-white text-xs sm:text-sm font-bold px-8 py-2.5 rounded-full shadow-sm transition-all cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>
        </div>
      </section>

      {/* 13. ĐĂNG KÝ BẢN TIN (Soft Blush Section with Floating Left/Right Photos) */}
      <section className="py-16 lg:py-20 bg-[#fdf2f6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left Tilted Classroom Photo */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <div className="w-48 h-36 rounded-2xl overflow-hidden shadow-md -rotate-6 border-4 border-white">
                <img
                  src={data.newsletterSection.leftImage}
                  alt="Không gian lớp học"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Form */}
            <div className="lg:col-span-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.newsletterSection.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                {data.newsletterSection.subtitle}
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={data.newsletterSection.placeholder}
                  className="w-full flex-1 bg-white border border-slate-200 rounded-full px-5 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#ef476f] shadow-xs"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#ef476f] hover:bg-[#d9365e] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  {data.newsletterSection.buttonText}
                </button>
              </form>
              {newsletterSaved && (
                <p className="mt-3 text-xs font-semibold text-teal-700">
                  Cảm ơn bạn đã đăng ký nhận bản tin từ {data.business.name}!
                </p>
              )}
            </div>

            {/* Right Circular Student Photo */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={data.newsletterSection.rightImage}
                  alt="Học viên đọc sách"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. CURVED TEAL FOOTER */}
      <footer id="lien-he" className="relative bg-[#389e98] text-white pt-16 pb-10">
        {/* Top Curved Wave SVG */}
        <div className="absolute -top-8 left-0 right-0 h-8 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z"
              fill="#389e98"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-teal-400/30">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <LifeSkillsLogo brandName={data.business.name} light />
              <p className="text-xs text-teal-50/90 leading-relaxed max-w-xs">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                {["f", "ig", "yt", "tw"].map((soc) => (
                  <a
                    key={soc}
                    href="#lien-he"
                    className="w-8 h-8 rounded-full border border-teal-200/50 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-[#389e98] transition-colors uppercase"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Danh mục */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-teal-50/90">
                <li>
                  <a href="#gioi-thieu" className="hover:underline">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#chuong-trinh" className="hover:underline">
                    Chương trình
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:underline">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:underline">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Chương trình */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider">
                Chương trình
              </h4>
              <ul className="space-y-2 text-xs text-teal-50/90">
                <li>
                  <a href="#chuong-trinh" className="hover:underline">
                    Kỹ năng phân tích
                  </a>
                </li>
                <li>
                  <a href="#chuong-trinh" className="hover:underline">
                    Kỹ năng mỹ thuật
                  </a>
                </li>
                <li>
                  <a href="#chuong-trinh" className="hover:underline">
                    Kỹ năng âm nhạc
                  </a>
                </li>
                <li>
                  <a href="#chuong-trinh" className="hover:underline">
                    Kỹ năng công nghệ
                  </a>
                </li>
                <li>
                  <a href="#chuong-trinh" className="hover:underline">
                    Kỹ năng sáng tạo
                  </a>
                </li>
              </ul>
            </div>

            {/* Liên kết */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider">
                Liên kết
              </h4>
              <ul className="space-y-2 text-xs text-teal-50/90">
                <li>
                  <a href="#lien-he" className="hover:underline">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:underline">
                    Điều khoản &amp; điều kiện
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:underline">
                    Chính sách bảo hiểm
                  </a>
                </li>
              </ul>
            </div>

            {/* Liên hệ */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider">
                Liên hệ
              </h4>
              <ul className="space-y-2.5 text-xs text-teal-50/95">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-teal-200" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-teal-200" />
                  <span>{data.business.email[0]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-teal-200" />
                  <a
                    href={`tel:${data.business.phone[0]}`}
                    className="font-bold hover:underline"
                  >
                    {data.business.phone[0]}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-100 gap-4">
            <p>
              © Bản quyền thuộc về {data.business.name} • Học Viện Anh Ngữ &amp;
              Trại Hè Kỹ Năng Quốc Tế
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Lên đầu trang"
              className="w-9 h-9 rounded-lg bg-[#ef476f] hover:bg-[#d9365e] text-white flex items-center justify-center shadow-md cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* CAMP PROGRAM DETAIL MODAL */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-3 left-4 bg-[#ef476f] text-white text-xs font-bold px-3.5 py-1 rounded-full">
                Độ tuổi: {selectedProgram.ageRange}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-slate-900">
                {selectedProgram.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#38b2ac]" />
                  Thời lượng: {selectedProgram.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ef476f]" />
                  {selectedProgram.schedule}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>
              <div className="mt-4 space-y-2">
                {selectedProgram.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#38b2ac] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProgram(null);
                    setRegisterSubmitted(false);
                    setRegisterModalOpen(true);
                  }}
                  className="bg-[#ef476f] hover:bg-[#d9365e] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Đăng ký giữ chỗ khóa này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY LIGHTBOX MODAL */}
      {activeGalleryImage && (
        <div
          onClick={() => setActiveGalleryImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={activeGalleryImage}
              alt="Xem ảnh phóng to"
              className="w-full max-h-[82vh] object-contain rounded-2xl"
            />
            <button
              type="button"
              onClick={() => setActiveGalleryImage(null)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl p-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-slate-900">
                {data.aboutStorySection.videoTitle}
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 relative rounded-2xl overflow-hidden aspect-video bg-slate-900">
              <img
                src={data.aboutStorySection.image}
                alt="Video preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center bg-black/40">
                <CheckCircle2 className="w-12 h-12 text-[#38b2ac] mb-2" />
                <p className="text-sm font-bold">
                  Trải nghiệm môi trường Anh ngữ &amp; Kỹ năng 100% thực hành tại{" "}
                  {data.business.name}
                </p>
                <p className="text-xs text-slate-200 mt-1">
                  Liên hệ Hotline {data.business.phone[0]} để đặt lịch tham quan
                  trực tiếp cơ sở vật chất!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REGISTRATION / CONSULTATION MODAL */}
      {registerModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            {registerSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-teal-50 text-[#38b2ac] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Đăng ký tư vấn thành công!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Bộ phận Tuyển sinh của <strong>{data.business.name}</strong> sẽ
                  liên hệ với Phụ huynh qua số điện thoại trong vòng 15 phút.
                </p>
                <button
                  type="button"
                  onClick={() => setRegisterModalOpen(false)}
                  className="mt-2 bg-[#38b2ac] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <>
                <span className="inline-block bg-teal-50 text-[#38b2ac] text-[11px] font-bold uppercase px-3 py-1 rounded-full">
                  Ưu đãi học bổng mùa hè
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                  Đăng Ký Tư Vấn &amp; Test Năng Khiếu Miễn Phí
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Để lại thông tin để nhận lộ trình học cá nhân hóa cho bé từ{" "}
                  {data.business.name}.
                </p>
                <form onSubmit={handleRegisterSubmit} className="mt-5 space-y-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên Phụ huynh *"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#38b2ac]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#38b2ac]"
                  />
                  <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-[#38b2ac]">
                    {data.campProgramsSection.programs.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.ageRange})
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#ef476f] hover:bg-[#d9365e] text-white text-sm font-bold py-3 rounded-full shadow-md transition-colors cursor-pointer"
                  >
                    Gửi Đăng Ký Ngay
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
