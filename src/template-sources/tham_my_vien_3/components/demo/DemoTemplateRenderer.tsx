"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Search,
  ShoppingBag,
  Check,
  X,
  Play,
  CreditCard,
  Smartphone,
  Sparkles,
  Menu,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Flower2,
  ShieldCheck,
  MessageCircle
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien3DefaultData,
  type ThamMyVien3Data
} from "@/template-sources/tham_my_vien_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function FloralOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 28"
      className={`w-16 sm:w-24 h-6 text-[#e4aecb] shrink-0 ${
        flip ? "scale-x-[-1]" : ""
      }`}
      fill="none"
    >
      <path
        d="M86 14C74 14 68 5 57 5C48 5 44 12 44 16C44 20 48 22 51 20C54 18 52 13 48 13C40 13 35 23 24 23C15 23 11 16 4 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M70 14C63 19 56 24 46 24C37 24 32 18 26 9C22 4 15 4 10 8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <circle cx="84" cy="14" r="2.5" fill="currentColor" />
      <circle cx="57" cy="5" r="2" fill="currentColor" />
      <circle cx="14" cy="18" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: ThamMyVien3Data = adaptClonedTemplateData(
    thamMyVien3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(
    data.services?.[0]?.title || "Hydralift Skin - Tăng sinh Collagen"
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "tuvan@orientskincare.vn";
  const servicesList = data.services || thamMyVien3DefaultData.services || [];
  const doctorsList = data.team || thamMyVien3DefaultData.team || [];
  const newsList = data.news || thamMyVien3DefaultData.news || [];
  const testimonialsList =
    data.testimonials || thamMyVien3DefaultData.testimonials || [];
  const mechanism =
    data.heroMechanism || thamMyVien3DefaultData.heroMechanism;

  const openBookingWithService = (srvTitle?: string) => {
    if (srvTitle) setSelectedServiceTitle(srvTitle);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#3b2d38] font-sans selection:bg-[#9c438b] selection:text-white">
      {/* 1. TOP PLUM-PURPLE UTILITY BAR (#9c438b) */}
      <div className="bg-gradient-to-r from-[#a64994] via-[#9c438b] to-[#8b377b] text-white text-xs py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center sm:justify-between">
          <div className="hidden sm:flex items-center gap-4 text-white/90">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#fbcfe8]" />
              <span>Viện Điều Trị & Trẻ Hóa Da Chuẩn Y Khoa</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-medium tracking-wide hover:text-[#fbcfe8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{primaryPhone}</span>
            </a>
            <button
              onClick={() => openBookingWithService()}
              className="hover:text-[#fbcfe8] transition-colors cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2.5 border-l border-white/25 pl-4">
              <a
                href="#lien-he"
                className="hover:text-[#fbcfe8] transition-colors font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#fbcfe8] transition-colors"
                aria-label="Instagram"
              >
                ◎
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#fbcfe8] transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WHITE HEADER WITH PURPLE LOTUS EMBLEM & NAV */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#f5e1ee] shadow-xs">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="flex flex-col items-center group shrink-0">
            <div className="w-11 h-9 flex items-center justify-center text-[#9c438b] group-hover:scale-105 transition-transform">
              <Flower2 className="w-8 h-8 stroke-[1.75]" />
            </div>
            <span className="font-serif text-base sm:text-lg font-bold tracking-[0.18em] text-[#8d3b7e] uppercase leading-none">
              {data.business.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-[#4a3b47]">
            <a
              href="#trang-chu"
              className="text-[#9c438b] border-b-2 border-[#9c438b] pb-1"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              DỊCH VỤ
            </a>
            <a
              href="#doi-ngu-bac-si"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              BÁC SĨ
            </a>
            <a
              href="#cong-nghe"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              SẢN PHẨM
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              TIN TỨC
            </a>
            <a
              href="#cam-nhan"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              CẢM NHẬN
            </a>
            <a
              href="#faqs"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              FAQS
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#9c438b] transition-colors pb-1"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Cart / Quick Booking */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openBookingWithService()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5c4a58] hover:text-[#9c438b] transition-colors cursor-pointer"
            >
              <span>0 ₫</span>
              <ShoppingBag className="w-4 h-4 text-[#9c438b]" />
            </button>

            <button
              onClick={() => openBookingWithService()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#9c438b] hover:bg-[#833273] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Đặt lịch</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4a3b47]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#f5e1ee] px-4 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#9c438b]"
            >
              Dịch vụ {data.business.name}
            </a>
            <a
              href="#doi-ngu-bac-si"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#9c438b]"
            >
              Đội ngũ bác sĩ
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#9c438b]"
            >
              Thông tin chăm sóc da
            </a>
            <a
              href="#cong-nghe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#9c438b]"
            >
              Công nghệ sử dụng
            </a>
            <a
              href="#cam-nhan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#9c438b]"
            >
              Cảm nhận khách hàng
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingWithService();
              }}
              className="w-full bg-[#9c438b] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Đặt lịch soi da miễn phí
            </button>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER: HYDRALIFT SKIN AQUA WATER SPLASH & DERMATOLOGY PANEL */}
      <section
        id="trang-chu"
        className="relative overflow-hidden bg-gradient-to-r from-[#cfeff7] via-[#e9f7fa] to-[#fdf2f8]"
      >
        {/* Decorative Water Wave Background */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px] lg:min-h-[520px]">
            {/* Left Model with Water Splash Effect */}
            <div className="lg:col-span-6 relative h-[340px] sm:h-[440px] lg:h-[520px] overflow-hidden">
              <img
                src={
                  activeSlide === 0
                    ? data.hero.backgroundImage
                    : data.hero.images?.[1] || data.hero.backgroundImage
                }
                alt={data.hero.title}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              {/* Soft Aqua-White Blend Overlay on Right Edge */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#f4f9fc]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#bae6fd]/30 via-transparent to-transparent" />
            </div>

            {/* Right Dermatology Treatment Breakdown Card */}
            <div className="lg:col-span-6 px-4 sm:px-8 lg:px-10 py-8 lg:py-10 relative z-10">
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white">
                {/* Script Eyebrow */}
                <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-[#6e3562] tracking-wide">
                  {data.hero.eyebrow || mechanism.scriptTitle}
                </p>

                {/* Main & Subtitle */}
                <h1 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#2d3748]">
                  {data.hero.title}
                </h1>
                <p className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-[#2d3748]">
                  {data.hero.subtitle}
                </p>

                {/* 3 Key Bullet Highlights */}
                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-[#4a5568]">
                  {mechanism.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#9c438b] font-bold">-</span>
                      <span>
                        <strong className="text-[#9c438b] font-bold">
                          {item.bold}
                        </strong>{" "}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Two-Column Comparison: Ưu điểm (Red X) vs Công nghệ tiên tiến (Green Check) */}
                <div className="mt-6 pt-5 border-t border-[#f3e1ec] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-[#9c438b] mb-2.5">
                      {mechanism.advantagesTitle}
                    </h2>
                    <ul className="space-y-1.5 text-xs text-[#4a5568]">
                      {mechanism.advantages.map((adv, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <X className="w-3.5 h-3.5 text-[#e11d48] stroke-[2.75] shrink-0" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:border-l sm:border-[#e9d5e3] sm:pl-6">
                    <h2 className="text-xs sm:text-sm font-bold text-[#9c438b] mb-2.5">
                      {mechanism.techTitle}
                    </h2>
                    <ul className="space-y-1.5 text-xs text-[#4a5568]">
                      {mechanism.techPoints.map((tp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#16a34a] stroke-[2.75] shrink-0" />
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() =>
                      openBookingWithService("Hydralift Skin - Tăng sinh Collagen")
                    }
                    className="bg-[#9c438b] hover:bg-[#823373] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer"
                  >
                    {data.hero.ctaText || "ĐẶT LỊCH TƯ VẤN NGAY"}
                  </button>
                  <a
                    href="#dich-vu"
                    className="text-xs font-bold uppercase tracking-wider text-[#9c438b] hover:underline px-3 py-2"
                  >
                    Xem 6 liệu trình chuyên sâu →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Pink Wave Ribbon Bottom + Slider Indicator Squares */}
        <div className="relative h-10 bg-gradient-to-r from-[#f8c6dd] via-[#f49ac2] to-[#f7b5d4] flex items-center justify-center gap-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx % 2)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2.5 h-2.5 border border-white transition-all cursor-pointer ${
                activeSlide === idx % 2 ? "bg-white scale-110" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 4. SECTION: DỊCH VỤ ORIENT SKINCARE (3x2 GRID WITH FLORAL ORNAMENTS) */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Heading with Pink Floral Scrollwork */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-12">
            <FloralOrnament />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-wide text-[#2d252b] text-center">
              DỊCH VỤ {data.business.name.toUpperCase()}
            </h2>
            <FloralOrnament flip />
          </div>

          {/* 3x2 Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {servicesList.map((srv) => (
              <div
                key={srv.id}
                onClick={() => openBookingWithService(srv.title)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden h-48 sm:h-52 bg-[#fdf4f9] mb-4 relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {srv.price && (
                      <span className="absolute bottom-2.5 right-2.5 bg-[#9c438b]/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                        {srv.price}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#4a3b47] group-hover:text-[#9c438b] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-stone-500 leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#9c438b] opacity-85 group-hover:opacity-100">
                  <span>Đặt lịch liệu trình</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: ĐỘI NGŨ BÁC SĨ (PASTEL PINK SECTION WITH LARGE CIRCULAR MEDALLION) */}
      <section
        id="doi-ngu-bac-si"
        className="py-14 lg:py-20 bg-[#fbe8f2] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Giant White-Ringed Circular Frame matching TMV006 */}
          <div className="relative mx-auto max-w-[760px] rounded-full bg-[#faebf3] border-[10px] sm:border-[16px] border-white/85 shadow-xl px-6 sm:px-16 py-12 sm:py-16 text-center">
            {/* Inner subtle ring */}
            <div className="hidden sm:block absolute inset-3 rounded-full border-2 border-white/70 pointer-events-none" />

            {/* Section Title */}
            <div className="flex items-center justify-center gap-3 mb-8 relative z-10">
              <FloralOrnament />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-wide text-[#2d252b]">
                ĐỘI NGŨ BÁC SĨ
              </h2>
              <FloralOrnament flip />
            </div>

            {/* 2 Specialist Doctors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto relative z-10">
              {doctorsList.map((doc) => (
                <div key={doc.id} className="flex flex-col items-center">
                  <div className="w-44 h-52 sm:w-48 sm:h-56 overflow-hidden rounded-t-full bg-gradient-to-b from-white/40 to-white/90 p-2">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top rounded-t-full"
                    />
                  </div>
                  <div className="w-full bg-white py-3 px-4 shadow-sm border border-[#f5d5e6]">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#4a3b47]">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] text-[#9c438b] mt-0.5 line-clamp-1">
                      {doc.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Commitment Quote at Bottom of Circle */}
            <p className="mt-8 text-xs sm:text-sm text-[#5c4a58] max-w-xs mx-auto leading-relaxed relative z-10">
              Chúng tôi cam kết mang đến cho bạn
              <br />
              sự tự tin bền vững theo thời gian
            </p>
          </div>
        </div>
      </section>

      {/* 6. SECTION: THÔNG TIN ORIENT SKINCARE (LEFT VIDEO + RIGHT 2x2 BLOG GRID) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10">
            <FloralOrnament />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-wide text-[#2d252b] text-center">
              THÔNG TIN {data.business.name.toUpperCase()}
            </h2>
            <FloralOrnament flip />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Video Feature Box (col-span-6) */}
            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[290px] sm:min-h-[340px] bg-[#dff1f9] rounded-sm overflow-hidden shadow-sm border border-[#e6d5e1] group">
                <img
                  src={
                    data.featuredVideo?.thumbnail ||
                    thamMyVien3DefaultData.featuredVideo.thumbnail
                  }
                  alt={data.featuredVideo?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d1e29]/80 via-[#2d1e29]/30 to-[#2d1e29]/50" />

                {/* Top Video Title Bar */}
                <div className="absolute top-0 inset-x-0 p-3.5 flex items-center justify-between text-white text-xs bg-black/30 backdrop-blur-xs">
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-6 h-6 rounded-full bg-[#9c438b] flex items-center justify-center shrink-0">
                      <Flower2 className="w-3.5 h-3.5" />
                    </span>
                    <span className="truncate font-medium">
                      {data.business.name} - Quy trình chăm sóc & trẻ hóa da chuẩn Y khoa
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded shrink-0">
                    {data.featuredVideo?.duration || "03:45"}
                  </span>
                </div>

                {/* Center Play Button */}
                <button
                  onClick={() => setVideoPlaying(!videoPlaying)}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white cursor-pointer"
                  aria-label="Phát video"
                >
                  <div className="w-16 h-12 rounded-xl bg-[#1f2937]/85 hover:bg-[#9c438b] flex items-center justify-center transition-colors shadow-lg">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                  <span className="mt-3 text-xs font-bold uppercase tracking-widest bg-white/90 text-[#9c438b] px-4 py-1 rounded-full">
                    {videoPlaying ? "Đang phát video giới thiệu" : "Xem video thực tế"}
                  </span>
                </button>

                {videoPlaying && (
                  <div className="absolute inset-x-4 bottom-4 bg-white/95 text-[#3b2d38] p-4 rounded shadow-lg text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="text-[#9c438b]">
                        Video Thực Tế Tại Phòng Điều Trị VIP
                      </strong>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setVideoPlaying(false);
                        }}
                        className="text-stone-400 hover:text-stone-700"
                      >
                        Đóng ✕
                      </button>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      {data.featuredVideo?.subtitle}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right 2x2 Skincare Articles Grid (col-span-6) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsList.slice(0, 4).map((post) => (
                <article
                  key={post.id}
                  onClick={() => openBookingWithService(post.title)}
                  className="relative h-40 sm:h-[162px] overflow-hidden group cursor-pointer border border-[#f3e3ec]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-xs px-3 py-2 border-t border-white">
                    <h3 className="text-[11px] font-bold uppercase text-[#3b2d38] group-hover:text-[#9c438b] transition-colors truncate">
                      {post.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: CÔNG NGHỆ SỬ DỤNG (6 DERMATOLOGY TECH LOGOS) */}
      <section id="cong-nghe" className="py-10 lg:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10">
            <FloralOrnament />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-wide text-[#2d252b] text-center">
              CÔNG NGHỆ SỬ DỤNG
            </h2>
            <FloralOrnament flip />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {/* OxyGeneo */}
            <div className="flex items-center justify-center h-20">
              <div className="px-5 py-3 rounded-full bg-[#6bc5d2] text-white text-center shadow-xs">
                <span className="block font-sans text-sm font-bold tracking-tight">
                  OxyGeneo™
                </span>
                <span className="block text-[8px] uppercase tracking-[0.22em] opacity-90">
                  TECHNOLOGY
                </span>
              </div>
            </div>

            {/* eMatrix */}
            <div className="flex items-center justify-center h-20">
              <div className="flex items-center gap-1.5 text-[#0284c7]">
                <span className="w-6 h-4 rounded-full border-2 border-[#0284c7] flex items-center justify-center text-[9px] font-bold">
                  e
                </span>
                <span className="text-lg font-bold tracking-tight text-[#1e293b]">
                  e<span className="font-normal">Matrix™</span>
                </span>
              </div>
            </div>

            {/* Lumenis */}
            <div className="flex items-center justify-center h-20">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#1e3a8a] text-white font-serif font-bold text-sm flex items-center justify-center">
                  L
                </div>
                <div>
                  <span className="block text-base font-bold text-[#1e3a8a] leading-none">
                    Lumenis®
                  </span>
                  <span className="block text-[8px] text-stone-400">
                    Energy to Healthcare
                  </span>
                </div>
              </div>
            </div>

            {/* Fraxel */}
            <div className="flex items-center justify-center h-20">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-[#6d1d4a]">
                  fraxel®
                </span>
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#831843]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Fotona */}
            <div className="flex items-center justify-center h-20">
              <div className="text-center relative">
                <span className="text-2xl font-light tracking-tight text-[#475569]">
                  Fotona
                </span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#dc2626] align-top ml-0.5" />
                <span className="block text-[9px] text-stone-400 tracking-wide -mt-1">
                  choose perfection
                </span>
              </div>
            </div>

            {/* elos */}
            <div className="flex items-center justify-center h-20">
              <div className="text-center">
                <span className="text-2xl font-normal tracking-wide text-[#1f2937]">
                  elōs<sup className="text-[10px]">™</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: CUSTOMER TESTIMONIAL + PINK LOTUS & ZEN SPA STONES */}
      <section
        id="cam-nhan"
        className="pt-14 bg-gradient-to-b from-[#fceef6] via-[#fdf2f8] to-[#f9d8e8] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {testimonialsList.map((item, idx) =>
            idx === activeTestimonial ? (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#9c438b] mb-2">
                    {[...Array(item.rating || 5)].map((_, s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-[#9c438b] text-[#9c438b]"
                      />
                    ))}
                  </div>
                  <p className="italic text-xs sm:text-sm text-[#4a3b47] leading-relaxed">
                    “{item.content}”
                  </p>
                  <p className="mt-3 font-bold text-xs sm:text-sm text-[#2d252b]">
                    {item.author}
                  </p>
                  {item.role && (
                    <p className="text-[11px] text-[#9c438b]">{item.role}</p>
                  )}
                </div>
              </div>
            ) : null
          )}

          {/* Testimonial Slider Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonialsList.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Đánh giá ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeTestimonial === i
                    ? "bg-[#9c438b] scale-110"
                    : "bg-white border border-[#d8a8c6]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Pink Florals & Black Zen Spa Stones Strip */}
        <div className="mt-6 relative h-36 sm:h-44 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80"
            alt="Hoa sen hồng và đá nóng thư giãn"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdf2f8] via-transparent to-[#f8d7e8]/60" />
        </div>
      </section>

      {/* 9. SECTION: 3 CALLOUT INFO BOXES ON PASTEL PINK BAR (#f8d7e8) */}
      <section className="py-7 bg-[#f8d7e8] border-y border-[#f1bed8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Box 1: Thẻ Thành Viên */}
            <div
              onClick={() => openBookingWithService("Đăng ký Thẻ Thành Viên (-20%)")}
              className="bg-[#fdf2f8] hover:bg-white border border-[#d49bc0] px-5 py-4 flex items-center gap-4 transition-colors cursor-pointer"
            >
              <div className="w-11 h-11 rounded-lg bg-[#9c438b]/10 text-[#9c438b] flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#9c438b]">
                  THẺ THÀNH VIÊN
                </h3>
                <p className="text-xs text-[#4a3b47] mt-0.5">
                  Giảm 20% phí dịch vụ
                </p>
              </div>
            </div>

            {/* Box 2: Thời Gian Mở Cửa */}
            <div className="bg-[#fdf2f8] border border-[#d49bc0] px-5 py-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#9c438b]/10 text-[#9c438b] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#9c438b]">
                  THỜI GIAN MỞ CỬA
                </h3>
                <p className="text-xs text-[#4a3b47] mt-0.5">
                  {data.business.workingHours || "Thứ 2 - Chủ nhật / 9:00 - 21:00"}
                </p>
              </div>
            </div>

            {/* Box 3: Hotline */}
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-[#fdf2f8] hover:bg-white border border-[#d49bc0] px-5 py-4 flex items-center gap-4 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-[#9c438b]/10 text-[#9c438b] flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#9c438b]">
                  HOTLINE
                </h3>
                <p className="text-xs font-bold text-[#2d252b] mt-0.5">
                  {primaryPhone}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 10. QUICK FAQ & ONLINE CONSULTATION SECTION */}
      <section id="faqs" className="py-14 bg-[#fdf8fb] border-b border-[#f3e1ec]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#9c438b]">
                CÂU HỎI THƯỜNG GẶP VỀ LIỆU TRÌNH DA LIỄU
              </h3>
              {(data.faqs || thamMyVien3DefaultData.faqs).map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white p-4 border border-[#f2d9e7] rounded-sm"
                >
                  <h4 className="text-xs font-bold text-[#3b2d38]">
                    • {faq.question}
                  </h4>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div
              id="dat-lich-tu-van"
              className="lg:col-span-5 bg-white p-6 border border-[#e7bdd5] shadow-xs"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#9c438b] mb-1">
                ĐẶT LỊCH SOI DA & TƯ VẤN BÁC SĨ 1:1
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Nhận ngay ưu đãi giảm 20% khi đăng ký lịch hẹn trực tuyến hôm nay.
              </p>
              {bookingSubmitted ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#16a34a] mx-auto" />
                  <p className="text-xs font-bold text-[#3b2d38]">
                    Đã ghi nhận lịch hẹn tại {data.business.name}!
                  </p>
                  <p className="text-xs text-stone-500">
                    Bộ phận lễ tân sẽ liên hệ xác nhận qua số điện thoại của bạn trong 5 phút.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên quý khách *"
                    className="w-full border border-[#e5cbd9] px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#9c438b]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full border border-[#e5cbd9] px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#9c438b]"
                  />
                  <select
                    value={selectedServiceTitle}
                    onChange={(e) => setSelectedServiceTitle(e.target.value)}
                    className="w-full border border-[#e5cbd9] px-3.5 py-2.5 text-xs text-[#3b2d38] focus:outline-none focus:border-[#9c438b]"
                  >
                    <option value="Hydralift Skin - Tăng sinh Collagen">
                      Liệu trình: Hydralift Skin - Tăng sinh Collagen
                    </option>
                    {servicesList.map((s) => (
                      <option key={s.id} value={s.title}>
                        Liệu trình: {s.title}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#9c438b] hover:bg-[#823373] text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors cursor-pointer"
                  >
                    GỬI YÊU CẦU ĐẶT LỊCH
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHITE 4-COLUMN FOOTER + LOTUS SEAL + PURPLE COPYRIGHT BAR */}
      <footer id="lien-he" className="bg-white pt-14 text-xs text-[#5c4a58]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#f0dce8]">
            {/* Col 1: Thông tin liên hệ */}
            <div>
              <h4 className="text-sm font-normal uppercase text-[#3b2d38] mb-3 pb-2 border-b border-[#f0dce8]">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#9c438b] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#9c438b] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#9c438b]"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#9c438b] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-[#9c438b] break-all"
                  >
                    {primaryEmail}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#9c438b] shrink-0" />
                  <span>Tư vấn trực tuyến 24/7</span>
                </li>
              </ul>
            </div>

            {/* Col 2: Về Orient Skincare */}
            <div>
              <h4 className="text-sm font-normal uppercase text-[#3b2d38] mb-3 pb-2 border-b border-[#f0dce8]">
                VỀ {data.business.name.toUpperCase()}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#trang-chu" className="hover:text-[#9c438b]">
                    Giới thiệu viện điều trị
                  </a>
                </li>
                <li>
                  <a href="#doi-ngu-bac-si" className="hover:text-[#9c438b]">
                    Đội ngũ bác sĩ chuyên khoa
                  </a>
                </li>
                <li>
                  <a href="#cam-nhan" className="hover:text-[#9c438b]">
                    Cảm nhận khách hàng thực tế
                  </a>
                </li>
                <li>
                  <a href="#dat-lich-tu-van" className="hover:text-[#9c438b]">
                    Liên hệ đặt lịch hẹn VIP
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Dịch vụ */}
            <div>
              <h4 className="text-sm font-normal uppercase text-[#3b2d38] mb-3 pb-2 border-b border-[#f0dce8]">
                DỊCH VỤ
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#dich-vu" className="hover:text-[#9c438b]">
                    Điều trị da công nghệ cao
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#9c438b]">
                    Thẩm mỹ không phẫu thuật
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#9c438b]">
                    Chăm sóc da chuyên sâu
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#9c438b]">
                    Spa thư giãn thảo dược
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Khác */}
            <div>
              <h4 className="text-sm font-normal uppercase text-[#3b2d38] mb-3 pb-2 border-b border-[#f0dce8]">
                KHÁC
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#cong-nghe" className="hover:text-[#9c438b]">
                    Dược mỹ phẩm chính hãng
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#9c438b]">
                    Tin tức & cẩm nang làm đẹp
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-4 text-[#5c4a58]">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded bg-stone-100 hover:bg-[#9c438b] hover:text-white flex items-center justify-center font-bold transition-colors"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded bg-stone-100 hover:bg-[#9c438b] hover:text-white flex items-center justify-center transition-colors"
                >
                  ◎
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded bg-stone-100 hover:bg-[#9c438b] hover:text-white flex items-center justify-center transition-colors"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>

          {/* Centered Brand Seal & Business License Info */}
          <div className="py-8 text-center space-y-1.5 text-[11px] text-stone-500">
            <div className="inline-flex flex-col items-center mb-1">
              <Flower2 className="w-8 h-8 text-[#9c438b]" />
              <span className="font-serif text-base font-bold tracking-[0.2em] text-[#8d3b7e] uppercase">
                {data.business.name}
              </span>
            </div>
            <p className="font-semibold text-[#4a3b47]">
              VIỆN ĐIỀU TRỊ & TRẺ HÓA DA CÔNG NGHỆ CAO {data.business.name.toUpperCase()}
            </p>
            <p>{data.business.address}</p>
            <p>
              Giấy phép hoạt động Phòng khám Chuyên khoa Da liễu do Sở Y Tế TP. Hồ Chí Minh cấp
            </p>
          </div>
        </div>

        {/* Bottom Plum-Purple Bar */}
        <div className="bg-[#a64994] text-white/95 text-center py-3 text-[11px]">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>. Bảo lưu mọi quyền.
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-2xl border border-[#e7bdd5]">
            <div className="bg-[#9c438b] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flower2 className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">
                  Đặt Lịch Hẹn Ưu Tiên
                </span>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {bookingSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto" />
                  <h4 className="font-bold text-base text-[#2d252b]">
                    Đặt lịch thành công!
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Cảm ơn quý khách đã chọn <strong>{selectedServiceTitle}</strong> tại{" "}
                    <strong>{data.business.name}</strong>. Chuyên viên sẽ gọi xác nhận ngay.
                  </p>
                  <button
                    onClick={() => setBookingModalOpen(false)}
                    className="bg-[#9c438b] text-white text-xs font-bold uppercase px-6 py-2.5 rounded-full cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#9c438b] mb-1">
                      Liệu trình quan tâm
                    </label>
                    <input
                      type="text"
                      value={selectedServiceTitle}
                      onChange={(e) => setSelectedServiceTitle(e.target.value)}
                      className="w-full bg-[#fdf4f9] border border-[#e5cbd9] px-3.5 py-2.5 text-xs font-semibold text-[#3b2d38]"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên quý khách *"
                    className="w-full border border-[#e5cbd9] px-3.5 py-2.5 text-xs"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại nhận mã ưu đãi -20% *"
                    className="w-full border border-[#e5cbd9] px-3.5 py-2.5 text-xs"
                  />
                  <input
                    type="date"
                    className="w-full border border-[#e5cbd9] px-3.5 py-2.5 text-xs text-stone-600"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#9c438b] hover:bg-[#823373] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-colors cursor-pointer"
                  >
                    Xác nhận đặt lịch (-20%)
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
