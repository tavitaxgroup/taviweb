"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Play,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Phone,
  Award,
  Users,
  Calendar,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym4DefaultData,
  type PhongGym4Data
} from "@/template-sources/phong_gym_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym4Data = adaptClonedTemplateData(
    phongGym4DefaultData,
    incomingData
  );

  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number>(0);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Gói Nâng Cao - 410k/Tháng");
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const testimonials = data.testimonials || phongGym4DefaultData.testimonials!;
  const currentTestimonial =
    testimonials[activeTestimonialIndex % testimonials.length] || testimonials[0];

  const topServices = (data.courtServices || []).slice(0, 2);
  const bottomServices = (data.courtServices || []).slice(2, 5);

  const handleOpenBooking = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  const renderFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case "court":
        return <Sparkles className="w-5 h-5 text-slate-950" />;
      case "coach":
        return <Users className="w-5 h-5 text-slate-950" />;
      case "calendar":
        return <Calendar className="w-5 h-5 text-slate-950" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-slate-950" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#D4F82A] selection:text-slate-950">
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#D4F82A] flex items-center justify-center border border-slate-900 shadow-xs">
              <span className="w-4 h-4 rounded-full border-2 border-slate-900 border-dashed block" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-950 leading-none italic">
                {data.business.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mt-0.5">
                Sport & Pickleball Club
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              className="px-4 py-2 rounded-full bg-[#D4F82A] text-slate-950 shadow-xs"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="px-4 py-2 rounded-full text-slate-700 hover:bg-slate-100 transition"
            >
              Giới thiệu
            </a>
            <a
              href="#thue-san"
              className="px-4 py-2 rounded-full text-slate-700 hover:bg-slate-100 transition"
            >
              Dịch vụ
            </a>
            <a
              href="#tin-tuc"
              className="px-4 py-2 rounded-full text-slate-700 hover:bg-slate-100 transition"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="px-4 py-2 rounded-full text-slate-700 hover:bg-slate-100 transition"
            >
              Liên hệ
            </a>
          </nav>

          {/* Right CTA Pill */}
          <button
            onClick={() => handleOpenBooking("Đăng ký trải nghiệm CLB")}
            className="inline-flex items-center gap-3 bg-[#0E1012] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider pl-5 pr-1.5 py-1.5 rounded-full transition cursor-pointer"
          >
            <span>Đăng ký ngay</span>
            <span className="w-7 h-7 rounded-full bg-[#D4F82A] text-slate-950 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </header>

      {/* HERO BENTO SECTION */}
      <section id="trang-chu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Dark Content Card */}
          <div className="lg:col-span-4 bg-[#0B0D0E] text-white rounded-[28px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#D4F82A] mb-3">
                {data.hero.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-[1.18] tracking-tight text-white mb-5">
                {data.hero.title}
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {data.hero.subtitle}
              </p>
              {data.hero.description && (
                <p className="text-slate-400 text-xs leading-relaxed">
                  {data.hero.description}
                </p>
              )}
            </div>

            <div className="pt-7 relative z-10">
              <button
                onClick={() => handleOpenBooking("Tham gia CLB Pickleball")}
                className="inline-flex items-center gap-3 bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider pl-5 pr-2 py-2 rounded-full transition cursor-pointer"
              >
                <span>{data.hero.ctaText}</span>
                <span className="w-7 h-7 rounded-full bg-[#0B0D0E] text-[#D4F82A] flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Subtle decorative circle */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[#D4F82A]/10 blur-2xl pointer-events-none" />
          </div>

          {/* Center Column: Top Image + Bottom 2 Stat Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Top Court Players Image */}
            <div className="relative h-60 sm:h-64 rounded-[28px] overflow-hidden group">
              <img
                src={data.heroStats.courtImage}
                alt="Cộng đồng Pickleball"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Bottom 2-column sub-bento */}
            <div className="grid grid-cols-2 gap-5 flex-1">
              {/* Rating & Avatar Card */}
              <div className="bg-[#F7FBE7] border border-[#E2EEB0] rounded-[26px] p-5 flex flex-col justify-between items-center text-center">
                <div className="flex items-center -space-x-2.5 mt-1">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Member 1"
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Member 2"
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-white"
                  />
                  <span className="w-9 h-9 rounded-full bg-[#D4F82A] border-2 border-slate-900 text-slate-950 text-[11px] font-black flex items-center justify-center">
                    {data.heroStats.memberBadge}
                  </span>
                </div>

                <div className="my-3 flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="w-full py-1.5 px-3 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-slate-800">
                  Đánh giá <span className="text-slate-950 font-black">{data.heroStats.ratingScore}</span>
                </div>
              </div>

              {/* Dark Counter Card */}
              <div className="bg-[#0B0D0E] text-white rounded-[26px] p-5 flex flex-col justify-center items-center text-center">
                <div className="pb-3 border-b border-white/10 w-full">
                  <div className="text-2xl sm:text-3xl font-black text-[#D4F82A] leading-none">
                    {data.heroStats.membersCount}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 font-medium">
                    {data.heroStats.membersLabel}
                  </div>
                </div>
                <div className="pt-3 w-full">
                  <div className="text-2xl sm:text-3xl font-black text-[#D4F82A] leading-none">
                    {data.heroStats.coachesCount}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 font-medium leading-snug">
                    {data.heroStats.coachesLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Athlete Portrait with Video Glass Overlay */}
          <div className="lg:col-span-4 relative min-h-[420px] rounded-[28px] overflow-hidden group">
            <img
              src={data.heroStats.playerImage}
              alt={data.business.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            {/* Bottom Glass Video Card */}
            <div
              onClick={() => handleOpenBooking("Xem lịch học thử & Video hướng dẫn")}
              className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 flex items-center gap-3.5 cursor-pointer hover:bg-white/25 transition"
            >
              <div className="w-11 h-11 rounded-full bg-[#D4F82A] text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
              </div>
              <p className="text-xs text-white font-medium leading-snug">
                {data.heroStats.videoCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ĐIỀU THÚ VỊ VỀ CLB MONA PICKLEBALL (ABOUT & 4 FEATURES) */}
      <section id="gioi-thieu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight max-w-md">
              {data.business.aboutTitle || `Điều thú vị về CLB ${data.business.name}`}
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              {data.business.aboutText[0]}
            </p>
            {/* Decorative Swirl Arrow SVG */}
            <svg
              className="w-24 h-12 text-slate-700 mt-2 self-center"
              viewBox="0 0 120 60"
              fill="none"
            >
              <path
                d="M10 45 C40 45, 70 10, 45 10 C25 10, 45 50, 95 20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M88 16 L97 19 L91 27"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content Grid: Left 3-Photo Collage + Right 2x2 Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="row-span-2 rounded-[24px] overflow-hidden h-80 sm:h-96">
              <img
                src={data.aboutGallery[0]}
                alt="Sân tập Pickleball"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden h-38 sm:h-46">
              <img
                src={data.aboutGallery[1]}
                alt="Huấn luyện Pickleball"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-[24px] overflow-hidden h-38 sm:h-46">
              <img
                src={data.aboutGallery[2]}
                alt="Vợt và bóng Pickleball"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right 2x2 Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.aboutFeatures.map((feat) => (
              <div
                key={feat.id}
                className="p-5 rounded-2xl bg-white hover:bg-[#FAFCEB] border border-transparent hover:border-[#E2EEB0] transition"
              >
                <div className="w-11 h-11 rounded-full bg-[#D4F82A] flex items-center justify-center mb-4 shadow-xs">
                  {renderFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-base font-extrabold text-slate-950 mb-1.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CUNG CẤP DỊCH VỤ THUÊ SÂN TỐT NHẤT (CREAM BENTO BOX) */}
      <section id="thue-san" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#FAFDE8] border border-[#DCE8A0] rounded-[36px] p-6 sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Cung cấp dịch vụ thuê sân tốt nhất
            </h2>
          </div>

          {/* Top Row: 2 Featured Court Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {topServices.map((srv) => (
              <div
                key={srv.id}
                className="relative h-80 sm:h-96 rounded-[26px] overflow-hidden group shadow-sm"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:right-12 bg-white rounded-[20px] p-5 shadow-lg">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Medium Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomServices.map((srv) => (
              <div
                key={srv.id}
                className="relative h-80 rounded-[26px] overflow-hidden group shadow-sm"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[20px] p-4 shadow-lg">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-950 mb-1">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Center CTA */}
          <div className="mt-9 text-center">
            <button
              onClick={() => handleOpenBooking("Đặt thuê sân Pickleball")}
              className="inline-flex items-center gap-3 bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider pl-5 pr-2 py-2 rounded-full transition cursor-pointer shadow-xs"
            >
              <span>Xem dịch vụ</span>
              <span className="w-7 h-7 rounded-full bg-[#0B0D0E] text-[#D4F82A] flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: CHỌN GÓI HỘI VIÊN TỐT NHẤT CHO BẠN (MEMBERSHIP PRICING) */}
      <section id="goi-hoi-vien" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Intro Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Chọn gói hội viên tốt nhất cho bạn
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tham gia các chương trình đào tạo Pickleball chất lượng với mức giá linh hoạt. Tùy thuộc vào trình độ và nhu cầu của bạn, chúng tôi có các gói phù hợp để giúp bạn phát triển kỹ năng.
            </p>
          </div>

          {/* Right Stacked Horizontal Membership Cards */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {data.memberships.map((plan) => (
              <div
                key={plan.id}
                className="border border-slate-300 hover:border-slate-900 rounded-[26px] p-6 sm:p-7 bg-white transition shadow-2xs hover:shadow-md grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                {/* Plan Left Info + Dark Price Box */}
                <div className="sm:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950 mb-1.5">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {plan.description}
                    </p>
                  </div>
                  <div className="inline-flex items-baseline justify-center bg-[#0B0D0E] text-white rounded-xl px-5 py-3 w-fit">
                    <span className="text-2xl font-black text-[#D4F82A]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Plan Right Features + Lime Button */}
                <div className="sm:col-span-7 flex flex-col justify-between h-full sm:border-l sm:border-slate-200 sm:pl-7">
                  <ul className="space-y-2.5 mb-5">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <Check className="w-4 h-4 text-slate-950 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <button
                      onClick={() =>
                        handleOpenBooking(`Gói ${plan.name} - ${plan.price}${plan.period}`)
                      }
                      className="inline-flex items-center gap-3 bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider pl-5 pr-2 py-2 rounded-full transition cursor-pointer"
                    >
                      <span>Đăng ký ngay</span>
                      <span className="w-6 h-6 rounded-full bg-[#0B0D0E] text-[#D4F82A] flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DARK HIGHLIGHTS BANNER (ĐIỀU THÚ VỊ VỀ CLB MONA PICKLEBALL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-[#0B0D0E] text-white rounded-[36px] p-7 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight max-w-md">
                Điều thú vị về CLB {data.business.name}
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <button
                onClick={() => handleOpenBooking("Tham gia CLB Mona Pickleball")}
                className="inline-flex items-center gap-3 bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider pl-5 pr-2 py-2 rounded-full transition cursor-pointer"
              >
                <span>Tham gia ngay</span>
                <span className="w-6 h-6 rounded-full bg-[#0B0D0E] text-[#D4F82A] flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* 4 Dark Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.clubHighlights.map((item) => (
              <div
                key={item.id}
                className="bg-[#14171A] border border-white/10 rounded-[22px] p-6 hover:border-[#D4F82A]/50 transition"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Award className="w-6 h-6 text-[#D4F82A]" />
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ĐÁNH GIÁ TỪ HỌC VIÊN (TESTIMONIALS SHOWCASE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
            Đánh giá từ học viên
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Chúng tôi sẽ ghi nhận đánh giá của bạn và cải thiện dịch vụ tốt hơn, mỗi đóng góp của bạn sẽ giúp chúng tôi hoàn thiện hơn
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            onClick={() =>
              setActiveTestimonialIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="w-9 h-9 rounded-full bg-[#0B0D0E] text-white flex items-center justify-center hover:bg-slate-800 transition cursor-pointer"
            aria-label="Đánh giá trước"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="w-9 h-9 rounded-full bg-[#0B0D0E] text-white flex items-center justify-center hover:bg-slate-800 transition cursor-pointer"
            aria-label="Đánh giá tiếp"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Athlete + Lime Testimonial Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 bg-[#0B0D0E] rounded-[28px] overflow-hidden h-80 sm:h-96 relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
              alt={currentTestimonial.author}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-7 lg:-ml-12 relative z-10">
            <div className="bg-[#DCFA50] rounded-[28px] p-7 sm:p-10 shadow-xl relative overflow-hidden">
              <p className="text-sm sm:text-base font-bold text-slate-950 leading-relaxed mb-7 relative z-10">
                “{currentTestimonial.content}”
              </p>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3.5">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-950"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-slate-950">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-xs text-slate-700 font-medium">
                      {currentTestimonial.role}
                    </div>
                  </div>
                </div>

                {/* Large Decorative Quote Watermark */}
                <span className="text-7xl font-black text-slate-950/15 leading-none select-none">
                  “
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TIN TỨC MỚI NHẤT (DARK 2X2 NEWS GRID) */}
      <section id="tin-tuc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#0B0D0E] text-white rounded-[36px] p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tin tức mới nhất
            </h2>
            <a
              href="#tin-tuc"
              className="inline-flex items-center gap-3 bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider pl-5 pr-2 py-2 rounded-full transition"
            >
              <span>Xem tất cả</span>
              <span className="w-6 h-6 rounded-full bg-[#0B0D0E] text-[#D4F82A] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="relative h-72 sm:h-80 rounded-[24px] overflow-hidden group border border-white/10"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-extrabold uppercase tracking-wider text-[#D4F82A] mb-2.5">
                    {post.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug group-hover:text-[#D4F82A] transition">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CÁC CÂU HỎI THƯỜNG GẶP CỦA HỌC VIÊN (FAQ ACCORDION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Court Image */}
          <div className="lg:col-span-5 rounded-[28px] overflow-hidden h-[420px] sm:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80"
              alt="Giải đáp câu hỏi Pickleball"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-7">
              Các câu hỏi thường gặp của học viên
            </h2>

            <div className="space-y-3.5">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-xs sm:text-sm font-extrabold transition cursor-pointer ${
                        isOpen
                          ? "bg-[#D4F82A] text-slate-950"
                          : "bg-white text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: BOTTOM CTA & LIME GREEN FOOTER */}
      <footer id="lien-he" className="bg-[#0B0D0E] text-white pt-10 pb-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top CTA Row inside Dark Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {data.ctaBanner.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mb-6">
                {data.ctaBanner.description}
              </p>
              <button
                onClick={() => handleOpenBooking("Liên hệ Câu Lạc Bộ")}
                className="inline-flex items-center gap-2 bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-full transition cursor-pointer"
              >
                {data.ctaBanner.buttonText}
              </button>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src={data.ctaBanner.image}
                alt="Pickleball Athlete"
                className="w-60 h-64 object-cover rounded-[24px] border-2 border-[#D4F82A]/40"
              />
            </div>
          </div>

          {/* Main Lime Footer Box */}
          <div className="bg-[#ECF9B8] text-slate-900 rounded-[28px] p-7 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            {/* Col 1: Brand & Contact Info */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#D4F82A] border border-slate-950 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-950 border-dashed block" />
                </div>
                <span className="text-xl font-black italic text-slate-950">
                  {data.business.name}
                </span>
              </div>
              <div className="space-y-2 pt-2 text-xs text-slate-800">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-950 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>{data.business.email[0]}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-950 shrink-0" />
                  <span className="font-bold">{data.business.phone[0]}</span>
                </p>
              </div>
            </div>

            {/* Col 2: Danh Mục */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-extrabold text-slate-950 mb-3">Danh Mục</h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li><a href="#trang-chu" className="hover:text-slate-950">› Trang chủ</a></li>
                <li><a href="#gioi-thieu" className="hover:text-slate-950">› Giới thiệu</a></li>
                <li><a href="#thue-san" className="hover:text-slate-950">› Dịch vụ</a></li>
                <li><a href="#tin-tuc" className="hover:text-slate-950">› Tin tức</a></li>
                <li><a href="#lien-he" className="hover:text-slate-950">› Liên hệ</a></li>
              </ul>
            </div>

            {/* Col 3: Liên Kết */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-extrabold text-slate-950 mb-3">Liên Kết</h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li><a href="#goi-hoi-vien" className="hover:text-slate-950">› Điều khoản & điều kiện</a></li>
                <li><a href="#goi-hoi-vien" className="hover:text-slate-950">› Chính sách bảo mật</a></li>
                <li><a href="#goi-hoi-vien" className="hover:text-slate-950">› Câu hỏi thường gặp</a></li>
                <li><a href="#lien-he" className="hover:text-slate-950">› Hỗ trợ khách hàng</a></li>
                <li><a href="#tin-tuc" className="hover:text-slate-950">› Hướng dẫn kỹ thuật</a></li>
              </ul>
            </div>

            {/* Col 4: Dark Newsletter Card */}
            <div className="lg:col-span-3 bg-[#0B0D0E] text-white rounded-[20px] p-5">
              <h4 className="text-sm font-extrabold text-white mb-3">Đăng ký tin tức</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleOpenBooking("Đăng ký nhận bản tin CLB");
                }}
                className="space-y-2.5"
              >
                <input
                  type="email"
                  placeholder="Nhập email..."
                  className="w-full px-4 py-2.5 rounded-full bg-white text-slate-900 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-[11px] font-bold">
                f
              </span>
              <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-[11px] font-bold">
                in
              </span>
              <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-[11px] font-bold">
                yt
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#D4F82A] text-slate-950 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 mb-2">
                  Đăng Ký Thành Công!
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Ban quản lý sân <strong>{data.business.name}</strong> sẽ liên hệ với bạn qua số điện thoại trong vòng 15 phút để xác nhận lịch sân.
                </p>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0B0D0E] text-[#D4F82A] text-xs font-bold uppercase cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <>
                <span className="inline-block px-3 py-1 rounded-full bg-[#D4F82A] text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                  Đặt lịch nhanh
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mb-1">
                  Đăng Ký Sân & Lớp Học
                </h3>
                <p className="text-xs text-slate-500 mb-5">{selectedPlan}</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSuccess(true);
                  }}
                  className="space-y-3.5"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn *"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại Zalo *"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-slate-900"
                  />
                  <input
                    type="text"
                    defaultValue={selectedPlan}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-700"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#D4F82A] hover:bg-[#c5ea1b] text-slate-950 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
                  >
                    Xác Nhận Đặt Lịch Ngay
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
