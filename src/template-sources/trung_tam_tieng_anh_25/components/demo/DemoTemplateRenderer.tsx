"use client";

import React, { useState } from "react";
import {
  Award,
  BookOpen,
  Building2,
  Bus,
  CheckCircle2,
  GraduationCap,
  Headphones,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  School,
  Sparkles,
  Users,
  Volume2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh25DefaultData,
  type MonaSchoolProgramCard,
  type TrungTamTiengAnh25Data
} from "../../data/mockData";

interface Props {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: Props) {
  const merged = adaptClonedTemplateData(
    trungTamTiengAnh25DefaultData,
    data
  ) as TrungTamTiengAnh25Data;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storyIdx, setStoryIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] =
    useState<MonaSchoolProgramCard | null>(null);
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [enrollForm, setEnrollForm] = useState({
    parentName: "",
    phone: "",
    childName: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = merged.business.phone[0] || "0313728397";
  const primaryEmail = merged.business.email[0] || "info@themona.global";
  const currentStory =
    merged.studentStories[storyIdx] || merged.studentStories[0];

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollForm.parentName.trim() || !enrollForm.phone.trim()) return;
    setEnrollSubmitted(true);
  };

  const renderMonaBookLogo = () => (
    <a href="#top" className="inline-flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#008c62] text-white shadow">
        <BookOpen className="h-6 w-6" />
      </div>
      <span className="text-2xl font-black tracking-tight text-[#008c62]">
        Mona
      </span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* 1. White Top Contact Header */}
      <div className="border-b border-slate-100 bg-white py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4">
          {renderMonaBookLogo()}

          <div className="hidden flex-wrap items-center gap-6 text-xs lg:flex">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#008c62]" />
              <div>
                <span className="block font-bold uppercase text-slate-800">
                  HOTLINE:
                </span>
                <span className="text-slate-500">{primaryPhone}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-[#008c62]" />
              <div>
                <span className="block font-bold uppercase text-slate-800">
                  HOME:
                </span>
                <span className="text-slate-500">
                  {merged.business.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#008c62]" />
              <div>
                <span className="block font-bold uppercase text-slate-800">
                  EMAIL:
                </span>
                <span className="text-slate-500">{primaryEmail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Emerald Green (#008c62) Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#008c62] text-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wide lg:flex">
            <a href="#top" className="text-[#fbab18]">
              TRANG CHỦ
            </a>
            <a href="#intro" className="transition hover:text-[#fbab18]">
              GIỚI THIỆU
            </a>
            <a href="#programs" className="transition hover:text-[#fbab18]">
              KHÓA HỌC TOÁN - VĂN
            </a>
            <a href="#teachers" className="transition hover:text-[#fbab18]">
              ĐỘI NGŨ GIÁO VIÊN
            </a>
            <a href="#mint-news" className="transition hover:text-[#fbab18]">
              TIN TỨC
            </a>
            <a
              href="#footer-contact"
              className="transition hover:text-[#fbab18]"
            >
              LIÊN HỆ
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-1 hover:bg-white/10 lg:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setEnrollSubmitted(false);
              setSelectedProgram(merged.trainingPrograms[0] || null);
            }}
            className="rounded bg-white px-4 py-1.5 text-xs font-bold text-[#008c62] shadow-sm transition hover:bg-[#fbab18] hover:text-slate-900"
          >
            Nhập học ngay
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/15 bg-[#007350] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2 text-xs font-bold uppercase">
              <a href="#intro" onClick={() => setMobileMenuOpen(false)}>
                GIỚI THIỆU
              </a>
              <a href="#programs" onClick={() => setMobileMenuOpen(false)}>
                KHÓA HỌC TOÁN - VĂN
              </a>
              <a href="#teachers" onClick={() => setMobileMenuOpen(false)}>
                ĐỘI NGŨ GIÁO VIÊN
              </a>
              <a href="#mint-news" onClick={() => setMobileMenuOpen(false)}>
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

      {/* 3. Classroom Hero with Centered Translucent Card */}
      <section
        id="top"
        className="relative flex min-h-[440px] items-center justify-center overflow-hidden sm:min-h-[500px]"
      >
        <img
          src={merged.hero.backgroundImage}
          alt={merged.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/20" />

        <div className="relative z-10 mx-4 max-w-lg rounded-2xl bg-slate-900/55 px-8 py-9 text-center text-white shadow-2xl backdrop-blur-sm">
          <p className="text-lg font-medium text-slate-100 sm:text-xl">
            Chào mừng các bé đến với
          </p>
          <h1 className="mt-1 text-3xl font-extrabold uppercase tracking-wider text-white sm:text-4xl">
            MONA KIDS
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#intro"
              className="rounded-md bg-[#008c62] px-6 py-2 text-xs font-bold text-white shadow transition hover:bg-[#007350]"
            >
              Tìm hiểu
            </a>
            <button
              type="button"
              onClick={() => {
                setEnrollSubmitted(false);
                setSelectedProgram(merged.trainingPrograms[0] || null);
              }}
              className="rounded-md bg-[#fbab18] px-6 py-2 text-xs font-bold text-slate-900 shadow transition hover:bg-amber-400"
            >
              Nhập học ngay
            </button>
          </div>
        </div>
      </section>

      {/* 4. Four Colorful Rounded Icon Cards */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {merged.topColorCards.map((card) => (
              <div
                key={card.id}
                style={{ backgroundColor: card.bgColor }}
                className="flex flex-col items-center justify-center rounded-xl p-7 text-center text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {card.icon === "teach" && <School className="h-12 w-12" />}
                {card.icon === "cert" && <Award className="h-12 w-12" />}
                {card.icon === "program" && <BookOpen className="h-12 w-12" />}
                {card.icon === "bus" && <Bus className="h-12 w-12" />}
                <h3 className="mt-4 text-sm font-bold">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Giới thiệu về trung tâm" Split Section */}
      <section id="intro" className="bg-white pb-14 pt-4">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-12">
          {/* Left Video Preview Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#008c62] shadow-lg md:col-span-6">
            <img
              src={merged.introSection.image}
              alt={merged.introSection.title}
              className="h-64 w-full object-cover sm:h-72"
            />
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              aria-label="Xem video giới thiệu"
              className="absolute inset-0 flex items-center justify-center bg-slate-950/25 transition hover:bg-slate-950/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white/25 text-white backdrop-blur-sm">
                <Play className="ml-0.5 h-6 w-6 fill-white" />
              </span>
            </button>
          </div>

          {/* Right Text */}
          <div className="md:col-span-6">
            <h2 className="text-xl font-extrabold text-[#008c62] sm:text-2xl">
              {merged.introSection.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              {merged.introSection.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#programs"
                className="rounded-md bg-[#008c62] px-6 py-2 text-xs font-bold text-white shadow transition hover:bg-[#007350]"
              >
                Xem thêm
              </a>
              <button
                type="button"
                onClick={() => {
                  setEnrollSubmitted(false);
                  setSelectedProgram(merged.trainingPrograms[0] || null);
                }}
                className="rounded-md bg-[#fbab18] px-6 py-2 text-xs font-bold text-slate-900 shadow transition hover:bg-amber-400"
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dark Patterned (#2f3237) 4-Stat Counter Bar */}
      <section className="bg-[#2f3237] py-12 text-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {merged.darkStats.map((st) => (
            <div key={st.id} className="flex flex-col items-center">
              <div className="text-slate-200">
                {st.icon === "student" && (
                  <GraduationCap className="h-11 w-11 stroke-[1.5]" />
                )}
                {st.icon === "room" && (
                  <Building2 className="h-11 w-11 stroke-[1.5]" />
                )}
                {st.icon === "bus" && (
                  <Bus className="h-11 w-11 stroke-[1.5]" />
                )}
                {st.icon === "teacher" && (
                  <Users className="h-11 w-11 stroke-[1.5]" />
                )}
              </div>
              <span className="mt-2.5 text-2xl font-extrabold text-white sm:text-3xl">
                {st.value}
              </span>
              <span className="mt-0.5 text-xs font-semibold text-slate-300">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "CHƯƠNG TRÌNH ĐÀO TẠO" — 3 Class Cards */}
      <section id="programs" className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-extrabold uppercase text-[#008c62] sm:text-2xl">
              CHƯƠNG TRÌNH ĐÀO TẠO
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merged.trainingPrograms.map((prg) => (
              <div
                key={prg.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={prg.image}
                    alt={prg.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* 3 Colored Meta Strips (Purple / Red / Orange) */}
                <div className="grid grid-cols-3 text-center text-[10px] font-bold text-white">
                  <div className="bg-[#8e44ad] py-1.5">
                    <span className="block opacity-85">Sĩ số</span>
                    <span>{prg.classSize}</span>
                  </div>
                  <div className="bg-[#e74c3c] py-1.5">
                    <span className="block opacity-85">Độ tuổi</span>
                    <span>{prg.ageRange}</span>
                  </div>
                  <div className="bg-[#f39c12] py-1.5">
                    <span className="block opacity-85">Học phí</span>
                    <span>{prg.monthlyFeeBadge}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 text-center">
                  <h3 className="text-xs font-extrabold uppercase text-slate-700">
                    {prg.title}
                  </h3>
                  <p className="mt-1 text-xs font-black text-slate-900">
                    {prg.price}
                  </p>

                  <ul className="mt-3 space-y-2 text-left text-[11px] leading-relaxed text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e74c3c]" />
                      <span>
                        <strong className="text-[#e74c3c]">
                          Thời gian học từ :
                        </strong>{" "}
                        {prg.studyTime}
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e74c3c]" />
                      <span>{prg.description}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => {
                setEnrollSubmitted(false);
                setSelectedProgram(merged.trainingPrograms[0] || null);
              }}
              className="rounded-md bg-[#008c62] px-6 py-2 text-xs font-bold text-white shadow transition hover:bg-[#007350]"
            >
              Xem thêm các lớp
            </button>
          </div>
        </div>
      </section>

      {/* 8. Dark Patterned (#2f3237) "ĐỘI NGŨ GIÁO VIÊN" */}
      <section id="teachers" className="bg-[#2f3237] py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-xl font-extrabold uppercase sm:text-2xl">
            ĐỘI NGŨ GIÁO VIÊN
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
          </p>

          <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-4">
            {merged.teachers.map((t) => (
              <div
                key={t.id}
                className="group overflow-hidden rounded-2xl bg-slate-800 shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-white">{t.name}</h3>
                  <p className="text-[10px] text-[#fbab18]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. "LÍ DO NÊN CHỌN MONA" — 3 Left + Center Illustration + 3 Right */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-extrabold uppercase text-[#008c62] sm:text-2xl">
              LÍ DO NÊN CHỌN MONA
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
            </p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* Left 3 Items */}
            <div className="space-y-6 md:col-span-4">
              {merged.reasonsLeft.map((item, i) => (
                <div
                  key={item.id}
                  className="flex items-center justify-end gap-3 text-right"
                >
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-800 sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                  <div
                    style={{ borderColor: item.color, color: item.color }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm"
                  >
                    {i === 0 && <Users className="h-5 w-5" />}
                    {i === 1 && <School className="h-5 w-5" />}
                    {i === 2 && <Volume2 className="h-5 w-5" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Center Happy Kids Frame */}
            <div className="flex justify-center md:col-span-4">
              <div className="overflow-hidden rounded-full border-4 border-[#fbab18]/40 bg-amber-50 p-3 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
                  alt="Học sinh Mona Kids"
                  className="h-52 w-52 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Right 3 Items */}
            <div className="space-y-6 md:col-span-4">
              {merged.reasonsRight.map((item, i) => (
                <div key={item.id} className="flex items-center gap-3 text-left">
                  <div
                    style={{ borderColor: item.color, color: item.color }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm"
                  >
                    {i === 0 && <Sparkles className="h-5 w-5" />}
                    {i === 1 && <Award className="h-5 w-5" />}
                    {i === 2 && <Headphones className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-800 sm:text-sm">
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
        </div>
      </section>

      {/* 10. Dark Patterned (#2f3237) "Câu chuyện của học sinh" */}
      <section className="bg-[#2f3237] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-xl font-extrabold sm:text-2xl">
            Câu chuyện của học sinh
          </h2>
          <p className="mt-1 text-xs text-slate-300">
            Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
          </p>

          <div className="mt-7 flex flex-col items-center">
            <img
              src={currentStory.avatar}
              alt={currentStory.name}
              className="h-24 w-24 rounded-full border-4 border-white/80 object-cover shadow-lg"
            />
            <p className="mt-5 max-w-2xl text-xs italic leading-relaxed text-slate-200 sm:text-sm">
              {currentStory.quote}
            </p>
            <p className="mt-3 text-xs font-bold text-white">
              {currentStory.name} /{" "}
              <span className="text-[#fbab18]">{currentStory.achievement}</span>
            </p>

            {/* Slider dots */}
            <div className="mt-4 flex items-center gap-2">
              {merged.studentStories.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStoryIdx(idx)}
                  aria-label={`Story ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    storyIdx === idx ? "bg-white" : "bg-white/35"
                  }`}
                />
              ))}
            </div>

            <a
              href="#mint-news"
              className="mt-6 rounded-md bg-[#008c62] px-6 py-2 text-xs font-bold text-white shadow transition hover:bg-[#007350]"
            >
              Xem thêm thư viện
            </a>
          </div>
        </div>
      </section>

      {/* 11. "PHỤ HUYNH NHẬN XÉT" — 2 Horizontal Cards */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-extrabold uppercase text-[#008c62] sm:text-2xl">
              PHỤ HUYNH NHẬN XÉT
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {merged.parentReviews.map((rev) => (
              <div key={rev.id} className="flex items-start gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="h-16 w-16 shrink-0 rounded-full object-cover shadow"
                />
                <div>
                  <p className="text-xs italic leading-relaxed text-slate-600">
                    {rev.quote}
                  </p>
                  <p className="mt-2 text-xs font-bold text-slate-900">
                    {rev.name}{" "}
                    <span className="font-normal text-slate-400">
                      / {rev.channel}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Mint Green (#62bb77) "TIN TỨC THÁNG 1/2019" */}
      <section id="mint-news" className="bg-[#62bb77] py-14 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-extrabold uppercase sm:text-2xl">
              TIN TỨC NHÀ TRƯỜNG
            </h2>
            <p className="mt-1 text-xs text-emerald-50">
              Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merged.mintNews.map((n) => (
              <article key={n.id} className="group">
                <div className="h-44 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-xs font-extrabold leading-snug text-white sm:text-sm">
                  {n.title}
                </h3>
                <p className="mt-0.5 text-[10px] text-emerald-100">{n.date}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-emerald-50">
                  {n.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. "CÁC ĐỐI TÁC CỦA TRƯỜNG" — 5 Colorful Boxes */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-lg font-extrabold uppercase text-[#008c62] sm:text-xl">
            CÁC ĐỐI TÁC CỦA TRƯỜNG
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {merged.partners.map((pt) => (
              <div
                key={pt.id}
                style={{ backgroundColor: pt.bgColor }}
                className="flex h-16 items-center justify-center rounded px-3 text-xs font-black tracking-wider text-white shadow"
              >
                {pt.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Emerald Green (#008c62) "ĐĂNG KÝ NHẬN TIN TỨC" Strip */}
      <section className="bg-[#008c62] py-7 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div>
            <h3 className="text-base font-extrabold uppercase">
              ĐĂNG KÝ NHẬN TIN TỨC
            </h3>
            <p className="text-xs text-emerald-100">
              Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu
            </p>
          </div>

          {newsletterDone ? (
            <div className="rounded bg-white/20 px-4 py-2 text-xs font-bold text-[#fbab18]">
              Đã đăng ký nhận bản tin Mona Kids thành công!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) setNewsletterDone(true);
              }}
              className="flex w-full max-w-md gap-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email ..."
                className="flex-1 rounded border border-white/40 bg-transparent px-3.5 py-2 text-xs text-white placeholder:text-emerald-100 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded bg-white px-5 py-2 text-xs font-bold text-[#008c62] shadow transition hover:bg-[#fbab18] hover:text-slate-900"
              >
                Đăng Ký
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 15. Light Gray 4-Column Footer */}
      <footer id="footer-contact" className="bg-[#e8eceb] text-slate-700">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Mona */}
          <div>
            {renderMonaBookLogo()}
            <p className="mt-3 text-xs leading-relaxed text-slate-600">
              Trường mầm non & tiểu học song ngữ đáp ứng đầy đủ tiêu chí học tập
              theo tiêu chuẩn Châu Âu.
            </p>
          </div>

          {/* Col 2: Liên hệ */}
          <div>
            <h3 className="text-sm font-extrabold text-[#008c62]">Liên hệ</h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#008c62]" />
                <span>{merged.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#008c62]" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#008c62]" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Bài viết mới */}
          <div>
            <h3 className="text-sm font-extrabold text-[#008c62]">
              Bài viết mới
            </h3>
            <div className="mt-4 space-y-2.5">
              {merged.mintNews.map((n) => (
                <div key={n.id} className="flex items-center gap-2.5">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-10 w-10 shrink-0 rounded object-cover"
                  />
                  <p className="line-clamp-2 text-[11px] font-semibold text-slate-700">
                    {n.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Thư viện 3x2 */}
          <div>
            <h3 className="text-sm font-extrabold text-[#008c62]">Thư viện</h3>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[...merged.trainingPrograms, ...merged.mintNews].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden rounded bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#008c62] py-3 text-center text-[11px] text-white">
          © Bản quyền thuộc về <strong>MONA.Media</strong> | Website Trường Song
          Ngữ Mona Kids
        </div>
      </footer>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={merged.introSection.image}
              alt="Video Mona Kids"
              className="h-56 w-full rounded-xl object-cover"
            />
            <h3 className="mt-3 text-base font-extrabold text-[#008c62]">
              Không gian Học Mà Chơi, Chơi Mà Học tại MONA KIDS
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              {merged.introSection.description}
            </p>
          </div>
        </div>
      )}

      {/* Program Enrollment Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProgram(null)}
              className="absolute right-3 top-3 rounded-full bg-slate-100 p-1.5 text-slate-600"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-lg font-extrabold text-[#008c62]">
              Đăng ký Nhập học MONA KIDS
            </h3>
            <p className="mt-1 text-xs font-bold text-slate-700">
              {selectedProgram.title} ({selectedProgram.monthlyFeeBadge})
            </p>

            {enrollSubmitted ? (
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-xs text-emerald-800">
                <p className="font-bold">Đăng ký thành công!</p>
                <p className="mt-1">
                  Nhà trường sẽ liên hệ phụ huynh{" "}
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
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#008c62] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  value={enrollForm.phone}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, phone: e.target.value })
                  }
                  placeholder="Số điện thoại *"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#008c62] focus:outline-none"
                />
                <input
                  type="text"
                  value={enrollForm.childName}
                  onChange={(e) =>
                    setEnrollForm({ ...enrollForm, childName: e.target.value })
                  }
                  placeholder="Họ tên & Độ tuổi của bé"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-xs focus:border-[#008c62] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded bg-[#008c62] py-2.5 text-xs font-bold uppercase text-white shadow hover:bg-[#007350]"
                >
                  Gửi hồ sơ nhập học
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
