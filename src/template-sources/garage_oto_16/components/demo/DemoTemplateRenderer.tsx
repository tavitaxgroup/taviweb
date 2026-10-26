"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Truck,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Search,
  Menu,
  X,
  Gauge,
  Calendar,
  FileText,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto16DefaultData,
  type GarageOto16Data,
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
  templateSlug?: string;
}

export function DemoTemplateRenderer({
  data: rawData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<GarageOto16Data>(
    rawData,
    garageOto16DefaultData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "xe-nho" | "xe-trung" | "xe-nang"
  >("all");
  const [selectedFleetId, setSelectedFleetId] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "0903 728 397";
  const secondaryPhone = data.business.phone?.[1] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "dieuphoi@thuanthanhtin.vn";

  const filteredFleet =
    activeCategory === "all"
      ? data.fleetItems
      : data.fleetItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1E2259] font-sans selection:bg-[#F36F21] selection:text-white">
      {/* Top Info Bar */}
      <div className="bg-[#1E2259] text-white text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#F36F21]" />
              {data.business.address}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-[#F36F21]" />
              {data.business.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${primaryEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#F36F21] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F36F21]" />
              {primaryEmail}
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#F36F21] bg-white/10 px-2.5 py-1 rounded"
            >
              <Phone className="w-3.5 h-3.5" />
              Hotline: {primaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main White Header matching OTO016 */}
      <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo: 3-Stripe Orange/Navy Emblem + THUẬN THÀNH TÍN */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col items-center justify-center p-1.5 shadow-sm">
              <div className="flex items-end gap-1 mb-1">
                <span className="w-2 h-4 bg-[#F36F21] -skew-x-12 rounded-xs block" />
                <span className="w-2 h-5 bg-[#2B2A7B] -skew-x-12 rounded-xs block" />
                <span className="w-2 h-3.5 bg-[#F36F21] -skew-x-12 rounded-xs block" />
              </div>
              <span className="text-[7px] font-black tracking-tighter text-[#2B2A7B] leading-none">
                THUẬN THÀNH TÍN
              </span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-[#2B2A7B] leading-none">
                THUẬN THÀNH TÍN
              </div>
              <div className="text-[11px] font-semibold text-[#F36F21] tracking-wider uppercase mt-1">
                Auto Fleet &amp; Logistics Center
              </div>
            </div>
          </a>

          {/* Desktop Navigation matching reference */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#1E2259]">
            <a
              href="#gioi-thieu"
              className="hover:text-[#F36F21] transition-colors py-2 border-b-2 border-[#F36F21] text-[#2B2A7B]"
            >
              Về chúng tôi
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#F36F21] transition-colors py-2"
            >
              Dịch vụ ▾
            </a>
            <a
              href="#doi-xe"
              className="hover:text-[#F36F21] transition-colors py-2"
            >
              Đội xe &amp; Bảo dưỡng
            </a>
            <a
              href="#quy-trinh"
              className="hover:text-[#F36F21] transition-colors py-2"
            >
              Tài liệu kỹ thuật
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#F36F21] transition-colors py-2"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#F36F21] transition-colors py-2"
            >
              Liên hệ
            </a>
          </nav>

          {/* Language Badges & Search / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 border border-slate-200 rounded-md px-2 py-1 bg-slate-50">
              <span
                title="Tiếng Việt"
                className="w-5 h-3.5 rounded-xs bg-[#DA251D] flex items-center justify-center text-[8px] text-[#FFFF00] font-bold"
              >
                ★
              </span>
              <span
                title="English"
                className="w-5 h-3.5 rounded-xs bg-[#012169] flex items-center justify-center text-[7px] text-white font-bold opacity-70"
              >
                EN
              </span>
            </div>
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#2B2A7B] hover:text-white text-[#2B2A7B] flex items-center justify-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#lien-he"
              className="bg-[#F36F21] hover:bg-[#d95d14] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-sm transition-all"
            >
              Đặt lịch bảo dưỡng
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#2B2A7B] hover:bg-slate-100"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 text-sm font-bold text-[#1E2259]">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#F36F21]"
            >
              Về chúng tôi
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Dịch vụ vận tải &amp; Xưởng bảo dưỡng
            </a>
            <a
              href="#doi-xe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Đội xe Isuzu / Hino
            </a>
            <a
              href="#quy-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Quy trình kỹ thuật
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-center bg-[#F36F21] text-white rounded-md"
            >
              Liên hệ điều phối: {primaryPhone}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section matching OTO016: Full-Bleed Fleet Yard + Purple/Magenta Ribbon Headlines + Tilted White-Bordered Photo Collage */}
      <section className="relative overflow-hidden bg-[#1E2259] min-h-[560px] lg:min-h-[620px] flex items-center">
        {/* Background Fleet Image */}
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151842]/90 via-[#1E2259]/70 to-[#1E2259]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Purple & Magenta Ribbon Banners matching screenshot */}
            <div className="lg:col-span-7 space-y-5">
              {/* Top Royal Purple Banner */}
              <div className="inline-block bg-[#6D28D9]/95 text-white px-5 py-2.5 rounded-sm shadow-lg border-l-4 border-[#F36F21]">
                <span className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-wide">
                  {data.hero.eyebrow}
                </span>
              </div>

              {/* Main Vibrant Magenta Headline Banner */}
              <div className="bg-gradient-to-r from-[#E11D74]/95 to-[#BE185D]/95 text-white px-6 py-5 rounded-sm shadow-2xl border-l-4 border-white max-w-2xl">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight whitespace-pre-line">
                  {data.hero.title}
                </h1>
              </div>

              <p className="text-slate-100 text-sm sm:text-base max-w-xl leading-relaxed bg-[#1E2259]/75 backdrop-blur-xs p-4 rounded-md border border-white/15">
                {data.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={data.hero.ctaLink}
                  className="inline-flex items-center gap-2 bg-[#F36F21] hover:bg-[#e05e10] text-white font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-md shadow-lg transition-all"
                >
                  {data.hero.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={data.hero.secondaryCtaLink}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-[#2B2A7B] font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-md shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 text-[#F36F21]" />
                  {data.hero.secondaryCtaText}
                </a>
              </div>
            </div>

            {/* Right Column: Tilted White-Bordered Truck Yard Collage matching OTO016 */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Tilted Frame */}
                <div className="bg-white p-2.5 rounded-lg shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={
                      data.heroCollage?.[0] ||
                      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
                    }
                    alt="Đội xe tải Thuận Thành Tín"
                    className="w-full h-56 sm:h-64 object-cover rounded"
                  />
                  <div className="pt-2 px-1 flex items-center justify-between text-xs font-bold text-[#2B2A7B]">
                    <span>ĐỘI XE TẢI ISUZU &amp; HINO CHÍNH HÃNG</span>
                    <span className="text-[#F36F21]">150+ ĐẦU XE</span>
                  </div>
                </div>

                {/* Secondary Overlapping Tilted Frame */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-white p-2 rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform">
                    <img
                      src={
                        data.heroCollage?.[1] ||
                        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80"
                      }
                      alt="Xưởng bảo dưỡng đội xe"
                      className="w-full h-28 object-cover rounded"
                    />
                    <p className="text-[11px] font-bold text-[#1E2259] mt-1.5 truncate">
                      Xưởng Dịch Vụ Chuẩn Hãng
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                    <img
                      src={
                        data.heroCollage?.[2] ||
                        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
                      }
                      alt="Hệ thống kho bãi"
                      className="w-full h-28 object-cover rounded"
                    />
                    <p className="text-[11px] font-bold text-[#1E2259] mt-1.5 truncate">
                      Bãi Xe &amp; Kho Vận 15.000m²
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {data.stats?.map((st) => (
            <div key={st.id} className="p-5 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#2B2A7B]">
                {st.number}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F36F21] mt-1">
                {st.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About & Core Logistics / Maintenance Pillars */}
      <section id="gioi-thieu" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#F36F21] bg-[#F36F21]/10 px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                VỀ THUẬN THÀNH TÍN AUTO
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2B2A7B] leading-tight">
                {data.business.aboutTitle}
              </h2>
              {data.business.aboutText?.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#F36F21] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#1E2259]">
                    Bảo dưỡng định kỳ 100% đầu xe
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#F36F21] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#1E2259]">
                    Giám sát GPS &amp; Camera hành trình
                  </span>
                </div>
              </div>
            </div>

            <div
              id="dich-vu"
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {data.corePillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#2B2A7B] hover:border-[#F36F21] transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#2B2A7B]/10 group-hover:bg-[#F36F21] text-[#2B2A7B] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    {pillar.icon === "wrench" ? (
                      <Wrench className="w-5 h-5" />
                    ) : pillar.icon === "truck" ? (
                      <Truck className="w-5 h-5" />
                    ) : pillar.icon === "shield" ? (
                      <ShieldCheck className="w-5 h-5" />
                    ) : (
                      <Gauge className="w-5 h-5" />
                    )}
                  </div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#F36F21] mb-1">
                    {pillar.metric}
                  </span>
                  <h3 className="text-base font-black text-[#1E2259] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fleet & Commercial Truck Maintenance Showcase */}
      <section id="doi-xe" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F36F21]">
                NĂNG LỰC ĐỘI XE &amp; XƯỞNG KỸ THUẬT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2B2A7B] mt-1">
                ĐỘI XE TẢI THƯƠNG MẠI &amp; GÓI BẢO DƯỠNG
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "Tất cả đội xe" },
                { id: "xe-nho", label: "Xe tải 1.9T - 2.4T" },
                { id: "xe-trung", label: "Xe tải trung 3.5T - 5T" },
                { id: "xe-nang", label: "Xe tải nặng 8T - 15T" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      tab.id as "all" | "xe-nho" | "xe-trung" | "xe-nang"
                    )
                  }
                  className={`px-4 py-2 rounded-md text-xs font-extrabold uppercase tracking-wider transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#2B2A7B] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFleet.map((item) => {
              const isSelected = selectedFleetId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] rounded-xl overflow-hidden border border-slate-200 hover:border-[#2B2A7B] hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#2B2A7B] text-white text-[11px] font-bold px-3 py-1 rounded-sm shadow">
                      {item.capacity}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-[#F36F21] text-white text-xs font-extrabold px-3 py-1 rounded-sm shadow">
                      {item.price}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-base font-black text-[#1E2259] leading-snug mb-2">
                        {item.name}
                      </h3>
                      <div className="space-y-1.5 text-xs text-slate-600">
                        <p className="flex items-start gap-2">
                          <Truck className="w-4 h-4 text-[#2B2A7B] shrink-0 mt-0.5" />
                          <span>
                            <strong>Kích thước / Quy cách:</strong>{" "}
                            {item.dimensions}
                          </span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Wrench className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5" />
                          <span>
                            <strong>Tiêu chuẩn kỹ thuật:</strong>{" "}
                            {item.maintenanceSpec}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedFleetId(isSelected ? null : item.id)
                        }
                        className="text-xs font-extrabold text-[#2B2A7B] hover:text-[#F36F21] inline-flex items-center gap-1"
                      >
                        {isSelected ? "Thu gọn hồ sơ" : "Xem hồ sơ kỹ thuật"}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href="#lien-he"
                        className="bg-[#2B2A7B] hover:bg-[#F36F21] text-white text-xs font-bold px-3.5 py-2 rounded transition-colors"
                      >
                        Đặt xe / Bảo dưỡng
                      </a>
                    </div>

                    {isSelected && (
                      <div className="bg-white p-3 rounded-lg border border-[#2B2A7B]/20 text-xs text-slate-700 space-y-1">
                        <div className="font-bold text-[#2B2A7B]">
                          Cam kết vận hành Thuận Thành Tín:
                        </div>
                        <p>
                          • Kiểm tra 18 điểm an toàn phanh hơi, lốp và hệ thống
                          điện trước giờ xuất bến.
                        </p>
                        <p>
                          • Hỗ trợ xe dự phòng thay thế ngay lập tức nếu phát
                          sinh sự cố kỹ thuật.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Fleet Maintenance & Dispatch Workflow */}
      <section
        id="quy-trinh"
        className="py-16 bg-gradient-to-b from-[#1E2259] to-[#2B2A7B] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F36F21]">
              TIÊU CHUẨN QUẢN LÝ KỸ THUẬT ĐỘI XE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2">
              QUY TRÌNH BẢO DƯỠNG &amp; KIỂM ĐỊNH ĐỘI XE TẢI 4 BƯỚC
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Đảm bảo mọi đầu xe tải Thuận Thành Tín và xe khách hàng doanh
              nghiệp luôn vận hành ổn định, tiết kiệm nhiên liệu và an toàn tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.maintenanceSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-6 hover:border-[#F36F21] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#F36F21]">
                    {step.step}
                  </span>
                  <FileText className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Fleet Logistics Insights */}
      <section id="tin-tuc" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F36F21]">
                TIN TỨC &amp; TÀI LIỆU KỸ THUẬT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2B2A7B] mt-1">
                CẨM NANG QUẢN TRỊ ĐỘI XE &amp; KHO VẬN
              </h2>
            </div>
            <a
              href="#lien-he"
              className="text-xs font-extrabold uppercase tracking-wider text-[#2B2A7B] hover:text-[#F36F21] inline-flex items-center gap-1"
            >
              Xem tất cả bài viết
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.news?.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#6D28D9] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#F36F21]" />
                      {post.date}
                    </div>
                    <h3 className="text-base font-black text-[#1E2259] hover:text-[#F36F21] transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <span className="text-xs font-extrabold text-[#2B2A7B] inline-flex items-center gap-1">
                      Đọc chi tiết <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Dispatch Quote Banner + Footer */}
      <footer id="lien-he" className="bg-[#151842] text-slate-200 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#6D28D9] via-[#A21CAF] to-[#E11D74] rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-white max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest bg-black/25 px-3 py-1 rounded-full">
                ĐIỀU VẬN &amp; XƯỞNG BẢO DƯỠNG 24/7
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase">
                CẦN THUÊ ĐỘI XE TẢI HOẶC BẢO DƯỠNG ĐỊNH KỲ CHO DOANH NGHIỆP?
              </h3>
              <p className="text-sm text-white/90">
                Liên hệ ngay trung tâm điều phối Thuận Thành Tín để nhận bảng
                báo giá cước vận tải và gói bảo dưỡng đội xe ưu đãi nhất.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="bg-[#F36F21] hover:bg-[#d95d14] text-white font-extrabold text-sm uppercase px-6 py-3.5 rounded-lg shadow-lg inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {primaryPhone}
              </a>
              <a
                href={`tel:${secondaryPhone.replace(/\s+/g, "")}`}
                className="bg-white text-[#2B2A7B] font-extrabold text-sm uppercase px-5 py-3.5 rounded-lg shadow-lg"
              >
                Tổng đài: {secondaryPhone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10 text-sm">
            <div className="space-y-3">
              <div className="text-lg font-black text-white">
                {data.business.name}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đơn vị dẫn đầu lĩnh vực Logistics, vận tải hàng hóa đường bộ và
                trung tâm bảo dưỡng kỹ thuật đội xe tải Isuzu, Hino, Hyundai tại
                TP.HCM.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#F36F21]">
                Dịch vụ trọng tâm
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Vận tải hàng hóa nguyên chuyến Bắc - Nam</li>
                <li>• Bảo dưỡng định kỳ &amp; đại tu đội xe tải</li>
                <li>• Cho thuê kho bãi &amp; quản trị tồn kho WMS</li>
                <li>• Cứu hộ kỹ thuật xe tải lưu động 24/7</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#F36F21]">
                Thông tin liên hệ
              </h4>
              <p className="text-xs text-slate-300 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F36F21] shrink-0" />
                <span>
                  {primaryPhone} - {secondaryPhone}
                </span>
              </p>
              <p className="text-xs text-slate-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F36F21] shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#F36F21]">
                Giờ làm việc
              </h4>
              <p className="text-xs text-slate-300">
                {data.business.workingHours}
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-slate-300 mt-2">
                Đánh giá khách hàng:{" "}
                <strong className="text-[#F36F21]">
                  {data.business.rating}/5.0
                </strong>{" "}
                ({data.business.reviewCount}+ doanh nghiệp đối tác)
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <p>
              © {new Date().getFullYear()} {data.business.name}. All rights
              reserved.
            </p>
            <p>Giải pháp tối ưu hóa quản lý kho vận &amp; bảo dưỡng đội xe tải</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
