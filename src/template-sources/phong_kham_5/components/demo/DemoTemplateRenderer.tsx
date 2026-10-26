"use client";

import React, { useState } from "react";
import {
  Phone,
  Search,
  Play,
  User,
  Mail,
  Info,
  Edit3,
  ArrowRight,
  ClipboardList,
  Apple,
  ScrollText,
  Calendar,
  LayoutGrid,
  Clock,
  FileText,
  CheckCircle2,
  ArrowUp,
  Leaf,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongKham5DefaultData,
  type PhongKham5Data
} from "@/template-sources/phong_kham_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongKham5Data = adaptClonedTemplateData(
    phongKham5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroFormDone, setHeroFormDone] = useState(false);
  const [footerEmailDone, setFooterEmailDone] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [topicInput, setTopicInput] = useState("Tư vấn giảm cân & dinh dưỡng");

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const pillars =
    data.nutritionPillars || phongKham5DefaultData.nutritionPillars;
  const expert = data.expertSection || phongKham5DefaultData.expertSection;
  const videoBanner = data.videoBanner || phongKham5DefaultData.videoBanner;
  const benefits =
    data.benefitsSection || phongKham5DefaultData.benefitsSection;
  const servicesList = data.services || phongKham5DefaultData.services || [];
  const patient = data.patientStory || phongKham5DefaultData.patientStory;
  const featuredBlog =
    data.featuredBlog || phongKham5DefaultData.featuredBlog;
  const newsList = data.news || phongKham5DefaultData.news || [];

  const scrollToBooking = (selectedTopic?: string) => {
    if (selectedTopic) setTopicInput(selectedTopic);
    setHeroFormDone(false);
    const el = document.getElementById("dat-lich-hen");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] font-sans selection:bg-[#5c9735] selection:text-white">
      {/* 1. WHITE HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            {/* Brand Logo */}
            <a href="#trang-chu" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5c9735] to-[#faa61a] flex items-center justify-center text-white shadow-xs">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-black uppercase tracking-wide text-[#1e1e1e] leading-none">
                  {data.business.name}
                </span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-[#5c9735] mt-0.5">
                  HEALTHCARE & NUTRITION
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-[#1e1e1e]">
              <a
                href="#trang-chu"
                className="border-b-2 border-[#1e1e1e] pb-1"
              >
                Trang chủ
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-[#5c9735] transition-colors pb-1"
              >
                Giới thiệu
              </a>
              <a
                href="#dich-vu"
                className="hover:text-[#5c9735] transition-colors pb-1"
              >
                Dịch vụ
              </a>
              <a
                href="#blog"
                className="hover:text-[#5c9735] transition-colors pb-1"
              >
                Blog
              </a>
              <a
                href="#dat-lich-hen"
                className="hover:text-[#5c9735] transition-colors pb-1"
              >
                Lịch hẹn
              </a>
              <button
                onClick={() => scrollToBooking()}
                className="text-stone-600 hover:text-[#5c9735] cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </nav>
          </div>

          {/* Right Hotline + Green Pill Button */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold text-[#1e1e1e]"
            >
              <span className="w-7 h-7 rounded-full bg-[#ef5a28] text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{primaryPhone}</span>
            </a>

            <button
              onClick={() => scrollToBooking()}
              className="bg-[#5c9735] hover:bg-[#4a7c28] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              {data.hero.secondaryCtaText || "Liên hệ"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#1e1e1e]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-2.5 text-xs font-bold">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#5c9735]"
            >
              Giới thiệu chuyên gia
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#5c9735]"
            >
              Dịch vụ dinh dưỡng
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#5c9735]"
            >
              Blog cẩm nang sống khỏe
            </a>
            <a
              href="#dat-lich-hen"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#5c9735]"
            >
              Đặt lịch hẹn
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER WITH EMBEDDED WHITE APPOINTMENT CARD */}
      <section
        id="trang-chu"
        className="relative min-h-[580px] lg:min-h-[650px] flex items-center overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/25" />

        {/* Right Floating Green Quick Action Dock */}
        <div className="hidden sm:flex flex-col gap-1 absolute right-0 top-1/3 z-30">
          <a
            href="#dich-vu"
            className="w-9 h-9 bg-[#5c9735] hover:bg-[#4a7c28] text-white flex items-center justify-center shadow"
            title="Danh mục dịch vụ"
          >
            <LayoutGrid className="w-4 h-4" />
          </a>
          <button
            onClick={() => scrollToBooking()}
            className="w-9 h-9 bg-[#5c9735] hover:bg-[#4a7c28] text-white flex items-center justify-center shadow cursor-pointer"
            title="Lịch khám"
          >
            <Clock className="w-4 h-4" />
          </button>
          <a
            href="#blog"
            className="w-9 h-9 bg-[#5c9735] hover:bg-[#4a7c28] text-white flex items-center justify-center shadow"
            title="Cẩm nang dinh dưỡng"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Headline & Video Trigger */}
            <div className="lg:col-span-7 text-white space-y-4">
              <p className="text-xs sm:text-sm font-medium text-stone-100">
                {data.hero.eyebrow || "Thay đổi lối sống của bạn"}
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight max-w-xl">
                {data.hero.title}
              </h1>

              <div className="pt-2">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 text-xs font-bold text-white group cursor-pointer"
                >
                  <span className="w-11 h-11 rounded-full bg-white text-[#1e1e1e] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-[#1e1e1e] ml-0.5" />
                  </span>
                  <span>{data.hero.ctaText || "Xem giới thiệu"}</span>
                </button>
              </div>
            </div>

            {/* Right White Appointment Card (#dat-lich-hen) */}
            <div id="dat-lich-hen" className="lg:col-span-5">
              <div className="bg-white p-7 sm:p-9 shadow-2xl max-w-md mx-auto">
                <h2 className="text-xl font-extrabold text-[#1e1e1e]">
                  Đặt lịch hẹn
                </h2>
                <p className="text-xs text-stone-400 mt-1 mb-6">
                  Tư vấn bởi những chuyên gia của chúng tôi
                </p>

                {heroFormDone ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#5c9735] mx-auto" />
                    <h3 className="font-bold text-base text-[#1e1e1e]">
                      Đã nhận yêu cầu đặt lịch hẹn!
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Chuyên gia dinh dưỡng tại <strong>{data.business.name}</strong> sẽ
                      liên hệ xác nhận lịch khám <strong>{topicInput}</strong> cùng bạn.
                    </p>
                    <button
                      onClick={() => setHeroFormDone(false)}
                      className="bg-[#5c9735] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
                    >
                      Đặt lịch khác
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setHeroFormDone(true);
                    }}
                    className="space-y-5 text-xs"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                        <User className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <input
                          type="text"
                          required
                          placeholder="Tên của bạn"
                          className="w-full focus:outline-none text-[#1e1e1e]"
                        />
                      </div>
                      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                        <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <input
                          type="email"
                          required
                          placeholder="Email"
                          className="w-full focus:outline-none text-[#1e1e1e]"
                        />
                      </div>
                      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                        <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <input
                          type="tel"
                          required
                          placeholder="Số điện thoại"
                          className="w-full focus:outline-none text-[#1e1e1e]"
                        />
                      </div>
                      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                        <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <input
                          type="text"
                          value={topicInput}
                          onChange={(e) => setTopicInput(e.target.value)}
                          placeholder="Chủ đề"
                          className="w-full focus:outline-none text-[#1e1e1e]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                      <Edit3 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <input
                        type="text"
                        placeholder="Nội dung"
                        className="w-full focus:outline-none text-[#1e1e1e]"
                      />
                    </div>

                    <div className="pt-2 space-y-3">
                      <button
                        type="submit"
                        className="bg-[#5c9735] hover:bg-[#4a7c28] text-white text-xs font-bold px-7 py-3 rounded-full transition-colors cursor-pointer"
                      >
                        Gửi thông tin
                      </button>

                      <label className="flex items-start gap-2 text-[10px] text-stone-400 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="mt-0.5 accent-[#5c9735]"
                        />
                        <span>
                          Dữ liệu sẽ được thu thập và lưu trữ theo{" "}
                          <u className="text-stone-500">Điều khoản bảo mật</u>
                        </span>
                      </label>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 NUTRITION PILLARS ROW (#fbf9f5) */}
      <section className="py-14 bg-[#fbf9f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {pillars.map((pil) => (
              <div
                key={pil.id}
                onClick={() => scrollToBooking(pil.title)}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 text-[#faa61a] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {pil.icon === "scale" && <ClipboardList className="w-9 h-9 stroke-[1.5]" />}
                  {pil.icon === "calories" && <Apple className="w-9 h-9 stroke-[1.5]" />}
                  {pil.icon === "menu" && <ScrollText className="w-9 h-9 stroke-[1.5]" />}
                  {pil.icon === "workout" && <Calendar className="w-9 h-9 stroke-[1.5]" />}
                </div>
                <h3 className="text-sm font-extrabold text-[#1e1e1e]">
                  {pil.title}
                </h3>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  {pil.subtitle}
                </p>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#5c9735] mt-3 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: GIAO PHÓ CHẾ ĐỘ ĂN UỐNG + OVERLAPPING ORANGE 1000+ / 20+ BOX */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="font-serif italic text-base text-[#faa61a]">
              {expert.scriptEyebrow}
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#1e1e1e] leading-tight">
              {data.business.aboutTitle || expert.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            {/* Left Smoothie Photo */}
            <div className="lg:col-span-7">
              <img
                src={expert.image}
                alt={expert.title}
                className="w-full h-[320px] sm:h-[380px] object-cover"
              />
            </div>

            {/* Right Description */}
            <div className="lg:col-span-5 space-y-4 pt-2 pb-20 lg:pb-32">
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {data.business.aboutText?.[0] || expert.description}
              </p>
              <div>
                <button
                  onClick={() => scrollToBooking()}
                  className="text-xs font-extrabold text-[#1e1e1e] border-b-2 border-[#1e1e1e] pb-0.5 hover:text-[#5c9735] hover:border-[#5c9735] transition-colors cursor-pointer"
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>

            {/* Overlapping Bright Orange Stats Card (#faa61a) */}
            <div className="lg:absolute lg:bottom-0 lg:right-0 bg-[#faa61a] text-white p-7 sm:p-9 shadow-xl max-w-md w-full grid grid-cols-2 gap-6">
              <div>
                <span className="text-[11px] font-bold text-white/90">
                  {expert.stat1Label}
                </span>
                <div className="text-3xl sm:text-4xl font-black mt-0.5">
                  {expert.stat1Number}
                </div>
                <p className="text-[11px] text-white/85 mt-1 leading-snug">
                  {expert.stat1Desc}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold text-white/90">
                  {expert.stat2Label}
                </span>
                <div className="text-3xl sm:text-4xl font-black mt-0.5">
                  {expert.stat2Number}
                </div>
                <p className="text-[11px] text-white/85 mt-1 leading-snug">
                  {expert.stat2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH FRUIT BOWL VIDEO BANNER */}
      <section className="relative py-20 lg:py-28 text-center text-white overflow-hidden">
        <img
          src={videoBanner.backgroundImage}
          alt={videoBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-3">
          <button
            onClick={() => setVideoModalOpen(true)}
            className="w-12 h-12 rounded-full border border-white/80 bg-white/10 hover:bg-[#5c9735] text-white flex items-center justify-center mx-auto transition-colors cursor-pointer"
            aria-label="Phát video"
          >
            <Play className="w-4 h-4 fill-white ml-0.5" />
          </button>

          <p className="font-serif italic text-base text-[#faa61a]">
            {videoBanner.scriptEyebrow}
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
            {videoBanner.title}
          </h2>
        </div>
      </section>

      {/* 6. SECTION: LỢI ÍCH SỨC KHỎE CỦA CHẾ ĐỘ ĂN UỐNG CỦA CHÚNG TA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Heart Bowl & Stethoscope Photo + Overlapping Orange Card */}
            <div className="lg:col-span-6 relative">
              <img
                src={benefits.image}
                alt={benefits.title}
                className="w-[88%] h-[360px] sm:h-[420px] object-cover"
              />
              <div className="bg-[#faa61a] text-white p-6 sm:p-7 max-w-[230px] shadow-xl absolute bottom-0 right-0">
                <p className="text-sm sm:text-base font-extrabold leading-snug">
                  {benefits.badgeText}
                </p>
              </div>
            </div>

            {/* Right Content + 01 / 02 Steps */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-serif italic text-base text-[#faa61a]">
                {benefits.scriptEyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1e1e1e] leading-tight">
                {benefits.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {benefits.description}
              </p>

              <div className="space-y-3 pt-2">
                {benefits.steps.map((st, idx) => (
                  <div
                    key={idx}
                    className="border-b border-stone-200 pb-3 text-xs sm:text-sm font-extrabold text-[#1e1e1e]"
                  >
                    {st}
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => scrollToBooking()}
                  className="bg-[#5c9735] hover:bg-[#4a7c28] text-white text-xs font-bold px-7 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Giới thiệu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: DỊCH VỤ CỦA CHÚNG TÔI (3 VERTICAL PHOTO OVERLAY CARDS) */}
      <section id="dich-vu" className="py-16 lg:py-24 bg-[#fbf9f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-lg mx-auto mb-12">
            <span className="font-serif italic text-base text-[#faa61a]">
              những gì chúng tôi cung cấp
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#1e1e1e]">
              Dịch vụ của chúng tôi
            </h2>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              Các gói khám, tư vấn thực đơn và đồng hành kiểm soát cân nặng khoa học
              được thiết kế riêng theo chỉ số cơ thể của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesList.map((srv) => (
              <div
                key={srv.id}
                onClick={() => scrollToBooking(srv.title)}
                className="relative h-80 sm:h-96 overflow-hidden group cursor-pointer shadow-md"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-6 px-6 text-center text-white space-y-1.5">
                  <h3 className="text-base font-extrabold">{srv.title}</h3>
                  <p className="text-[11px] text-white/80 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => scrollToBooking()}
              className="bg-[#5c9735] hover:bg-[#4a7c28] text-white text-xs font-bold px-8 py-3 rounded-full transition-colors cursor-pointer"
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* 8. FULL-WIDTH PATIENT STORY BANNER ("Khách hàng của chúng tôi") */}
      <section className="relative py-20 lg:py-28 bg-[#938a81] text-white overflow-hidden">
        <img
          src={patient.backgroundImage}
          alt={patient.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/55 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5" />
          <div className="lg:col-span-7 space-y-4">
            <span className="font-serif italic text-base text-[#faa61a]">
              {patient.scriptEyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {patient.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-100 leading-relaxed">
              {patient.paragraph1}
            </p>
            <p className="text-xs sm:text-sm text-stone-100 leading-relaxed">
              {patient.paragraph2}
            </p>

            <div className="pt-3 flex items-center gap-3">
              <img
                src={patient.avatar}
                alt={patient.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h4 className="text-xs font-extrabold text-white">
                  {patient.author}
                </h4>
                <span className="text-[11px] text-stone-300">
                  {patient.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: TỪ BLOG CỦA CHÚNG TÔI (ASYMMETRIC 1 LEFT + 3 RIGHT) */}
      <section id="blog" className="py-16 lg:py-24 bg-[#fbf9f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="font-serif italic text-base text-[#faa61a]">
              bài viết mới nhất
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-[#1e1e1e]">
              Từ Blog của chúng tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Featured Post */}
            <article
              onClick={() => scrollToBooking(featuredBlog.title)}
              className="lg:col-span-6 bg-white shadow-xs group cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#faa61a] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {featuredBlog.badge}
                </span>
              </div>
              <div className="p-6 flex items-start gap-4">
                <div className="text-center shrink-0">
                  <span className="block text-xl font-black text-[#1e1e1e] leading-none">
                    {featuredBlog.day}
                  </span>
                  <span className="block font-serif italic text-xs text-stone-400">
                    {featuredBlog.month}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#1e1e1e] group-hover:text-[#5c9735] transition-colors">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <p className="text-[10px] text-stone-400 pt-1">
                    18 Yêu thích • 4 Bình luận
                  </p>
                </div>
              </div>
            </article>

            {/* Right 3 Horizontal Posts */}
            <div className="lg:col-span-6 space-y-5">
              {newsList.map((post) => (
                <article
                  key={post.id}
                  onClick={() => scrollToBooking(post.title)}
                  className="grid grid-cols-12 gap-4 items-center group cursor-pointer"
                >
                  <div className="col-span-4 h-24 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-8 space-y-1">
                    <div className="text-[10px] text-stone-400">
                      <strong className="text-[#1e1e1e]">
                        {post.category || "Tư duy"}
                      </strong>{" "}
                      • {post.date}
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#1e1e1e] group-hover:text-[#5c9735] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. DARK ESPRESSO FOOTER (#181715) */}
      <footer className="bg-[#181715] text-stone-400 pt-16 pb-8 text-xs relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Văn phòng */}
            <div className="space-y-3">
              <h4 className="font-bold text-white">Văn phòng</h4>
              <p className="text-[11px] leading-relaxed">
                {data.business.address}
              </p>
              <p className="pt-1">
                <a
                  href={`mailto:${primaryEmail}`}
                  className="underline text-stone-300 hover:text-[#5c9735]"
                >
                  {primaryEmail}
                </a>
              </p>
              <p className="font-extrabold text-white pt-1">{primaryPhone}</p>
            </div>

            {/* Col 2: Điều hướng */}
            <div className="space-y-3">
              <h4 className="font-bold text-white">Điều hướng</h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#trang-chu" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#dat-lich-hen" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Mạng xã hội */}
            <div className="space-y-3">
              <h4 className="font-bold text-white">Mạng xã hội</h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#dat-lich-hen" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#dat-lich-hen" className="hover:text-white">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Theo dõi */}
            <div className="space-y-3">
              <h4 className="font-bold text-white">Theo dõi</h4>
              {footerEmailDone ? (
                <p className="text-[#5c9735] font-bold">
                  ✓ Đã đăng ký nhận thực đơn dinh dưỡng!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFooterEmailDone(true);
                  }}
                  className="space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Nhập email của bạn"
                      className="bg-white/10 text-white text-[11px] px-4 py-2.5 rounded-full w-full focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 rounded-full bg-[#5c9735] hover:bg-[#4a7c28] text-white flex items-center justify-center shrink-0 cursor-pointer"
                      aria-label="Gửi"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <label className="flex items-center gap-1.5 text-[10px] text-stone-500">
                    <input type="checkbox" defaultChecked className="accent-[#5c9735]" />
                    <span>Đồng ý Điều khoản – Chính sách.</span>
                  </label>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 text-[11px] text-stone-500 flex items-center justify-between">
            <span>
              © Bản quyền thuộc về{" "}
              <strong className="text-stone-300">{data.business.name}</strong>
            </span>
            <a
              href="#trang-chu"
              className="w-7 h-7 rounded bg-white/10 hover:bg-[#5c9735] text-white flex items-center justify-center"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO INTRO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="font-extrabold text-base text-[#1e1e1e]">
                Phác Đồ Dinh Dưỡng Lâm Sàng {data.business.name}
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-stone-400 hover:text-stone-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={videoBanner.backgroundImage}
              alt="Chế độ ăn lành mạnh"
              className="w-full h-56 object-cover"
            />
            <p className="text-xs text-stone-600 leading-relaxed">
              Khám phá cách kết hợp thực phẩm tự nhiên giàu dưỡng chất giúp kiểm soát
              cân nặng và nâng cao sức khỏe tim mạch cùng đội ngũ hơn 20 bác sĩ dinh
              dưỡng tại <strong>{data.business.name}</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
