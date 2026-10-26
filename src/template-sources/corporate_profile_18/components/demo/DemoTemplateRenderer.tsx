"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plane,
  Calendar,
  Users,
  Search,
  Clock,
  Star,
  Compass,
  Award,
  ShieldCheck,
  Briefcase,
  Play,
  Quote,
  ArrowUpRight,
  ArrowRight,
  User,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile18DefaultData,
  type Corp18Data,
  type Corp18TourCard
} from "@/template-sources/corporate_profile_18/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Corp18Data = adaptClonedTemplateData(
    corporateProfile18DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePopularTab, setActivePopularTab] = useState<string>("Tất cả");
  const [activeVacationTab, setActiveVacationTab] = useState<string>("Tất cả");
  const [selectedTour, setSelectedTour] = useState<Corp18TourCard | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Search filter state
  const [destinationInput, setDestinationInput] = useState("");
  const [activityInput, setActivityInput] = useState("Tất cả hoạt động");
  const [dateInput, setDateInput] = useState("");
  const [guestsInput, setGuestsInput] = useState("2 Người");

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const newsList = data.news || corporateProfile18DefaultData.news || [];

  const filteredPopularTours =
    activePopularTab === "Tất cả"
      ? data.popularTours
      : data.popularTours.filter((t) => t.countryTab === activePopularTab);

  const filteredVacationTours =
    activeVacationTab === "Tất cả"
      ? data.vacationTours
      : data.vacationTours.filter((t) => t.countryTab === activeVacationTab);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  const renderTourCard = (tour: Corp18TourCard) => (
    <div
      key={tour.id}
      onClick={() => {
        setSelectedTour(tour);
        setBookingSubmitted(false);
      }}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
    >
      <div>
        <div className="relative h-48 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {tour.popularBadge && (
            <span className="absolute top-3 left-3 bg-[#009688] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
              Phổ biến
            </span>
          )}
          <span className="absolute -bottom-3 left-4 bg-white text-slate-700 text-[10px] font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1 border border-slate-100">
            <Clock className="w-3 h-3 text-amber-500" />
            <span>{tour.duration}</span>
          </span>
        </div>

        <div className="p-4 pt-6 space-y-2">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#111827] group-hover:text-[#009688] transition-colors line-clamp-2 leading-snug">
            {tour.title}
          </h3>
          <p className="text-[11px] text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate">{tour.location}</span>
          </p>
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-xs sm:text-sm font-extrabold text-[#ef4444] block">
            {tour.price}
          </span>
          {tour.oldPrice && (
            <span className="text-[10px] text-slate-400 line-through block">
              {tour.oldPrice}
            </span>
          )}
        </div>
        <span className="bg-[#009688] hover:bg-[#00796b] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg transition-colors">
          Khám phá
        </span>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#009688] selection:text-white"
    >
      {/* 1. TEAL TOPBAR (#009688) + WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="bg-[#009688] text-white text-[11px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${primaryEmail}`}
                className="flex items-center gap-1.5 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{primaryEmail}</span>
              </a>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{primaryPhone}</span>
              </a>
              <span className="hidden md:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{data.business.address}</span>
              </span>
            </div>

            <div className="flex items-center gap-3 font-bold">
              <a href="#top" className="hover:opacity-80">
                f
              </a>
              <a href="#top" className="hover:opacity-80">
                t
              </a>
              <a href="#top" className="hover:opacity-80">
                ig
              </a>
              <a href="#top" className="hover:opacity-80">
                in
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#009688] to-amber-400 text-white flex items-center justify-center shadow">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-[#0f172a] block leading-none uppercase">
                {data.business.name}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#009688] font-bold">
                TRAVEL & MICE CORP
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-600">
            <a href="#top" className="text-[#009688]">
              Trang Chủ
            </a>
            <a
              href="#experience"
              className="flex items-center gap-1 hover:text-[#009688]"
            >
              <span>Về {data.business.name}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#popular-tours"
              className="flex items-center gap-1 hover:text-[#009688]"
            >
              <span>Du Lịch</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#news" className="hover:text-[#009688]">
              Tin Tức
            </a>
            <a href="#newsletter-section" className="hover:text-[#009688]">
              Liên Hệ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#newsletter-section"
              className="bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow transition-colors"
            >
              Liên hệ
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold text-slate-700">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#009688]"
            >
              Trang Chủ
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Về Chúng Tôi
            </a>
            <a
              href="#popular-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Các Chuyến Đi Phổ Biến
            </a>
            <a
              href="#vacation-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Du Lịch Nghỉ Dưỡng
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Tin Tức & Kinh Nghiệm
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION WITH LEFT/RIGHT FRAMED PHOTOS & OVERLAPPING SEARCH BAR */}
      <section className="relative bg-[#0c1f2c] text-white pt-16 pb-28 px-4 sm:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d2a]/70 via-[#0b1d2a]/60 to-[#0b1d2a]/90" />
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Framed Landmark Photo */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="w-52 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={data.heroFramedImages.leftImage}
                alt="Điểm đến nổi bật 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Hero Title */}
          <div className="lg:col-span-6 text-center space-y-4">
            <span className="font-serif italic text-lg sm:text-xl text-[#f5b841] block">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#popular-tours"}
                className="inline-block bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold px-7 py-3 rounded-lg shadow-lg transition-colors"
              >
                {data.hero.ctaText || "Khám phá thêm"}
              </a>
            </div>
          </div>

          {/* Right Framed Landmark Photo */}
          <div className="hidden lg:flex lg:col-span-3 justify-end">
            <div className="w-56 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={data.heroFramedImages.rightImage}
                alt="Điểm đến nổi bật 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Overlapping White Search Bar */}
        <div className="max-w-5xl mx-auto relative z-20 -mb-36 mt-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              document
                .getElementById("popular-tours")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-slate-800 rounded-2xl shadow-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center border border-slate-100"
          >
            <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-slate-100 pb-2 sm:pb-0 sm:pr-3">
              <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#009688]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Điểm đến</span>
              </label>
              <input
                type="text"
                value={destinationInput}
                onChange={(e) => setDestinationInput(e.target.value)}
                placeholder="Bạn muốn đi đâu?"
                className="w-full text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1 border-b sm:border-b-0 lg:border-r border-slate-100 pb-2 sm:pb-0 sm:pr-3">
              <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#009688]">
                <Plane className="w-3.5 h-3.5" />
                <span>Hoạt động</span>
              </label>
              <select
                value={activityInput}
                onChange={(e) => setActivityInput(e.target.value)}
                className="w-full text-xs text-slate-600 bg-transparent focus:outline-none"
              >
                <option>Tất cả hoạt động</option>
                <option>Du lịch Châu Âu</option>
                <option>Du lịch Nghỉ dưỡng</option>
                <option>Du lịch MICE Doanh nghiệp</option>
              </select>
            </div>

            <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-slate-100 pb-2 sm:pb-0 sm:pr-3">
              <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#009688]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Ngày đi</span>
              </label>
              <input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                className="w-full text-xs text-slate-600 focus:outline-none"
              />
            </div>

            <div className="space-y-1 sm:pr-3">
              <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#009688]">
                <Users className="w-3.5 h-3.5" />
                <span>Số hành khách</span>
              </label>
              <select
                value={guestsInput}
                onChange={(e) => setGuestsInput(e.target.value)}
                className="w-full text-xs text-slate-600 bg-transparent focus:outline-none"
              >
                <option>2 Người</option>
                <option>Gia đình (4-6 Người)</option>
                <option>Đoàn Doanh nghiệp (20+ Người)</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Tìm kiếm</span>
            </button>
          </form>
        </div>
      </section>

      {/* 3. CÁC CHUYẾN ĐI PHỔ BIẾN (8 TOUR CARDS IN 4x2 GRID) */}
      <section id="popular-tours" className="bg-white pt-24 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase">
                CÁC CHUYẾN ĐI PHỔ BIẾN
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Khám phá nét đẹp lãng mạn và kiến trúc kinh điển nổi tiếng
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActivePopularTab("Tất cả")}
              className="bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Xem tất cả</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["Tất cả", ...data.popularFilterTabs].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActivePopularTab(tab)}
                className={`text-xs font-bold px-4 py-1.5 rounded-lg transition-colors ${
                  activePopularTab === tab
                    ? "bg-[#009688] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPopularTours.map((tour) => renderTourCard(tour))}
          </div>
        </div>
      </section>

      {/* 4. TEAL 3-FEATURE STRIP (#009688) */}
      <section className="bg-[#009688] text-white py-10 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.tealFeatureStrip.map((item, idx) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                {idx === 0 && <Plane className="w-6 h-6 text-white" />}
                {idx === 1 && <Award className="w-6 h-6 text-white" />}
                {idx === 2 && <Briefcase className="w-6 h-6 text-white" />}
              </div>
              <div>
                <h3 className="text-sm font-extrabold">{item.title}</h3>
                <p className="text-xs text-teal-100 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO VÀ KỶ NIỆM KHÓ QUÊN (LEFT COPY + RIGHT COASTAL PHOTO WITH 10 YEARS BADGE) */}
      <section id="experience" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#009688]/40 text-[#009688] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <span className="font-serif italic text-base text-[#f5b841] block">
              {data.experienceSection.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase leading-snug">
              {data.business.aboutTitle || data.experienceSection.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
                {(data.business.aboutText?.length
                  ? data.business.aboutText
                  : data.experienceSection.paragraphs
                ).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="space-y-4">
                {data.experienceSection.features.map((ft, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#009688] flex items-center justify-center shrink-0">
                      {idx === 0 ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-[#111827]">
                        {ft.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        {ft.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#newsletter-section"
                className="inline-block bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>

          {/* Right Coastal Photo + Golden 10 Years Badge */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl ml-0 sm:ml-10">
              <img
                src={data.experienceSection.image}
                alt={data.experienceSection.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Golden 10 Years Badge */}
            <div className="absolute top-6 left-0 bg-[#f5b841] text-white rounded-2xl p-5 shadow-xl text-center w-36">
              <Plane className="w-6 h-6 mx-auto mb-1" />
              <span className="text-3xl font-black block leading-none">
                {data.experienceSection.yearsCount}
              </span>
              <span className="text-[11px] font-bold block mt-1">
                {data.experienceSection.yearsLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DU LỊCH NGHỈ DƯỠNG (8 TOUR CARDS IN 4x2 GRID) */}
      <section id="vacation-tours" className="bg-[#f8fafc] py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase">
                DU LỊCH NGHỈ DƯỠNG
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Tận hưởng bãi biển trắng mịn, nước biển trong xanh và kỳ nghỉ thư
                giãn tại thiên đường đảo quốc.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveVacationTab("Tất cả")}
              className="bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Xem tất cả</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["Tất cả", ...data.vacationFilterTabs].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveVacationTab(tab)}
                className={`text-xs font-bold px-4 py-1.5 rounded-lg transition-colors ${
                  activeVacationTab === tab
                    ? "bg-[#009688] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVacationTours.map((tour) => renderTourCard(tour))}
          </div>
        </div>
      </section>

      {/* 7. ĐẢM BẢO TRẢI NGHIỆM DU LỊCH TỐT NHẤT CHO BẠN */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Curved Tropical Island Photo */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-tr-[64px] rounded-bl-[64px] rounded-tl-xl rounded-br-xl shadow-xl h-96">
              <img
                src={data.guaranteeSection.image}
                alt={data.guaranteeSection.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right 2x2 Cards */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-serif italic text-base text-[#f5b841] block">
              {data.guaranteeSection.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase leading-snug">
              {data.guaranteeSection.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.guaranteeSection.description}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.guaranteeSection.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${card.colorClass}`}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#111827]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FULL-WIDTH VIDEO BANNER ("TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO") */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-8 text-white text-center">
        <img
          src={data.videoBanner.backgroundImage}
          alt={data.videoBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-2xl mx-auto space-y-3">
          <span className="font-serif italic text-lg text-[#f5b841] block">
            {data.videoBanner.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase">
            {data.videoBanner.title}
          </h2>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSelectedTour(data.popularTours[0])}
              className="w-14 h-14 rounded-full bg-white text-[#009688] shadow-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform"
              aria-label="Phát video"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. GIÁ ƯU ĐÃI (4 SPECIAL OFFER TOUR CARDS) */}
      <section className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase">
                GIÁ ƯU ĐÃI
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Tận hưởng bãi biển trắng mịn, nước biển trong xanh và kỳ nghỉ thư
                giãn tại thiên đường đảo quốc.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#009688] hover:text-white"
                aria-label="Trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#009688] hover:text-white"
                aria-label="Sau"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.specialOfferTours.map((tour) => renderTourCard(tour))}
          </div>
        </div>
      </section>

      {/* 10. ĐÁNH GIÁ KHÁCH HÀNG (3 WHITE REVIEW CARDS WITH TEAL QUOTE MARKS) */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-serif italic text-base text-[#f5b841] block">
              Đánh Giá Tích Cực
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase mt-1">
              ĐÁNH GIÁ KHÁCH HÀNG
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Chúng tôi tự hào khi nhận được phản hồi tích cực này và cam kết
              tiếp tục mang đến trải nghiệm du lịch tuyệt vời cho khách hàng của
              mình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.customerReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xs font-extrabold text-[#111827]">
                        {rev.badgeTitle}
                      </h3>
                      <div className="flex items-center gap-0.5 text-amber-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-[#009688]/30" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {rev.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-[#111827]">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TIN TỨC VÀ KINH NGHIỆM (4 TALL OVERLAY IMAGE CARDS) */}
      <section id="news" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] uppercase">
              TIN TỨC VÀ KINH NGHIỆM
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Chúng tôi tự hào khi nhận được phản hồi tích cực này và cam kết
              tiếp tục mang đến trải nghiệm du lịch tuyệt vời cho khách hàng của
              mình.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsList.map((post) => (
              <article
                key={post.id}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                  <div className="flex items-center gap-3 text-[10px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#f5b841]" />{" "}
                      {post.category || "monamedia"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#f5b841]" /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <a
                    href="#newsletter-section"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#009688] hover:text-teal-300"
                  >
                    <span>Xem thêm</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TEAL NEWSLETTER BANNER + DARK FOREST FOOTER (#0a1917) */}
      <section
        id="newsletter-section"
        className="bg-[#009688] text-white py-12 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <h2 className="text-lg sm:text-xl font-extrabold leading-snug">
              Đăng ký ngay để nhận các ưu đãi đặc biệt, khuyến mãi hấp dẫn và
              tin tức mới nhất về du lịch
            </h2>
            {newsletterSent && (
              <p className="text-xs text-amber-200 font-bold mt-2">
                Cảm ơn bạn đã đăng ký nhận cẩm nang & voucher du lịch!
              </p>
            )}
          </div>

          <form
            onSubmit={handleNewsletter}
            className="w-full max-w-md bg-white rounded-xl p-1.5 flex items-center"
          >
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Email..."
              className="flex-1 px-3 py-2 text-xs text-slate-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold px-5 py-2.5 rounded-lg shrink-0"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#0a1917] text-slate-400 text-xs pt-14 pb-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#009688] to-amber-400 text-white flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-base font-black text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Tập đoàn Lữ hành Quốc tế & Tổ chức Sự kiện Doanh nghiệp uy tín
                hàng đầu, mang đến những hành trình khám phá năm châu trọn vẹn.
              </p>
              <div className="flex items-center gap-3 text-slate-300 font-bold">
                <a href="#top" className="hover:text-[#009688]">
                  t
                </a>
                <a href="#top" className="hover:text-[#009688]">
                  f
                </a>
                <a href="#top" className="hover:text-[#009688]">
                  ig
                </a>
                <a href="#top" className="hover:text-[#009688]">
                  p
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-white font-extrabold">Danh mục</h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#experience" className="hover:text-white">
                    Giới thiệu {data.business.name}
                  </a>
                </li>
                <li>
                  <a href="#popular-tours" className="hover:text-white">
                    Điểm đến yêu thích
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-white">
                    Tin tức và kinh nghiệm
                  </a>
                </li>
                <li>
                  <a href="#newsletter-section" className="hover:text-white">
                    Liên hệ với chúng tôi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-4 space-y-2.5">
              <h3 className="text-white font-extrabold">Thông tin liên hệ</h3>
              <ul className="space-y-2.5 text-[11px]">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#009688] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#009688] shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#009688] shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Gallery */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="text-white font-extrabold">Hình ảnh</h3>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Hình du lịch ${i + 1}`}
                    className="w-full h-14 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-500">
            © Thiết kế và lập trình bởi {data.business.name}
          </div>
        </div>
      </footer>

      {/* TOUR BOOKING MODAL */}
      {selectedTour && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedTour(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedTour.image}
                alt={selectedTour.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedTour(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#009688] font-bold">
                  {selectedTour.location} • {selectedTour.duration}
                </span>
                <span className="text-base font-extrabold text-[#ef4444]">
                  {selectedTour.price}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#111827]">
                {selectedTour.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {selectedTour.itinerary}
              </p>
              {bookingSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-900">
                    Đã giữ chỗ ưu đãi thành công!
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Chuyên viên điều hành tour của {data.business.name} sẽ gọi
                    xác nhận lịch trình với quý khách ngay.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setBookingSubmitted(true)}
                  className="w-full bg-[#009688] hover:bg-[#00796b] text-white text-xs font-bold py-3 rounded-xl shadow"
                >
                  Đặt Giữ Chỗ Tour Này
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
