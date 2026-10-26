"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Coffee,
  CupSoda,
  GraduationCap,
  HeartHandshake,
  Leaf,
  MapPin,
  Menu,
  Package,
  Phone,
  Sparkles,
  Star,
  Store,
  Users,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import leadGeneration18DefaultData, {
  type LeadGeneration18Data,
  type SalyCourseItem
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = useMemo(
    () => adaptClonedTemplateData(leadGeneration18DefaultData, incomingData) as LeadGeneration18Data,
    [incomingData]
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Tất cả khóa học");
  const [selectedCourse, setSelectedCourse] = useState<SalyCourseItem | null>(null);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultForm, setConsultForm] = useState({
    fullName: "",
    phone: "",
    city: "",
    courseInterest: data.courses[4]?.title || "Khóa Học Tổng Hợp Mở Quán Thực Chiến",
    planNote: "Dự định mở quán trong 1 - 2 tháng tới"
  });

  const primaryPhone = data.business.phone[0] || "0934 556 789";

  const filteredCourses = useMemo(() => {
    if (activeCategory === "Tất cả khóa học") return data.courses;
    return data.courses.filter((c) => c.category === activeCategory);
  }, [data.courses, activeCategory]);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
    setTimeout(() => {
      setConsultSubmitted(false);
      setSelectedCourse(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F3FAF7] text-[#1D3B2A] font-sans selection:bg-[#EC7A1C] selection:text-white">
      {/* 1. CLEAN WHITE HEADER WITH LEAF LOGO & COLORFUL ICON NAV ITEMS (Matching LD021 navbar) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo: Leaf Emblem + SALY ACADEMY / Ly Phạm - Dạy Pha Chế */}
          <a href="#" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#E89846] via-[#D97724] to-[#134E35] p-0.5 shadow-md">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Leaf className="h-6 w-6 text-[#134E35] fill-[#E89846]" />
              </div>
            </div>
            <div className="leading-tight">
              <span className="block text-base sm:text-lg font-black tracking-tight text-[#4E2F1B]">
                SALY ACADEMY
              </span>
              <span className="block text-[11px] font-semibold text-slate-500">
                Ly Phạm - Dạy Pha Chế
              </span>
            </div>
          </a>

          {/* Icon-Prefixed Navigation Menu matching LD021 */}
          <nav className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#3B2A1E]">
            <a
              href="#gioi-thieu"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-orange-50 transition"
            >
              <Coffee className="h-3.5 w-3.5 text-[#EC7A1C]" />
              <span>Giới Thiệu</span>
            </a>
            <a
              href="#cac-khoa-hoc"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FDEBD8] text-[#C85A08] border border-[#F5C598] shadow-2xs"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#EC7A1C]" />
              <span>Các Khóa Học</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </a>
            <a
              href="#hoc-vien"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-orange-50 transition"
            >
              <GraduationCap className="h-3.5 w-3.5 text-[#134E35]" />
              <span>Học Viên</span>
            </a>
            <a
              href="#ve-ly-pham"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-orange-50 transition"
            >
              <Users className="h-3.5 w-3.5 text-[#EC7A1C]" />
              <span>Về Ly Phạm</span>
            </a>
            <a
              href="#nguyen-lieu"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-orange-50 transition"
            >
              <Leaf className="h-3.5 w-3.5 text-[#134E35]" />
              <span>Nguyên liệu</span>
            </a>
            <a
              href="#tu-van-mo-quan"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-orange-50 transition"
            >
              <Phone className="h-3.5 w-3.5 text-[#EC7A1C]" />
              <span>Liên Hệ</span>
            </a>
          </nav>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#tu-van-mo-quan"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EC7A1C] hover:bg-[#d66810] text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition"
            >
              <span>Tư vấn mở quán</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-slate-200 text-[#4E2F1B]"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-4 grid grid-cols-2 gap-2 text-xs font-bold text-[#4E2F1B]">
            <a
              href="#cac-khoa-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#FDEBD8] text-[#C85A08]"
            >
              🍹 Các Khóa Học Pha Chế
            </a>
            <a
              href="#ve-ly-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50"
            >
              👩‍🏫 Về Giảng Viên Ly Phạm
            </a>
            <a
              href="#nguyen-lieu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50"
            >
              🍃 Kho Nguyên Liệu Saly
            </a>
            <a
              href="#tu-van-mo-quan"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-emerald-50 text-[#134E35]"
            >
              📞 Tư Vấn Mở Quán 1-1
            </a>
          </div>
        )}
      </header>

      {/* 2. SIGNATURE SALY ACADEMY HERO (SKY-MINT BACKDROP + PEACH SUNBURST WAVE + FLOATING DRINKS + LY PHẠM) */}
      <section
        id="gioi-thieu"
        className="relative overflow-hidden bg-gradient-to-b from-[#BCE8E3] via-[#D9F2EE] to-[#F3FAF7] pt-8 pb-16 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Wavy Warm Peach-Apricot Sunburst Container matching LD021 */}
          <div className="relative rounded-[40px] bg-gradient-to-br from-[#F7BF8A] via-[#F4A662] to-[#EE8B3A] p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-white/80 overflow-hidden">
            {/* Subtle Sunburst Radial Rays Overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background:
                  "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.5) 0deg 10deg, transparent 10deg 20deg)"
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Floating Shaker & Fruit Tea Showcase (3 Cols on Desktop) */}
              <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-between gap-4">
                <div className="w-36 h-36 rounded-full border-4 border-white shadow-xl overflow-hidden -rotate-6 bg-white">
                  <img
                    src={data.heroShowcase.floatingDrinkImages[0]}
                    alt="Trà trái cây nhiệt đới Saly"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-40 h-40 rounded-3xl border-4 border-white shadow-xl overflow-hidden rotate-3 bg-white">
                  <img
                    src={data.heroShowcase.floatingDrinkImages[1]}
                    alt="Trà sữa đậm vị và kem phô mai"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center Hero Typography: Script Eyebrow + Orange Brush Banner SALY ACADEMY + Dual Pill CTAs (6 Cols) */}
              <div className="lg:col-span-6 text-center space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/85 text-[#4E2F1B] text-xs sm:text-sm font-bold italic shadow-xs">
                  <Sparkles className="h-4 w-4 text-[#EC7A1C]" />
                  <span>{data.heroShowcase.scriptEyebrow}</span>
                </div>

                {/* Bold White SALY ACADEMY inside Vibrant Orange Brush Banner */}
                <div className="py-3 px-6 sm:px-10 rounded-2xl bg-[#EC7A1C] shadow-lg inline-block transform -rotate-1 border-2 border-white/60">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-wider text-white drop-shadow">
                    {data.heroShowcase.brandDisplay}
                  </h1>
                </div>

                <p className="text-base sm:text-xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(120,50,5,0.45)] max-w-xl mx-auto leading-snug">
                  {data.heroShowcase.tagline}
                </p>

                {/* Dual Pill CTA Buttons with Circular Yellow-Orange Arrow Icons matching LD021 */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href="#cac-khoa-hoc"
                    className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-[#FDEBD8] hover:bg-white text-[#4E2F1B] font-extrabold text-xs sm:text-sm shadow-lg transition"
                  >
                    <span className="h-9 w-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-xs group-hover:translate-x-0.5 transition">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>{data.heroShowcase.primaryCta}</span>
                  </a>

                  <a
                    href="#tu-van-mo-quan"
                    className="group inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-[#FDEBD8] hover:bg-white text-[#4E2F1B] font-extrabold text-xs sm:text-sm shadow-lg transition"
                  >
                    <span className="h-9 w-9 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-xs group-hover:translate-x-0.5 transition">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>{data.heroShowcase.secondaryCta}</span>
                  </a>
                </div>
              </div>

              {/* Right Instructor Ly Phạm Portrait Holding Signature Drink (3 Cols) */}
              <div className="lg:col-span-3 flex flex-col items-center">
                <div className="relative w-52 sm:w-60 rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[3/4] bg-[#134E35]">
                  <img
                    src={data.heroShowcase.instructorImage}
                    alt={data.heroShowcase.instructorName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#134E35] via-[#134E35]/80 to-transparent p-3.5 text-center text-white">
                    <p className="text-xs font-black uppercase tracking-wider text-[#FDEBD8]">
                      {data.heroShowcase.instructorName}
                    </p>
                    <p className="text-[10px] text-emerald-100">Hơn 20.000+ Học Viên Mở Quán</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Ecosystem Metrics Strip Below Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {data.ecosystemPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-white p-5 border border-emerald-100 shadow-sm flex items-start gap-3.5"
              >
                <div className="h-11 w-11 rounded-xl bg-[#EAF6F3] text-[#134E35] flex items-center justify-center shrink-0 font-black text-xs">
                  <Award className="h-5 w-5 text-[#EC7A1C]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase text-[#EC7A1C]">
                    {pillar.metric}
                  </span>
                  <h3 className="text-sm font-extrabold text-[#134E35]">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COURSE CATALOG SECTION ("CÁC KHOÁ HỌC PHA CHẾ [ONLINE]") */}
      <section id="cac-khoa-hoc" className="py-14 lg:py-18 bg-[#F3FAF7]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title Matching LD021 Background Screen: "CÁC KHOÁ HỌC PHA CHẾ" + tilted orange "ONLINE" */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#134E35] tracking-tight">
                CÁC KHOÁ HỌC PHA CHẾ
              </h2>
              <span className="px-4 py-1.5 rounded-xl bg-[#EC7A1C] text-white font-black text-lg sm:text-2xl uppercase tracking-wider transform -rotate-3 shadow-md">
                ONLINE &amp; TRỰC TIẾP
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Chương trình bài bản và thiết kế linh hoạt. Phù hợp cho học viên bận rộn muốn làm chủ
              công thức pha chế chuẩn quán và tự tin mở quán kinh doanh ngay tại nhà.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {data.courseCategories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold transition ${
                      active
                        ? "bg-[#134E35] text-white shadow-md"
                        : "bg-white text-[#134E35] hover:bg-emerald-50 border border-emerald-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Course Grid with Forest-Green & Orange Framed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-3xl bg-white border-2 border-[#134E35]/15 hover:border-[#EC7A1C] shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Framed Course Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#134E35] p-2">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-[#EC7A1C] text-white font-black text-[10px] uppercase shadow">
                        {course.badgeText}
                      </span>
                      <span className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-lg bg-[#134E35]/90 text-white font-bold text-[11px]">
                        {course.drinksCount}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3.5">
                    <div className="flex items-center justify-between text-[11px] font-extrabold">
                      <span className="text-[#EC7A1C] uppercase tracking-wider">{course.code}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#134E35]">
                        {course.mode}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-[#134E35] leading-snug group-hover:text-[#EC7A1C] transition">
                      {course.title}
                    </h3>

                    <ul className="space-y-2 text-xs text-slate-600">
                      {course.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#134E35] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & Action Footer */}
                <div className="px-6 py-4 bg-[#F9FCFA] border-t border-emerald-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">
                      Học phí ưu đãi
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-[#EC7A1C]">{course.price}</span>
                      {course.oldPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {course.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCourse(course);
                      setConsultForm((prev) => ({ ...prev, courseInterest: course.title }));
                    }}
                    className="px-4 py-2.5 rounded-full bg-[#134E35] hover:bg-[#EC7A1C] text-white font-extrabold text-xs transition flex items-center gap-1.5"
                  >
                    <span>Đăng ký học</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT MENTOR LY PHẠM & SALY INGREDIENT PACKAGES */}
      <section id="ve-ly-pham" className="py-16 bg-white border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {/* Mentor Split Story */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-4 border-[#FDEBD8] shadow-xl aspect-[4/4]">
                <img
                  src={data.heroShowcase.instructorImage}
                  alt={data.heroShowcase.instructorName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDEBD8] text-[#C85A08] text-xs font-extrabold uppercase">
                <Store className="h-3.5 w-3.5" /> Người Truyền Lửa Khởi Nghiệp F&amp;B
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#134E35] leading-tight">
                {data.business.aboutTitle}
              </h2>
              {data.business.aboutText.map((paragraph, index) => (
                <p key={index} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F3FAF7] border border-emerald-100">
                  <p className="text-2xl font-black text-[#EC7A1C]">20.000+</p>
                  <p className="text-xs font-bold text-[#134E35] mt-0.5">Học viên trong &amp; ngoài nước</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F3FAF7] border border-emerald-100">
                  <p className="text-2xl font-black text-[#134E35]">150+ Món</p>
                  <p className="text-xs font-bold text-[#134E35] mt-0.5">Cập nhật Hot Trend liên tục</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F3FAF7] border border-emerald-100">
                  <p className="text-2xl font-black text-[#EC7A1C]">Cost 6K-9K</p>
                  <p className="text-xs font-bold text-[#134E35] mt-0.5">Tối ưu lợi nhuận tối đa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Saly Ingredients & Bar Equipment Starter Kits */}
          <div id="nguyen-lieu" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-[#EC7A1C]">
                  HỆ SINH THÁI NGUYÊN LIỆU SALY
                </span>
                <h3 className="text-2xl font-black text-[#134E35]">
                  Bộ Nguyên Liệu &amp; Dụng Cụ Thực Hành Pha Chế Chuẩn Quán
                </h3>
              </div>
              <a
                href="#tu-van-mo-quan"
                className="text-xs font-extrabold text-[#EC7A1C] hover:underline"
              >
                Nhận bảng giá sỉ nguyên liệu cho chủ quán &rarr;
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.ingredientPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-2xl bg-[#F3FAF7] border border-emerald-100 p-5 flex flex-col justify-between gap-4 hover:shadow-md transition"
                >
                  <div className="space-y-3">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-white">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-extrabold text-[#134E35]">{pkg.name}</h4>
                    <p className="text-xs text-slate-600">{pkg.usage}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-emerald-200/60">
                    <span className="text-sm font-black text-[#EC7A1C]">{pkg.price}</span>
                    <a
                      href="#tu-van-mo-quan"
                      className="text-xs font-extrabold text-[#134E35] hover:text-[#EC7A1C]"
                    >
                      Đặt mua &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. STUDENT SHOP OWNERS TESTIMONIALS */}
      <section id="hoc-vien" className="py-16 bg-[#EAF6F3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#EC7A1C]">
              HÀNG NGÀN QUÁN ĐÔNG KHÁCH KHẮP CẢ NƯỚC
            </span>
            <h2 className="text-3xl font-black text-[#134E35]">
              Cảm Nhận Học Viên Sau Khi Mở Quán Cùng Saly Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((rv: any) => (
              <div
                key={rv.id}
                className="rounded-2xl bg-white p-6 shadow-sm border border-emerald-100 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: rv.rating || 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    “{rv.content}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={rv.avatar}
                    alt={rv.author}
                    className="h-11 w-11 rounded-full object-cover border-2 border-[#EC7A1C]"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-[#134E35]">{rv.author}</h4>
                    <p className="text-[11px] text-slate-500">{rv.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FREE F&B CONSULTATION & COURSE REGISTRATION FORM */}
      <section id="tu-van-mo-quan" className="py-16 bg-gradient-to-b from-[#134E35] to-[#0D3826] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EC7A1C] text-white text-xs font-extrabold uppercase">
                <CupSoda className="h-3.5 w-3.5" /> TƯ VẤN LỘ TRÌNH PHA CHẾ &amp; MỞ QUÁN MIỄN PHÍ
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                Nhận Ngay Bảng Tính Giá Cost 50 Món &amp; Ưu Đãi Học Phí 45%
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Để lại thông tin để đội ngũ cố vấn của Giảng viên Ly Phạm gửi bộ tài liệu Menu mẫu,
                bảng dự toán chi phí mở quán theo số vốn và kích hoạt suất học thử ngay hôm nay.
              </p>

              <div className="space-y-2.5 text-xs text-emerald-100 pt-2">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#F7BF8A]" />
                  <span>{data.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#F7BF8A]" />
                  <span>Hotline / Zalo: {primaryPhone}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white text-[#1D3B2A] p-6 sm:p-8 shadow-2xl border-4 border-[#F7BF8A]">
                {consultSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="h-14 w-14 rounded-full bg-emerald-100 text-[#134E35] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-black text-[#134E35] uppercase">
                      Đăng Ký Tư Vấn Thành Công!
                    </h3>
                    <p className="text-xs text-slate-600">
                      Cố vấn đào tạo của <strong>Saly Academy</strong> sẽ liên hệ Zalo{" "}
                      <strong>{consultForm.phone}</strong> trong ít phút để gửi bảng Cost &amp; lộ
                      trình học.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="space-y-4">
                    <div className="text-center pb-2 border-b border-slate-100">
                      <h3 className="text-lg font-black uppercase text-[#134E35]">
                        Đăng Ký Tư Vấn Khóa Học &amp; Mở Quán
                      </h3>
                      <p className="text-xs text-[#EC7A1C] font-bold">
                        Tặng kèm File Excel Tính Giá Cost Đồ Uống Tự Động
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-[#134E35] mb-1">
                          Họ và tên của bạn *
                        </label>
                        <input
                          type="text"
                          required
                          value={consultForm.fullName}
                          onChange={(e) =>
                            setConsultForm({ ...consultForm, fullName: e.target.value })
                          }
                          placeholder="Nguyễn Ngọc Lan"
                          className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#EC7A1C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#134E35] mb-1">
                          Số điện thoại Zalo *
                        </label>
                        <input
                          type="tel"
                          required
                          value={consultForm.phone}
                          onChange={(e) =>
                            setConsultForm({ ...consultForm, phone: e.target.value })
                          }
                          placeholder="0934 xxx xxx"
                          className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#EC7A1C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#134E35] mb-1">
                        Khóa học bạn đang quan tâm
                      </label>
                      <select
                        value={consultForm.courseInterest}
                        onChange={(e) =>
                          setConsultForm({ ...consultForm, courseInterest: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#EC7A1C]"
                      >
                        {data.courses.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title} ({c.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#134E35] mb-1">
                        Khu vực dự định mở quán / Mô hình mong muốn
                      </label>
                      <input
                        type="text"
                        value={consultForm.city}
                        onChange={(e) => setConsultForm({ ...consultForm, city: e.target.value })}
                        placeholder="Ví dụ: Mở quán Take-away tại TP.HCM, vốn 40 triệu..."
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#EC7A1C]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#EC7A1C] hover:bg-[#d66810] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition"
                    >
                      Nhận Tư Vấn &amp; Ưu Đãi Học Phí Ngay
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#09261A] text-emerald-100/75 py-6 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">{data.business.name}</strong>{" "}
            — {data.business.address}
          </p>
          <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="text-[#F7BF8A] font-bold">
            Hotline hỗ trợ học viên: {primaryPhone}
          </a>
        </div>
      </footer>

      {/* QUICK COURSE MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative border-4 border-[#F7BF8A] shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-600"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="h-14 w-20 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[10px] font-black uppercase text-[#EC7A1C]">
                    {selectedCourse.code} • {selectedCourse.price}
                  </span>
                  <h4 className="text-xs font-extrabold text-[#134E35] line-clamp-2">
                    {selectedCourse.title}
                  </h4>
                </div>
              </div>

              <form onSubmit={handleConsultSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={consultForm.fullName}
                  onChange={(e) => setConsultForm({ ...consultForm, fullName: e.target.value })}
                  placeholder="Họ và tên học viên *"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs"
                />
                <input
                  type="tel"
                  required
                  value={consultForm.phone}
                  onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                  placeholder="Số điện thoại Zalo nhận tài khoản *"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#EC7A1C] text-white font-black text-xs uppercase"
                >
                  Đăng Ký Giữ Ưu Đãi Khóa Học
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
