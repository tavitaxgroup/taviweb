"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  Camera,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Globe,
  GraduationCap,
  Grid,
  Heart,
  Lightbulb,
  Mail,
  Megaphone,
  Menu,
  Music,
  Palette,
  Phone,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  X,
  Zap
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import leadGeneration14DefaultData, {
  type ElearningCourseItem,
  type LeadGeneration14Data
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

function renderCategoryIcon(iconName: string) {
  switch (iconName) {
    case "palette":
      return <Palette className="h-5 w-5 text-[#0071DC]" />;
    case "code":
      return <Code2 className="h-5 w-5 text-[#0071DC]" />;
    case "sparkles":
      return <Sparkles className="h-5 w-5 text-[#0071DC]" />;
    case "lightbulb":
      return <Lightbulb className="h-5 w-5 text-[#0071DC]" />;
    case "briefcase":
      return <Briefcase className="h-5 w-5 text-[#0071DC]" />;
    case "chart":
      return <TrendingUp className="h-5 w-5 text-[#0071DC]" />;
    case "megaphone":
      return <Megaphone className="h-5 w-5 text-[#0071DC]" />;
    case "camera":
      return <Camera className="h-5 w-5 text-[#0071DC]" />;
    case "database":
      return <Database className="h-5 w-5 text-[#0071DC]" />;
    case "heart":
      return <Heart className="h-5 w-5 text-[#0071DC]" />;
    case "music":
      return <Music className="h-5 w-5 text-[#0071DC]" />;
    default:
      return <GraduationCap className="h-5 w-5 text-[#0071DC]" />;
  }
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = useMemo(
    () => adaptClonedTemplateData(leadGeneration14DefaultData, incomingData) as LeadGeneration14Data,
    [incomingData]
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<ElearningCourseItem | null>(null);
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [enrollForm, setEnrollForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "Học viên cá nhân"
  });

  const primaryPhone = data.business.phone[0] || "031 3728 397";
  const primaryEmail = data.business.email[0] || "info@themona.global";

  const filteredCourses = useMemo(() => {
    return data.courses.filter((course) => {
      const matchesTab = activeTab === "Tất cả" || course.category === activeTab;
      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [data.courses, activeTab, searchQuery]);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSubmitted(true);
    setTimeout(() => {
      setEnrollSubmitted(false);
      setSelectedCourse(null);
      setEnrollForm({ fullName: "", phone: "", email: "", role: "Học viên cá nhân" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-[#031F42] font-sans selection:bg-[#0071DC] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#031F42] text-white text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#FFC221] transition"
            >
              <Phone className="h-3.5 w-3.5 text-[#FFC221]" />
              <span>{primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`mailto:${primaryEmail}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#FFC221] transition"
            >
              <Mail className="h-3.5 w-3.5 text-[#FFC221]" />
              <span>{primaryEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button
              type="button"
              onClick={() => setSelectedCourse(data.courses[0] || null)}
              className="hover:text-[#FFC221] transition font-medium"
            >
              Đăng nhập
            </button>
            <span className="text-white/25">|</span>
            <button
              type="button"
              onClick={() => setSelectedCourse(data.courses[0] || null)}
              className="hover:text-[#FFC221] transition font-medium"
            >
              Đăng ký
            </button>
            <div className="hidden md:flex items-center gap-2.5 pl-3 border-l border-white/15 text-white/80">
              <a href="#ket-noi" aria-label="Cộng đồng" className="hover:text-[#FFC221] transition">
                <Globe className="h-3.5 w-3.5" />
              </a>
              <a href="#ket-noi" aria-label="Học thuật" className="hover:text-[#FFC221] transition">
                <GraduationCap className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Brand + Category Dropdown */}
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="h-10 w-10 rounded-xl bg-[#0071DC] flex items-center justify-center text-white shadow-md shadow-[#0071DC]/25">
                <GraduationCap className="h-6 w-6 text-[#FFC221]" />
              </div>
              <div className="leading-none">
                <span className="text-xl font-extrabold tracking-tight text-[#031F42]">
                  M.S<span className="text-[#0071DC]">/eLearning</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                  Academic Portal
                </span>
              </div>
            </a>

            <a
              href="#danh-muc"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-slate-100 hover:bg-[#0071DC] hover:text-white text-[#031F42] text-xs font-semibold transition"
            >
              <Grid className="h-3.5 w-3.5" />
              <span>Danh mục</span>
            </a>
          </div>

          {/* Search Box in Navbar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm khóa học..."
              className="w-full rounded-full bg-[#F5F7FA] border border-slate-200 pl-4 pr-10 py-2 text-xs text-[#031F42] placeholder:text-slate-400 focus:outline-none focus:border-[#0071DC] focus:bg-white transition"
            />
            <Search className="h-4 w-4 text-[#0071DC] absolute right-3.5 pointer-events-none" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-[#031F42]">
            <a href="#khoa-hoc" className="flex items-center gap-1 hover:text-[#0071DC] transition">
              Khóa học <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </a>
            <a href="#danh-muc" className="hover:text-[#0071DC] transition">
              Danh mục
            </a>
            <a href="#danh-gia" className="hover:text-[#0071DC] transition">
              Đánh giá
            </a>
            <a href="#giang-vien" className="hover:text-[#0071DC] transition">
              Giảng viên
            </a>
            <a href="#doi-tac" className="hover:text-[#0071DC] transition">
              Đối tác
            </a>
          </nav>

          {/* Right Cart + CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedCourse(data.courses[0] || null)}
              aria-label="Giỏ khóa học"
              className="relative p-2.5 rounded-full bg-slate-100 hover:bg-blue-50 text-[#031F42] transition"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#0071DC] text-white text-[10px] font-bold flex items-center justify-center">
                2
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg border border-slate-200 text-[#031F42]"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 shadow-lg">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm khóa học..."
                className="w-full rounded-full bg-[#F5F7FA] border border-slate-200 pl-4 pr-10 py-2.5 text-xs"
              />
              <Search className="h-4 w-4 text-[#0071DC] absolute right-3.5 top-2.5" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#031F42]">
              <a
                href="#danh-muc"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50"
              >
                Danh mục đào tạo
              </a>
              <a
                href="#khoa-hoc"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50"
              >
                Khóa học tiêu biểu
              </a>
              <a
                href="#danh-gia"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50"
              >
                Cảm nhận học viên
              </a>
              <a
                href="#giang-vien"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50"
              >
                Trở thành giảng viên
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION & ROYAL BLUE 4-FEATURE STRIP */}
      <section className="relative bg-[#F5F7FA] overflow-hidden pt-10 lg:pt-14">
        {/* Decorative subtle grid dots */}
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: "radial-gradient(#0071DC 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10 pb-12 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0071DC]">
                <span>{data.hero.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#031F42] leading-[1.2]">
                Truy Cập Hơn{" "}
                <span className="text-[#0071DC] underline decoration-[#FFC221] decoration-4 underline-offset-4">
                  {data.heroHighlights.coursesCount}
                </span>{" "}
                Khóa Học Từ{" "}
                <span className="text-[#0071DC]">{data.heroHighlights.instructorsCount}</span> Giảng
                Viên &amp; Học Viện
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
                {data.hero.subtitle}
              </p>

              {/* Hero Search Input with Yellow Circle Search Button */}
              <div className="max-w-lg bg-white rounded-full p-2 pl-6 shadow-lg shadow-slate-200/80 border border-slate-100 flex items-center justify-between gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Bạn muốn học kỹ năng gì hôm nay?"
                  className="w-full text-sm text-[#031F42] placeholder:text-slate-400 focus:outline-none bg-transparent"
                />
                <a
                  href="#khoa-hoc"
                  aria-label="Tìm kiếm"
                  className="h-11 w-11 rounded-full bg-[#FFC221] hover:bg-[#eab015] text-[#031F42] flex items-center justify-center shrink-0 shadow-sm transition"
                >
                  <Search className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right 3-Photo Staggered Student Collage (6 cols) */}
            <div className="lg:col-span-6 relative">
              {/* Decorative golden circle & dots */}
              <div className="hidden sm:block absolute -top-5 left-1/3 h-12 w-12 rounded-full border-4 border-[#FFC221] z-20 pointer-events-none" />
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left tall image */}
                <div className="col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4]">
                    <img
                      src={data.heroHighlights.collageImages[0]}
                      alt="Sinh viên học trực tuyến"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right stacked 2 images */}
                <div className="col-span-7 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10]">
                    <img
                      src={data.heroHighlights.collageImages[1]}
                      alt="Thực hành lập trình và thiết kế"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] w-4/5 ml-auto">
                    <img
                      src={data.heroHighlights.collageImages[2]}
                      alt="Nhóm học viên trao đổi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Royal Blue 4-Feature Strip */}
        <div className="bg-[#0071DC] text-white py-7">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.blueFeatureStrip.map((item: any, idx: number) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-[#FFC221]">
                    {idx === 0 && <BookOpen className="h-6 w-6" />}
                    {idx === 1 && <Award className="h-6 w-6" />}
                    {idx === 2 && <Briefcase className="h-6 w-6" />}
                    {idx === 3 && <UserCheck className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base leading-tight">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-100">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOP CATEGORIES (4x3 GRID = 12 PILLS) */}
      <section id="danh-muc" className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031F42]">Danh Mục Hàng Đầu</h2>
            <a
              href="#khoa-hoc"
              className="text-xs font-bold text-[#0071DC] hover:underline"
            >
              Xem tất cả danh mục &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.topCategories.map((cat) => (
              <a
                key={cat.id}
                href="#khoa-hoc"
                className="group flex items-center gap-3.5 p-4 rounded-xl bg-[#F5F7FA] hover:bg-[#0071DC] border border-transparent hover:border-[#0071DC] transition duration-200 shadow-xs"
              >
                <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-xs">
                  {renderCategoryIcon(cat.icon)}
                </div>
                <span className="font-bold text-sm text-[#031F42] group-hover:text-white transition">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDENTS ARE VIEWING (5x2 COURSE GRID + HELP BANNER) */}
      <section id="khoa-hoc" className="py-14 lg:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header + Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031F42]">
              Khóa Học Đang Được Quan Tâm
            </h2>

            <div className="flex flex-wrap items-center gap-1.5">
              {data.courseTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-xs font-bold transition ${
                      isActive
                        ? "bg-white text-[#0071DC] shadow-sm border border-slate-200"
                        : "text-slate-600 hover:text-[#031F42] hover:bg-slate-50"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5-Column x 2-Row Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="group cursor-pointer bg-white rounded-xl border border-slate-100 hover:border-[#0071DC]/40 shadow-sm hover:shadow-xl transition flex flex-col overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {course.badgeText && (
                    <span
                      className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider text-white shadow ${
                        course.badgeType === "free" ? "bg-[#10B981]" : "bg-[#0071DC]"
                      }`}
                    >
                      {course.badgeText}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-[#0071DC] text-[10px] font-bold">
                      {course.level}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#031F42] group-hover:text-[#0071DC] line-clamp-2 leading-snug transition">
                      {course.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">{course.instructor}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-sm font-extrabold ${
                          course.badgeType === "free" ? "text-[#031F42]" : "text-[#031F42]"
                        }`}
                      >
                        {course.price}
                      </span>
                      {course.oldPrice && (
                        <span className="text-[11px] text-slate-400 line-through">
                          {course.oldPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-[#FFC221]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-[#FFC221]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        ({course.reviewsCount})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Light-Blue Help Banner with Floating Blue Lightning Circle */}
          <div className="mt-16 max-w-3xl mx-auto relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#0071DC] text-white flex items-center justify-center shadow-lg shadow-[#0071DC]/30 z-10">
              <Zap className="h-5 w-5 fill-white" />
            </div>

            <div className="rounded-2xl bg-[#EEF5FF] border border-blue-100 px-6 py-10 text-center space-y-3 relative overflow-hidden">
              <p className="text-xs font-bold text-[#0071DC] uppercase tracking-wider">
                {data.helpBanner.eyebrow}
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#031F42]">
                {data.helpBanner.title}
              </h3>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCourse(data.courses[0] || null)}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#FFC221] hover:bg-[#eab015] text-[#031F42] font-extrabold text-xs shadow-sm transition"
                >
                  {data.helpBanner.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PEOPLE LOVE TO LEARN WITH M.S/eLearning (TESTIMONIALS + DUAL PROMO CARDS) */}
      <section id="danh-gia" className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 space-y-14">
          {/* Testimonials Row */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Intro (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031F42] leading-tight">
                {data.business.aboutTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <button
                type="button"
                onClick={() => setSelectedCourse(data.courses[0] || null)}
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#EEF5FF] hover:bg-[#0071DC] text-[#0071DC] hover:text-white text-xs font-bold transition"
              >
                Xem tất cả
              </button>
            </div>

            {/* Right 3 Review Cards (9 cols) */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-5">
              {(data.testimonials || []).map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl p-6 shadow-xs border border-slate-100 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#0071DC]">
                        Đánh giá xuất sắc
                      </span>
                      <div className="flex items-center gap-0.5 text-[#FFC221]">
                        {Array.from({ length: review.rating || 5 }).map((_, idx) => (
                          <Star key={idx} className="h-3.5 w-3.5 fill-[#FFC221]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{review.content}</p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-extrabold text-[#031F42]">{review.author}</h4>
                      <p className="text-[11px] text-slate-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Promo Cards (Become an Instructor / Transform Access to Education) */}
          <div id="giang-vien" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Instructor */}
            <div className="rounded-2xl bg-[#EEF3F9] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden border border-slate-200/60">
              <div className="space-y-3.5 max-w-xs">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#031F42]">
                  {data.dualPromoCards.instructorCard.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {data.dualPromoCards.instructorCard.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(data.courses[0] || null)}
                  className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#0071DC] hover:bg-[#005bb5] text-white text-xs font-bold shadow-sm transition"
                >
                  {data.dualPromoCards.instructorCard.buttonText}
                </button>
              </div>
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                <img
                  src={data.dualPromoCards.instructorCard.image}
                  alt={data.dualPromoCards.instructorCard.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Student Registration */}
            <div className="rounded-2xl bg-[#FDF4F5] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden border border-rose-100">
              <div className="space-y-3.5 max-w-xs">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#031F42]">
                  {data.dualPromoCards.studentCard.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {data.dualPromoCards.studentCard.description}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(data.courses[0] || null)}
                  className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#0071DC] hover:bg-[#005bb5] text-white text-xs font-bold shadow-sm transition"
                >
                  {data.dualPromoCards.studentCard.buttonText}
                </button>
              </div>
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                <img
                  src={data.dualPromoCards.studentCard.image}
                  alt={data.dualPromoCards.studentCard.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNER INSTITUTIONS (WHO WILL YOU LEARN WITH? 2x6 LOGO GRID) */}
      <section id="doi-tac" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031F42] leading-tight">
                Bạn Sẽ Học Cùng Đơn Vị Nào?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hệ sinh thái liên kết đào tạo cùng hơn 480 trường đại học, viện nghiên cứu và doanh
                nghiệp công nghệ hàng đầu giúp bằng cấp của bạn được công nhận rộng rãi.
              </p>
              <a
                href="#khoa-hoc"
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#EEF5FF] hover:bg-[#0071DC] text-[#0071DC] hover:text-white text-xs font-bold transition"
              >
                Xem toàn bộ đối tác
              </a>
            </div>

            {/* Right 6x2 Logo Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {data.partnerInstitutions.map((partner) => (
                <div
                  key={partner.id}
                  className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:shadow-md transition flex flex-col items-center justify-center text-center gap-2"
                >
                  <div
                    className={`h-10 w-10 rounded-lg ${partner.color} text-white flex items-center justify-center font-extrabold text-xs shadow-xs`}
                  >
                    {partner.name.slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-[#031F42] tracking-tight leading-tight">
                      {partner.name}
                    </p>
                    <p className="text-[9px] text-slate-400">{partner.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. DARK COPYRIGHT FOOTER BAR */}
      <footer id="ket-noi" className="bg-[#1E2024] text-slate-400 py-5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © Thiết kế &amp; phát triển bởi{" "}
            <span className="text-white font-semibold">{data.business.name}</span> —{" "}
            {data.business.address}
          </p>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#khoa-hoc" className="hover:text-[#FFC221] transition">
              Điều khoản
            </a>
            <a href="#khoa-hoc" className="hover:text-[#FFC221] transition">
              Bảo mật
            </a>
            <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="hover:text-[#FFC221] transition">
              Hotline: {primaryPhone}
            </a>
          </div>
        </div>
      </footer>

      {/* COURSE ENROLLMENT / LEAD MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100">
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>

            {enrollSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-extrabold text-[#031F42]">
                  Đăng Ký Tư Vấn Khóa Học Thành Công!
                </h3>
                <p className="text-xs text-slate-600">
                  Cố vấn học tập của <strong>{data.business.name}</strong> sẽ liên hệ với bạn trong
                  ít phút để kích hoạt tài khoản học thử.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    className="h-14 w-20 rounded-lg object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#0071DC]">
                      {selectedCourse.level} • {selectedCourse.price}
                    </span>
                    <h3 className="text-xs font-extrabold text-[#031F42] line-clamp-2">
                      {selectedCourse.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#031F42] mb-1">
                    Họ và tên học viên *
                  </label>
                  <input
                    type="text"
                    required
                    value={enrollForm.fullName}
                    onChange={(e) => setEnrollForm({ ...enrollForm, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0071DC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#031F42] mb-1">
                    Số điện thoại Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    value={enrollForm.phone}
                    onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                    placeholder="0909 xxx xxx"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0071DC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#031F42] mb-1">
                    Email nhận tài liệu
                  </label>
                  <input
                    type="email"
                    value={enrollForm.email}
                    onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                    placeholder="hocvien@email.com"
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0071DC]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0071DC] hover:bg-[#005bb5] text-white font-extrabold text-xs shadow-md transition"
                >
                  Nhận Lộ Trình &amp; Học Thử Ngay
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
