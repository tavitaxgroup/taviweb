"use client";

import React, { useMemo, useState } from "react";
import {
  Award,
  CheckCircle2,
  Compass,
  DollarSign,
  Flame,
  Lock,
  Mail,
  Menu,
  Phone,
  Play,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Video,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import leadGeneration17DefaultData, { type LeadGeneration17Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = useMemo(
    () => adaptClonedTemplateData(leadGeneration17DefaultData, incomingData) as LeadGeneration17Data,
    [incomingData]
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    goal: data.rightStickyCard.incomeGoals[0] || "Mục tiêu 500$ - 1.000$ / tháng (Làm thêm 2h/ngày)"
  });

  const primaryPhone = data.business.phone[0] || "0988 779 668";
  const primaryEmail = data.business.email[0] || "support@huytrongacademy.vn";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        fullName: "",
        phone: "",
        email: "",
        goal:
          data.rightStickyCard.incomeGoals[0] ||
          "Mục tiêu 500$ - 1.000$ / tháng (Làm thêm 2h/ngày)"
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0D2562] text-white font-sans selection:bg-[#F59E0B] selection:text-[#0A1944]">
      {/* 1. CLEAN WHITE NAVBAR WITH "MAS" MONOGRAM SHIELD (Matching LD020 top bar) */}
      <header className="sticky top-0 z-40 bg-white text-[#0D2562] shadow-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo: MAS Shield Emblem */}
          <a href="#" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#0D2562] to-[#1D4ED8] text-white flex flex-col items-center justify-center shadow-md">
              <Shield className="h-5 w-5 text-[#F59E0B]" />
              <span className="text-[9px] font-black tracking-widest leading-none mt-0.5">
                {data.masBrand.shortName}
              </span>
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-black tracking-widest text-[#0D2562]">
                {data.masBrand.shortName} ACADEMY
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                {data.masBrand.tagline}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold uppercase tracking-wider text-slate-700">
            <a href="#gioi-thieu" className="hover:text-[#1D4ED8] transition">
              Về khóa học
            </a>
            <a href="#lo-trinh-05" className="hover:text-[#1D4ED8] transition">
              5 Bí quyết cốt lõi
            </a>
            <a href="#ket-qua-mmo" className="hover:text-[#1D4ED8] transition">
              Kết quả học viên
            </a>
            <a href="#dang-ky-mas" className="hover:text-[#1D4ED8] transition">
              Nhận 160+ Videos
            </a>
          </nav>

          {/* Right Auth & Dark Navy CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="#dang-ky-mas"
              className="hidden sm:inline-block px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              Đăng nhập
            </a>
            <a
              href="#dang-ky-mas"
              className="px-5 py-2.5 rounded-lg bg-[#0D2562] hover:bg-[#163888] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition"
            >
              Đăng ký học thử
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-[#0D2562]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 text-xs font-bold text-slate-700">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#0D2562]"
            >
              Hệ thống Affiliate tự động
            </a>
            <a
              href="#lo-trinh-05"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#0D2562]"
            >
              5 Mô-đun thực chiến MMO
            </a>
            <a
              href="#ket-qua-mmo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#0D2562]"
            >
              Học viên đạt 1.000$ - 3.000$/tháng
            </a>
            <a
              href="#dang-ky-mas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#D97706] font-extrabold"
            >
              Đăng ký nhận 160+ Videos miễn phí
            </a>
          </div>
        )}
      </header>

      {/* 2. MAIN TWO-COLUMN AFFILIATE FUNNEL (Exact match to LD020 webpage screen) */}
      <section
        id="gioi-thieu"
        className="relative py-10 lg:py-14 bg-gradient-to-b from-[#133487] via-[#0D2562] to-[#081844] overflow-hidden"
      >
        {/* Subtle Blue & Gold Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-12 h-96 w-96 rounded-full bg-[#2563EB]/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#F59E0B]/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* LEFT MAIN FUNNEL COLUMN (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Golden Pill Badge: (Green Play) 160+ VIDEOS */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBBF24] text-[#0D2562] font-black text-xs uppercase tracking-wider shadow-lg">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <Play className="h-3 w-3 fill-white ml-0.5" />
                  </span>
                  <span>{data.masBrand.videoBadge}</span>
                </div>

                <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {data.masBrand.topLeadSubtitle}
                </h1>
              </div>

              {/* Warm Orange-Gold Gradient Mentor Banner Card (Matching LD020 orange card) */}
              <div className="rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#EA8A0C] to-[#D96B08] p-5 sm:p-6 shadow-2xl border border-amber-300/50 grid sm:grid-cols-12 gap-5 items-center text-white">
                {/* Left Mentor Portrait */}
                <div className="sm:col-span-4">
                  <div className="rounded-xl overflow-hidden border-2 border-white/70 aspect-[4/5] shadow-lg bg-[#0D2562]">
                    <img
                      src={data.masBrand.mentorImage}
                      alt={data.masBrand.mentorName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Banner Copy */}
                <div className="sm:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/20 text-white text-[11px] font-extrabold uppercase">
                    <DollarSign className="h-3.5 w-3.5 text-yellow-200" />
                    <span>{data.masBrand.mentorName} • MMO Masterclass</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-black uppercase leading-snug drop-shadow-xs">
                    {data.masBrand.orangeBannerTitle}
                  </h2>

                  <ul className="space-y-2 text-xs sm:text-sm font-semibold text-white/95">
                    {data.masBrand.orangeBannerBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Experience & Revenue Highlight Text */}
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Đúc kết từ hơn{" "}
                <strong className="text-[#FBBF24] font-black">
                  {data.masBrand.experienceHighlight}
                </strong>{" "}
                thực chiến triển khai các dự án Affiliate toàn cầu và tạo ra hơn{" "}
                <strong className="text-[#FBBF24] font-black">
                  {data.masBrand.revenueHighlight}
                </strong>{" "}
                cho đối tác:
              </p>

              {/* 2 Horizontal Royal-Blue Feature Bars with Circular Gold Icons on the Right */}
              <div className="space-y-3.5">
                {data.blueFeatureBars.map((bar) => (
                  <div
                    key={bar.id}
                    className="rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] border border-blue-400/40 p-5 flex items-center justify-between gap-4 shadow-lg"
                  >
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#FBBF24]">
                        {bar.title}
                      </h3>
                      <p className="text-xs text-blue-100 leading-relaxed">{bar.description}</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-[#0D2562] border-2 border-[#FBBF24] text-[#FBBF24] flex items-center justify-center shrink-0 shadow-md">
                      {bar.badgeIcon === "compass" ? (
                        <Compass className="h-6 w-6" />
                      ) : (
                        <Trophy className="h-6 w-6" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Header + Video Preview Card ("XÂY DỰNG HỆ THỐNG KIẾM TIỀN AFFILIATE") */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#FBBF24] text-[#0D2562] flex items-center justify-center font-black shrink-0">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#FBBF24] leading-snug">
                    {data.masBrand.videoPreviewTitle}
                  </h3>
                </div>

                <div
                  onClick={() => setVideoOpen(true)}
                  className="relative rounded-2xl overflow-hidden border-2 border-blue-400/40 aspect-[16/9] cursor-pointer group shadow-2xl bg-[#071336]"
                >
                  <img
                    src={data.masBrand.videoPreviewImage}
                    alt="Xây dựng hệ thống kiếm tiền Affiliate"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0D2562]/90 via-[#0D2562]/40 to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F59E0B] text-[#0D2562] text-[11px] font-black uppercase w-fit">
                      VIDEO HƯỚNG DẪN TỔNG QUAN
                    </div>

                    <div className="max-w-md space-y-2">
                      <p className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight drop-shadow">
                        XÂY DỰNG HỆ THỐNG{" "}
                        <span className="text-[#FBBF24]">KIẾM TIỀN MMO</span> TỰ ĐỘNG
                      </p>
                      <p className="text-xs text-blue-100">
                        Bấm để xem lộ trình tạo nguồn thu nhập thụ động đầu tiên từ Affiliate
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white text-[#0D2562] flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                      <Play className="h-7 w-7 fill-[#0D2562] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 01 - 05 NUMBERED CURRICULUM TAKEAWAYS (Matching bottom left of LD020) */}
              <div id="lo-trinh-05" className="pt-4 space-y-5">
                <h3 className="text-lg sm:text-xl font-black uppercase text-center sm:text-left text-white">
                  Khám Phá 5 Trụ Cột Thực Chiến Trong Khóa Học:
                </h3>

                <div className="space-y-4">
                  {data.numberedTakeaways.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-[#102C73]/90 border border-blue-400/25 hover:border-[#FBBF24]/60 transition flex items-start gap-4 shadow-md"
                    >
                      <span className="text-3xl sm:text-4xl font-black text-blue-300/90 leading-none select-none shrink-0">
                        {item.number}
                      </span>
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded bg-[#FBBF24]/20 text-[#FBBF24] text-[10px] font-extrabold uppercase">
                            {item.metricsTag}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#FBBF24] leading-snug">
                          {item.highlightTitle}
                        </h4>
                        <p className="text-xs text-blue-100/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT STICKY LEAD CAPTURE CARD (5 Cols — Matching LD020 right column) */}
            <div id="dang-ky-mas" className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              {/* Top Heading Above Card */}
              <div className="text-center space-y-1">
                <h2 className="text-base sm:text-lg font-black uppercase text-white leading-snug">
                  {data.rightStickyCard.headerTitle}
                </h2>
                <p className="text-xs font-bold text-[#FBBF24] underline underline-offset-4">
                  {data.rightStickyCard.headerSubtitle}
                </p>
              </div>

              {/* White Registration Card */}
              <div className="rounded-3xl bg-white text-slate-800 shadow-2xl overflow-hidden border-2 border-blue-200 p-6 space-y-5">
                {/* Card Top Brand + Security Row */}
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-lg bg-[#0D2562] text-white flex flex-col items-center justify-center">
                      <Shield className="h-4 w-4 text-[#FBBF24]" />
                      <span className="text-[8px] font-black">MAS</span>
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#0D2562]">HUY TRỌNG ACADEMY</p>
                      <p className="text-[10px] text-slate-400 font-semibold">
                        Hệ thống đào tạo MMO thực chiến
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-[#0D2562] text-[10px] font-extrabold">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Bảo mật 100%</span>
                  </div>
                </div>

                {/* Dark Navy Subheader Bar inside White Card */}
                <div className="rounded-xl bg-[#0D2562] text-white py-3 px-4 text-center text-xs font-black uppercase tracking-wider">
                  {data.rightStickyCard.subHeaderDarkBar}
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-3 bg-amber-50/60 rounded-2xl p-4 border border-amber-200">
                    <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-base font-black text-[#0D2562] uppercase">
                      Kích Hoạt Tài Khoản Học Viên Thành Công!
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hệ thống <strong>MAS Huy Trọng Academy</strong> đã gửi thông tin đăng nhập kho
                      160+ Videos qua Zalo số <strong>{formState.phone}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Họ và tên học viên *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        placeholder="Nhập họ và tên của bạn..."
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0D2562]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số điện thoại Zalo (Nhận link học &amp; nhóm hỗ trợ) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="0988 xxx xxx"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0D2562]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email nhận 50+ Landing Page mẫu
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="hocvien@email.com"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0D2562]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mục tiêu thu nhập Affiliate của bạn
                      </label>
                      <select
                        value={formState.goal}
                        onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0D2562]"
                      >
                        {data.rightStickyCard.incomeGoals.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:brightness-110 text-[#0D2562] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/30 transition"
                    >
                      {data.rightStickyCard.buttonText}
                    </button>
                  </form>
                )}

                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-[#F59E0B] shrink-0" />
                    <span>
                      Tặng kèm: <strong>Danh sách 25 Ngách Affiliate Hoa Hồng 50%+</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{data.rightStickyCard.securityText}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STUDENT COMMISSION CASE STUDIES ("KẾT QUẢ HỌC VIÊN THỰC TẾ") */}
      <section id="ket-qua-mmo" className="py-16 bg-[#081844] border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FBBF24]">
              BẢNG VÀNG THU NHẬP THỤ ĐỘNG
            </span>
            <h2 className="text-3xl font-black uppercase text-white">
              Học Viên Nói Gì Về Hệ Thống MAS — Huy Trọng Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl bg-[#102C73] border border-blue-400/30 p-6 flex flex-col justify-between space-y-5 shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#FBBF24] text-[#0D2562] text-xs font-black">
                      Hoa hồng: {cs.monthlyCommission}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#FBBF24]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#FBBF24]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">“{cs.story}”</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-blue-400/20">
                  <img
                    src={cs.avatar}
                    alt={cs.studentName}
                    className="h-11 w-11 rounded-full object-cover border-2 border-[#FBBF24]"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-white">{cs.studentName}</h4>
                    <p className="text-[11px] text-blue-300">{cs.niche}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#050E29] border-t border-blue-500/20 py-8 px-4 text-xs text-blue-200/75">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-[#F59E0B] text-[#0D2562] font-black flex items-center justify-center">
              MAS
            </div>
            <p>
              © {new Date().getFullYear()} <strong>{data.business.name}</strong> —{" "}
              {data.business.address}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${primaryPhone.replace(/\s+/g, "")}`} className="hover:text-white">
              Hotline: {primaryPhone}
            </a>
            <a href={`mailto:${primaryEmail}`} className="hover:text-white">
              {primaryEmail}
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0D2562] border-2 border-[#FBBF24] rounded-2xl max-w-lg w-full p-6 relative text-center space-y-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 text-white"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="h-14 w-14 rounded-full bg-[#FBBF24] text-[#0D2562] flex items-center justify-center mx-auto">
              <Video className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-black uppercase text-white">
              Mở Khóa Trọn Bộ 160+ Video Đào Tạo Affiliate Marketing
            </h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Đăng ký miễn phí ngay hôm nay để nhận tài khoản học viên MAS cùng bộ 50+ Landing Page
              chuyển đổi cao từ Mentor Huy Trọng.
            </p>
            <a
              href="#dang-ky-mas"
              onClick={() => setVideoOpen(false)}
              className="inline-block px-6 py-3 rounded-xl bg-[#FBBF24] text-[#0D2562] font-black text-xs uppercase"
            >
              Đăng Ký Nhận Tài Khoản Ngay
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
