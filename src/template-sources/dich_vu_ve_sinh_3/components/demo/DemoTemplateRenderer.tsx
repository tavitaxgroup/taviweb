"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Search,
  Gem,
  Home,
  UserCheck,
  Umbrella,
  Users,
  Leaf,
  Handshake,
  MessageCircle,
  ChevronRight,
  ChevronUp,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  dichVuVeSinh3DefaultData,
  type DichVuVeSinh3Data,
  type DichVuVeSinh3FeaturePoint
} from "@/template-sources/dich_vu_ve_sinh_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: DichVuVeSinh3Data = adaptClonedTemplateData(
    dichVuVeSinh3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [activePillarId, setActivePillarId] = useState(
    data.pillarBanner?.tabs?.[0]?.id || "tab-customer"
  );
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedPlanModal, setSelectedPlanModal] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@cleanmate.vn";
  const heroImages =
    data.hero.images && data.hero.images.length > 0
      ? data.hero.images
      : [data.hero.backgroundImage];

  const circleFeatures =
    data.circleHighlight?.features || dichVuVeSinh3DefaultData.circleHighlight.features;
  const leftFeatures = circleFeatures.filter((f) => f.position.startsWith("left"));
  const rightFeatures = circleFeatures.filter((f) => f.position.startsWith("right"));

  const pillarTabs =
    data.pillarBanner?.tabs || dichVuVeSinh3DefaultData.pillarBanner.tabs;
  const activePillar =
    pillarTabs.find((t) => t.id === activePillarId) || pillarTabs[0];

  const servicesList = data.services || dichVuVeSinh3DefaultData.services || [];
  const statsList = data.stats || dichVuVeSinh3DefaultData.stats || [];
  const galleryList =
    data.galleryServices || dichVuVeSinh3DefaultData.galleryServices || [];
  const testimonials =
    data.testimonials || dichVuVeSinh3DefaultData.testimonials || [];
  const currentTestimonial =
    testimonials[activeTestimonialIdx] || testimonials[0];
  const pricingPlans =
    data.pricingPlans || dichVuVeSinh3DefaultData.pricingPlans || [];
  const footerAlbum =
    data.footerAlbum || dichVuVeSinh3DefaultData.footerAlbum || [];

  const renderFeatureIcon = (icon: DichVuVeSinh3FeaturePoint["icon"]) => {
    switch (icon) {
      case "diamond":
        return <Gem className="w-9 h-9 text-[#5cb85c] stroke-[1.5]" />;
      case "home":
        return <Home className="w-9 h-9 text-[#5cb85c] stroke-[1.5]" />;
      case "user":
        return <UserCheck className="w-9 h-9 text-[#5cb85c] stroke-[1.5]" />;
      case "umbrella":
        return <Umbrella className="w-9 h-9 text-[#5cb85c] stroke-[1.5]" />;
    }
  };

  const renderPillarIcon = (icon: "users" | "leaf" | "handshake") => {
    switch (icon) {
      case "users":
        return <Users className="w-8 h-8" />;
      case "leaf":
        return <Leaf className="w-8 h-8" />;
      case "handshake":
        return <Handshake className="w-8 h-8" />;
    }
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedPlanModal(null);
    }, 2200);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#5cb85c] selection:text-white"
    >
      {/* 1. HERO + TRANSPARENT TOPBAR & CENTER-LOGO NAVBAR (Matches VS006) */}
      <section className="relative min-h-[560px] lg:min-h-[650px] flex flex-col justify-between overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${heroImages[heroSlideIndex] || data.hero.backgroundImage}')`
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Header Wrapper */}
        <header className="relative z-20">
          {/* Top Utility Strip */}
          <div className="bg-black/35 border-b border-white/15 text-white/90 text-xs">
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#5cb85c]" />
                  <span className="truncate max-w-[260px] sm:max-w-none">
                    {data.business.address}
                  </span>
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-[#5cb85c] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5cb85c]" />
                  {primaryPhone}
                </a>
                <span className="hidden md:flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#5cb85c]" />
                  {data.business.workingHours || "08.00 am - 05.00 pm"}
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <a
                  href="#contact"
                  aria-label="Facebook"
                  className="hover:text-[#5cb85c] transition-colors font-semibold"
                >
                  f
                </a>
                <a
                  href="#contact"
                  aria-label="Instagram"
                  className="hover:text-[#5cb85c] transition-colors font-semibold"
                >
                  ig
                </a>
                <a
                  href="#contact"
                  aria-label="Twitter"
                  className="hover:text-[#5cb85c] transition-colors font-semibold"
                >
                  tw
                </a>
              </div>
            </div>
          </div>

          {/* Center-Logo Navigation Bar */}
          <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
            {/* Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-white">
              <a href="#top" className="text-[#7fe57f] transition-colors">
                TRANG CHỦ
              </a>
              <a href="#about" className="hover:text-[#7fe57f] transition-colors">
                GIỚI THIỆU
              </a>
              <a href="#services" className="hover:text-[#7fe57f] transition-colors">
                DỊCH VỤ
              </a>
            </nav>

            {/* Center Brand Logo */}
            <a
              href="#top"
              className="flex items-center gap-2.5 text-white group mx-auto lg:mx-0"
            >
              <div className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center bg-white/10 group-hover:bg-[#5cb85c] transition-colors">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-widest uppercase">
                {data.business.name}
              </span>
            </a>

            {/* Right Nav Links */}
            <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-white">
              <a href="#projects" className="hover:text-[#7fe57f] transition-colors">
                DỰ ÁN
              </a>
              <a href="#pricing" className="hover:text-[#7fe57f] transition-colors">
                BẢNG GIÁ
              </a>
              <a href="#contact" className="hover:text-[#7fe57f] transition-colors">
                LIÊN HỆ
              </a>
              <a
                href="#pricing"
                aria-label="Tìm kiếm"
                className="hover:text-[#7fe57f] transition-colors"
              >
                <Search className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-md bg-black/30"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#222528]/95 backdrop-blur-md text-white px-6 py-4 space-y-3 border-t border-white/10">
              <a
                href="#top"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold text-[#5cb85c]"
              >
                TRANG CHỦ
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold"
              >
                GIỚI THIỆU
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold"
              >
                DỊCH VỤ
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold"
              >
                DỰ ÁN
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold"
              >
                BẢNG GIÁ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold"
              >
                LIÊN HỆ
              </a>
            </div>
          )}
        </header>

        {/* Center Hero Headlines */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center my-auto py-14">
          <p className="text-white/95 text-sm sm:text-base font-semibold mb-3 tracking-wide drop-shadow">
            {data.hero.subtitle}
          </p>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-[46px] font-bold uppercase leading-tight tracking-wide whitespace-pre-line drop-shadow-md">
            {data.hero.title}
          </h1>
          <div className="mt-8">
            <a
              href={data.hero.ctaLink || "#pricing"}
              className="inline-block bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-sm font-medium px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            >
              {data.hero.ctaText}
            </a>
          </div>
        </div>

        {/* Hero Dots */}
        <div className="relative z-10 flex items-center justify-center gap-2 pb-6">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setHeroSlideIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                heroSlideIndex === idx
                  ? "bg-white scale-110"
                  : "bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. LÝ DO CHỌN CHÚNG TÔI (Center Circular Photo + 4 Corner Features) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#222222]">
              {data.circleHighlight.sectionTitle}
            </h2>
            <div className="w-12 h-0.5 bg-[#5cb85c] mx-auto my-3.5" />
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.circleHighlight.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
            {/* Left 2 Features (Right-Aligned on Desktop) */}
            <div className="lg:col-span-4 space-y-10">
              {leftFeatures.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center lg:items-end text-center lg:text-right"
                >
                  <div className="mb-3">{renderFeatureIcon(item.icon)}</div>
                  <h3 className="text-sm font-bold uppercase text-[#222222] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Circular Framed Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full p-3 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden">
                <img
                  src={data.circleHighlight.centerImage}
                  alt={data.circleHighlight.sectionTitle}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right 2 Features (Left-Aligned on Desktop) */}
            <div className="lg:col-span-4 space-y-10">
              {rightFeatures.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="mb-3">{renderFeatureIcon(item.icon)}</div>
                  <h3 className="text-sm font-bold uppercase text-[#222222] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#about"
              className="inline-block bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-semibold px-7 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </section>

      {/* 3. DARK PARALLAX BANNER: LÝ DO CHỌN CHÚNG TÔI (3 Interactive Pillar Icons) */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${data.pillarBanner.backgroundImage}')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
            {data.pillarBanner.title}
          </h2>
          <div className="w-12 h-0.5 bg-[#5cb85c] mx-auto my-3.5" />
          <p className="text-xs sm:text-sm text-white/85 max-w-2xl mx-auto">
            {data.pillarBanner.subtitle}
          </p>

          {/* 3 Icon Tabs */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 my-10">
            {pillarTabs.map((tab) => {
              const isActive = tab.id === activePillar.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActivePillarId(tab.id)}
                  className="group flex flex-col items-center gap-2.5 focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#5cb85c] text-white scale-110 shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {renderPillarIcon(tab.icon)}
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider pb-1 border-b-2 transition-all ${
                      isActive
                        ? "border-[#5cb85c] text-white"
                        : "border-transparent text-white/75 group-hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl mx-auto">
            {activePillar?.content}
          </p>
        </div>
      </section>

      {/* 4. CÁC DỊCH VỤ TUYỆT VỜI (3 Service Cards) */}
      <section id="services" className="py-16 sm:py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#222222]">
              CÁC DỊCH VỤ TUYỆT VỜI
            </h2>
            <div className="w-12 h-0.5 bg-[#5cb85c] mx-auto my-3.5" />
            <p className="text-xs sm:text-sm text-slate-500">
              Giải pháp vệ sinh chuyên biệt được thiết kế tối ưu cho từng không gian căn hộ, biệt thự và văn phòng hiện đại.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {servicesList.slice(0, 3).map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-sm shadow-[0_2px_15px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 text-center">
                  <h3 className="text-sm font-bold uppercase text-[#333333] tracking-wide">
                    {srv.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#5cb85c] mx-auto my-3" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GIỚI THIỆU (3-Photo Asymmetric Collage Left + Centered Story Right) */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 3-Photo Collage */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-3.5">
              <div className="col-span-8 h-[320px] sm:h-[380px] overflow-hidden">
                <img
                  src={data.aboutCollage.tallImage}
                  alt="Không gian sống sạch đẹp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-4 flex flex-col gap-3.5 h-[320px] sm:h-[380px]">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={data.aboutCollage.smallTopImage}
                    alt="Thiết bị làm sạch"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <img
                    src={data.aboutCollage.smallBottomImage}
                    alt="Chăm sóc cây xanh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 text-center px-2 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#222222]">
                {data.business.aboutTitle || data.aboutCollage.title}
              </h2>
              <div className="w-12 h-0.5 bg-[#5cb85c] mx-auto my-3.5" />
              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-4">
                {data.aboutCollage.leadText}
              </p>
              <div className="space-y-3 text-xs text-slate-500 leading-relaxed">
                {(data.business.aboutText?.length
                  ? data.business.aboutText
                  : data.aboutCollage.paragraphs
                ).map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
              <div className="mt-7">
                <a
                  href="#pricing"
                  className="inline-block bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-semibold px-7 py-2.5 rounded-full transition-colors shadow-sm"
                >
                  {data.aboutCollage.ctaText || "Xem thêm"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATS COUNTER BANNER WITH CORNER BRACKETS */}
      <section className="relative py-14 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.statsBannerImage}')` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsList.slice(0, 4).map((stat) => (
              <div
                key={stat.id}
                className="relative py-7 px-4 text-center text-white"
              >
                {/* Top-Left Bracket */}
                <span className="absolute top-0 left-0 w-16 h-6 border-t border-l border-white/60 pointer-events-none" />
                {/* Top-Right Bracket */}
                <span className="absolute top-0 right-0 w-16 h-6 border-t border-r border-white/60 pointer-events-none" />
                {/* Bottom-Right Bracket */}
                <span className="absolute bottom-0 right-0 w-16 h-6 border-b border-r border-white/60 pointer-events-none" />

                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-white/90 font-medium">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CÁC DỊCH VỤ TUYỆT VỜI / DỰ ÁN THỰC TẾ (3 Gallery Cards + Horizontal Strip) */}
      <section id="projects" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#222222]">
              CÁC DỊCH VỤ TUYỆT VỜI
            </h2>
            <div className="w-12 h-0.5 bg-[#5cb85c] mx-auto my-3.5" />
            <p className="text-xs sm:text-sm text-slate-500">
              Hình ảnh thực tế đội ngũ kỹ thuật viên triển khai làm sạch nội thất, chăm sóc cảnh quan và chuyển dọn trọn gói.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryList.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[16/10] overflow-hidden bg-slate-100 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#7fe57f] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold mt-0.5">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal CTA Bar */}
          <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <p className="text-sm sm:text-base font-medium text-slate-600">
              Xem thêm các dịch vụ của chúng tôi
            </p>
            <a
              href="#pricing"
              className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-semibold px-7 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIAL PARALLAX BANNER */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.testimonialBannerImage}')` }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-5 h-5 text-white fill-white" />
          </div>

          <blockquote className="text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            “{currentTestimonial?.content}”
          </blockquote>

          <div className="w-8 h-0.5 bg-[#5cb85c] mx-auto my-4" />

          <div className="text-xs font-bold uppercase tracking-widest text-white/90">
            {currentTestimonial?.author}
          </div>

          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTestimonialIdx(idx)}
                  aria-label={`Đánh giá ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeTestimonialIdx === idx
                      ? "bg-[#5cb85c] w-5"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 9. PRICING CARDS SECTION (LÝ DO CHỌN CHÚNG TÔI / BẢNG GIÁ) */}
      <section id="pricing" className="py-16 sm:py-20 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#222222]">
              LÝ DO CHỌN CHÚNG TÔI
            </h2>
            <div className="w-12 h-0.5 bg-[#5cb85c] mx-auto my-3.5" />
            <p className="text-xs sm:text-sm text-slate-500">
              Lựa chọn gói dịch vụ vệ sinh định kỳ phù hợp với diện tích và nhu cầu thực tế của gia đình bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="relative bg-white rounded-2xl p-8 text-center shadow-[0_6px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between border border-slate-100 overflow-hidden"
              >
                {/* Green Corner Accents Matching VS006 */}
                <span className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#5cb85c] rounded-tl-2xl pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#5cb85c] rounded-br-2xl pointer-events-none" />

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#222222] mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-light text-[#5cb85c] tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 mb-6">
                    {plan.unit}
                  </div>

                  <ul className="space-y-3 text-xs text-slate-600 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedPlanModal(plan.name)}
                    className="bg-[#f2f2f2] hover:bg-[#5cb85c] text-slate-600 hover:text-white text-xs font-semibold px-8 py-2.5 rounded-full transition-colors"
                  >
                    Mua gói
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DARK CONTACT STRIP + 4-COLUMN FOOTER */}
      <footer id="contact" className="bg-[#2e3236] text-slate-300">
        {/* Top Contact Info Bar */}
        <div className="bg-[#25282b] border-b border-white/10 py-6">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-[#5cb85c] shrink-0 stroke-[1.5]" />
              <div>
                <div className="text-xs font-bold uppercase text-white/70">
                  GỌI NGAY CHO CHÚNG TÔI
                </div>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-bold text-white hover:text-[#5cb85c]"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-[#5cb85c] shrink-0 stroke-[1.5]" />
              <div>
                <div className="text-xs font-bold uppercase text-white/70">
                  ĐỊA CHỈ VĂN PHÒNG
                </div>
                <div className="text-xs text-white font-medium">
                  {data.business.address}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-[#5cb85c] shrink-0 stroke-[1.5]" />
              <div>
                <div className="text-xs font-bold uppercase text-white/70">
                  EMAIL
                </div>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-xs sm:text-sm font-bold text-white hover:text-[#5cb85c]"
                >
                  {primaryEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Main Footer */}
        <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
          {/* Column 1: Về chúng tôi */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Về chúng tôi</h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              {data.business.aboutText?.[0]}
            </p>
            <a
              href="#about"
              className="inline-block bg-[#3e4348] hover:bg-[#5cb85c] text-white text-xs font-medium px-5 py-2 rounded-full transition-colors"
            >
              Xem thêm
            </a>
          </div>

          {/* Column 2: Các dịch vụ */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Các dịch vụ</h4>
            <ul className="space-y-2.5 text-slate-400">
              {(data.business.highlights || [
                "Vệ sinh mái nhà",
                "Dọn dẹp nhà tắm",
                "Dọn hồ bơi",
                "Vệ sinh nhà bếp",
                "Lau bụi cửa sổ",
                "Bảo vệ không gian xanh",
                "Vận chuyển vật dụng"
              ]).map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <a href="#services" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Liên hệ */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Liên hệ</h4>
            <ul className="space-y-3.5 text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
              <li className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{data.business.workingHours || "Thứ 2 - Thứ 6: 08:00 - 17:00"}</span>
              </li>
              <li className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Thứ 7 & Chủ Nhật: Phục vụ theo lịch hẹn</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Album */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Album</h4>
            <div className="grid grid-cols-3 gap-2">
              {footerAlbum.slice(0, 6).map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden bg-slate-700"
                >
                  <img
                    src={imgUrl}
                    alt={`Hình ảnh thực tế ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-[#222528] py-4 text-center text-[11px] text-slate-400 relative">
          <div className="max-w-6xl mx-auto px-4">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>. Thiết kế và chuẩn hóa hệ thống dịch vụ chuyên nghiệp.
          </div>
          <a
            href="#top"
            aria-label="Lên đầu trang"
            className="hidden sm:flex fixed bottom-5 right-5 w-9 h-9 rounded-full bg-white/15 hover:bg-[#5cb85c] text-white items-center justify-center transition-colors z-30"
          >
            <ChevronUp className="w-4 h-4" />
          </a>
        </div>
      </footer>

      {/* QUICK PLAN BOOKING MODAL */}
      {selectedPlanModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPlanModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#5cb85c] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Đăng ký thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyên viên {data.business.name} sẽ liên hệ xác nhận lịch khảo sát trong 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5cb85c]">
                    Đặt lịch dịch vụ
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {selectedPlanModal}
                  </h3>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Họ và tên quý khách
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#5cb85c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Số điện thoại liên hệ
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#5cb85c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Địa chỉ căn hộ / nhà phố
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Số nhà, đường, quận/huyện..."
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#5cb85c]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full transition-colors"
                >
                  Xác nhận đăng ký gói
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
