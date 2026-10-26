"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  GraduationCap,
  Globe,
  Building2,
  Bookmark,
  HelpCircle,
  FileText,
  Star,
  ChevronDown,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTam11DefaultData,
  type TrungTam11TemplateData,
  type TrungTam11CountryItem,
  type TrungTam11ServiceTile
} from "@/template-sources/trung_tam_tieng_anh_11/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: TrungTam11TemplateData = adaptClonedTemplateData(
    trungTam11DefaultData,
    incomingData
  );

  const [activeRegionId, setActiveRegionId] = useState<string>(
    data.regionTabs?.[0]?.id || "reg-asia"
  );
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] =
    useState<TrungTam11CountryItem | null>(null);
  const [selectedService, setSelectedService] =
    useState<TrungTam11ServiceTile | null>(null);
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [consultForm, setConsultForm] = useState({
    fullName: "",
    phone: "",
    country: "Úc / Canada",
    note: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0908 922 016";
  const primaryEmail = data.business.email?.[0] || "tuvan@duhocquocanh.edu.vn";

  const activeRegion =
    (data.regionTabs || []).find((r) => r.id === activeRegionId) ||
    data.regionTabs?.[0];

  const testimonials = data.testimonials || [];
  const activeReview = testimonials[activeTestimonialIdx] || testimonials[0];

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setConsultModalOpen(false);
      setConsultForm({
        fullName: "",
        phone: "",
        country: "Úc / Canada",
        note: ""
      });
    }, 3000);
  };

  const renderSectionDivider = (darkBg = false) => (
    <div className="flex items-center justify-center gap-3 my-4">
      <span
        className={`w-28 sm:w-44 h-px ${
          darkBg ? "bg-amber-400/50" : "bg-amber-400"
        }`}
      />
      <Bookmark className="w-4 h-4 text-amber-400 fill-amber-400/20" />
      <span
        className={`w-28 sm:w-44 h-px ${
          darkBg ? "bg-amber-400/50" : "bg-amber-400"
        }`}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0b5340] selection:text-white">
      {/* 1. STICKY WHITE HEADER WITH LIME GREEN ACTIVE TAB (#a3cd39) */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a3cd39] to-[#0b5340] text-white flex items-center justify-center shadow">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] font-semibold text-[#0b5340]">
                    Tư vấn du học
                  </span>
                  <span className="block text-sm sm:text-base font-black text-[#0b5340] uppercase tracking-tight">
                    {data.business.name}
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-stretch h-full text-xs font-bold uppercase tracking-wide text-slate-600">
            <a
              href="#"
              className="bg-[#a3cd39] text-white px-4 flex items-center justify-center"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="px-3.5 flex items-center hover:text-[#0b5340] transition"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="px-3.5 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>HỌC BỔNG</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#dich-vu"
              className="px-3.5 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>HỘI THẢO</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#tim-truong"
              className="px-3.5 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>DU HỌC CÁC NƯỚC</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#y-kien"
              className="px-3.5 flex items-center gap-1 hover:text-[#0b5340] transition"
            >
              <span>CHIA SẺ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#lien-he"
              className="px-3.5 flex items-center hover:text-[#0b5340] transition"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Social Circles + Search */}
          <div className="hidden sm:flex items-center gap-2">
            {["f", "t"].map((soc) => (
              <a
                key={soc}
                href="#lien-he"
                className="w-7 h-7 rounded-full border border-slate-300 text-slate-500 hover:bg-[#0b5340] hover:text-white text-xs font-bold flex items-center justify-center transition"
              >
                {soc}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              aria-label="Tìm kiếm"
              className="w-7 h-7 rounded-full border border-slate-300 text-slate-500 hover:bg-[#a3cd39] hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-slate-200 text-slate-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-2 text-xs font-bold uppercase text-slate-700">
            <a
              href="#tim-truong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Tìm trường phù hợp
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Giới thiệu
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Dịch vụ tư vấn du học
            </a>
            <a
              href="#y-kien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Ý kiến du học sinh
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#0b5340]"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. SKY BLUE WORLD LANDMARKS & 6 COUNTRY FLAGS HERO (#1992d4) */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-[#1992d4] via-[#27a3e3] to-[#63c1f2] text-white overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-2xl font-medium text-white/95 mb-1">
            {data.hero.eyebrow || "Công ty tư vấn du học quốc tế"}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-wider text-white drop-shadow mb-2">
            {data.business.name}
          </h1>
          <p className="text-xs sm:text-sm text-white/90 mb-5">
            {data.hero.subtitle}
          </p>

          <a
            href={data.hero.ctaLink || "#tim-truong"}
            className="inline-block bg-[#a3cd39] hover:bg-[#8eb828] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-2.5 rounded-full shadow-lg transition mb-10"
          >
            {data.hero.ctaText || "TÌM HIỂU NGAY"}
          </a>

          {/* 6 Circular Glossy Country Flag Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-5">
            {[
              {
                name: "CANADA",
                bg: "bg-gradient-to-b from-red-600 via-white to-red-600",
                symbol: "🍁",
                textColor: "text-red-600"
              },
              {
                name: "AUSTRALIA",
                bg: "bg-[#012169]",
                symbol: "🇦🇺",
                textColor: "text-white"
              },
              {
                name: "NEW ZEALAND",
                bg: "bg-[#00247d]",
                symbol: "🇳🇿",
                textColor: "text-white"
              },
              {
                name: "UK",
                bg: "bg-[#c8102e]",
                symbol: "🇬🇧",
                textColor: "text-white"
              },
              {
                name: "USA",
                bg: "bg-[#3c3b6e]",
                symbol: "🇺🇸",
                textColor: "text-white"
              },
              {
                name: "EUROPE",
                bg: "bg-[#003399]",
                symbol: "🇪🇺",
                textColor: "text-amber-300"
              }
            ].map((flag) => (
              <button
                key={flag.name}
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${flag.bg} border-4 border-white/80 shadow-xl flex flex-col items-center justify-center hover:scale-110 transition cursor-pointer`}
              >
                <span className={`text-xl sm:text-2xl ${flag.textColor}`}>
                  {flag.symbol}
                </span>
                <span
                  className={`text-[9px] font-black tracking-tighter ${flag.textColor}`}
                >
                  {flag.name.slice(0, 6)}
                </span>
              </button>
            ))}
          </div>

          <p className="text-xs sm:text-base font-extrabold tracking-[0.18em] text-white drop-shadow uppercase">
            CANADA - AUSTRALIA - NEW ZEALAND - UK - USA - EUROPE
          </p>
        </div>
      </section>

      {/* 3. INTERACTIVE REGION TABS "TÌM TRƯỜNG PHÙ HỢP" */}
      <section id="tim-truong" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
            TÌM TRƯỜNG PHÙ HỢP
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Danh sách các trường liên kết
          </p>
          {renderSectionDivider(false)}

          {/* 3 Region Tabs sitting flush on top of bordered container */}
          <div className="mt-8">
            <div className="inline-flex border border-b-0 border-slate-200 bg-slate-100">
              {(data.regionTabs || []).map((tab) => {
                const isSelected = activeRegion?.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveRegionId(tab.id)}
                    className={`px-5 py-2 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer ${
                      isSelected
                        ? "bg-white text-[#a3cd39] border-t-2 border-t-[#a3cd39]"
                        : "text-slate-600 hover:bg-slate-200/60"
                    }`}
                  >
                    {tab.tabLabel}
                  </button>
                );
              })}
            </div>

            {activeRegion && (
              <div className="border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {activeRegion.countries.map((country) => (
                    <div
                      key={country.id}
                      onClick={() => setSelectedCountry(country)}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      {/* Circular Glossy Flag Badge */}
                      <div
                        className="w-16 h-16 rounded-full shadow-md border-2 border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition overflow-hidden relative"
                        style={{
                          background: `linear-gradient(180deg, ${
                            country.flagColors[0]
                          } 0%, ${country.flagColors[1] || "#ffffff"} 55%, ${
                            country.flagColors[2] || country.flagColors[0]
                          } 100%)`
                        }}
                      >
                        <span className="text-base font-black text-slate-800 bg-white/80 w-7 h-7 rounded-full flex items-center justify-center shadow-sm">
                          {country.flagSymbol || country.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0b5340]">
                        {country.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {country.schoolsCount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. DARK FOREST GREEN "GIỚI THIỆU" SPLIT SECTION (#0b5340) */}
      <section
        id="gioi-thieu"
        className="py-16 lg:py-20 bg-[#0b5340] text-white relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider">
              GIỚI THIỆU
            </h2>
            {renderSectionDivider(true)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left About Text */}
            <div className="lg:col-span-6">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 mb-3">
                {data.business.aboutTitle || "VÀI NÉT VỀ CHÚNG TÔI"}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-emerald-50/90 leading-relaxed mb-6">
                {(data.business.aboutText || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 text-[11px] font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-full shadow transition cursor-pointer"
              >
                XEM CHI TIẾT
              </button>
            </div>

            {/* Right 3 Gold Stats with White Icons */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-4 text-center">
              {(data.stats || []).slice(0, 3).map((st, idx) => (
                <div key={st.id} className="flex flex-col items-center">
                  <div className="w-12 h-12 text-white flex items-center justify-center mb-2">
                    {idx === 0 && <GraduationCap className="w-10 h-10" />}
                    {idx === 1 && <Globe className="w-10 h-10" />}
                    {idx >= 2 && <Building2 className="w-10 h-10" />}
                  </div>
                  <span className="text-3xl sm:text-5xl font-black text-amber-400 leading-none">
                    {st.number}
                  </span>
                  <span className="text-xs font-bold text-white mt-2">
                    {st.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 COLORFUL SQUARE TILES "DỊCH VỤ TƯ VẤN DU HỌC" */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
            DỊCH VỤ TƯ VẤN DU HỌC
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {data.business.name} tự hào là một trong những đơn vị Tư vấn Du học hàng đầu Việt Nam
          </p>
          {renderSectionDivider(false)}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {(data.serviceTiles || []).map((tile) => (
              <div
                key={tile.id}
                onClick={() => setSelectedService(tile)}
                className={`${tile.bgColor} text-white aspect-square p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition cursor-pointer group`}
              >
                <div className="mb-4 opacity-95 group-hover:scale-110 transition">
                  {tile.iconType === "school" && (
                    <HelpCircle className="w-12 h-12" />
                  )}
                  {tile.iconType === "visa" && (
                    <Globe className="w-12 h-12" />
                  )}
                  {tile.iconType === "scholarship" && (
                    <GraduationCap className="w-12 h-12" />
                  )}
                  {tile.iconType === "faq" && (
                    <FileText className="w-12 h-12" />
                  )}
                </div>
                <h3 className="text-base font-extrabold">{tile.title}</h3>
                <p className="text-[11px] text-white/90 mt-2 line-clamp-3">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DARK FOREST GREEN "Ý KIẾN KHÁCH HÀNG" (#0b5340) */}
      <section id="y-kien" className="py-16 lg:py-20 bg-[#0b5340] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase">
            Ý KIẾN KHÁCH HÀNG
          </h2>
          <p className="text-xs text-emerald-200 mt-1">
            Khách hàng nói về chúng tôi
          </p>
          {renderSectionDivider(true)}

          {activeReview && (
            <div className="mt-8 flex flex-col items-center">
              <img
                src={
                  activeReview.avatar ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                }
                alt={activeReview.author}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4"
              />
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {Array.from({ length: activeReview.rating || 5 }).map(
                  (_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  )
                )}
              </div>
              <p className="text-xs sm:text-sm italic text-emerald-50/95 leading-relaxed max-w-2xl mb-4">
                {activeReview.content}
              </p>
              <p className="text-xs font-extrabold text-white">
                {activeReview.author}{" "}
                <span className="font-normal text-emerald-200">
                  / {activeReview.role}
                </span>
              </p>

              {testimonials.length > 1 && (
                <div className="flex gap-2 mt-5">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTestimonialIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                        i === activeTestimonialIdx
                          ? "bg-amber-400"
                          : "bg-white/30"
                      }`}
                      aria-label={`Đánh giá ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 7. 6 PARTNER UNIVERSITY LOGOS ("ĐỐI TÁC") */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-800">
            ĐỐI TÁC
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {data.business.name} là đối tác tin cậy của các tổ chức giáo dục quốc tế
          </p>
          {renderSectionDivider(false)}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center mt-10">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="p-4 border border-slate-100 rounded-lg hover:border-amber-400 transition flex flex-col items-center justify-center h-24"
              >
                <GraduationCap className="w-6 h-6 text-[#0b5340] mb-1.5" />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 text-center leading-tight">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 3-COLUMN LIGHT GRAY FOOTER (#f5f5f5) + DARK COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-[#f5f5f5] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Col 1: LIÊN HỆ */}
            <div>
              <h4 className="text-sm font-extrabold uppercase text-slate-800 mb-4">
                LIÊN HỆ
              </h4>
              <div className="space-y-2 text-xs text-slate-600 mb-5">
                <p>
                  <strong className="text-slate-800">Địa chỉ:</strong>{" "}
                  {data.business.address}
                </p>
                <p>
                  <strong className="text-slate-800">Điện thoại:</strong>{" "}
                  {primaryPhone}
                </p>
                <p>
                  <strong className="text-slate-800">Email:</strong>{" "}
                  <span className="text-[#008a00]">{primaryEmail}</span>
                </p>
                <p>
                  <strong className="text-slate-800">Giờ làm việc:</strong>{" "}
                  {data.business.workingHours}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setConsultModalOpen(true)}
                  className="bg-amber-400 hover:bg-amber-500 text-white text-[11px] font-extrabold uppercase px-4 py-2 rounded cursor-pointer"
                >
                  LIÊN HỆ
                </button>
                {[
                  { label: "f", bg: "bg-[#1877f2]" },
                  { label: "t", bg: "bg-[#1da1f2]" },
                  { label: "G+", bg: "bg-[#db4437]" },
                  { label: "▶", bg: "bg-[#ff0000]" }
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#lien-he"
                    className={`w-7 h-7 rounded-full ${s.bg} text-white text-[10px] font-bold flex items-center justify-center`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: LIÊN KẾT */}
            <div>
              <h4 className="text-sm font-extrabold uppercase text-slate-800 mb-4">
                LIÊN KẾT
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-600">
                <a href="#" className="hover:text-[#008a00]">
                  ▸ Trang chủ
                </a>
                <a href="#tim-truong" className="hover:text-[#008a00]">
                  ▸ Du học các nước
                </a>
                <a href="#gioi-thieu" className="hover:text-[#008a00]">
                  ▸ Giới thiệu
                </a>
                <a href="#dich-vu" className="hover:text-[#008a00]">
                  ▸ Học bổng
                </a>
                <a href="#lien-he" className="hover:text-[#008a00]">
                  ▸ Liên hệ
                </a>
                <a href="#dich-vu" className="hover:text-[#008a00]">
                  ▸ Hội thảo
                </a>
                <a href="#y-kien" className="hover:text-[#008a00]">
                  ▸ Chia sẻ
                </a>
              </div>
            </div>

            {/* Col 3: FACEBOOK FANPAGE */}
            <div>
              <h4 className="text-sm font-extrabold uppercase text-slate-800 mb-4">
                FACEBOOK FANPAGE
              </h4>
              <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
                <div className="relative h-28 bg-slate-800 p-3 flex flex-col justify-between text-white">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                    alt="Fanpage"
                    className="absolute inset-0 w-full h-full object-cover opacity-55"
                  />
                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded bg-white text-[#0b5340] flex items-center justify-center font-black">
                      QA
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">
                        {data.business.name}
                      </p>
                      <span className="text-[10px] text-slate-200">
                        18.450 người theo dõi
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setConsultModalOpen(true)}
                      className="bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow cursor-pointer"
                    >
                      👍 Đã thích
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsultModalOpen(true)}
                      className="bg-white text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded shadow cursor-pointer"
                    >
                      💬 Gửi tin nhắn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#222222] text-slate-400 text-center text-xs py-3">
          © Bản quyền thuộc về {data.business.name}. Tư vấn Du học & Anh ngữ Quốc tế.
        </div>
      </footer>

      {/* COUNTRY SCHOOLS MODAL */}
      {selectedCountry && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCountry(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCountry(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block bg-[#a3cd39]/20 text-[#0b5340] text-xs font-extrabold px-3 py-1 rounded-full mb-2">
              {selectedCountry.schoolsCount}
            </span>
            <h3 className="text-xl font-extrabold text-[#0b5340] mb-1">
              Du học {selectedCountry.name}
            </h3>
            <p className="text-xs font-semibold text-amber-600 mb-4">
              Học phí / Ưu đãi: {selectedCountry.tuitionRange}
            </p>
            <p className="text-xs font-bold uppercase text-slate-500 mb-2">
              Các trường đại học tiêu biểu:
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              {selectedCountry.topUniversities.map((u) => (
                <li key={u} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#008a00] shrink-0" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setConsultForm({
                  ...consultForm,
                  country: selectedCountry.name
                });
                setSelectedCountry(null);
                setConsultModalOpen(true);
              }}
              className="w-full bg-[#0b5340] hover:bg-[#008a00] text-white text-xs font-extrabold uppercase py-3 rounded-lg transition cursor-pointer"
            >
              Nhận danh sách học bổng {selectedCountry.name}
            </button>
          </div>
        </div>
      )}

      {/* SERVICE MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-xl font-extrabold text-[#0b5340] mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedService(null);
                setConsultModalOpen(true);
              }}
              className="w-full bg-[#a3cd39] text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
            >
              Đăng ký tư vấn ngay
            </button>
          </div>
        </div>
      )}

      {/* CONSULTATION MODAL */}
      {consultModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setConsultModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-extrabold text-[#0b5340] mb-1">
              Đăng Ký Tư Vấn Du Học & Học Bổng
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Chuyên viên {data.business.name} sẽ liên hệ tư vấn lộ trình miễn phí.
            </p>
            {formSubmitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-[#0b5340]">
                  Đã gửi đăng ký thành công!
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên học sinh / phụ huynh *"
                  value={consultForm.fullName}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, fullName: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  value={consultForm.phone}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, phone: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <input
                  type="text"
                  placeholder="Quốc gia quan tâm (Úc, Canada, Mỹ, Singapore...)"
                  value={consultForm.country}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, country: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0b5340] hover:bg-[#008a00] text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
                >
                  GỬI YÊU CẦU TƯ VẤN
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
