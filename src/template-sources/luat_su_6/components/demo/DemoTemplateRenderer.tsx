"use client";

import React, { useState } from "react";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Search,
  ChevronDown,
  FileText,
  Briefcase,
  Users,
  Handshake,
  Globe,
  ShieldCheck,
  Send,
  X,
  Menu,
  CheckCircle2,
  Eye,
  Film,
  Droplets
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu6DefaultData,
  type LuatSu6Data,
  type LuatSu6PracticeCard,
  type LuatSu6Lawyer
} from "@/template-sources/luat_su_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LuatSu6Data = adaptClonedTemplateData(luatSu6DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedPractice, setSelectedPractice] = useState<LuatSu6PracticeCard | null>(
    null
  );
  const [selectedLawyer, setSelectedLawyer] = useState<LuatSu6Lawyer | null>(null);

  // Free consultation form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunterg@gmail.com";
  const testimonials = data.testimonials || luatSu6DefaultData.testimonials || [];
  const newsList = data.news || luatSu6DefaultData.news || [];
  const clients = data.clients || luatSu6DefaultData.clients || [];
  const activeTestimonial = testimonials[activeTestimonialIdx] || testimonials[0];

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormAddress("");
    setFormMessage("");
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  const renderFeatureIcon = (icon: string) => {
    switch (icon) {
      case "briefcase":
        return <Briefcase className="w-7 h-7 text-[#e74c3c]" />;
      case "scale":
        return <Scale className="w-7 h-7 text-[#e74c3c]" />;
      case "users":
        return <Users className="w-7 h-7 text-[#e74c3c]" />;
      case "handshake":
        return <Handshake className="w-7 h-7 text-[#e74c3c]" />;
      case "globe":
        return <Globe className="w-7 h-7 text-[#e74c3c]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#e74c3c]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#e74c3c] selection:text-white"
    >
      {/* 1. TOP UTILITY BAR + WHITE HEADER NAVBAR */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Top utility bar */}
        <div className="border-b border-stone-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-1.5 flex items-center justify-end gap-5 text-[11px] text-stone-500">
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-1.5 hover:text-[#e74c3c] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-stone-500" />
              <span>{primaryEmail}</span>
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#e74c3c] transition-colors font-medium text-stone-700"
            >
              <Phone className="w-3.5 h-3.5 text-stone-600" />
              <span>{primaryPhone}</span>
            </a>
            <div className="hidden sm:flex items-center gap-2.5 pl-2 border-l border-stone-200 text-stone-500 font-semibold">
              <a href="#top" className="hover:text-[#e74c3c]" aria-label="Facebook">
                f
              </a>
              <a href="#top" className="hover:text-[#e74c3c]" aria-label="Twitter">
                t
              </a>
              <a href="#top" className="hover:text-[#e74c3c]" aria-label="Pinterest">
                p
              </a>
              <a href="#top" className="hover:text-[#e74c3c]" aria-label="Google Plus">
                G+
              </a>
              <a href="#top" className="hover:text-[#e74c3c]" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Main White Navigation Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          {/* Pillar Logo */}
          <a href="#top" className="flex flex-col items-center group">
            <div className="w-10 h-10 flex items-center justify-center text-[#e74c3c]">
              <svg
                viewBox="0 0 64 64"
                className="w-9 h-9 stroke-current fill-none"
                strokeWidth="3.5"
              >
                <path d="M12 16h40M16 10h32M16 22v28M26 22v28M38 22v28M48 22v28M10 52h44" />
                <circle cx="16" cy="20" r="3" />
                <circle cx="48" cy="20" r="3" />
              </svg>
            </div>
            <span className="font-serif text-sm sm:text-base font-bold tracking-wider text-[#222222] uppercase leading-tight">
              {data.business.name}
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-stone-600">
            <a href="#top" className="text-[#e74c3c] transition-colors">
              TRANG CHỦ
            </a>
            <a href="#about" className="hover:text-[#e74c3c] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#practice-areas"
              className="flex items-center gap-1 hover:text-[#e74c3c] transition-colors"
            >
              <span>DỊCH VỤ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#news" className="hover:text-[#e74c3c] transition-colors">
              TIN TỨC
            </a>
            <a
              href="#free-consultation"
              className="hover:text-[#e74c3c] transition-colors"
            >
              LIÊN HỆ
            </a>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("practice-areas");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-stone-500 hover:text-[#e74c3c] transition-colors"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-[#e74c3c]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-3 text-xs font-bold uppercase tracking-wider">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#e74c3c]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#practice-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700"
            >
              DỊCH VỤ PHÁP LÝ
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700"
            >
              TIN TỨC
            </a>
            <a
              href="#free-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (WARM BEIGE/GOLD LEGAL GAVEL & BOOKS) */}
      <section className="relative overflow-hidden bg-[#cbb89d]">
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#cbb799] via-[#cbb799]/90 to-[#2b1d12]/40" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-7 space-y-4">
            <p className="font-serif text-xl sm:text-2xl text-[#d3543f] font-medium">
              {data.hero.eyebrow || "Chào mừng đến với"}
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2b2623] uppercase tracking-wide">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#4a423b] max-w-md leading-relaxed">
              {data.hero.description}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#practice-areas"}
                className="inline-block bg-[#e74c3c] hover:bg-[#cf3e2e] text-white text-xs font-bold px-6 py-2.5 rounded-sm shadow transition-colors"
              >
                {data.hero.ctaText || "Tìm hiểu ngay"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="relative z-10 pb-4 flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white shadow" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/80 bg-transparent" />
        </div>
      </section>

      {/* 3. 2-COLUMN INTRO SPLIT BANNER (RED LEFT + GRAYSCALE RIGHT) */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Red Block */}
        <div className="bg-[#e74c3c] text-white px-6 sm:px-12 lg:px-16 py-12 sm:py-14 flex flex-col justify-center">
          <div className="max-w-lg ml-auto space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-white/10 rounded shrink-0 mt-0.5">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                {data.introSplit.redTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              {data.business.aboutText?.[0] || data.introSplit.redDescription}
            </p>
          </div>
        </div>

        {/* Right Grayscale Image Block */}
        <div className="relative min-h-[240px] flex items-center justify-center overflow-hidden bg-stone-200">
          <img
            src={data.introSplit.rightBackgroundImage}
            alt={data.introSplit.rightTitle}
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-35"
          />
          <div className="absolute inset-0 bg-stone-100/65" />
          <div className="relative z-10 text-center px-6 py-12 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#333333]">
              {data.introSplit.rightTitle}
            </h3>
            <a
              href="#practice-areas"
              className="inline-block bg-[#e74c3c] hover:bg-[#cf3e2e] text-white text-xs font-bold px-6 py-2 rounded-sm shadow transition-colors"
            >
              {data.introSplit.rightCtaText}
            </a>
          </div>
        </div>
      </section>

      {/* 4. DARK FEATURE SHOWCASE (FEMALE DIRECTOR LEFT + 6 SERVICES GRID RIGHT) */}
      <section className="relative overflow-hidden bg-[#1e1a17] text-white">
        <img
          src={data.directorShowcase.backgroundImage}
          alt="Cơ sở luật sư"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181512]/95 via-[#1e1a17]/90 to-[#181512]/95" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-12 pb-12 lg:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Female Director Portrait with Name Overlay */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            <div className="relative w-64 sm:w-72 h-[370px] overflow-hidden rounded-t-lg">
              <img
                src={data.directorShowcase.directorImage}
                alt={data.directorShowcase.directorName}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-5 inset-x-0 text-center">
                <p className="font-serif text-lg font-bold text-white">
                  {data.directorShowcase.directorName}
                </p>
                <p className="text-xs text-stone-300 mt-0.5">
                  {data.directorShowcase.directorRole}
                </p>
              </div>
            </div>
          </div>

          {/* Right: 2x3 Core Services Grid */}
          <div className="lg:col-span-8 pb-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {data.directorShowcase.features.map((feat) => (
              <div key={feat.id} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{renderFeatureIcon(feat.icon)}</div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALLOUT HOTLINE DIVIDER */}
      <section className="bg-white pt-14 pb-8 px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2b2b2b]">
            {data.hotlineBanner.question}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            {data.hotlineBanner.subtext}{" "}
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="font-bold text-[#e74c3c] hover:underline"
            >
              {primaryPhone}
            </a>
          </p>

          {/* Horizontal Divider with Red Phone Icon */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <div className="h-px bg-stone-200 flex-1 max-w-xs" />
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-[#e74c3c] hover:bg-[#e74c3c] hover:text-white transition-colors"
              aria-label="Gọi ngay"
            >
              <Phone className="w-4 h-4" />
            </a>
            <div className="h-px bg-stone-200 flex-1 max-w-xs" />
          </div>
        </div>
      </section>

      {/* 6. LĨNH VỰC PHÁP LÝ (8 RED-TINTED CARDS IN 4x2 GRID) */}
      <section id="practice-areas" className="bg-white pt-4 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2b2b2b]">
              Lĩnh vực pháp lý
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.practiceAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedPractice(area)}
                className="group relative h-44 sm:h-48 overflow-hidden text-left shadow-sm focus:outline-none"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
                {/* Red Duotone Overlay matching reference */}
                <div className="absolute inset-0 bg-[#e74c3c]/75 mix-blend-multiply group-hover:bg-[#c0392b]/85 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c0392b]/90 via-[#e74c3c]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-white drop-shadow-sm">
                    {area.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. KHÁCH HÀNG NHẬN XÉT & TIN TỨC (2-COLUMN ON LIGHT GRAY #f5f5f5) */}
      <section id="news" className="bg-[#f5f5f5] py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Khách hàng nhận xét */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-[#2b2b2b]">Khách hàng nhận xét</h2>
              <div className="w-10 h-0.5 bg-[#e74c3c] mt-2" />
            </div>

            {activeTestimonial && (
              <div className="flex flex-col sm:flex-row items-start gap-6 pt-2">
                {/* Left Portrait */}
                <div className="w-28 sm:w-32 shrink-0 mx-auto sm:mx-0">
                  <img
                    src={
                      activeTestimonial.avatar ||
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    }
                    alt={activeTestimonial.author}
                    className="w-28 h-36 object-cover rounded-sm shadow-sm bg-white"
                  />
                </div>

                {/* Right Speech Box + Author */}
                <div className="flex-1 space-y-3">
                  <div className="relative bg-white p-5 shadow-sm border border-stone-200/80 text-xs text-stone-600 leading-relaxed">
                    <p>{activeTestimonial.content}</p>
                  </div>
                  <div className="pl-1">
                    <p className="font-serif text-base font-bold text-[#e74c3c]">
                      {activeTestimonial.author}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      {activeTestimonial.role || "Khách hàng"}
                    </p>
                  </div>

                  {/* Carousel Dots */}
                  <div className="flex items-center gap-2 pt-1">
                    {testimonials.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveTestimonialIdx(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          idx === activeTestimonialIdx
                            ? "bg-[#e74c3c]"
                            : "bg-stone-300 hover:bg-stone-400"
                        }`}
                        aria-label={`Nhận xét ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Tin tức */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-[#2b2b2b]">Tin tức</h2>
              <div className="w-10 h-0.5 bg-[#e74c3c] mt-2" />
            </div>

            <div className="space-y-4 pt-1">
              {newsList.slice(0, 3).map((post) => (
                <article
                  key={post.id}
                  className="flex items-start gap-4 group bg-transparent"
                >
                  <div className="w-28 sm:w-32 h-20 shrink-0 overflow-hidden bg-white shadow-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#222222] group-hover:text-[#e74c3c] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LUẬT SƯ CỦA CHÚNG TÔI (4-COLUMN TEAM GRID) */}
      <section className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2b2b2b]">
              Luật sư của chúng tôi
            </h2>
            <div className="w-10 h-0.5 bg-[#e74c3c] mx-auto mt-2.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {data.lawyerProfiles.map((lawyer) => (
              <div key={lawyer.id} className="text-center flex flex-col items-center">
                <div className="w-full aspect-[4/3] overflow-hidden bg-stone-100 mb-4 shadow-sm">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-[#2b2b2b]">
                  {lawyer.name}
                </h3>
                <p className="text-[11px] text-stone-400 mt-0.5">{lawyer.position}</p>
                <p className="text-xs text-stone-500 mt-3 leading-relaxed max-w-xs">
                  {lawyer.bio}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedLawyer(lawyer)}
                  className="mt-3 text-xs font-bold text-[#e74c3c] hover:underline"
                >
                  Thông tin cá nhân
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MIỄN PHÍ TƯ VẤN (DARK DRAMATIC FORM + FEMALE LAWYER PRESENTING) */}
      <section
        id="free-consultation"
        className="relative overflow-hidden bg-[#121629] text-white"
      >
        {/* Spotlight radial gradients matching the dark navy & burgundy glow */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 30% 35%, rgba(168, 55, 49, 0.55), rgba(15, 19, 38, 0.96) 70%)"
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-14 lg:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Form Column */}
          <div className="lg:col-span-6 pb-14 space-y-5">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                {data.consultationSection.title}
              </h2>
              <p className="text-xs text-stone-200 max-w-md mx-auto leading-relaxed">
                {data.consultationSection.subtitle}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/90 border border-emerald-500/40 rounded p-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="font-serif text-lg font-bold text-white">
                  Đã gửi yêu cầu tư vấn pháp lý!
                </p>
                <p className="text-xs text-stone-200">
                  Luật sư chuyên trách của {data.business.name} sẽ liên hệ lại với quý
                  khách qua số điện thoại trong vòng 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Họ và tên"
                  className="w-full bg-white text-stone-800 placeholder:text-stone-400 text-xs px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-white text-stone-800 placeholder:text-stone-400 text-xs px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <input
                  type="tel"
                  required
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  placeholder="Số điện thoại"
                  className="w-full bg-white text-stone-800 placeholder:text-stone-400 text-xs px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <input
                  type="text"
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  placeholder="Địa chỉ"
                  className="w-full bg-white text-stone-800 placeholder:text-stone-400 text-xs px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <textarea
                  rows={4}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Lời nhắn"
                  className="w-full bg-white text-stone-800 placeholder:text-stone-400 text-xs px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e74c3c]"
                />
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="bg-[#e74c3c] hover:bg-[#cf3e2e] text-white text-xs font-bold uppercase tracking-wider px-16 py-2.5 shadow transition-colors"
                  >
                    GỬI
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Lawyer Image Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src={data.consultationSection.lawyerImage}
              alt="Luật sư tư vấn miễn phí"
              className="w-72 sm:w-80 lg:w-96 h-[420px] object-cover object-top rounded-t-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 10. KHÁCH HÀNG CỦA CHÚNG TÔI (PARTNER LOGO STRIP) */}
      <section className="bg-white py-14 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-xl sm:text-2xl text-[#2b2b2b]">
              Khách hàng của chúng tôi
            </h2>
            <div className="w-10 h-0.5 bg-[#e74c3c] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, idx) => (
              <div
                key={client.id}
                className="border border-stone-200 py-5 px-4 flex items-center justify-center gap-2 text-stone-400 hover:border-[#e74c3c]/50 hover:text-stone-600 transition-colors"
              >
                {idx === 1 && <Droplets className="w-4 h-4 text-stone-400" />}
                {idx === 3 && <Film className="w-4 h-4 text-stone-400" />}
                {idx === 4 && <Eye className="w-4 h-4 text-stone-400" />}
                <span className="font-serif text-xs sm:text-sm font-semibold tracking-wider">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. DARK CHARCOAL FOOTER (#191919) */}
      <footer className="bg-[#191919] text-stone-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: GIỚI THIỆU */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              GIỚI THIỆU
            </h3>
            <p className="text-[11px] leading-relaxed text-stone-400">
              Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã
              giải quyết hơn 2000 trường hợp.
            </p>
            <div className="flex items-center gap-3 pt-1 text-stone-400 font-semibold">
              <a href="#top" className="hover:text-[#e74c3c]">
                f
              </a>
              <a href="#top" className="hover:text-[#e74c3c]">
                t
              </a>
              <a href="#top" className="hover:text-[#e74c3c]">
                p
              </a>
              <a href="#top" className="hover:text-[#e74c3c]">
                G+
              </a>
              <a href="#top" className="hover:text-[#e74c3c]">
                in
              </a>
            </div>
          </div>

          {/* Column 2: LIÊN HỆ */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              LIÊN HỆ
            </h3>
            <ul className="space-y-2.5 text-[11px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-stone-300 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#e74c3c]"
                >
                  {primaryPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-stone-300 shrink-0 mt-0.5" />
                <div>
                  {data.business.email.map((em) => (
                    <div key={em}>{em}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: LIÊN KẾT */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              LIÊN KẾT
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <a href="#top" className="text-[#e74c3c] hover:underline">
                Trang chủ
              </a>
              <a href="#about" className="hover:text-white">
                Giới thiệu
              </a>
              <a href="#practice-areas" className="hover:text-white">
                Dịch vụ
              </a>
              <a href="#news" className="hover:text-white">
                Tin tức
              </a>
              <a href="#free-consultation" className="hover:text-white">
                Liên hệ
              </a>
            </div>
          </div>

          {/* Column 4: ĐĂNG KÝ */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              ĐĂNG KÝ
            </h3>
            <p className="text-[11px] leading-relaxed">
              Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative flex">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email ..."
                className="w-full bg-white text-stone-800 text-xs px-3 py-2 pr-9 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 inset-y-0 px-2.5 text-[#e74c3c] hover:text-[#c0392b] flex items-center justify-center"
                aria-label="Gửi đăng ký"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {newsletterSent && (
              <p className="text-[11px] text-emerald-400">
                Cảm ơn bạn đã đăng ký bản tin pháp lý!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-[#111111] py-3.5 px-4 text-center text-[11px] text-stone-500">
          © Bản quyền thuộc về {data.business.name}. Thiết kế website chuẩn SEO.
        </div>
      </footer>

      {/* PRACTICE AREA DETAIL MODAL */}
      {selectedPractice && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedPractice(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedPractice.image}
                alt={selectedPractice.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedPractice(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#e74c3c]"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#e74c3c] px-2.5 py-0.5 rounded-sm">
                  {selectedPractice.category}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1.5">
                  {selectedPractice.title}
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {selectedPractice.description}
              </p>
              <div className="space-y-2">
                {selectedPractice.bulletPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#e74c3c] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  Đóng
                </button>
                <a
                  href="#free-consultation"
                  onClick={() => setSelectedPractice(null)}
                  className="bg-[#e74c3c] hover:bg-[#cf3e2e] text-white text-xs font-bold px-5 py-2"
                >
                  Đăng ký tư vấn ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LAWYER PROFILE MODAL */}
      {selectedLawyer && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedLawyer(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded shadow-2xl overflow-hidden p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={selectedLawyer.image}
                  alt={selectedLawyer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#e74c3c]"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2b2b2b]">
                    {selectedLawyer.name}
                  </h3>
                  <p className="text-xs text-[#e74c3c] font-semibold">
                    {selectedLawyer.position}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLawyer(null)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-stone-600 space-y-2 border-t border-stone-100 pt-3">
              <p>
                <strong>Kinh nghiệm:</strong> {selectedLawyer.experience}
              </p>
              <p>
                <strong>Học vấn:</strong> {selectedLawyer.education}
              </p>
              <p>
                <strong>Điện thoại:</strong> {selectedLawyer.phone}
              </p>
              <p>
                <strong>Email:</strong> {selectedLawyer.email}
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#free-consultation"
                onClick={() => setSelectedLawyer(null)}
                className="block w-full text-center bg-[#e74c3c] hover:bg-[#cf3e2e] text-white text-xs font-bold py-2.5"
              >
                Đặt lịch hẹn với Luật sư {selectedLawyer.name}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
