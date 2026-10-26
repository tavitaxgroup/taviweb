"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  ShoppingCart,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Megaphone,
  Palette,
  Code2,
  Layout,
  CheckCircle2,
  Star,
  FileText,
  Users,
  BarChart2,
  Play,
  Plus,
  Quote,
  Calendar,
  User,
  ArrowUp,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh5DefaultData,
  type TiengAnh5Data,
  type TiengAnh5CourseCard
} from "@/template-sources/trung_tam_tieng_anh_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TiengAnh5Data = adaptClonedTemplateData(
    trungTamTiengAnh5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<TiengAnh5CourseCard | null>(
    null
  );
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const stats = data.stats || trungTamTiengAnh5DefaultData.stats || [];
  const testimonials =
    data.testimonials || trungTamTiengAnh5DefaultData.testimonials || [];
  const newsList = data.news || trungTamTiengAnh5DefaultData.news || [];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSent(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  const renderCategoryIcon = (icon: string) => {
    switch (icon) {
      case "megaphone":
        return <Megaphone className="w-7 h-7 text-[#0d5ef4]" />;
      case "palette":
        return <Palette className="w-7 h-7 text-[#0d5ef4]" />;
      case "code":
        return <Code2 className="w-7 h-7 text-[#0d5ef4]" />;
      default:
        return <Layout className="w-7 h-7 text-[#0d5ef4]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#0f172a] font-sans selection:bg-[#0d5ef4] selection:text-white"
    >
      {/* 1. ROYAL BLUE TOPBAR (#0d5ef4) + WHITE NAVBAR */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Royal Blue Topbar */}
        <div className="bg-[#0d5ef4] text-white text-[11px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-5">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{primaryPhone}</span>
              </a>
              <a
                href={`mailto:${primaryEmail}`}
                className="hidden sm:flex items-center gap-1.5 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{primaryEmail}</span>
              </a>
              <span className="hidden md:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{data.business.workingHours}</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <span>Theo dõi:</span>
                <a href="#top" className="hover:opacity-80 font-bold">
                  f
                </a>
                <a href="#top" className="hover:opacity-80 font-bold">
                  in
                </a>
                <a href="#top" className="hover:opacity-80 font-bold">
                  t
                </a>
                <a href="#top" className="hover:opacity-80 font-bold">
                  yt
                </a>
              </div>
              <a
                href="#footer-contact"
                className="flex items-center gap-1 font-semibold hover:underline pl-3 border-l border-white/25"
              >
                <User className="w-3.5 h-3.5" />
                <span>Đăng nhập / Đăng ký</span>
              </a>
            </div>
          </div>
        </div>

        {/* White Navbar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-[#e63946]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-[#0b172a] block leading-none uppercase">
                EDUCATION
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 block mt-0.5">
                {data.business.name}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#0b172a]">
            <a href="#top" className="text-[#0d5ef4]">
              TRANG CHỦ
            </a>
            <a href="#about" className="hover:text-[#0d5ef4] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#popular-courses"
              className="hover:text-[#0d5ef4] transition-colors"
            >
              KHÓA HỌC
            </a>
            <a
              href="#events"
              className="flex items-center gap-1 hover:text-[#0d5ef4] transition-colors"
            >
              <span>HOẠT ĐỘNG</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#footer-contact"
              className="hover:text-[#0d5ef4] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("popular-courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-2 text-slate-600 hover:text-[#0d5ef4]"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("popular-courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative p-2 text-slate-600 hover:text-[#0d5ef4]"
              aria-label="Giỏ khóa học"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#e63946] text-white text-[9px] font-bold flex items-center justify-center">
                0
              </span>
            </button>
            <a
              href="#footer-contact"
              className="bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <span>LIÊN HỆ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0b172a]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 text-xs font-bold uppercase text-[#0b172a]">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0d5ef4]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#popular-courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              KHÓA HỌC
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              HOẠT ĐỘNG
            </a>
            <a
              href="#footer-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK SLATE HERO BANNER WITH CIRCULAR GRADUATE PORTRAIT RIGHT */}
      <section className="relative overflow-hidden bg-[#0c1829] text-white py-16 sm:py-24 px-4 sm:px-8">
        {/* Subtle Chalkboard/Dotted Background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.35) 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-1 text-[11px] font-bold">
              <span className="text-slate-200">{data.heroBadge.prefix}</span>
              <span className="bg-[#0d5ef4] text-white px-2.5 py-0.5 rounded-full text-[10px]">
                {data.heroBadge.discount}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Giáo Dục Là Tạo Ra <br />
              <span className="text-[#2f7bff] underline decoration-[#2f7bff]/60 underline-offset-8">
                Tương Lai
              </span>{" "}
              <br />
              Tốt Đẹp Hơn.
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              {data.hero.subtitle}
            </p>

            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#popular-courses"}
                className="inline-flex items-center gap-2 bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-colors"
              >
                <span>{data.hero.ctaText || "BẮT ĐẦU"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Circular Graduate Photo with Royal Blue Crescent */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute -inset-3 rounded-full border-4 border-[#0d5ef4] translate-x-3 translate-y-2" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DANH MỤC KHÓA HỌC ("Khám phá các danh mục hàng đầu") */}
      <section className="bg-[#f5f8fd] py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end gap-2 mb-4">
            <button
              type="button"
              className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-[#0d5ef4] hover:text-white"
              aria-label="Trước"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-[#0d5ef4] hover:text-white"
              aria-label="Sau"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Cols */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>DANH MỤC KHÓA HỌC</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] leading-snug">
                Khám phá các danh mục hàng đầu
              </h2>
              <div className="pt-2">
                <a
                  href="#popular-courses"
                  className="inline-flex items-center gap-2 bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
                >
                  <span>XEM TẤT CẢ DANH MỤC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 8 Cols: 4 Category Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                    {renderCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#0b172a]">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {cat.courseCount}
                    </p>
                  </div>
                  <a
                    href="#popular-courses"
                    className="w-full bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-[10px] font-bold uppercase py-2 rounded flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>XEM THÊM</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. GIỚI THIỆU ("Chào Mừng Đến Mona Media") */}
      <section id="about" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Collage + 10k+ Blue Badge */}
          <div className="lg:col-span-6 relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={data.aboutCollage.images[0]}
                  alt="Học viên 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-full border-2 border-[#0d5ef4] flex items-center justify-center mx-auto">
                <div className="w-16 h-16 rounded-full border border-[#e63946]" />
              </div>
            </div>

            <div className="space-y-4">
              {/* Blue 10k+ Card */}
              <div className="bg-[#0b3b8c] text-white p-5 rounded-2xl shadow-lg">
                <span className="text-2xl sm:text-3xl font-black block">
                  {data.aboutCollage.badgeNumber}
                </span>
                <p className="text-[10px] uppercase tracking-wider text-sky-200 mt-1 leading-relaxed">
                  {data.aboutCollage.badgeText}
                </p>
              </div>
              <div className="h-56 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={data.aboutCollage.images[1]}
                  alt="Học viên 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GIỚI THIỆU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a]">
              Chào Mừng Đến {data.business.name}
            </h2>
            {data.business.aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="text-xs sm:text-sm text-slate-500 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Video Thumbnail + 3 Checkmarks */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative w-36 h-24 rounded-xl overflow-hidden shrink-0 shadow">
                <img
                  src={data.aboutCollage.videoThumb}
                  alt="Video giới thiệu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="w-8 h-8 rounded-full bg-white text-[#0d5ef4] flex items-center justify-center shadow">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {data.aboutCollage.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold text-[#0b172a]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0d5ef4] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#popular-courses"
                className="inline-flex items-center gap-2 bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow transition-colors"
              >
                <span>TÌM HIỂU THÊM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHỔ BIẾN HÀNG ĐẦU ("Các Khóa Học Phổ Biến" — 4 COURSE CARDS) */}
      <section id="popular-courses" className="bg-[#f5f8fd] py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>PHỔ BIẾN HÀNG ĐẦU</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] mt-1">
                Các Khóa Học Phổ Biến
              </h2>
            </div>

            <a
              href="#footer-contact"
              className="inline-flex items-center gap-2 bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded self-start sm:self-auto"
            >
              <span>XEM TẤT CẢ KHÓA HỌC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.courses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Course Image + Red Duration Tag */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#e63946] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="p-4 space-y-2.5">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[11px] text-[#0d5ef4]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-current text-[#0d5ef4]"
                        />
                      ))}
                      <span className="text-slate-400 ml-1">({course.rating})</span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-extrabold text-[#0b172a] group-hover:text-[#0d5ef4] transition-colors line-clamp-2 leading-snug">
                      {course.title}
                    </h3>

                    {/* Meta Row */}
                    <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" /> Bài học {course.lessons}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> Học viên {course.students}
                      </span>
                      <span className="flex items-center gap-1">
                        <BarChart2 className="w-3 h-3" /> {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Instructor & Price */}
                <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0b172a] text-white text-[10px] font-bold flex items-center justify-center uppercase">
                      M
                    </span>
                    <span className="text-[11px] font-semibold text-slate-700">
                      {course.instructor}
                    </span>
                  </div>
                  <div className="text-right">
                    {course.oldPrice && (
                      <span className="block text-[10px] text-slate-400 line-through">
                        {course.oldPrice}
                      </span>
                    )}
                    <span className="text-xs font-extrabold text-[#e63946]">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROYAL BLUE CTA STRIP ("Nhận khóa học trực tuyến") */}
      <section className="bg-gradient-to-r from-[#0d5ef4] to-[#1a73e8] text-white py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Megaphone className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold">
                {data.onlineCtaBanner.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-sky-100 max-w-xl mt-0.5">
                {data.onlineCtaBanner.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#footer-contact"
              className="bg-white hover:bg-slate-100 text-[#0d5ef4] text-xs font-bold uppercase px-5 py-2.5 rounded shadow flex items-center gap-1.5"
            >
              <span>{data.onlineCtaBanner.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setSelectedCourse(data.courses[0])}
              className="w-11 h-11 rounded-full bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/30"
              aria-label="Xem video"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. LÝ DO CHỌN CHÚNG TÔI ("Hàng Trăm Chuyên Gia Trên Khắp Thế Giới...") */}
      <section className="bg-white pt-20 pb-28 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image + Floating 10k+ Active Students Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={data.whyChooseUs.image}
                alt={data.whyChooseUs.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Floating Active Students Card */}
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 max-w-[220px] -mt-16 ml-4 relative z-10 space-y-2">
              <p className="text-xs font-extrabold text-[#0b172a]">
                <span className="text-[#0d5ef4]">10k+</span> Học Viên Tích Cực
              </p>
              <div className="flex items-center -space-x-2">
                {data.instructors.map((ins) => (
                  <img
                    key={ins.id}
                    src={ins.image}
                    alt={ins.name}
                    className="w-7 h-7 rounded-full object-cover border-2 border-white"
                  />
                ))}
                <span className="w-7 h-7 rounded-full bg-[#0d5ef4] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                  10k+
                </span>
              </div>
            </div>

            <div className="mt-5 text-right">
              <a
                href="#popular-courses"
                className="inline-flex items-center gap-2 bg-[#0d5ef4] text-white text-xs font-bold uppercase px-5 py-2.5 rounded shadow"
              >
                <span>BẮT ĐẦU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right 2x2 Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{data.whyChooseUs.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] leading-snug">
              {data.whyChooseUs.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.whyChooseUs.description}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyChooseUs.features.map((feat) => (
                <div
                  key={feat.id}
                  className="bg-[#f2f7ff] rounded-xl p-4 space-y-1.5 border border-blue-100/80"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0d5ef4] shrink-0" />
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#0b172a]">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. OVERLAPPING ROYAL BLUE STATS BAR + DARK PROMO BANNER ("Ưu đãi 40%") */}
      <section className="relative bg-[#0b172a] text-white pt-24 pb-20 px-4 sm:px-8">
        <img
          src={data.promoDiscountBanner.backgroundImage}
          alt="Ưu đãi học viên"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b172a]/90 via-[#0b172a]/85 to-[#0b172a]/95" />

        {/* Overlapping Royal Blue Stats Card */}
        <div className="relative z-20 max-w-5xl mx-auto -mt-36 mb-14 bg-[#0d5ef4] rounded-2xl shadow-2xl py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((st) => (
            <div
              key={st.id}
              className="border-r last:border-r-0 border-white/20 px-2"
            >
              <span className="text-2xl sm:text-3xl font-black block">
                {st.number}
              </span>
              <span className="text-xs text-sky-100 mt-1 block">{st.title}</span>
            </div>
          ))}
        </div>

        {/* Center Promo Copy */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-sky-400">
            {data.promoDiscountBanner.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
            <span>{data.promoDiscountBanner.discountHighlight} </span>
            <span className="text-[#e63946]">
              {data.promoDiscountBanner.redHighlight}
            </span>{" "}
            <br />
            <span>{data.promoDiscountBanner.titleLine2}</span>
          </h2>
          <p className="text-lg sm:text-2xl font-light text-slate-200">
            {data.promoDiscountBanner.subtitle}
          </p>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            {data.promoDiscountBanner.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#footer-contact"
              className="bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase px-6 py-3 rounded flex items-center gap-1.5 shadow"
            >
              <span>THAM GIA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#footer-contact"
              className="border border-white/40 hover:border-white text-white text-xs font-bold uppercase px-6 py-3 rounded flex items-center gap-1.5"
            >
              <span>TRỞ THÀNH GIẢNG VIÊN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. GIẢNG VIÊN CỦA CHÚNG TÔI ("Gặp Gỡ Giảng Viên Chuyên Nghiệp Của Chúng Tôi") */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 5 Cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GIẢNG VIÊN CỦA CHÚNG TÔI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] leading-snug">
              Gặp Gỡ Giảng Viên Chuyên Nghiệp Của Chúng Tôi
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Giảng viên của chúng tôi là những chuyên gia tận tâm và giàu kinh nghiệm
              trong lĩnh vực của mình. Chúng tôi tự hào có đội ngũ giảng viên chuyên
              nghiệp, được tuyển chọn kỹ lưỡng và có trình độ học vấn cao.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Họ không chỉ có kiến thức sắc bén, mà còn có khả năng truyền đạt và tạo
              động lực cho học viên.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#popular-courses"
                className="bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase px-5 py-2.5 rounded flex items-center gap-1.5"
              >
                <span>KHÁM PHÁ KHÓA HỌC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#footer-contact"
                className="bg-[#e63946] hover:bg-[#c92a37] text-white text-xs font-bold uppercase px-5 py-2.5 rounded flex items-center gap-1.5"
              >
                <span>LIÊN HỆ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right 7 Cols: 2x2 Instructor Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.instructors.map((inst) => (
              <div
                key={inst.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      document
                        .getElementById("footer-contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#0d5ef4] text-white flex items-center justify-center shadow"
                    aria-label={inst.name}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-extrabold text-[#0b172a]">
                    {inst.name}
                  </h3>
                  <p className="text-[11px] text-[#0d5ef4] font-semibold">
                    {inst.role}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{inst.courses}</span>
                    <span>{inst.students}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CÁC SỰ KIỆN NỔI BẬT ("Sự Kiện Sắp Tới Của Chúng Tôi" — 3 EVENT CARDS) */}
      <section id="events" className="bg-[#f5f8fd] py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CÁC SỰ KIỆN NỔI BẬT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] mt-1">
              Sự Kiện Sắp Tới Của Chúng Tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.events.map((ev) => (
              <div
                key={ev.id}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-24 h-24 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex items-center gap-2.5">
                    <img
                      src={ev.speakerAvatar}
                      alt={ev.speaker}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-extrabold text-[#0b172a]">
                        {ev.speaker}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {ev.speakerRole}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 text-[11px] text-slate-500">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0d5ef4] shrink-0" />
                    <span className="truncate">{ev.location}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0d5ef4] shrink-0" />
                    <span>{ev.time}</span>
                  </p>
                </div>

                <h3 className="text-sm font-extrabold text-[#0b172a] leading-snug">
                  {ev.title}
                </h3>

                <a
                  href="#footer-contact"
                  className="inline-flex items-center gap-1.5 bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-[11px] font-bold uppercase px-4 py-2 rounded"
                >
                  <span>XEM THÊM</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ĐỐI TÁC ĐÁNG TIN CẬY + 2 DUAL COLORFUL PROMO BANNERS */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Top Partner Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{data.partnerSection.eyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] leading-snug">
                {data.partnerSection.titlePrefix}{" "}
                <span className="text-[#0d5ef4]">
                  {data.partnerSection.highlightCount}
                </span>{" "}
                {data.partnerSection.titleSuffix}
              </h2>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {data.partnerSection.partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="border border-slate-100 rounded-xl py-4 px-3 flex flex-col items-center justify-center gap-1.5 text-slate-400 hover:border-[#0d5ef4]/40 hover:text-[#0d5ef4] transition-colors"
                >
                  <GraduationCap className="w-6 h-6" />
                  <span className="text-[10px] font-extrabold tracking-widest">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom 2 Dual Promo Cards (Blue Left + Red Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blue Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d5ef4] to-[#2979ff] text-white p-7 flex items-center justify-between gap-4 shadow-lg">
              <div className="space-y-3 max-w-xs z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-200 block">
                  {data.dualPromoBanners.left.eyebrow}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
                  {data.dualPromoBanners.left.title}
                </h3>
                <a
                  href="#footer-contact"
                  className="inline-flex items-center gap-1.5 bg-white text-[#0d5ef4] text-[11px] font-bold uppercase px-4 py-2 rounded shadow"
                >
                  <span>{data.dualPromoBanners.left.ctaText}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <img
                src={data.dualPromoBanners.left.image}
                alt={data.dualPromoBanners.left.title}
                className="w-32 h-36 sm:w-40 sm:h-44 object-cover rounded-xl shrink-0"
              />
            </div>

            {/* Red Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#e63946] to-[#f25c66] text-white p-7 flex items-center justify-between gap-4 shadow-lg">
              <div className="space-y-3 max-w-xs z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-100 block">
                  {data.dualPromoBanners.right.eyebrow}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
                  {data.dualPromoBanners.right.title}
                </h3>
                <a
                  href="#popular-courses"
                  className="inline-flex items-center gap-1.5 bg-white text-[#e63946] text-[11px] font-bold uppercase px-4 py-2 rounded shadow"
                >
                  <span>{data.dualPromoBanners.right.ctaText}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <img
                src={data.dualPromoBanners.right.image}
                alt={data.dualPromoBanners.right.title}
                className="w-32 h-36 sm:w-40 sm:h-44 object-cover rounded-xl shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 12. HỌC VIÊN NÓI GÌ VỀ CHÚNG TÔI? ("Đánh Giá Từ Học Viên") */}
      <section className="bg-[#f5f8fd] py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>HỌC VIÊN NÓI GÌ VỀ CHÚNG TÔI?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] mt-1">
              Đánh Giá Từ Học Viên
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {testimonials.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="relative shrink-0">
                    <img
                      src={
                        rev.avatar ||
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                      }
                      alt={rev.author}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <span className="absolute -top-2 -left-2 w-7 h-7 rounded-lg bg-[#0d5ef4] text-white flex items-center justify-center shadow">
                      <Quote className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {rev.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-[#0b172a]">
                      {rev.author}
                    </h3>
                    <p className="text-[11px] text-[#0d5ef4]">{rev.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#0d5ef4]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current text-[#0d5ef4]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. TIN TỨC MỚI NHẤT (3 BLOG CARDS IN 100% VIETNAMESE) */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0d5ef4]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>TIN TỨC VÀ BLOG CỦA CHÚNG TÔI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b172a] mt-1">
                Tin Tức Mới Nhất
              </h2>
            </div>

            <a
              href="#footer-contact"
              className="inline-flex items-center gap-2 bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase px-5 py-2.5 rounded self-start sm:self-auto"
            >
              <span>XEM TẤT CẢ TIN TỨC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {newsList.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#0d5ef4]" />
                      {post.category || "Bởi Monamedia"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#0d5ef4]" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0b172a] leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="pt-1">
                    <a
                      href="#footer-contact"
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#0d5ef4] hover:underline"
                    >
                      <span>ĐỌC THÊM</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14. DARK NAVY CONTACT STRIP & FOOTER (#0b172a) */}
      <footer id="footer-contact" className="bg-[#0b172a] text-white pt-12 pb-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top 3 Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 border-b border-white/10">
            <div className="bg-[#11223d] border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#0d5ef4]/20 text-[#2f7bff] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">
                  Gọi cho chúng tôi mọi lúc:
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-sm font-extrabold text-white hover:text-[#2f7bff]"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>

            <div className="bg-[#11223d] border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#0d5ef4]/20 text-[#2f7bff] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">
                  Gửi Email cho chúng tôi 24/7:
                </span>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-sm font-extrabold text-white hover:text-[#2f7bff]"
                >
                  {primaryEmail}
                </a>
              </div>
            </div>

            <div className="bg-[#11223d] border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#0d5ef4]/20 text-[#2f7bff] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">
                  Địa chỉ trung tâm:
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white">
                  {data.business.address}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Footer Columns */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-[#e63946] flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-black uppercase block leading-none">
                    EDUCATION
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                    {data.business.name}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Chúng tôi là một nền tảng học trực tuyến cung cấp một loạt các khóa học
                đa dạng và chất lượng, từ ngoại ngữ, marketing, kinh doanh đến phát
                triển cá nhân.
              </p>
              <div>
                <p className="text-[11px] font-bold uppercase text-white mb-2">
                  THEO DÕI CHÚNG TÔI:
                </p>
                <div className="flex items-center gap-2">
                  {["f", "t", "in", "yt", "ig"].map((s) => (
                    <a
                      key={s}
                      href="#top"
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#0d5ef4] flex items-center justify-center text-[11px]"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 2: Danh Mục */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-white">Danh Mục</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Lập trình & Công nghệ
                  </a>
                </li>
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Marketing kỹ thuật số
                  </a>
                </li>
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Khoa học dữ liệu
                  </a>
                </li>
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Tiếng Anh Doanh nghiệp
                  </a>
                </li>
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Thiết kế UI/UX
                  </a>
                </li>
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Kỹ năng thuyết trình
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên Kết */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-white">Liên Kết</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    • Cộng đồng học viên
                  </a>
                </li>
                <li>
                  <a href="#footer-contact" className="hover:text-white">
                    • Hỗ trợ học vụ
                  </a>
                </li>
                <li>
                  <a href="#popular-courses" className="hover:text-white">
                    • Hướng dẫn đăng ký
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-white">
                    • Tài liệu học tập
                  </a>
                </li>
                <li>
                  <a href="#footer-contact" className="hover:text-white">
                    • Chính sách khóa học
                  </a>
                </li>
                <li>
                  <a href="#footer-contact" className="hover:text-white">
                    • Chính sách thanh toán
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Liên Hệ / Newsletter */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-white">Liên Hệ</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Đăng ký bản tin của chúng tôi để được cập nhật tin tức và ưu đãi khóa
                học mới nhất.
              </p>
              <form onSubmit={handleNewsletter} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email..."
                  className="w-full bg-[#11223d] border border-white/15 rounded px-3.5 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-[#0d5ef4]"
                />
                <button
                  type="submit"
                  className="bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase px-5 py-2.5 rounded transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {newsletterSent && (
                <p className="text-[11px] text-emerald-400">
                  Đã đăng ký nhận ưu đãi khóa học thành công!
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-5">
              <a href="#top" className="hover:text-white">
                Chính sách bảo mật
              </a>
              <a href="#top" className="hover:text-white">
                Điều khoản & Điều kiện
              </a>
            </div>
          </div>
        </div>

        {/* Scroll To Top Button */}
        <a
          href="#top"
          className="fixed bottom-5 right-5 w-9 h-9 rounded-full bg-[#0d5ef4] text-white shadow-lg flex items-center justify-center hover:bg-[#094bc9] z-30"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* COURSE QUICK ENROLL MODAL */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedCourse(null);
            setEnrollSuccess(false);
          }}
        >
          <div
            className="bg-white max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setSelectedCourse(null);
                  setEnrollSuccess(false);
                }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase text-[#0d5ef4]">
                  {selectedCourse.level} • {selectedCourse.duration}
                </span>
                <span className="text-sm font-extrabold text-[#e63946]">
                  {selectedCourse.price}
                </span>
              </div>
              <h3 className="text-base font-extrabold text-[#0b172a]">
                {selectedCourse.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedCourse.description}
              </p>

              {enrollSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-900">
                    Đã ghi nhận đăng ký khóa học!
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    Cố vấn học tập của {data.business.name} sẽ gửi tài khoản học thử
                    cho bạn ngay.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setEnrollSuccess(true)}
                  className="w-full bg-[#0d5ef4] hover:bg-[#094bc9] text-white text-xs font-bold uppercase py-3 rounded-lg"
                >
                  Đăng Ký Học Ngay
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
