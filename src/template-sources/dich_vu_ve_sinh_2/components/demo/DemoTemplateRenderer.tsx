"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Clock,
  PhoneCall,
  Search,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  Building2,
  Factory,
  Sofa,
  SprayCan,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronRight,
  Calendar,
  MessageSquare,
  Send,
  ArrowUp,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  dichVuVeSinh2DefaultData,
  type DichVuVeSinh2Data
} from "@/template-sources/dich_vu_ve_sinh_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: DichVuVeSinh2Data = adaptClonedTemplateData(
    dichVuVeSinh2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState<string>("acc-1");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const testimonials = data.testimonials || dichVuVeSinh2DefaultData.testimonials || [];
  const newsList = data.news || dichVuVeSinh2DefaultData.news || [];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setContactName("");
    setContactPhone("");
    setContactMessage("");
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-[#22a447] selection:text-white"
    >
      {/* 1. TOPBAR + WHITE STICKY HEADER (Matches VS005 left dark-green brand block + right 2-tier header) */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-stretch">
          {/* Left Dark-Green Logo Block */}
          <a
            href="#top"
            className="bg-[#08381a] text-white px-6 sm:px-8 py-4 flex flex-col justify-center shrink-0 min-w-[180px] sm:min-w-[230px]"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#22a447]" />
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                {data.business.name.split(" ")[0] || "CleanGlow"}
              </span>
            </div>
            <span className="text-[10px] text-emerald-300/80 tracking-wider uppercase mt-0.5 line-clamp-1">
              {data.business.name}
            </span>
          </a>

          {/* Right 2-Row Container */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Top Utility Bar */}
            <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-slate-50 border-b border-slate-100 text-[11px] text-slate-600">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#22a447]" />
                  {data.business.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#22a447]" />
                  {primaryEmail}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#22a447]" />
                  {data.business.workingHours || "Thứ 2 - Thứ 7: 08:00 - 20:00"}
                </span>
              </div>
              <div className="flex items-center gap-3 font-bold text-slate-500">
                <a href="#contact" className="hover:text-[#22a447]">
                  FB
                </a>
                <a href="#contact" className="hover:text-[#22a447]">
                  IG
                </a>
                <a href="#contact" className="hover:text-[#22a447]">
                  ZALO
                </a>
              </div>
            </div>

            {/* Bottom Main Nav Row */}
            <div className="flex-1 flex items-center justify-between px-4 sm:px-6 py-3">
              <nav className="hidden md:flex items-center gap-7 text-xs sm:text-[13px] font-bold text-slate-700">
                <a href="#top" className="text-[#22a447]">
                  Trang chủ
                </a>
                <a href="#about" className="hover:text-[#22a447] transition-colors">
                  Giới thiệu
                </a>
                <a href="#services" className="hover:text-[#22a447] transition-colors">
                  Dịch vụ
                </a>
                <a href="#news" className="hover:text-[#22a447] transition-colors">
                  Tin tức
                </a>
                <a href="#contact" className="hover:text-[#22a447] transition-colors">
                  Liên hệ
                </a>
              </nav>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700"
                aria-label="Mở menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4">
                <a
                  href="#services"
                  aria-label="Tìm kiếm dịch vụ"
                  className="text-slate-500 hover:text-[#22a447] p-1.5"
                >
                  <Search className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2.5 group"
                >
                  <span className="w-9 h-9 rounded-full bg-[#22a447] text-white flex items-center justify-center shadow-sm group-hover:bg-[#1a8236] transition-colors">
                    <PhoneCall className="w-4 h-4" />
                  </span>
                  <div className="hidden sm:block text-left leading-tight">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      HOTLINE
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 group-hover:text-[#22a447]">
                      {primaryPhone}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#22a447]"
            >
              Giới thiệu
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#22a447]"
            >
              Dịch vụ vệ sinh
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#22a447]"
            >
              Tin tức & Mẹo hay
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#22a447]"
            >
              Đăng ký tư vấn
            </a>
          </div>
        )}
      </header>

      {/* 2. FULLWIDTH CLEANING HERO */}
      <section className="relative h-[460px] sm:h-[540px] lg:h-[600px] flex items-center overflow-hidden bg-slate-900 text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8">
          <div className="max-w-xl">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-3">
              {data.hero.eyebrow || "DỊCH VỤ UY TÍN - CHẤT LƯỢNG HÀNG ĐẦU"}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.12] text-white mb-7 drop-shadow">
              {data.hero.title}
            </h1>
            <a
              href={data.hero.ctaLink || "#services"}
              className="inline-block bg-[#22a447] hover:bg-[#1b8a3b] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
            >
              {data.hero.ctaText || "KHÁM PHÁ"}
            </a>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          <span className="w-5 h-1.5 rounded-full bg-[#22a447]" />
          <span className="w-2 h-1.5 rounded-full bg-white/50" />
          <span className="w-2 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* 3. "VỀ CHÚNG TÔI" SPLIT SECTION */}
      <section id="about" className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Collage + Green "1000+ Khách hàng được phục vụ" Badge */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 relative">
              <div className="space-y-3">
                <div className="h-48 sm:h-56 rounded-lg overflow-hidden">
                  <img
                    src={data.aboutCollage.images[0]}
                    alt="Nhân viên vệ sinh chuyên nghiệp"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-44 sm:h-52 rounded-lg overflow-hidden">
                  <img
                    src={data.aboutCollage.images[1]}
                    alt="Vệ sinh công nghiệp"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 flex flex-col">
                {/* Bright Green 1000+ Badge */}
                <div className="bg-[#32c744] text-white rounded-lg p-5 flex flex-col justify-center shadow-md">
                  <span className="text-2xl sm:text-3xl font-extrabold leading-none">
                    {data.aboutCollage.badgeNumber}
                  </span>
                  <span className="text-xs font-semibold text-white/95 mt-1">
                    {data.aboutCollage.badgeLabel}
                  </span>
                </div>
                <div className="flex-1 min-h-[240px] rounded-lg overflow-hidden">
                  <img
                    src={data.aboutCollage.images[2]}
                    alt="Làm sạch bàn kính"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6">
              <p className="text-xs font-bold text-[#22a447] mb-1">
                {data.business.name}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 mb-4">
                {data.business.aboutTitle || "VỀ CHÚNG TÔI"}
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-6">
                {data.business.aboutText[0]}
              </p>

              {/* 2 Bordered Icon Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {data.aboutCollage.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-100 bg-slate-50/70"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#22a447] flex items-center justify-center shrink-0">
                      {pillar.icon === "shield" ? (
                        <ShieldCheck className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {pillar.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* 3 Green Checkmarks */}
              <ul className="space-y-2.5 mb-7">
                {data.aboutCollage.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#22a447] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">{item.label}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#services"
                className="inline-block bg-[#22a447] hover:bg-[#1a8236] text-white text-xs font-bold uppercase tracking-wider px-7 py-3 rounded transition-colors"
              >
                KHÁM PHÁ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "VÌ SAO CHỌN CHÚNG TÔI" (3x2 Service Grid) */}
      <section id="services" className="py-16 lg:py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#22a447] mb-1">
              Cam kết giá trị cho khách hàng
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              VÌ SAO CHỌN CHÚNG TÔI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyChooseCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-slate-100 rounded-xl p-7 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all relative overflow-hidden group"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#22a447] flex items-center justify-center shrink-0 group-hover:bg-[#22a447] group-hover:text-white transition-colors">
                    {card.icon === "shield" && <ShieldCheck className="w-5 h-5" />}
                    {card.icon === "sparkles" && <Sparkles className="w-5 h-5" />}
                    {card.icon === "spray" && <SprayCan className="w-5 h-5" />}
                    {card.icon === "factory" && <Factory className="w-5 h-5" />}
                    {card.icon === "sofa" && <Sofa className="w-5 h-5" />}
                    {card.icon === "building" && <Building2 className="w-5 h-5" />}
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">
                  {card.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-slate-400 group-hover:text-[#22a447] transition-colors"
                  aria-label={card.title}
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "CÁC DỊCH VỤ NỔI BẬT" (3 Tall Photo Cards) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#22a447] mb-1">Dịch vụ đa dạng</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              CÁC DỊCH VỤ NỔI BẬT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.featuredServices.map((srv) => (
              <a
                key={srv.id}
                href="#contact"
                className="group relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-md block"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-base sm:text-lg font-extrabold mb-1 group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-white/75">{srv.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Slider dots */}
          <div className="flex items-center justify-center gap-1.5 mt-8">
            <span className="w-4 h-1 rounded-full bg-[#22a447]" />
            <span className="w-2 h-1 rounded-full bg-slate-300" />
            <span className="w-2 h-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* 6. "ĐÁNH GIÁ CỦA KHÁCH HÀNG" */}
      <section className="py-16 lg:py-24 bg-[#f4f7f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#22a447] mb-1">Khách hàng đánh giá</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              ĐÁNH GIÁ CỦA KHÁCH HÀNG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-xs border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                          {item.author}
                        </h4>
                        <span className="text-[11px] font-semibold text-[#22a447]">
                          {item.role || "Khách hàng"}
                        </span>
                      </div>
                    </div>
                    <span className="text-3xl font-serif font-bold text-[#22a447] leading-none">
                      ”
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{item.content}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-600">9 tháng 2, 2026</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "CHÚNG TÔI TẬN TÂM MANG LẠI KHÔNG GIAN SẠCH SẼ" (#eff6ff soft blue/mint section) */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#e8f2fc] via-[#eff6ff] to-[#f0fdf4] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side Title, Description & Interactive 4-Item Accordion */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900 leading-snug mb-3">
                {data.dedicationSection.title}
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-7">
                {data.dedicationSection.description}
              </p>

              <div className="space-y-3">
                {data.dedicationSection.accordions.map((acc) => {
                  const isOpen = openAccordionId === acc.id;
                  return (
                    <div
                      key={acc.id}
                      className={`rounded-lg transition-all ${
                        isOpen
                          ? "bg-white shadow-sm border border-slate-200/80"
                          : "bg-white/70 hover:bg-white border border-transparent"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenAccordionId(isOpen ? "" : acc.id)}
                        className="w-full px-5 py-3.5 flex items-center justify-between text-left"
                      >
                        <span className="text-xs sm:text-[13px] font-extrabold text-slate-800">
                          {acc.title}
                        </span>
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-xs text-slate-500 leading-relaxed">
                          {acc.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side Friendly Cleaning Specialist Portrait */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={data.dedicationSection.specialistImage}
                  alt="Chuyên viên vệ sinh CleanGlow"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl shadow flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#22a447] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">
                      Đội ngũ nhân sự lý lịch rõ ràng, đào tạo bài bản
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Phục vụ tận tâm 24/7 tại TP.HCM và các tỉnh lân cận
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "TIN TỨC - KIẾN THỨC VỆ SINH" */}
      <section id="news" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#22a447] mb-1">Blog & Tin tức</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              TIN TỨC - KIẾN THỨC VỆ SINH
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Large Featured Article Card */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden group min-h-[340px] sm:min-h-[380px] shadow-sm">
              <img
                src={data.featuredArticle.image}
                alt={data.featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 text-[11px] text-white/80 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#22a447]" />
                    {data.featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#22a447]" />
                    {data.featuredArticle.comments}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold leading-snug mb-3">
                  {data.featuredArticle.title}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-400"
                >
                  CHI TIẾT <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 3 Horizontal Article Cards */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              {newsList.map((post) => (
                <article
                  key={post.id}
                  className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-3 hover:shadow-md transition-all group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-28 sm:w-32 h-24 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#22a447]" />
                        {post.date}
                      </span>
                      <span>• 0 bình luận</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#22a447] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. "ĐĂNG KÝ NHẬN TƯ VẤN" */}
      <section id="contact" className="py-16 lg:py-24 bg-[#fafbfc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#22a447] mb-1">Hỗ trợ khách hàng</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-900">
              ĐĂNG KÝ NHẬN TƯ VẤN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Map Preview + Consultation Form */}
            <div className="lg:col-span-6 space-y-4">
              {/* Stylized Map Box */}
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 h-44 relative">
                <iframe
                  title="Bản đồ văn phòng"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.645%2C10.780%2C106.665%2C10.795&layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded shadow text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {data.business.address}
                </div>
              </div>

              {contactSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#22a447] mx-auto" />
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Gửi yêu cầu tư vấn thành công!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Chuyên viên tư vấn của {data.business.name} sẽ gọi lại báo giá trong vòng 15
                    phút.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Họ tên*"
                    className="w-full bg-white border border-slate-200 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#22a447]"
                  />
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Số điện thoại*"
                    className="w-full bg-white border border-slate-200 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#22a447]"
                  />
                  <textarea
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Nội dung cần tư vấn (diện tích, gói vệ sinh...)"
                    className="w-full bg-white border border-slate-200 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#22a447]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#22a447] hover:bg-[#1a8236] text-white text-xs font-extrabold uppercase tracking-wider py-3 rounded transition-colors"
                  >
                    GỬI LIÊN HỆ
                  </button>
                </form>
              )}
            </div>

            {/* Right Green-Bordered Contact Card */}
            <div className="lg:col-span-6 border border-emerald-300/80 rounded-lg bg-white p-8 flex flex-col items-center justify-center text-center space-y-6">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1">Địa chỉ</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  {data.business.address}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold uppercase text-slate-900 mb-1">
                  SỐ ĐIỆN THOẠI
                </h3>
                <a
                  href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs text-slate-600 hover:text-[#22a447] font-semibold"
                >
                  {primaryPhone}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-extrabold uppercase text-slate-900 mb-1">EMAIL</h3>
                <p className="text-xs text-slate-500">{primaryEmail}</p>
              </div>

              <div>
                <h3 className="text-sm font-extrabold uppercase text-slate-900 mb-2.5">
                  MẠNG XÃ HỘI
                </h3>
                <div className="flex items-center justify-center gap-3">
                  {["FB", "IG", "X"].map((soc) => (
                    <a
                      key={soc}
                      href="#contact"
                      className="w-8 h-8 rounded-full bg-emerald-50 text-[#22a447] hover:bg-[#22a447] hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                    >
                      {soc}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK FOOTER */}
      <footer className="relative bg-[#11181c] text-white/80 pt-16 pb-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#22a447]" />
                <span className="text-lg font-extrabold text-white">{data.business.name}</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Chúng tôi làm việc với niềm đam mê mang lại không gian sống và làm việc sạch bóng,
                an toàn cho mọi gia đình và doanh nghiệp Việt.
              </p>
            </div>

            {/* Col 2: LIÊN HỆ */}
            <div className="lg:col-span-4 space-y-2.5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
                LIÊN HỆ
              </h4>
              <p className="text-xs text-white/70 flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#22a447] shrink-0" />
                {primaryPhone}
              </p>
              <p className="text-xs text-white/70 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#22a447] shrink-0" />
                {primaryEmail}
              </p>
              <p className="text-xs text-white/70 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#22a447] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
            </div>

            {/* Col 3: DANH MỤC */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li>
                  <a href="#top" className="hover:text-[#22a447]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#22a447]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#22a447]">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-[#22a447]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#22a447]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ TIN TỨC */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
                ĐĂNG KÝ TIN TỨC
              </h4>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Đăng ký để nhận tin tức mới nhất kèm theo ưu đãi hấp dẫn.
              </p>
              <div className="flex items-center border border-white/20 rounded bg-white/5 px-3 py-2">
                <input
                  type="email"
                  placeholder="Email..."
                  className="bg-transparent text-xs text-white placeholder:text-white/40 focus:outline-none flex-1"
                />
                <Send className="w-3.5 h-3.5 text-white/70" />
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="w-7 h-7 rounded bg-[#22a447] text-white flex items-center justify-center hover:bg-[#1a8236]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
