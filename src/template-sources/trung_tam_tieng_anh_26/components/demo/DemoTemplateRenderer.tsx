"use client";

import React, { useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Mic,
  Phone,
  Play,
  Search,
  Send,
  Sparkles,
  Star,
  Users,
  Video,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh26DefaultData,
  type EducacionCourse,
  type TrungTamTiengAnh26Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh26DefaultData,
    data
  ) as TrungTamTiengAnh26Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "ielts" | "business" | "cambridge" | "coding-ai"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRoadmapIdx, setActiveRoadmapIdx] = useState(0);
  const [selectedCourse, setSelectedCourse] =
    useState<EducacionCourse | null>(null);
  const [consultForm, setConsultForm] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Luyện thi IELTS 7.0+"
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const primaryPhone = merged.business.phone[0] || "1900 636 648";
  const primaryEmail =
    merged.business.email[0] || "support@educacion.mona.media";

  const filteredCourses = merged.onlineCourses.filter((course) => {
    const matchCat =
      activeCategory === "all" || course.category === activeCategory;
    const matchQuery =
      !searchQuery.trim() ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultForm.name.trim() || !consultForm.phone.trim()) return;
    setConsultSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* 1. Deep Royal Violet Topbar */}
      <div className="border-b border-white/10 bg-[#0d061f] py-2 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-xs">
          <div className="flex items-center gap-2 text-purple-200">
            <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
            <span>
              <strong className="text-[#f59e0b]">THE MONA EDUCACION:</strong>{" "}
              Nền tảng đào tạo Ngoại ngữ & AI tự động hóa trọn gói
            </span>
          </div>
          <div className="flex items-center gap-4 text-purple-200">
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-[#f59e0b]" />
              {primaryPhone}
            </span>
            <span className="hidden items-center gap-1 sm:flex">
              <Mail className="h-3.5 w-3.5 text-[#f59e0b]" />
              {primaryEmail}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Sticky Dark Violet Navbar */}
      <header className="sticky top-0 z-40 border-b border-purple-900/40 bg-[#14092e]/95 text-white shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-slate-950 shadow">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-lg font-black tracking-wider text-white">
                THE MONA
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
                EDUCACION EDTECH
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider text-purple-100 lg:flex">
            <a href="#top" className="text-[#f59e0b]">
              TRANG CHỦ
            </a>
            <a href="#ai-pillars" className="transition hover:text-[#f59e0b]">
              CÔNG NGHỆ AI
            </a>
            <a href="#courses" className="transition hover:text-[#f59e0b]">
              KHÓA HỌC TRỰC TUYẾN
            </a>
            <a href="#roadmap" className="transition hover:text-[#f59e0b]">
              LỘ TRÌNH CEFR
            </a>
            <a href="#mentors" className="transition hover:text-[#f59e0b]">
              GIẢNG VIÊN
            </a>
            <a href="#pricing" className="transition hover:text-[#f59e0b]">
              HỌC PHÍ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#consult-register"
              className="rounded-full bg-[#f59e0b] px-5 py-2 text-xs font-black uppercase text-slate-950 shadow transition hover:bg-amber-400"
            >
              Học thử miễn phí
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded p-1.5 text-white hover:bg-white/10 lg:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#14092e] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase text-purple-100">
              <a href="#ai-pillars" onClick={() => setMobileMenuOpen(false)}>
                CÔNG NGHỆ AI
              </a>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)}>
                KHÓA HỌC TRỰC TUYẾN
              </a>
              <a href="#roadmap" onClick={() => setMobileMenuOpen(false)}>
                LỘ TRÌNH CEFR
              </a>
              <a href="#mentors" onClick={() => setMobileMenuOpen(false)}>
                GIẢNG VIÊN
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                HỌC PHÍ TRỌN GÓI
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Deep Royal Violet & Gold Hero Banner (Matching TA029 Visual Aesthetic) */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#120829] via-[#2e1065] to-[#7e22ce] py-14 text-white lg:py-20"
      >
        {/* Radial Purple Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left Typography */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b] sm:text-sm">
              {merged.hero.eyebrow}
            </span>

            <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
              Đào tạo Ngoại ngữ{" "}
              <span className="text-[#f59e0b]">trọn gói</span> cho thế hệ công
              dân toàn cầu
            </h1>

            <p className="mt-4 text-sm font-medium text-purple-200 sm:text-base">
              {merged.hero.subtitle}
            </p>

            <p className="mt-2 max-w-xl text-xs leading-relaxed text-purple-200/85 sm:text-sm">
              {merged.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={merged.hero.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-7 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-xl transition hover:scale-105 hover:bg-amber-400"
              >
                {merged.hero.ctaText}
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#consult-register"
                className="inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-white/10 px-6 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Play className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                Kiểm tra trình độ AI
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-semibold text-purple-200">
              <span>mona.media</span>
              <span>•</span>
              <span className="text-[#f59e0b]">{primaryPhone}</span>
            </div>
          </div>

          {/* Right Interactive EdTech Mascot / Live Class Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={merged.hero.backgroundImage}
                  alt="Educacion Online Learning"
                  className="h-60 w-full object-cover sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120829]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase">
                    ● LIVE CLASS 1-1 ĐANG DIỄN RA
                  </span>
                  <span className="rounded bg-white/20 px-2.5 py-1 font-bold backdrop-blur-sm">
                    AI Score: 8.5
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {merged.heroStats.map((st) => (
                  <div
                    key={st.id}
                    className="rounded-2xl border border-white/10 bg-[#120829]/60 p-3.5"
                  >
                    <div className="text-xl font-black text-[#f59e0b]">
                      {st.value}
                    </div>
                    <div className="mt-0.5 text-[11px] text-purple-200">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Hệ sinh thái Học tập AI 4.0" — 4 Bento Cards */}
      <section id="ai-pillars" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="rounded-full bg-purple-100 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-purple-800">
              CÔNG NGHỆ GIÁO DỤC ĐỘT PHÁ
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Nền tảng học Ngoại ngữ tích hợp AI tự động hóa
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.aiPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-400 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2e1065] text-[#f59e0b] shadow">
                  {pillar.icon === "mic" && <Mic className="h-6 w-6" />}
                  {pillar.icon === "video" && <Video className="h-6 w-6" />}
                  {pillar.icon === "cpu" && <Cpu className="h-6 w-6" />}
                  {pillar.icon === "award" && <Award className="h-6 w-6" />}
                </div>
                <span className="mt-4 text-[10px] font-black uppercase tracking-wider text-purple-700">
                  {pillar.badge}
                </span>
                <h3 className="mt-1 text-base font-black text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Online Courses Catalog */}
      <section id="courses" className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-700">
                CHƯƠNG TRÌNH ĐÀO TẠO TRỰC TUYẾN
              </span>
              <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
                Khóa học Ngoại ngữ & Kỹ năng Quốc tế nổi bật
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm khóa học, giảng viên..."
                className="w-full rounded-full border border-slate-300 bg-white py-2 pl-4 pr-9 text-xs focus:border-purple-700 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tất cả khóa học" },
              { id: "ielts", label: "Luyện thi IELTS AI" },
              { id: "business", label: "Tiếng Anh Doanh nghiệp" },
              { id: "cambridge", label: "Cambridge Quốc tế" },
              { id: "coding-ai", label: "Tiếng Anh Công nghệ & AI" }
            ].map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      tab.id as
                        | "all"
                        | "ielts"
                        | "business"
                        | "cambridge"
                        | "coding-ai"
                    )
                  }
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? "bg-[#2e1065] text-[#f59e0b] shadow"
                      : "bg-white text-slate-700 hover:bg-purple-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 6 Course Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#120829]/90 px-3 py-1 text-[10px] font-black text-[#f59e0b]">
                    CEFR: {course.level}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>{course.lessons} bài giảng HD</span>
                    <span>{course.students}</span>
                  </div>

                  <h3 className="mt-2 line-clamp-2 text-base font-black text-slate-900 group-hover:text-purple-800">
                    {course.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      {course.instructor}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <div>
                      <span className="block text-[11px] text-slate-400 line-through">
                        {course.oldPrice}
                      </span>
                      <span className="text-base font-black text-[#2e1065]">
                        {course.price}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#f59e0b] px-4 py-1.5 text-xs font-black text-slate-950">
                      Học ngay <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Interactive CEFR Learning Roadmap */}
      <section
        id="roadmap"
        className="bg-gradient-to-br from-[#120829] to-[#2e1065] py-14 text-white"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              LỘ TRÌNH CÁ NHÂN HÓA CHUẨN QUỐC TẾ
            </span>
            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Chinh phục chuẩn đầu ra CEFR & IELTS trong 3 chặng
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {merged.cefrRoadmap.map((step, idx) => {
              const active = activeRoadmapIdx === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveRoadmapIdx(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 transition ${
                    active
                      ? "border-[#f59e0b] bg-white/15 shadow-xl"
                      : "border-white/15 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#f59e0b] px-3 py-0.5 text-[11px] font-black text-slate-950">
                      {step.cefr}
                    </span>
                    <span className="text-xs font-bold text-purple-200">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-black text-white">
                    {step.stage}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-[#f59e0b]">
                    Mục tiêu: {step.target}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-purple-100">
                    {step.skills.map((sk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f59e0b]" />
                        <span>{sk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Mentors Grid */}
      <section id="mentors" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <span className="text-xs font-black uppercase tracking-wider text-purple-700">
            HỘI ĐỒNG HỌC THUẬT QUỐC TẾ
          </span>
          <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
            Đội ngũ Giảng viên & Chuyên gia IELTS 8.5 – 9.0
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.mentors.map((m) => (
              <div
                key={m.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="mx-auto h-28 w-28 rounded-full border-4 border-[#f59e0b] object-cover shadow"
                />
                <h3 className="mt-4 text-base font-black text-slate-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs font-bold text-purple-700">
                  {m.credential}
                </p>
                <p className="mt-1.5 text-xs text-slate-600">{m.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing Plans & Consultation Registration */}
      <section id="pricing" className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700">
              ĐẦU TƯ CHO TƯƠNG LAI TOÀN CẦU
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
              Các gói Đào tạo Ngoại ngữ Trực tuyến Trọn gói
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merged.pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col rounded-3xl p-7 shadow-lg ${
                  plan.popular
                    ? "border-2 border-[#f59e0b] bg-[#1e0b45] text-white"
                    : "border border-slate-200 bg-white text-slate-800"
                }`}
              >
                {plan.popular && (
                  <span className="mb-3 w-fit rounded-full bg-[#f59e0b] px-3 py-0.5 text-[10px] font-black uppercase text-slate-950">
                    ĐƯỢC CHỌN NHIỀU NHẤT
                  </span>
                )}
                <h3 className="text-lg font-black">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-black ${
                      plan.popular ? "text-[#f59e0b]" : "text-[#2e1065]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs opacity-75">{plan.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-xs">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.popular ? "text-[#f59e0b]" : "text-purple-700"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#consult-register"
                  className={`mt-7 block rounded-full py-3 text-center text-xs font-black uppercase transition ${
                    plan.popular
                      ? "bg-[#f59e0b] text-slate-950 hover:bg-amber-400"
                      : "bg-[#2e1065] text-white hover:bg-purple-900"
                  }`}
                >
                  Đăng ký gói học này
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Consultation Form + Reviews */}
      <section id="consult-register" className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-wider text-purple-700">
              CẢM NHẬN HỌC VIÊN
            </span>
            <h2 className="mt-1 text-2xl font-black text-slate-900">
              Hơn 48,500+ học viên đã bứt phá ngoại ngữ cùng Educacion
            </h2>
            <div className="mt-6 space-y-4">
              {merged.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.student}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-black text-slate-900">
                        {rev.student}
                      </h4>
                      <span className="text-xs font-bold text-purple-700">
                        {rev.score}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs italic leading-relaxed text-slate-600">
                    “{rev.quote}”
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#120829] to-[#2e1065] p-7 text-white shadow-2xl sm:p-9 lg:col-span-6">
            <h3 className="text-xl font-black text-[#f59e0b]">
              Đăng ký Kiểm tra Trình độ AI & Học thử 1-1 Miễn phí
            </h3>
            <p className="mt-1 text-xs text-purple-200">
              Nhận ngay lộ trình cá nhân hóa và học bổng ưu đãi 35% học phí
            </p>

            {consultSubmitted ? (
              <div className="mt-6 rounded-2xl bg-white/15 p-5 text-xs">
                <p className="text-sm font-black text-[#f59e0b]">
                  Đăng ký thành công!
                </p>
                <p className="mt-1 text-purple-100">
                  Cố vấn học thuật Educacion sẽ liên hệ{" "}
                  <strong>{consultForm.name}</strong> qua số{" "}
                  <strong>{consultForm.phone}</strong> trong 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="mt-5 space-y-3.5">
                <input
                  type="text"
                  required
                  value={consultForm.name}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, name: e.target.value })
                  }
                  placeholder="Họ và tên Học viên *"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-purple-200 focus:border-[#f59e0b] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={consultForm.phone}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại Zalo *"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-purple-200 focus:border-[#f59e0b] focus:outline-none"
                />
                <input
                  type="email"
                  value={consultForm.email}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, email: e.target.value })
                  }
                  placeholder="Email nhận tài khoản học thử"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder:text-purple-200 focus:border-[#f59e0b] focus:outline-none"
                />
                <select
                  value={consultForm.goal}
                  onChange={(e) =>
                    setConsultForm({ ...consultForm, goal: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/20 bg-[#1e0b45] px-4 py-2.5 text-xs text-white focus:border-[#f59e0b] focus:outline-none"
                >
                  <option value="Luyện thi IELTS 6.5 - 8.0+">
                    Luyện thi IELTS 6.5 - 8.0+
                  </option>
                  <option value="Tiếng Anh Giao tiếp Doanh nghiệp 1-1">
                    Tiếng Anh Giao tiếp Doanh nghiệp 1-1
                  </option>
                  <option value="Cambridge Thiếu nhi Starters/Movers/Flyers">
                    Cambridge Thiếu nhi Starters/Movers/Flyers
                  </option>
                </select>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f59e0b] py-3 text-xs font-black uppercase text-slate-950 shadow-lg transition hover:bg-amber-400"
                >
                  <Send className="h-3.5 w-3.5" />
                  Nhận tài khoản học thử ngay
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. Dark Royal Violet Footer */}
      <footer className="bg-[#0d061f] text-purple-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-black tracking-wider text-white">
              THE MONA • EDUCACION
            </span>
            <p className="mt-3 text-xs leading-relaxed text-purple-300">
              {merged.business.aboutText[0]}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Chương trình học</h3>
            <ul className="mt-3 space-y-2 text-xs text-purple-300">
              <li>IELTS Academic Masterclass AI</li>
              <li>Business English 1-Kèm-1</li>
              <li>Cambridge Starters – Flyers</li>
              <li>Tiếng Anh Công nghệ & Lập trình</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Hỗ trợ Học viên</h3>
            <ul className="mt-3 space-y-2 text-xs text-purple-300">
              <li>Kiểm tra trình độ AI miễn phí</li>
              <li>Phòng thi ảo IELTS Computer-based</li>
              <li>Cam kết đầu ra bằng hợp đồng</li>
              <li>Ứng dụng học tập iOS & Android</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-white">Liên hệ</h3>
            <ul className="mt-3 space-y-2.5 text-xs text-purple-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#f59e0b]" />
                <span>Hotline: {primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#f59e0b]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-purple-400">
          © Bản quyền thuộc về {merged.business.name} • THE MONA GROUP.
        </div>
      </footer>

      {/* Course Preview Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="h-44 w-full rounded-xl object-cover"
            />
            <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-0.5 text-[10px] font-black text-purple-800">
              Trình độ {selectedCourse.level} • {selectedCourse.lessons} bài học
            </span>
            <h3 className="mt-2 text-base font-black text-slate-900">
              {selectedCourse.title}
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Giảng viên: <strong>{selectedCourse.instructor}</strong>
            </p>
            <p className="mt-2 text-lg font-black text-[#2e1065]">
              {selectedCourse.price}
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href="#consult-register"
                onClick={() => setSelectedCourse(null)}
                className="rounded-full bg-[#f59e0b] px-5 py-2 text-xs font-black text-slate-950"
              >
                Đăng ký học thử khóa này
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
