"use client";

import React, { useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Sun,
  Users,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh22DefaultData,
  type TrungTamTiengAnh22Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh22DefaultData,
    data
  ) as TrungTamTiengAnh22Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aspirationIdx, setAspirationIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [enrollModalCourse, setEnrollModalCourse] = useState<string | null>(
    null
  );
  const [enrollForm, setEnrollForm] = useState({
    parentName: "",
    phone: "",
    course: merged.courses[0]?.title || "LỚP NĂNG KHIẾU VẼ"
  });
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);

  const primaryPhone = merged.business.phone[0] || "076 922 0162";
  const primaryEmail = merged.business.email[0] || "mon@mona.media";
  const currentSlide =
    merged.aspirationSlides[aspirationIdx] || merged.aspirationSlides[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollForm.parentName.trim() || !enrollForm.phone.trim()) return;
    setEnrollSubmitted(true);
  };

  const renderColorfulLogo = () => (
    <a
      href="#top"
      className="inline-flex items-baseline font-extrabold tracking-tight"
    >
      <span className="text-2xl text-[#e6004c] sm:text-3xl">K</span>
      <span className="text-2xl text-[#ff9800] sm:text-3xl">i</span>
      <span className="text-2xl text-[#7ab82e] sm:text-3xl">d</span>
      <span className="text-2xl text-[#00acc1] sm:text-3xl">s</span>
      <span className="ml-0.5 text-2xl text-[#4a32a8] sm:text-3xl">M</span>
      <span className="text-2xl text-[#ff5722] sm:text-3xl">o</span>
      <span className="text-2xl text-[#009688] sm:text-3xl">n</span>
      <span className="text-2xl text-[#e91e63] sm:text-3xl">a</span>
    </a>
  );

  const renderSectionHeading = (title: string, subtitle?: string) => (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">{subtitle}</p>
      )}
      {/* Yellow Zig-Zag Underline */}
      <div className="mt-2.5 flex justify-center">
        <svg
          width="76"
          height="10"
          viewBox="0 0 76 10"
          fill="none"
          className="text-[#f5c518]"
        >
          <path
            d="M2 8L11 2L20 8L29 2L38 8L47 2L56 8L65 2L74 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. Purple Topbar */}
      <div className="bg-[#4a32a8] py-2 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-[11px] font-medium">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#f5c518]" />
              EMAIL: {primaryEmail}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#f5c518]" />
              HOTLINE: {primaryPhone}
            </span>
          </div>
          <button
            type="button"
            onClick={() =>
              setEnrollModalCourse(
                merged.courses[0]?.title || "LỚP NĂNG KHIẾU VẼ"
              )
            }
            className="rounded-full bg-[#f5c518] px-3 py-0.5 text-[10px] font-black uppercase text-slate-900 transition hover:bg-white"
          >
            Ghi danh học thử
          </button>
        </div>
      </div>

      {/* 2. White KidsMona Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          {renderColorfulLogo()}

          <nav className="hidden items-center gap-6 text-xs font-extrabold uppercase tracking-wide text-slate-700 lg:flex">
            <a href="#top" className="text-[#d81b60]">
              TRANG CHỦ
            </a>
            <a
              href="#creativity-pillars"
              className="transition hover:text-[#d81b60]"
            >
              GIỚI THIỆU
            </a>
            <a href="#courses" className="transition hover:text-[#d81b60]">
              LỚP HỌC
            </a>
            <a href="#why-choose" className="transition hover:text-[#d81b60]">
              ĐỘI NGŨ GIÁO VIÊN
            </a>
            <a href="#news-feb" className="transition hover:text-[#d81b60]">
              TIN TỨC
            </a>
            <a
              href="#footer-contact"
              className="transition hover:text-[#d81b60]"
            >
              LIÊN HỆ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-1.5 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2.5 text-xs font-bold uppercase text-slate-700">
              <a
                href="#creativity-pillars"
                onClick={() => setMobileMenuOpen(false)}
              >
                GIỚI THIỆU
              </a>
              <a href="#mosaic" onClick={() => setMobileMenuOpen(false)}>
                TƯ DUY SÁNG TẠO
              </a>
              <a href="#why-choose" onClick={() => setMobileMenuOpen(false)}>
                VÌ SAO CHỌN MONA KIDS
              </a>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)}>
                CÁC KHÓA HỌC
              </a>
              <a href="#news-feb" onClick={() => setMobileMenuOpen(false)}>
                TIN TỨC
              </a>
              <a
                href="#footer-contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                LIÊN HỆ
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Chalkboard Creative Brain Hero + 4-Item Trust Bar */}
      <section id="top" className="bg-[#1e2229] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 lg:grid-cols-12 lg:py-16">
          {/* Left Chalkboard Typography & Brain Graphic */}
          <div className="lg:col-span-7">
            {/* Thought Bubbles */}
            <div className="flex flex-wrap items-center gap-2.5">
              {["Thinking", "Invent", "Study"].map((bubble, i) => (
                <span
                  key={bubble}
                  className={`inline-flex items-center gap-1 rounded-full border border-dashed px-3.5 py-1 text-xs font-bold ${
                    i === 0
                      ? "border-[#f5c518] bg-[#f5c518]/15 text-[#f5c518]"
                      : i === 1
                        ? "border-sky-400 bg-sky-400/15 text-sky-300"
                        : "border-pink-400 bg-pink-400/15 text-pink-300"
                  }`}
                >
                  <Brain className="h-3.5 w-3.5" />
                  {bubble}
                </span>
              ))}
            </div>

            <h1 className="mt-4 font-serif text-3xl font-black italic leading-tight text-white sm:text-5xl">
              {merged.hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
              {merged.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={merged.hero.ctaLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#f5c518] px-7 py-2.5 text-xs font-black uppercase tracking-wider text-slate-900 shadow-lg transition hover:bg-white"
              >
                {merged.hero.ctaText}
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Smiling Girl Raising Hand with Chalkboard Doodles */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-4 border-dashed border-white/25 bg-slate-800 p-2 shadow-2xl">
              <img
                src={merged.hero.backgroundImage}
                alt="Phát triển tư duy với Bộ não sáng tạo"
                className="h-64 w-80 rounded-2xl object-cover sm:h-72 sm:w-96"
              />
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-[#d4e137] px-3 py-1 text-[11px] font-black text-slate-900 shadow">
                <Lightbulb className="h-3.5 w-3.5" />
                Creative Brain
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Item Trust Bar */}
        <div className="border-t border-slate-800 bg-white text-slate-800 shadow-sm">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {merged.heroTrustBar.map((item: any, idx: number) => (
              <div
                key={item.id}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3"
              >
                <div
                  style={{ backgroundColor: item.iconColor }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                >
                  {idx === 0 && <Sparkles className="h-5 w-5" />}
                  {idx === 1 && <Users className="h-5 w-5" />}
                  {idx === 2 && <BookOpen className="h-5 w-5" />}
                  {idx === 3 && <Award className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-xs font-black leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Nuôi dưỡng sự sáng tạo của trẻ nhỏ" — 4 Vertical Cards */}
      <section id="creativity-pillars" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          {renderSectionHeading(
            "Nuôi dưỡng sự sáng tạo của trẻ nhỏ",
            "Phương pháp giáo dục lấy trẻ làm trung tâm giúp con phát triển hài hòa"
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merged.creativityPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-slate-100 shadow">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-base font-black text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
                <button
                  type="button"
                  onClick={() => setEnrollModalCourse(pillar.title)}
                  style={{ backgroundColor: pillar.buttonColor }}
                  className="mt-4 rounded-full px-5 py-1.5 text-[11px] font-black uppercase text-white shadow transition hover:opacity-90"
                >
                  ĐỌC THÊM
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Fullwidth Classroom Portrait Banner with Left Lime-Yellow Box ("K — Khát vọng của chúng tôi") */}
      <section className="relative overflow-hidden bg-slate-900 py-14">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/30" />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="max-w-md rounded-2xl bg-[#d4e137] p-7 text-slate-900 shadow-2xl sm:p-9">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-black leading-none text-[#4a32a8]">
                {currentSlide.initial}
              </span>
              <h2 className="text-xl font-black sm:text-2xl">
                {currentSlide.title}
              </h2>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-800 sm:text-sm">
              {currentSlide.description}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <a
                href="#courses"
                className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-[#4a32a8]"
              >
                Xem thêm <ChevronRight className="h-3.5 w-3.5" />
              </a>

              {/* 3 Interactive Slider Dots */}
              <div className="flex items-center gap-2">
                {merged.aspirationSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setAspirationIdx(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      aspirationIdx === idx
                        ? "scale-125 bg-slate-900"
                        : "bg-slate-900/35 hover:bg-slate-900/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Học các tư duy sáng tạo từ nhỏ" — Asymmetric Color-Tile & Photo Mosaic */}
      <section id="mosaic" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          {renderSectionHeading(
            "Học các tư duy sáng tạo từ nhỏ",
            "Không gian đa sắc màu đánh thức mọi giác quan và niềm đam mê khám phá"
          )}

          <div className="grid gap-4 lg:grid-cols-12">
            {/* Left Column (6 cols): Large Photo on Top + Deep Purple Quote Tile Below */}
            <div className="flex flex-col gap-4 lg:col-span-6">
              <div className="h-72 overflow-hidden rounded-2xl shadow-md sm:h-80">
                <img
                  src={merged.mosaicData.leftLargePhoto}
                  alt="Học tư duy sáng tạo từ nhỏ"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center rounded-2xl bg-[#3b2d54] p-7 text-white shadow-md">
                <h3 className="text-lg font-black text-[#f5c518] sm:text-xl">
                  {merged.mosaicData.leftBottomQuoteTitle}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-purple-100 sm:text-sm">
                  {merged.mosaicData.leftBottomQuoteText}
                </p>
              </div>
            </div>

            {/* Right Column (6 cols): Magenta Tile Top + 2-Col Middle (Photo + Yellow Sun Tile) + Orange Tile Bottom */}
            <div className="flex flex-col gap-4 lg:col-span-6">
              {/* Top Magenta Tile */}
              <div className="rounded-2xl bg-[#d81b60] p-6 text-white shadow-md">
                <h3 className="text-lg font-black sm:text-xl">
                  {merged.mosaicData.rightTopQuoteTitle}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-pink-100 sm:text-sm">
                  {merged.mosaicData.rightTopQuoteText}
                </p>
              </div>

              {/* Middle 2-Col Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="h-44 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={merged.mosaicData.rightMidPhoto}
                    alt="Hoạt động sáng tạo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex h-44 flex-col items-center justify-center rounded-2xl bg-[#f5c518] p-4 text-center text-slate-900 shadow-md">
                  <Sun className="h-14 w-14 stroke-[2] text-white drop-shadow" />
                  <span className="mt-2 text-xs font-black uppercase tracking-wider">
                    {merged.mosaicData.rightMidBadge}
                  </span>
                </div>
              </div>

              {/* Bottom Orange Tile */}
              <div className="flex flex-1 flex-col justify-center rounded-2xl bg-[#f37933] p-6 text-white shadow-md">
                <h3 className="text-lg font-black sm:text-xl">
                  {merged.mosaicData.rightBottomQuoteTitle}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-orange-50 sm:text-sm">
                  {merged.mosaicData.rightBottomQuoteText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "Vì sao chọn MONA Kids ?" — 3 White Cards */}
      <section id="why-choose" className="bg-[#f7f8fa] py-14">
        <div className="mx-auto max-w-6xl px-4">
          {renderSectionHeading(
            "Vì sao chọn MONA Kids ?",
            "Hơn 890 phụ huynh tin tưởng gửi gắm con em tại hệ thống KidsMona Campus"
          )}

          <div className="grid gap-6 md:grid-cols-3">
            {merged.whyChooseCards.map((card) => (
              <div
                key={card.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-base font-black text-[#4a32a8]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "Tin tức tháng 2" + Indigo Purple Newsletter Strip */}
      <section id="news-feb" className="bg-white pt-14">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          {renderSectionHeading(
            "Tin tức tháng 2",
            "Hoạt động ngoại khóa, sự kiện học thuật và bí quyết đồng hành cùng con"
          )}

          <div className="grid gap-6 md:grid-cols-3">
            {merged.februaryNews.map((news) => (
              <article
                key={news.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-bold text-[#d81b60]">
                    {news.date}
                  </span>
                  <h3 className="mt-1 text-base font-black text-slate-900">
                    {news.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                    {news.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Indigo Purple Newsletter Bar */}
        <div className="bg-[#5c50b6] py-8 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <div>
              <h3 className="text-base font-black uppercase tracking-wide sm:text-lg">
                ĐĂNG KÝ ĐỂ NHẬN TIN TỨC MỚI NHẤT
              </h3>
              <p className="text-xs text-indigo-100">
                Nhận cẩm nang giáo dục sớm và thông báo học bổng năng khiếu hàng
                tháng
              </p>
            </div>

            {newsletterDone ? (
              <div className="rounded-full bg-white/20 px-5 py-2 text-xs font-bold text-[#f5c518]">
                Đã đăng ký nhận bản tin thành công!
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex w-full max-w-md overflow-hidden rounded-full bg-white p-1 shadow"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email của Phụ huynh..."
                  className="flex-1 px-4 py-2 text-xs text-slate-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#f5c518] px-6 py-2 text-xs font-black uppercase text-slate-900 transition hover:bg-[#e0b210]"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. "Các khóa học MONA Kids" — 3 Course Cards with Prices */}
      <section id="courses" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          {renderSectionHeading(
            "Các khóa học MONA Kids",
            "Chương trình năng khiếu nghệ thuật & Anh ngữ bán trú thiết kế chuyên biệt"
          )}

          <div className="grid gap-6 md:grid-cols-3">
            {merged.courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-[#f5c518] px-3.5 py-1 text-xs font-black text-slate-900 shadow">
                    {course.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>Độ tuổi: {course.ageGroup}</span>
                    <span>{course.schedule}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-black uppercase text-[#4a32a8] sm:text-base">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
                    {course.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setEnrollForm({ ...enrollForm, course: course.title });
                      setEnrollModalCourse(course.title);
                    }}
                    className="mt-4 w-full rounded-full bg-[#d81b60] py-2 text-xs font-black uppercase text-white shadow transition hover:bg-[#b5144f]"
                  >
                    Đăng ký lớp học
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Indigo Purple Enrollment CTA Strip */}
      <section className="bg-[#5c50b6] py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
          <h2 className="max-w-2xl text-lg font-black leading-snug sm:text-2xl">
            Làm cho cuộc sống của con bạn trở nên đặc biệt bằng cách đăng ký vào
            trường của chúng tôi
          </h2>
          <button
            type="button"
            onClick={() =>
              setEnrollModalCourse(
                merged.courses[0]?.title || "LỚP NĂNG KHIẾU VẼ"
              )
            }
            className="shrink-0 rounded-full bg-[#f5c518] px-8 py-3 text-xs font-black uppercase tracking-wider text-slate-900 shadow-lg transition hover:bg-white"
          >
            GHI DANH NGAY
          </button>
        </div>
      </section>

      {/* 11. White 4-Column KidsMona Footer */}
      <footer
        id="footer-contact"
        className="border-t border-slate-200 bg-white text-slate-700"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            {renderColorfulLogo()}
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              {merged.business.aboutText[0]}
            </p>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              {(merged.business.highlights || []).map((h, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7ab82e]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">Thư viện</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#f5c518]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ...merged.creativityPillars.map((p) => p.image),
                ...merged.courses.slice(0, 2).map((c) => c.image)
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden rounded bg-slate-100"
                >
                  <img
                    src={img}
                    alt={`KidsMona Campus ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">Liên hệ</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#d81b60]" />
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d81b60]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#5c50b6]" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#7ab82e]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900">Bài viết mới</h3>
            <div className="mt-1 h-0.5 w-8 bg-[#5c50b6]" />
            <div className="mt-4 space-y-3">
              {merged.februaryNews.slice(0, 2).map((post) => (
                <div key={post.id} className="flex gap-2.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-12 w-12 shrink-0 rounded object-cover"
                  />
                  <div>
                    <h4 className="line-clamp-2 text-xs font-bold text-slate-800">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 py-3 text-center text-[11px] text-slate-500">
          © Bản quyền thuộc về {merged.business.name}.
        </div>
      </footer>

      {/* Enrollment Modal */}
      {enrollModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setEnrollModalCourse(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-lg font-black text-[#4a32a8]">
              Ghi danh Khóa học MONA Kids
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#d81b60]">
              Chương trình: {enrollModalCourse}
            </p>

            {enrollSubmitted ? (
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
                <p className="font-bold">Ghi danh thành công!</p>
                <p className="mt-1">
                  Bộ phận Tuyển sinh KidsMona Campus sẽ liên hệ phụ huynh{" "}
                  <strong>{enrollForm.parentName}</strong> qua số{" "}
                  <strong>{enrollForm.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="mt-4 space-y-3">
                <input
                  type="text"
                  required
                  value={enrollForm.parentName}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, parentName: e.target.value })
                  }
                  placeholder="Họ và tên Phụ huynh *"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs focus:border-[#5c50b6] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={enrollForm.phone}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs focus:border-[#5c50b6] focus:outline-none"
                />
                <select
                  value={enrollForm.course}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, course: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs focus:border-[#5c50b6] focus:outline-none"
                >
                  {merged.courses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.price})
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#5c50b6] py-2.5 text-xs font-black uppercase text-white shadow hover:bg-[#4a32a8]"
                >
                  <Send className="h-3.5 w-3.5" />
                  Xác nhận ghi danh
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
