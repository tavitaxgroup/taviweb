"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  X,
  Menu,
  CheckCircle2,
  Eye
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat5DefaultData,
  type NoiThat5TemplateData
} from "@/template-sources/noi_that_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat5TemplateData = adaptClonedTemplateData(
    noiThat5DefaultData,
    incomingData
  );

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);
  const [activeProcessIndex, setActiveProcessIndex] = useState<number>(0);
  const [activeProjectCat, setActiveProjectCat] =
    useState<string>("TẤT CẢ DỰ ÁN");
  const [selectedProject, setSelectedProject] = useState<
    NonNullable<NoiThat5TemplateData["projects"]>[number] | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [consultSubmitted, setConsultSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunter@gmail.com";
  const secondaryEmail = data.business.email?.[1] || "mon@mona.media";

  const brandName = (data.business.name || "ADT DECOR").trim();
  const brandWords = brandName.split(/\s+/);
  const logoBadgeText = brandWords[0] || "ADT";
  const logoMainText =
    brandWords.length > 1 ? brandWords.slice(1).join("") : "DECOR";

  const slides = data.heroSlides || [];
  const currentSlide = slides[activeSlideIndex] || slides[0];
  const heroBg =
    currentSlide?.image ||
    data.hero.backgroundImage ||
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=85";

  const processSteps = data.processSteps || [];
  const activeStep = processSteps[activeProcessIndex] || processSteps[0];

  const categories = data.projectCategories || [
    "TẤT CẢ DỰ ÁN",
    "NHÀ PHỐ",
    "CĂN HỘ",
    "BIỆT THỰ",
    "VĂN PHÒNG"
  ];

  const filteredProjects = (data.projects || []).filter((p) => {
    if (activeProjectCat === "TẤT CẢ DỰ ÁN") return true;
    return p.category.toUpperCase() === activeProjectCat.toUpperCase();
  });

  const SectionDivider = () => (
    <div className="flex items-center justify-center gap-3 mt-3 mb-10">
      <span className="w-24 sm:w-36 h-[1px] bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#1e56c5] ring-4 ring-[#1e56c5]/20" />
      <span className="w-24 sm:w-36 h-[1px] bg-white/15" />
    </div>
  );

  const renderBrandLogo = () => {
    if (data.business.logo) {
      return (
        <img
          src={data.business.logo}
          alt={brandName}
          className="h-10 w-auto object-contain"
        />
      );
    }
    return (
      <div className="inline-flex flex-col leading-none select-none">
        <div className="flex items-center">
          <span className="bg-[#1e56c5] text-white font-extrabold text-lg sm:text-xl px-1.5 py-1 tracking-tighter">
            {logoBadgeText}
          </span>
          <span className="text-white font-light text-lg sm:text-xl tracking-wider ml-1">
            {logoMainText}
          </span>
        </div>
        <span className="text-[8px] tracking-[0.34em] text-zinc-400 uppercase mt-1">
          {data.corporationTagline || "CORPORATION"}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#191919] text-white font-sans selection:bg-[#1e56c5] selection:text-white">
      {/* 1. DARK STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#trang-chu" className="shrink-0">
            {renderBrandLogo()}
          </a>

          {/* Desktop Navigation with Dot Separators */}
          <nav className="hidden lg:flex items-center gap-3.5 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
            <a
              href="#trang-chu"
              className="text-[#2f6ce5] hover:text-white transition-colors"
            >
              TRANG CHỦ
            </a>
            <span className="text-zinc-600 text-[9px]">•</span>
            <a
              href="#dich-vu"
              className="hover:text-[#2f6ce5] transition-colors"
            >
              DỊCH VỤ
            </a>
            <span className="text-zinc-600 text-[9px]">•</span>
            <a
              href="#quy-trinh"
              className="hover:text-[#2f6ce5] transition-colors"
            >
              PHONG CÁCH
            </a>
            <span className="text-zinc-600 text-[9px]">•</span>
            <a href="#du-an" className="hover:text-[#2f6ce5] transition-colors">
              DỰ ÁN
            </a>
            <span className="text-zinc-600 text-[9px]">•</span>
            <a
              href="#tin-tuc"
              className="hover:text-[#2f6ce5] transition-colors"
            >
              TIN TỨC
            </a>
            <span className="text-zinc-600 text-[9px]">•</span>
            <a
              href="#lien-he"
              className="hover:text-[#2f6ce5] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Search + Royal Blue Phone Pill */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Tìm kiếm"
              className="p-2 text-zinc-300 hover:text-white transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-[#1e56c5] hover:bg-[#2563eb] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors tracking-wide"
            >
              {primaryPhone}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden p-1.5 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="bg-[#141414] border-t border-white/10 py-3 px-4">
            <div className="max-w-[600px] mx-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Tìm kiếm dự án nhà phố, căn hộ, biệt thự, văn phòng..."
                className="flex-1 bg-[#1f1f1f] border border-white/15 px-4 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#1e56c5]"
              />
              <a
                href="#du-an"
                onClick={() => setSearchOpen(false)}
                className="bg-[#1e56c5] text-white text-xs font-bold uppercase px-4 py-2"
              >
                Tìm
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#2f6ce5]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-white"
            >
              DỊCH VỤ
            </a>
            <a
              href="#quy-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-white"
            >
              QUY TRÌNH THIẾT KẾ
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-white"
            >
              DỰ ÁN
            </a>
            <a
              href="#khach-hang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-white"
            >
              KHÁCH HÀNG
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-white"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK MONOCHROME ARCHITECTURAL HERO */}
      <section
        id="trang-chu"
        className="relative h-[460px] sm:h-[560px] lg:h-[640px] w-full overflow-hidden bg-black"
      >
        <img
          src={heroBg}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center grayscale contrast-125 opacity-45 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />

        <div className="relative z-10 max-w-[1060px] mx-auto h-full px-4 sm:px-6 flex flex-col justify-center">
          <p className="text-sm sm:text-lg font-medium uppercase tracking-[0.08em] text-zinc-200 mb-2">
            {data.hero.eyebrow ||
              currentSlide?.eyebrow ||
              "THẾ MẠNH CỦA CHÚNG TÔI LÀ"}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-light uppercase tracking-wider text-white leading-none mb-4">
            {data.hero.title || currentSlide?.title || "THIẾT KẾ NỘI THẤT"}
          </h1>
          <p className="max-w-xl text-xs sm:text-sm text-zinc-300 leading-relaxed mb-7">
            {data.hero.subtitle || currentSlide?.subtitle}
          </p>
          <div>
            <a
              href={data.hero.ctaLink || "#du-an"}
              className="inline-block border border-white/80 hover:border-[#1e56c5] hover:bg-[#1e56c5] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3 transition-colors"
            >
              {data.hero.ctaText || "DỰ ÁN CỦA CHÚNG TÔI"}
            </a>
          </div>
        </div>

        {/* Bottom Center Slider Dots */}
        <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-center gap-2.5">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white scale-110"
                    : "border border-white/70 bg-transparent hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* 3. SERVICES SECTION ("MON DECOR CUNG CẤP") */}
      <section id="dich-vu" className="py-16 sm:py-20 bg-[#1c1c1c]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-normal uppercase tracking-wider text-white">
            {brandName.toUpperCase()} CUNG CẤP
          </h2>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.services || []).map((srv) => (
              <div key={srv.id} className="group flex flex-col">
                <h3 className="text-center text-xs sm:text-[13px] font-bold uppercase tracking-wide text-[#2a67de] mb-4">
                  {srv.title}
                </h3>

                {/* Blueprint-tinted architectural card image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0e224d] mb-4 border border-white/10">
                  <img
                    src={
                      srv.image ||
                      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={srv.title}
                    className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1e56c5]/30 mix-blend-color pointer-events-none" />
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed text-justify">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 5-STEP PROCESS ("QUY TRÌNH THIẾT KẾ NỘI THẤT") */}
      <section
        id="quy-trinh"
        className="relative py-16 sm:py-24 bg-[#141414] overflow-hidden border-t border-b border-white/5"
      >
        <img
          src={data.processBackgroundImage}
          alt="Quy trình thiết kế nội thất"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-15"
        />
        <div className="absolute inset-0 bg-[#151515]/85" />

        <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-normal uppercase tracking-wider text-white">
            QUY TRÌNH THIẾT KẾ NỘI THẤT
          </h2>
          <SectionDivider />

          {/* 5 Circular Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 items-center justify-items-center mt-6">
            {processSteps.map((step, idx) => {
              const isSelected = idx === activeProcessIndex;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center relative"
                >
                  <button
                    type="button"
                    onClick={() => setActiveProcessIndex(idx)}
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center p-3 text-center transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#222222]/90 border-2 border-white text-white shadow-xl scale-105"
                        : "bg-[#1e56c5] hover:bg-[#2563eb] text-white border border-[#3b76ea]/50 shadow-lg"
                    }`}
                  >
                    <span className="text-[11px] sm:text-xs font-bold uppercase leading-snug whitespace-pre-line">
                      {step.title}
                    </span>
                  </button>

                  {/* Vertical connector line for active circle */}
                  <div
                    className={`hidden sm:block w-[1.5px] h-8 transition-opacity ${
                      isSelected ? "bg-white/80 opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Horizontal baseline + Active Step Description */}
          <div className="border-t border-white/40 pt-5 mt-4 sm:mt-0 text-center">
            {activeStep && (
              <div className="max-w-3xl mx-auto">
                <p className="text-xs sm:text-[13.5px] text-zinc-200 leading-relaxed">
                  {activeStep.description}
                </p>
                <p className="text-[11px] text-[#4c86ff] font-semibold mt-1.5">
                  Bước {activeStep.stepNumber}: {activeStep.deliverables}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO PROJECTS FILTER + FULL-BLEED 8-ITEM GRID */}
      <section id="du-an" className="bg-[#1b1b1b] pt-10 pb-12">
        {/* Category Filter Tabs */}
        <div className="max-w-[1060px] mx-auto px-4 mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive =
              activeProjectCat.toUpperCase() === cat.toUpperCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveProjectCat(cat)}
                className={`px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "bg-[#1e56c5] text-white shadow"
                    : "bg-transparent text-zinc-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Full-Bleed Edge-to-Edge 4x2 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#111111] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4c86ff] mb-1">
                  {project.category} • {project.location}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-300">
                  <Eye className="w-3.5 h-3.5 text-[#4c86ff]" />
                  <span>Xem chi tiết dự án</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered "XEM TẤT CẢ" Button */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => setActiveProjectCat("TẤT CẢ DỰ ÁN")}
            className="bg-[#1e56c5] hover:bg-[#2563eb] border border-white/70 text-white text-[11px] font-bold uppercase tracking-wider px-8 py-2.5 transition-colors"
          >
            XEM TẤT CẢ
          </button>
        </div>
      </section>

      {/* 6. CLIENTS / PARTNERS ("KHÁCH HÀNG") */}
      <section
        id="khach-hang"
        className="relative py-16 sm:py-20 bg-[#121212] overflow-hidden border-t border-white/5"
      >
        <img
          src={data.clientsBackgroundImage}
          alt="Khách hàng tiêu biểu"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-15"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-normal uppercase tracking-wider text-white">
            KHÁCH HÀNG
          </h2>
          <SectionDivider />

          {/* Stylized Brand Logos matching reference */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center pt-2">
            {/* 1. iconic */}
            <div className="flex items-center justify-center py-3 px-6">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#1da1f2] lowercase">
                {data.clients?.[0]?.name || "iconic"}
              </span>
            </div>

            {/* 2. FPT */}
            <div className="flex items-center gap-1 py-3 px-6">
              <span className="bg-[#0066b3] text-white font-black italic text-xl sm:text-2xl px-2.5 py-1 rounded-sm -skew-x-12">
                F
              </span>
              <span className="bg-[#f37021] text-white font-black italic text-xl sm:text-2xl px-2.5 py-1 rounded-sm -skew-x-12">
                P
              </span>
              <span className="bg-[#0db14b] text-white font-black italic text-xl sm:text-2xl px-2.5 py-1 rounded-sm -skew-x-12">
                T
              </span>
            </div>

            {/* 3. KOBE BBQ */}
            <div className="flex items-center justify-center py-2 px-6">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-[#dc2626] flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-[10px] font-black text-[#111111] leading-none">
                  KOBE
                </span>
                <span className="text-[9px] font-extrabold text-[#dc2626] leading-tight">
                  BBQ
                </span>
              </div>
            </div>

            {/* 4. MÓN HUẾ */}
            <div className="flex items-center gap-2 py-3 px-6">
              <span className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#facc15]">
                {data.clients?.[3]?.name || "MÓN HUẾ"}
              </span>
              <span className="w-8 h-8 rounded-full bg-[#facc15] text-[#111111] text-[8px] font-black flex items-center justify-center text-center leading-none p-1">
                NHÀ HÀNG
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK FOOTER */}
      <footer
        id="lien-he"
        className="bg-[#181818] border-t border-white/10 pt-14 pb-6 text-xs text-zinc-400"
      >
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
            {/* Col 1: Brand & Introduction */}
            <div className="md:col-span-4 space-y-4">
              {renderBrandLogo()}
              <p className="leading-relaxed text-zinc-400 text-justify">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-4 pt-1 text-white text-sm font-bold">
                <a
                  href="#lien-he"
                  className="hover:text-[#2f6ce5] transition-colors"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="hover:text-[#2f6ce5] transition-colors"
                >
                  IG
                </a>
                <a
                  href="#lien-he"
                  className="hover:text-[#2f6ce5] transition-colors"
                >
                  G+
                </a>
                <a
                  href="#lien-he"
                  className="hover:text-[#2f6ce5] transition-colors"
                >
                  ▶
                </a>
              </div>
            </div>

            {/* Col 2: TIN MỚI NHẤT */}
            <div id="tin-tuc" className="md:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
                TIN MỚI NHẤT
              </h3>
              <div className="space-y-4">
                {(data.news || []).map((post) => (
                  <div
                    key={post.id}
                    className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-b-0"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-12 object-cover shrink-0 bg-zinc-800"
                    />
                    <div className="min-w-0">
                      <a
                        href="#du-an"
                        className="text-xs font-bold text-[#3b76ea] hover:text-white transition-colors line-clamp-2 leading-snug block"
                      >
                        {post.title}
                      </a>
                      <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: LIÊN HỆ CHÚNG TÔI */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
                LIÊN HỆ CHÚNG TÔI
              </h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#2f6ce5] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#2f6ce5] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#2f6ce5] shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`mailto:${primaryEmail}`}
                      className="block hover:text-white transition-colors"
                    >
                      {primaryEmail}
                    </a>
                    {secondaryEmail && (
                      <a
                        href={`mailto:${secondaryEmail}`}
                        className="block hover:text-white transition-colors"
                      >
                        {secondaryEmail}
                      </a>
                    )}
                  </div>
                </li>
                {data.skypeAccount && (
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-[#2f6ce5] shrink-0" />
                    <span>{data.skypeAccount}</span>
                  </li>
                )}
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#2f6ce5] shrink-0" />
                  <span>
                    {data.business.workingHours ||
                      "Thứ 2 – Thứ 6 | 08:00 – 17:00"}
                  </span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => {
                  setConsultModalOpen(true);
                  setConsultSubmitted(false);
                }}
                className="mt-5 w-full bg-[#1e56c5] hover:bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider py-2.5 transition-colors"
              >
                Gửi Yêu Cầu Báo Giá Thiết Kế
              </button>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10 text-center text-[11px] text-zinc-500">
            © Bản quyền thuộc về {brandName}. Thiết kế bởi{" "}
            <span className="text-zinc-300 font-semibold">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* FLOATING BLUE MESSENGER BUTTON (matching right side of reference) */}
      <button
        type="button"
        onClick={() => {
          setConsultModalOpen(true);
          setConsultSubmitted(false);
        }}
        aria-label="Tư vấn trực tuyến"
        className="fixed right-4 bottom-6 z-40 w-11 h-11 rounded-full bg-[#0084ff] hover:bg-[#1e56c5] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </button>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1e1e1e] border border-white/15 max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-[16/9] bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#1e56c5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#4c86ff] font-bold uppercase mb-2">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.location}</span>
                {selectedProject.price && (
                  <>
                    <span>•</span>
                    <span>Qui mô: {selectedProject.price}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 border border-white/25 text-xs font-bold uppercase text-zinc-300 hover:text-white"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    setConsultModalOpen(true);
                    setConsultSubmitted(false);
                  }}
                  className="px-6 py-2 bg-[#1e56c5] hover:bg-[#2563eb] text-white text-xs font-bold uppercase"
                >
                  Nhận Báo Giá Tương Tự
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONSULTATION MODAL */}
      {consultModalOpen && (
        <div
          onClick={() => setConsultModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1e1e1e] border border-white/15 max-w-md w-full p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold uppercase text-white">
                Đăng Ký Tư Vấn Thiết Kế
              </h3>
              <button
                type="button"
                onClick={() => setConsultModalOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {consultSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#3b76ea] mx-auto" />
                <p className="text-sm font-bold text-white">
                  Đã gửi yêu cầu tư vấn thành công!
                </p>
                <p className="text-xs text-zinc-400">
                  Kiến trúc sư trưởng của {brandName} sẽ liên hệ lại với bạn
                  trong vòng 15 phút.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên khách hàng"
                  className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#1e56c5]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#1e56c5]"
                />
                <select className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-[#1e56c5]">
                  <option>Thiết kế & thi công Văn Phòng</option>
                  <option>Thiết kế & thi công Nhà Phố</option>
                  <option>Thiết kế & thi công Căn Hộ</option>
                  <option>Thiết kế & thi công Biệt Thự</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Diện tích mặt bằng và nhu cầu thiết kế..."
                  className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#1e56c5]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1e56c5] hover:bg-[#2563eb] text-white text-xs font-bold uppercase py-3 transition-colors"
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
