"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Sofa,
  Landmark,
  Hammer,
  Star,
  Send,
  CheckCircle2,
  ArrowRight,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat2DefaultData,
  type NoiThat2TemplateData
} from "@/template-sources/noi_that_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat2TemplateData = adaptClonedTemplateData(
    noiThat2DefaultData,
    incomingData
  );

  const [activeStyleId, setActiveStyleId] = useState<string>(
    data.interiorStyles?.[0]?.id || "style-hien-dai"
  );
  const [activeProjectCat, setActiveProjectCat] = useState<string>("TẤT CẢ");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<
    NonNullable<NoiThat2TemplateData["projects"]>[number] | null
  >(null);
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0938 666 888";
  const primaryEmail = data.business.email?.[0] || "info@amorearch.vn";

  const activeStyle =
    (data.interiorStyles || []).find((st) => st.id === activeStyleId) ||
    data.interiorStyles?.[0];

  const categories = data.projectCategories || [
    "TẤT CẢ",
    "BIỆT THỰ",
    "CĂN HỘ PENTHOUSE",
    "NHÀ PHỐ",
    "VĂN PHÒNG & SHOWROOM"
  ];

  const filteredProjects = (data.projects || []).filter((prj) => {
    if (activeProjectCat === "TẤT CẢ") return true;
    return prj.category.toUpperCase() === activeProjectCat.toUpperCase();
  });

  const featuredArticle = data.news?.[0];
  const secondaryArticles = (data.news || []).slice(1, 4);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadForm({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#1f2024] font-sans selection:bg-[#e31e24] selection:text-white">
      {/* 1. DARK TRANSLUCENT HEADER */}
      <header className="sticky top-0 z-40 bg-[#1f2024]/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="relative w-11 h-11 bg-[#e31e24] flex items-center justify-center rounded-sm shadow-md">
                <Landmark className="w-6 h-6 text-white" />
              </div>
            )}
            <div className="leading-none">
              <span className="block text-lg sm:text-xl font-black tracking-wider text-white uppercase">
                {data.business.name}
              </span>
              <span className="block text-[10px] tracking-[0.26em] text-zinc-400 uppercase mt-1">
                Architecture & Interior
              </span>
            </div>
          </a>

          {/* Hotline Pill */}
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
            className="hidden xl:inline-flex items-center gap-2 text-xs font-extrabold text-[#38bdf8] hover:text-white transition"
          >
            <span className="w-7 h-7 rounded-full bg-[#e31e24] text-white flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span>{primaryPhone}</span>
          </a>

          {/* Uppercase Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-zinc-200">
            <a href="#" className="text-[#e31e24] transition">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#e31e24] transition">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-[#e31e24] transition">
              DỊCH VỤ
            </a>
            <a href="#phong-cach" className="hover:text-[#e31e24] transition">
              PHONG CÁCH
            </a>
            <a href="#du-an" className="hover:text-[#e31e24] transition">
              DỰ ÁN
            </a>
            <a href="#tin-tuc" className="hover:text-[#e31e24] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#e31e24] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Search + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#du-an"
              aria-label="Tìm kiếm"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e31e24] flex items-center justify-center text-white transition"
            >
              <Search className="w-4 h-4" />
            </a>
            <a
              href="#lien-he"
              className="bg-[#e31e24] hover:bg-[#c5161b] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition"
            >
              BÁO GIÁ
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white border border-white/20 rounded"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1f2024] border-t border-white/10 px-5 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "DỊCH VỤ", href: "#dich-vu" },
              { label: "PHONG CÁCH", href: "#phong-cach" },
              { label: "DỰ ÁN", href: "#du-an" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-zinc-200 hover:text-[#e31e24] border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. LUXURY NEOCLASSICAL INTERIOR HERO */}
      <section className="relative min-h-[540px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#1f2024]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2024]/85 via-[#1f2024]/55 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#e31e24] text-white text-[11px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 mb-5">
              {data.hero.eyebrow || "KIẾN TRÚC & NỘI THẤT THƯỢNG LƯU"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.18] mb-5">
              {data.hero.title}
            </h1>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed mb-8 max-w-xl">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#lien-he"}
                className="inline-flex items-center gap-2.5 bg-[#e31e24] hover:bg-[#c5161b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 transition shadow-lg"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#du-an"
                className="inline-flex items-center gap-2 border border-white/70 hover:bg-white hover:text-[#1f2024] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 transition"
              >
                <span>XEM BỘ SƯU TẬP</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DARK CHARCOAL INLINE LEAD CAPTURE BAR (#1f2024) */}
      <section id="lien-he" className="bg-[#1f2024] text-white py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Bold Uppercase Text */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">
                BẠN ĐANG ẤP Ủ Ý TƯỞNG VỀ NGÔI NHÀ CỦA MÌNH?
              </p>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-white my-1.5">
                HÃY LIÊN LẠC NGAY
              </h2>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400">
                CHÚNG TÔI SẼ GIÚP HIỆN THỰC HÓA ƯỚC MƠ VỀ TỔ ẤM CỦA BẠN!
              </p>
            </div>

            {/* Right Compact Inputs + Message Box + Crimson Red "GỬI" Button */}
            <div className="lg:col-span-7">
              {leadSubmitted ? (
                <div className="bg-zinc-800 border border-[#e31e24] p-6 text-center rounded">
                  <CheckCircle2 className="w-9 h-9 text-[#e31e24] mx-auto mb-2" />
                  <p className="text-base font-bold text-white">
                    Cảm ơn bạn! Yêu cầu tư vấn nội thất đã được ghi nhận.
                  </p>
                  <p className="text-xs text-zinc-300 mt-1">
                    Kiến trúc sư {data.business.name} sẽ liên hệ lại ngay qua số điện thoại của bạn.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleLeadSubmit}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2.5"
                >
                  {/* Left stack of 4 inputs */}
                  <div className="sm:col-span-6 space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên"
                      value={leadForm.fullName}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, fullName: e.target.value })
                      }
                      className="w-full bg-white text-[#1f2024] placeholder:text-zinc-400 text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={leadForm.email}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, email: e.target.value })
                      }
                      className="w-full bg-white text-[#1f2024] placeholder:text-zinc-400 text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại"
                      value={leadForm.phone}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, phone: e.target.value })
                      }
                      className="w-full bg-white text-[#1f2024] placeholder:text-zinc-400 text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ công trình"
                      value={leadForm.address}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, address: e.target.value })
                      }
                      className="w-full bg-white text-[#1f2024] placeholder:text-zinc-400 text-xs px-3.5 py-2.5 focus:outline-none"
                    />
                  </div>

                  {/* Right Message Box + Crimson Red GỬI Button */}
                  <div className="sm:col-span-6 flex flex-col gap-2">
                    <textarea
                      rows={4}
                      placeholder="Lời nhắn (Diện tích, phong cách mong muốn...)"
                      value={leadForm.message}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, message: e.target.value })
                      }
                      className="w-full flex-1 bg-white text-[#1f2024] placeholder:text-zinc-400 text-xs px-3.5 py-2.5 focus:outline-none resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#e31e24] hover:bg-[#c5161b] text-white text-xs font-extrabold uppercase tracking-[0.2em] py-3 transition cursor-pointer"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & 3 CORE SERVICES ("Nâng tầm giá trị cho mọi không gian sống") */}
      <section id="gioi-thieu" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Wireframe Designer Chair Sketch */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-6 border border-zinc-200 bg-[#f4f4f6]/50 w-full max-w-xs aspect-square flex flex-col items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-44 h-44 stroke-zinc-700 fill-none"
                  strokeWidth="1.5"
                >
                  <path d="M55 45 C50 95, 60 115, 100 115 C140 115, 150 95, 145 45 Z" />
                  <path d="M60 115 L140 115" />
                  <path d="M75 115 L45 175" />
                  <path d="M125 115 L155 175" />
                  <path d="M90 115 L75 165" />
                  <path d="M110 115 L125 165" />
                  <line
                    x1="20"
                    y1="175"
                    x2="180"
                    y2="175"
                    strokeDasharray="3 3"
                  />
                </svg>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mt-2">
                  BESPOKE FURNITURE CONCEPT
                </span>
              </div>
            </div>

            {/* Middle About Text */}
            <div className="lg:col-span-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-500 block mb-1">
                {data.business.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f2024] leading-snug mb-4">
                {data.business.aboutTitle ||
                  "Nâng tầm giá trị cho mọi không gian sống"}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                {(data.business.aboutText || []).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <a
                href="#du-an"
                className="inline-block border border-[#e31e24] text-[#1f2024] hover:bg-[#e31e24] hover:text-white text-xs font-bold uppercase tracking-wider px-7 py-2.5 transition"
              >
                XEM THÊM
              </a>
            </div>

            {/* Right Architectural Sketch Photo + 3 Circular Dark-to-Red Service Pillars */}
            <div id="dich-vu" className="lg:col-span-4 space-y-6">
              <div className="rounded overflow-hidden shadow-md border border-zinc-200 aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="Bản vẽ kiến trúc"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {(data.services || []).slice(0, 3).map((srv, idx) => (
                  <div
                    key={srv.id}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f4f4f6] group-hover:bg-[#e31e24] text-zinc-600 group-hover:text-white flex items-center justify-center transition shadow-sm mb-2.5">
                      {idx === 0 && <Sofa className="w-7 h-7" />}
                      {idx === 1 && <Landmark className="w-7 h-7" />}
                      {idx >= 2 && <Hammer className="w-7 h-7" />}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1f2024] group-hover:text-[#e31e24] transition">
                      {srv.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-zinc-500 mt-14">
            Những bí mật kỳ diệu của các phong cách thiết kế nội thất đang chờ bạn khám phá
          </p>
        </div>
      </section>

      {/* 5. DARK PARALLAX INTERIOR STYLE TABS */}
      <section
        id="phong-cach"
        className="relative py-20 lg:py-24 bg-[#1f2024] text-white overflow-hidden"
      >
        {activeStyle && (
          <img
            src={activeStyle.image}
            alt={activeStyle.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30 transition-all duration-700"
          />
        )}
        <div className="absolute inset-0 bg-[#1f2024]/75" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 5 Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {(data.interiorStyles || []).map((st) => {
              const isSelected = activeStyle?.id === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setActiveStyleId(st.id)}
                  className={`px-6 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider border transition cursor-pointer ${
                    isSelected
                      ? "bg-white text-[#1f2024] border-white shadow-lg"
                      : "bg-transparent text-white border-white/40 hover:border-white"
                  }`}
                >
                  {st.tabName}
                </button>
              );
            })}
          </div>

          {/* Active Style Showcase */}
          {activeStyle && (
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider mb-4">
                {activeStyle.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed mb-6">
                {activeStyle.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-8">
                {activeStyle.characteristics.map((ch, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/15 p-3.5 text-xs text-zinc-100 flex items-start gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e31e24] mt-1 shrink-0" />
                    <span>{ch}</span>
                  </div>
                ))}
              </div>

              <a
                href="#du-an"
                className="inline-block bg-white hover:bg-[#e31e24] text-[#e31e24] hover:text-white text-xs font-extrabold uppercase tracking-widest px-8 py-3 transition"
              >
                XEM THÊM
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 6. "DỰ ÁN CỦA CHÚNG TÔI" (FILTERABLE 4x3 EDGE-TO-EDGE GALLERY) */}
      <section id="du-an" className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#1f2024] mb-2">
            DỰ ÁN CỦA CHÚNG TÔI
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mb-8">
            Phong cách đẹp mang lại ngôi nhà đẹp. Nội thất {data.business.name} mang đến những giá trị hoàn hảo cho ngôi nhà Việt.
          </p>

          {/* 5 Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeProjectCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveProjectCat(cat)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider border transition cursor-pointer ${
                    isActive
                      ? "border-[#1f2024] bg-[#1f2024] text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4x3 Edge-to-Edge Grid of 12 Interior Project Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 cursor-pointer border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2024]/90 via-[#1f2024]/25 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24] mb-1">
                  {project.category}
                </span>
                <h3 className="text-base font-extrabold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  {project.location} • {project.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "TIN TỨC THIẾT KẾ NỘI THẤT" (ASYMMETRIC 1 LARGE LEFT + 3 STACKED RIGHT) */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-center text-[#1f2024] mb-12">
            TIN TỨC THIẾT KẾ NỘI THẤT
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 1 Large Featured Article */}
            {featuredArticle && (
              <article className="lg:col-span-6 group relative overflow-hidden bg-zinc-100 flex flex-col">
                <div className="relative flex-1 min-h-[360px] overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-5 border-t border-zinc-200">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e31e24]">
                      {featuredArticle.category} • {featuredArticle.date}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#1f2024] group-hover:text-[#e31e24] transition mt-1">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-1 line-clamp-2">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            )}

            {/* Right 3 Stacked Articles */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-4">
              {secondaryArticles.map((art) => (
                <article
                  key={art.id}
                  className="group grid grid-cols-12 gap-4 bg-[#f4f4f6] hover:bg-zinc-100 transition overflow-hidden items-center"
                >
                  <div className="col-span-5 h-36 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="col-span-7 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#e31e24]">
                      {art.category} • {art.date}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#1f2024] group-hover:text-[#e31e24] transition mt-1 line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1 line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Ý KIẾN KHÁCH HÀNG" */}
      <section className="py-20 bg-[#f4f4f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-center text-[#1f2024] mb-14">
            Ý KIẾN KHÁCH HÀNG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.testimonials || []).map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 rounded shadow-sm text-center flex flex-col items-center"
              >
                <img
                  src={
                    item.avatar ||
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  }
                  alt={item.author}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-zinc-200"
                />
                <div className="flex items-center justify-center gap-1 text-amber-500 mb-4">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 italic leading-relaxed mb-5">
                  {item.content}
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-[#1f2024]">
                  {item.author}{" "}
                  <span className="font-normal text-zinc-500">
                    / {item.role}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIGHT 4-COLUMN FOOTER + DARK BOTTOM MAP/INFO BAR */}
      <footer className="bg-white border-t border-zinc-200">
        {/* Top Light 4-Column Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Newsletter */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1f2024] pb-2 mb-4 border-b border-zinc-200">
                NEWSLETTER
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                Đăng ký để nhận ngay cẩm nang xu hướng thiết kế nội thất mới nhất và ưu đãi từ {data.business.name}.
              </p>
              {newsletterDone ? (
                <p className="text-xs font-bold text-emerald-600">
                  Đã đăng ký nhận bản tin thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex border border-zinc-300"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="w-full px-3 py-2 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 bg-white text-[#e31e24] hover:bg-[#e31e24] hover:text-white transition"
                    aria-label="Đăng ký"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Col 2: Thông tin khác */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1f2024] pb-2 mb-4 border-b border-zinc-200">
                THÔNG TIN KHÁC
              </h4>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li>
                  <a href="#" className="text-[#e31e24] font-semibold">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#e31e24]">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#phong-cach" className="hover:text-[#e31e24]">
                    Phong cách thiết kế
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#e31e24]">
                    Tin tức thiết kế
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e31e24]">
                    Liên hệ tư vấn
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Phong cách */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1f2024] pb-2 mb-4 border-b border-zinc-200">
                PHONG CÁCH
              </h4>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li>
                  <a href="#phong-cach" className="hover:text-[#e31e24]">
                    Thiết Kế Nội Thất Art Decor
                  </a>
                </li>
                <li>
                  <a href="#phong-cach" className="hover:text-[#e31e24]">
                    Thiết Kế Nội Thất Cổ Điển
                  </a>
                </li>
                <li>
                  <a href="#phong-cach" className="hover:text-[#e31e24]">
                    Thiết Kế Nội Thất Đương Đại
                  </a>
                </li>
                <li>
                  <a href="#phong-cach" className="hover:text-[#e31e24]">
                    Thiết Kế Nội Thất Hiện Đại
                  </a>
                </li>
                <li>
                  <a href="#phong-cach" className="hover:text-[#e31e24]">
                    Thiết Kế Nội Thất Tân Cổ Điển
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Dịch vụ */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1f2024] pb-2 mb-4 border-b border-zinc-200">
                DỊCH VỤ
              </h4>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li>
                  <a href="#dich-vu" className="hover:text-[#e31e24]">
                    Thiết kế nội thất nhà phố
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#e31e24]">
                    Thiết kế nội thất căn hộ Penthouse
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#e31e24]">
                    Thiết kế nội thất biệt thự
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#e31e24]">
                    Thiết kế nội thất văn phòng & showroom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dark Bottom Map/Info Bar (Matches bottom of NT005-noi_that_2.jpg) */}
        <div className="relative bg-[#1f2024] text-zinc-300 py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Brand + Address/Phone/Email */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-11 h-11 bg-[#e31e24] flex items-center justify-center text-white">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-base font-black uppercase text-white">
                      {data.business.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400">
                      Architecture
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs border-l border-white/15 pl-5">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#e31e24] shrink-0 mt-0.5" />
                    <span>{data.business.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="font-bold text-[#38bdf8] hover:underline"
                    >
                      {primaryPhone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#e31e24] shrink-0" />
                    <span>{primaryEmail}</span>
                  </p>
                </div>
              </div>

              {/* Center Map Button */}
              <div className="lg:col-span-3 flex justify-center">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-2 border border-white/60 hover:border-[#e31e24] hover:bg-[#e31e24] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition"
                >
                  <MapPin className="w-4 h-4" />
                  <span>XEM BẢN ĐỒ</span>
                </a>
              </div>

              {/* Right Copyright Notice */}
              <div className="lg:col-span-4 text-[11px] text-zinc-400 uppercase tracking-wider leading-relaxed text-center lg:text-right">
                ALL IMAGES ON THIS WEBSITE ARE THE COPYRIGHTED PROPERTY OF{" "}
                {data.business.name}.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#16171a] text-zinc-500 text-center text-xs py-3">
          © Bản quyền thuộc về {data.business.name}. Thiết kế & Thi công Nội thất Cao cấp.
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-[#1f2024] text-white flex items-center justify-center hover:bg-[#e31e24]"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-4 left-4 bg-[#e31e24] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                {selectedProject.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-[#1f2024] mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-bold text-zinc-500 mb-3">
                {selectedProject.location} • Diện tích: {selectedProject.price}
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 border border-zinc-300 text-xs font-bold uppercase text-zinc-700"
                >
                  Đóng
                </button>
                <a
                  href="#lien-he"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-[#e31e24] text-white text-xs font-bold uppercase"
                >
                  Nhận báo giá thiết kế
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
