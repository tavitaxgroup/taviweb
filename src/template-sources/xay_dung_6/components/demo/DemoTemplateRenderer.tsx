"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  PaintRoller,
  Building2,
  Home,
  Castle,
  Ruler,
  Palette,
  Sparkles,
  Award,
  Star,
  Plus,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung6DefaultData,
  type XayDung6TemplateData,
  type XayDung6ServiceHotspot
} from "@/template-sources/xay_dung_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung6TemplateData = adaptClonedTemplateData(
    xayDung6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("TẤT CẢ");
  const [activeHotspot, setActiveHotspot] = useState<XayDung6ServiceHotspot | null>(
    data.serviceHotspots?.[0] || null
  );
  const [sliderPosition, setSliderPosition] = useState<number>(52);
  const [selectedProject, setSelectedProject] = useState<
    NonNullable<XayDung6TemplateData["projects"]>[number] | null
  >(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "baogia@monapainting.vn";

  const categories = data.projectCategories || [
    "TẤT CẢ",
    "NGOẠI THẤT",
    "NỘI THẤT",
    "CẦU THANG"
  ];

  const filteredProjects = (data.projects || []).filter((prj) => {
    if (activeCategory === "TẤT CẢ") return true;
    return prj.category.toUpperCase() === activeCategory.toUpperCase();
  });

  const renderStripIcon = (icon: string) => {
    const cls = "w-14 h-14 text-white/30 shrink-0 stroke-[1.25]";
    if (icon === "villa") return <Castle className={cls} />;
    if (icon === "building") return <Building2 className={cls} />;
    return <Home className={cls} />;
  };

  const renderWelcomeIcon = (icon: string) => {
    const cls = "w-7 h-7 text-[#000c66] stroke-[1.75]";
    if (icon === "schedule") return <Ruler className={cls} />;
    if (icon === "palette") return <Palette className={cls} />;
    if (icon === "clean") return <Sparkles className={cls} />;
    return <Award className={cls} />;
  };

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#000c66] selection:text-white">
      {/* 1. CLEAN WHITE HEADER NAVBAR (Exact match to XD006) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left Roofline + Paint Roller Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-lg border-2 border-[#000c66] flex items-center justify-center text-[#000c66] group-hover:bg-[#000c66] group-hover:text-white transition">
                  <PaintRoller className="w-6 h-6" />
                </div>
                <div className="leading-tight">
                  <span className="block text-sm sm:text-base font-black uppercase tracking-wider text-[#000c66]">
                    {data.business.name}
                  </span>
                  <span className="block text-[10px] font-semibold text-slate-500 tracking-wide">
                    Dịch vụ sơn nước & Cải tạo
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Center/Right Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
            <a
              href="#"
              className="text-[#000c66] border-b-2 border-[#000c66] pb-1"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#000c66] transition pb-1"
            >
              GIỚI THIỆU
            </a>
            <a href="#nha-o" className="hover:text-[#000c66] transition pb-1">
              NHÀ Ở
            </a>
            <a
              href="#thuong-mai"
              className="hover:text-[#000c66] transition pb-1"
            >
              THƯƠNG MẠI
            </a>
            <a href="#tin-tuc" className="hover:text-[#000c66] transition pb-1">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#000c66] transition pb-1">
              LIÊN HỆ
            </a>
          </nav>

          {/* Far Right Phone Number */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#000c66] hover:text-blue-700 transition"
            >
              <Phone className="w-4 h-4 text-[#000c66] fill-current" />
              <span>{primaryPhone}</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-slate-200 text-slate-700"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2.5 shadow-lg">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "NHÀ Ở", href: "#nha-o" },
              { label: "THƯƠNG MẠI", href: "#thuong-mai" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold uppercase text-slate-700 hover:text-[#000c66]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#000c66]"
              >
                <Phone className="w-4 h-4" />
                <span>{primaryPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER + 3-COLUMN SLATE/NAVY BLUE FEATURE STRIP */}
      <section className="relative">
        {/* Hero Background */}
        <div className="relative min-h-[460px] lg:min-h-[520px] flex items-center justify-center text-center overflow-hidden bg-[#1e293b]">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e293b]/55" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-white">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold uppercase tracking-wider leading-tight mb-4 drop-shadow">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl mx-auto mb-7">
              {data.hero.subtitle}
            </p>
            <a
              href={data.hero.ctaLink || "#dich-vu"}
              className="inline-block bg-white hover:bg-[#000c66] text-[#000c66] hover:text-white text-xs sm:text-sm font-bold px-7 py-3 rounded shadow-md transition"
            >
              {data.hero.ctaText || "Xem dịch vụ"}
            </a>

            {/* Slider indicator dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
              <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
            </div>
          </div>
        </div>

        {/* 3-Column Flush Slate/Blue Feature Strip (BIỆT THỰ / TÒA NHÀ CAO ỐC / NHÀ Ở CÁ NHÂN) */}
        <div id="nha-o" className="grid grid-cols-1 md:grid-cols-3 text-white">
          {(data.heroStripItems || []).map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} px-6 sm:px-10 py-10 flex items-center gap-5 relative overflow-hidden`}
            >
              {renderStripIcon(item.icon)}
              <div className="text-center flex-1">
                <h3 className="text-base sm:text-lg font-serif font-bold uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/90 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "CHÀO MỪNG ĐẾN VỚI MONA PAINTING" (SPLIT SECTION WITH PAINTER ON RIGHT) */}
      <section
        id="gioi-thieu"
        className="relative bg-gradient-to-r from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] py-16 lg:py-20 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content + 2x2 Features */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#000c66] leading-snug mb-3">
                {data.business.aboutTitle || data.welcomeTitle}
              </h2>
              <div className="w-16 h-0.5 bg-[#000c66] mb-4" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 max-w-xl">
                {data.business.aboutText?.[0] || data.welcomeSubtitle}
              </p>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(data.welcomeFeatures || []).map((feat) => (
                  <div key={feat.id} className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center shrink-0">
                      {renderWelcomeIcon(feat.icon)}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {feat.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Painter Rolling Paint */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80"
                  alt="Thợ sơn nội ngoại thất chuyên nghiệp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "TẠI SAO CHỌN CHÚNG TÔI" (CONTAINED SPLIT BOX: LEFT YELLOW PAINT FLATLAY + RIGHT ROYAL BLUE #000c66) */}
      <section id="thuong-mai" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-xl overflow-hidden rounded-sm">
            {/* Left Overhead Paint Flatlay Image */}
            <div className="lg:col-span-6 min-h-[280px] sm:min-h-[340px]">
              <img
                src={data.whyChooseImage}
                alt={data.whyChooseTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Deep Royal Blue Box (#000c66) */}
            <div className="lg:col-span-6 bg-[#000c66] text-white p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-serif mb-3">
                {data.whyChooseTitle}
              </h2>
              <div className="w-14 h-0.5 bg-white/70 mb-5" />
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-7">
                {data.whyChooseText}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-white hover:bg-yellow-300 text-[#000c66] text-xs font-bold px-6 py-2.5 rounded-sm shadow transition cursor-pointer"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "NHỮNG DỰ ÁN HOÀN THÀNH" (FILTERABLE 3x2 GALLERY GRID) */}
      <section id="du-an" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#000c66]">
              Những dự án hoàn thành
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${
                    isActive
                      ? "bg-[#000c66] text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000c66]/85 via-[#000c66]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-300">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="text-sm font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "DỊCH VỤ CỦA CHÚNG TÔI" (FULL-WIDTH LIVING ROOM BANNER WITH INTERACTIVE HOTSPOTS) */}
      <section
        id="dich-vu"
        className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden bg-slate-900"
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
          alt="Dịch vụ sơn cao cấp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy Overlay */}
            <div className="lg:col-span-5 text-white">
              <h2 className="text-2xl sm:text-4xl font-serif leading-snug mb-3">
                Dịch vụ của
                <br />
                chúng tôi
              </h2>
              <div className="w-16 h-0.5 bg-white mb-4" />
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm mb-6">
                Sơn cao cấp sử dụng các sản phẩm chất lượng đặc biệt và áp dụng chúng với chuyên môn dày dạn và kỹ thuật tinh chế.
              </p>

              {/* Selected Hotspot Detail Card */}
              {activeHotspot && (
                <div className="bg-white/95 backdrop-blur-md text-slate-800 p-4 rounded-lg shadow-xl max-w-sm border-l-4 border-[#000c66]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#000c66]">
                    {activeHotspot.surface}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
                    {activeHotspot.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>
              )}
            </div>

            {/* Right Interactive Room Pins */}
            <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[320px]">
              {(data.serviceHotspots || []).map((spot) => {
                const isSelected = activeHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot)}
                    style={{
                      left: `${spot.xPercent}%`,
                      top: `${spot.yPercent}%`
                    }}
                    className={` -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer ${
                      isSelected
                        ? "bg-[#000c66] text-white ring-4 ring-white shadow-xl scale-125"
                        : "bg-white/90 text-[#000c66] hover:bg-[#000c66] hover:text-white ring-2 ring-white/60 shadow-lg"
                    }`}
                    title={spot.title}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "DỰ ÁN MỚI NHẤT" (CONTAINED SPLIT BOX: LEFT ROYAL BLUE #000c66 + RIGHT INTERACTIVE BEFORE/AFTER WALL SLIDER) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-xl overflow-hidden rounded-sm">
            {/* Left Deep Royal Blue Box (#000c66) */}
            <div className="lg:col-span-6 bg-[#000c66] text-white p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-serif mb-3">
                {data.latestProjectTitle}
              </h2>
              <div className="w-14 h-0.5 bg-white/70 mb-5" />
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-7">
                {data.latestProjectText}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-white hover:bg-yellow-300 text-[#000c66] text-xs font-bold px-6 py-2.5 rounded-sm shadow transition cursor-pointer"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>

            {/* Right Interactive Before/After Wall Comparison */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] select-none overflow-hidden bg-slate-900">
              {/* After Image (Full width underneath) */}
              <img
                src={data.beforeAfterImages.after}
                alt="Sau khi hoàn thiện sơn"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Before Image (Clipped by sliderPosition) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={data.beforeAfterImages.before}
                  alt="Trước khi sơn"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              {/* Labels */}
              <span className="absolute top-3 left-3 bg-slate-900/75 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                Trước khi sơn
              </span>
              <span className="absolute top-3 right-3 bg-[#000c66]/85 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                Sau khi hoàn thiện
              </span>

              {/* Vertical Divider Line + Circular Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-white bg-slate-900/60 backdrop-blur-sm text-white flex items-center justify-center shadow-lg">
                  <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-1" />
                </div>
              </div>

              {/* Invisible Range Input for Interactive Dragging */}
              <input
                type="range"
                min={10}
                max={90}
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="So sánh trước và sau khi sơn"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. "TIN TỨC MỚI NHẤT" (3 FRAMED BLOG CARDS) */}
      <section id="tin-tuc" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#000c66]">
              Tin tức mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-[#f8fafc] border border-slate-200/80 p-3.5 shadow-sm hover:shadow-md transition flex flex-col text-center"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-200 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <h3 className="text-sm font-bold text-slate-800 hover:text-[#000c66] transition line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL BANNER (BLUE BRUSHSTROKE BACKGROUND + AVATAR + 5 STARS) */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-[#0a2463] via-[#1e3a8a] to-[#1d4ed8] text-white overflow-hidden">
        {/* Decorative right brushstroke effect */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <img
            src={
              data.testimonials?.[0]?.avatar ||
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
            }
            alt={data.testimonials?.[0]?.author || "Khách hàng"}
            className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg mb-3"
          />

          {/* 5 Gold Stars */}
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
            {[1, 2, 3, 4, 5].map((st) => (
              <Star key={st} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <p className="text-xs sm:text-sm italic text-white/95 leading-relaxed max-w-2xl mx-auto mb-4">
            “{data.testimonials?.[0]?.content}”
          </p>

          <p className="text-sm font-serif italic font-bold text-yellow-300">
            Khách hàng
          </p>
        </div>
      </section>

      {/* 10. "HÃNG SƠN NỔI TIẾNG" (4 PAINT BRAND LOGOS) */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-serif text-[#000c66]">
              Hãng sơn nổi tiếng
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center text-center">
            <div className="p-4 flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#1e3a8a]">
                  europro
                </span>
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-lime-500 to-cyan-500 inline-block" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                PAINTING
              </span>
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="px-4 py-1.5 rounded bg-gradient-to-r from-[#ef4444] via-[#eab308] to-[#2563eb] text-white font-black text-lg tracking-wide shadow-sm">
                Dulux
              </div>
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-teal-400 to-amber-400 mb-1" />
              <span className="text-base font-serif font-bold text-slate-800 leading-none">
                Perennial
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 mt-0.5">
                PAINTING
              </span>
            </div>

            <div className="p-4 flex flex-col items-center">
              <div className="border-2 border-[#1e3a8a] rounded-full px-4 py-1">
                <span className="text-base font-extrabold italic text-[#e11d48]">
                  Pentopaint
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DEEP ROYAL BLUE FOOTER (#000c66) */}
      <footer id="lien-he" className="bg-[#000c66] text-white pt-14 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2">
                <PaintRoller className="w-6 h-6 text-white" />
                <span className="text-sm font-black uppercase tracking-wider">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Công ty {data.business.name} là một công ty dịch vụ sơn đầy đủ. Chúng tôi tự hào cung cấp dịch vụ khách hàng cao cấp và tay nghề chuyên nghiệp.
              </p>
            </div>

            {/* Col 2: LIÊN KẾT */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                LIÊN KẾT
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                <a href="#" className="hover:text-yellow-300">
                  Trang chủ
                </a>
                <a href="#gioi-thieu" className="hover:text-yellow-300">
                  Giới thiệu
                </a>
                <a href="#nha-o" className="hover:text-yellow-300">
                  Nhà ở
                </a>
                <a href="#thuong-mai" className="hover:text-yellow-300">
                  Thương mại
                </a>
                <a href="#tin-tuc" className="hover:text-yellow-300">
                  Tin tức
                </a>
                <a href="#lien-he" className="hover:text-yellow-300">
                  Liên hệ
                </a>
              </div>
            </div>

            {/* Col 3: HÌNH ẢNH (3x2 Mini Grid) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                HÌNH ẢNH
              </h4>
              <div className="grid grid-cols-3 gap-1.5">
                {(data.footerGallery || []).slice(0, 6).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden bg-slate-800"
                  >
                    <img
                      src={imgUrl}
                      alt={`Hình công trình ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: THÔNG TIN LIÊN HỆ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-sky-300" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0 text-sky-300" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-yellow-300"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0 text-sky-300" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-yellow-300"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Dark Bottom Copyright Strip */}
      <div className="bg-[#111827] py-3 text-center text-[11px] text-slate-400">
        © Bản quyền thuộc về {data.business.name} • Thi Công Sơn Nước & Cải Tạo Nội Ngoại Thất
      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#000c66]">
                {selectedProject.category} • {selectedProject.location}
              </span>
              <h3 className="text-lg font-serif font-bold text-slate-900 mt-1 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {selectedProject.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  setQuoteModalOpen(true);
                }}
                className="w-full bg-[#000c66] text-white text-xs font-bold uppercase tracking-wider py-3 rounded"
              >
                Nhận báo giá hạng mục tương tự
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {quoteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-serif font-bold text-[#000c66] mb-1">
              Đăng ký khảo sát & Tư vấn màu sơn
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Chuyên gia {data.business.name} sẽ liên hệ báo giá chi tiết trong 15 phút.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQuoteModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên khách hàng"
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#000c66]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại"
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#000c66]"
              />
              <input
                type="text"
                placeholder="Hạng mục cần thi công (Biệt thự, Nhà phố, Văn phòng...)"
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#000c66]"
              />
              <button
                type="submit"
                className="w-full bg-[#000c66] text-white text-xs font-bold uppercase tracking-wider py-3 cursor-pointer"
              >
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
