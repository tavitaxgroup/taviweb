"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Leaf,
  Compass,
  Calendar,
  ArrowRight,
  CheckCircle2,
  X,
  Building2,
  Star,
  Clock,
  Layers,
  Award,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung33Data,
  FaifoBoutiqueSuite,
  CamanVillageExperience,
  FaifoProjectCase,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung33Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive states
  const [activeMaterialIdx, setActiveMaterialIdx] = useState(0);
  const [selectedSuite, setSelectedSuite] =
    useState<FaifoBoutiqueSuite | null>(null);
  const [selectedExperience, setSelectedExperience] =
    useState<CamanVillageExperience | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<FaifoProjectCase | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Booking form state
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [selectedOption, setSelectedOption] = useState(
    data.boutiqueRoomsSection.suites[0]?.name || "Faifo Heritage Balcony Suite"
  );
  const [visitType, setVisitType] = useState<
    "LƯU TRÚ BOUTIQUE 4*" | "TRẢI NGHIỆM LÀNG CAMAN" | "TƯ VẤN THI CÔNG HOSPITALITY"
  >("LƯU TRÚ BOUTIQUE 4*");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "0235 3926 888");
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "booking@faifohospitality.vn");

  const activeMaterial =
    data.heritageStory.materials[activeMaterialIdx] ||
    data.heritageStory.materials[0];

  const handleOpenBooking = (
    optionLabel?: string,
    mode:
      | "LƯU TRÚ BOUTIQUE 4*"
      | "TRẢI NGHIỆM LÀNG CAMAN"
      | "TƯ VẤN THI CÔNG HOSPITALITY" = "LƯU TRÚ BOUTIQUE 4*"
  ) => {
    if (optionLabel) setSelectedOption(optionLabel);
    setVisitType(mode);
    setBookingSubmitted(false);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;
    setBookingSubmitted(true);
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-[#faf6f0] text-slate-800 font-sans selection:bg-[#163d26] selection:text-white"
    >
      {/* 1. HERITAGE JADE TOPBAR (#112f1d) */}
      <div className="bg-[#112f1d] text-emerald-100 text-xs py-2 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d99b26] shrink-0" />
              <span>{data.business.address}</span>
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#d99b26] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d99b26] shrink-0" />
              <span>{primaryPhone}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] text-emerald-200">
            <Leaf className="w-3.5 h-3.5 text-[#d99b26]" />
            <span>
              Tổ hợp Khách sạn Boutique 4 Sao & Vườn Hữu Cơ Làng Caman 4.000 m²
            </span>
          </div>
        </div>
      </div>

      {/* 2. STICKY DEEP JADE NAVBAR WITH "F" LANTERN MONOGRAM LOGO */}
      <header className="sticky top-0 z-40 bg-[#163d26]/95 backdrop-blur-md text-white shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Monogram F with Hanging Lantern matching XD033 */}
          <a href="#trang-chu" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-sm bg-white/10 border border-[#d99b26]/60 flex items-center justify-center">
              <span className="font-serif text-3xl font-bold text-white leading-none">
                {data.header.brandMonogram}
              </span>
              {/* Symbolic Hoi An Lantern Dot */}
              <span className="w-2.5 h-2.5 rounded-full bg-[#c83e2b] border border-amber-300 absolute bottom-2 right-2 shadow-xs" />
            </div>
            <div>
              <div className="font-serif text-base sm:text-lg font-bold tracking-[0.18em] uppercase text-white group-hover:text-[#d99b26] transition-colors">
                {data.business.name}
              </div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-emerald-200/80">
                {data.header.brandSub}
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {data.header.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  idx === 0
                    ? "text-[#d99b26]"
                    : "text-emerald-50 hover:text-[#d99b26]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Lantern Crimson / Gold CTA Button */}
          <button
            type="button"
            onClick={() => handleOpenBooking()}
            className="px-4 sm:px-5 py-2.5 bg-[#c83e2b] hover:bg-[#a93120] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md border border-amber-300/30 transition-all cursor-pointer"
          >
            {data.header.ctaButton}
          </button>
        </div>
      </header>

      {/* 3. SPLIT GRADIENT HERITAGE HERO MATCHING XD033 COVER */}
      <section className="relative min-h-[540px] sm:min-h-[620px] w-full overflow-hidden bg-[#163d26] text-white flex items-center">
        {/* Right-side Twilight Boutique Villa Architecture Image */}
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-right opacity-85"
          />
          {/* Signature Deep Heritage Green Left-to-Right Gradient matching XD033 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#133822] via-[#163d26]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 7 Cols: Monogram Crest + Bold Uppercase Title + 4.000m² Subtitle */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#d99b26]/40 text-amber-200 text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#d99b26]" />
              <span>{data.hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight leading-[1.15] text-white drop-shadow">
              {data.hero.title}
            </h1>

            <p className="text-base sm:text-xl text-emerald-100 font-normal leading-relaxed max-w-xl">
              {data.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#phong-boutique"}
                className="px-7 py-3.5 bg-[#d99b26] hover:bg-[#bf861d] text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-sm shadow-lg transition-all"
              >
                {data.hero.ctaText}
              </a>
              <a
                href="#lang-caman"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-sm transition-all"
              >
                {data.hero.secondaryCtaText || "Khám Phá Làng Caman"}
              </a>
            </div>

            {/* 4 Key Heritage Metrics */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15">
              {(data.stats || []).map((st, idx) => (
                <div key={st.id || idx}>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#d99b26]">
                    {st.value || st.number}
                  </div>
                  <div className="text-xs text-emerald-100/90 mt-0.5">
                    {st.label || st.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Floating Boutique Architecture Highlight Card */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-[#112f1d]/90 backdrop-blur-md border border-[#d99b26]/40 p-6 sm:p-7 rounded-sm shadow-2xl max-w-md w-full space-y-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d99b26]">
                    ĐIỂM NHẤN KIẾN TRÚC BẢN ĐỊA
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                    Faifo Boutique Hotel & Làng Caman
                  </h3>
                </div>
                <span className="px-2.5 py-1 bg-[#c83e2b] text-white text-[10px] font-bold uppercase rounded-xs">
                  4 Sao
                </span>
              </div>

              <p className="text-xs text-emerald-100 leading-relaxed">
                Sự kết hợp độc bản giữa ban công vòm cong Đông Dương, mặt dựng đá
                chẻ Quảng Nam và khu vườn nông nghiệp hữu cơ 4.000 m² ngay trung
                tâm Cẩm Châu – Hội An.
              </p>

              <div className="space-y-2 text-xs text-emerald-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d99b26] shrink-0" />
                  <span>Cách Phố Cổ Hội An & Chùa Cầu chỉ 5 phút đạp xe</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d99b26] shrink-0" />
                  <span>Trải nghiệm làm đèn lồng tre & thu hoạch rau sạch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d99b26] shrink-0" />
                  <span>Tư vấn thiết kế & thi công trọn gói Boutique Resort</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleOpenBooking()}
                className="w-full py-3 bg-[#c83e2b] hover:bg-[#ad3221] text-white text-xs font-extrabold uppercase tracking-wider rounded-xs shadow cursor-pointer transition-colors"
              >
                Đặt Kỳ Nghỉ & Lịch Tham Quan Kiến Trúc
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "KIẾN TRÚC BẢN ĐỊA & VẬT LIỆU THỦ CÔNG HỘI AN" INTERACTIVE TABS */}
      <section id="kien-truc-ban-dia" className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c83e2b]">
              {data.heritageStory.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#163d26] mt-2 mb-3">
              {data.heritageStory.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.heritageStory.subtitle}
            </p>
          </div>

          {/* Material Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {data.heritageStory.materials.map((mat, idx) => (
              <button
                key={mat.id}
                type="button"
                onClick={() => setActiveMaterialIdx(idx)}
                className={`px-5 py-2.5 rounded-sm text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeMaterialIdx === idx
                    ? "bg-[#163d26] text-[#d99b26] shadow-md"
                    : "bg-white text-slate-700 border border-stone-200 hover:border-[#163d26]"
                }`}
              >
                0{idx + 1}. {mat.name}
              </button>
            ))}
          </div>

          {/* Active Material Showcase Card */}
          {activeMaterial && (
            <div className="bg-white rounded-sm shadow-lg border border-stone-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 h-72 sm:h-96 lg:h-auto overflow-hidden bg-stone-900">
                <img
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-5">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-50 text-[#c83e2b] border border-amber-200 text-[11px] font-bold uppercase rounded-xs mb-3">
                    Xuất xứ: {activeMaterial.origin}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#163d26] mb-3">
                    {activeMaterial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {activeMaterial.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 p-3.5 bg-[#faf6f0] rounded-xs border border-stone-200/70 text-xs">
                    <div>
                      <strong className="text-[#163d26] block">
                        Hạng mục ứng dụng:
                      </strong>
                      <span className="text-slate-600">
                        {activeMaterial.application}
                      </span>
                    </div>
                    <div>
                      <strong className="text-[#163d26] block">
                        Tuổi thọ & Độ bền:
                      </strong>
                      <span className="text-slate-600">
                        {activeMaterial.durability}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {activeMaterial.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#163d26] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Tiêu chuẩn thi công bảo tồn Faifo Hospitality
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleOpenBooking(
                        activeMaterial.name,
                        "TƯ VẤN THI CÔNG HOSPITALITY"
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#c83e2b] hover:text-[#163d26] uppercase cursor-pointer"
                  >
                    <span>Nhận hồ sơ kỹ thuật vật liệu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. "TỔ HỢP LƯU TRÚ FAIFO BOUTIQUE HOTEL & SPA 4 SAO" */}
      <section id="phong-boutique" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#163d26]">
              {data.boutiqueRoomsSection.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              {data.boutiqueRoomsSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {data.boutiqueRoomsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.boutiqueRoomsSection.suites.map((suite) => (
              <div
                key={suite.id}
                className="group bg-[#faf6f0] rounded-sm overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setSelectedSuite(suite)}
                    className="relative h-60 overflow-hidden bg-stone-900 cursor-pointer"
                  >
                    <img
                      src={suite.image}
                      alt={suite.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-[#163d26] text-[#d99b26] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-xs">
                      {suite.area} • Mã {suite.code}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-bold text-[#c83e2b] mb-1">
                      {suite.architectureNote}
                    </div>
                    <h3
                      onClick={() => setSelectedSuite(suite)}
                      className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#163d26] transition-colors cursor-pointer mb-2"
                    >
                      {suite.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">{suite.view}</p>

                    <ul className="space-y-1.5 mb-5">
                      {suite.amenities.slice(0, 3).map((am, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#163d26] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{am}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-stone-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">
                      Giá niêm yết
                    </span>
                    <span className="text-base font-extrabold text-[#163d26]">
                      {suite.pricePerNight}
                    </span>
                    <span className="text-[11px] text-slate-500"> / đêm</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedSuite(suite)}
                    className="px-4 py-2 bg-[#163d26] hover:bg-[#c83e2b] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    Chi tiết phòng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "LÀNG TRẢI NGHIỆM CAMAN & VƯỜN HỮU CƠ 4.000 M²" */}
      <section
        id="lang-caman"
        className="py-20 bg-[#163d26] text-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d99b26]">
              <Leaf className="w-4 h-4" />
              <span>{data.camanVillageSection.eyebrow}</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-2 mb-3">
              {data.camanVillageSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              {data.camanVillageSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.camanVillageSection.experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className="group bg-[#112f1d] border border-emerald-800/80 hover:border-[#d99b26] rounded-sm overflow-hidden cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-[#c83e2b] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs">
                      {exp.zoneTag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-semibold text-[#d99b26] mb-1">
                      Quy mô: {exp.areaScale} • {exp.schedule}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#d99b26] transition-colors mb-2.5">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-emerald-100/85 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-5 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d99b26] group-hover:translate-x-1 transition-transform">
                    <span>Đăng ký trải nghiệm bản địa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "HỒ SƠ NĂNG LỰC THIẾT KẾ & THI CÔNG HOSPITALITY" */}
      <section id="cong-trinh" className="py-20 bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#c83e2b]">
              {data.constructionPortfolio.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#163d26] mt-2 mb-3">
              {data.constructionPortfolio.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {data.constructionPortfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.constructionPortfolio.projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group bg-white rounded-sm overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg cursor-pointer transition-all"
              >
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#163d26]/90 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-xs">
                    {proj.category} • {proj.completionYear}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#c83e2b] mb-1">
                    {proj.location} — {proj.scale}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#163d26] transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HERITAGE JADE FOOTER (#112f1d) */}
      <footer id="lien-he" className="bg-[#112f1d] text-emerald-100 pt-14 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xs bg-white/10 border border-[#d99b26] flex items-center justify-center font-serif text-2xl font-bold text-white">
                  {data.header.brandMonogram}
                </div>
                <div className="font-serif text-lg font-bold tracking-widest uppercase text-white">
                  {data.business.name}
                </div>
              </div>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                {data.footer.tagline}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#d99b26] mb-4">
                Thông Tin Liên Hệ & Đặt Phòng
              </h3>
              <ul className="space-y-2.5 text-xs text-emerald-100/90">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d99b26] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d99b26] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d99b26] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#d99b26] mb-4">
                Trải Nghiệm & Hợp Tác Đầu Tư
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                Đăng ký đặt phòng Faifo Boutique Hotel 4 sao, đặt tour Làng
                trải nghiệm Caman 4.000 m² hoặc nhận tư vấn thiết kế kiến trúc
                bản địa Hội An.
              </p>
              <button
                type="button"
                onClick={() => handleOpenBooking()}
                className="px-5 py-2.5 bg-[#c83e2b] hover:bg-[#a93120] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
              >
                Gửi Yêu Cầu Tư Vấn Ngay
              </button>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-emerald-200/60">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: SUITE DETAIL MODAL */}
      {selectedSuite && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full rounded-sm overflow-hidden shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedSuite.image}
                alt={selectedSuite.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedSuite(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase text-[#c83e2b]">
                  {selectedSuite.area} • {selectedSuite.view}
                </span>
                <span className="font-extrabold text-[#163d26] text-sm">
                  {selectedSuite.pricePerNight} / đêm
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {selectedSuite.name}
              </h3>
              <p className="text-xs text-slate-600">
                Điểm nhấn kiến trúc: {selectedSuite.architectureNote}
              </p>
              <ul className="space-y-1.5 pt-1">
                {selectedSuite.amenities.map((am, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#163d26] shrink-0 mt-0.5" />
                    <span>{am}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSuite(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedSuite.name;
                    setSelectedSuite(null);
                    handleOpenBooking(name, "LƯU TRÚ BOUTIQUE 4*");
                  }}
                  className="px-5 py-2 bg-[#163d26] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đặt Hạng Phòng Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: CAMAN VILLAGE EXPERIENCE MODAL */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-sm overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedExperience(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[11px] font-bold uppercase text-[#c83e2b]">
                {selectedExperience.zoneTag} • {selectedExperience.areaScale}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#163d26]">
                {selectedExperience.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedExperience.description}
              </p>
              <ul className="space-y-1.5">
                {selectedExperience.activities.map((act, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#163d26] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedExperience.title;
                    setSelectedExperience(null);
                    handleOpenBooking(title, "TRẢI NGHIỆM LÀNG CAMAN");
                  }}
                  className="px-5 py-2 bg-[#c83e2b] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đăng Ký Tham Gia
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: PROJECT PORTFOLIO MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-sm overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[11px] font-bold uppercase text-[#c83e2b]">
                {selectedProject.category} • {selectedProject.location}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#163d26]">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProject.summary}
              </p>
              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    handleOpenBooking(title, "TƯ VẤN THI CÔNG HOSPITALITY");
                  }}
                  className="px-5 py-2 bg-[#163d26] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Tư Vấn Thiết Kế & Thi Công
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: BOOKING & CONSULTATION MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-sm overflow-hidden shadow-2xl">
            <div className="bg-[#163d26] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d99b26]">
                  {data.business.name} • HỘI AN
                </span>
                <h3 className="font-serif text-lg font-bold">{visitType}</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {bookingSubmitted ? (
                <div className="text-center py-5 space-y-3">
                  <CheckCircle2 className="w-11 h-11 text-[#163d26] mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-slate-900">
                    Đã Tiếp Nhận Yêu Cầu!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cảm ơn <strong>{guestName}</strong>. Bộ phận Lễ tân & Kiến
                    trúc <strong>{data.business.name}</strong> sẽ liên hệ qua số{" "}
                    <strong>{guestPhone}</strong> về hạng mục{" "}
                    <strong>{selectedOption}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-6 py-2 bg-[#163d26] text-white text-xs font-bold uppercase cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên quý khách *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Nhập họ tên..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#163d26]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#163d26]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hạng phòng / Trải nghiệm / Dịch vụ quan tâm
                    </label>
                    <input
                      type="text"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#163d26]"
                    />
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#c83e2b] hover:bg-[#a93120] text-white text-xs font-bold uppercase cursor-pointer"
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
