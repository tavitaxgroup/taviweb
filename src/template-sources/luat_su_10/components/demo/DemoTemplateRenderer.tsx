"use client";

import React, { useState } from "react";
import {
  Search,
  Phone,
  MapPin,
  Plane,
  Calendar,
  Users,
  Compass,
  Check,
  Coins,
  ShieldCheck,
  ArrowRight,
  Clock,
  Star,
  Trophy,
  Lock,
  ThumbsUp,
  Award,
  Quote,
  Mail,
  CheckCircle2,
  X,
  Menu,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu10DefaultData,
  type LuatSu10TemplateData,
  type LuatSu10VisaProgram
} from "@/template-sources/luat_su_10/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: LuatSu10TemplateData = adaptClonedTemplateData(
    luatSu10DefaultData,
    incomingData
  );

  const [popularTab, setPopularTab] = useState<string>("tat-ca");
  const [residencyTab, setResidencyTab] = useState<string>("tat-ca");
  const [destinationInput, setDestinationInput] = useState<string>("");
  const [visaTypeInput, setVisaTypeInput] = useState<string>("Tất cả diện Visa");
  const [dateInput, setDateInput] = useState<string>("");
  const [applicantsInput, setApplicantsInput] = useState<string>("2 Người");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] =
    useState<LuatSu10VisaProgram | null>(null);
  const [consultDone, setConsultDone] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "ROAMLAW";

  const allPrograms = data.visaPrograms || [];

  const popularPrograms = allPrograms
    .filter((p) => p.sectionKey === "pho-bien")
    .filter((p) => {
      const matchTab = popularTab === "tat-ca" || p.tabKey === popularTab;
      const matchQuery =
        !destinationInput.trim() ||
        p.title.toLowerCase().includes(destinationInput.toLowerCase()) ||
        p.countryLocation
          .toLowerCase()
          .includes(destinationInput.toLowerCase());
      return matchTab && matchQuery;
    });

  const residencyPrograms = allPrograms
    .filter((p) => p.sectionKey === "nghi-duong")
    .filter((p) => residencyTab === "tat-ca" || p.tabKey === residencyTab);

  const specialOfferPrograms = allPrograms.filter(
    (p) => p.sectionKey === "gia-uu-dai"
  );

  const renderProgramCard = (item: LuatSu10VisaProgram) => (
    <div
      key={item.id}
      onClick={() => {
        setSelectedProgram(item);
        setConsultDone(false);
      }}
      className="group bg-white rounded-xl border border-[#efefef] shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Image + Badges */}
        <div className="relative aspect-[16/11] overflow-hidden bg-[#f2f4f7]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {item.popularBadge && (
            <span className="absolute top-3 left-3 bg-[#ef3f49] text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
              Phổ biến
            </span>
          )}
          <div className="absolute -bottom-3 left-3 bg-white border border-[#e5f5ef] shadow-sm rounded-full px-3 py-1 flex items-center gap-1.5 text-[11px] font-semibold text-[#00a870]">
            <Clock className="w-3 h-3" />
            <span>{item.durationBadge}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 pt-5">
          <h3 className="text-[13px] font-bold text-[#1f2937] group-hover:text-[#ef3f49] transition-colors line-clamp-2 min-h-[38px] mb-1.5">
            {item.title}
          </h3>
          <p className="flex items-center gap-1 text-[11px] text-[#6b7280] mb-2">
            <MapPin className="w-3 h-3 text-[#00a870] shrink-0" />
            <span className="truncate">{item.countryLocation}</span>
          </p>
          <div className="flex items-center gap-0.5 text-[#fbbf24]">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Price & CTA Footer */}
      <div className="px-4 pb-4 pt-2 border-t border-[#f3f4f6] flex items-center justify-between gap-2">
        <div>
          <div className="text-sm font-extrabold text-[#111827]">
            {item.price}
          </div>
          {item.oldPrice && (
            <div className="text-[11px] text-[#9ca3af] line-through">
              {item.oldPrice}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedProgram(item);
            setConsultDone(false);
          }}
          className="bg-[#ef3f49] hover:bg-[#d62c36] text-white text-[11px] font-bold px-3.5 py-1.5 rounded transition-colors"
        >
          Khám phá
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#1f2937] font-sans selection:bg-[#ef3f49] selection:text-white">
      {/* 1. MAIN WHITE HEADER */}
      <header
        id="trang-chu"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-[#efefef]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ef3f49] to-[#00a870] text-white flex items-center justify-center shadow-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="leading-none">
                  <span className="block text-base sm:text-lg font-black uppercase tracking-tight text-[#111827]">
                    {brandName}
                  </span>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-[#ef3f49]">
                    VISA &amp; IMMIGRATION LAW
                  </span>
                </div>
              </>
            )}
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-[#374151]">
            <a href="#trang-chu" className="text-[#ef3f49]">
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#ef3f49] transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#chuong-trinh-pho-bien"
              className="inline-flex items-center gap-1 hover:text-[#ef3f49] transition-colors"
            >
              <span>Dịch Vụ Visa</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#dinh-cu-quoc-te"
              className="inline-flex items-center gap-1 hover:text-[#ef3f49] transition-colors"
            >
              <span>Định Cư Quốc Tế</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#ef3f49] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#ef3f49] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Right Phone & Red CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href="#chuong-trinh-pho-bien"
              aria-label="Tìm kiếm"
              className="text-[#4b5563] hover:text-[#ef3f49] hidden sm:inline-flex"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#374151] hover:text-[#ef3f49]"
            >
              <Phone className="w-4 h-4 text-[#ef3f49]" />
              <span>{primaryPhone}</span>
            </a>
            <a
              href="#lien-he"
              className="bg-[#ef3f49] hover:bg-[#d62c36] text-white text-xs font-bold px-5 py-2.5 rounded transition-colors"
            >
              Liên hệ
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-1 text-[#111827]"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#eeeeee] bg-white px-4 py-3 space-y-2 text-xs font-bold">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#ef3f49]"
            >
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Giới Thiệu
            </a>
            <a
              href="#chuong-trinh-pho-bien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Dịch Vụ Visa
            </a>
            <a
              href="#dinh-cu-quoc-te"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Định Cư Quốc Tế
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              Tin Tức Pháp Lý
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER WITH 4-FIELD VISA SEARCH BAR */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center bg-[#0f172a] overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

        <div className="relative z-10 max-w-[1040px] mx-auto px-4 sm:px-6 w-full py-12 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3 drop-shadow">
            {data.hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto mb-8">
            {data.hero.subtitle}
          </p>

          {/* White Rounded Search/Filter Bar */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center text-left">
            {/* Field 1: Quốc gia */}
            <div className="lg:col-span-3 sm:border-r border-[#e5e7eb] pr-3">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#111827] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#ef3f49]" />
                <span>Quốc gia định cư</span>
              </label>
              <input
                type="text"
                value={destinationInput}
                onChange={(e) => setDestinationInput(e.target.value)}
                placeholder="Mỹ, Đức, Đan Mạch, Nhật..."
                className="w-full text-xs text-[#4b5563] focus:outline-none"
              />
            </div>

            {/* Field 2: Loại hồ sơ */}
            <div className="lg:col-span-3 lg:border-r border-[#e5e7eb] pr-3">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#111827] mb-1">
                <Plane className="w-3.5 h-3.5 text-[#ef3f49]" />
                <span>Diện hồ sơ pháp lý</span>
              </label>
              <select
                value={visaTypeInput}
                onChange={(e) => setVisaTypeInput(e.target.value)}
                aria-label="Diện hồ sơ"
                className="w-full text-xs text-[#4b5563] bg-transparent focus:outline-none"
              >
                <option>Tất cả diện Visa</option>
                <option>Định cư tay nghề &amp; Lao động</option>
                <option>Đầu tư Thẻ Xanh EB-5 / Golden Visa</option>
                <option>Visa Doanh nhân &amp; Khởi nghiệp</option>
              </select>
            </div>

            {/* Field 3: Ngày hẹn */}
            <div className="lg:col-span-2 sm:border-r border-[#e5e7eb] pr-3">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#111827] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#ef3f49]" />
                <span>Ngày tư vấn</span>
              </label>
              <input
                type="text"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                placeholder="DD-MM-YYYY"
                className="w-full text-xs text-[#4b5563] focus:outline-none"
              />
            </div>

            {/* Field 4: Số người */}
            <div className="lg:col-span-2 pr-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#111827] mb-1">
                <Users className="w-3.5 h-3.5 text-[#ef3f49]" />
                <span>Số đương đơn</span>
              </label>
              <select
                value={applicantsInput}
                onChange={(e) => setApplicantsInput(e.target.value)}
                aria-label="Số đương đơn"
                className="w-full text-xs text-[#4b5563] bg-transparent focus:outline-none"
              >
                <option>1 Người (Cá nhân)</option>
                <option>2 Người (Vợ chồng)</option>
                <option>3 - 4 Người (Gia đình)</option>
                <option>Đoàn Doanh nghiệp</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-2">
              <a
                href="#chuong-trinh-pho-bien"
                className="w-full bg-[#ef3f49] hover:bg-[#d62c36] text-white text-xs font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{data.hero.ctaText}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION WITH OVERLAPPING CIRCULAR FRAMES */}
      <section id="gioi-thieu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#00a870] text-[#00a870] flex items-center justify-center mb-2">
                <Compass className="w-6 h-6" />
              </div>
              <p className="font-serif italic text-sm text-[#00a870]">
                {data.aboutScriptEyebrow}
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] leading-snug">
                {data.business.aboutTitle}
              </h2>
              <div className="space-y-2.5 text-xs text-[#6b7280] leading-relaxed">
                {(data.business.aboutText || []).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <ul className="space-y-2 pt-2">
                {(data.aboutCheckmarks || []).map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold text-[#374151]"
                  >
                    <Check className="w-4 h-4 text-[#00a870] stroke-[2.5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Overlapping Rounded & Circular Images */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="w-72 sm:w-80 h-80 sm:h-96 rounded-[36px] overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={data.aboutMainImage}
                  alt="Tư vấn định cư quốc tế"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-[#00a870] absolute -bottom-6 left-4 sm:left-12 bg-white">
                <img
                  src={data.aboutCircleImage}
                  alt="Gia đình định cư thành công"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORAL RED 3-FEATURE STRIP (#ef3f49) */}
      <section className="bg-[#ef3f49] text-white py-9">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {(data.redStripFeatures || []).map((feat, idx) => {
            const IconComp =
              idx === 0 ? Plane : idx === 1 ? Coins : ShieldCheck;
            return (
              <div key={feat.id} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <IconComp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold mb-1">{feat.title}</h3>
                  <p className="text-xs text-white/85 leading-relaxed">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SECTION: CÁC CHƯƠNG TRÌNH VISA PHỔ BIẾN (8 CARDS) */}
      <section id="chuong-trinh-pho-bien" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] mb-1">
                CÁC HỒ SƠ VISA &amp; ĐỊNH CƯ PHỔ BIẾN
              </h2>
              <p className="text-xs text-[#6b7280]">
                {data.popularSectionSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPopularTab("tat-ca")}
              className="bg-[#00a870] hover:bg-[#008f5f] text-white text-xs font-bold px-4 py-2 rounded inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Xem tất cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setPopularTab("tat-ca")}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${
                popularTab === "tat-ca"
                  ? "bg-[#ef3f49] text-white"
                  : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
              }`}
            >
              Tất cả
            </button>
            {(data.popularTabs || []).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPopularTab(tab.id)}
                className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${
                  popularTab === tab.id
                    ? "bg-[#ef3f49] text-white"
                    : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPrograms.map((prog) => renderProgramCard(prog))}
          </div>
        </div>
      </section>

      {/* 6. COMMITMENT SECTION ON SOFT MINT BACKGROUND (#f2faf7) */}
      <section className="py-16 bg-[#f2faf7]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Tall Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                <img
                  src={data.commitmentSection.image}
                  alt={data.commitmentSection.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Heading + 2x2 Feature Cards */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <p className="font-serif italic text-sm text-[#00a870] mb-1">
                  {data.commitmentSection.scriptEyebrow}
                </p>
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] leading-snug mb-2">
                  {data.commitmentSection.heading}
                </h2>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  {data.commitmentSection.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(data.commitmentSection.items || []).map((item) => {
                  const IconComp =
                    item.icon === "trophy"
                      ? Trophy
                      : item.icon === "compass"
                      ? Compass
                      : item.icon === "shield"
                      ? ShieldCheck
                      : Lock;
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-5 shadow-xs border border-[#e6f3ee]"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                        style={{
                          backgroundColor: item.iconBg,
                          color: item.iconColor
                        }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-extrabold text-[#111827] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6b7280] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: ĐỊNH CƯ NGHỈ DƯỠNG & THẺ XANH (8 CARDS) */}
      <section id="dinh-cu-quoc-te" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] mb-1">
                ĐẦU TƯ ĐỊNH CƯ &amp; THẺ XANH QUỐC TẾ
              </h2>
              <p className="text-xs text-[#6b7280]">
                {data.residencySectionSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setResidencyTab("tat-ca")}
              className="bg-[#00a870] hover:bg-[#008f5f] text-white text-xs font-bold px-4 py-2 rounded inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Xem tất cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setResidencyTab("tat-ca")}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${
                residencyTab === "tat-ca"
                  ? "bg-[#ef3f49] text-white"
                  : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
              }`}
            >
              Tất cả
            </button>
            {(data.residencyTabs || []).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setResidencyTab(tab.id)}
                className={`px-4 py-1 rounded-full text-xs font-bold transition-colors ${
                  residencyTab === tab.id
                    ? "bg-[#ef3f49] text-white"
                    : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {residencyPrograms.map((prog) => renderProgramCard(prog))}
          </div>
        </div>
      </section>

      {/* 8. EMERALD TEAL (#00a870) 4-STATS BANNER */}
      <section className="bg-[#00a870] text-white py-12">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {(data.stats || []).map((st, idx) => {
            const IconComp =
              idx === 0
                ? Users
                : idx === 1
                ? Compass
                : idx === 2
                ? ThumbsUp
                : Award;
            return (
              <div key={st.id} className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center mb-3">
                  <IconComp className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-black mb-1">
                  {st.number}
                </div>
                <div className="text-xs text-white/90 font-medium">
                  {st.title}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. SECTION: GÓI TƯ VẤN GIÁ ƯU ĐÃI (4 CARDS) */}
      <section className="py-14 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] mb-1">
                BIỂU PHÍ DỊCH VỤ ƯU ĐÃI
              </h2>
              <p className="text-xs text-[#6b7280]">
                {data.specialOfferSubtitle}
              </p>
            </div>
            <a
              href="#lien-he"
              className="bg-[#00a870] hover:bg-[#008f5f] text-white text-xs font-bold px-4 py-2 rounded inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Xem tất cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOfferPrograms.map((prog) => renderProgramCard(prog))}
          </div>
        </div>
      </section>

      {/* 10. SECTION: ĐÁNH GIÁ KHÁCH HÀNG */}
      <section className="py-12 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="font-serif italic text-sm text-[#00a870] mb-1">
              Đánh Giá Tích Cực
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] mb-1.5">
              ĐÁNH GIÁ KHÁCH HÀNG
            </h2>
            <p className="text-xs text-[#6b7280]">
              Chúng tôi tự hào khi nhận được phản hồi tích cực và cam kết tiếp
              tục bảo vệ quyền lợi pháp lý tốt nhất cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((tm, idx) => (
              <div
                key={tm.id}
                className={`bg-white rounded-xl p-6 shadow-md border border-[#f1f1f1] flex flex-col justify-between ${
                  idx === 1 ? "border-b-4 border-b-[#ef3f49]" : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xs font-extrabold text-[#111827] mb-1">
                        {idx === 0
                          ? "Rất tốt"
                          : idx === 1
                          ? "Tuyệt vời"
                          : "Tốt"}
                      </h3>
                      <div className="flex items-center gap-0.5 text-[#fbbf24]">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]"
                          />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-[#fde2e4]" />
                  </div>
                  <p className="text-xs text-[#6b7280] leading-relaxed mb-5">
                    {tm.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#f3f4f6]">
                  <img
                    src={tm.avatar}
                    alt={tm.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">
                      {tm.author}
                    </h4>
                    <p className="text-[11px] text-[#9ca3af]">{tm.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SECTION: TIN TỨC VÀ KINH NGHIỆM (4 BLOG CARDS) */}
      <section id="tin-tuc" className="py-14 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-[#111827] mb-1">
              TIN TỨC VÀ KINH NGHIỆM DI TRÚ
            </h2>
            <p className="text-xs text-[#6b7280]">
              Cập nhật chính sách luật nhập cư, thuế quốc tế và kinh nghiệm
              phỏng vấn lãnh sự mới nhất
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl border border-[#efefef] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[16/11] overflow-hidden bg-[#f3f4f6]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] text-[#9ca3af] mb-2">
                      <span>{brandName.toLowerCase()}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#111827] group-hover:text-[#ef3f49] transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                  </div>
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ef3f49] hover:underline"
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

      {/* 12. EMERALD TEAL NEWSLETTER BANNER (#00a870) */}
      <section className="bg-[#00a870] text-white py-10">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-base sm:text-xl font-extrabold max-w-lg leading-snug text-center md:text-left">
            {data.newsletterBannerText}
          </h3>

          {newsletterDone ? (
            <div className="bg-white text-[#00a870] px-5 py-3 rounded-lg text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã đăng ký nhận bản tin di trú thành công!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) setNewsletterDone(true);
              }}
              className="flex items-center bg-white rounded-lg p-1 w-full md:w-[400px] shadow-lg"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập Email của bạn..."
                className="flex-1 px-3.5 py-2 text-xs text-[#111827] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#ef3f49] hover:bg-[#d62c36] text-white text-xs font-bold px-5 py-2.5 rounded-md transition-colors shrink-0"
              >
                Đăng ký
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 13. DARK CHARCOAL FOOTER (#13171b) */}
      <footer
        id="lien-he"
        className="bg-[#13171b] text-white/75 pt-14 pb-8 text-xs"
      >
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ef3f49] to-[#00a870] text-white flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-base font-black uppercase text-white">
                  {brandName}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-white/65">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-3 pt-2 text-white/75">
                <a href="#lien-he" className="hover:text-[#ef3f49] font-bold">
                  𝕏
                </a>
                <a href="#lien-he" className="hover:text-[#ef3f49] font-bold">
                  f
                </a>
                <a href="#lien-he" className="hover:text-[#ef3f49] font-bold">
                  IG
                </a>
                <a href="#lien-he" className="hover:text-[#ef3f49] font-bold">
                  P
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2 space-y-2">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                Về chúng tôi
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ef3f49]">
                    Câu chuyện thương hiệu
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#ef3f49]">
                    Cẩm nang luật di trú
                  </a>
                </li>
                <li>
                  <a href="#dinh-cu-quoc-te" className="hover:text-[#ef3f49]">
                    Đội ngũ luật sư quốc tế
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ef3f49]">
                    Hợp tác đối tác toàn cầu
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-3 space-y-2.5">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                Thông tin liên hệ
              </h4>
              <p className="flex items-start gap-2 text-[11px] leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#ef3f49] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <Phone className="w-3.5 h-3.5 text-[#ef3f49] shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#ef3f49]"
                >
                  {primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-[#ef3f49] shrink-0" />
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hover:text-[#ef3f49]"
                >
                  {primaryEmail}
                </a>
              </p>
            </div>

            {/* Col 4: Hình ảnh */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                Hình ảnh
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {(data.footerGallery || []).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded overflow-hidden bg-white/10"
                  >
                    <img
                      src={imgUrl}
                      alt={`Hoạt động ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <span className="font-bold text-white">{brandName}</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-white text-[#111827] text-[9px] font-black px-2 py-0.5 rounded-xs">
                VISA
              </span>
              <span className="bg-white text-[#111827] text-[9px] font-black px-2 py-0.5 rounded-xs">
                MASTERCARD
              </span>
              <span className="bg-white text-[#111827] text-[9px] font-black px-2 py-0.5 rounded-xs">
                PAYPAL
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded bg-[#ef3f49] hover:bg-[#d62c36] text-white shadow-lg flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* VISA PROGRAM QUICK-VIEW MODAL */}
      {selectedProgram && (
        <div
          onClick={() => setSelectedProgram(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square relative bg-[#f3f4f6]">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#00a870] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Tỷ lệ đậu: {selectedProgram.successRate}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase text-[#ef3f49]">
                      {selectedProgram.visaType}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProgram(null)}
                      className="text-[#9ca3af] hover:text-[#111827]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-base font-extrabold text-[#111827] mb-2">
                    {selectedProgram.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#ef3f49]">
                      {selectedProgram.price}
                    </span>
                    {selectedProgram.oldPrice && (
                      <span className="text-xs text-[#9ca3af] line-through">
                        {selectedProgram.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#4b5563] leading-relaxed mb-4">
                    {selectedProgram.description}
                  </p>
                  <div className="space-y-1 text-xs text-[#374151] border-y border-[#e5e7eb] py-3 mb-4">
                    <p>
                      <strong>Quốc gia:</strong>{" "}
                      {selectedProgram.countryLocation}
                    </p>
                    <p>
                      <strong>Thời gian xử lý:</strong>{" "}
                      {selectedProgram.processingTime}
                    </p>
                    <p>
                      <strong>Tỷ lệ chấp thuận:</strong>{" "}
                      {selectedProgram.successRate}
                    </p>
                  </div>
                </div>

                {consultDone ? (
                  <div className="bg-[#f2faf7] border border-[#00a870] rounded-lg p-3 text-xs text-[#111827] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00a870] shrink-0" />
                    <span>
                      Đã đăng ký thẩm định hồ sơ{" "}
                      <strong>{selectedProgram.title}</strong>! Luật sư sẽ liên
                      hệ trong 15 phút.
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setConsultDone(true)}
                      className="flex-1 bg-[#ef3f49] hover:bg-[#d62c36] text-white text-xs font-bold uppercase py-3 rounded-lg transition-colors"
                    >
                      Đặt lịch thẩm định hồ sơ
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="bg-[#00a870] text-white text-xs font-bold uppercase py-3 px-4 rounded-lg"
                    >
                      Gọi ngay
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
