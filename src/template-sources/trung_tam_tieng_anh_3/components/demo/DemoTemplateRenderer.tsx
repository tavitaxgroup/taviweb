"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Monitor,
  UserCheck,
  LayoutGrid,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  FileCheck2,
  Building2,
  Star,
  ArrowRight,
  ArrowUp,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh3DefaultData,
  type TrungTamTiengAnh3Data,
  type TrungTamTiengAnh3HeroCard
} from "@/template-sources/trung_tam_tieng_anh_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh3Data = adaptClonedTemplateData(
    trungTamTiengAnh3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState(
    data.featureTabs?.[0]?.id || "tab-1"
  );
  const [selectedTutorIdx, setSelectedTutorIdx] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [authModalOpen, setAuthModalOpen] = useState<"login" | "register" | null>(
    null
  );
  const [selectedSubjectModal, setSelectedSubjectModal] = useState<string | null>(
    null
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0123 456 789";
  const primaryEmail = data.business.email?.[0] || "tuyensinh@monaacademy.edu.vn";
  const heroCards =
    data.heroCards || trungTamTiengAnh3DefaultData.heroCards || [];
  const subjectRows =
    data.subjectRows || trungTamTiengAnh3DefaultData.subjectRows || [];
  const featureTabs =
    data.featureTabs || trungTamTiengAnh3DefaultData.featureTabs || [];
  const activeTab =
    featureTabs.find((t) => t.id === activeTabId) || featureTabs[0];

  const tutors = data.tutors || trungTamTiengAnh3DefaultData.tutors || [];
  const currentTutor = tutors[selectedTutorIdx] || tutors[0];
  const testimonials =
    data.testimonials || trungTamTiengAnh3DefaultData.testimonials || [];
  const faqs = data.faqs || trungTamTiengAnh3DefaultData.faqs || [];

  const renderHeroCardIcon = (icon: TrungTamTiengAnh3HeroCard["icon"]) => {
    switch (icon) {
      case "users":
        return <LayoutGrid className="w-8 h-8 text-white/90 stroke-[1.5]" />;
      case "rating":
        return <Monitor className="w-8 h-8 text-white/90 stroke-[1.5]" />;
      case "pass":
        return <UserCheck className="w-8 h-8 text-white/90 stroke-[1.5]" />;
      case "class":
        return <BookOpen className="w-8 h-8 text-white/90 stroke-[1.5]" />;
    }
  };

  const renderCredentialIcon = (
    icon: "degree" | "score" | "award" | "uni"
  ) => {
    switch (icon) {
      case "degree":
        return <GraduationCap className="w-6 h-6 text-[#6b21a8]" />;
      case "score":
        return <FileCheck2 className="w-6 h-6 text-[#6b21a8]" />;
      case "award":
        return <Award className="w-6 h-6 text-[#6b21a8]" />;
      case "uni":
        return <Building2 className="w-6 h-6 text-[#6b21a8]" />;
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setAuthModalOpen(null);
      setSelectedSubjectModal(null);
    }, 2000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e1b4b] font-sans selection:bg-[#7e22ce] selection:text-white"
    >
      {/* 1. LAVENDER TO ROYAL PURPLE HERO + HEADER + 4 GLASS STAT CARDS (Matches TA006) */}
      <div className="relative bg-gradient-to-b from-[#f3eaff] via-[#cfa5f8] to-[#7b1fa2] pb-24 sm:pb-32 overflow-hidden">
        {/* Diagonal White Slant at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-white pointer-events-none"
          style={{ clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0% 100%)" }}
        />

        {/* Top Navbar */}
        <header className="relative z-20 max-w-6xl mx-auto px-4 pt-5 pb-4 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#4c1d95] text-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="leading-none">
              <span className="block text-base sm:text-lg font-black tracking-tight text-[#2e1065] uppercase">
                {data.business.name}
              </span>
              <span className="block text-[10px] font-semibold text-[#6b21a8] tracking-wider uppercase mt-0.5">
                Academic & IELTS
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#2e1065]">
            <a
              href="#top"
              className="text-[#6b21a8] border-b-2 border-[#6b21a8] pb-1"
            >
              Trang chủ
            </a>
            <a href="#features" className="hover:text-[#6b21a8] transition-colors">
              Giới thiệu
            </a>
            <a href="#subjects" className="hover:text-[#6b21a8] transition-colors">
              Khoá học
            </a>
            <a href="#tutors" className="hover:text-[#6b21a8] transition-colors">
              Giảng viên
            </a>
            <a href="#faq" className="hover:text-[#6b21a8] transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Right Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAuthModalOpen("login")}
              className="text-xs font-semibold text-[#2e1065] hover:text-[#6b21a8] px-3 py-2 transition-colors"
            >
              Đăng nhập
            </button>
            <button
              type="button"
              onClick={() => setAuthModalOpen("register")}
              className="text-xs font-semibold bg-[#e2d4f0] hover:bg-[#4c1d95] text-[#2e1065] hover:text-white px-4 py-2 rounded-md transition-colors shadow-sm"
            >
              Đăng ký
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/60 text-[#2e1065]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-30 mx-4 mb-4 p-4 rounded-xl bg-white shadow-xl space-y-2.5 text-xs font-semibold text-[#2e1065]">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#6b21a8]"
            >
              Trang chủ
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#subjects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Khoá học
            </a>
            <a
              href="#tutors"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giảng viên
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Câu hỏi thường gặp
            </a>
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalOpen("login");
                }}
                className="flex-1 py-2 rounded-md border border-[#6b21a8] text-[#6b21a8]"
              >
                Đăng nhập
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthModalOpen("register");
                }}
                className="flex-1 py-2 rounded-md bg-[#6b21a8] text-white"
              >
                Đăng ký
              </button>
            </div>
          </div>
        )}

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#2e1065]">
                {data.hero.eyebrow || "1,000+ sinh viên tin tưởng và yêu quý"}
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1e1b4b] leading-[1.18] tracking-tight">
              {data.hero.title}{" "}
              <span className="block text-[#7e22ce]">
                {data.hero.description || "Tài liệu đa dạng."}
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-[#3b0764]/80 font-medium">
              {data.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setAuthModalOpen("register")}
                className="bg-[#4c1d95] hover:bg-[#3b0764] text-white text-xs font-bold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
              >
                {data.hero.ctaText}
              </button>
              <a
                href="#subjects"
                className="bg-white/80 hover:bg-white text-[#4c1d95] text-xs font-bold px-6 py-3 rounded-full shadow-sm transition-colors"
              >
                Xem các môn học
              </a>
            </div>
          </div>

          {/* Right Circular Study Illustration / Collage */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88">
              {/* Decorative Floating Shapes */}
              <span className="absolute -top-3 left-8 w-8 h-8 rounded-full bg-amber-300/80 animate-pulse" />
              <span className="absolute top-12 -right-3 w-10 h-10 rounded-xl bg-pink-400/70 rotate-12" />
              <span className="absolute bottom-6 -left-4 w-12 h-12 rounded-2xl bg-purple-700/80 -rotate-12" />

              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#581c87] via-[#9333ea] to-[#fcd34d] p-2 shadow-2xl overflow-hidden">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.business.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white/40"
                />
              </div>

              {/* Floating Open-Book Badge */}
              <div className="absolute -bottom-3 right-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5 border border-purple-100">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xs">
                  A+
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-[#2e1065]">
                    IELTS 8.0+ & GPA 3.8
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Cam kết đầu ra học thuật
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Purple Glass Stat Cards */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroCards.map((card) => (
              <div
                key={card.id}
                className="bg-gradient-to-b from-[#6b1199]/90 to-[#4a0475]/95 backdrop-blur-md border border-white/15 rounded-xl p-5 text-white shadow-xl hover:-translate-y-1 transition-transform"
              >
                <div className="mb-3">{renderHeroCardIcon(card.icon)}</div>
                <h3 className="text-sm font-extrabold mb-2">{card.title}</h3>
                <p className="text-[11px] text-purple-100/85 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. CÁC MÔN HỌC VÀ TÀI LIỆU TẠI MONAACADEMY (3 Staggered Pill Rows) */}
      <section id="subjects" className="py-14 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#2e0249] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
            BẠN KHÔNG CẦN PHẢI SỢ NHỮNG MÔN HỌC NÀY NỮA
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1e1b4b] mb-10">
            Các môn học và tài liệu tại{" "}
            <span className="text-[#a855f7]">
              {data.business.name.replace(/\s+/g, "")}
            </span>
          </h2>

          <div className="space-y-4">
            {subjectRows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {row.map((subject, subIdx) => (
                  <button
                    key={subIdx}
                    type="button"
                    onClick={() => setSelectedSubjectModal(subject)}
                    className="group bg-white hover:bg-[#4c1d95] text-slate-700 hover:text-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-lg px-4 py-2.5 text-xs font-medium flex items-center gap-2 transition-all hover:shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#6b21a8] group-hover:text-white transition-colors" />
                    <span>{subject}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VỚI MONAACADEMY, VIỆC HỌC TRỞ NÊN DỄ DÀNG HƠN (Interactive Vertical Tabs + Cream Card) */}
      <section
        id="features"
        className="py-16 sm:py-20 bg-gradient-to-b from-[#d8b4fe]/75 via-[#b98bf0]/85 to-[#9d65e5]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#2e0249] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              MÔN NÀO KHÓ, CÓ MONA LO!
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1e1b4b]">
              Với{" "}
              <span className="text-[#6b21a8]">
                {data.business.name.replace(/\s+/g, "")}
              </span>
              , việc học của bạn trở nên dễ dàng hơn
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 Interactive Tabs */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-2.5">
              {featureTabs.map((tab) => {
                const isActive = tab.id === activeTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`relative w-full text-left px-5 py-3.5 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#240046] text-white shadow-lg"
                        : "bg-white/25 hover:bg-white/40 text-white border border-white/20"
                    }`}
                  >
                    <span>{tab.title}</span>
                    {isActive && (
                      <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[8px] border-l-[#240046]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Warm Cream Illustration & Details Card */}
            <div className="lg:col-span-6 bg-[#ffebb3] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-amber-200">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-5 bg-white shadow-sm">
                <img
                  src={activeTab?.image}
                  alt={activeTab?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#240046] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {activeTab?.title}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#240046] mb-2">
                  {activeTab?.heading}
                </h3>
                <p className="text-xs text-[#3b0764]/85 leading-relaxed mb-4">
                  {activeTab?.description}
                </p>
                <ul className="space-y-1.5">
                  {activeTab?.bulletPoints.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-[#240046]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6b21a8] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANH CHỊ MONA (Selectable Tutor Carousel + Detailed Spotlight Card) */}
      <section id="tutors" className="py-16 sm:py-20 bg-[#faf7ff]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#2e0249] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              CÂU NÀO KHÓ - HỎI ANH CHỊ MONA
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1e1b4b] mb-2">
              Anh chị <span className="text-[#9333ea]">Mona</span>
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Những sinh viên và thạc sĩ có thành tích xuất sắc, giỏi truyền đạt kiến thức kể cả những khái niệm phức tạp nhất. Luôn tận tâm với học viên và có khao khát giúp việc học đại học trở nên dễ dàng hơn.
            </p>
          </div>

          {/* Horizontal Row of 6 Tutor Avatar Cards */}
          <div className="relative flex items-center gap-3 mb-8">
            <button
              type="button"
              onClick={() =>
                setSelectedTutorIdx((prev) =>
                  prev === 0 ? tutors.length - 1 : prev - 1
                )
              }
              aria-label="Giảng viên trước"
              className="w-8 h-8 rounded-full bg-purple-100 hover:bg-[#6b21a8] text-[#6b21a8] hover:text-white flex items-center justify-center shrink-0 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 flex-1">
              {tutors.map((tutor, idx) => {
                const isSelected = idx === selectedTutorIdx;
                return (
                  <button
                    key={tutor.id}
                    type="button"
                    onClick={() => setSelectedTutorIdx(idx)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center ${
                      isSelected
                        ? "bg-white border-[#7e22ce] shadow-md scale-[1.03]"
                        : "bg-white/70 border-purple-200/70 hover:bg-white"
                    }`}
                  >
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      className="w-11 h-11 rounded-full object-cover mb-2 border-2 border-purple-200"
                    />
                    <span className="text-[10px] font-extrabold uppercase text-[#2e1065] line-clamp-1">
                      {tutor.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                setSelectedTutorIdx((prev) =>
                  prev === tutors.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Giảng viên tiếp theo"
              className="w-8 h-8 rounded-full bg-purple-100 hover:bg-[#6b21a8] text-[#6b21a8] hover:text-white flex items-center justify-center shrink-0 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Selected Tutor Detail Card */}
          {currentTutor && (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(107,33,168,0.08)] border border-purple-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={currentTutor.portrait}
                    alt={currentTutor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7">
                <h3 className="text-lg font-extrabold text-[#1e1b4b]">
                  {currentTutor.name}
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  {currentTutor.shortRole}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {currentTutor.credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-0.5 shrink-0">
                        {renderCredentialIcon(cred.icon)}
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-[#1e1b4b]">
                          {cred.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {cred.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. HỌC VIÊN NÓI GÌ VỀ MONAACADEMY (3x3 Checkerboard Testimonial Grid) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#2e0249] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              PHẢN HỒI TỪ HỌC VIÊN
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1e1b4b]">
              Học viên nói gì về{" "}
              <span className="text-[#9333ea]">
                {data.business.name.replace(/\s+/g, "")}.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 9).map((item, idx) => {
              // Checkerboard pattern: indices 0, 2, 4, 6, 8 are deep purple; 1, 3, 5, 7 are white
              const isPurple = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl p-6 text-center transition-transform hover:-translate-y-1 flex flex-col justify-between ${
                    isPurple
                      ? "bg-gradient-to-br from-[#5b0e91] to-[#7b1fa2] text-white shadow-lg"
                      : "bg-white text-slate-700 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
                      {[...Array(item.rating || 5)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p
                      className={`text-xs leading-relaxed mb-6 ${
                        isPurple ? "text-purple-100" : "text-slate-600"
                      }`}
                    >
                      {item.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-9 h-9 rounded-full object-cover border-2 border-white/40"
                      />
                    )}
                    <div className="text-left">
                      <div
                        className={`text-xs font-extrabold ${
                          isPurple ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.author}
                      </div>
                      <div
                        className={`text-[10px] ${
                          isPurple ? "text-purple-200" : "text-slate-400"
                        }`}
                      >
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CÂU HỎI THƯỜNG GẶP (Deep Purple Accordion FAQ Section) */}
      <section
        id="faq"
        className="py-16 sm:py-20 bg-gradient-to-b from-[#4a0475] to-[#3b0764] text-white"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#9333ea] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              BẠN HỎI - MONA TRẢ LỜI!
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="divide-y divide-white/15">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="w-full flex items-center justify-between text-left gap-4 py-1 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-purple-300 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-purple-300 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs text-purple-100/85 leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHITE 4-COLUMN FOOTER + PURPLE COPYRIGHT BAR */}
      <footer id="contact" className="bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#4c1d95] text-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-base font-black uppercase text-[#2e1065]">
                {data.business.name}
              </span>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed mb-4">
              {data.business.aboutText?.[0]}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <a
                href="#contact"
                className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px]"
              >
                f
              </a>
              <a
                href="#contact"
                className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-[11px]"
              >
                t
              </a>
              <a
                href="#contact"
                className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[11px]"
              >
                ▶
              </a>
            </div>
            <button
              type="button"
              onClick={() => setAuthModalOpen("register")}
              className="inline-flex items-center gap-1.5 border border-[#9333ea] text-[#6b21a8] hover:bg-[#6b21a8] hover:text-white text-[11px] font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              <span>Liên hệ ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Col 2: Danh mục */}
          <div>
            <h4 className="text-sm font-extrabold text-[#1e1b4b] pb-2 mb-3 border-b border-slate-100">
              Danh mục
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#top" className="text-[#7e22ce] font-semibold">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-[#7e22ce]">
                  Khoá học
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#7e22ce]">
                  Tài liệu học thuật
                </a>
              </li>
              <li>
                <a href="#tutors" className="hover:text-[#7e22ce]">
                  Đội ngũ Tutor
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#7e22ce]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Liên kết */}
          <div>
            <h4 className="text-sm font-extrabold text-[#1e1b4b] pb-2 mb-3 border-b border-slate-100">
              Liên kết
            </h4>
            <ul className="space-y-2 text-slate-600">
              {[
                "Kinh tế vi mô",
                "Nguyên lý kế toán",
                "Luyện thi IELTS 7.5+",
                "Toán rời rạc",
                "Kinh tế vĩ mô",
                "Tài chính doanh nghiệp",
                "Xác suất thống kê"
              ].map((subj, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setSelectedSubjectModal(subj)}
                    className="hover:text-[#7e22ce] text-left"
                  >
                    {subj}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Liên hệ & Địa chỉ */}
          <div>
            <h4 className="text-sm font-extrabold text-[#1e1b4b] pb-2 mb-3 border-b border-slate-100">
              Liên hệ
            </h4>
            <p className="text-slate-600 mb-1">Phone: {primaryPhone}</p>
            <p className="text-slate-600 mb-4">E-mail: {primaryEmail}</p>

            <h4 className="text-sm font-extrabold text-[#1e1b4b] pb-2 mb-2 border-b border-slate-100">
              Địa chỉ
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {data.business.address}
            </p>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-[#3b0764] text-white py-3 text-center text-[11px] relative">
          <div className="max-w-5xl mx-auto px-4">
            © Bản quyền thuộc về <strong>{data.business.name}</strong> – Hệ thống Đào tạo Anh ngữ & Học thuật Đại học Quốc tế.
          </div>
          <a
            href="#top"
            aria-label="Lên đầu trang"
            className="hidden sm:flex fixed bottom-5 right-5 w-9 h-9 rounded-lg bg-[#581c87] hover:bg-[#7e22ce] text-white items-center justify-center shadow-lg transition-colors z-30"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </footer>

      {/* MODAL FOR LOGIN / REGISTER OR SUBJECT CONSULTATION */}
      {(authModalOpen || selectedSubjectModal) && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setAuthModalOpen(null);
                setSelectedSubjectModal(null);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#7e22ce] mx-auto mb-3" />
                <h3 className="text-lg font-extrabold text-[#1e1b4b] mb-1">
                  Gửi thông tin thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Cố vấn học thuật của {data.business.name} sẽ gửi bộ tài liệu đọc thử và lộ trình qua Zalo/Email của bạn.
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <span className="inline-block bg-purple-100 text-[#6b21a8] text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-1">
                    {selectedSubjectModal
                      ? "Nhận đề cương & học thử"
                      : authModalOpen === "login"
                      ? "Cổng học viên"
                      : "Đăng ký lộ trình"}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#1e1b4b]">
                    {selectedSubjectModal
                      ? `Môn: ${selectedSubjectModal}`
                      : authModalOpen === "login"
                      ? "Đăng nhập hệ thống LMS"
                      : `Đăng ký tư vấn cùng ${data.business.name}`}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên sinh viên
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Minh Khôi"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại / Zalo
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Trường đại học / Mục tiêu IELTS
                  </label>
                  <input
                    type="text"
                    placeholder="RMIT, ISB, UEH, IELTS 7.5..."
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#7e22ce]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6b21a8] hover:bg-[#4c1d95] text-white text-xs font-bold py-3 rounded-lg transition-colors shadow-md"
                >
                  Nhận tài liệu & Tư vấn miễn phí
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
