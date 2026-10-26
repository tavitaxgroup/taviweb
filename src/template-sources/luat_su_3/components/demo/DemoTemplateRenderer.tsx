"use client";

import React, { useState } from "react";
import {
  Scale,
  Gavel,
  Briefcase,
  FileText,
  ShieldCheck,
  Headphones,
  UserCheck,
  Play,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Menu,
  X,
  CheckCircle2,
  Building2,
  Award,
  MessageSquare,
  User,
  ChevronRight,
  ArrowUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu3DefaultData,
  type LuatSu3Data
} from "@/template-sources/luat_su_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function HexagonIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-[#b68c5a]"
        fill="currentColor"
      >
        <polygon points="50 3, 93 26, 93 74, 50 97, 7 74, 7 26" />
      </svg>
      <div className="relative z-10 text-white">{children}</div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: LuatSu3Data = adaptClonedTemplateData(
    luatSu3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [selectedService, setSelectedService] = useState(
    data.services?.[0]?.title || "Tư vấn pháp lý"
  );
  const [consultationDone, setConsultationDone] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const servicesList = data.services || luatSu3DefaultData.services || [];
  const processList = data.processSteps || luatSu3DefaultData.processSteps;
  const statsList = data.stats || luatSu3DefaultData.stats || [];
  const teamList = data.team || luatSu3DefaultData.team || [];
  const testimonialsList =
    data.testimonials || luatSu3DefaultData.testimonials || [];
  const newsList = data.news || luatSu3DefaultData.news || [];
  const about = data.aboutData || luatSu3DefaultData.aboutData;
  const commitments = data.commitments || luatSu3DefaultData.commitments;
  const negotiation =
    data.negotiationSection || luatSu3DefaultData.negotiationSection;

  const scrollToConsultation = (srvTitle?: string) => {
    if (srvTitle) setSelectedService(srvTitle);
    setConsultationDone(false);
    const el = document.getElementById("tu-van-mien-phi");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getServiceIcon = (idx: number) => {
    switch (idx % 6) {
      case 0:
        return <Scale className="w-6 h-6" />;
      case 1:
        return <Gavel className="w-6 h-6" />;
      case 2:
        return <FileText className="w-6 h-6" />;
      case 3:
        return <Building2 className="w-6 h-6" />;
      case 4:
        return <Award className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] font-sans selection:bg-[#b68c5a] selection:text-white">
      {/* 1. HERO + INTEGRATED HEADER + RIGHT VERTICAL BRONZE SIDEBAR */}
      <section id="trang-chu" className="relative bg-[#141414] text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[640px]">
          {/* Main Left/Center Hero Area */}
          <div className="relative flex-1 flex flex-col justify-between">
            {/* Background Law Library Image */}
            <img
              src={
                heroSlide === 0
                  ? data.hero.backgroundImage
                  : data.hero.images?.[1] || data.hero.backgroundImage
              }
              alt={data.business.name}
              className="absolute inset-0 w-full h-full object-cover opacity-35 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#141414]/80 to-[#141414]/65" />

            {/* Top Navbar */}
            <header className="relative z-20 max-w-6xl w-full mx-auto px-4 sm:px-8 pt-6 pb-4 flex items-center justify-between gap-4 border-b border-white/10">
              <a href="#trang-chu" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-[#b68c5a] bg-[#b68c5a]/15 flex items-center justify-center text-[#d4af7a]">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-serif text-base sm:text-lg font-bold tracking-wider uppercase text-white leading-none">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.25em] text-[#b68c5a] mt-0.5">
                    FIRM & ASSOCIATES
                  </span>
                </div>
              </a>

              <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-200">
                <a href="#trang-chu" className="text-[#d4af7a] font-semibold">
                  Trang Chủ
                </a>
                <a href="#gioi-thieu" className="hover:text-[#d4af7a] transition-colors">
                  Giới Thiệu
                </a>
                <a href="#dich-vu" className="hover:text-[#d4af7a] transition-colors">
                  Dịch Vụ
                </a>
                <a href="#quy-trinh" className="hover:text-[#d4af7a] transition-colors">
                  Thông Tin
                </a>
                <a href="#tin-tuc" className="hover:text-[#d4af7a] transition-colors">
                  Tin Tức
                </a>
                <a
                  href="#tu-van-mien-phi"
                  className="hover:text-[#d4af7a] transition-colors"
                >
                  Liên Hệ
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToConsultation()}
                  className="bg-[#b68c5a] hover:bg-[#9e7646] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  {data.hero.secondaryCtaText || "Đặt Ngay"}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-white"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </header>

            {mobileMenuOpen && (
              <div className="md:hidden relative z-30 bg-[#1c1c1c] px-6 py-4 space-y-2.5 text-xs border-b border-white/10">
                <a
                  href="#gioi-thieu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-stone-200 hover:text-[#d4af7a]"
                >
                  Giới Thiệu
                </a>
                <a
                  href="#dich-vu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-stone-200 hover:text-[#d4af7a]"
                >
                  Dịch Vụ Pháp Lý
                </a>
                <a
                  href="#luat-su"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-stone-200 hover:text-[#d4af7a]"
                >
                  Luật Sư Chuyên Gia
                </a>
                <a
                  href="#tin-tuc"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-stone-200 hover:text-[#d4af7a]"
                >
                  Tin Tức Mới Nhất
                </a>
              </div>
            )}

            {/* Center Hero Content */}
            <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-8 py-16 lg:py-24">
              {/* Giant Gold Watermark "THE LAW" */}
              <div className="hidden sm:block absolute top-6 left-1/3 select-none pointer-events-none opacity-25">
                <span className="block font-serif text-3xl tracking-[0.3em] text-[#d4af7a] text-center">
                  THE
                </span>
                <span className="block font-serif text-7xl lg:text-8xl font-bold tracking-widest text-[#d4af7a] leading-none">
                  LAW
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                <div className="lg:col-span-7 space-y-5">
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold leading-[1.15] text-white">
                    {data.hero.title}
                  </h1>
                  <p className="text-sm sm:text-base text-stone-200 font-medium">
                    {data.hero.subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => scrollToConsultation()}
                      className="bg-[#b68c5a] hover:bg-[#9e7646] text-white text-xs font-semibold px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
                    >
                      {data.hero.ctaText || "Liên Hệ Với Chúng Tôi"}
                    </button>
                  </div>
                </div>

                {/* Circular White Video Play Button */}
                <div className="lg:col-span-5 flex lg:justify-center">
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="w-14 h-14 rounded-full bg-white text-[#b68c5a] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer ring-8 ring-white/15"
                    aria-label="Xem video giới thiệu"
                  >
                    <Play className="w-5 h-5 fill-[#b68c5a] ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom 3-Column Bronze Feature Bar */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 bg-[#b68c5a]">
              {(data.heroPillars || luatSu3DefaultData.heroPillars).map(
                (pillar, idx) => (
                  <div
                    key={pillar.id}
                    className={`px-6 sm:px-8 py-6 flex items-center gap-4 ${
                      idx === 1
                        ? "bg-[#a87e4d]"
                        : idx === 2
                        ? "bg-[#9c7343]"
                        : "bg-[#b68c5a]"
                    }`}
                  >
                    <div className="w-11 h-11 rounded border border-white/30 flex items-center justify-center text-white shrink-0">
                      {pillar.icon === "lawyer" && <UserCheck className="w-5 h-5" />}
                      {pillar.icon === "support" && <Headphones className="w-5 h-5" />}
                      {pillar.icon === "shield" && <Scale className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-white/80 mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Vertical Bronze Sidebar (Desktop) */}
          <div className="hidden lg:flex w-20 bg-[#b68c5a] flex-col items-center justify-between border-l border-white/15 shrink-0">
            <div className="pt-7">
              <Menu className="w-5 h-5 text-white/90" />
            </div>

            <div className="flex flex-col items-center gap-8 text-[11px] font-semibold tracking-widest text-white/90 [writing-mode:vertical-rl] rotate-180">
              <a href="#tu-van-mien-phi" className="hover:text-white">
                Facebook
              </a>
              <span className="w-px h-4 bg-white/40" />
              <a href="#tu-van-mien-phi" className="hover:text-white">
                Twitter
              </a>
              <span className="w-px h-4 bg-white/40" />
              <a href="#tu-van-mien-phi" className="hover:text-white">
                Instagram
              </a>
            </div>

            <div className="w-full bg-[#1a1a1a] flex flex-col">
              <button
                onClick={() => setHeroSlide((s) => (s + 1) % 2)}
                className="py-4 flex items-center justify-center text-stone-400 hover:text-white border-b border-white/10 cursor-pointer"
                aria-label="Slide trước"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setHeroSlide((s) => (s + 1) % 2)}
                className="py-4 flex items-center justify-center text-stone-400 hover:text-white cursor-pointer"
                aria-label="Slide tiếp"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: GIỚI THIỆU ("Giữ gìn các mối quan hệ là nền tảng thành công") */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-[#f5f7f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Senior Attorney Portrait + 1500+ Badge */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden shadow-lg">
                <img
                  src={about.portraitImage}
                  alt={about.title}
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Overlapping White Card with Double Gold Border */}
              <div className="bg-white p-4 shadow-xl w-44 sm:w-48 absolute bottom-5 right-4 sm:-right-4 border border-stone-200">
                <div className="border border-[#b68c5a] p-4">
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#b68c5a]">
                    {about.badgeCount}
                  </span>
                  <span className="block font-serif text-xs sm:text-sm font-bold text-[#1e1e1e] mt-1 leading-snug">
                    {about.badgeLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-2 border-[#b68c5a] pl-3">
                <span className="text-xs font-semibold text-[#b68c5a]">
                  {about.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e1e1e] mt-1 leading-snug">
                  {data.business.aboutTitle || about.title}
                </h2>
              </div>

              {/* 2 Feature Mini Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {about.features.map((feat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-10 h-10 rounded bg-[#b68c5a]/15 text-[#b68c5a] flex items-center justify-center">
                      {i === 0 ? (
                        <Scale className="w-5 h-5" />
                      ) : (
                        <Gavel className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#1e1e1e]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-stone-500 leading-relaxed pt-1">
                {data.business.aboutText?.[0] || about.description}
              </p>

              {/* Founder Avatar + Xem Thêm Button */}
              <div className="pt-3 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <img
                    src={about.founderAvatar}
                    alt={about.founderName}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#b68c5a]"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1e1e1e]">
                      {about.founderName}
                    </h4>
                    <span className="text-[11px] text-stone-400">
                      {about.founderRole}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => scrollToConsultation()}
                  className="bg-[#b68c5a] hover:bg-[#9e7646] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Xem Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: DỊCH VỤ PHÁP LÝ (DARK BACKGROUND + 3x2 WHITE DOUBLE-BORDERED CARDS) */}
      <section
        id="dich-vu"
        className="py-16 lg:py-24 bg-[#181818] text-white relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80"
          alt="Dịch vụ pháp lý"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#b68c5a]">
              Dịch vụ pháp lý
            </span>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Dịch vụ pháp lý chuyên nghiệp, đáng tin cậy và hiệu quả
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv, idx) => (
              <div
                key={srv.id}
                onClick={() => scrollToConsultation(srv.title)}
                className="bg-white text-[#1e1e1e] p-2.5 shadow-lg group cursor-pointer hover:-translate-y-1 transition-all"
              >
                <div className="border border-stone-200 group-hover:border-[#b68c5a] p-6 text-center transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <HexagonIcon>{getServiceIcon(idx)}</HexagonIcon>
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#1e1e1e] group-hover:text-[#b68c5a] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-2.5 text-[11px] text-stone-500 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: QUÁ TRÌNH LÀM VIỆC (4 STAGGERED HEXAGON STEPS) */}
      <section id="quy-trinh" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-lg mx-auto mb-14">
            <span className="text-xs font-semibold text-[#b68c5a]">
              Quá trình làm việc
            </span>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-[#1e1e1e] leading-snug">
              Đảm bảo chất lượng hiệu quả của dịch vụ luật sư
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {processList.map((step, idx) => {
              const stepIcon =
                idx === 0 ? (
                  <Briefcase className="w-5 h-5" />
                ) : idx === 1 ? (
                  <FileText className="w-5 h-5" />
                ) : idx === 2 ? (
                  <Gavel className="w-5 h-5" />
                ) : (
                  <Scale className="w-5 h-5" />
                );

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-start sm:items-start space-y-4"
                >
                  {!step.staggered ? (
                    <>
                      <div className="self-start">
                        <HexagonIcon>{stepIcon}</HexagonIcon>
                      </div>
                      <div>
                        <h3 className="font-serif text-sm font-bold text-[#1e1e1e]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="font-serif text-sm font-bold text-[#1e1e1e]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="self-start pt-1">
                        <HexagonIcon>{stepIcon}</HexagonIcon>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTION: KHÁCH HÀNG CHỌN CHÚNG TÔI + FLOATING 20k+ STATS BAR */}
      <section className="pt-16 pb-24 bg-[#f5f7f8] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Commitments */}
            <div className="lg:col-span-6 space-y-5 lg:pl-8">
              <div className="border-l-2 border-[#b68c5a] pl-3">
                <span className="text-xs font-semibold text-[#b68c5a]">
                  {commitments.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e1e1e] mt-1 leading-snug">
                  {commitments.title}
                </h2>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                {commitments.description}
              </p>

              <div className="space-y-4 pt-2">
                {commitments.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-stone-200 text-[#b68c5a] flex items-center justify-center shrink-0">
                      {index === 0 ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Scale className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-bold text-[#1e1e1e]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Handshake Photo */}
            <div className="lg:col-span-6">
              <img
                src={commitments.image}
                alt={commitments.title}
                className="w-full h-[360px] sm:h-[420px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Floating White 4-Stat Card Overlapping Next Dark Section */}
        <div className="max-w-4xl mx-auto px-4 relative z-20 -mb-36 pt-12">
          <div className="bg-white shadow-xl border border-stone-100 py-7 px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {statsList.map((st) => (
              <div key={st.id}>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#b68c5a]">
                  {st.number}
                </div>
                <div className="text-xs font-semibold text-[#1e1e1e] mt-1">
                  {st.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: LUẬT SƯ CHUYÊN GIA (DARK SECTION + VERTICAL ROTATED LABELS) */}
      <section id="luat-su" className="pt-28 pb-20 bg-[#161616] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-md mx-auto mb-12">
            <span className="text-xs font-semibold text-[#b68c5a]">
              Giới thiệu luật sư
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-white">
              Luật sư chuyên gia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamList.map((lawyer) => (
              <div
                key={lawyer.id}
                onClick={() => scrollToConsultation(`Luật sư ${lawyer.name}`)}
                className="relative h-80 sm:h-96 bg-[#242424] overflow-hidden group cursor-pointer"
              >
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                {/* Vertical Rotated Name on Top-Left matching LUAT006 */}
                <div className="absolute top-5 left-4 [writing-mode:vertical-rl] rotate-180 text-white">
                  <span className="font-serif text-sm font-bold tracking-wider block">
                    {lawyer.name}
                  </span>
                  <span className="text-[10px] text-[#d4af7a] block">
                    {lawyer.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER EMBLEM BAR */}
      <div className="py-10 bg-[#f2f4f6] border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center">
          {(data.clients || luatSu3DefaultData.clients || []).map((cl, i) => (
            <div
              key={cl.id}
              className="py-2 px-3 border border-stone-300/80 text-stone-500 font-serif text-xs font-bold tracking-widest uppercase"
            >
              <span className="block text-[9px] text-stone-400 font-sans tracking-[0.2em]">
                ĐỐI TÁC PHÁP LÝ 0{i + 1}
              </span>
              <span>{cl.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SECTION: TƯ VẤN MIỄN PHÍ FORM (LEFT GOLD BOX) + LỊCH SỬ / THỎA HIỆP (RIGHT) */}
      <section id="tu-van-mien-phi" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Gold Consultation Form Box */}
            <div className="lg:col-span-5 bg-[#b68c5a] p-7 sm:p-8 text-white flex flex-col justify-between shadow-lg">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
                  Tư vấn miễn phí
                </h2>

                {consultationDone ? (
                  <div className="py-10 text-center space-y-3 bg-[#9c7343]/50 p-5 rounded">
                    <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
                    <h3 className="font-serif text-lg font-bold">
                      Đã gửi yêu cầu tư vấn!
                    </h3>
                    <p className="text-xs text-white/90 leading-relaxed">
                      Luật sư phụ trách mảng <strong>{selectedService}</strong> của{" "}
                      <strong>{data.business.name}</strong> sẽ liên hệ lại với quý khách ngay.
                    </p>
                    <button
                      onClick={() => setConsultationDone(false)}
                      className="bg-white text-[#1e1e1e] text-xs font-bold px-5 py-2.5 rounded cursor-pointer"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setConsultationDone(true);
                    }}
                    className="space-y-3.5"
                  >
                    <input
                      type="text"
                      required
                      placeholder="HỌ TÊN*"
                      className="w-full bg-[#9a7243]/80 placeholder:text-white/75 text-white text-xs px-4 py-3 focus:outline-none border border-white/15"
                    />
                    <input
                      type="email"
                      required
                      placeholder="EMAIL*"
                      className="w-full bg-[#9a7243]/80 placeholder:text-white/75 text-white text-xs px-4 py-3 focus:outline-none border border-white/15"
                    />
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#9a7243]/80 text-white text-xs px-4 py-3 focus:outline-none border border-white/15"
                    >
                      {servicesList.map((s) => (
                        <option
                          key={s.id}
                          value={s.title}
                          className="text-[#1e1e1e] bg-white"
                        >
                          CHỌN DỊCH VỤ: {s.title.toUpperCase()}
                        </option>
                      ))}
                    </select>
                    <textarea
                      rows={4}
                      required
                      placeholder="NỘI DUNG*"
                      className="w-full bg-[#9a7243]/80 placeholder:text-white/75 text-white text-xs px-4 py-3 focus:outline-none border border-white/15"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-stone-100 text-[#1e1e1e] font-serif text-xs font-bold py-3.5 shadow-sm transition-colors cursor-pointer"
                    >
                      Gửi Thông Tin
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Lịch sử / Thỏa hiệp với luật sư với giá tốt nhất + Video Box */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="border-l-2 border-[#b68c5a] pl-3">
                  <span className="text-xs font-semibold text-[#b68c5a]">
                    {negotiation.eyebrow}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e1e1e] mt-1 leading-snug">
                    {negotiation.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 text-xs text-stone-500 leading-relaxed">
                  <p>{negotiation.col1Text}</p>
                  <p>{negotiation.col2Text}</p>
                </div>
              </div>

              {/* Video Thumbnail with Play Button */}
              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative h-56 sm:h-64 overflow-hidden group cursor-pointer shadow-md"
              >
                <img
                  src={negotiation.videoThumbnail}
                  alt={negotiation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#b68c5a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-[#b68c5a] ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: KHÁCH HÀNG ĐÁNH GIÁ (DARK SECTION + 3 CHARCOAL CARDS) */}
      <section className="py-16 lg:py-24 bg-[#181818] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-md mx-auto mb-12">
            <span className="text-xs font-semibold text-[#b68c5a]">Khách hàng</span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-white">
              Khách hàng đánh giá
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsList.map((item) => (
              <div
                key={item.id}
                className="bg-[#242424] border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border border-[#b68c5a]"
                    />
                    <div>
                      <h3 className="font-serif text-sm font-bold text-white">
                        {item.author}
                      </h3>
                      <span className="text-[11px] text-stone-400">
                        {item.role || "Khách hàng"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#b68c5a]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b68c5a]" />
                    ))}
                  </div>
                  <span className="font-serif text-3xl text-[#b68c5a] leading-none">
                    ”
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION: TIN TỨC MỚI NHẤT + GOLD NEWSLETTER BANNER + DARK FOOTER */}
      <section id="tin-tuc" className="pt-16 pb-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-md mx-auto mb-12">
            <span className="text-xs font-semibold text-[#b68c5a]">
              Tin tức & blog
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#1e1e1e]">
              Tin tức mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.map((post) => (
              <article
                key={post.id}
                onClick={() => scrollToConsultation(post.title)}
                className="bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2.5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#b68c5a]">
                    ▣ {post.category || "PHÁP LUẬT"}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#1e1e1e] group-hover:text-[#b68c5a] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3 h-3 text-[#b68c5a]" />
                      Ban biên tập
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-[#b68c5a]" />3 Bình luận
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Overlapping Gold Newsletter Banner */}
          <div className="mt-14 -mb-20 relative z-20 bg-[#b68c5a] px-6 sm:px-10 py-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Đăng ký nhận tin tức
            </h3>

            {newsletterDone ? (
              <span className="text-xs font-semibold text-white bg-black/30 px-4 py-2 rounded-full">
                ✓ Đã đăng ký nhận bản tin pháp lý định kỳ!
              </span>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="flex items-center gap-2 w-full md:w-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email..."
                  className="bg-white text-[#1e1e1e] text-xs px-4 py-3 rounded-full w-full md:w-64 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#181818] hover:bg-black text-white text-xs font-semibold px-6 py-3 rounded-full shrink-0 cursor-pointer"
                >
                  Đăng Ký
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* DARK 4-COLUMN FOOTER */}
      <footer className="bg-[#111111] text-stone-400 pt-24 pb-8 text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Brand & Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#b68c5a] flex items-center justify-center text-[#b68c5a]">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="font-serif text-base font-bold text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="font-bold text-white text-sm">{primaryPhone}</p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b68c5a] shrink-0" />
                <span>{primaryEmail}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b68c5a] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
            </div>

            {/* Col 2: Dịch vụ */}
            <div>
              <h4 className="font-serif text-white text-sm font-bold mb-4">
                Dịch vụ
              </h4>
              <ul className="space-y-2">
                {servicesList.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <a
                      href="#dich-vu"
                      className="inline-flex items-center gap-1 hover:text-[#b68c5a] transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-[#b68c5a]" />
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Bài viết */}
            <div>
              <h4 className="font-serif text-white text-sm font-bold mb-4">
                Bài viết
              </h4>
              <ul className="space-y-2.5">
                {newsList.map((n) => (
                  <li key={n.id}>
                    <a
                      href="#tin-tuc"
                      className="hover:text-[#b68c5a] transition-colors line-clamp-2"
                    >
                      {n.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Dự án (2x3 Gallery) */}
            <div>
              <h4 className="font-serif text-white text-sm font-bold mb-4">
                Dự án
              </h4>
              <div className="grid grid-cols-3 gap-1.5">
                {(data.footerGallery || luatSu3DefaultData.footerGallery).map(
                  (img, i) => (
                    <div key={i} className="h-14 overflow-hidden">
                      <img
                        src={img}
                        alt={`Hồ sơ ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <span>Chính sách bảo mật • Điều khoản pháp lý</span>
            <span>
              © Bản quyền thuộc về <strong className="text-stone-300">{data.business.name}</strong>
            </span>
            <a
              href="#trang-chu"
              className="w-8 h-8 rounded-full bg-[#b68c5a] text-white flex items-center justify-center hover:bg-[#9e7646]"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO INTRO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#1c1c1c] border border-[#b68c5a] max-w-lg w-full p-6 text-white space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-serif font-bold text-base text-[#d4af7a]">
                Hồ Sơ Năng Lực {data.business.name}
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-stone-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={negotiation.videoThumbnail}
              alt="Hồ sơ năng lực"
              className="w-full h-56 object-cover"
            />
            <p className="text-xs text-stone-300 leading-relaxed">
              Với hơn 1500+ hồ sơ tranh tụng và tư vấn doanh nghiệp thành công, đội ngũ luật sư{" "}
              <strong>{data.business.name}</strong> luôn đặt lợi ích hợp pháp của thân chủ lên hàng đầu.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  scrollToConsultation();
                }}
                className="bg-[#b68c5a] text-white text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer"
              >
                Đặt lịch tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
