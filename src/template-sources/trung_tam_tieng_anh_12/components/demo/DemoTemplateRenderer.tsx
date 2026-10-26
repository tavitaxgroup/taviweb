"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plane,
  Send,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTam12DefaultData,
  type TrungTam12TemplateData,
  type TrungTam12CountryGuide,
  type TrungTam12ArticleItem
} from "@/template-sources/trung_tam_tieng_anh_12/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: TrungTam12TemplateData = adaptClonedTemplateData(
    trungTam12DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] =
    useState<TrungTam12CountryGuide | null>(null);
  const [selectedArticle, setSelectedArticle] =
    useState<TrungTam12ArticleItem | null>(null);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [formDone, setFormDone] = useState(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    phone: "",
    program: "Du học Canada / Học bổng",
    email: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0906 922 016";
  const primaryEmail = data.business.email?.[0] || "info@amec.edu.vn";

  const mainEvent = data.featuredEvents?.[0];
  const sideEvents = (data.featuredEvents || []).slice(1, 4);

  const mainScholarship = data.scholarshipItems?.[0];
  const sideScholarships = (data.scholarshipItems || []).slice(1, 3);

  const mainGuide = data.essentialGuides?.[0];
  const sideGuides = (data.essentialGuides || []).slice(1, 3);

  const mainVocational = data.vocationalPrograms?.[0];
  const sideVocationals = (data.vocationalPrograms || []).slice(1, 3);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormDone(true);
    setTimeout(() => {
      setFormDone(false);
      setRegisterModalOpen(false);
      setLeadForm({
        fullName: "",
        phone: "",
        program: "Du học Canada / Học bổng",
        email: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#d91f26] selection:text-white">
      {/* 1. STICKY WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Colorful Open Book Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-0.5 text-[#d91f26]">
                  <BookOpen className="w-7 h-7 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-black tracking-wider text-slate-900 uppercase">
                  {data.business.name}
                </span>
              </div>
            )}
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-slate-700">
            <a href="#" className="text-[#d91f26]">
              TRANG CHỦ
            </a>
            <a href="#su-kien" className="hover:text-[#d91f26] transition">
              GIỚI THIỆU
            </a>
            <a
              href="#quoc-gia"
              className="inline-flex items-center gap-1 hover:text-[#d91f26] transition"
            >
              <span>ĐỊA ĐIỂM DU HỌC</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#du-hoc-can-biet"
              className="inline-flex items-center gap-1 hover:text-[#d91f26] transition"
            >
              <span>DU HỌC CẦN BIẾT</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#du-hoc-nghe"
              className="inline-flex items-center gap-1 hover:text-[#d91f26] transition"
            >
              <span>DỊCH VỤ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#lien-he" className="hover:text-[#d91f26] transition">
              LIÊN HỆ
            </a>
            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              aria-label="Tìm kiếm"
              className="text-slate-700 hover:text-[#d91f26] cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

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
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-2 text-xs font-bold uppercase">
            <a
              href="#su-kien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Sự kiện du học nổi bật
            </a>
            <a
              href="#hoc-bong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Học bổng du học
            </a>
            <a
              href="#quoc-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Thông tin du học các quốc gia
            </a>
            <a
              href="#du-hoc-can-biet"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Du học cần biết
            </a>
            <a
              href="#du-hoc-nghe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Du học nghề hưởng lương
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#d91f26]"
            >
              Liên hệ tư vấn
            </a>
          </div>
        )}
      </header>

      {/* 2. PROMOTIONAL STUDY ABROAD HERO BANNER (Matches TA015-trung_tam_tieng_anh_12.jpg) */}
      <section className="relative min-h-[340px] sm:min-h-[400px] flex items-center overflow-hidden bg-slate-100">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/30 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          {/* 3D Angled Red & White Ribbon Stack like Screenshot */}
          <div className="max-w-md -rotate-2 transform space-y-1.5">
            <div className="inline-block bg-white shadow-lg px-6 py-2 border-l-8 border-[#d91f26]">
              <span
                className="text-2xl sm:text-4xl font-black tracking-wider uppercase text-transparent"
                style={{ WebkitTextStroke: "1.5px #d91f26" }}
              >
                {data.hero.eyebrow || "CANADA"}
              </span>
            </div>

            <div className="bg-[#d91f26] text-white px-6 py-3.5 shadow-xl">
              <h1 className="text-lg sm:text-2xl font-black uppercase leading-snug">
                {data.hero.title}
              </h1>
            </div>

            <div className="pt-1 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRegisterModalOpen(true)}
                className="bg-white hover:bg-slate-900 text-[#d91f26] hover:text-white text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-2.5 shadow-lg border border-slate-200 transition cursor-pointer"
              >
                › {data.hero.ctaText || "ĐĂNG KÝ NGAY"}
              </button>
              <span className="bg-[#d91f26] text-white text-xs font-bold px-3.5 py-2 shadow">
                {primaryPhone}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6-COUNTRY FLAG CAROUSEL + INLINE FREE CONSULTATION STRIP */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 mb-8">
            <span className="text-slate-400 hidden sm:inline">
              <ChevronLeft className="w-5 h-5" />
            </span>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 flex-1 text-center">
              {(data.countryCarousel || []).map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCountry(c)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-12 h-9 ${c.color} text-white rounded shadow-md flex items-center justify-center text-xl transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition mb-2`}
                  >
                    {c.flagEmoji}
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 group-hover:text-[#d91f26]">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>

            <span className="text-slate-400 hidden sm:inline">
              <ChevronRight className="w-5 h-5" />
            </span>
          </div>

          {/* Inline Free Consultation Prompt */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-600">
            <span>Bạn chưa lựa chọn được?</span>
            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              className="border border-[#d91f26] text-[#d91f26] hover:bg-[#d91f26] hover:text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded transition cursor-pointer"
            >
              LIÊN HỆ NGAY
            </button>
            <span>với chúng tôi để được tư vấn hoàn toàn miễn phí</span>
          </div>
        </div>
      </section>

      {/* 4. "SỰ KIỆN DU HỌC NỔI BẬT" (ASYMMETRIC 1 LARGE LEFT + 3 STACKED RIGHT ON #f2f2f2) */}
      <section id="su-kien" className="py-12 bg-[#f2f2f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#1d3f7a]">
              SỰ KIỆN DU HỌC NỔI BẬT
            </h2>
            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              className="text-xs font-bold text-[#d91f26] hover:underline cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 8 Cols Main Event */}
            {mainEvent && (
              <div
                onClick={() => setSelectedArticle(mainEvent)}
                className="lg:col-span-8 relative h-80 sm:h-[380px] overflow-hidden bg-slate-900 cursor-pointer group"
              >
                <img
                  src={mainEvent.image}
                  alt={mainEvent.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white px-5 py-3 text-center">
                  <h3 className="text-xs sm:text-sm font-bold group-hover:text-amber-300 transition">
                    {mainEvent.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Right 4 Cols 3 Stacked Events */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              {sideEvents.map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => setSelectedArticle(ev)}
                  className="relative h-28 sm:h-[116px] overflow-hidden bg-slate-900 cursor-pointer group"
                >
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white px-3 py-1.5 text-center">
                    <h4 className="text-[10px] font-extrabold uppercase leading-tight line-clamp-2 group-hover:text-amber-300">
                      {ev.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "HỌC BỔNG DU HỌC" (1 LARGE LEFT + 2 VERTICAL CARDS RIGHT) */}
      <section id="hoc-bong" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#1d3f7a]">
              HỌC BỔNG DU HỌC
            </h2>
            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              className="text-xs font-bold text-[#d91f26] hover:underline cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 6 Cols */}
            {mainScholarship && (
              <div
                onClick={() => setSelectedArticle(mainScholarship)}
                className="lg:col-span-6 relative min-h-[280px] overflow-hidden bg-slate-900 cursor-pointer group"
              >
                <img
                  src={mainScholarship.image}
                  alt={mainScholarship.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white px-4 py-3 text-center">
                  <h3 className="text-xs sm:text-sm font-bold">
                    {mainScholarship.title}
                  </h3>
                </div>
              </div>
            )}

            {/* Right 6 Cols: 2 Vertical Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sideScholarships.map((sc) => (
                <div
                  key={sc.id}
                  onClick={() => setSelectedArticle(sc)}
                  className="border border-slate-200 bg-white hover:shadow-md transition cursor-pointer group flex flex-col"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={sc.image}
                      alt={sc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <h4 className="text-xs font-extrabold uppercase text-slate-800 group-hover:text-[#d91f26] leading-snug mb-2">
                      {sc.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-3">
                      {sc.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MID-PAGE BANNER "THÔNG TIN DU HỌC CÁC QUỐC GIA" */}
      <section id="quoc-gia" className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-sky-100 via-sky-50 to-blue-100 border border-sky-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1d3f7a] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Plane className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d91f26]">
                  CỔNG THÔNG TIN CHÍNH THỨC
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#1d3f7a]">
                  THÔNG TIN DU HỌC CÁC QUỐC GIA
                </h3>
              </div>
            </div>

            {/* 6 Glossy Circular Country Flags */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Mỹ", emoji: "🇺🇸", bg: "bg-blue-800" },
                { label: "Anh", emoji: "🇬🇧", bg: "bg-red-700" },
                { label: "Canada", emoji: "🇨🇦", bg: "bg-red-600" },
                { label: "Úc", emoji: "🇦🇺", bg: "bg-indigo-900" },
                { label: "Singapore", emoji: "🇸🇬", bg: "bg-rose-600" },
                { label: "Đức", emoji: "🇩🇪", bg: "bg-amber-500" }
              ].map((fl) => (
                <button
                  key={fl.label}
                  type="button"
                  onClick={() => setRegisterModalOpen(true)}
                  className={`w-12 h-12 rounded-full ${fl.bg} text-white border-2 border-white shadow-md flex flex-col items-center justify-center hover:scale-110 transition cursor-pointer`}
                  title={`Du học ${fl.label}`}
                >
                  <span className="text-lg leading-none">{fl.emoji}</span>
                  <span className="text-[8px] font-bold uppercase mt-0.5">
                    {fl.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "DU HỌC CẦN BIẾT" (1 LARGE LEFT + 2 VERTICAL CARDS RIGHT) */}
      <section id="du-hoc-can-biet" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#1d3f7a]">
              DU HỌC CẦN BIẾT
            </h2>
            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              className="text-xs font-bold text-[#d91f26] hover:underline cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {mainGuide && (
              <div
                onClick={() => setSelectedArticle(mainGuide)}
                className="lg:col-span-6 relative min-h-[280px] overflow-hidden bg-slate-900 cursor-pointer group"
              >
                <img
                  src={mainGuide.image}
                  alt={mainGuide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white px-4 py-3 text-center">
                  <h3 className="text-xs sm:text-sm font-bold uppercase">
                    {mainGuide.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sideGuides.map((gd) => (
                <div
                  key={gd.id}
                  onClick={() => setSelectedArticle(gd)}
                  className="border border-slate-200 bg-white hover:shadow-md transition cursor-pointer group flex flex-col"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={gd.image}
                      alt={gd.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <h4 className="text-xs font-extrabold uppercase text-slate-800 group-hover:text-[#d91f26] leading-snug mb-2">
                      {gd.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-3">
                      {gd.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. "DU HỌC NGHỀ HƯỞNG LƯƠNG" (1 LARGE LEFT + 2 VERTICAL CARDS RIGHT) */}
      <section id="du-hoc-nghe" className="py-12 bg-white pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#1d3f7a]">
              DU HỌC NGHỀ HƯỞNG LƯƠNG
            </h2>
            <button
              type="button"
              onClick={() => setRegisterModalOpen(true)}
              className="text-xs font-bold text-[#d91f26] hover:underline cursor-pointer"
            >
              Xem tất cả
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {mainVocational && (
              <div
                onClick={() => setSelectedArticle(mainVocational)}
                className="lg:col-span-6 relative min-h-[280px] overflow-hidden bg-slate-900 cursor-pointer group"
              >
                <img
                  src={mainVocational.image}
                  alt={mainVocational.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 text-white px-4 py-3 text-center">
                  <h3 className="text-xs sm:text-sm font-bold">
                    {mainVocational.title}
                  </h3>
                </div>
              </div>
            )}

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sideVocationals.map((vp) => (
                <div
                  key={vp.id}
                  onClick={() => setSelectedArticle(vp)}
                  className="border border-slate-200 bg-white hover:shadow-md transition cursor-pointer group flex flex-col"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={vp.image}
                      alt={vp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-between">
                    <h4 className="text-xs font-extrabold uppercase text-slate-800 group-hover:text-[#d91f26] leading-snug mb-2">
                      {vp.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-3">
                      {vp.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. ROYAL NAVY BLUE WORLD LANDMARKS SILHOUETTE FOOTER (#1e3a8a) */}
      <footer
        id="lien-he"
        className="relative bg-[#1d3f7a] text-white pt-14 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1 */}
            <div className="space-y-3 text-xs">
              <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-3 py-1.5 rounded">
                <BookOpen className="w-5 h-5 text-[#d91f26]" />
                <span className="font-black uppercase">{data.business.name}</span>
              </div>
              <p className="flex items-start gap-2 text-blue-100">
                <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-blue-100">
                <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>{primaryPhone}</span>
              </p>
              <p className="flex items-center gap-2 text-blue-100">
                <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                DU HỌC CẦN BIẾT
              </h4>
              <ul className="space-y-2 text-xs text-blue-100">
                <li>
                  <a href="#su-kien" className="hover:text-amber-300">
                    Sự kiện nổi bật
                  </a>
                </li>
                <li>
                  <a href="#hoc-bong" className="hover:text-amber-300">
                    Học bổng du học
                  </a>
                </li>
                <li>
                  <a href="#du-hoc-nghe" className="hover:text-amber-300">
                    Du học nghề hưởng lương
                  </a>
                </li>
                <li>
                  <a href="#du-hoc-can-biet" className="hover:text-amber-300">
                    Du học và những điều cần biết
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                DỊCH VỤ
              </h4>
              <ul className="space-y-2 text-xs text-blue-100">
                <li>
                  <a href="#lien-he" className="hover:text-amber-300">
                    Dịch thuật – Công chứng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-amber-300">
                    Định cư & việc làm quốc tế
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-amber-300">
                    Đào tạo IELTS / Tiếng Đức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-amber-300">
                    Thủ tục Visa chuyên sâu
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ */}
            <div id="dang-ky">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
                ĐĂNG KÝ
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                Đăng ký để nhận được thông tin học bổng mới nhất từ chúng tôi.
              </p>
              {newsletterDone ? (
                <p className="text-xs font-bold text-amber-300">
                  Đã đăng ký nhận thông tin thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex bg-white rounded overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email ..."
                    className="w-full px-3 py-2 text-xs text-slate-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="px-3 bg-white text-[#d91f26] hover:bg-[#d91f26] hover:text-white transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Silhouette Skyline Accent + Dark Copyright Bar */}
        <div className="h-10 bg-gradient-to-t from-[#1e1e1e] to-transparent opacity-60" />
        <div className="bg-[#1e1e1e] text-slate-400 text-center text-xs py-3">
          © Bản quyền thuộc về {data.business.name}. Học Viện Anh Ngữ & Du Học Quốc Tế.
        </div>
      </footer>

      {/* COUNTRY MODAL */}
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
            <div className="text-3xl mb-2">{selectedCountry.flagEmoji}</div>
            <h3 className="text-xl font-extrabold text-[#1d3f7a] mb-1">
              Chương trình Du học {selectedCountry.name}
            </h3>
            <p className="text-xs font-bold text-[#d91f26] mb-4">
              {selectedCountry.highlight}
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              {selectedCountry.programs.map((pr) => (
                <li key={pr} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1d3f7a] shrink-0" />
                  <span>{pr}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setLeadForm({
                  ...leadForm,
                  program: `Du học ${selectedCountry.name}`
                });
                setSelectedCountry(null);
                setRegisterModalOpen(true);
              }}
              className="w-full bg-[#d91f26] text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
            >
              Đăng ký nhận lộ trình {selectedCountry.name}
            </button>
          </div>
        </div>
      )}

      {/* ARTICLE MODAL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold uppercase text-[#d91f26]">
                {selectedArticle.category} • {selectedArticle.date}
              </span>
              <h3 className="text-lg font-extrabold text-[#1d3f7a] mt-1 mb-3">
                {selectedArticle.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {selectedArticle.excerpt}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedArticle(null);
                  setRegisterModalOpen(true);
                }}
                className="w-full bg-[#1d3f7a] hover:bg-[#d91f26] text-white text-xs font-extrabold uppercase py-3 rounded-lg transition cursor-pointer"
              >
                Đăng ký nhận tư vấn chi tiết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REGISTRATION MODAL */}
      {registerModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setRegisterModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block bg-red-50 text-[#d91f26] text-xs font-extrabold px-3 py-1 rounded-full mb-2">
              Tặng phí ghi danh $200
            </span>
            <h3 className="text-lg font-extrabold text-[#1d3f7a] mb-4">
              Đăng Ký Tư Vấn Du Học & Học Bổng Miễn Phí
            </h3>
            {formDone ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-[#1d3f7a]">
                  Đã gửi thông tin đăng ký thành công!
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên *"
                  value={leadForm.fullName}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, fullName: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại *"
                  value={leadForm.phone}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, phone: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <input
                  type="text"
                  placeholder="Chương trình / Quốc gia quan tâm"
                  value={leadForm.program}
                  onChange={(e) =>
                    setLeadForm({ ...leadForm, program: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d91f26] hover:bg-red-700 text-white text-xs font-extrabold uppercase py-3 rounded-lg cursor-pointer"
                >
                  XÁC NHẬN ĐĂNG KÝ
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
