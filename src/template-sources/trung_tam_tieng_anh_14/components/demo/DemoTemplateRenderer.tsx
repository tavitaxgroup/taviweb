"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ChevronDown,
  Award,
  BrainCircuit,
  HeartHandshake,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Send,
  GraduationCap,
  BookOpen,
  Sparkles,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
  Compass,
  Gem,
  Boxes,
  Clock,
  Building2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  TrungTamTiengAnh14Data,
  BlueUniMajorItem,
  BlueUniScholarshipTier,
  BlueUniAdmissionNotice,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: TrungTamTiengAnh14Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMajor, setSelectedMajor] = useState<BlueUniMajorItem | null>(
    null
  );
  const [activeScholarshipTier, setActiveScholarshipTier] =
    useState<BlueUniScholarshipTier>(data.scholarshipBanner.tiers[3]);
  const [showScholarshipModal, setShowScholarshipModal] = useState(false);
  const [selectedAdmission, setSelectedAdmission] =
    useState<BlueUniAdmissionNotice | null>(null);
  const [activeShareIndex, setActiveShareIndex] = useState(0);

  // Scholarship form state
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantMajor, setApplicantMajor] = useState(
    data.majorsSection.items[0]?.title || "Điều dưỡng Quốc tế"
  );
  const [applicantGpa, setApplicantGpa] = useState("");
  const [scholarshipSubmitted, setScholarshipSubmitted] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const filteredMajors = data.majorsSection.items.filter(
    (item) =>
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredAdmission =
    data.admissionsSection.notices.find((n) => n.isFeatured) ||
    data.admissionsSection.notices[0];
  const secondaryAdmissions = data.admissionsSection.notices.filter(
    (n) => n.id !== featuredAdmission?.id
  );

  const currentTestimonial =
    data.sharingCorner.testimonials[activeShareIndex] ||
    data.sharingCorner.testimonials[0];

  const handleOpenScholarshipWithTier = (tier: BlueUniScholarshipTier) => {
    setActiveScholarshipTier(tier);
    setScholarshipSubmitted(false);
    setShowScholarshipModal(true);
  };

  const handleSubmitScholarship = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantPhone.trim()) return;
    setScholarshipSubmitted(true);
  };

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  const renderVisionIcon = (type: "vision" | "mission" | "motto") => {
    switch (type) {
      case "vision":
        return <Compass className="w-11 h-11 text-white stroke-[1.75]" />;
      case "mission":
        return <Gem className="w-11 h-11 text-white stroke-[1.75]" />;
      case "motto":
        return <Boxes className="w-11 h-11 text-white stroke-[1.75]" />;
    }
  };

  const renderGraduateIcon = (type: "expertise" | "skills" | "ethics") => {
    switch (type) {
      case "expertise":
        return (
          <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
            <Award className="w-10 h-10 text-[#d9002a]" />
          </div>
        );
      case "skills":
        return (
          <div className="w-20 h-20 rounded-full bg-sky-50 border-2 border-sky-300 flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
            <BrainCircuit className="w-10 h-10 text-[#0068b5]" />
          </div>
        );
      case "ethics":
        return (
          <div className="w-20 h-20 rounded-full bg-teal-50 border-2 border-teal-300 flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-105 transition-transform">
            <HeartHandshake className="w-10 h-10 text-[#0db4b9]" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0068b5] selection:text-white">
      {/* 1. OCEAN BLUE TOPBAR (#0068b5) */}
      <div className="bg-[#0068b5] text-white text-xs py-2 border-b border-[#005596]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-white/95">
              <MapPin className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              <span>{data.header.address}</span>
            </span>
            <a
              href={`tel:${data.business.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-white/95 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              <span>{data.business.phone}</span>
            </a>
            <a
              href={`mailto:${data.business.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-white/95 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              <span>{data.business.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-sky-100 hidden sm:inline mr-1">
              Kết nối BlueUni:
            </span>
            {["f", "ig", "tw", "yt"].map((soc) => (
              <button
                key={soc}
                type="button"
                onClick={() => setShowScholarshipModal(true)}
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-[#d9002a] text-white flex items-center justify-center text-[11px] font-bold uppercase transition-colors"
                title={`Kênh ${soc.toUpperCase()} BlueUni`}
              >
                {soc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STICKY WHITE NAVBAR WITH SEARCH BOX */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Crest Logo + Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0068b5] to-[#004a82] p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full border-2 border-dashed border-sky-200/80 flex flex-col items-center justify-center text-white">
                <GraduationCap className="w-5 h-5 text-amber-300" />
                <span className="text-[8px] font-extrabold tracking-tighter uppercase leading-none mt-0.5">
                  BLUEUNI
                </span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-wider uppercase text-[#d9002a]">
                {data.header.brandSub}
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#0068b5] tracking-tight group-hover:text-[#d9002a] transition-colors">
                {data.business.name}
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {data.header.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-wide text-slate-700 hover:text-[#0068b5] transition-colors py-1"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                )}
              </a>
            ))}
          </nav>

          {/* Search Box */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="relative flex items-center w-full sm:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="w-full pl-3.5 pr-9 py-1.5 text-xs border border-slate-300 rounded-l bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0068b5] text-slate-800"
              />
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("chuyen-nganh");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0068b5] hover:bg-[#005291] text-white px-3 py-1.5 rounded-r border border-[#0068b5] flex items-center justify-center transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. GRADUATION HERO + 3 FLUSH RED-BLUE-RED VISION/MISSION/MOTTO CARDS */}
      <section id="gioi-thieu" className="relative">
        {/* Hero Image Container */}
        <div className="relative h-[440px] sm:h-[520px] lg:h-[560px] w-full overflow-hidden bg-slate-900">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center opacity-90 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-transparent" />

          {/* Dark Semi-Transparent Center-Left Box matching TA017 */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center pb-12 sm:pb-20">
            <div className="bg-slate-950/65 backdrop-blur-sm border-l-4 border-[#d9002a] px-6 sm:px-10 py-7 sm:py-9 max-w-2xl text-white shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0068b5] text-white text-[11px] font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{data.hero.badge}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-wide leading-tight text-white drop-shadow">
                {data.hero.title}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-100 font-medium italic">
                “{data.hero.subtitle}”
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowScholarshipModal(true)}
                  className="px-6 py-2.5 bg-[#d9002a] hover:bg-[#b80023] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded shadow-lg transition-all cursor-pointer"
                >
                  {data.hero.primaryCta}
                </button>
                <a
                  href="#chuyen-nganh"
                  className="px-6 py-2.5 bg-white/15 hover:bg-white/25 border border-white/40 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-all"
                >
                  {data.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Overlapping Red - Blue - Red Cards directly below Hero */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-sm overflow-hidden">
            {data.visionBanner.map((card) => {
              const isBlue = card.bgColor === "blue";
              return (
                <div
                  key={card.id}
                  className={`${
                    isBlue ? "bg-[#0072bc]" : "bg-[#d9002a]"
                  } text-white px-7 py-8 sm:py-10 flex flex-col items-center text-center transition-transform duration-300 hover:brightness-105`}
                >
                  <div className="mb-4 p-3 rounded-full bg-white/10 border border-white/20">
                    {renderVisionIcon(card.iconType)}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-3">
                    {card.title}
                  </h2>
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-white/95">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4-COLUMN "CHUYÊN NGÀNH ĐÀO TẠO" SECTION */}
      <section id="chuyen-nganh" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#0068b5]">
              {data.majorsSection.heading}
            </h2>
            <div className="w-16 h-1 bg-[#d9002a] mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.majorsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredMajors.map((major) => (
              <div
                key={major.id}
                onClick={() => setSelectedMajor(major)}
                className="group relative h-64 sm:h-72 rounded overflow-hidden shadow-md hover:shadow-xl border border-slate-200 cursor-pointer bg-slate-900"
              >
                <img
                  src={major.image}
                  alt={major.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Top code badge */}
                <div className="absolute top-3 right-3 bg-[#0068b5]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                  Mã: {major.code}
                </div>

                {/* Bottom White Gradient Overlay matching TA017 */}
                <div className="absolute inset-x-0 bottom-0 pt-14 pb-4 px-4 bg-gradient-to-t from-white via-white/95 to-transparent text-center">
                  <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 group-hover:text-[#0068b5] transition-colors">
                    {major.title}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#d9002a]">
                    <span>Xem chương trình đào tạo</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROMOTIONAL SCHOLARSHIP BANNER ("Thông báo HỌC BỔNG KHUYẾN HỌC BLUEUNI") */}
      <section
        id="hoi-thao"
        className="relative overflow-hidden bg-gradient-to-r from-[#7a0018] via-[#b80024] to-[#5e0012] text-white py-12 sm:py-16"
      >
        {/* Decorative radial sparkles */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #ffdf70 1.5px, transparent 1.5px), radial-gradient(circle at 75% 25%, #ffffff 1.5px, transparent 1.5px), radial-gradient(circle at 45% 80%, #ff9900 2px, transparent 2px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 8 cols: Ribbon Headings + 4 Circular Turquoise Badges (25%, 50%, 75%, 100%) */}
            <div className="lg:col-span-8 text-center lg:text-left">
              {/* Orange Ribbon Notice Tag + Main Scholarship Ribbon */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 mb-4">
                <span className="bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase px-4 py-1 rounded-full shadow-md tracking-wider">
                  {data.scholarshipBanner.noticeTag}
                </span>
                <span className="text-amber-300 text-xs sm:text-sm font-semibold">
                  • Quỹ Khuyến Học Quốc Tế BlueUni
                </span>
              </div>

              <div className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979] inline-block px-6 py-2.5 rounded shadow-lg border border-amber-300/50 mb-4">
                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-wider text-white drop-shadow">
                  {data.scholarshipBanner.heading}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed mb-7 mx-auto lg:mx-0">
                {data.scholarshipBanner.subtext}
              </p>

              {/* 4 Turquoise Circular Badges (#0db4b9) with White Borders matching TA017 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-xl mx-auto lg:mx-0">
                {data.scholarshipBanner.tiers.map((tier) => {
                  const isSelected = activeScholarshipTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => handleOpenScholarshipWithTier(tier)}
                      className={`group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5`}
                    >
                      <div
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0db4b9] border-4 ${
                          isSelected
                            ? "border-amber-300 ring-4 ring-amber-400/40"
                            : "border-white"
                        } shadow-xl flex flex-col items-center justify-center text-white group-hover:bg-[#099ca1] transition-all`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-100">
                          Học bổng
                        </span>
                        <span className="text-2xl sm:text-3xl font-black leading-none my-0.5 drop-shadow">
                          {tier.percent}
                        </span>
                        <span className="text-[9px] font-semibold bg-white/20 px-2 py-0.5 rounded-full mt-0.5">
                          {tier.quota}
                        </span>
                      </div>
                      <span className="mt-2 text-xs font-bold text-amber-200 group-hover:text-white transition-colors">
                        {tier.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Tier Quick Preview Box */}
              <div className="mt-6 bg-black/30 backdrop-blur-xs border border-white/20 rounded p-4 text-left max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase">
                    Đang chọn: {activeScholarshipTier.label} (
                    {activeScholarshipTier.percent})
                  </div>
                  <p className="text-xs text-white/90 mt-0.5">
                    Điều kiện: {activeScholarshipTier.condition}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowScholarshipModal(true)}
                  className="shrink-0 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs uppercase rounded shadow cursor-pointer transition-colors"
                >
                  Ứng tuyển ngay
                </button>
              </div>
            </div>

            {/* Right 4 cols: Female Advisor with Headset Portrait Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 sm:w-72">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-400/40 to-cyan-400/30 blur-md" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/80 shadow-2xl bg-slate-900">
                  <img
                    src={data.scholarshipBanner.advisorImage}
                    alt="Chuyên viên tư vấn học bổng BlueUni"
                    className="w-full h-72 sm:h-80 object-cover object-top"
                  />
                  <div className="bg-[#0068b5] p-3.5 text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Tư Vấn Xét Duyệt Hồ Sơ 24/7
                    </div>
                    <div className="text-sm font-extrabold text-white mt-0.5">
                      Hotline: {data.business.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 3-COLUMN "SINH VIÊN SAU TỐT NGHIỆP" SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#0068b5]">
              {data.graduateSection.heading}
            </h2>
            <div className="w-16 h-1 bg-[#d9002a] mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.graduateSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.graduateSection.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group text-center px-6 py-8 rounded-lg border border-slate-100 bg-white hover:border-[#0068b5]/30 hover:shadow-xl transition-all"
              >
                {renderGraduateIcon(pillar.iconType)}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-[#d9002a] uppercase tracking-wide mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#0068b5] text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0db4b9]" />
                  <span>{pillar.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ASYMMETRIC "THÔNG TIN TUYỂN SINH" SECTION ON #f2f2f2 */}
      <section id="tuyen-sinh" className="py-16 sm:py-20 bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#0068b5]">
              {data.admissionsSection.heading}
            </h2>
            <div className="w-16 h-1 bg-[#d9002a] mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600">
              {data.admissionsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 cols: Large Featured Classroom Photo with Bottom Dark Caption Bar */}
            {featuredAdmission && (
              <div
                onClick={() => setSelectedAdmission(featuredAdmission)}
                className="lg:col-span-6 group relative rounded overflow-hidden shadow-md bg-slate-900 min-h-[320px] sm:min-h-[380px] cursor-pointer"
              >
                <img
                  src={featuredAdmission.image}
                  alt={featuredAdmission.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#d9002a] text-white text-[11px] font-bold uppercase px-3 py-1 rounded shadow">
                  {featuredAdmission.category}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 backdrop-blur-xs p-5 text-white border-t border-white/15">
                  <div className="flex items-center gap-3 text-xs text-sky-300 mb-1.5">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredAdmission.date}
                    </span>
                    <span>•</span>
                    <span>{featuredAdmission.intake}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold group-hover:text-amber-300 transition-colors">
                    {featuredAdmission.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1.5 line-clamp-2">
                    {featuredAdmission.excerpt}
                  </p>
                </div>
              </div>
            )}

            {/* Right 6 cols: 2 Stacked Horizontal White Cards matching TA017 */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-5">
              {secondaryAdmissions.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setSelectedAdmission(notice)}
                  className="group bg-white rounded shadow-sm hover:shadow-md border border-slate-200 overflow-hidden flex flex-col sm:flex-row cursor-pointer transition-all flex-1"
                >
                  <div className="sm:w-48 md:w-52 h-44 sm:h-auto shrink-0 overflow-hidden bg-slate-100 relative">
                    <img
                      src={notice.image}
                      alt={notice.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#0068b5] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {notice.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0068b5]" />
                        <span>{notice.intake}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#0068b5] transition-colors line-clamp-2 uppercase">
                        {notice.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {notice.excerpt}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#d9002a]">
                      <span>Xem chi tiết điều kiện xét tuyển</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CHALKBOARD BOOKS & RED APPLE "GÓC CHIA SẺ" BANNER (#165b33) */}
      <section className="relative bg-[#165b33] text-white py-14 sm:py-16 overflow-hidden border-y-4 border-[#0f4224]">
        {/* Subtle chalkboard texture */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 5 cols: Stack of Books & Red Apple on Chalkboard Desk */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border-4 border-white/25 shadow-2xl bg-[#0f4224]">
                <img
                  src={data.sharingCorner.bookDecorImage}
                  alt="Góc chia sẻ học viên và phụ huynh BlueUni"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f4224]/90 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#d9002a] flex items-center justify-center text-white shadow">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-300 uppercase">
                        Cộng đồng Du học sinh BlueUni
                      </div>
                      <div className="text-xs text-emerald-100">
                        Hơn 4.500+ học viên đã xuất cảnh thành công
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Centered "GÓC CHIA SẺ", Circular Avatar, Italic Testimonial Quote */}
            <div className="lg:col-span-7 text-center px-2 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white mb-2">
                {data.sharingCorner.heading}
              </h2>
              <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />

              {currentTestimonial && (
                <div className="flex flex-col items-center">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                  />
                  <div className="flex items-center gap-1 text-amber-300 mb-3">
                    {Array.from({ length: currentTestimonial.rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-300 text-amber-300"
                        />
                      )
                    )}
                  </div>
                  <p className="text-sm sm:text-base italic text-emerald-50 leading-relaxed max-w-2xl mb-5">
                    “{currentTestimonial.quote}”
                  </p>
                  <div className="font-extrabold text-base text-amber-300">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-xs text-emerald-100 mt-0.5">
                    {currentTestimonial.role}
                  </div>
                  <div className="mt-1 inline-block px-3 py-0.5 rounded-full bg-white/15 text-[11px] font-semibold text-white">
                    {currentTestimonial.program}
                  </div>
                </div>
              )}

              {/* Switcher Dots + Arrows */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveShareIndex((prev) =>
                      prev === 0
                        ? data.sharingCorner.testimonials.length - 1
                        : prev - 1
                    )
                  }
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Chia sẻ trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  {data.sharingCorner.testimonials.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveShareIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === activeShareIndex
                          ? "w-7 bg-amber-400"
                          : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Chọn chia sẻ ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveShareIndex(
                      (prev) =>
                        (prev + 1) % data.sharingCorner.testimonials.length
                    )
                  }
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Chia sẻ tiếp theo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 3-COLUMN "TIN TỨC" GRID */}
      <section id="tin-tuc" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#0068b5]">
              {data.newsSection.heading}
            </h2>
            <div className="w-16 h-1 bg-[#d9002a] mx-auto mt-2.5 mb-3 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600">
              {data.newsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.newsSection.posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0068b5] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#d9002a]" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0068b5] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowScholarshipModal(true)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0068b5] hover:text-[#d9002a] transition-colors cursor-pointer"
                    >
                      <span>Đọc tiếp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OCEAN BLUE 4-COLUMN FOOTER (#0068b5) + DARK COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-[#0068b5] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: VĂN PHÒNG CHÍNH */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/20">
                {data.footer.officeTitle}
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed mb-4">
                {data.business.tagline}
              </p>
              <ul className="space-y-2.5 text-xs text-sky-50">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                  <a
                    href={`tel:${data.business.phone.replace(/\s+/g, "")}`}
                    className="hover:text-amber-300 font-bold"
                  >
                    {data.business.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                  <a
                    href={`mailto:${data.business.email}`}
                    className="hover:text-amber-300"
                  >
                    {data.business.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: NGÀNH HỌC */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/20">
                {data.footer.majorsTitle}
              </h3>
              <ul className="space-y-2.5 text-xs text-sky-100">
                {data.majorsSection.items.map((major) => (
                  <li key={major.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedMajor(major)}
                      className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                      <span>
                        {major.title} ({major.code})
                      </span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => setShowScholarshipModal(true)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-left text-amber-200 font-semibold cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>Đào tạo Tiếng Nhật JLPT / Tiếng Anh IELTS</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: TIN MỚI NHẤT (with thumbnails) */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/20">
                {data.footer.latestNewsTitle}
              </h3>
              <div className="space-y-3">
                {data.newsSection.posts.slice(0, 2).map((post) => (
                  <div key={post.id} className="flex items-start gap-3 group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-12 rounded object-cover shrink-0 border border-white/20"
                    />
                    <div className="text-xs">
                      <a
                        href="#tin-tuc"
                        className="font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug"
                      >
                        {post.title}
                      </a>
                      <span className="block text-[10px] text-sky-200 mt-0.5">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/20">
                {data.footer.subscribeTitle}
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed mb-4">
                {data.footer.subscribeDesc}
              </p>
              <form onSubmit={handleSubscribeNewsletter} className="mb-4">
                <div className="flex items-center">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Nhập email của bạn..."
                    className="w-full px-3 py-2 text-xs bg-white text-slate-900 rounded-l focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#d9002a] hover:bg-[#b50022] text-white px-3.5 py-2 rounded-r flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Gửi đăng ký"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {newsletterSubscribed && (
                  <p className="text-[11px] text-amber-300 font-semibold mt-1.5">
                    ✓ Đăng ký nhận bản tin học bổng BlueUni thành công!
                  </p>
                )}
              </form>

              <div className="flex items-center gap-2.5">
                {["Facebook", "Instagram", "YouTube"].map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => setShowScholarshipModal(true)}
                    className="px-2.5 py-1 rounded bg-white/15 hover:bg-[#d9002a] text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dark Blue Copyright Bar */}
        <div className="bg-[#004e8a] py-3.5 text-center text-xs text-sky-100 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: MAJOR CURRICULUM & CAREER MODAL */}
      {selectedMajor && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-48 bg-slate-900">
              <img
                src={selectedMajor.image}
                alt={selectedMajor.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedMajor(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-[#d9002a] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="inline-block bg-[#d9002a] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded mb-1">
                  Mã ngành: {selectedMajor.code} • {selectedMajor.duration}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  Chuyên ngành {selectedMajor.title}
                </h3>
                <p className="text-xs text-sky-200 mt-0.5">
                  Bằng cấp: {selectedMajor.degree}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedMajor.summary}
              </p>

              <div>
                <h4 className="text-xs font-extrabold uppercase text-[#0068b5] mb-2">
                  Điểm nổi bật của chương trình:
                </h4>
                <ul className="space-y-1.5">
                  {selectedMajor.highlights.map((hl, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0db4b9] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-3.5 rounded border border-slate-200">
                  <h4 className="text-xs font-extrabold uppercase text-[#d9002a] mb-1.5">
                    Cơ hội nghề nghiệp:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                    {selectedMajor.careerOpportunities.map((job, idx) => (
                      <li key={idx}>{job}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-sky-50/60 p-3.5 rounded border border-sky-100">
                  <h4 className="text-xs font-extrabold uppercase text-[#0068b5] mb-1.5 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Trường & Tập đoàn đối tác:</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                    {selectedMajor.partnerSchools.map((sch, idx) => (
                      <li key={idx}>{sch}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMajor(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setApplicantMajor(selectedMajor.title);
                    setSelectedMajor(null);
                    setShowScholarshipModal(true);
                  }}
                  className="px-5 py-2 bg-[#d9002a] hover:bg-[#b80023] text-white text-xs font-bold uppercase rounded shadow cursor-pointer"
                >
                  Đăng ký xét học bổng ngành này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ADMISSION NOTICE DETAIL MODAL */}
      {selectedAdmission && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#0068b5] text-white px-5 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase bg-[#d9002a] px-2 py-0.5 rounded">
                  {selectedAdmission.category}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold mt-1">
                  {selectedAdmission.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAdmission(null)}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>Ngày đăng: {selectedAdmission.date}</span>
                <span>•</span>
                <span className="font-bold text-[#0068b5]">
                  {selectedAdmission.intake}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedAdmission.excerpt}
              </p>
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="text-xs font-extrabold uppercase text-slate-900 mb-2">
                  Điều kiện & Hồ sơ xét tuyển:
                </h4>
                <ul className="space-y-1.5">
                  {selectedAdmission.requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0068b5] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedAdmission(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAdmission(null);
                    setShowScholarshipModal(true);
                  }}
                  className="px-5 py-2 bg-[#0068b5] hover:bg-[#005291] text-white text-xs font-bold uppercase rounded shadow cursor-pointer"
                >
                  Nộp hồ sơ trực tuyến
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: SCHOLARSHIP APPLICATION MODAL */}
      {showScholarshipModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-gradient-to-r from-[#0068b5] to-[#004e8a] text-white px-5 py-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase text-amber-300">
                  Quỹ Học Bổng Khuyến Học BlueUni
                </div>
                <h3 className="text-lg font-extrabold">
                  Đăng Ký Xét Học Bổng {activeScholarshipTier.percent}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowScholarshipModal(false)}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {/* Tier Switcher Pills inside Modal */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Chọn mức học bổng đăng ký xét duyệt:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {data.scholarshipBanner.tiers.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveScholarshipTier(t)}
                      className={`py-1.5 rounded text-xs font-extrabold border transition-all cursor-pointer ${
                        activeScholarshipTier.id === t.id
                          ? "bg-[#0db4b9] text-white border-[#0db4b9] shadow"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0068b5]"
                      }`}
                    >
                      {t.percent}
                    </button>
                  ))}
                </div>
                <div className="mt-2 p-2.5 rounded bg-sky-50 border border-sky-100 text-[11px] text-slate-700">
                  <strong className="text-[#0068b5]">
                    {activeScholarshipTier.label}:
                  </strong>{" "}
                  {activeScholarshipTier.condition}
                </div>
              </div>

              {scholarshipSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    Đã Tiếp Nhận Hồ Sơ Xét Học Bổng{" "}
                    {activeScholarshipTier.percent}!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Cảm ơn <strong>{applicantName}</strong>. Hội đồng Tuyển sinh
                    Học viện Quốc tế BlueUni sẽ liên hệ qua số{" "}
                    <strong>{applicantPhone}</strong> trong vòng 2 giờ làm việc
                    để hướng dẫn hoàn thiện hồ sơ.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setScholarshipSubmitted(false);
                      setShowScholarshipModal(false);
                    }}
                    className="mt-2 px-6 py-2 bg-[#0068b5] text-white text-xs font-bold uppercase rounded cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitScholarship} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên học sinh / sinh viên *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="VD: Nguyễn Minh Quân"
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0068b5]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số điện thoại liên hệ *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="VD: 0905 922 016"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0068b5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Điểm GPA / Chứng chỉ ngoại ngữ
                      </label>
                      <input
                        type="text"
                        value={applicantGpa}
                        onChange={(e) => setApplicantGpa(e.target.value)}
                        placeholder="VD: GPA 8.2, IELTS 6.0 / JLPT N3"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0068b5]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Chuyên ngành đăng ký xét tuyển
                    </label>
                    <select
                      value={applicantMajor}
                      onChange={(e) => setApplicantMajor(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0068b5] bg-white"
                    >
                      {data.majorsSection.items.map((m) => (
                        <option key={m.id} value={m.title}>
                          {m.title} ({m.code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowScholarshipModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#d9002a] hover:bg-[#b80023] text-white text-xs font-bold uppercase rounded shadow cursor-pointer"
                    >
                      Gửi Hồ Sơ Xét Học Bổng
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
