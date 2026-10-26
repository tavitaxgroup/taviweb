"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star,
  Calendar,
  User,
  Utensils,
  Bus,
  Compass,
  Music,
  GraduationCap,
  Plus,
  Send,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  trungTamTiengAnh16DefaultData,
  type TrungTamTiengAnh16Data
} from "@/template-sources/trung_tam_tieng_anh_16/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: TrungTamTiengAnh16Data = adaptClonedTemplateData(
    trungTamTiengAnh16DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState(2); // "Tham quan" active by default like screenshot
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(
    "Đăng ký tham quan trường & Học thử"
  );
  const [submitted, setSubmitted] = useState(false);
  const [footerEmailDone, setFooterEmailDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313728397";
  const primaryEmail =
    data.business.email?.[0] || "tuyensinh@tinytreasures.edu.vn";

  const dedicatedList =
    data.dedicatedServices5 || trungTamTiengAnh16DefaultData.dedicatedServices5;
  const activeService = dedicatedList[activeServiceIdx] || dedicatedList[0];

  const openEnrollModal = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setSubmitted(false);
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#ff5722] selection:text-white">
      {/* 1. PLAYFUL WHITE HEADER + SOFT PEACH/CLOUD HERO */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Colorful Preschool Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#ff5722] via-amber-400 to-[#6366f1] text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black tracking-tight text-slate-900 uppercase leading-none">
                {data.business.name}
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-[#ff5722] mt-0.5">
                BILINGUAL PRESCHOOL
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
            <a href="#trang-chu" className="text-[#ff5722]">
              TRANG CHỦ
            </a>
            <a href="#cau-chuyen" className="hover:text-[#ff5722]">
              GIỚI THIỆU
            </a>
            <a href="#chuong-trinh-hoc" className="hover:text-[#ff5722]">
              CHƯƠNG TRÌNH HỌC
            </a>
            <a href="#doi-ngu-giao-vien" className="hover:text-[#ff5722]">
              GIẢNG VIÊN
            </a>
            <a href="#tin-tuc" className="hover:text-[#ff5722]">
              TIN TỨC
            </a>
            <a href="#goi-gia" className="hover:text-[#ff5722]">
              HỌC PHÍ
            </a>
          </nav>

          {/* Right Search + Coral CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openEnrollModal()}
              className="p-2 text-slate-500 hover:text-[#ff5722] cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => openEnrollModal()}
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-[11px] font-extrabold uppercase px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-md shadow-[#ff5722]/25 transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>LIÊN HỆ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-orange-100 px-4 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#cau-chuyen"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Câu chuyện về chúng tôi
            </a>
            <a
              href="#chuong-trinh-hoc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Chương trình học
            </a>
            <a
              href="#doi-ngu-giao-vien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Đội ngũ giáo viên
            </a>
            <a
              href="#goi-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700"
            >
              Gói học phí
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEnrollModal();
              }}
              className="w-full bg-[#ff5722] text-white py-2.5 rounded-full font-extrabold"
            >
              Đăng ký tham quan trường
            </button>
          </div>
        )}
      </header>

      {/* SOFT PEACH/CLOUD HERO */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-b from-[#ffe4de] via-[#fff0ed] to-white pt-10 pb-16 lg:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 z-10">
              <span className="inline-block bg-[#ff5722] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded">
                {data.hero.eyebrow || "THẾ GIỚI ĐẦY CẢM HỨNG VÀ PHÁT TRIỂN"}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.15]">
                Nuôi Dưỡng Tương Lai Với{" "}
                <span className="text-[#ff5722]">Sáng Tạo Và Yêu Thương</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                {data.hero.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => openEnrollModal()}
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-xs font-extrabold uppercase px-6 py-3 rounded-lg flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                >
                  <span>{data.hero.ctaText || "THAM GIA NGAY"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={data.hero.secondaryCtaLink || "#chuong-trinh-hoc"}
                  className="bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs font-extrabold uppercase px-6 py-3 rounded-lg flex items-center gap-1.5 shadow-md transition-colors"
                >
                  <span>{data.hero.secondaryCtaText || "TÌM HIỂU THÊM"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Toddler Portrait in Warm Circle */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#ff8a65] to-[#ffd54f] p-3 shadow-xl">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.business.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SPLIT SECTION ("Tiny Treasures — Câu chuyện về chúng tôi") */}
      <section id="cau-chuyen" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-[#6366f1]">
                {data.business.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {data.business.aboutTitle || "Câu chuyện về chúng tôi"}
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.business.aboutText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <ul className="space-y-2 pt-2">
                {(
                  data.business.highlights || [
                    "Môi trường học tập song ngữ đa dạng",
                    "Sự quan tâm và chăm sóc cá nhân",
                    "Học tập qua trải nghiệm thực tế"
                  ]
                ).map((hl, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => openEnrollModal("Tìm hiểu triết lý giáo dục Tiny Treasures")}
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-xs font-extrabold uppercase px-6 py-3 rounded-lg inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>KHÁM PHÁ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-orange-50">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
                  alt="Lớp học mầm non"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Chương trình học sắp tới" (4 COLORFUL ROUNDED CARDS) */}
      <section id="chuong-trinh-hoc" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">Chương Trình</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Chương trình học sắp tới
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.programs4 || trungTamTiengAnh16DefaultData.programs4).map(
              (prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl p-2.5 shadow-md border border-slate-100 flex flex-col"
                >
                  <div
                    className={`${prog.bgColor} text-white rounded-2xl p-4 flex-1 flex flex-col justify-between text-center`}
                  >
                    <div>
                      <div className="h-36 rounded-xl overflow-hidden mb-4 border-2 border-white/40">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-base font-extrabold">{prog.title}</h3>
                      <span className="inline-block text-[11px] font-bold text-white/85 mt-0.5">
                        {prog.ageRange}
                      </span>
                      <p className="mt-2.5 text-xs text-white/90 leading-relaxed">
                        {prog.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/20">
                      <button
                        onClick={() => openEnrollModal(`Chương trình: ${prog.title}`)}
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-white hover:underline cursor-pointer"
                      >
                        <span>XEM CHI TIẾT</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. "Quy trình làm việc tại trường" (3 ORGANIC PHOTO STEPS) */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">
              Môi Trường Cung Cấp
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Quy trình làm việc tại trường
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {(
              data.processSteps3 || trungTamTiengAnh16DefaultData.processSteps3
            ).map((step, i) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="relative mb-5">
                  <div className="w-40 h-40 rounded-[42%_58%_60%_40%/45%_45%_55%_55%] overflow-hidden shadow-lg border-4 border-orange-50">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full ${step.badgeColor} text-white flex items-center justify-center shadow-md absolute -top-2 left-1/2 -translate-x-1/2 border-2 border-white font-bold text-xs`}
                  >
                    0{i + 1}
                  </div>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Hoạt động tại trường" SPLIT SECTION */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold text-[#6366f1]">Hoạt Động</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Hoạt động tại trường
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 2x3 Grid of 6 Activities */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(
                data.schoolActivities6 ||
                trungTamTiengAnh16DefaultData.schoolActivities6
              ).map((act) => (
                <div key={act.id} className="flex items-start gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-2xl border-2 border-dashed ${act.color} flex items-center justify-center shrink-0 bg-slate-50/50`}
                  >
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {act.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Toddler Playing with Wooden Blocks */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-amber-50">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                  alt="Hoạt động tại trường"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Đội ngũ giáo viên" (4 TEACHER CARDS) */}
      <section id="doi-ngu-giao-vien" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">
              Giáo Viên Chuyên Nghiệp
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Đội ngũ giáo viên
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.team || trungTamTiengAnh16DefaultData.team || []).map(
              (teacher, idx) => {
                const badgeColors = [
                  "bg-[#6366f1]",
                  "bg-[#84cc16]",
                  "bg-[#f59e0b]",
                  "bg-[#0284c7]"
                ];
                return (
                  <div
                    key={teacher.id}
                    className="bg-white rounded-3xl p-4 shadow-md border border-slate-100 text-center"
                  >
                    <div className="relative mb-5">
                      <div className="h-52 rounded-2xl overflow-hidden bg-slate-50">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <button
                        onClick={() =>
                          openEnrollModal(`Đặt lịch gặp cô/thầy ${teacher.name}`)
                        }
                        className={`w-8 h-8 rounded-full ${
                          badgeColors[idx % badgeColors.length]
                        } text-white flex items-center justify-center shadow-md absolute -bottom-3 right-4 border-2 border-white cursor-pointer`}
                        aria-label={teacher.name}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {teacher.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#6366f1] mt-0.5">
                      {teacher.position}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH ENROLLMENT BANNER ("Tuyển Sinh Năm Học Mới") */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
          alt="Tuyển sinh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/35" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[48px] p-8 sm:p-10 max-w-md text-center shadow-2xl border-4 border-orange-100">
            <span className="text-xs font-bold text-[#6366f1]">
              Tham Gia Cùng Chúng Tôi
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              Tuyển Sinh{" "}
              <span className="text-[#ff5722]">Năm Học Mới 2025 - 2026</span>
            </h2>
            <a
              href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="mt-3 inline-block text-lg sm:text-xl font-black text-[#84cc16]"
            >
              {primaryPhone}
            </a>
          </div>
        </div>
      </section>

      {/* 8. "Dịch vụ tận tâm" (INTERACTIVE 5-TAB SERVICE SHOWCASE) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">
              Cung Cấp Dịch Vụ
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Dịch vụ tận tâm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Toddlers Playing Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-sky-50">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80"
                  alt="Trẻ vui học"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Right 5 Icon Tabs + Active Detail Box */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-5 gap-3 text-center">
                {dedicatedList.map((srv, idx) => {
                  const isActive = idx === activeServiceIdx;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setActiveServiceIdx(idx)}
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#6366f1] text-white shadow-md scale-105"
                            : "bg-slate-100 text-slate-600 hover:bg-orange-50"
                        }`}
                      >
                        {idx === 0 ? (
                          <Compass className="w-5 h-5" />
                        ) : idx === 1 ? (
                          <Utensils className="w-5 h-5" />
                        ) : idx === 2 ? (
                          <Bus className="w-5 h-5" />
                        ) : idx === 3 ? (
                          <Music className="w-5 h-5" />
                        ) : (
                          <GraduationCap className="w-5 h-5" />
                        )}
                      </div>
                      <span
                        className={`text-[11px] font-bold ${
                          isActive ? "text-[#6366f1]" : "text-slate-600"
                        }`}
                      >
                        {srv.tabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Service Detail Card */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {activeService.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeService.description}
                  </p>
                  <button
                    onClick={() => openEnrollModal(activeService.title)}
                    className="bg-[#6366f1] hover:bg-[#4f46e5] text-white text-[11px] font-extrabold uppercase px-5 py-2.5 rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>XEM CHI TIẾT</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="sm:col-span-5 h-44 rounded-2xl overflow-hidden shadow">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. "Phản hồi từ phụ huynh" (3 QUOTE CARDS) + "Gói giá tốt nhất" (3 PRICING CARDS) */}
      <section className="py-14 lg:py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">
              Đánh Giá Tổng Quan
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Phản hồi từ phụ huynh
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(
              data.testimonials || trungTamTiengAnh16DefaultData.testimonials || []
            ).map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  “{t.content}”
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xs font-extrabold text-slate-900">
                        {t.author}
                      </h3>
                      <span className="text-[10px] text-[#ff5722] font-semibold">
                        {t.role}
                      </span>
                    </div>
                  </div>
                  <span className="font-serif text-3xl text-orange-200 leading-none">
                    ”
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Gói giá tốt nhất" (3 Colorful Pricing Cards) */}
      <section id="goi-gia" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">Gói Giá</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Gói giá tốt nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.pricing || trungTamTiengAnh16DefaultData.pricing || []).map(
              (plan, idx) => {
                const cardBg =
                  idx === 0
                    ? "bg-[#ff5722]"
                    : idx === 1
                    ? "bg-[#6366f1]"
                    : "bg-[#f43f5e]";
                const btnBg =
                  idx === 0
                    ? "bg-[#0284c7] text-white"
                    : idx === 1
                    ? "bg-[#84cc16] text-white"
                    : "bg-[#f59e0b] text-white";

                return (
                  <div
                    key={plan.id}
                    className={`${cardBg} text-white rounded-3xl p-7 shadow-xl flex flex-col justify-between`}
                  >
                    <div>
                      <span className="text-xs font-bold text-white/90">
                        {plan.name}
                      </span>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-black">
                          {plan.price}
                        </span>
                        <span className="text-xs text-white/80">
                          {plan.badge || "/ Tháng"}
                        </span>
                      </div>

                      <ul className="mt-6 space-y-2.5 text-xs">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                            <span>{f.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7">
                      <button
                        onClick={() => openEnrollModal(`Đăng ký ${plan.name}`)}
                        className={`${btnBg} text-[11px] font-extrabold uppercase px-6 py-2.5 rounded-lg inline-flex items-center gap-1.5 shadow cursor-pointer`}
                      >
                        <span>ĐĂNG KÝ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* "Tin tức mới nhất" (3 BLOG CARDS) */}
      <section id="tin-tuc" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#6366f1]">
              Tin Tức & Blogs
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
              Tin tức mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || trungTamTiengAnh16DefaultData.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-slate-100 p-4 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-2.5 flex items-center gap-3 text-[11px] text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>Bởi {data.business.name}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => openEnrollModal()}
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#ff5722] uppercase cursor-pointer"
                  >
                    <span>ĐỌC THÊM</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP NAVY FOOTER (#0f172a) + CORAL BOTTOM BAR */}
      <footer className="bg-[#0f172a] text-slate-300 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#ff5722] text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-base font-black text-white uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Chúng tôi tự hào mang đến môi trường mầm non song ngữ an toàn, giàu
                tình yêu thương và truyền cảm hứng sáng tạo cho trẻ mỗi ngày.
              </p>
              <div className="pt-1">
                <span className="text-slate-400 block">Chăm Sóc Phụ Huynh</span>
                <a
                  href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
                  className="font-bold text-white text-sm"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-extrabold text-white uppercase mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>→ Cộng đồng phụ huynh</li>
                <li>→ Hỗ trợ tuyển sinh</li>
                <li>→ Hướng dẫn nhập học</li>
                <li>→ Tài liệu Montessori</li>
                <li>→ Chính sách học phí</li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-white uppercase mb-3">
                TIN TỨC
              </h4>
              <div className="space-y-3">
                {(data.news || trungTamTiengAnh16DefaultData.news || [])
                  .slice(0, 2)
                  .map((n) => (
                    <div key={n.id} className="flex items-center gap-3">
                      <img
                        src={n.image}
                        alt={n.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div>
                        <p className="font-bold text-white line-clamp-2 text-[11px]">
                          {n.title}
                        </p>
                        <span className="text-[10px] text-slate-400">{n.date}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-extrabold text-white uppercase">LIÊN HỆ</h4>
              <p className="text-slate-400 leading-relaxed">
                Hãy để lại email để nhận cẩm nang nuôi dạy con song ngữ và thông tin
                ưu đãi học phí mới nhất từ {data.business.name}.
              </p>
              {footerEmailDone ? (
                <p className="text-[#84cc16] font-bold">
                  Đã đăng ký nhận cẩm nang thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFooterEmailDone(true);
                  }}
                  className="space-y-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email..."
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-3.5 py-2.5 text-white text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-[11px] font-extrabold uppercase px-5 py-2.5 rounded-lg cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#ff5722] text-white py-3 text-center text-xs font-semibold">
          © {new Date().getFullYear()} {data.business.name}. All rights reserved.
        </div>
      </footer>

      {/* PRESCHOOL ENROLLMENT MODAL */}
      {enrollModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#84cc16] mx-auto" />
                <h3 className="text-lg font-black text-slate-900">
                  Đăng ký thành công!
                </h3>
                <p className="text-xs text-slate-600">
                  Ban Tuyển sinh của <strong>{data.business.name}</strong> sẽ liên hệ đặt lịch
                  tham quan lớp học cho bé và ba mẹ ngay hôm nay.
                </p>
                <button
                  onClick={() => setEnrollModalOpen(false)}
                  className="bg-[#ff5722] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-[#ff5722]">
                    Đăng ký Tham quan & Học thử
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {data.business.name}
                  </h3>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ tên Phụ huynh & Độ tuổi của bé *"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#ff5722]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại phụ huynh *"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#ff5722]"
                />
                <input
                  type="text"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#ff5722]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ff5722] hover:bg-[#e64a19] text-white font-extrabold text-xs uppercase py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Gửi đăng ký ngay
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
