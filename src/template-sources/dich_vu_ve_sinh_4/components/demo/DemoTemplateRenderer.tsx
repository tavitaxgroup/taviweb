"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Search,
  User,
  Droplets,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  Target,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Star,
  MessageSquare,
  MapPin,
  ArrowUp,
  CheckCircle2,
  X,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  dichVuVeSinh4DefaultData,
  DichVuVeSinh4Data,
  PoolServiceCard,
} from "@/template-sources/dich_vu_ve_sinh_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function MonaPoolLogo({
  brandName,
  light = false,
}: {
  brandName: string;
  light?: boolean;
}) {
  return (
    <a href="#" className="inline-flex items-center gap-2.5 select-none">
      <div className="relative flex items-center">
        <svg
          viewBox="0 0 180 56"
          className="w-40 h-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 10C14 14 8 28 16 40C24 50 48 52 72 44"
            stroke="#007cfb"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M22 44C42 52 88 52 126 38"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text
            x="26"
            y="34"
            fill={light ? "#ffffff" : "#0f172a"}
            fontSize="21"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            {brandName.length > 14 ? "Bể Bơi Xanh" : brandName}
          </text>
        </svg>
      </div>
    </a>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: DichVuVeSinh4Data = adaptClonedTemplateData(
    dichVuVeSinh4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<PoolServiceCard | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#007cfb] selection:text-white overflow-x-hidden">
      {/* 1. TOPBAR */}
      <div className="bg-white border-b border-slate-100 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Left Blue Angled Strip */}
          <div className="w-full sm:w-auto bg-[#007cfb] text-white px-6 py-2.5 font-medium sm:pr-12 relative">
            <span>{data.welcomeNotice}</span>
            <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-6 bg-white [clip-path:polygon(100%_0,0_100%,100%_100%)]" />
          </div>
          {/* Right Meta */}
          <div className="px-4 py-2 flex items-center gap-4 text-slate-600">
            <span>Ngôn ngữ: Tiếng Việt ▾</span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1.5">
              Theo dõi:{" "}
              <a
                href="#lien-he"
                className="font-bold text-[#007cfb] hover:underline"
              >
                f
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BRAND BAR */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <MonaPoolLogo brandName={data.business.name} />

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#007cfb] flex items-center justify-center border border-blue-100">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Email:</div>
                <div className="text-xs font-bold text-slate-800">
                  {data.business.email[0]}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#007cfb] flex items-center justify-center border border-blue-100">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Số điện thoại:</div>
                <a
                  href={`tel:${data.business.phone[0]}`}
                  className="text-xs font-extrabold text-slate-900 hover:text-[#007cfb]"
                >
                  {data.business.phone[0]}
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-slate-200 text-slate-700"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3. ROYAL BLUE NAVIGATION BAR + HERO BANNER */}
      <section className="relative bg-gradient-to-r from-[#02386e] via-[#005bb5] to-[#007cfb] text-white overflow-hidden pb-28 lg:pb-36">
        {/* Background Pool Water Texture */}
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032b56]/95 via-[#034687]/80 to-[#007cfb]/55" />

        {/* Floating Royal Blue Navbar */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <div className="bg-[#007cfb] rounded-md shadow-lg px-4 sm:px-6 h-14 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-7 text-xs font-extrabold uppercase tracking-wider text-white">
              <a href="#" className="hover:text-blue-100">
                TRANG CHỦ
              </a>
              <a href="#gioi-thieu" className="hover:text-blue-100">
                GIỚI THIỆU
              </a>
              <a href="#cong-viec" className="hover:text-blue-100">
                SẢN PHẨM
              </a>
              <a href="#dich-vu" className="hover:text-blue-100">
                DỊCH VỤ +
              </a>
              <a href="#tin-tuc" className="hover:text-blue-100">
                TIN TỨC
              </a>
              <a href="#lien-he" className="hover:text-blue-100">
                LIÊN HỆ
              </a>
            </nav>

            <div className="md:hidden text-xs font-bold uppercase tracking-wider">
              {data.business.name}
            </div>

            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              aria-label="Tìm kiếm"
              className="w-8 h-8 rounded-full bg-white text-[#007cfb] flex items-center justify-center shadow-xs hover:scale-105 transition-transform cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-2 bg-[#033263] rounded-md p-4 space-y-2.5 text-xs font-bold uppercase">
              <a href="#" className="block py-1">
                TRANG CHỦ
              </a>
              <a href="#gioi-thieu" className="block py-1">
                GIỚI THIỆU
              </a>
              <a href="#dich-vu" className="block py-1">
                DỊCH VỤ
              </a>
              <a href="#tin-tuc" className="block py-1">
                TIN TỨC
              </a>
              <a href="#lien-he" className="block py-1">
                LIÊN HỆ
              </a>
            </div>
          )}
        </div>

        {/* Hero Content Split */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-sky-200">
                <span>{data.hero.eyebrow}</span>
                <span className="w-10 h-0.5 bg-sky-300 inline-block" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
                {data.hero.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={data.hero.ctaLink || "#dich-vu"}
                  className="bg-[#007cfb] hover:bg-[#0066d6] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-3.5 rounded-sm shadow-lg transition-colors"
                >
                  {data.hero.ctaText}
                </a>
                <a
                  href={data.hero.secondaryCtaLink || "#dat-lich"}
                  className="border border-white/50 hover:bg-white hover:text-[#02386e] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-colors"
                >
                  {data.hero.secondaryCtaText || "DỊCH VỤ"}
                </a>
              </div>
            </div>

            {/* Right Specialist Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full border-8 border-white/15 overflow-hidden shadow-2xl">
                <img
                  src={data.heroPersonImage}
                  alt="Chuyên viên vệ sinh hồ bơi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Slant Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f8fafc] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      {/* 4. FLOATING APPOINTMENT FORM (Đặt lịch hẹn) */}
      <section id="dat-lich" className="relative z-20 -mt-16 pb-12 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-md shadow-xl border border-slate-100 p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-5">
              Đặt lịch hẹn
            </h2>

            {bookingSubmitted ? (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#007cfb] shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Yêu cầu đặt lịch hẹn đã được gửi! Kỹ thuật viên{" "}
                    <strong>{data.business.name}</strong> sẽ liên hệ xác nhận
                    ngay.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingSubmitted(false)}
                  className="text-xs font-bold text-[#007cfb] hover:underline shrink-0"
                >
                  Đặt lịch khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleBookingSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Họ"
                    className="w-full bg-slate-100/80 border border-slate-200/70 rounded-xs px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-[#007cfb]"
                  />
                  <User className="w-3.5 h-3.5 text-[#007cfb] absolute right-3.5 top-3.5" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Tên"
                    className="w-full bg-slate-100/80 border border-slate-200/70 rounded-xs px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-[#007cfb]"
                  />
                  <User className="w-3.5 h-3.5 text-[#007cfb] absolute right-3.5 top-3.5" />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-slate-100/80 border border-slate-200/70 rounded-xs px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-[#007cfb]"
                  />
                  <Mail className="w-3.5 h-3.5 text-[#007cfb] absolute right-3.5 top-3.5" />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    className="w-full bg-slate-100/80 border border-slate-200/70 rounded-xs px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-[#007cfb]"
                  />
                  <Phone className="w-3.5 h-3.5 text-[#007cfb] absolute right-3.5 top-3.5" />
                </div>
                <div>
                  <select className="w-full bg-slate-100/80 border border-slate-200/70 rounded-xs px-4 py-3 text-xs text-slate-600 focus:outline-none focus:border-[#007cfb]">
                    <option value="">Chọn dịch vụ</option>
                    {data.bookingServicesList.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full h-full bg-[#007cfb] hover:bg-[#0065d1] text-white text-xs font-extrabold uppercase tracking-wider py-3 px-6 rounded-xs shadow-sm transition-colors cursor-pointer"
                  >
                    ĐẶT HẸN
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. DỊCH VỤ HỒ BƠI TỐT NHẤT DÀNH CHO BẠN! */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
                <span>{data.poolServicesSection.eyebrow}</span>
                <span className="w-8 h-0.5 bg-[#007cfb]" />
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.poolServicesSection.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#dat-lich"
                aria-label="Trước"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-[#007cfb] flex items-center justify-center hover:bg-[#007cfb] hover:text-white transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </a>
              <a
                href="#dat-lich"
                aria-label="Tiếp"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-[#007cfb] flex items-center justify-center hover:bg-[#007cfb] hover:text-white transition-colors shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.poolServicesSection.items.map((item) => {
              const IconComp =
                item.iconName === "drain"
                  ? Droplets
                  : item.iconName === "inspect"
                  ? ShieldCheck
                  : item.iconName === "clean"
                  ? Sparkles
                  : FlaskConical;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-md p-6 shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-[#007cfb] flex flex-col"
                >
                  {/* Hexagon Blue Icon */}
                  <div className="w-12 h-12 bg-[#007cfb] text-white flex items-center justify-center rounded-lg rotate-6 mb-5 shadow-sm">
                    <IconComp className="w-6 h-6 -rotate-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedServiceModal(item)}
                      className="border border-slate-200 hover:border-[#007cfb] hover:bg-[#007cfb] hover:text-white text-slate-700 text-[11px] font-bold uppercase px-4 py-2 rounded-xs transition-colors cursor-pointer"
                    >
                      ĐỌC THÊM
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ABOUT US: MỘT DI SẢN VỀ DỊCH VỤ BỂ BƠI XUẤT SẮC */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            {/* Left Image Collage + 25+ Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative pl-10 pt-6">
                {/* 25+ Experience Blue Card */}
                <div className="absolute top-0 left-0 z-20 w-40 bg-[#007cfb] text-white p-5 rounded-xl shadow-xl">
                  <div className="text-3xl font-black leading-none">
                    {data.aboutHeritageSection.experienceYearsNumber}
                  </div>
                  <p className="mt-2 text-[11px] text-blue-100 leading-snug">
                    {data.aboutHeritageSection.experienceBadgeText}
                  </p>
                </div>

                {/* Top Pool Image */}
                <div className="rounded-md overflow-hidden shadow-md aspect-[16/10] mb-4">
                  <img
                    src={data.aboutHeritageSection.mainImage}
                    alt="Hồ bơi tiêu chuẩn"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom Pool Image */}
                <div className="rounded-md overflow-hidden shadow-lg aspect-[16/10] border-4 border-white">
                  <img
                    src={data.aboutHeritageSection.secondaryImage}
                    alt="Bảo dưỡng bể bơi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
                <span>{data.aboutHeritageSection.eyebrow}</span>
                <span className="w-8 h-0.5 bg-[#007cfb]" />
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {data.aboutHeritageSection.title}
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {data.aboutHeritageSection.description}
              </p>

              {/* Mission & Vision */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#007cfb] flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {data.aboutHeritageSection.mission.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {data.aboutHeritageSection.mission.text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#007cfb] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {data.aboutHeritageSection.vision.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {data.aboutHeritageSection.vision.text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <a
                  href="#dat-lich"
                  className="inline-block bg-[#007cfb] hover:bg-[#0065d1] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-3 rounded-xs shadow-md transition-colors"
                >
                  {data.aboutHeritageSection.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK CALLOUT BANNER: NHẬN DỊCH VỤ HỒ BƠI CAO CẤP TỪ CHÚNG TÔI! */}
      <section className="relative bg-[#121d2c] text-white py-14 lg:py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span>{data.darkCalloutBanner.eyebrow}</span>
              <span className="w-8 h-0.5 bg-[#007cfb]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-snug max-w-md">
              {data.darkCalloutBanner.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#dich-vu"
              className="bg-[#007cfb] hover:bg-[#0065d1] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xs transition-colors"
            >
              {data.darkCalloutBanner.primaryCta}
            </a>
            <a
              href="#lien-he"
              className="border border-slate-500 hover:border-white text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xs transition-colors"
            >
              {data.darkCalloutBanner.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* 8. TẠI SAO NÊN CHỌN CHÚNG TÔI (3 Progress Rings + Circular Pool Collage) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
              <span className="w-6 h-0.5 bg-[#007cfb]" />
              <span>{data.whyChooseUsSection.eyebrow}</span>
              <span className="w-6 h-0.5 bg-[#007cfb]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              {data.whyChooseUsSection.title}
            </h2>
          </div>

          {/* 3 Circular Ring Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-slate-100">
            {data.whyChooseUsSection.metrics.map((m) => {
              const radius = 32;
              const circumference = 2 * Math.PI * radius;
              const offset =
                circumference - (m.percentage / 100) * circumference;

              return (
                <div key={m.id} className="flex items-center gap-4">
                  <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="#e2e8f0"
                        strokeWidth="5"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="#007cfb"
                        strokeWidth="5"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <span className="absolute text-sm font-extrabold text-slate-900">
                      {m.percentage}%
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2-Column Split Below */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {data.whyChooseUsSection.subTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {data.whyChooseUsSection.subDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {data.whyChooseUsSection.highlights.map((hl) => (
                  <div key={hl.id} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#007cfb] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-900">
                      {hl.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                {data.whyChooseUsSection.bulletPoints.map((bp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-600"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#007cfb]" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Circular Pool Collage */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-72 h-72 sm:w-84 sm:h-84">
                <div className="w-full h-full rounded-full p-2 border-2 border-[#007cfb] overflow-hidden shadow-xl">
                  <img
                    src={data.whyChooseUsSection.mainCircleImage}
                    alt="Vệ sinh hồ bơi chuyên sâu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Top-left Overlapping Technician Circle */}
                <div className="absolute -top-3 -left-3 w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img
                    src={data.whyChooseUsSection.smallCircleImage}
                    alt="Kỹ thuật viên"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom-right Play Button */}
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  aria-label="Xem quy trình"
                  className="absolute bottom-3 right-3 w-14 h-14 rounded-full bg-[#007cfb] hover:bg-[#0065d1] text-white border-4 border-white flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ROYAL BLUE STATS COUNTER BAND */}
      <section className="bg-[#007cfb] text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-blue-400/40">
            {(data.stats || []).map((st) => (
              <div key={st.id} className=" sm:pl-6 first:pl-0 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-black tracking-tight">
                  {st.number}
                </div>
                <div className="mt-1 text-xs text-blue-100 font-medium">
                  {st.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. THÀNH VIÊN: NHỮNG CHUYÊN GIA CỦA CHÚNG TÔI */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left White Column */}
          <div className="lg:col-span-4 py-16 px-6 sm:px-10 lg:pl-16 xl:pl-28 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
              <span>{data.expertsSection.eyebrow}</span>
              <span className="w-8 h-0.5 bg-[#007cfb]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {data.expertsSection.title}
            </h2>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              {data.expertsSection.description}
            </p>
            <div className="mt-6">
              <a
                href="#dat-lich"
                className="inline-block bg-[#007cfb] hover:bg-[#0065d1] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xs"
              >
                {data.expertsSection.ctaText}
              </a>
            </div>
          </div>

          {/* Right Dark Navy Column with 4 Technician Cards */}
          <div className="lg:col-span-8 bg-[#121d2c] py-16 px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.expertsSection.members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xs overflow-hidden shadow-lg group"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#007cfb] mt-0.5">
                      {member.role}
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-2.5 text-[11px] text-slate-400">
                      <span>f</span>
                      <span>t</span>
                      <span>in</span>
                      <span>Bē</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. HÌNH ẢNH NỔI BẬT: CÔNG VIỆC BẢO DƯỠNG HỒ BƠI GẦN ĐÂY */}
      <section id="cong-viec" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
              <span>{data.recentWorksSection.eyebrow}</span>
              <span className="w-8 h-0.5 bg-[#007cfb]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              {data.recentWorksSection.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full border border-slate-200 text-[#007cfb] flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </span>
            <span className="w-8 h-8 rounded-full border border-slate-200 text-[#007cfb] flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Full-bleed 4 Photo Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {data.recentWorksSection.images.map((wk) => (
            <div
              key={wk.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xs bg-slate-100"
            >
              <img
                src={wk.image}
                alt={wk.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032b56]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <div className="text-xs font-bold">{wk.title}</div>
                <div className="text-[11px] text-sky-200">{wk.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. KHÁCH HÀNG: PHẢN HỒI TỪ KHÁCH HÀNG ĐÁNG TIN CẬY */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
              <span className="w-6 h-0.5 bg-[#007cfb]" />
              <span>Khách Hàng</span>
              <span className="w-6 h-0.5 bg-[#007cfb]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Phản hồi từ khách hàng đáng tin cậy của chúng tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-md shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-md object-cover"
                  />
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {t.author}
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                      {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3 h-3 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 13. ROYAL BLUE NEWSLETTER CALLOUT BOX */}
          <div className="mt-16 bg-[#007cfb] rounded-md p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-lg sm:text-xl font-extrabold max-w-md leading-snug">
              {data.newsletterBar.title}
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={data.newsletterBar.placeholder}
                className="w-full sm:w-64 bg-white text-slate-800 px-4 py-3 text-xs rounded-xs focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xs cursor-pointer"
              >
                {data.newsletterBar.buttonText}
              </button>
            </form>
          </div>
          {newsletterSaved && (
            <p className="mt-2 text-center text-xs font-bold text-[#007cfb]">
              Đăng ký nhận bản tin thành công!
            </p>
          )}
        </div>
      </section>

      {/* 14. TIN TỨC VÀ CẬP NHẬT MỚI NHẤT */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#007cfb]">
              <span className="w-6 h-0.5 bg-[#007cfb]" />
              <span>Tin Tức</span>
              <span className="w-6 h-0.5 bg-[#007cfb]" />
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Tin tức và cập nhật mới nhất của chúng tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-md border border-slate-100 shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-0 left-4 bg-[#007cfb] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-t-xs">
                    {post.date}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3 h-3 text-[#007cfb]" />
                      {post.category || "Bởi Bể Bơi Xanh"}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-[#007cfb]" />
                      Bình luận (3)
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 leading-snug mb-4 flex-1 hover:text-[#007cfb] transition-colors">
                    {post.title}
                  </h3>
                  <div>
                    <a
                      href="#dat-lich"
                      className="inline-block border border-slate-200 hover:border-[#007cfb] hover:bg-[#007cfb] hover:text-white text-slate-700 text-[11px] font-bold uppercase px-4 py-2 rounded-xs transition-colors"
                    >
                      ĐỌC THÊM
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15. DARK NAVY FOOTER */}
      <footer id="lien-he" className="bg-[#111927] text-slate-300 pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand */}
            <div className="lg:col-span-4 space-y-4">
              <MonaPoolLogo brandName={data.business.name} light />
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
            </div>

            {/* Liên kết */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-extrabold text-white">Liên Kết</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    → Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#cong-viec" className="hover:text-white">
                    → Hình ảnh nổi bật
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    → Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    → Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Tin Mới */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white">Tin Mới</h4>
              <div className="space-y-3">
                {(data.news || []).slice(0, 2).map((n) => (
                  <a
                    key={n.id}
                    href="#tin-tuc"
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-14 h-12 rounded-xs object-cover shrink-0"
                    />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#007cfb] line-clamp-2 leading-snug">
                        {n.title}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {n.date}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Liên Hệ */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white">
                Thông Tin Liên Hệ
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#007cfb] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#007cfb] shrink-0" />
                  <a
                    href={`tel:${data.business.phone[0]}`}
                    className="text-white font-bold hover:underline"
                  >
                    {data.business.phone[0]}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#007cfb] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Royal Blue Bar */}
        <div className="bg-[#007cfb] text-white py-3.5 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between text-xs">
            <span>© Thiết kế và lập trình bởi {data.business.name}</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-7 h-7 rounded-full bg-white text-[#007cfb] flex items-center justify-center shadow cursor-pointer"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="inline-block bg-blue-50 text-[#007cfb] text-xs font-bold px-3 py-1 rounded-full">
              {selectedServiceModal.priceNote}
            </span>
            <h3 className="mt-3 text-xl font-extrabold text-slate-900">
              Dịch vụ: {selectedServiceModal.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedServiceModal.description}
            </p>
            <div className="mt-4 space-y-2">
              {selectedServiceModal.details.map((dt, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#007cfb] shrink-0" />
                  <span>{dt}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedServiceModal(null)}
                className="text-xs font-bold text-slate-500 px-4 py-2"
              >
                Đóng
              </button>
              <a
                href="#dat-lich"
                onClick={() => setSelectedServiceModal(null)}
                className="bg-[#007cfb] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-xs"
              >
                Đặt lịch ngay
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH MODAL */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase">
                Tìm kiếm dịch vụ hồ bơi
              </h3>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Nhập từ khóa (vệ sinh, xử lý nước, thay cát lọc)..."
              className="w-full border border-slate-200 rounded-xs px-4 py-2.5 text-xs focus:outline-none focus:border-[#007cfb]"
            />
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-extrabold text-slate-900">
                Quy Trình Bảo Dưỡng Hồ Bơi Tiêu Chuẩn {data.business.name}
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden relative aspect-video bg-slate-900">
              <img
                src={data.whyChooseUsSection.mainCircleImage}
                alt="Video"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#007cfb] mb-2" />
                <p className="text-sm font-bold">
                  Cam kết nguồn nước đạt chuẩn an toàn pH 7.2 – 7.6
                </p>
                <p className="text-xs text-slate-200 mt-1">
                  Hotline hỗ trợ kỹ thuật 24/7: {data.business.phone[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
