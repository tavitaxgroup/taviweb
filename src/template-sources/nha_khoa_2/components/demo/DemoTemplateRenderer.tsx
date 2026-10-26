"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Star,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Scan,
  Award,
  UserCheck,
  Menu,
  X,
  Send
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa2DefaultData,
  type NhaKhoa2Data
} from "@/template-sources/nha_khoa_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NhaKhoa2Data = adaptClonedTemplateData(
    nhaKhoa2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(
    data.services?.[0]?.title || "Cấy ghép Implant Thụy Sĩ"
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [testimonialOffset, setTestimonialOffset] = useState(0);

  const primaryPhone = data.business.phone?.[0] || "0908 333 666";
  const primaryEmail = data.business.email?.[0] || "lienhe@nhakhoaytetot.vn";
  const testimonials = data.testimonials || nhaKhoa2DefaultData.testimonials || [];

  const visibleTestimonials = [
    testimonials[testimonialOffset % testimonials.length],
    testimonials[(testimonialOffset + 1) % testimonials.length]
  ].filter(Boolean);

  const openBookingWithService = (srvTitle?: string) => {
    if (srvTitle) setSelectedService(srvTitle);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0f2942] font-sans selection:bg-[#00b894] selection:text-white">
      {/* 1. NAVY TOPBAR + WHITE STICKY HEADER */}
      <div className="bg-[#f0fdf9] border-b border-emerald-100 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between">
          {/* Slanted Navy Badge Left */}
          <div className="bg-[#0f2942] text-white px-5 py-2.5 flex items-center gap-3 md:pr-10 md:[clip-path:polygon(0_0,94%_0,100%_100%,0%_100%)]">
            <span className="font-semibold tracking-wider uppercase text-[11px] text-emerald-300">
              HỖ TRỢ ĐẶT KHÁM
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#00b894] transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-[#00b894] flex items-center justify-center text-white">
                <Phone className="w-3 h-3" />
              </span>
              <span>{primaryPhone}</span>
            </a>
          </div>

          {/* Right Info Strip */}
          <div className="px-4 py-2 flex flex-wrap items-center gap-4 md:gap-6 text-slate-600">
            {data.business.workingHours && (
              <div className="hidden lg:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00b894]" />
                <span>{data.business.workingHours}</span>
              </div>
            )}
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-1.5 hover:text-[#00b894] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00b894]" />
              <span>{primaryEmail}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00b894] shrink-0" />
              <span className="truncate max-w-[260px] sm:max-w-none">
                {data.business.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky White Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Tooth Logo + Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00b894] to-[#0f2942] flex items-center justify-center text-white shadow-md shadow-[#00b894]/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 3C4.239 3 2 5.239 2 8c0 2.214 1.064 4.19 2.138 6.18.894 1.656 1.796 3.328 2.14 5.146.153.81.99 1.174 1.635.662.587-.466 1.158-1.367 1.59-2.468.393-1.001.87-1.52 1.497-1.52s1.104.519 1.497 1.52c.432 1.101 1.003 2.002 1.59 2.468.645.512 1.482.148 1.635-.662.344-1.818 1.246-3.49 2.14-5.146C18.936 12.19 20 10.214 20 8c0-2.761-2.239-5-5-5-1.404 0-2.675.58-3.586 1.515a.586.586 0 01-.828 0C9.675 3.58 8.404 3 7 3z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-[#0f2942] leading-tight">
                {data.business.name}
              </span>
              <span className="block text-[11px] font-medium text-[#00b894] tracking-wider uppercase">
                Dental Clinic Standard
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#trang-chu"
              className="text-[#00b894] font-semibold border-b-2 border-[#00b894] pb-1"
            >
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#00b894] transition-colors">
              Giới thiệu
            </a>
            <a href="#co-so-vat-chat" className="hover:text-[#00b894] transition-colors">
              Cơ sở vật chất
            </a>
            <a href="#doi-ngu-bac-si" className="hover:text-[#00b894] transition-colors">
              Đội ngũ bác sĩ
            </a>
            <a href="#dich-vu" className="hover:text-[#00b894] transition-colors">
              Dịch vụ
            </a>
            <a href="#kien-thuc" className="hover:text-[#00b894] transition-colors">
              Kiến thức
            </a>
          </nav>

          {/* CTA Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openBookingWithService()}
              className="inline-flex items-center gap-2 bg-[#00b894] hover:bg-[#0ca384] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#00b894]/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Đặt lịch khám</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0f2942] hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-[#00b894]"
            >
              Giới thiệu
            </a>
            <a
              href="#co-so-vat-chat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-[#00b894]"
            >
              Cơ sở vật chất
            </a>
            <a
              href="#doi-ngu-bac-si"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-[#00b894]"
            >
              Đội ngũ bác sĩ
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-[#00b894]"
            >
              Dịch vụ phổ biến
            </a>
            <a
              href="#kien-thuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-[#00b894]"
            >
              Kiến thức nha khoa
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingWithService();
              }}
              className="w-full bg-[#00b894] text-white font-semibold text-sm py-3 rounded-full"
            >
              Đặt lịch khám ngay
            </button>
          </div>
        )}
      </header>

      {/* 2. BRIGHT SMILE DENTAL HERO */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-r from-[#f0fdf9] via-[#f4fdfa] to-white"
      >
        {/* Decorative Mint Blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#00b894]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-[#00b894] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.hero.eyebrow || "NHA KHOA CHUẨN QUỐC TẾ"}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0f2942] leading-[1.15] tracking-tight">
                {data.hero.title}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                {data.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openBookingWithService()}
                  className="inline-flex items-center gap-2.5 bg-[#00b894] hover:bg-[#0ca384] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#00b894]/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{data.hero.ctaText || "Đặt lịch khám"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-[#0f2942] border border-slate-200 font-bold px-6 py-3.5 rounded-full shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00b894]" />
                  <span>Hotline: {primaryPhone}</span>
                </a>
              </div>

              {/* Floating Trust Badge */}
              <div className="pt-4 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Patient"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Patient"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Patient"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="ml-1.5 text-sm font-extrabold text-[#0f2942]">
                      {data.business.rating || 4.9}/5
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    từ {(data.business.reviewCount || 10000).toLocaleString("vi-VN")}+ khách hàng hài lòng
                  </p>
                </div>
              </div>
            </div>

            {/* Right Bright Smile Dental Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.business.name}
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942]/30 via-transparent to-transparent" />
              </div>

              {/* Floating Clinical Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-emerald-100 items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#f0fdf9] text-[#00b894] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">
                    Cam kết chất lượng
                  </p>
                  <p className="text-sm font-bold text-[#0f2942]">
                    100% Vô trùng chuẩn Bộ Y Tế
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SPLIT SECTION ("Dịch vụ nha khoa chuyên nghiệp") */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Text + 2 Horizontal Feature Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00b894]">
                  {data.business.name}
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f2942] leading-tight">
                  {data.business.aboutTitle || "Dịch vụ nha khoa chuyên nghiệp"}
                </h2>
              </div>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                {data.business.aboutText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* 2 Horizontal Feature Cards with Teal Icons */}
              <div className="space-y-4 pt-2">
                {(data.aboutFeatures || nhaKhoa2DefaultData.aboutFeatures).map(
                  (feat, index) => (
                    <div
                      key={feat.id}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-[#f0fdf9]/70 border border-emerald-100 hover:border-[#00b894]/40 transition-all"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center text-[#00b894] shrink-0">
                        {index === 0 ? (
                          <Scan className="w-7 h-7" />
                        ) : (
                          <ShieldCheck className="w-7 h-7" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#0f2942]">
                          {feat.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right Smiling Dentist Portrait with Experience Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg">
                {/* Hexagon/Medical Backdrop Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#f0fdf9] via-emerald-50 to-teal-100/50 -z-10" />
                <div className="rounded-3xl overflow-hidden shadow-xl border border-emerald-100 bg-[#f0fdf9]">
                  <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=80"
                    alt="Chuyên gia Nha khoa"
                    className="w-full h-[440px] object-cover object-top"
                  />
                </div>

                {/* Experience Floating Badge */}
                <div className="absolute -bottom-5 right-6 bg-[#0f2942] text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#00b894] flex items-center justify-center font-extrabold text-lg">
                    {data.business.experienceYears || "20+"}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug">Năm Kinh Nghiệm</p>
                    <p className="text-xs text-emerald-300">
                      Chuyên gia Răng Hàm Mặt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "CƠ SỞ VẬT CHẤT" (5-COLUMN CLINIC EQUIPMENT SHOWCASE) */}
      <section id="co-so-vat-chat" className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b894]">
              Cam Kết Dịch Vụ Chất Lượng Tốt Nhất
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f2942]">
              Cơ sở vật chất
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Mục tiêu hàng đầu của chúng tôi là mang đến dịch vụ chăm sóc nha khoa
              tốt nhất với hệ thống máy móc chẩn đoán và điều trị tối tân.
            </p>
          </div>
        </div>

        {/* 5-Column Full-Width Showcase Grid */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(data.facilities || nhaKhoa2DefaultData.facilities).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-[#0f2942] h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942]/90 via-[#0f2942]/25 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <span className="inline-block w-8 h-1 rounded-full bg-[#00b894] mb-2" />
                  <h3 className="text-sm font-bold leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "ĐỘI NGŨ BÁC SĨ" (3x2 DOCTOR GRID) */}
      <section id="doi-ngu-bac-si" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b894]">
              {data.business.name}
            </span>
            <h2 className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-[#0f2942]">
              Đội ngũ bác sĩ
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Các bác sĩ chuyên khoa Răng Hàm Mặt với nhiều năm kinh nghiệm trong ngành
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.team || nhaKhoa2DefaultData.team || []).slice(0, 6).map((doc) => (
              <div
                key={doc.id}
                className="group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-slate-100 to-emerald-50/40">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-base text-[#0f2942] group-hover:text-[#00b894] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{doc.position}</p>
                  </div>
                  <button
                    onClick={() => openBookingWithService(`Khám cùng ${doc.name}`)}
                    className="shrink-0 w-9 h-9 rounded-full bg-[#f0fdf9] text-[#00b894] hover:bg-[#00b894] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    title="Đặt lịch với bác sĩ"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 6. "THÀNH TỰU ĐẠT ĐƯỢC" (4 TEAL COUNTER CARDS) */}
          <div className="mt-20 pt-12 border-t border-slate-100">
            <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-[#0f2942] mb-10">
              Thành tựu đạt được
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(data.stats || nhaKhoa2DefaultData.stats || []).map((st) => (
                <div
                  key={st.id}
                  className="text-center p-6 rounded-2xl bg-white border border-emerald-100/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#00b894] tracking-tight">
                    {st.number}
                  </div>
                  <div className="mt-2 text-sm font-bold text-[#0f2942]">
                    {st.title}
                  </div>
                  {st.subtitle && (
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {st.subtitle}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. "DỊCH VỤ PHỔ BIẾN" (3x2 DENTAL SERVICE CARDS WITH CHECKLISTS) */}
      <section id="dich-vu" className="py-16 lg:py-24 bg-[#f0fdf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b894]">
              Cam Kết Chất Lượng
            </span>
            <h2 className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-[#0f2942]">
              Dịch vụ phổ biến
            </h2>
            <p className="mt-2.5 text-sm text-slate-600">
              Tại <span className="font-bold text-[#00b894]">{data.business.name}</span>, mục tiêu của chúng tôi là mang lại các dịch vụ nha khoa tốt nhất và không ngừng cải tiến để bảo vệ nụ cười của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.services || nhaKhoa2DefaultData.services || []).map((srv) => {
              const checklist =
                data.serviceChecklists?.[srv.id] ||
                nhaKhoa2DefaultData.serviceChecklists[srv.id] || [
                  "Chụp phim X-Quang 3D tiêu chuẩn",
                  "Phác đồ điều trị cá nhân hóa",
                  "Bảo hành chính hãng lâu dài"
                ];

              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-emerald-100/80 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {srv.price && (
                      <span className="absolute top-3 right-3 bg-[#0f2942]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                        {srv.price}
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0f2942]">
                        {srv.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {srv.description}
                      </p>

                      {/* 3 Bullet Checkmarks */}
                      <ul className="mt-4 space-y-1.5">
                        {checklist.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00b894] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-600">
                        <strong className="text-[#00b894]">Bao gồm</strong> Kiểm tra chỉ số sức khỏe
                      </span>
                      <button
                        onClick={() => openBookingWithService(srv.title)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#00b894] hover:text-[#0f2942] transition-colors cursor-pointer"
                      >
                        <span>Xem chi tiết</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TEAL "ĐÁNH GIÁ KHÁCH HÀNG" BANNER (#00b894) */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#00b894] to-[#10b981] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">
                Đánh giá
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">
                Đánh giá khách hàng
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-emerald-50 max-w-md">
              Mọi sự đóng góp của khách hàng chúng tôi sẽ ghi nhận và cải thiện chất
              lượng dịch vụ trong tương lai.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setTestimonialOffset((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-full border border-white/40 hover:bg-white hover:text-[#00b894] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setTestimonialOffset((prev) => (prev + 1) % testimonials.length)
                }
                className="w-10 h-10 rounded-full border border-white/40 hover:bg-white hover:text-[#00b894] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white text-[#0f2942] rounded-2xl p-6 sm:p-8 shadow-xl"
              >
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="relative">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#00b894]"
                      />
                      <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00b894] text-white text-xs font-bold flex items-center justify-center">
                        ”
                      </span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-[#0f2942]">
                        {t.author}
                      </h3>
                      <p className="text-[11px] font-bold text-[#00b894] uppercase tracking-wider">
                        {t.role || "KHÁCH HÀNG"}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-500 block mb-1">
                      Rating:
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating || 5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  “{t.content}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. "KIẾN THỨC CẦN BIẾT" (3 DENTAL BLOG CARDS) */}
      <section id="kien-thuc" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00b894]">
              Tin tức nổi bật
            </span>
            <h2 className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-[#0f2942]">
              Kiến thức cần biết
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Tin tức và cẩm nang chăm sóc răng miệng mới nhất từ chuyên gia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || nhaKhoa2DefaultData.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#00b894] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {post.date}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                      <span>Bởi {data.business.name}</span>
                      <span>•</span>
                      <span>Chuyên mục Nha khoa</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-[#f0fdf9] text-[#00b894]">
                        {post.category || "NHA KHOA"}
                      </span>
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        CHUẨN Y KHOA
                      </span>
                    </div>
                    <h3 className="font-extrabold text-base text-[#0f2942] line-clamp-2 hover:text-[#00b894] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => openBookingWithService()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00b894] uppercase tracking-wider hover:text-[#0f2942] transition-colors cursor-pointer"
                  >
                    <span>XEM THÊM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAL APPOINTMENT / NEWSLETTER BANNER + DEEP MEDICAL NAVY 4-COLUMN FOOTER */}
      <footer className="bg-[#0f2942] text-white pt-6 pb-12 relative">
        {/* Overlapping Teal Newsletter / Quick Booking Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-12 relative z-20">
          <div className="bg-gradient-to-r from-[#00b894] to-[#10b981] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Đăng ký để nhận tư vấn & ưu đãi mới nhất
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 mt-1">
                Nhận ngay gói chụp phim CT ConeBeam 3D và thăm khám miễn phí cùng Bác sĩ CKI
              </p>
            </div>

            {newsletterSubmitted ? (
              <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Đã đăng ký thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterSubmitted(true);
                }}
                className="w-full md:w-auto flex items-center bg-white/20 backdrop-blur-sm p-1.5 rounded-full border border-white/30"
              >
                <input
                  type="text"
                  required
                  placeholder="Nhập Email hoặc Số điện thoại..."
                  className="bg-transparent text-white placeholder:text-emerald-50 text-xs sm:text-sm px-4 py-2 focus:outline-none w-full md:w-64"
                />
                <button
                  type="submit"
                  className="bg-white text-[#0f2942] hover:bg-emerald-50 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shrink-0 transition-colors cursor-pointer"
                >
                  Đăng ký
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Deep Medical Navy Footer */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00b894] flex items-center justify-center text-white font-bold">
                  +
                </div>
                <span className="text-lg font-extrabold tracking-tight text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Phòng khám nha khoa chuyên nghiệp với đội ngũ bác sĩ giàu kinh nghiệm,
                sẵn lòng phục vụ và chăm sóc nụ cười cho cả gia đình bạn.
              </p>
            </div>

            {/* Col 2: Dịch vụ */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Dịch vụ
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {(data.services || nhaKhoa2DefaultData.services || [])
                  .slice(0, 4)
                  .map((s) => (
                    <li key={s.id}>
                      <a
                        href="#dich-vu"
                        className="hover:text-[#00b894] transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Col 3: Kiến thức */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Kiến thức
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <a href="#kien-thuc" className="hover:text-[#00b894] transition-colors">
                    Thông tin kiến thức
                  </a>
                </li>
                <li>
                  <a href="#doi-ngu-bac-si" className="hover:text-[#00b894] transition-colors">
                    Hỏi đáp bác sĩ
                  </a>
                </li>
                <li>
                  <a href="#co-so-vat-chat" className="hover:text-[#00b894] transition-colors">
                    Cơ sở vật chất 3D
                  </a>
                </li>
                <li>
                  <a href="#kien-thuc" className="hover:text-[#00b894] transition-colors">
                    Tin tức nha khoa
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Clinic Location Card */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Bản đồ chỉ đường
              </h4>
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-white/10 p-3 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <MapPin className="w-4 h-4 text-[#00b894] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </div>
                <button
                  onClick={() => openBookingWithService()}
                  className="w-full mt-2 bg-[#00b894] hover:bg-[#0ca384] text-white text-xs font-bold py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Đặt lịch hẹn ngay
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Contact Strip */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3.5">
              <div className="w-9 h-9 rounded-full bg-[#00b894] flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">Liên hệ ngay</span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="font-bold text-sm text-[#00b894]"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3.5">
              <div className="w-9 h-9 rounded-full bg-[#00b894]/20 text-[#00b894] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">Email hỗ trợ</span>
                <span className="font-semibold text-white">{primaryEmail}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3.5">
              <div className="w-9 h-9 rounded-full bg-[#00b894]/20 text-[#00b894] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">Địa chỉ phòng khám</span>
                <span className="font-semibold text-white line-clamp-1">
                  {data.business.address}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} {data.business.name}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* INTERACTIVE BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0f2942]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f0fdf9] text-[#00b894] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0f2942]">
                  Đặt lịch khám thành công!
                </h3>
                <p className="text-sm text-slate-600">
                  Bộ phận lễ tân của <strong>{data.business.name}</strong> sẽ liên hệ xác nhận
                  lịch hẹn với quý khách trong vòng 5 phút.
                </p>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-[#00b894] text-white font-bold text-sm px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Đóng cửa sổ
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00b894]">
                    Đặt lịch hẹn ưu tiên
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f2942] mt-1">
                    {data.business.name}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên khách hàng *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00b894]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0908 xxx xxx"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00b894]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dịch vụ quan tâm
                  </label>
                  <input
                    type="text"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00b894]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00b894] hover:bg-[#0ca384] text-white font-bold py-3 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Xác nhận đặt lịch khám
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
