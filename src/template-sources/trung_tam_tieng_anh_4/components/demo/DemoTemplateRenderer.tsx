"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  FileCheck,
  Award,
  BookOpen,
  Puzzle,
  Rocket,
  Compass,
  Layers,
  Share2,
  Quote,
  Star,
  Check,
  CheckCircle2,
  Play,
  Calendar,
  ArrowUp,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh4DefaultData,
  type TiengAnh4Data,
  type TiengAnh4ProgramCard
} from "@/template-sources/trung_tam_tieng_anh_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TiengAnh4Data = adaptClonedTemplateData(
    trungTamTiengAnh4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");
  const [selectedProgram, setSelectedProgram] = useState<TiengAnh4ProgramCard | null>(
    null
  );
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Contact form state
  const [studentName, setStudentName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Footer newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const testimonials =
    data.testimonials || trungTamTiengAnh4DefaultData.testimonials || [];
  const newsList = data.news || trungTamTiengAnh4DefaultData.news || [];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setStudentName("");
    setBirthDate("");
    setStudentEmail("");
    setStudentPhone("");
    setTopic("");
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  const renderSectionDots = () => (
    <div className="flex items-center justify-center gap-1 mb-2">
      <span className="w-2.5 h-2.5 rounded-full bg-[#e31e24]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#f5b841] -mt-2" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#0b224c]" />
    </div>
  );

  const renderProgramIcon = (iconType: TiengAnh4ProgramCard["iconType"]) => {
    switch (iconType) {
      case "puzzle":
        return <Puzzle className="w-6 h-6 text-[#0b224c]" />;
      case "rocket":
        return <Rocket className="w-6 h-6 text-[#e31e24]" />;
      case "ruler":
        return <Compass className="w-6 h-6 text-[#f4b740]" />;
      default:
        return <Layers className="w-6 h-6 text-[#67d4d8]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#e31e24] selection:text-white"
    >
      {/* 1. DEEP NAVY TOPBAR (#0b224c) + WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Deep Navy Topbar */}
        <div className="bg-[#0b224c] text-white text-[11px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${primaryEmail}`}
                className="flex items-center gap-1.5 hover:text-[#f5b841] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-300" />
                <span>Email: {primaryEmail}</span>
              </a>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-[#f5b841] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-300" />
                <span>Điện thoại: {primaryPhone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              {["f", "t", "in", "yt"].map((soc) => (
                <a
                  key={soc}
                  href="#top"
                  className="w-6 h-6 rounded-full border border-white/25 flex items-center justify-center text-[10px] hover:bg-[#e31e24] hover:border-[#e31e24] transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main White Navbar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-full border-2 border-[#e31e24] flex items-center justify-center bg-red-50">
              <GraduationCap className="w-5 h-5 text-[#0b224c]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#e31e24]" />
            </div>
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e31e24] block">
                EDUCATION
              </span>
              <span className="text-lg font-extrabold tracking-tight text-[#0b224c] block leading-none">
                {data.business.name}
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-[#0b224c]">
            <a href="#top" className="text-[#e31e24] transition-colors">
              Trang Chủ
            </a>
            <a href="#about" className="hover:text-[#e31e24] transition-colors">
              Giới Thiệu
            </a>
            <a
              href="#programs"
              className="flex items-center gap-1 hover:text-[#e31e24] transition-colors"
            >
              <span>Ôn Thi THPT QG</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#news" className="hover:text-[#e31e24] transition-colors">
              Tin Tức
            </a>
            <a
              href="#contact-section"
              className="hover:text-[#e31e24] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Search + Red Pill CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-2 text-[#0b224c] hover:text-[#e31e24]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#contact-section"
              className="bg-[#e31e24] hover:bg-[#c8191e] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md shadow-red-500/20 transition-colors"
            >
              Liên Hệ Ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0b224c]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 text-xs font-bold text-[#0b224c]">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#e31e24]"
            >
              Trang Chủ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Giới Thiệu
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Ôn Thi THPT QG
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Tin Tức
            </a>
            <a
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block bg-[#e31e24] text-white px-5 py-2 rounded-full"
            >
              Liên Hệ Ngay
            </a>
          </div>
        )}
      </header>

      {/* 2. SOFT BLUSH HERO BANNER (#fceeee) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdecec] via-[#fdf4f4] to-[#eef5fc] py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1a1a1a] leading-tight">
              Trung Tâm Luyện thi <br />
              <span>THPT </span>
              <span className="text-[#e31e24]">Quốc Gia</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              {data.hero.subtitle}
            </p>

            {/* 3 Playful Feature Badges */}
            <div className="pt-2 grid grid-cols-3 gap-4 max-w-md">
              {data.heroBadges.map((badge) => (
                <div key={badge.id} className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center">
                    {badge.icon === "cap" && (
                      <GraduationCap className="w-7 h-7 text-[#e31e24]" />
                    )}
                    {badge.icon === "notes" && (
                      <FileCheck className="w-7 h-7 text-[#0b224c]" />
                    )}
                    {badge.icon === "badge" && (
                      <Award className="w-7 h-7 text-[#f5b841]" />
                    )}
                  </div>
                  <p className="text-xs font-extrabold text-[#1a1a1a] leading-snug">
                    {badge.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={data.hero.ctaLink || "#programs"}
                className="inline-block bg-[#e31e24] hover:bg-[#c8191e] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-red-500/25 transition-all"
              >
                {data.hero.ctaText || "Khám Phá Ngay"}
              </a>
            </div>
          </div>

          {/* Right Column: Student Visual + Floating Math/Trophy/Certified Stickers */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Warm yellow circle backdrop */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#f5b841] to-[#fde08d] p-3 shadow-xl flex items-center justify-center">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />

              {/* Floating Math Formula Sticker Top-Left */}
              <div className="absolute -top-3 -left-4 bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-red-100 -rotate-12">
                <span className="font-serif font-extrabold text-lg sm:text-xl text-[#e31e24]">
                  a²+b²=?
                </span>
              </div>

              {/* Golden Trophy Sticker Top-Right */}
              <div className="absolute -top-4 -right-2 w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-300 shadow-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-[#f5b841]" />
              </div>

              {/* Green Certified Badge Bottom-Left */}
              <div className="absolute bottom-4 -left-6 bg-emerald-600 text-white px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white -rotate-6 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider">
                  CERTIFIED
                </span>
              </div>

              {/* Graduation Cap Sticker Bottom-Right */}
              <div className="absolute bottom-6 -right-5 bg-[#0b224c] text-white p-3 rounded-2xl shadow-lg rotate-12">
                <GraduationCap className="w-6 h-6 text-[#f5b841]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GIỚI THIỆU TRUNG TÂM ÔN THI THPT (4-LEAF CLOVER COLLAGE LEFT + CONTENT RIGHT) */}
      <section id="about" className="relative bg-white py-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 2x2 Clover Photo Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="aspect-square overflow-hidden rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[48px] rounded-br-lg shadow-md">
              <img
                src={data.aboutSection.collageImages[0]}
                alt="Lớp học 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-tl-[48px] rounded-tr-[48px] rounded-br-[48px] rounded-bl-lg shadow-md">
              <img
                src={data.aboutSection.collageImages[1]}
                alt="Lớp học 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-tl-[48px] rounded-bl-[48px] rounded-br-[48px] rounded-tr-lg shadow-md">
              <img
                src={data.aboutSection.collageImages[2]}
                alt="Lớp học 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-tr-[48px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-lg shadow-md">
              <img
                src={data.aboutSection.collageImages[3]}
                alt="Lớp học 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e31e24]">
              {data.aboutSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] leading-snug">
              {data.aboutSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.business.aboutText?.[0] || data.aboutSection.description}
            </p>

            {/* 2 Pillar Columns with Soft Pink Icons */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.aboutSection.pillars.map((pil, idx) => (
                <div key={pil.id} className="space-y-2.5">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e31e24]">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <BookOpen className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0b224c]">
                    {pil.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pil.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHƯƠNG TRÌNH ÔN LUYỆN HIỆU QUẢ (4 COLORFUL WAVE-BOTTOM CARDS) */}
      <section id="programs" className="bg-white pt-4 pb-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            {renderSectionDots()}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] uppercase">
              CHƯƠNG TRÌNH ÔN LUYỆN HIỆU QUẢ
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Với phương pháp giảng dạy khoa học, đội ngũ giảng viên giàu kinh nghiệm và
              hệ thống bài giảng tối ưu
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.programs.map((prog) => (
              <div
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col bg-white border border-slate-100"
              >
                {/* Top Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Colored Wave Body with Center Diamond Icon */}
                <div
                  className="relative flex-1 pt-10 pb-7 px-5 text-center text-white rounded-t-[28px] -mt-5"
                  style={{ backgroundColor: prog.colorHex }}
                >
                  {/* Diamond Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl rotate-45 shadow-md flex items-center justify-center">
                    <div className="-rotate-45">
                      {renderProgramIcon(prog.iconType)}
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-white">
                    {prog.title}
                  </h3>
                  <p className="text-[11px] text-white/90 mt-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ĐỘI NGŨ GIÁO VIÊN (4 TEACHER CARDS ON CLOUD BLUE #f3f9fd) */}
      <section className="bg-[#f3f9fd] py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {renderSectionDots()}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] uppercase">
              ĐỘI NGŨ GIÁO VIÊN
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Khơi nguồn động lực, kiến tạo tương lai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.teachers.map((tch) => (
              <div
                key={tch.id}
                className="bg-white rounded-3xl p-3.5 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={tch.image}
                    alt={tch.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Golden Share Button Bottom-Left */}
                  <button
                    type="button"
                    onClick={() => {
                      document
                        .getElementById("contact-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-[#f5b841] text-[#0b224c] shadow flex items-center justify-center hover:bg-[#e31e24] hover:text-white transition-colors"
                    aria-label={`Kết nối ${tch.name}`}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-4 pb-2 space-y-1">
                  <h3 className="text-sm font-extrabold text-[#0b224c]">
                    {tch.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#e31e24]">
                    {tch.role}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 pt-1">
                    <Phone className="w-3 h-3 text-[#0b224c]" />
                    <span>{primaryPhone || tch.phone}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NHẬN XÉT TỪ HỌC VIÊN (3 DEEP NAVY SPEECH-BUBBLE CARDS) */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e31e24]">
                KHÁCH HÀNG ĐÁNH GIÁ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] uppercase mt-1">
                NHẬN XÉT TỪ HỌC VIÊN
              </h2>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow hover:bg-[#0b224c] transition-colors"
                aria-label="Trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[#e31e24] text-white flex items-center justify-center shadow hover:bg-[#0b224c] transition-colors"
                aria-label="Sau"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#0b224c] text-white rounded-3xl p-7 shadow-lg flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {item.content}
                </p>

                <div className="mt-6 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#e31e24] flex items-center justify-center text-white shrink-0 shadow">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.author}</h3>
                    <div className="flex items-center gap-1 mt-0.5 text-[#f5b841]">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3 h-3 fill-current text-[#f5b841]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Speech Bubble Pointer */}
                <div className="w-5 h-5 bg-[#0b224c] rotate-45 -bottom-2 left-10 absolute" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LIÊN HỆ VỚI CHÚNG TÔI (TILTED PHOTOS LEFT + FORM CARD RIGHT ON #f3f9fd) */}
      <section
        id="contact-section"
        className="bg-[#f3f9fd] py-20 px-4 sm:px-8 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 2 Tilted Classroom Photos */}
          <div className="lg:col-span-5 relative flex flex-col items-center gap-4">
            <div className="w-64 sm:w-72 h-44 rounded-3xl overflow-hidden shadow-xl border-4 border-white -rotate-6">
              <img
                src={data.contactSection.collageImages[0]}
                alt="Không gian học tập 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-64 sm:w-72 h-44 rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-6 -mt-6 ml-8">
              <img
                src={data.contactSection.collageImages[1]}
                alt="Không gian học tập 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Heading + Checklists + Amber-Bordered Form Card */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] uppercase">
              {data.contactSection.title}
            </h2>

            {/* 2x2 Checklist */}
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              {data.contactSection.checklists.map((chk, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-red-100 text-[#e31e24] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{chk}</span>
                </div>
              ))}
            </div>

            {/* White Rounded Form Card with Amber Border */}
            <div className="bg-white rounded-3xl border-2 border-[#f5b841] p-6 sm:p-8 shadow-lg">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-extrabold text-[#0b224c]">
                    Đăng ký tư vấn lộ trình thành công!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Bộ phận học vụ của {data.business.name} sẽ liên hệ lại với bạn qua
                    số điện thoại để xếp lịch kiểm tra đầu vào miễn phí.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#0b224c] mb-1">
                        Họ tên <span className="text-[#e31e24]">(Yêu cầu)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Nhập họ và tên..."
                        className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e31e24]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#0b224c] mb-1">
                        Năm sinh <span className="text-[#e31e24]">(Yêu cầu)</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e31e24]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-[#0b224c] mb-1">
                        Email <span className="text-[#e31e24]">(Yêu cầu)</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e31e24]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#0b224c] mb-1">
                        Số điện thoại <span className="text-[#e31e24]">(Yêu cầu)</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        placeholder="0909 xxx xxx"
                        className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e31e24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#0b224c] mb-1">
                      Chủ đề <span className="text-[#e31e24]">(Yêu cầu)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="Khóa luyện đề chuyên sâu / Luyện thi cấp tốc / Học kèm 1-1..."
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e31e24]"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="bg-[#e31e24] hover:bg-[#c8191e] text-white text-xs font-bold px-7 py-2.5 rounded-full shadow-md shadow-red-500/20 transition-colors"
                    >
                      Liên Hệ Ngay
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CÁC CÂU HỎI VÀ TRẢ LỜI THƯỜNG GẶP (CIRCULAR STUDENT VIDEO LEFT + ACCORDION RIGHT) */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Circular Student Photo with Rings & Play Button */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Golden Top-Left Ring Accent */}
              <div className="absolute -top-4 -left-4 w-48 h-48 rounded-full bg-[#f5b841]" />
              {/* Deep Navy Bottom-Right Ring Accent */}
              <div className="absolute -bottom-4 -right-4 w-56 h-56 rounded-full bg-[#0b224c]" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src={data.faqSection.studentImage}
                  alt="Học viên SmartSummer"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/95 text-[#e31e24] shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Xem video giới thiệu"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e31e24]">
              {data.faqSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] uppercase pb-2">
              {data.faqSection.title}
            </h2>

            <div className="space-y-3">
              {data.faqSection.faqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                      className={`w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 transition-colors ${
                        isOpen
                          ? "bg-[#0b224c] text-white"
                          : "bg-[#fbf8f3] text-[#0b224c] hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold">
                        {faq.question}
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          isOpen
                            ? "bg-[#e31e24] text-white"
                            : "bg-white text-[#0b224c]"
                        }`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="bg-white px-5 py-4 text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TIN TỨC MỚI NHẤT (3 BLOG CARDS WITH GOLDEN BOTTOM BAR) */}
      <section id="news" className="bg-white pt-4 pb-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {renderSectionDots()}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b224c] uppercase">
              TIN TỨC MỚI NHẤT
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Khơi nguồn động lực, kiến tạo tương lai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {newsList.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl overflow-hidden border border-[#f5b841]/60 bg-white shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#f5b841] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0b224c] leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <a
                  href="#contact-section"
                  className="bg-[#f5b841] hover:bg-[#e5a62e] text-[#0b224c] text-xs font-bold px-5 py-3 flex items-center gap-1 transition-colors"
                >
                  <span>Xem thêm</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DEEP NAVY FOOTER (#0b224c) */}
      <footer className="bg-[#0b224c] text-white pt-14 pb-8 px-4 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Top Row: Brand Logo + Newsletter Input Pill */}
          <div className="pb-10 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full border-2 border-[#e31e24] flex items-center justify-center bg-white">
                <GraduationCap className="w-5 h-5 text-[#0b224c]" />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e31e24] block">
                  EDUCATION
                </span>
                <span className="text-lg font-extrabold tracking-tight text-white block leading-none">
                  {data.business.name}
                </span>
              </div>
            </a>

            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full max-w-md flex items-center gap-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập địa chỉ email..."
                className="flex-1 bg-white text-slate-800 text-xs px-5 py-3 rounded-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#e31e24] hover:bg-[#c8191e] text-white text-xs font-bold px-6 py-3 rounded-full shrink-0 transition-colors"
              >
                Đăng Ký
              </button>
            </form>
          </div>

          {newsletterSubscribed && (
            <p className="text-right text-xs text-emerald-300 mt-2">
              Đã đăng ký nhận tài liệu ôn thi mới nhất!
            </p>
          )}

          {/* 3 Columns Below */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-xs">
            {/* Col 1: Về chúng tôi */}
            <div className="space-y-3">
              <h3 className="text-base font-extrabold text-white">Về chúng tôi</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#top" className="hover:text-[#f5b841]">
                    • Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#f5b841]">
                    • Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-[#f5b841]">
                    • Dịch vụ đào tạo
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-[#f5b841]">
                    • Tin tức
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="hover:text-[#f5b841]">
                    • Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: Liên hệ ngay */}
            <div className="space-y-3">
              <h3 className="text-base font-extrabold text-white">Liên hệ ngay</h3>
              <p className="text-slate-300">Thứ 2 đến Thứ 6: 08:00 - 17:00</p>
              <p className="text-slate-300">Thứ 7, Chủ Nhật: Nghỉ</p>
              <div className="pt-2 space-y-2.5">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#f5b841]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#f5b841] text-[#0b224c] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span>Email: {primaryEmail}</span>
                </a>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#f5b841]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#f5b841] text-[#0b224c] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>Điện thoại: {primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Col 3: Địa chỉ + 3 Thumbnails */}
            <div className="space-y-3">
              <h3 className="text-base font-extrabold text-white">Địa chỉ</h3>
              <p className="flex items-start gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-[#f5b841] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <div className="pt-2 grid grid-cols-3 gap-2.5">
                {data.footerGallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="h-16 rounded-xl overflow-hidden border border-white/20"
                  >
                    <img
                      src={imgUrl}
                      alt={`Hình ảnh trung tâm ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-[11px] text-slate-400">
            © Thiết kế và lập trình bởi {data.business.name}
          </div>
        </div>

        {/* Scroll To Top Red Circle */}
        <a
          href="#top"
          className="fixed bottom-5 right-5 w-9 h-9 rounded-full bg-[#e31e24] text-white shadow-lg flex items-center justify-center hover:bg-[#c8191e] transition-colors z-30"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* PROGRAM DETAIL MODAL */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-6 text-white flex items-center justify-between"
              style={{ backgroundColor: selectedProgram.colorHex }}
            >
              <h3 className="text-lg font-extrabold">{selectedProgram.title}</h3>
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>
              <div className="space-y-2">
                {selectedProgram.details.map((dt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#e31e24] shrink-0 mt-0.5" />
                    <span>{dt}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact-section"
                onClick={() => setSelectedProgram(null)}
                className="block w-full text-center bg-[#e31e24] text-white text-xs font-bold py-3 rounded-full"
              >
                Đăng Ký Học Thử Chương Trình Này
              </a>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-3xl p-6 space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-extrabold text-[#0b224c]">
                Môi Trường Học Tập Tại {data.business.name}
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={data.faqSection.studentImage}
              alt="Học viên"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <p className="text-xs text-slate-600 leading-relaxed">
              Hơn 98% học viên tại trung tâm đạt mục tiêu đầu ra THPT Quốc gia & IELTS
              nhờ lộ trình cá nhân hóa và phương pháp luyện đề thực chiến.
            </p>
            <a
              href="#contact-section"
              onClick={() => setVideoModalOpen(false)}
              className="inline-block bg-[#e31e24] text-white text-xs font-bold px-6 py-2.5 rounded-full"
            >
              Nhận Tư Vấn Lộ Trình Miễn Phí
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
