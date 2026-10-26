"use client";

import React, { useState } from "react";
import {
  Home,
  LayoutGrid,
  ArrowRight,
  Play,
  Award,
  Sparkles,
  Layers,
  HeartHandshake,
  Zap,
  Sliders,
  MessageSquare,
  Compass,
  PackageCheck,
  Hammer,
  HandHeart,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat6DefaultData,
  type NoiThat6TemplateData
} from "@/template-sources/noi_that_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat6TemplateData = adaptClonedTemplateData(
    noiThat6DefaultData,
    incomingData
  );

  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(1);
  const [activeYearIndex, setActiveYearIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<
    NonNullable<NoiThat6TemplateData["projects"]>[number] | null
  >(null);
  const [videoOpen, setVideoOpen] = useState<boolean>(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteSent, setQuoteSent] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "FURNIHUB CONSTRUCTION";

  const heroImages = data.hero.images?.length
    ? data.hero.images
    : [data.hero.backgroundImage];
  const currentHeroImage =
    heroImages[activeHeroIndex % heroImages.length] ||
    data.hero.backgroundImage;

  const milestones = data.historyMilestones || [];
  const currentMilestone = milestones[activeYearIndex] || milestones[0];

  const projects = data.projects || [];
  const col1Projects = [projects[0], projects[3]].filter(Boolean);
  const col2Projects = [projects[1], projects[5]].filter(Boolean);
  const col3Projects = [projects[2], projects[4]].filter(Boolean);

  const renderBadgeIcon = (idx: number) => {
    const cls = "w-4 h-4 text-[#7c7458]";
    switch (idx % 6) {
      case 0:
        return <Award className={cls} />;
      case 1:
        return <Sparkles className={cls} />;
      case 2:
        return <Layers className={cls} />;
      case 3:
        return <HeartHandshake className={cls} />;
      case 4:
        return <Zap className={cls} />;
      default:
        return <Sliders className={cls} />;
    }
  };

  const renderProcessIcon = (icon: string) => {
    const cls = "w-9 h-9 text-[#8b8266] stroke-[1.3]";
    switch (icon) {
      case "chat":
        return <MessageSquare className={cls} />;
      case "plan":
        return <Compass className={cls} />;
      case "palette":
        return <PackageCheck className={cls} />;
      case "hammer":
        return <Hammer className={cls} />;
      default:
        return <HandHeart className={cls} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] font-sans selection:bg-[#7c7458] selection:text-white">
      {/* 1. GRID-BORDERED DARK HEADER + HERO SECTION */}
      <section
        id="trang-chu"
        className="relative bg-[#18191b] text-white overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentHeroImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center opacity-35 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141517]/80 via-[#141517]/55 to-[#141517]/85" />
        </div>

        {/* Top Grid-Bordered Header Bar */}
        <header className="relative z-30 border-b border-white/15">
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 items-center h-16 sm:h-20">
            {/* Left Brand Cell */}
            <div className="col-span-7 sm:col-span-4 lg:col-span-3 h-full flex items-center px-4 sm:px-6 border-r border-white/15">
              <a href="#trang-chu" className="flex items-center gap-2.5">
                {data.business.logo ? (
                  <img
                    src={data.business.logo}
                    alt={brandName}
                    className="h-9 w-auto object-contain"
                  />
                ) : (
                  <>
                    <div className="w-8 h-8 border border-white/40 flex items-center justify-center text-white shrink-0">
                      <Home className="w-4 h-4 text-[#b5ac8c]" />
                    </div>
                    <div className="leading-none">
                      <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                        {brandName.split(" ")[0] || "FURNIHUB"}
                      </span>
                      <span className="block text-[9px] uppercase tracking-[0.22em] text-zinc-400 mt-0.5">
                        {brandName.split(" ").slice(1).join(" ") ||
                          "CONSTRUCTION"}
                      </span>
                    </div>
                  </>
                )}
              </a>
            </div>

            {/* Center Nav Cell */}
            <nav className="hidden lg:flex lg:col-span-6 h-full items-center justify-center gap-7 text-xs font-medium text-zinc-300 border-r border-white/15">
              <a
                href="#trang-chu"
                className="text-[#b8ae8e] font-semibold transition-colors"
              >
                Trang Chủ
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-white transition-colors"
              >
                Giới Thiệu
              </a>
              <a href="#du-an" className="hover:text-white transition-colors">
                Dự Án
              </a>
              <a href="#tin-tuc" className="hover:text-white transition-colors">
                Tin Tức
              </a>
              <a href="#lien-he" className="hover:text-white transition-colors">
                Liên Hệ
              </a>
            </nav>

            {/* Right Quote Cell */}
            <div className="col-span-3 sm:col-span-6 lg:col-span-2 h-full flex items-center justify-center border-r border-white/15">
              <button
                type="button"
                onClick={() => {
                  setQuoteModalOpen(true);
                  setQuoteSent(false);
                }}
                className="text-xs font-semibold text-white hover:text-[#b8ae8e] transition-colors"
              >
                Báo Giá
              </button>
            </div>

            {/* Far-Right Grid Icon Cell */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 h-full flex items-center justify-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Mở danh mục"
                className="p-2 text-zinc-300 hover:text-white"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <LayoutGrid className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="bg-[#18191b] border-t border-white/15 px-6 py-4 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#b8ae8e]"
              >
                Trang Chủ
              </a>
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#b8ae8e]"
              >
                Giới Thiệu
              </a>
              <a
                href="#du-an"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#b8ae8e]"
              >
                Dự Án
              </a>
              <a
                href="#tien-trinh"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#b8ae8e]"
              >
                Tiến Trình
              </a>
              <a
                href="#lich-su"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#b8ae8e]"
              >
                Lịch Sử
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#b8ae8e]"
              >
                Tin Tức
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#b8ae8e]"
              >
                Liên Hệ
              </a>
            </div>
          )}
        </header>

        {/* Hero Body */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-8 py-24 sm:py-32 lg:py-36 flex items-center justify-center">
          {/* Left Vertical Social Strip */}
          <div className="hidden lg:flex flex-col items-center gap-2.5 absolute left-8 top-1/2 -translate-y-1/2">
            {["𝕏", "f", "IG", "in"].map((soc) => (
              <a
                key={soc}
                href="#lien-he"
                className="w-7 h-7 bg-black/50 border border-white/15 text-[10px] font-bold text-zinc-300 hover:bg-[#7c7458] hover:text-white flex items-center justify-center transition-colors"
              >
                {soc}
              </a>
            ))}
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 [writing-mode:vertical-rl] rotate-180 mt-3">
              FOLLOW US ON
            </span>
          </div>

          {/* Center Hero Copy */}
          <div className="max-w-2xl text-center">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-zinc-300 font-semibold mb-3">
              {data.hero.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-[13.5px] text-zinc-300 leading-relaxed max-w-xl mx-auto mb-8">
              {data.hero.subtitle}
            </p>

            {/* Split Olive-Taupe + White Square Arrow Button */}
            <div className="inline-flex items-stretch shadow-lg">
              <a
                href={data.hero.ctaLink || "#du-an"}
                className="bg-[#7c7458] hover:bg-[#6b644b] text-white text-xs font-semibold px-6 py-3 flex items-center transition-colors"
              >
                {data.hero.ctaText}
              </a>
              <a
                href={data.hero.ctaLink || "#du-an"}
                aria-label="Khám phá"
                className="bg-white hover:bg-zinc-100 text-[#1f1f1f] w-10 flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-12">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveHeroIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`rounded-full transition-all ${
                    activeHeroIndex === idx
                      ? "w-2.5 h-2.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Vertical Scroll Indicator */}
          <div className="hidden lg:flex flex-col items-center gap-2 absolute right-8 top-1/2 -translate-y-1/2">
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 [writing-mode:vertical-rl]">
              SCROLL MORE
            </span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US + VIDEO SECTION ("GIỚI THIỆU") */}
      <section id="gioi-thieu" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Video Preview Card */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setVideoOpen(true)}
                className="group relative aspect-[5/4] overflow-hidden bg-[#f2f0ea] cursor-pointer shadow-md"
              >
                <img
                  src={data.aboutVideoImage}
                  alt={data.aboutVideoLabel}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute bottom-6 left-6 flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#7c7458]/90 group-hover:bg-[#7c7458] text-white flex items-center justify-center shadow-lg ring-4 ring-white/20 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {data.aboutVideoLabel || "Video giới thiệu"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content + 6 Badges + Split Button */}
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-2">
                GIỚI THIỆU
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] leading-snug mb-4">
                {data.business.aboutTitle ||
                  "Khám Phá Thiết Kế Không Gian Sống Đẳng Cấp"}
              </h2>
              <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed mb-7">
                {data.business.aboutText?.[0]}
              </p>

              {/* 3x2 Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {(data.aboutBadges || []).map((badge, idx) => (
                  <div key={badge.id} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-[#f5f3ed] border border-[#e6e2d6] flex items-center justify-center shrink-0">
                      {renderBadgeIcon(idx)}
                    </div>
                    <span className="text-xs font-semibold text-[#333333]">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Split CTA Button */}
              <div className="inline-flex items-stretch border border-[#7c7458]">
                <a
                  href="#du-an"
                  className="bg-[#7c7458] hover:bg-[#696249] text-white text-xs font-semibold px-6 py-2.5 flex items-center transition-colors"
                >
                  Khám Phá Ngay
                </a>
                <a
                  href="#du-an"
                  aria-label="Xem dự án"
                  className="bg-white hover:bg-[#f5f3ed] text-[#1f1f1f] w-9 flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASONRY PROJECTS GALLERY ("DỰ ÁN — Khám Phá Không Gian Hoàn Hảo") */}
      <section id="du-an" className="py-16 sm:py-20 bg-[#f6f5f0]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1.5">
                DỰ ÁN
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
                Khám Phá Không Gian Hoàn Hảo
              </h2>
            </div>

            <div className="inline-flex items-stretch border border-[#7c7458] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setSelectedProject(projects[0] || null)}
                className="bg-[#7c7458] hover:bg-[#696249] text-white text-xs font-semibold px-5 py-2 flex items-center transition-colors"
              >
                Xem Tất Cả
              </button>
              <button
                type="button"
                onClick={() => setSelectedProject(projects[0] || null)}
                aria-label="Xem tất cả"
                className="bg-white text-[#1f1f1f] w-8 flex items-center justify-center"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3-Column Asymmetric Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="flex flex-col gap-5">
              {col1Projects.map((prj, idx) => (
                <div
                  key={prj.id}
                  onClick={() => setSelectedProject(prj)}
                  className={`group relative overflow-hidden bg-zinc-900 cursor-pointer ${
                    idx === 0 ? "h-[210px]" : "h-[260px]"
                  }`}
                >
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-300 block mb-0.5">
                      {prj.category}
                    </span>
                    <h3 className="text-sm font-bold">{prj.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5">
              {col2Projects.map((prj, idx) => (
                <div
                  key={prj.id}
                  onClick={() => setSelectedProject(prj)}
                  className={`group relative overflow-hidden bg-zinc-900 cursor-pointer ${
                    idx === 0 ? "h-[260px]" : "h-[210px]"
                  }`}
                >
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-300 block mb-0.5">
                      {prj.category}
                    </span>
                    <h3 className="text-sm font-bold">{prj.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              {col3Projects.map((prj, idx) => (
                <div
                  key={prj.id}
                  onClick={() => setSelectedProject(prj)}
                  className={`group relative overflow-hidden bg-zinc-900 cursor-pointer ${
                    idx === 0 ? "h-[225px]" : "h-[245px]"
                  }`}
                >
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-300 block mb-0.5">
                      {prj.category}
                    </span>
                    <h3 className="text-sm font-bold">{prj.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS & STATS ("THÀNH TỰU — Ghi Nhận Đỉnh Cao Trong Ngành Thiết Kế Nội Thất") */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1.5">
              THÀNH TỰU
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              Ghi Nhận Đỉnh Cao Trong Ngành Thiết Kế Nội Thất
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Tall Image Card */}
            <div className="lg:col-span-6 relative h-[340px] lg:h-[420px] overflow-hidden bg-zinc-900 group">
              <img
                src={data.achievementLeft.image}
                alt={data.achievementLeft.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 mb-1">
                  {data.achievementLeft.eyebrow}
                </p>
                <h3 className="text-xl font-bold">
                  {data.achievementLeft.title}
                </h3>
              </div>
            </div>

            {/* Right Stacked Image + Olive-Taupe Stats Box */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="relative h-[240px] lg:h-[270px] overflow-hidden bg-zinc-900 group">
                <img
                  src={data.achievementRight.image}
                  alt={data.achievementRight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 mb-1">
                    {data.achievementRight.eyebrow}
                  </p>
                  <h3 className="text-xl font-bold">
                    {data.achievementRight.title}
                  </h3>
                </div>
              </div>

              {/* Olive-Taupe Stats Bar */}
              <div className="bg-[#7c7458] text-white flex-1 py-6 px-6 grid grid-cols-3 divide-x divide-white/20 items-center text-center">
                {(data.stats || []).map((st) => (
                  <div key={st.id} className="px-2">
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                      {st.number}
                    </div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/85 font-semibold">
                      {st.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-STEP ALTERNATING PROCESS ("TIẾN TRÌNH — Các Bước Để Biến Ý Tưởng Thành Hiện Thực") */}
      <section id="tien-trinh" className="py-16 sm:py-20 bg-[#f6f5f0]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1.5">
              TIẾN TRÌNH
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              Các Bước Để Biến Ý Tưởng Thành Hiện Thực
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {(data.processSteps || []).map((step, idx) => {
              const isOdd = idx % 2 === 0;
              return (
                <div key={step.id} className="flex flex-col justify-between">
                  {/* Top Half */}
                  {isOdd ? (
                    <div className="pb-6 border-b border-[#dad5c8] relative">
                      <h3 className="text-sm font-bold text-[#1f1f1f] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#666666] leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <span className="text-lg font-extrabold text-[#b8b19d]">
                        {step.number}
                      </span>
                      <span className="hidden lg:block w-2 h-2 rounded-full bg-[#7c7458] absolute -bottom-1 left-0" />
                    </div>
                  ) : (
                    <div className="pb-6 border-b border-[#dad5c8] relative flex items-center justify-center">
                      <div className="w-28 h-28 border border-[#d6d0c0] bg-white flex items-center justify-center">
                        {renderProcessIcon(step.icon)}
                      </div>
                      <span className="hidden lg:block w-2 h-2 rounded-full bg-[#7c7458] absolute -bottom-1 left-0" />
                    </div>
                  )}

                  {/* Bottom Half */}
                  {isOdd ? (
                    <div className="pt-6 flex items-center justify-center">
                      <div className="w-28 h-28 border border-[#d6d0c0] bg-white flex items-center justify-center">
                        {renderProcessIcon(step.icon)}
                      </div>
                    </div>
                  ) : (
                    <div className="pt-6">
                      <span className="text-lg font-extrabold text-[#b8b19d] block mb-2">
                        {step.number}
                      </span>
                      <h3 className="text-sm font-bold text-[#1f1f1f] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE TIMELINE & HISTORY ("LỊCH SỬ — Hành Trình Đầy Cảm Hứng Của Chúng Tôi") */}
      <section id="lich-su" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1.5">
              LỊCH SỬ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              Hành Trình Đầy Cảm Hứng Của Chúng Tôi
            </h2>
          </div>

          {/* Interactive Year Timeline Bar */}
          <div className="relative max-w-4xl mx-auto mb-14">
            <div className="hidden sm:block absolute top-7 inset-x-8 h-[1px] bg-[#dcd7ca]" />
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center relative z-10">
              {milestones.map((ms, idx) => {
                const isActive = idx === activeYearIndex;
                return (
                  <button
                    key={ms.year}
                    type="button"
                    onClick={() => setActiveYearIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <span
                      className={`text-xs font-bold mb-2 transition-colors ${
                        isActive
                          ? "text-[#1f1f1f]"
                          : "text-[#888888] group-hover:text-[#1f1f1f]"
                      }`}
                    >
                      {ms.year}
                    </span>
                    <span
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        isActive
                          ? "bg-[#7c7458] border-[#7c7458] ring-4 ring-[#7c7458]/20 scale-110"
                          : "bg-[#c8c2b2] border-white group-hover:bg-[#7c7458]"
                      }`}
                    />
                    <span
                      className={`text-[11px] mt-2 transition-opacity ${
                        isActive
                          ? "text-[#555555] font-semibold opacity-100"
                          : "text-[#999999] opacity-60 group-hover:opacity-100"
                      }`}
                    >
                      {ms.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column History Detail Block */}
          {currentMilestone && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Vertical Photo */}
              <div className="lg:col-span-4 aspect-[4/5] overflow-hidden bg-[#f2f0ea]">
                <img
                  src={currentMilestone.leftImage}
                  alt={currentMilestone.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Center History Copy + 8 Diamond Checkpoints + Watermark */}
              <div className="lg:col-span-4 text-center px-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1">
                  {currentMilestone.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1f1f1f] mb-3">
                  {currentMilestone.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed mb-6">
                  {currentMilestone.description}
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-left max-w-xs mx-auto mb-6">
                  {currentMilestone.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-[#444444]"
                    >
                      <span className="text-[#7c7458]">✦</span>
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-widest text-[#eceae3] select-none">
                  {currentMilestone.watermarkYears}
                </div>
              </div>

              {/* Right Vertical Photo */}
              <div className="lg:col-span-4 aspect-[4/5] overflow-hidden bg-[#f2f0ea]">
                <img
                  src={currentMilestone.rightImage}
                  alt={currentMilestone.badge}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. PARTNER BRANDS ("THƯƠNG HIỆU — Các Đối Tác Khách Hàng") */}
      <section className="py-16 bg-[#f6f5f0]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1">
              THƯƠNG HIỆU
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              Các Đối Tác Khách Hàng
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="bg-white border border-[#eae7df] py-6 px-4 flex flex-col items-center justify-center text-center hover:border-[#7c7458] transition-colors"
              >
                <Home className="w-5 h-5 text-[#222222] mb-1.5 stroke-[1.6]" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#222222]">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWS & TRENDS ("TIN TỨC — Cập Nhật Xu Hướng Và Sự Kiện") */}
      <section id="tin-tuc" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1">
              TIN TỨC
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f]">
              Cập Nhật Xu Hướng Và Sự Kiện
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((item) => (
              <article key={item.id} className="group flex flex-col">
                <div className="aspect-[4/5] overflow-hidden bg-[#f2f0ea] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-bold text-[#1f1f1f] group-hover:text-[#7c7458] transition-colors line-clamp-2 mb-2">
                  {item.title}
                </h3>
                <a
                  href="#lien-he"
                  className="text-xs text-[#888888] hover:text-[#7c7458] font-medium mt-auto inline-block"
                >
                  Xem Thêm_
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER & SHOWROOM CONSOLE SCENE ("LIÊN HỆ — Đăng Ký Nhận Tin Tức") */}
      <section className="pt-10 pb-14 bg-gradient-to-b from-white via-[#faf9f5] to-[#e7e2d8] border-t border-[#f0ede6]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8b8266] font-bold mb-1">
            LIÊN HỆ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f1f1f] mb-6">
            Đăng Ký Nhận Tin Tức
          </h2>

          {newsletterDone ? (
            <div className="max-w-md mx-auto bg-white border border-[#7c7458] p-3 text-xs text-[#4b4634] font-semibold mb-8 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#7c7458]" />
              <span>Cảm ơn bạn đã đăng ký nhận bản tin từ {brandName}!</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterDone(true);
              }}
              className="max-w-md mx-auto flex items-stretch shadow-sm mb-10"
            >
              <input
                type="email"
                required
                placeholder="Nhập Email..."
                className="flex-1 bg-[#f2f1ec] border border-[#dfdbd0] px-4 py-2.5 text-xs focus:outline-none focus:border-[#7c7458]"
              />
              <button
                type="submit"
                className="bg-[#7c7458] hover:bg-[#696249] text-white text-xs font-bold px-6 py-2.5 transition-colors"
              >
                Gửi Ngay
              </button>
            </form>
          )}

          {/* Classic Dark Wooden Console Cabinet Showcase */}
          <div className="max-w-2xl mx-auto overflow-hidden rounded-sm shadow-xl border-4 border-white">
            <img
              src={data.consoleShowcaseImage}
              alt="Kệ tủ console nội thất cao cấp"
              className="w-full h-[200px] sm:h-[260px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 10. DARK ARCHITECTURAL FOOTER */}
      <footer id="lien-he" className="bg-[#141517] text-zinc-400 text-xs">
        {/* Top Footer Bar */}
        <div className="border-b border-white/10 py-6">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#trang-chu" className="flex items-center gap-2.5">
              <div className="w-8 h-8 border border-white/40 flex items-center justify-center text-white">
                <Home className="w-4 h-4 text-[#b5ac8c]" />
              </div>
              <div className="leading-none">
                <span className="block text-sm font-extrabold uppercase tracking-wider text-white">
                  {brandName.split(" ")[0] || "FURNIHUB"}
                </span>
                <span className="block text-[9px] uppercase tracking-[0.22em] text-zinc-400 mt-0.5">
                  {brandName.split(" ").slice(1).join(" ") || "CONSTRUCTION"}
                </span>
              </div>
            </a>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterDone(true);
              }}
              className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center"
            >
              <span className="text-white font-semibold text-xs">
                Đăng Ký Nhận Tin Tức
              </span>
              <div className="flex items-stretch">
                <input
                  type="email"
                  required
                  placeholder="Nhập Email..."
                  className="bg-white text-[#222222] px-3.5 py-2 text-xs w-48 sm:w-56 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#7c7458] hover:bg-[#696249] text-white text-xs font-semibold px-4 py-2 transition-colors"
                >
                  Gửi Ngay
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 5-Column Footer Links */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Thông Tin
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    • Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#du-an" className="hover:text-white">
                    • Dự án
                  </a>
                </li>
                <li>
                  <a href="#tien-trinh" className="hover:text-white">
                    • Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    • Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#lich-su" className="hover:text-white">
                    • Khách hàng đánh giá
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Hỗ Trợ
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Hỗ trợ khách hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Tư vấn 24/7
                  </a>
                </li>
                <li>
                  <a href="#tien-trinh" className="hover:text-white">
                    • Phân tích thiết kế
                  </a>
                </li>
                <li>
                  <a href="#tien-trinh" className="hover:text-white">
                    • Hỗ trợ lên kế hoạch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Chính Sách
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    • Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    • Điều khoản dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Hướng dẫn báo giá
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Chính sách thanh toán
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    • Chính sách an toàn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Dự Án
              </h3>
              <ul className="space-y-2">
                {projects.slice(0, 6).map((p, idx) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="hover:text-white text-left"
                    >
                      • Dự án {idx + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Liên Hệ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#b5ac8c] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#b5ac8c] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-white truncate"
                  >
                    {primaryEmail}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#b5ac8c] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Social Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-zinc-500">
              © Thiết kế và lập trình bởi{" "}
              <span className="text-white font-semibold">{brandName}</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-zinc-400 mr-1">
                Mạng Xã Hội:
              </span>
              {["f", "IG", "𝕏", "in"].map((s) => (
                <a
                  key={s}
                  href="#lien-he"
                  className="w-6 h-6 border border-white/20 flex items-center justify-center text-[10px] text-zinc-300 hover:bg-[#7c7458] hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-xl w-full overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-video bg-zinc-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#7c7458] font-bold mb-1">
                {selectedProject.category} • {selectedProject.location}
              </p>
              <h3 className="text-lg font-bold text-[#1f1f1f] mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-5">
                {selectedProject.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-zinc-300 text-xs font-semibold"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    setQuoteModalOpen(true);
                    setQuoteSent(false);
                  }}
                  className="px-5 py-2 bg-[#7c7458] text-white text-xs font-semibold"
                >
                  Nhận Báo Giá Dự Án
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO INTRO MODAL */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-lg w-full p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#1f1f1f]">
                {data.aboutVideoLabel} — {brandName}
              </h3>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="text-zinc-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video relative overflow-hidden mb-4">
              <img
                src={data.aboutVideoImage}
                alt={brandName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6 text-center">
                <p className="text-sm font-bold mb-2">
                  Showroom & Xưởng Sản Xuất Nội Thất {brandName}
                </p>
                <p className="text-xs text-zinc-200">
                  Hotline đặt lịch tham quan trực tiếp: {primaryPhone}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="bg-[#7c7458] text-white text-xs font-semibold px-5 py-2"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QUOTE MODAL */}
      {quoteModalOpen && (
        <div
          onClick={() => setQuoteModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#1f1f1f]">
                Nhận Báo Giá Thiết Kế & Thi Công
              </h3>
              <button
                type="button"
                onClick={() => setQuoteModalOpen(false)}
                className="text-zinc-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {quoteSent ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#7c7458] mx-auto" />
                <p className="text-sm font-bold">Đã gửi yêu cầu thành công!</p>
                <p className="text-xs text-[#666666]">
                  Đội ngũ kiến trúc sư {brandName} sẽ liên hệ tư vấn sớm nhất.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSent(true);
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên của bạn"
                  className="w-full border border-zinc-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#7c7458]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                  className="w-full border border-zinc-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#7c7458]"
                />
                <textarea
                  rows={3}
                  placeholder="Loại hình căn hộ/biệt thự và ngân sách dự kiến..."
                  className="w-full border border-zinc-300 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#7c7458]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#7c7458] hover:bg-[#696249] text-white text-xs font-bold uppercase py-3"
                >
                  Gửi Yêu Cầu Báo Giá
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
