"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  ArrowRight,
  ArrowUpRight,
  Play,
  Award,
  Sparkles,
  ThumbsUp,
  Users,
  Scissors,
  HeartHandshake,
  Calendar,
  MessageSquare,
  User,
  CheckCircle2,
  X,
  Menu,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  salonToc2DefaultData,
  type SalonToc2TemplateData
} from "@/template-sources/salon_toc_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: SalonToc2TemplateData = adaptClonedTemplateData(
    salonToc2DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [videoOpen, setVideoOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<
    NonNullable<SalonToc2TemplateData["services"]>[number] | null
  >(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [bookingForm, setBookingForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    service: "Spa & Massage",
    date: "",
    time: "10:00 Sáng"
  });

  const primaryPhone = data.business.phone?.[0] || "031 3728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "Elegance Nail & Hair";

  const services = data.services || [];
  const leftServices = services.slice(0, 2);
  const rightServices = services.slice(2, 4);

  const FloralOrnament = ({ light = false }: { light?: boolean }) => (
    <div className="flex items-center justify-center gap-2 my-1.5">
      <span
        className={`w-10 h-[1px] ${
          light ? "bg-white/40" : "bg-[#b57c56]/40"
        }`}
      />
      <span
        className={`text-xs ${light ? "text-white" : "text-[#b57c56]"}`}
      >
        ❖
      </span>
      <span
        className={`w-10 h-[1px] ${
          light ? "bg-white/40" : "bg-[#b57c56]/40"
        }`}
      />
    </div>
  );

  const renderStatIcon = (idx: number) => {
    const cls = "w-7 h-7 text-[#b57c56] stroke-[1.4]";
    switch (idx % 4) {
      case 0:
        return <Award className={cls} />;
      case 1:
        return <Sparkles className={cls} />;
      case 2:
        return <ThumbsUp className={cls} />;
      default:
        return <Users className={cls} />;
    }
  };

  const renderExpIcon = (type: string) => {
    const cls = "w-6 h-6 text-[#b57c56] stroke-[1.5]";
    switch (type) {
      case "tools":
        return <Scissors className={cls} />;
      case "location":
        return <MapPin className={cls} />;
      default:
        return <HeartHandshake className={cls} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#b57c56] selection:text-white">
      {/* 1. TERRACOTTA TOP UTILITY BAR */}
      <div className="bg-[#b57c56] text-white text-[11px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:opacity-90"
            >
              <Phone className="w-3 h-3" />
              <span>{primaryPhone}</span>
            </a>
            <span className="hidden sm:inline opacity-40">|</span>
            <a
              href={`mailto:${primaryEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:opacity-90"
            >
              <Mail className="w-3 h-3" />
              <span>{primaryEmail}</span>
            </a>
            <span className="hidden lg:inline opacity-40">|</span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              <span>{data.business.address}</span>
            </span>
            <span className="hidden md:inline opacity-40">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{data.business.workingHours || "T2 - T6: 9h00 - 18h00"}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span>Theo dõi:</span>
            <a
              href="#lien-he"
              className="font-bold hover:opacity-80 transition-opacity"
            >
              f
            </a>
          </div>
        </div>
      </div>

      {/* 2. DARK CHARCOAL MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#1b1b1b] text-white shadow-md">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* White Pill Logo with Script Typography */}
          <a
            href="#trang-chu"
            className="bg-white px-5 py-2 rounded-sm inline-flex items-center justify-center shrink-0 shadow-xs"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-7 w-auto object-contain"
              />
            ) : (
              <span className="font-serif italic font-bold text-xl sm:text-2xl text-[#e28fa3] tracking-wide">
                {brandName.split(" ")[0] || "Elegance"}
              </span>
            )}
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-zinc-200">
            <a
              href="#trang-chu"
              className="text-[#d69870] transition-colors"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#d69870] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#d69870] transition-colors"
            >
              DỊCH VỤ
            </a>
            <a
              href="#kinh-nghiem"
              className="hover:text-[#d69870] transition-colors"
            >
              ĐỘI NGŨ
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#d69870] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#d69870] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Search + Terracotta CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#bang-gia"
              aria-label="Tìm kiếm dịch vụ"
              className="w-9 h-9 rounded-full bg-[#2a2a2a] hover:bg-[#b57c56] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>

            <a
              href="#dat-lich"
              className="hidden sm:inline-flex items-center gap-2 bg-[#b57c56] hover:bg-[#9f6a46] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
            >
              <span>ĐĂNG KÝ NGAY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              className="lg:hidden p-1.5 text-zinc-200 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#222222] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#d69870]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-200"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-200"
            >
              DỊCH VỤ
            </a>
            <a
              href="#bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-200"
            >
              BẢNG GIÁ
            </a>
            <a
              href="#dat-lich"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-200"
            >
              ĐẶT LỊCH HẸN
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-200"
            >
              TIN TỨC
            </a>
          </div>
        )}
      </header>

      {/* 3. SOFT BLUSH-PEACH HERO SECTION */}
      <section
        id="trang-chu"
        className="relative bg-[#f6e5dc] overflow-hidden pt-10 pb-12 sm:py-16"
      >
        {/* Decorative Botanical Circle Accents */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8c5a38] mb-3">
                <span>♛</span>
                <span>{data.hero.eyebrow}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-medium text-[#1b1b1b] leading-[1.15] mb-4">
                <span className="block">
                  {data.hero.title.includes("LÀM MÓNG")
                    ? "NGHỆ THUẬT"
                    : data.hero.title}
                </span>
                {data.hero.title.includes("LÀM MÓNG") && (
                  <span className="inline-flex items-center gap-3 mt-1">
                    <img
                      src={data.heroBadgeIconImage}
                      alt="Nail Art"
                      className="w-14 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <span>LÀM MÓNG</span>
                  </span>
                )}
              </h1>

              <p className="text-xs sm:text-sm text-[#66554b] leading-relaxed max-w-md mb-6">
                {data.hero.subtitle}
              </p>

              <a
                href={data.hero.ctaLink || "#dich-vu"}
                className="inline-flex items-center gap-2 bg-[#b57c56] hover:bg-[#9f6a46] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* 3 Circular Stylist Avatars */}
              <div className="flex items-center gap-3 mt-10">
                {(data.heroStylistAvatars || []).map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Stylist ${idx + 1}`}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                  />
                ))}
                <span className="text-xs text-[#7a6457] font-medium ml-1">
                  +36 Chuyên viên tạo mẫu giàu kinh nghiệm
                </span>
              </div>
            </div>

            {/* Right Hero Portrait in Soft Circular Frame */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#edd2c4] p-3 shadow-xl">
                <img
                  src={data.heroRightPortrait}
                  alt={brandName}
                  className="w-full h-full rounded-full object-cover object-center"
                />
                {/* Floating Pink Flower Accent Badge */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-full shadow-lg border border-[#f0d8cb] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#e28fa3]" />
                  <span className="text-xs font-serif font-bold text-[#222222]">
                    100% Sơn Gel Hữu Cơ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US + VIDEO + 4 STATS ("Bước Nhẹ Đến Thế Giới Hoàn Hảo với Nghệ Thuật Làm Nail") */}
      <section id="gioi-thieu" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          {/* Top Centered Intro */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold text-[#b57c56]">
              Về Chúng Tôi
            </p>
            <FloralOrnament />
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1b1b1b] leading-snug mt-2 mb-4">
              {data.business.aboutTitle || data.aboutIntroHeading}
            </h2>
            <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed mb-7">
              {data.business.aboutText?.[0]}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#dich-vu"
                className="inline-flex items-center gap-2 bg-[#b57c56] hover:bg-[#9f6a46] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                <span>GIỚI THIỆU CHUNG</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#dat-lich"
                className="inline-flex items-center gap-2 border border-[#b57c56] text-[#b57c56] hover:bg-[#b57c56] hover:text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 transition-colors"
              >
                <span>LIÊN HỆ NGAY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom Split: Video Card Left + 2x2 Stats Grid Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div
                onClick={() => setVideoOpen(true)}
                className="group relative aspect-[16/10] overflow-hidden bg-[#f5ebe4] cursor-pointer shadow-md"
              >
                <img
                  src={data.aboutVideoImage}
                  alt="Video giới thiệu salon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/85 group-hover:bg-white text-[#b57c56] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-[#b57c56] ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {(data.stats || []).map((st, idx) => (
                <div
                  key={st.id}
                  className="bg-[#fdfbfa] border border-[#f0e6de] p-5 text-center flex flex-col items-center justify-center hover:border-[#b57c56] transition-colors"
                >
                  <div className="mb-2">{renderStatIcon(idx)}</div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1b1b1b] mb-1">
                    {st.number}
                  </div>
                  <p className="text-[11px] text-[#777777] leading-snug">
                    {st.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL SPA & NAIL SERVICES ("Dịch Vụ Spa và Làm Đẹp Chuyên Nghiệp") */}
      <section id="dich-vu" className="py-16 sm:py-20 bg-[#f8f3ee]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#b57c56]">Dịch Vụ</p>
            <FloralOrnament />
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1b1b1b] mt-1">
              Dịch Vụ Spa và Làm Đẹp Chuyên Nghiệp
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 2 Service Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {leftServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className="bg-white p-3 shadow-xs hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-3">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#1b1b1b] group-hover:text-[#b57c56] transition-colors">
                      {srv.title}
                    </h3>
                    <span className="w-6 h-6 rounded-full border border-[#e5d5c8] text-[#b57c56] flex items-center justify-center group-hover:bg-[#b57c56] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Floral & Nail Polish Showcase Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img
                  src={data.servicesCenterImage}
                  alt="Nghệ thuật chăm sóc móng"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 2 Service Cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {rightServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className="bg-white p-3 shadow-xs hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-3">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#1b1b1b] group-hover:text-[#b57c56] transition-colors">
                      {srv.title}
                    </h3>
                    <span className="w-6 h-6 rounded-full border border-[#e5d5c8] text-[#b57c56] flex items-center justify-center group-hover:bg-[#b57c56] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. 25 YEARS EXPERIENCE ("Chúng tôi có 25 năm kinh nghiệm trong lĩnh vực làm đẹp móng.") */}
      <section id="kinh-nghiem" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy & 3 Features */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#b57c56] mb-2">
                <span>Về Chúng Tôi</span>
                <span>❖───</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1b1b1b] leading-snug mb-4">
                {data.experienceHeading}
              </h2>
              <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed mb-7">
                {data.experienceDescription}
              </p>

              <div className="space-y-5">
                {(data.experienceFeatures || []).map((feat) => (
                  <div key={feat.id} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#fdf6f1] border border-[#f0dfd3] flex items-center justify-center shrink-0">
                      {renderExpIcon(feat.icon)}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#1b1b1b] mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arch Portrait */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-t-full overflow-hidden bg-[#ebd5c7] border-8 border-[#faf4f0] shadow-xl">
                <img
                  src={data.experiencePortrait}
                  alt="25 năm kinh nghiệm làm đẹp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING MENU ("Chăm Sóc Móng & Tay — Các Dịch Vụ và Giá Trị Phục Vụ Cho Móng Của Chúng Tôi") */}
      <section id="bang-gia" className="py-16 sm:py-20 bg-[#f9efe8]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Manicured Hands Photo */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <img
                  src={data.pricingLeftImage}
                  alt="Bảng giá dịch vụ chăm sóc móng"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Pricing Table */}
            <div className="lg:col-span-6">
              <div className="text-center mb-8">
                <p className="text-xs font-semibold text-[#b57c56]">
                  Chăm Sóc Móng & Tay
                </p>
                <FloralOrnament />
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1b1b1b] leading-snug">
                  {data.pricingHeading}
                </h2>
              </div>

              <div className="space-y-4">
                {(data.priceList || []).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-baseline justify-between gap-4 pb-3 border-b border-[#e5d4c8]"
                  >
                    <div>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-[#1b1b1b]">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[#777777]">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1b1b1b] shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT BOOKING SECTION ("Đặt Lịch Hẹn — Trải Nghiệm của Dịch Vụ Làm Móng") */}
      <section id="dat-lich" className="relative bg-white pb-16">
        {/* Terracotta Top Half Band */}
        <div className="bg-[#b57c56] pt-14 pb-24 lg:pb-28 text-white">
          <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
            <div className="lg:w-5/12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 mb-2">
                <span>Đặt Lịch Hẹn</span>
                <span>❖───</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl leading-snug">
                {data.bookingHeading}
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Half White + Overlapping Blush Form Card */}
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 -mt-16 lg:-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Working Hours Box */}
            <div className="lg:col-span-5 pt-20 lg:pt-36">
              <h3 className="font-serif text-xl font-bold text-[#1b1b1b] mb-2">
                Giờ làm việc:
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {data.bookingHoursDescription}
              </p>
              <ul className="space-y-2 text-xs text-[#444444]">
                {(data.bookingHoursList || []).map((hr, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b57c56]" />
                    <span>{hr}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Overlapping Form Card */}
            <div className="lg:col-span-7 bg-[#f5e6dc] p-6 sm:p-8 shadow-xl border-4 border-white">
              {bookingSubmitted ? (
                <div className="bg-white p-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#b57c56] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#1b1b1b]">
                    Đặt Lịch Hẹn Thành Công!
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Cảm ơn{" "}
                    <strong>
                      {bookingForm.lastName} {bookingForm.firstName}
                    </strong>
                    . Lễ tân của {brandName} sẽ gọi xác nhận khung giờ{" "}
                    <strong>{bookingForm.time}</strong> cho bạn ngay!
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingSubmitted(false)}
                    className="bg-[#b57c56] text-white text-xs font-bold uppercase px-6 py-2.5"
                  >
                    Đặt lịch hẹn khác
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      required
                      value={bookingForm.lastName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          lastName: e.target.value
                        })
                      }
                      placeholder="Họ"
                      className="bg-white px-4 py-3 text-xs text-[#222222] focus:outline-none border border-transparent focus:border-[#b57c56]"
                    />
                    <input
                      type="text"
                      required
                      value={bookingForm.firstName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          firstName: e.target.value
                        })
                      }
                      placeholder="Tên"
                      className="bg-white px-4 py-3 text-xs text-[#222222] focus:outline-none border border-transparent focus:border-[#b57c56]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="email"
                      value={bookingForm.email}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          email: e.target.value
                        })
                      }
                      placeholder="Địa chỉ Email"
                      className="bg-white px-4 py-3 text-xs text-[#222222] focus:outline-none border border-transparent focus:border-[#b57c56]"
                    />
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          phone: e.target.value
                        })
                      }
                      placeholder="Số điện thoại"
                      className="bg-white px-4 py-3 text-xs text-[#222222] focus:outline-none border border-transparent focus:border-[#b57c56]"
                    />
                  </div>

                  <select
                    value={bookingForm.service}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        service: e.target.value
                      })
                    }
                    className="w-full bg-white px-4 py-3 text-xs text-[#444444] focus:outline-none border border-transparent focus:border-[#b57c56]"
                  >
                    <option>Spa & Massage Tay Chân</option>
                    <option>Chăm Sóc Móng Tay (Manicure)</option>
                    <option>Vẽ Móng Nghệ Thuật & Đính Đá</option>
                    <option>Đắp Gel & Nối Móng Tự Nhiên</option>
                    <option>Ủ Sáp Paraffin Trẻ Hóa Da Tay</option>
                  </select>

                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        date: e.target.value
                      })
                    }
                    className="w-full bg-white px-4 py-3 text-xs text-[#444444] focus:outline-none border border-transparent focus:border-[#b57c56]"
                  />

                  <select
                    value={bookingForm.time}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        time: e.target.value
                      })
                    }
                    className="w-full bg-white px-4 py-3 text-xs text-[#444444] focus:outline-none border border-transparent focus:border-[#b57c56]"
                  >
                    <option>Chọn thời gian: 09:30 Sáng</option>
                    <option>Chọn thời gian: 11:00 Sáng</option>
                    <option>Chọn thời gian: 14:00 Chiều</option>
                    <option>Chọn thời gian: 16:30 Chiều</option>
                    <option>Chọn thời gian: 18:00 Tối</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-[#b57c56] hover:bg-[#9f6a46] text-white text-xs font-bold uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>ĐẶT MỘT CUỘC HẸN</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PARTNER LOGOS + TERRACOTTA NEWSLETTER BANNER */}
      <section className="relative bg-white pt-6">
        {/* Center Divider Badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="w-32 sm:w-56 h-[1px] bg-[#eadbd0]" />
          <span className="w-8 h-8 rounded-full bg-[#b57c56] text-white flex items-center justify-center mx-3 text-xs shadow">
            ❀
          </span>
          <span className="w-32 sm:w-56 h-[1px] bg-[#eadbd0]" />
        </div>

        {/* 6 Spa Partner Logos Bar */}
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 relative z-20 -mb-10">
          <div className="bg-[#f9f3ee] border border-[#ede0d5] py-6 px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center shadow-sm">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="flex flex-col items-center justify-center"
              >
                <Sparkles className="w-5 h-5 text-[#b57c56] mb-1 stroke-[1.5]" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#554438]">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Width Terracotta Newsletter Banner */}
        <div className="bg-[#b57c56] pt-20 pb-14 text-white overflow-hidden">
          <div className="max-w-[1060px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <img
                src={data.newsletterModelImage}
                alt="Đăng ký nhận ưu đãi làm đẹp"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white/30 shadow-lg"
              />
            </div>

            <div className="lg:col-span-8 text-center">
              <p className="text-xs font-semibold text-white/90">
                Đăng Ký Nhận Bản Tin
              </p>
              <FloralOrnament light />
              <h2 className="font-serif text-2xl sm:text-4xl leading-snug mb-6">
                Đăng Ký Nhận Cập Nhật & Tin Tức Về Chúng Tôi
              </h2>

              {newsletterDone ? (
                <div className="max-w-md mx-auto bg-white/15 border border-white/30 p-3 text-xs font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    Cảm ơn bạn đã đăng ký nhận ưu đãi làm đẹp từ {brandName}!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="max-w-md mx-auto space-y-3"
                >
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Nhập địa chỉ Email"
                      className="w-full bg-white text-[#222222] px-4 py-3 text-xs focus:outline-none"
                    />
                    <Mail className="w-4 h-4 text-[#b57c56] absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#111111] hover:bg-[#2a2a2a] text-white text-[11px] font-bold uppercase tracking-wider px-8 py-3 inline-flex items-center gap-2 transition-colors"
                  >
                    <span>GỬI NGAY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CUSTOMER TESTIMONIALS ("Đánh Giá — Đánh giá của khách hàng") */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#b57c56]">Đánh Giá</p>
            <FloralOrnament />
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1b1b1b]">
              Đánh giá của khách hàng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((test) => (
              <div
                key={test.id}
                className="bg-[#f8f5f1] border border-[#efe6dd] p-6 text-center relative flex flex-col items-center"
              >
                <img
                  src={test.avatar}
                  alt={test.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm mb-4"
                />
                <p className="text-xs italic text-[#555555] leading-relaxed mb-5">
                  “{test.content}”
                </p>
                <div className="w-12 h-[1px] bg-[#b57c56]/50 mb-3 mt-auto" />
                <h3 className="font-serif text-base font-bold text-[#1b1b1b]">
                  {test.author}
                </h3>
                <span className="text-[11px] text-[#b57c56]">
                  {test.role || "Khách hàng thân thiết"}
                </span>
              </div>
            ))}
          </div>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center mt-14">
            <span className="w-32 sm:w-56 h-[1px] bg-[#eadbd0]" />
            <span className="w-8 h-8 rounded-full bg-[#b57c56] text-white flex items-center justify-center mx-3 text-xs shadow">
              ❀
            </span>
            <span className="w-32 sm:w-56 h-[1px] bg-[#eadbd0]" />
          </div>
        </div>
      </section>

      {/* 11. LATEST BLOG ("Blog — Tin tức mới nhất") */}
      <section id="tin-tuc" className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#b57c56]">Blog</p>
            <FloralOrnament />
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1b1b1b]">
              Tin tức mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => {
              const dateParts = post.date.split(" ");
              const dayNum = dateParts[0] || "17";
              const monthYear = dateParts.slice(1).join(" ") || "Th7, 2026";
              return (
                <article
                  key={post.id}
                  className="bg-[#f8f5f1] border border-[#efe6dd] overflow-hidden group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#b57c56] text-white text-center px-2.5 py-1.5 leading-tight shadow">
                      <span className="block text-sm font-bold">{dayNum}</span>
                      <span className="block text-[9px] opacity-90">
                        {monthYear}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[10px] text-[#888888] mb-2">
                      <span className="inline-flex items-center gap-1">
                        <User className="w-3 h-3 text-[#b57c56]" />
                        Đăng bởi {brandName.split(" ")[0]}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-[#b57c56]" />0
                        Bình luận
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#1b1b1b] group-hover:text-[#b57c56] transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    <a
                      href="#dat-lich"
                      className="mt-auto inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#1b1b1b] hover:text-[#b57c56] transition-colors"
                    >
                      <span>XEM THÊM</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. 7-IMAGE NAIL ART GALLERY STRIP + DARK FOOTER */}
      <footer id="lien-he" className="bg-[#161616] text-zinc-400 text-xs">
        {/* 7-Photo Gallery Strip overlapping top of footer */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 -translate-y-6">
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 bg-white p-2 shadow-xl">
            {(data.galleryStrip || []).map((imgUrl, idx) => (
              <div
                key={idx}
                className={`aspect-square overflow-hidden ${
                  idx >= 3 ? "hidden sm:block" : ""
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Nail Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Footer Body */}
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pt-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-white px-4 py-1.5 rounded-sm inline-block">
                <span className="font-serif italic font-bold text-xl text-[#e28fa3]">
                  {brandName.split(" ")[0] || "Elegance"}
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Tại salon làm đẹp móng của chúng tôi, chúng tôi nhận thức rằng
                mỗi khách hàng đều là cá nhân độc đáo, với sở thích và mong muốn
                riêng về việc làm đẹp móng.
              </p>
              <p className="text-[#d69870] font-semibold">{primaryPhone}</p>
              <p className="text-[#d69870]">{primaryEmail}</p>
              <div className="pt-1">
                <a
                  href="#lien-he"
                  className="w-7 h-7 border border-white/20 inline-flex items-center justify-center text-white hover:bg-[#b57c56]"
                >
                  f
                </a>
              </div>
            </div>

            {/* Col 2: Liên Kết */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-base text-white font-bold mb-4">
                Liên Kết
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#gioi-thieu" className="hover:text-white">
                    → Về Chúng Tôi
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Dịch Vụ Salon
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    → Cẩm Nang Làm Đẹp
                  </a>
                </li>
                <li>
                  <a href="#bang-gia" className="hover:text-white">
                    → Bảng Giá Dịch Vụ
                  </a>
                </li>
                <li>
                  <a href="#dat-lich" className="hover:text-white">
                    → Đặt Lịch Hẹn
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    → Chính Sách Bảo Mật
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Dịch Vụ */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-base text-white font-bold mb-4">
                Dịch Vụ
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Chăm Sóc Tay & Chân
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Đắp Gel & Nối Móng
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Ủ Sáp Ấm Paraffin
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Tạo Mẫu Tóc Nữ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Massage Thư Giãn
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    → Vẽ Móng Nghệ Thuật
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Bài Viết Mới Nhất */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-base text-white font-bold mb-4">
                Bài Viết Mới Nhất
              </h3>
              <div className="space-y-4">
                {(data.news || []).slice(0, 2).map((post) => (
                  <div key={post.id} className="flex items-start gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-14 object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[10px] text-[#d69870] flex items-center gap-1 mb-0.5">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <a
                        href="#tin-tuc"
                        className="text-xs font-bold text-white hover:text-[#d69870] line-clamp-2"
                      >
                        {post.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#23201e] py-4 border-t border-white/10 text-[11px]">
          <div className="max-w-[1060px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © Thiết kế website và lập trình bởi{" "}
              <span className="text-white font-semibold">{brandName}</span>
            </p>
            <div className="flex items-center gap-3">
              <a href="#lien-he" className="hover:text-white">
                Điều Khoản Dịch Vụ
              </a>
              <span>/</span>
              <a href="#lien-he" className="hover:text-white">
                Chính Sách Khách Hàng
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-white border border-[#b57c56] text-[#b57c56] hover:bg-[#b57c56] hover:text-white flex items-center justify-center shadow-md transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* SERVICE QUICK VIEW MODAL */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full overflow-hidden shadow-2xl border-t-4 border-[#b57c56]"
          >
            <div className="aspect-video relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b57c56]">
                {selectedService.category}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1b1b1b] mt-1 mb-2">
                {selectedService.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-4">
                {selectedService.description}
              </p>
              {selectedService.price && (
                <p className="text-sm font-bold text-[#b57c56] mb-5">
                  Giá dịch vụ: {selectedService.price}
                </p>
              )}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 border border-zinc-300 text-xs font-semibold"
                >
                  Đóng
                </button>
                <a
                  href="#dat-lich"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 bg-[#b57c56] text-white text-xs font-bold uppercase"
                >
                  Đặt Lịch Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-lg w-full p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-bold text-[#1b1b1b]">
                Không Gian Làm Đẹp — {brandName}
              </h3>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="text-zinc-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video relative overflow-hidden mb-4">
              <img
                src={data.aboutVideoImage}
                alt={brandName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white p-6 text-center">
                <p className="font-serif text-base font-bold mb-1">
                  Trải Nghiệm Liệu Trình Chăm Sóc Móng & Tóc 5 Sao
                </p>
                <p className="text-xs text-zinc-200">
                  Hotline đặt lịch ưu tiên: {primaryPhone}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="bg-[#b57c56] text-white text-xs font-bold uppercase px-5 py-2"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
