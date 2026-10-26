"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Compass,
  Wrench,
  ShieldCheck,
  Users,
  FileCheck2,
  Award,
  Star,
  Calendar,
  Play,
  Building2,
  Ruler,
  Layers,
  X,
  Menu,
  Quote
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung3DefaultData,
  type XayDung3TemplateData
} from "@/template-sources/xay_dung_fixera/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung3TemplateData = adaptClonedTemplateData(
    xayDung3DefaultData,
    incomingData
  );

  const [activeCategory, setActiveCategory] = useState<string>("Tất cả");
  const [activePricingId, setActivePricingId] = useState<string>(
    data.pricingPackages?.[1]?.id || data.pricingPackages?.[0]?.id || "pkg-2"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<
    NonNullable<XayDung3TemplateData["projects"]>[number] | null
  >(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [selectedPackageTitle, setSelectedPackageTitle] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "Xây nhà trọn gói",
    area: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0909 686 888";
  const primaryEmail = data.business.email?.[0] || "info@fixera.vn";

  const categories = data.projectCategories || [
    "Tất cả",
    "Đã hoàn thành",
    "Đang thi công",
    "Dự án nhà phố"
  ];

  const filteredProjects = (data.projects || []).filter((item) => {
    if (activeCategory === "Tất cả") return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const activePricing =
    (data.pricingPackages || []).find((p) => p.id === activePricingId) ||
    data.pricingPackages?.[0];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setLeadForm({
        fullName: "",
        phone: "",
        email: "",
        projectType: "Xây nhà trọn gói",
        area: ""
      });
    }, 3500);
  };

  const renderServiceIcon = (iconName?: string) => {
    switch (iconName) {
      case "compass":
        return <Compass className="w-6 h-6 text-white" />;
      case "wrench":
        return <Wrench className="w-6 h-6 text-white" />;
      default:
        return <HardHat className="w-6 h-6 text-white" />;
    }
  };

  const renderFeatureIcon = (iconName?: string) => {
    switch (iconName) {
      case "users":
        return <Users className="w-6 h-6 text-[#e83e26]" />;
      case "file-check":
        return <FileCheck2 className="w-6 h-6 text-[#e83e26]" />;
      case "award":
        return <Award className="w-6 h-6 text-[#e83e26]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#e83e26]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-[#e83e26] selection:text-white">
      {/* 1. TOPBAR (#111827) + STICKY WHITE NAVBAR */}
      <div className="bg-[#111827] text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e83e26] shrink-0" />
              <span className="truncate max-w-[300px] sm:max-w-none">
                {data.business.address}
              </span>
            </span>
            <a
              href={`mailto:${primaryEmail}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#e83e26] shrink-0" />
              <span>{primaryEmail}</span>
            </a>
            {data.business.workingHours && (
              <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#e83e26] shrink-0" />
                <span>{data.business.workingHours}</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 hidden sm:inline">
              Theo dõi chúng tôi:
            </span>
            <div className="flex items-center gap-2.5">
              {["FB", "IG", "IN", "YT"].map((soc) => (
                <a
                  key={soc}
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-slate-800 hover:bg-[#e83e26] text-[10px] font-bold text-white flex items-center justify-center transition"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="w-11 h-11 rounded-xl bg-[#e83e26] flex items-center justify-center text-white shadow-md shadow-[#e83e26]/25 group-hover:scale-105 transition">
                <HardHat className="w-6 h-6" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0f172a] uppercase leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#e83e26] uppercase mt-1">
                Design & Build
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#" className="text-[#e83e26] transition">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#e83e26] transition">
              Giới thiệu
            </a>
            <a href="#dich-vu" className="hover:text-[#e83e26] transition">
              Dịch vụ
            </a>
            <a href="#du-an" className="hover:text-[#e83e26] transition">
              Dự án
            </a>
            <a href="#bao-gia" className="hover:text-[#e83e26] transition">
              Bảng giá
            </a>
            <a href="#tin-tuc" className="hover:text-[#e83e26] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#e83e26] transition">
              Liên hệ
            </a>
          </nav>

          {/* Phone Call Badge + Red CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2.5 pr-2 group"
            >
              <span className="w-10 h-10 rounded-full bg-[#e83e26]/10 text-[#e83e26] flex items-center justify-center group-hover:bg-[#e83e26] group-hover:text-white transition">
                <Phone className="w-4 h-4" />
              </span>
              <div className="text-left leading-tight">
                <span className="block text-[11px] text-slate-500 font-medium">
                  Hotline 24/7
                </span>
                <span className="text-sm font-extrabold text-[#0f172a]">
                  {primaryPhone}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => {
                setSelectedPackageTitle("Tư vấn báo giá tổng thể");
                setQuoteModalOpen(true);
              }}
              className="bg-[#e83e26] hover:bg-[#cf321b] text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-lg shadow-md shadow-[#e83e26]/25 transition flex items-center gap-2 cursor-pointer"
            >
              <span>NHẬN BÁO GIÁ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg border border-slate-200 text-slate-700"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-slate-700">
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-slate-50"
              >
                Giới thiệu
              </a>
              <a
                href="#dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-slate-50"
              >
                Dịch vụ
              </a>
              <a
                href="#du-an"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-slate-50"
              >
                Dự án
              </a>
              <a
                href="#bao-gia"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-slate-50"
              >
                Bảng giá
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-slate-50"
              >
                Tin tức
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-slate-50"
              >
                Liên hệ
              </a>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-sm font-bold text-[#0f172a] flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e83e26]" />
                {primaryPhone}
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="bg-[#e83e26] text-white text-xs font-bold uppercase px-4 py-2.5 rounded-lg"
              >
                NHẬN BÁO GIÁ
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION (Matches XD003-xay_dung_3.png) */}
      <section className="relative min-h-[580px] lg:min-h-[650px] flex items-center overflow-hidden bg-[#0f172a]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-white/15 text-white text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e83e26]" />
              <span>{data.hero.eyebrow || "ĐỒNG HÀNH CÙNG MỌI CÔNG TRÌNH"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.14] tracking-tight mb-6">
              {data.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-9 max-w-xl">
              {data.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#bao-gia"}
                className="inline-flex items-center gap-3 bg-[#e83e26] hover:bg-[#d1321b] text-white font-bold text-sm uppercase tracking-wider pl-6 pr-2.5 py-2.5 rounded-lg shadow-lg shadow-[#e83e26]/30 transition group"
              >
                <span>{data.hero.ctaText}</span>
                <span className="w-8 h-8 rounded-md bg-white text-[#e83e26] flex items-center justify-center group-hover:translate-x-0.5 transition">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
              </a>

              <a
                href={data.hero.secondaryCtaLink || "#du-an"}
                className="inline-flex items-center gap-2 border-2 border-white/80 hover:bg-white hover:text-[#0f172a] text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition"
              >
                <span>{data.hero.secondaryCtaText || "XEM DỰ ÁN TIÊU BIỂU"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SPLIT SECTION ("25 NĂM KINH NGHIỆM") */}
      <section id="gioi-thieu" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left overlapping engineer + building photos + vertical 25+ badge */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-end">
                {/* Top-left engineer portrait */}
                <div className="col-span-7 relative z-10">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5]">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                      alt="Đội ngũ kỹ sư"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right accent shape */}
                <div className="col-span-5 pb-6">
                  <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-[#e83e26]/10 text-[#e83e26] flex items-center justify-center mb-3">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      CHỨNG NHẬN ISO
                    </p>
                    <p className="text-base font-extrabold text-[#0f172a] mt-0.5">
                      Chuẩn Kỹ Thuật Xây Dựng Quốc Gia
                    </p>
                  </div>
                </div>

                {/* Bottom-left vertical experience badge */}
                <div className="col-span-4 flex flex-col justify-center items-center bg-[#fff5f3] border border-[#e83e26]/20 rounded-2xl p-5 text-center self-stretch">
                  <span className="text-4xl sm:text-5xl font-black text-[#e83e26] leading-none">
                    {data.business.experienceYears || "25+"}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mt-2 leading-snug">
                    NĂM KINH NGHIỆM THỰC CHIẾN
                  </span>
                </div>

                {/* Bottom-right architectural building photo */}
                <div className="col-span-8 -mt-12 relative z-20">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/11]">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80"
                      alt="Công trình tiêu biểu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6">
              <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-4">
                VỀ CHÚNG TÔI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight mb-5">
                {data.business.aboutTitle ||
                  "Giải pháp tối ưu về thiết kế xây dựng và sửa chữa"}
              </h2>

              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed mb-7">
                {(data.business.aboutText || []).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* 2x3 Grid of 6 red checkmark highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {(data.business.highlights || []).slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#e83e26]/15 text-[#e83e26] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Red CTA + Hotline Block */}
              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-100">
                <a
                  href="#lien-he"
                  className="bg-[#e83e26] hover:bg-[#cf321b] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md shadow-[#e83e26]/25 transition"
                >
                  Liên hệ ngay
                </a>

                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-11 h-11 rounded-full bg-[#e83e26] text-white flex items-center justify-center shadow-md shadow-[#e83e26]/30 group-hover:scale-105 transition">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500">
                      Bạn có thắc mắc?
                    </span>
                    <span className="text-base font-extrabold text-[#0f172a]">
                      {primaryPhone}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3 SERVICE CARDS ("Cung cấp dịch vụ xây dựng toàn diện") */}
      <section id="dich-vu" className="py-20 bg-[#f8fafc] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-5">
              <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
                DỊCH VỤ CỦA CHÚNG TÔI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight">
                Cung cấp dịch vụ xây dựng toàn diện
              </h2>
            </div>
            <div className="lg:col-span-5 text-sm text-slate-600 leading-relaxed">
              {data.business.name} mang đến đầy đủ các dịch vụ thiết kế kiến trúc, thi công xây dựng và cải tạo nâng cấp cho nhà phố, biệt thự và công trình thương mại.
            </div>
            <div className="lg:col-span-2 flex lg:justify-end gap-2">
              <a
                href="#bao-gia"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:border-[#e83e26] hover:text-[#e83e26] flex items-center justify-center transition"
                aria-label="Trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </a>
              <a
                href="#bao-gia"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:border-[#e83e26] hover:text-[#e83e26] flex items-center justify-center transition"
                aria-label="Tiếp"
              >
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.services || []).slice(0, 3).map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={
                      srv.image ||
                      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                    }
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Overlapping circular orange/red icon badge */}
                  <div className="absolute -bottom-6 right-6 w-14 h-14 rounded-full bg-[#e83e26] border-4 border-white shadow-lg flex items-center justify-center">
                    {renderServiceIcon(srv.icon)}
                  </div>
                </div>

                <div className="p-7 pt-9 flex-1 flex flex-col">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#e83e26] mb-1.5">
                    {srv.category || "THIẾT KẾ XÂY DỰNG"}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f172a] group-hover:text-[#e83e26] transition mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {srv.description}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPackageTitle(srv.title);
                        setQuoteModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0f172a] group-hover:text-[#e83e26] transition cursor-pointer"
                    >
                      <span>XEM CHI TIẾT</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {srv.price && (
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                        {srv.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RED COUNTER STRIP (#e83e26) */}
      <section className="relative py-16 bg-[#e83e26] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {(data.stats || []).map((st, idx) => (
              <div key={st.id || idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white text-[#e83e26] flex items-center justify-center shadow-lg mb-4">
                  {idx === 0 && <Building2 className="w-8 h-8" />}
                  {idx === 1 && <HardHat className="w-8 h-8" />}
                  {idx === 2 && <Layers className="w-8 h-8" />}
                  {idx >= 3 && <Users className="w-8 h-8" />}
                </div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight mb-1">
                  {st.number}
                </div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/95">
                  {st.title}
                </div>
                {st.subtitle && (
                  <div className="text-xs text-white/80 mt-0.5">{st.subtitle}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FILTERABLE 6-PROJECT GRID ("CÁC DỰ ÁN TIÊU BIỂU") */}
      <section id="du-an" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
              CÁC DỰ ÁN TIÊU BIỂU
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-3">
              Khám phá danh mục dự án ấn tượng
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Hàng trăm công trình nhà phố, biệt thự và tòa nhà thương mại được đội ngũ {data.business.name} thiết kế & thi công trọn gói.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                    isActive
                      ? "bg-[#e83e26] text-white shadow-md shadow-[#e83e26]/25"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3x2 Grid of 6 Architectural Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer aspect-[4/3] bg-slate-900"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent opacity-85 group-hover:opacity-95 transition" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-xs text-slate-300 flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#e83e26]" />
                    <span>{project.location || "TP. Hồ Chí Minh"}</span>
                    {project.price && (
                      <span className="ml-auto text-[11px] bg-white/15 px-2 py-0.5 rounded">
                        {project.price}
                      </span>
                    )}
                  </p>
                  <h3 className="text-lg font-extrabold leading-snug group-hover:text-[#e83e26] transition">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SAFETY & PROCESS SPLIT CARD ("Tiêu chí an toàn và bền vững") */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo + 3 Numbered Steps Dark/Red Feature Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Tiêu chí an toàn và bền vững"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#e83e26] font-extrabold">
                      QUY TRÌNH CHUẨN ISO 9001
                    </span>
                    <p className="text-lg font-bold">
                      Giám sát chất lượng 3 lớp nghiêm ngặt
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Numbered Steps Card */}
              <div className="bg-[#0f172a] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-4">
                {(data.processSteps || []).map((step) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-b-0 border-slate-800"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#e83e26] text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Engineer Content + Video Thumbnail + Progress Bars */}
            <div className="lg:col-span-6">
              <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
                QUY TRÌNH LÀM VIỆC CỦA CHÚNG TÔI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight mb-4">
                Tiêu chí an toàn và bền vững
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Mỗi công trình của {data.business.name} đều tuân thủ nghiêm ngặt quy chuẩn an toàn lao động, tuyển chọn vật liệu thân thiện môi trường và kiểm soát tiến độ từng tuần.
              </p>

              {/* Video preview + 4 checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-7 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="sm:col-span-5 relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
                    alt="Video công trình"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/35 flex items-center justify-center">
                    <span className="w-11 h-11 rounded-full bg-[#e83e26] text-white flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-7 space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e83e26] shrink-0" />
                    <span>Đảm bảo an toàn lao động 100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e83e26] shrink-0" />
                    <span>Vật liệu chính hãng thân thiện môi trường</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e83e26] shrink-0" />
                    <span>Tối ưu công năng cho mọi diện tích đất</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e83e26] shrink-0" />
                    <span>Hoàn thiện nhanh chóng, đúng cam kết</span>
                  </div>
                </div>
              </div>

              {/* 3 Progress Bars */}
              <div className="space-y-4 mb-8">
                {(data.progressMetrics || []).map((metric) => (
                  <div key={metric.id}>
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0f172a] mb-1.5">
                      <span>{metric.label}</span>
                      <span className="text-[#e83e26]">{metric.percentage}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#e83e26] rounded-full"
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPackageTitle("Tư vấn kỹ thuật & thi công");
                    setQuoteModalOpen(true);
                  }}
                  className="bg-[#e83e26] hover:bg-[#cf321b] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-md shadow-[#e83e26]/25 transition cursor-pointer"
                >
                  Liên hệ ngay
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3"
                >
                  <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-[#e83e26]">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="block text-xs text-slate-500">
                      Bạn có thắc mắc?
                    </span>
                    <span className="text-sm font-extrabold text-[#0f172a]">
                      {primaryPhone}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DARK NAVY FEATURES SECTION (#0f172a - "ĐẶC ĐIỂM NỔI BẬT") */}
      <section className="py-20 lg:py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-4">
                ĐẶC ĐIỂM NỔI BẬT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5">
                Tại sao hàng ngàn khách hàng tin chọn chúng tôi?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {data.business.name} đặt sự minh bạch, an toàn kết cấu và trải nghiệm của gia chủ lên hàng đầu trong mọi dự án từ nhà phố đến biệt thự cao cấp.
              </p>
              <a
                href="#bao-gia"
                className="inline-flex items-center gap-2 bg-[#e83e26] hover:bg-[#cf321b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-lg shadow-[#e83e26]/30 transition"
              >
                <span>Liên hệ tư vấn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(data.featureCards || []).map((card) => (
                <div
                  key={card.id}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/70 hover:border-[#e83e26] rounded-2xl p-6 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e83e26]/15 border border-[#e83e26]/30 flex items-center justify-center mb-4">
                    {renderFeatureIcon(card.icon)}
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-[#e83e26] transition">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-slate-400 group-hover:text-[#e83e26] transition">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TEAM SECTION ("ĐỘI NGŨ CHUYÊN GIA") */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
              ĐỘI NGŨ CHUYÊN GIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] uppercase">
              ĐỘI NGŨ CỐT LÕI CỦA CHÚNG TÔI
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Gặp gỡ những kỹ sư trưởng và kiến trúc sư giàu kinh nghiệm trực tiếp điều hành dự án
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.team || []).map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] mb-4 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/30 to-transparent opacity-0 group-hover:opacity-100 transition flex justify-center gap-2">
                    {["FB", "IN", "ZL"].map((s) => (
                      <a
                        key={s}
                        href="#lien-he"
                        className="w-8 h-8 rounded-full bg-[#e83e26] text-white text-[10px] font-bold flex items-center justify-center"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-[#0f172a]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. RED PRICING TABS SECTION (#e83e26 background - "Cung cấp giá xây dựng minh bạch, hợp lý") */}
      <section
        id="bao-gia"
        className="py-20 lg:py-24 bg-[#e83e26] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-6">
              <span className="inline-block bg-white/20 text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
                DỊCH VỤ CHÚNG TÔI CUNG CẤP
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Cung cấp giá xây dựng minh bạch, hợp lý
              </h2>
            </div>
            <div className="lg:col-span-6 text-sm sm:text-base text-white/90 leading-relaxed">
              Với đội ngũ kỹ sư chuyên nghiệp, tận tâm và quy trình kiểm soát vật tư chặt chẽ, {data.business.name} cam kết báo giá rõ ràng từng hạng mục, không phát sinh.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 4 interactive vertical tab buttons */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              {(data.pricingPackages || []).map((pkg, idx) => {
                const isSelected = activePricing?.id === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setActivePricingId(pkg.id)}
                    className={`w-full text-left rounded-xl p-4 sm:p-5 transition flex items-center gap-4 shadow-md cursor-pointer ${
                      isSelected
                        ? "bg-[#0f172a] text-white ring-2 ring-white/40"
                        : "bg-white text-[#0f172a] hover:bg-slate-50"
                    }`}
                  >
                    <span className="w-11 h-11 rounded-full bg-[#e83e26] text-white flex items-center justify-center shrink-0 shadow">
                      {idx === 0 && <Layers className="w-5 h-5" />}
                      {idx === 1 && <Building2 className="w-5 h-5" />}
                      {idx === 2 && <Ruler className="w-5 h-5" />}
                      {idx >= 3 && <Wrench className="w-5 h-5" />}
                    </span>
                    <div>
                      <span className="block text-base font-extrabold">
                        {pkg.tabLabel}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          isSelected ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        Đơn giá: {pkg.pricePerM2} {pkg.unitNote}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right crisp white detailed pricing card */}
            {activePricing && (
              <div className="lg:col-span-8 bg-white text-[#0f172a] rounded-2xl p-6 sm:p-9 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-5">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#e83e26]">
                      {activePricing.eyebrow}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-1">
                      {activePricing.title}
                    </h3>
                  </div>

                  <div className="inline-flex items-baseline gap-2 bg-[#fff5f3] border border-[#e83e26]/25 px-4 py-2.5 rounded-xl">
                    <span className="text-2xl sm:text-3xl font-black text-[#e83e26]">
                      {activePricing.pricePerM2}
                    </span>
                    <span className="text-xs font-bold text-slate-600">
                      {activePricing.unitNote}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activePricing.description}
                  </p>

                  {/* 2 Highlight blocks like screenshot */}
                  <div className="space-y-3.5 pt-1">
                    {activePricing.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-9 h-9 rounded-full bg-[#e83e26]/10 text-[#e83e26] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </span>
                        <div>
                          <h4 className="text-sm font-extrabold text-[#0f172a]">
                            {hl.title}
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                            {hl.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Checklist items */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {activePricing.checklist.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e83e26] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPackageTitle(
                          `${activePricing.tabLabel} (${activePricing.pricePerM2})`
                        );
                        setQuoteModalOpen(true);
                      }}
                      className="bg-[#e83e26] hover:bg-[#cf321b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-[#e83e26]/25 transition inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>ĐĂNG KÝ TƯ VẤN GÓI NÀY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                    <img
                      src={activePricing.image}
                      alt={activePricing.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS ("ĐÁNH GIÁ TỪ KHÁCH HÀNG") */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
              ĐÁNH GIÁ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
              Đánh giá từ khách hàng
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Đánh giá của khách hàng giúp {data.business.name} không ngừng hoàn thiện chất lượng dịch vụ thi công mỗi ngày.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.testimonials || []).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img
                        src={
                          item.avatar ||
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                        }
                        alt={item.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#e83e26]"
                      />
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#e83e26] text-white flex items-center justify-center">
                        <Quote className="w-3 h-3" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#0f172a]">
                        {item.author}
                      </h3>
                      <p className="text-xs text-slate-500">{item.role}</p>
                      <div className="flex items-center gap-0.5 mt-1 text-amber-400">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. NEWS SECTION ("TIN TỨC & CẨM NANG XÂY DỰNG") */}
      <section id="tin-tuc" className="py-20 lg:py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-[#e83e26] text-white text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-1.5 rounded-full mb-3">
              TIN TỨC MỚI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase">
              TIN TỨC & CẨM NANG XÂY DỰNG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-[#e83e26] transition group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 left-4 bg-[#e83e26] text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-1.5 shadow">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {post.category && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e83e26] mb-1.5">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-lg font-extrabold text-white group-hover:text-[#e83e26] transition mb-2.5">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. RED CONSULTATION FORM BANNER + WHITE 4-COLUMN FOOTER */}
      <section id="lien-he" className="bg-[#e83e26] py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-white/85 block mb-2">
                Liên hệ tư vấn miễn phí
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Liên Hệ Với Chúng Tôi Để Được Tư Vấn Nhanh Nhất
              </h2>
              <p className="text-sm text-white/90 mt-2">
                Nhận bảng dự toán chi phí xây dựng chi tiết theo diện tích đất chỉ trong 15 phút.
              </p>
            </div>

            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-white text-[#0f172a] rounded-2xl p-6 text-center shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h3 className="text-lg font-extrabold">
                    Đã gửi yêu cầu báo giá thành công!
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Bộ phận kỹ sư dự toán của {data.business.name} sẽ liên hệ lại với quý khách ngay.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleLeadSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên*"
                    value={leadForm.fullName}
                    onChange={(e) =>
                      setLeadForm({ ...leadForm, fullName: e.target.value })
                    }
                    className="w-full bg-white text-[#0f172a] placeholder:text-slate-400 text-sm px-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f172a]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại*"
                    value={leadForm.phone}
                    onChange={(e) =>
                      setLeadForm({ ...leadForm, phone: e.target.value })
                    }
                    className="w-full bg-white text-[#0f172a] placeholder:text-slate-400 text-sm px-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f172a]"
                  />
                  <select
                    value={leadForm.projectType}
                    onChange={(e) =>
                      setLeadForm({ ...leadForm, projectType: e.target.value })
                    }
                    className="w-full bg-white text-[#0f172a] text-sm px-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f172a]"
                  >
                    <option value="Xây nhà trọn gói">Loại: Xây nhà trọn gói</option>
                    <option value="Xây nhà phần thô">Loại: Xây nhà phần thô</option>
                    <option value="Thiết kế kiến trúc">Loại: Thiết kế kiến trúc</option>
                    <option value="Cải tạo & Sửa chữa">Loại: Cải tạo & Sửa chữa</option>
                  </select>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Diện tích dự kiến (m²)"
                      value={leadForm.area}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, area: e.target.value })
                      }
                      className="w-full bg-white text-[#0f172a] placeholder:text-slate-400 text-sm px-4 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f172a]"
                    />
                    <button
                      type="submit"
                      className="bg-[#0f172a] hover:bg-slate-800 text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full shrink-0 transition shadow-md cursor-pointer"
                    >
                      Gửi ngay
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHITE 4-COLUMN FOOTER */}
      <footer className="bg-white text-slate-600 pt-16 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-100">
            {/* Col 1: Brand + Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e83e26] flex items-center justify-center text-white">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold text-[#0f172a] uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Đơn vị thiết kế kiến trúc, thi công xây dựng nhà phố, biệt thự và cải tạo công trình uy tín hàng đầu.
              </p>
              <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e83e26] shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">
                    {data.business.address}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e83e26] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#0f172a] hover:text-[#e83e26]"
                  >
                    {primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#e83e26] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="text-slate-700 hover:text-[#e83e26]"
                  >
                    {primaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Dịch vụ */}
            <div>
              <h4 className="text-base font-extrabold text-[#0f172a] mb-4">
                Dịch vụ chính
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {[
                  "Thiết kế kiến trúc độc đáo",
                  "Xây dựng nhà ở chất lượng",
                  "Sửa chữa và nâng cấp công trình",
                  "Xây dựng khu căn hộ cao cấp",
                  "Thi công công trình thương mại",
                  "Báo giá xây nhà trọn gói"
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#bao-gia"
                      className="hover:text-[#e83e26] inline-flex items-center gap-1.5 transition"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#e83e26]" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Tin tức nổi bật */}
            <div>
              <h4 className="text-base font-extrabold text-[#0f172a] mb-4">
                Tin tức mới
              </h4>
              <div className="space-y-3.5">
                {(data.news || []).slice(0, 3).map((n) => (
                  <a
                    key={n.id}
                    href="#tin-tuc"
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-[#0f172a] group-hover:text-[#e83e26] line-clamp-2 transition">
                        {n.title}
                      </h5>
                      <span className="text-[11px] text-slate-400">{n.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: Chính sách */}
            <div>
              <h4 className="text-base font-extrabold text-[#0f172a] mb-4">
                Chính sách & Cam kết
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {[
                  "Giới thiệu công ty",
                  "Chính sách bảo hành kết cấu 10 năm",
                  "Cam kết vật tư chính hãng 100%",
                  "Quy trình nghiệm thu 7 bước",
                  "Chính sách thanh toán theo tiến độ",
                  "Hợp đồng thi công mẫu"
                ].map((policy) => (
                  <li key={policy}>
                    <a
                      href="#gioi-thieu"
                      className="hover:text-[#e83e26] inline-flex items-center gap-1.5 transition"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#e83e26]" />
                      <span>{policy}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <p>© {new Date().getFullYear()} {data.business.name}. Bảo lưu mọi quyền.</p>
            <p>Thiết kế & Thi công Xây dựng Chuyên nghiệp</p>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-[#e83e26] transition"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-4 bg-[#e83e26] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-[#0f172a] mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-semibold text-slate-500 mb-3">
                Địa điểm: {selectedProject.location} • {selectedProject.price}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    setSelectedPackageTitle(`Tư vấn mẫu công trình: ${title}`);
                    setQuoteModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#e83e26] text-white text-xs font-bold uppercase"
                >
                  Nhận báo giá tương tự
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QUICK QUOTE MODAL */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-block bg-[#e83e26]/10 text-[#e83e26] text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">
              Báo giá nhanh 24/7
            </span>
            <h3 className="text-xl font-extrabold text-[#0f172a]">
              Đăng Ký Nhận Dự Toán Xây Dựng
            </h3>
            {selectedPackageTitle && (
              <p className="text-xs font-semibold text-[#e83e26] mt-1">
                Hạng mục: {selectedPackageTitle}
              </p>
            )}
            <form
              onSubmit={(e) => {
                handleLeadSubmit(e);
                setTimeout(() => setQuoteModalOpen(false), 1200);
              }}
              className="space-y-3.5 mt-5"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên quý khách*"
                value={leadForm.fullName}
                onChange={(e) =>
                  setLeadForm({ ...leadForm, fullName: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e83e26]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại Zalo*"
                value={leadForm.phone}
                onChange={(e) =>
                  setLeadForm({ ...leadForm, phone: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e83e26]"
              />
              <input
                type="text"
                placeholder="Diện tích đất & số tầng dự kiến (VD: 5x20m, 3 tầng)"
                value={leadForm.area}
                onChange={(e) =>
                  setLeadForm({ ...leadForm, area: e.target.value })
                }
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#e83e26]"
              />
              <button
                type="submit"
                className="w-full bg-[#e83e26] hover:bg-[#cf321b] text-white font-bold text-sm uppercase py-3.5 rounded-xl shadow-md transition cursor-pointer"
              >
                Gửi yêu cầu nhận báo giá
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
