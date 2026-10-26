"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Send,
  X,
  Menu,
  CheckCircle2,
  Flame,
  Clock,
  Dumbbell,
  Globe,
  Video,
  Share2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym2DefaultData,
  PhongGym2Data,
  PhongGym2Program,
} from "@/template-sources/phong_gym_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

/**
 * Recreates the exact amber button with diagonal right-edge stripes from GYM002-phong_gym_2.jpg
 */
function AmberStripeButton({
  label,
  onClick,
  href,
  size = "md",
}: {
  label: string;
  onClick?: () => void;
  href?: string;
  size?: "sm" | "md";
}) {
  const content = (
    <span
      className={`inline-flex items-stretch group cursor-pointer select-none ${
        size === "sm" ? "h-9" : "h-10"
      }`}
    >
      {/* Main amber body with slanted right side */}
      <span
        className={`bg-[#e59838] group-hover:bg-[#d48422] text-white font-bold tracking-wide flex items-center transition-colors ${
          size === "sm" ? "px-4 text-xs" : "px-5 text-[13px]"
        }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
          paddingRight: "1.35rem",
        }}
      >
        {label}
      </span>
      {/* 3 angled stripes on the right */}
      <span className="flex items-stretch -ml-2 space-x-1">
        <span
          className="w-1.5 bg-[#e59838] group-hover:bg-[#d48422] transition-colors"
          style={{ transform: "skewX(-22deg)" }}
        />
        <span
          className="w-1 bg-[#e59838]/85 group-hover:bg-[#d48422] transition-colors"
          style={{ transform: "skewX(-22deg)" }}
        />
        <span
          className="w-0.5 bg-[#e59838]/70 group-hover:bg-[#d48422] transition-colors"
          style={{ transform: "skewX(-22deg)" }}
        />
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block focus:outline-none"
    >
      {content}
    </button>
  );
}

function MonaSportsLogo({ brandName }: { brandName: string }) {
  const parts = brandName.trim().split(/\s+/);
  const firstWord = parts[0] || "MONA";
  const restWords = parts.slice(1).join(" ") || "SPORTS CLUB";

  return (
    <div className="inline-flex flex-col items-center select-none">
      {/* Stylized S Ribbon Icon */}
      <svg
        viewBox="0 0 48 36"
        className="w-9 h-7 mb-0.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 4C18 4 14 9 19 14C24 19 32 19 28 27C25 32 16 32 12 29"
          stroke="#e59838"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M20 7C25 7 31 11 26 17C21 23 15 24 20 31"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex items-center gap-2 leading-none">
        <span className="text-white font-bold text-sm tracking-widest uppercase">
          {firstWord}
        </span>
        <span className="w-px h-3.5 bg-[#e59838]" />
        <div className="flex flex-col items-end leading-none">
          <span className="text-white font-extrabold text-sm tracking-wider uppercase">
            {restWords}
          </span>
          <span className="text-[#e59838] font-bold text-[8px] tracking-[0.22em] uppercase mt-0.5">
            CLUB
          </span>
        </div>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: PhongGym2Data = adaptClonedTemplateData(
    phongGym2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [activeProgramModal, setActiveProgramModal] =
    useState<PhongGym2Program | null>(null);
  const [trialBookingOpen, setTrialBookingOpen] = useState(false);
  const [selectedProgramName, setSelectedProgramName] = useState(
    data.programs?.[0]?.title || "Võ thuật"
  );
  const [trialForm, setTrialForm] = useState({
    name: "",
    phone: "",
    goal: "Giảm mỡ & Tăng thể lực",
  });
  const [trialSubmitted, setTrialSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const heroImages =
    data.hero.images && data.hero.images.length > 0
      ? data.hero.images
      : [data.hero.backgroundImage];

  const currentHeroBg =
    heroImages[heroSlideIndex % heroImages.length] || data.hero.backgroundImage;

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "contact@monasport.vn";

  const openTrialForProgram = (programTitle: string) => {
    setSelectedProgramName(programTitle);
    setTrialSubmitted(false);
    setTrialBookingOpen(true);
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialForm.name.trim() || !trialForm.phone.trim()) return;
    setTrialSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#e59838] selection:text-white">
      {/* 1. DARK TRANSLUCENT HEADER + FULLSCREEN BOXING RING HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[580px] md:min-h-[670px] bg-[#141414] text-white flex flex-col justify-between overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={currentHeroBg}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75" />

        {/* Top Translucent Navigation Bar */}
        <header className="relative z-30 border-b border-white/10 bg-black/25 backdrop-blur-[2px]">
          <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
            <a href="#trang-chu" className="focus:outline-none">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <MonaSportsLogo brandName={data.business.name} />
              )}
            </a>

            <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
              <a
                href="#trang-chu"
                className="text-[#e59838] transition-colors"
              >
                TRANG CHỦ
              </a>
              <a
                href="#loi-ich"
                className="text-white/90 hover:text-[#e59838] transition-colors"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#khoa-hoc"
                className="text-white/90 hover:text-[#e59838] transition-colors inline-flex items-center gap-1"
              >
                <span>KHÓA HỌC</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </a>
              <a
                href="#tin-tuc"
                className="text-white/90 hover:text-[#e59838] transition-colors"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                className="text-white/90 hover:text-[#e59838] transition-colors"
              >
                LIÊN HỆ
              </a>
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => openTrialForProgram("Tập thử miễn phí")}
                className="bg-[#e59838] text-white text-xs font-bold px-3 py-1.5 uppercase"
              >
                Tập thử
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-zinc-950/95 border-t border-white/10 px-5 py-4 space-y-3 text-xs font-bold uppercase tracking-wider">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#e59838]"
              >
                TRANG CHỦ
              </a>
              <a
                href="#khoa-hoc"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90"
              >
                KHÓA HỌC VÕ THUẬT &amp; THỂ HÌNH
              </a>
              <a
                href="#loi-ich"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90"
              >
                LỢI ÍCH THÀNH VIÊN
              </a>
              <a
                href="#tien-nghi"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90"
              >
                TIỆN NGHI PHÒNG TẬP
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90"
              >
                TIN TỨC
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90"
              >
                LIÊN HỆ
              </a>
            </div>
          )}
        </header>

        {/* Center-Left Hero Content */}
        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 my-auto py-16">
          <div className="max-w-xl">
            <p className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest text-white/95 mb-2">
              {data.hero.subtitle || "CÂU LẠC BỘ THỂ DỤC THỂ THAO"}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-none mb-7">
              {data.hero.title}
            </h1>
            <AmberStripeButton
              label={data.hero.ctaText || "Tìm hiểu ngay"}
              href={data.hero.ctaLink || "#khoa-hoc"}
            />
          </div>
        </div>

        {/* Bottom Slider Dots (o o •) */}
        <div className="relative z-20 pb-6 flex items-center justify-center gap-2.5">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setHeroSlideIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full border border-white transition-all cursor-pointer ${
                heroSlideIndex === idx
                  ? "bg-white scale-110"
                  : "bg-transparent opacity-65 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. 2x2 CHECKERBOARD PROGRAM GRID (WHITE BACKGROUND WITH DIAGONAL ACCENTS) */}
      <section
        id="khoa-hoc"
        className="relative py-16 md:py-20 bg-white overflow-hidden"
      >
        {/* Subtle diagonal geometric gray background shapes matching GYM002 */}
        <div
          className="hidden lg:block absolute inset-y-0 right-1/4 w-96 bg-zinc-100/80 pointer-events-none"
          style={{ transform: "skewX(-12deg)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-12 md:space-y-16">
          {/* Row 1: First 2 programs ([Text | Athlete Photo] + [Text | Athlete Photo]) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            {data.programs.slice(0, 2).map((prog) => (
              <div
                key={prog.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                <div className="sm:col-span-6 space-y-3.5">
                  <h2 className="text-2xl sm:text-[26px] font-normal text-zinc-900">
                    {prog.title}
                  </h2>
                  <p className="text-[13px] text-zinc-600 leading-relaxed">
                    {prog.description}
                  </p>
                  <div className="pt-1">
                    <AmberStripeButton
                      size="sm"
                      label="Tìm hiểu thêm"
                      onClick={() => setActiveProgramModal(prog)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <div
                    onClick={() => setActiveProgramModal(prog)}
                    className="relative aspect-[4/3] overflow-hidden bg-zinc-100 cursor-pointer group"
                  >
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Next 2 programs ([Athlete Photo | Text] + [Athlete Photo | Text]) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            {data.programs.slice(2, 4).map((prog) => (
              <div
                key={prog.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                <div className="sm:col-span-6 order-2 sm:order-1">
                  <div
                    onClick={() => setActiveProgramModal(prog)}
                    className="relative aspect-[4/3] overflow-hidden bg-zinc-100 cursor-pointer group"
                  >
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6 order-1 sm:order-2 space-y-3.5">
                  <h2 className="text-2xl sm:text-[26px] font-normal text-zinc-900">
                    {prog.title}
                  </h2>
                  <p className="text-[13px] text-zinc-600 leading-relaxed">
                    {prog.description}
                  </p>
                  <div className="pt-1">
                    <AmberStripeButton
                      size="sm"
                      label="Tìm hiểu thêm"
                      onClick={() => setActiveProgramModal(prog)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DARK PUNCHING-BAG PARALLAX "LỢI ÍCH THÀNH VIÊN" */}
      <section
        id="loi-ich"
        className="relative py-16 md:py-20 bg-[#141414] text-white overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=80"
          alt="Lợi ích thành viên"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-normal text-white mb-3">
            Lợi ích thành viên
          </h2>
          <p className="text-xs sm:text-[13.5px] text-zinc-300 max-w-4xl leading-relaxed mb-7">
            {data.memberBenefitsIntro}
          </p>

          <ul className="space-y-3">
            {data.memberBenefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-[13.5px] font-semibold text-white"
              >
                <span className="w-4 h-4 rounded-full bg-[#e59838] text-black flex items-center justify-center shrink-0 mt-0.5">
                  <ChevronRight className="w-3 h-3 stroke-[3]" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. "TIỆN NGHI" SPLIT SECTION WITH 3 ANGLED PARALLELOGRAM PHOTOS */}
      <section id="tien-nghi" className="py-16 md:py-20 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-normal text-zinc-900">
                {data.business.aboutTitle || "Tiện nghi"}
              </h2>
              <div className="space-y-3 text-[13px] text-zinc-600 leading-relaxed">
                {data.business.aboutText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <AmberStripeButton
                  size="sm"
                  label="Xem thêm"
                  onClick={() => openTrialForProgram("Tham quan & Tập thử")}
                />
              </div>
            </div>

            {/* Right 3 Angled Parallelogram Facility Photos */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 px-2 sm:px-4">
                {data.facilities.map((fac) => (
                  <div
                    key={fac.id}
                    className="group relative h-64 sm:h-72 md:h-80 overflow-hidden shadow-lg bg-zinc-900 sm:-skew-x-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover sm:skew-x-6 scale-115 group-hover:scale-125 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-4 sm:skew-x-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#e59838]">
                        {fac.subtitle}
                      </p>
                      <h3 className="text-sm font-bold text-white leading-snug">
                        {fac.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK PARALLAX "HỌC VIÊN NHẬN XÉT" */}
      <section className="relative py-16 md:py-20 bg-[#141414] text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=80"
          alt="Học viên nhận xét"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-normal text-white mb-10">
            Học viên nhận xét
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.testimonials || []).map((item) => (
              <div key={item.id} className="space-y-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#e59838] bg-zinc-800">
                  <img
                    src={
                      item.avatar ||
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    }
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-bold text-[#e59838] pt-1">
                  {item.author}
                </h3>
                <p className="text-xs sm:text-[13px] italic text-zinc-200 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "TIN MỚI CẬP NHẬT" (3 MARTIAL ARTS & FITNESS NEWS CARDS) */}
      <section id="tin-tuc" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-normal text-zinc-900 mb-8">
            Tin mới cập nhật
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).map((article) => (
              <article key={article.id} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[15px] font-bold text-zinc-900 group-hover:text-[#e59838] transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK CHARCOAL 3-COLUMN FOOTER WITH DIAGONAL ACCENT */}
      <footer
        id="lien-he"
        className="relative bg-[#262626] text-zinc-300 pt-14 overflow-hidden"
      >
        {/* Subtle angled dark polygon overlay matching GYM002 footer */}
        <div
          className="hidden lg:block absolute inset-y-0 left-1/3 w-80 bg-[#1e1e1e] pointer-events-none"
          style={{ transform: "skewX(-16deg)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs sm:text-[13px]">
            {/* Column 1: THÔNG TIN LIÊN HỆ */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
                THÔNG TIN LIÊN HỆ
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-zinc-300 shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#e59838] transition-colors"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    {data.business.email.map((em, i) => (
                      <p key={i}>{em}</p>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Share2 className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span>monasportclub</span>
                </li>
              </ul>
            </div>

            {/* Column 2: LIÊN KẾT */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
                LIÊN KẾT
              </h3>
              <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-zinc-400 mb-6">
                <a
                  href="#trang-chu"
                  className="text-[#e59838] font-semibold hover:underline"
                >
                  Trang chủ
                </a>
                <a
                  href="#loi-ich"
                  className="hover:text-[#e59838] transition-colors"
                >
                  Giới thiệu
                </a>
                <a
                  href="#khoa-hoc"
                  className="hover:text-[#e59838] transition-colors"
                >
                  Khóa học
                </a>
                <a
                  href="#tin-tuc"
                  className="hover:text-[#e59838] transition-colors"
                >
                  Tin tức
                </a>
                <a
                  href="#lien-he"
                  className="hover:text-[#e59838] transition-colors"
                >
                  Liên hệ
                </a>
              </div>

              <div className="flex items-center gap-4 text-zinc-400 pt-1">
                <a
                  href="#lien-he"
                  aria-label="Facebook"
                  className="hover:text-[#e59838] transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#lien-he"
                  aria-label="Instagram"
                  className="hover:text-[#e59838] transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="#lien-he"
                  aria-label="Youtube"
                  className="hover:text-[#e59838] transition-colors"
                >
                  <Video className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 3: ĐĂNG KÝ */}
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
                ĐĂNG KÝ
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Đăng ký để nhận được thông tin mới nhất và lịch tập thử miễn phí
                từ chúng tôi.
              </p>

              {newsletterSent ? (
                <div className="bg-zinc-800 border border-[#e59838]/50 p-3 text-xs text-[#e59838] font-medium">
                  Cảm ơn bạn đã đăng ký nhận bản tin từ {data.business.name}!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newsletterEmail.trim()) return;
                    setNewsletterSent(true);
                  }}
                  className="flex items-stretch bg-white rounded-sm overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="px-3.5 bg-white text-[#e59838] hover:bg-[#e59838] hover:text-white transition-colors flex items-center justify-center border-l border-gray-200 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative z-10 bg-[#181818] py-4 text-center text-xs text-zinc-400">
          © Bản quyền thuộc về{" "}
          <span className="text-white font-semibold">{data.business.name}</span>
          . Thiết kế website bởi{" "}
          <span className="text-white font-semibold">TaviWeb</span>
        </div>
      </footer>

      {/* PROGRAM DETAIL MODAL */}
      {activeProgramModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setActiveProgramModal(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-zinc-900">
              <img
                src={activeProgramModal.image}
                alt={activeProgramModal.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveProgramModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#e59838]"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e59838]">
                  {activeProgramModal.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {activeProgramModal.title}
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-zinc-600 leading-relaxed">
                {activeProgramModal.description}
              </p>
              <div className="grid grid-cols-2 gap-3 bg-zinc-50 p-3.5 text-xs border border-gray-100">
                <div>
                  <span className="text-zinc-400 block">Lịch tập luyện:</span>
                  <strong className="text-zinc-800">
                    {activeProgramModal.schedule}
                  </strong>
                </div>
                <div>
                  <span className="text-zinc-400 block">
                    Năng lượng tiêu hao:
                  </span>
                  <strong className="text-[#e59838]">
                    {activeProgramModal.caloriesBurn}
                  </strong>
                </div>
              </div>
              <div className="space-y-2">
                {activeProgramModal.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-zinc-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e59838] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveProgramModal(null)}
                  className="text-xs font-semibold text-zinc-500 hover:text-zinc-800"
                >
                  Đóng
                </button>
                <AmberStripeButton
                  size="sm"
                  label="Đăng ký tập thử miễn phí"
                  onClick={() => {
                    const title = activeProgramModal.title;
                    setActiveProgramModal(null);
                    openTrialForProgram(title);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TRIAL BOOKING MODAL */}
      {trialBookingOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setTrialBookingOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#141414] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#e59838]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#e59838]">
                  {data.business.name}
                </p>
                <h3 className="text-lg font-bold">
                  Đăng Ký Tập Thử 3 Buổi Miễn Phí
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setTrialBookingOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e59838]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              {trialSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#e59838] mx-auto" />
                  <h4 className="text-lg font-bold text-zinc-900">
                    Đã kích hoạt vé tập thử!
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Cảm ơn <strong>{trialForm.name}</strong>. Huấn luyện viên bộ
                    môn <strong>{selectedProgramName}</strong> sẽ liên hệ qua số{" "}
                    <strong>{trialForm.phone}</strong> để sắp xếp lịch đo InBody
                    và tập thử cùng bạn.
                  </p>
                  <button
                    type="button"
                    onClick={() => setTrialBookingOpen(false)}
                    className="bg-[#e59838] text-white text-xs font-bold uppercase px-6 py-2.5"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTrialSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">
                      Bộ môn đăng ký
                    </label>
                    <select
                      value={selectedProgramName}
                      onChange={(e) => setSelectedProgramName(e.target.value)}
                      className="w-full border border-gray-200 px-3 py-2.5 bg-white text-zinc-800 focus:outline-none focus:border-[#e59838]"
                    >
                      {data.programs.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} — {p.subtitle}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên của bạn"
                      value={trialForm.name}
                      onChange={(e) =>
                        setTrialForm({ ...trialForm, name: e.target.value })
                      }
                      className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#e59838]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại nhận vé tập"
                      value={trialForm.phone}
                      onChange={(e) =>
                        setTrialForm({ ...trialForm, phone: e.target.value })
                      }
                      className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#e59838]"
                    />
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="w-full bg-[#e59838] hover:bg-[#d48422] text-white font-bold uppercase tracking-wider py-3 transition-colors cursor-pointer"
                    >
                      NHẬN VÉ TẬP THỬ NGAY
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
