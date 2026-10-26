"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat3DefaultData,
  type NoiThat3TemplateData,
  type NoiThat3ServiceTile
} from "@/template-sources/noi_that_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat3TemplateData = adaptClonedTemplateData(
    noiThat3DefaultData,
    incomingData
  );

  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedServiceTile, setSelectedServiceTile] =
    useState<NoiThat3ServiceTile | null>(null);
  const [consultModalOpen, setConsultModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [consultForm, setConsultForm] = useState({
    fullName: "",
    phone: "",
    birthYear: "",
    projectType: "Biệt thự / Penthouse",
    note: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0902 777 999";
  const primaryEmail = data.business.email?.[0] || "studio@monadesign.vn";

  const projectsList = data.signatureProjects || [];
  const activeProject = projectsList[activeProjectIdx] || projectsList[0];

  const topBandClients = (data.clients || []).slice(0, 4);
  const bottomBandClients = (data.clients || []).slice(4, 12);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setConsultModalOpen(false);
      setConsultForm({
        fullName: "",
        phone: "",
        birthYear: "",
        projectType: "Biệt thự / Penthouse",
        note: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-[#18181b] font-sans selection:bg-[#c59d5f] selection:text-[#18181b]">
      {/* 1. MINIMALIST DARK HEADER + FULLSCREEN WARM LOUNGE HERO */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#18181b]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left Winged Emblem + Brand Name */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="w-11 h-11 rounded-full border border-[#c59d5f]/60 bg-[#18181b] flex items-center justify-center text-[#c59d5f] group-hover:bg-[#c59d5f] group-hover:text-[#18181b] transition">
                <svg
                  viewBox="0 0 36 24"
                  className="w-6 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M2 4 C8 4, 13 9, 18 15 C23 9, 28 4, 34 4 C30 11, 25 16, 18 21 C11 16, 6 11, 2 4 Z" />
                </svg>
              </div>
            )}
            <div className="leading-none">
              <span className="block text-sm sm:text-base font-bold tracking-[0.22em] text-white uppercase">
                {data.business.name}
              </span>
              <span className="block text-[10px] tracking-[0.26em] text-[#c59d5f] uppercase mt-1">
                Interior & Feng Shui
              </span>
            </div>
          </a>

          {/* Center Minimalist Uppercase Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
            <a href="#gioi-thieu" className="hover:text-[#c59d5f] transition">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-[#c59d5f] transition">
              DỊCH VỤ
            </a>
            <a href="#du-an" className="hover:text-[#c59d5f] transition">
              DỰ ÁN
            </a>
            <a href="#phong-thuy" className="hover:text-[#c59d5f] transition">
              PHONG THỦY
            </a>
            <a href="#khach-hang" className="hover:text-[#c59d5f] transition">
              KHÁCH HÀNG
            </a>
            <a href="#lien-he" className="hover:text-[#c59d5f] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Search + Consultation Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              className="border border-[#c59d5f] text-[#c59d5f] hover:bg-[#c59d5f] hover:text-[#18181b] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 transition cursor-pointer"
            >
              TƯ VẤN PHONG THỦY
            </button>
            <a
              href="#du-an"
              aria-label="Tìm kiếm"
              className="text-zinc-300 hover:text-[#c59d5f] transition"
            >
              <Search className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white border border-white/20"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#18181b] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs uppercase tracking-[0.2em] text-zinc-200">
            {[
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "DỊCH VỤ", href: "#dich-vu" },
              { label: "DỰ ÁN", href: "#du-an" },
              { label: "PHONG THỦY", href: "#phong-thuy" },
              { label: "KHÁCH HÀNG", href: "#khach-hang" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-[#c59d5f] border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Fullscreen Warm Lounge Hero */}
      <section className="relative min-h-[640px] lg:h-screen flex items-center justify-center overflow-hidden bg-[#18181b] pt-20">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/90 via-[#18181b]/55 to-[#18181b]/65" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#c59d5f] mb-4">
            {data.hero.eyebrow || "CONTEMPORARY INTERIOR & FENG SHUI STUDIO"}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-light text-white leading-[1.2] tracking-wide mb-6">
            {data.hero.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-9">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={data.hero.ctaLink || "#du-an"}
              className="inline-flex items-center gap-3 bg-[#c59d5f] hover:bg-[#b28949] text-[#18181b] text-xs font-extrabold uppercase tracking-[0.22em] px-8 py-4 transition shadow-lg"
            >
              <span>{data.hero.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              className="inline-flex items-center gap-2 border border-white/60 hover:border-[#c59d5f] hover:text-[#c59d5f] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 transition cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#c59d5f]" />
              <span>TƯ VẤN PHONG THỦY</span>
            </button>
          </div>
        </div>

        {/* Bottom 3 Slider Dots like NT006-noi_that_3.jpg */}
        <div className="absolute bottom-7 inset-x-0 flex justify-center gap-2.5 z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-white" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/70" />
          <span className="w-2.5 h-2.5 rounded-full border border-white/70" />
        </div>
      </section>

      {/* 2. 2x2 FULL-BLEED DARK OVERLAY SERVICE TILES */}
      <section id="dich-vu" className="w-full bg-[#18181b]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {(data.serviceTiles || []).map((tile) => (
            <div
              key={tile.id}
              onClick={() => setSelectedServiceTile(tile)}
              className="group relative min-h-[340px] lg:min-h-[380px] overflow-hidden flex items-center justify-center p-8 cursor-pointer border border-white/10"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-[#18181b]/65 group-hover:bg-[#18181b]/75 transition" />

              {/* Decorative Feng Shui Bagua Compass Overlay for the 4th tile */}
              {tile.isFengShui && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 group-hover:opacity-40 transition">
                  <div className="w-72 h-72 rounded-full border-2 border-dashed border-[#c59d5f] flex items-center justify-center">
                    <div className="w-52 h-52 rounded-full border border-[#c59d5f] flex items-center justify-center">
                      <Compass className="w-20 h-20 text-[#c59d5f] stroke-[1]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Centered Bordered Frame */}
              <div className="relative z-10 border border-white/25 group-hover:border-[#c59d5f] px-8 py-9 max-w-md w-full text-center transition">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c59d5f] mb-2">
                  {tile.subtitle}
                </span>
                <h2 className="text-lg sm:text-xl font-light uppercase tracking-[0.14em] text-white">
                  {tile.title}
                </h2>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 50/50 SPLIT "DỰ ÁN TIÊU BIỂU" SHOWCASE */}
      <section id="du-an" className="w-full bg-white">
        {activeProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
            {/* Left Half: Full-bleed luxury pool villa / penthouse photography */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[580px] overflow-hidden bg-[#18181b]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/75 via-transparent to-transparent" />

              {/* Interactive Project Switcher Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59d5f] block">
                    {activeProject.category} • {activeProject.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                    {activeProject.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveProjectIdx((prev) =>
                        prev === 0 ? projectsList.length - 1 : prev - 1
                      )
                    }
                    className="w-10 h-10 bg-[#18181b]/80 hover:bg-[#c59d5f] hover:text-[#18181b] border border-white/20 flex items-center justify-center transition cursor-pointer"
                    aria-label="Dự án trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveProjectIdx(
                        (prev) => (prev + 1) % projectsList.length
                      )
                    }
                    className="w-10 h-10 bg-[#18181b]/80 hover:bg-[#c59d5f] hover:text-[#18181b] border border-white/20 flex items-center justify-center transition cursor-pointer"
                    aria-label="Dự án tiếp"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Half: Minimalist Editorial Typography */}
            <div className="lg:col-span-6 flex items-center justify-center p-8 sm:p-14 lg:p-20 bg-white">
              <div className="max-w-lg w-full">
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.28em] text-[#18181b] text-center lg:text-left mb-6">
                  DỰ ÁN
                </h2>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {data.business.aboutText?.[0]}
                </p>

                {/* Active Project Meta Box */}
                <div className="bg-[#f5f5f4] border-l-2 border-[#c59d5f] p-5 mb-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#18181b] mb-2">
                    <span>{activeProject.title}</span>
                    <span className="text-[#c59d5f]">{activeProject.area}</span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-2">
                    Địa điểm: {activeProject.location}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {activeProject.concept}
                  </p>
                </div>

                {/* Project selector pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {projectsList.map((proj, idx) => (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setActiveProjectIdx(idx)}
                      className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${
                        idx === activeProjectIdx
                          ? "bg-[#18181b] text-[#c59d5f]"
                          : "bg-[#f5f5f4] text-zinc-600 hover:bg-zinc-200"
                      }`}
                    >
                      0{idx + 1}. {proj.title.split(" ").slice(0, 3).join(" ")}
                    </button>
                  ))}
                </div>

                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#18181b] hover:text-[#c59d5f] border-b border-[#18181b] hover:border-[#c59d5f] pb-1 transition"
                >
                  <span>TÌM HIỂU THÊM / XEM TOÀN BỘ DỰ ÁN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 4. ARCHITECTURAL PHILOSOPHY & FENG SHUI CONSULTATION SPLIT SECTION */}
      <section id="phong-thuy" className="py-20 lg:py-24 bg-[#f5f5f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c59d5f] mb-3">
                <Compass className="w-4 h-4" />
                <span>TRIẾT LÝ KIẾN TRÚC & PHONG THỦY</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#18181b] leading-snug mb-5">
                Sự Cân Bằng Giữa{" "}
                <span className="font-bold">Vật Liệu Đương Đại</span> &{" "}
                <span className="font-bold text-[#c59d5f]">
                  Sinh Khí Phương Đông
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                {data.business.aboutText?.[1] || data.business.aboutText?.[0]}
              </p>
              <button
                type="button"
                onClick={() => setConsultModalOpen(true)}
                className="bg-[#18181b] hover:bg-[#c59d5f] text-white hover:text-[#18181b] text-xs font-bold uppercase tracking-[0.2em] px-7 py-4 transition cursor-pointer"
              >
                ĐẶT LỊCH TƯ VẤN PHONG THỦY GIA CHỦ
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {(data.fengShuiPillars || []).map((pillar, i) => (
                <div
                  key={pillar.id}
                  className="bg-white border border-stone-200 hover:border-[#c59d5f] p-7 transition flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#c59d5f] mb-2">
                      0{i + 1} • {pillar.element}
                    </span>
                    <h3 className="text-base font-bold text-[#18181b] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-[#c59d5f]">
                    <span>CHUẨN LỖ BAN</span>
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "KHÁCH HÀNG CỦA CHÚNG TÔI" (2 BANDS OF PARTNER LOGOS + TESTIMONIALS) */}
      <section id="khach-hang">
        {/* Band 1: Warm Slate/Gray Header + First 4 Partner Logos */}
        <div className="bg-[#6b6e70] text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-light uppercase tracking-[0.25em] text-center mb-10">
              KHÁCH HÀNG CỦA CHÚNG TÔI
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {topBandClients.map((cl) => (
                <div
                  key={cl.id}
                  className="h-20 border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center px-4 transition"
                >
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-white text-center">
                    {cl.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Band 2: Dark Lounge Parallax + Next 8 Partner Logos (4x2) */}
        <div className="relative bg-[#18181b] text-white py-14 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Đối tác"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
              {bottomBandClients.map((cl) => (
                <div
                  key={cl.id}
                  className="h-20 border border-white/15 bg-[#18181b]/70 hover:border-[#c59d5f] flex flex-col items-center justify-center px-4 transition group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#c59d5f] mb-1 opacity-70 group-hover:opacity-100" />
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-200 group-hover:text-[#c59d5f] text-center transition">
                    {cl.name}
                  </span>
                </div>
              ))}
            </div>

            {/* 3 Client Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {(data.testimonials || []).map((test) => (
                <div
                  key={test.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6"
                >
                  <div className="flex items-center gap-1 text-[#c59d5f] mb-3">
                    {Array.from({ length: test.rating || 5 }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed mb-4">
                    {test.content}
                  </p>
                  <div className="text-xs font-bold text-white">
                    {test.author}
                    <span className="block text-[11px] font-normal text-[#c59d5f] mt-0.5">
                      {test.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DARK ARCHITECTURAL DESK PARALLAX FOOTER (Matches NT006-noi_that_3.jpg) */}
      <footer
        id="lien-he"
        className="relative bg-[#2b2d2f] text-zinc-300 pt-20 pb-10 overflow-hidden border-t border-white/10"
      >
        {/* Subtle Architectural Desk Accents */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-14 border-b border-white/10">
            {/* Left Company Editorial Block (Matches exact text hierarchy in NT006-noi_that_3.jpg) */}
            <div className="lg:col-span-6 space-y-2.5 text-xs sm:text-sm">
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4">
                CÔNG TY CP XÂY DỰNG VÀ TRANG TRÍ NỘI THẤT {data.business.name}
              </h3>
              <p>
                <strong className="text-white">Văn phòng chính :</strong>{" "}
                <span className="text-zinc-300">{data.business.address}</span>
              </p>
              <p>
                <strong className="text-white">Xưởng sản xuất nội thất :</strong>{" "}
                <span className="text-zinc-300">
                  Khu Công Nghiệp Tân Tạo, TP.HCM
                </span>
              </p>
              <p>
                <strong className="text-white">Giấy phép kinh doanh :</strong>{" "}
                <span className="text-zinc-300">0313728397</span>
              </p>
              <p>
                <strong className="text-white">Điện thoại :</strong>{" "}
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-[#c59d5f] font-bold hover:underline"
                >
                  {primaryPhone}
                </a>
                {data.business.phone?.[1] ? ` – ${data.business.phone[1]}` : ""}
              </p>
              <p>
                <strong className="text-white">Hotline Phong Thủy 24/7 :</strong>{" "}
                <span className="text-zinc-300">{primaryPhone}</span>
              </p>
              <p>
                <strong className="text-white">Email :</strong>{" "}
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-zinc-300 hover:text-[#c59d5f]"
                >
                  {primaryEmail}
                </a>
              </p>

              {/* Social Icons Row */}
              <div className="flex items-center gap-3 pt-4">
                {["FB", "IG", "TW", "YT", "FL"].map((soc) => (
                  <a
                    key={soc}
                    href="#lien-he"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#c59d5f] text-white hover:text-[#18181b] text-[10px] font-bold flex items-center justify-center transition"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Consultation Request Form */}
            <div className="lg:col-span-6 bg-[#18181b]/80 border border-white/10 p-6 sm:p-8">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#c59d5f] mb-1">
                ĐĂNG KÝ TƯ VẤN THIẾT KẾ & PHONG THỦY
              </h4>
              <p className="text-xs text-zinc-400 mb-5">
                Để lại thông tin để kiến trúc sư chủ trì tư vấn mặt bằng và hướng phong thủy hợp mệnh.
              </p>

              {formSubmitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#c59d5f] mx-auto mb-2" />
                  <p className="text-sm font-bold text-white">
                    Đã nhận thông tin đăng ký tư vấn!
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {data.business.name} sẽ liên hệ với Quý khách ngay hôm nay.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên gia chủ *"
                      value={consultForm.fullName}
                      onChange={(e) =>
                        setConsultForm({
                          ...consultForm,
                          fullName: e.target.value
                        })
                      }
                      className="w-full bg-[#27272a] border border-white/15 focus:border-[#c59d5f] text-white placeholder:text-zinc-500 text-xs px-3.5 py-3 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại *"
                      value={consultForm.phone}
                      onChange={(e) =>
                        setConsultForm({
                          ...consultForm,
                          phone: e.target.value
                        })
                      }
                      className="w-full bg-[#27272a] border border-white/15 focus:border-[#c59d5f] text-white placeholder:text-zinc-500 text-xs px-3.5 py-3 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Năm sinh gia chủ (Xem mệnh)"
                      value={consultForm.birthYear}
                      onChange={(e) =>
                        setConsultForm({
                          ...consultForm,
                          birthYear: e.target.value
                        })
                      }
                      className="w-full bg-[#27272a] border border-white/15 focus:border-[#c59d5f] text-white placeholder:text-zinc-500 text-xs px-3.5 py-3 focus:outline-none"
                    />
                    <select
                      value={consultForm.projectType}
                      onChange={(e) =>
                        setConsultForm({
                          ...consultForm,
                          projectType: e.target.value
                        })
                      }
                      className="w-full bg-[#27272a] border border-white/15 focus:border-[#c59d5f] text-white text-xs px-3.5 py-3 focus:outline-none"
                    >
                      <option value="Biệt thự / Penthouse">
                        Biệt thự / Penthouse
                      </option>
                      <option value="Căn hộ cao cấp">Căn hộ cao cấp</option>
                      <option value="Văn phòng / Showroom">
                        Văn phòng / Showroom
                      </option>
                      <option value="Nhà hàng / Lounge">
                        Nhà hàng / Lounge
                      </option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Ghi chú diện tích, phong cách mong muốn..."
                    value={consultForm.note}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, note: e.target.value })
                    }
                    className="w-full bg-[#27272a] border border-white/15 focus:border-[#c59d5f] text-white placeholder:text-zinc-500 text-xs px-3.5 py-2.5 focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#c59d5f] hover:bg-[#b28949] text-[#18181b] text-xs font-extrabold uppercase tracking-[0.22em] py-3.5 transition cursor-pointer"
                  >
                    GỬI YÊU CẦU TƯ VẤN
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-zinc-400">
            © Bản quyền thuộc về {data.business.name}. Thiết kế Nội thất Đương đại & Phong thủy Kiến trúc.
          </div>
        </div>
      </footer>

      {/* SERVICE TILE DETAIL MODAL */}
      {selectedServiceTile && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedServiceTile(null)}
        >
          <div
            className="bg-[#18181b] border border-[#c59d5f]/50 max-w-lg w-full overflow-hidden text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedServiceTile.image}
                alt={selectedServiceTile.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedServiceTile(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-[#18181b]/90 border border-white/20 text-white flex items-center justify-center hover:bg-[#c59d5f] hover:text-[#18181b]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59d5f] block mb-1">
                {selectedServiceTile.subtitle}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-3">
                {selectedServiceTile.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {selectedServiceTile.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceTile(null)}
                  className="px-5 py-2.5 border border-white/20 text-xs uppercase tracking-widest"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedServiceTile(null);
                    setConsultModalOpen(true);
                  }}
                  className="px-6 py-2.5 bg-[#c59d5f] text-[#18181b] text-xs font-extrabold uppercase tracking-widest cursor-pointer"
                >
                  Đăng ký tư vấn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FENG SHUI CONSULTATION MODAL */}
      {consultModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setConsultModalOpen(false)}
        >
          <div
            className="bg-[#18181b] border border-[#c59d5f] max-w-md w-full p-7 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#c59d5f] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>FENG SHUI & INTERIOR STUDIO</span>
            </span>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Đặt Lịch Tư Vấn Thiết Kế & Phong Thủy
            </h3>
            <form onSubmit={handleConsultSubmit} className="space-y-3.5">
              <input
                type="text"
                required
                placeholder="Họ và tên gia chủ *"
                value={consultForm.fullName}
                onChange={(e) =>
                  setConsultForm({ ...consultForm, fullName: e.target.value })
                }
                className="w-full bg-[#27272a] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#c59d5f]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại liên hệ *"
                value={consultForm.phone}
                onChange={(e) =>
                  setConsultForm({ ...consultForm, phone: e.target.value })
                }
                className="w-full bg-[#27272a] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#c59d5f]"
              />
              <input
                type="text"
                placeholder="Năm sinh âm lịch & Hướng nhà hiện tại"
                value={consultForm.birthYear}
                onChange={(e) =>
                  setConsultForm({ ...consultForm, birthYear: e.target.value })
                }
                className="w-full bg-[#27272a] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#c59d5f]"
              />
              <button
                type="submit"
                className="w-full bg-[#c59d5f] hover:bg-[#b28949] text-[#18181b] text-xs font-extrabold uppercase tracking-[0.2em] py-3.5 transition cursor-pointer"
              >
                XÁC NHẬN ĐẶT LỊCH
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
