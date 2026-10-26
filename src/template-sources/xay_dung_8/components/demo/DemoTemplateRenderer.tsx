"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Play,
  Star,
  Sparkles,
  Compass,
  CheckCircle2,
  Building2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung8DefaultData,
  type XayDung8TemplateData,
  type XayDung8InternalZone
} from "@/template-sources/xay_dung_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung8TemplateData = adaptClonedTemplateData(
    xayDung8DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeZone, setActiveZone] = useState<XayDung8InternalZone>(
    data.internalZones?.[0] || {
      id: "iz-1",
      number: 1,
      title: "Cổng chào chính / Lối vào đại lộ",
      description: "Cổng chào kiến trúc vòm sang trọng.",
      xPercent: 22,
      yPercent: 78
    }
  );
  const [activeFloorPlanId, setActiveFloorPlanId] = useState<string>(
    data.floorPlanTabs?.[0]?.id || "fp-all"
  );
  const [vrModalOpen, setVrModalOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(
    null
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail =
    data.business.email?.[0] || "phongbanhang@monaparkviews.vn";

  const activeFloorPlan =
    (data.floorPlanTabs || []).find((f) => f.id === activeFloorPlanId) ||
    data.floorPlanTabs?.[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-sans selection:bg-[#0b3b36] selection:text-white">
      {/* 1. DEEP EMERALD/FOREST TEAL NAVBAR (#0b3b36 - Exact match to XD008) */}
      <header className="sticky top-0 z-40 bg-[#0b3b36] text-white border-b border-emerald-900 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Gold Lotus Crest + Brand Name */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full border border-[#d4af37] bg-[#072a27] flex items-center justify-center text-[#d4af37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="leading-none">
                  <span className="block text-sm sm:text-base font-serif font-bold text-[#d4af37] tracking-wide">
                    {data.business.name}
                  </span>
                  <span className="block text-[9px] uppercase tracking-widest text-emerald-200/80 mt-0.5">
                    Vị thế vàng • Đẳng cấp sang
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-white/90">
            <a href="#" className="text-[#d4af37] transition">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#d4af37] transition">
              GIỚI THIỆU
            </a>
            <a href="#vi-tri" className="hover:text-[#d4af37] transition">
              VỊ TRÍ
            </a>
            <a href="#tien-ich" className="hover:text-[#d4af37] transition">
              TIỆN ÍCH
            </a>
            <a href="#mat-bang" className="hover:text-[#d4af37] transition">
              MẶT BẰNG
            </a>
            <a href="#thanh-toan" className="hover:text-[#d4af37] transition">
              PHƯƠNG THỨC THANH TOÁN
            </a>
            <a href="#tin-tuc" className="hover:text-[#d4af37] transition">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#d4af37] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-emerald-700 text-emerald-100"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#072a27] px-4 py-4 space-y-2 border-t border-emerald-800">
            {[
              { label: "TRANG CHỦ", href: "#" },
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "VỊ TRÍ", href: "#vi-tri" },
              { label: "TIỆN ÍCH", href: "#tien-ich" },
              { label: "MẶT BẰNG", href: "#mat-bang" },
              { label: "PHƯƠNG THỨC THANH TOÁN", href: "#thanh-toan" },
              { label: "TIN TỨC", href: "#tin-tuc" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#d4af37]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (AERIAL LAKE & PARK MASTERPLAN) */}
      <section className="relative min-h-[480px] lg:min-h-[580px] flex items-center justify-center text-center overflow-hidden bg-[#072a27]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-900/50 to-[#072a27]/80" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-white">
          <p className="text-sm sm:text-lg font-medium text-white/95 mb-2 drop-shadow">
            {data.hero.eyebrow || "Căn hộ cao cấp tại trung tâm Sài Gòn"}
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold uppercase tracking-wider text-white drop-shadow-lg mb-3">
            {data.hero.title}
          </h1>
          <p className="text-sm sm:text-lg text-emerald-100 font-medium">
            {data.hero.subtitle}
          </p>

          {/* Slider dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="w-2.5 h-2.5 rounded-full border border-white/80" />
          </div>
        </div>
      </section>

      {/* 3. INTRO SPLIT SECTION ("Mona Park View – Cầu Giấy" + Video Card) */}
      <section id="gioi-thieu" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b3b36] mb-1.5">
                {data.business.aboutTitle || data.introSectionTitle}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 mb-4">
                {data.introSectionSubtitle}
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {(data.business.aboutText || data.introParagraphs || []).map(
                  (para, idx) => (
                    <p key={idx}>{para}</p>
                  )
                )}
              </div>
            </div>

            {/* Right Video Player Card */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setVrModalOpen(true)}
                className="group relative aspect-[16/10] rounded-sm overflow-hidden shadow-xl bg-slate-900 cursor-pointer border border-slate-200"
              >
                <img
                  src={data.introVideoImage}
                  alt="Video toàn cảnh dự án"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/35 flex items-center justify-center">
                  <div className="w-16 h-11 rounded-xl bg-slate-900/85 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-slate-950/80 to-transparent p-3 text-white text-xs font-medium truncate">
                  Toàn cảnh tiến độ & phối cảnh dự án {data.business.name} từ Flycam
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULL-BLEED AERIAL & PARK BACKGROUND WITH ALTERNATING FROSTED WHITE CARDS */}
      <section className="relative overflow-hidden">
        {/* Part A: Tổng quan Mona Park View (Left Frosted Card + Right Callout) */}
        <div className="relative py-14 lg:py-20 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85"
            alt="Tổng quan dự án"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/45" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Frosted White Spec Card */}
              <div className="lg:col-span-6 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-2xl border border-white">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0b3b36] mb-3">
                  Tổng quan {data.business.name}
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  {(data.overviewSpecs || []).map((spec, idx) => (
                    <li key={idx}>
                      <span className="font-bold text-slate-900">
                        – {spec.label}:
                      </span>{" "}
                      <span>{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Callout Headline */}
              <div className="lg:col-span-6 text-white lg:pl-6">
                <div className="flex items-center gap-1.5 text-white mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug drop-shadow-md">
                  Ra mắt khu căn hộ cao cấp Luxury Park Views – Với tầm View ra công viên Cầu Giấy và Công viên hồ điều hòa 32ha
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Part B: Tiện ích nổi bật (Left Green Park Callout + Right Frosted Card) */}
        <div className="relative py-14 lg:py-20 bg-[#0b3b36]">
          <img
            src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1920&q=85"
            alt="Không gian xanh nội khu"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-950/55" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Callout */}
              <div className="lg:col-span-5 text-white text-center lg:text-right lg:pr-6">
                <Sparkles className="w-10 h-10 text-emerald-300 mx-auto lg:ml-auto lg:mr-0 mb-2" />
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug drop-shadow">
                  Đẳng cấp sống
                  <br />
                  nơi thiên nhiên hội tụ
                </h3>
              </div>

              {/* Right Frosted White Amenities Card */}
              <div className="lg:col-span-7 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-2xl border border-white">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0b3b36] mb-3">
                  Tiện ích nổi bật
                </h3>
                <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  {(data.highlightAmenities || []).map((item, idx) => (
                    <p key={idx}>
                      <strong className="font-bold text-[#0b3b36]">
                        {item.boldLead}
                      </strong>{" "}
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "VỊ TRÍ ĐẮC ĐỊA" (BULLETS + CIRCULAR RADAR DIAGRAM + 8 LANDMARK CARDS) */}
      <section id="vi-tri" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b3b36] mb-4">
            Vị trí đắc địa
          </h2>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-12">
            {(data.locationBullets || []).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#0b3b36] font-bold">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Bottom Split: Left Radar Distance Graphic + Right 2x4 Landmarks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Circular Distance Radar */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="text-center mb-3">
                <span className="text-xs font-bold text-[#0b3b36] uppercase tracking-wider">
                  Vị trí kim cương
                </span>
                <p className="text-[10px] text-slate-400">
                  Bán kính kết nối tâm điểm (Km)
                </p>
              </div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-dashed border-amber-400/70 bg-gradient-to-br from-amber-50/70 to-emerald-50/50 flex items-center justify-center shadow-inner">
                <div className="w-48 h-48 rounded-full border border-amber-400/60 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-amber-500/60 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#0b3b36] text-[#d4af37] flex flex-col items-center justify-center text-center p-1 shadow-lg">
                      <Building2 className="w-4 h-4 mb-0.5" />
                      <span className="text-[8px] font-bold uppercase leading-none">
                        PARK VIEW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Distance Badges around Radar */}
                <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-[#0b3b36] shadow">
                  0.5 km
                </span>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-[#0b3b36] shadow">
                  1.2 km
                </span>
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-[#0b3b36] shadow">
                  2.0 km
                </span>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-[#0b3b36] shadow">
                  0.8 km
                </span>
              </div>
            </div>

            {/* Right 2x4 Grid of 8 Landmarks */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {(data.landmarks || []).map((lm) => (
                <div
                  key={lm.id}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-500/40 transition"
                >
                  <img
                    src={lm.image}
                    alt={lm.name}
                    className="w-14 h-12 rounded-lg object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                      {lm.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{lm.timeText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. "ĐẶC QUYỀN TIỆN NGHI" BANNER + "TIỆN ÍCH NỘI ĐÔ" (INTERACTIVE 8-ITEM LIST & POOL MAP) */}
      <section id="tien-ich">
        {/* Banner with 3 Circular Medallions */}
        <div className="relative py-14 lg:py-20 bg-[#0b3b36] text-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85"
            alt="Đặc quyền tiện nghi"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#072a27]/90 via-[#0b3b36]/70 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-snug mb-8 max-w-md">
              Đặc quyền tiện nghi
              <br />
              sống cuộc sống viên mãn
            </h2>

            {/* 3 Circular Inset Photos */}
            <div className="flex flex-wrap items-center gap-5">
              {[
                {
                  title: "Gia đình hạnh phúc",
                  img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80"
                },
                {
                  title: "Hồ bơi sinh thái",
                  img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80"
                },
                {
                  title: "Cảnh quan xanh mát",
                  img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=400&q=80"
                }
              ].map((med, idx) => (
                <div
                  key={idx}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/90 shadow-xl"
                >
                  <img
                    src={med.img}
                    alt={med.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tiện ích nội đô Split List + Aerial Pool Map */}
        <div className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b3b36] mb-6">
              Tiện ích nội đô
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Interactive 1-8 List */}
              <div className="lg:col-span-5 border border-slate-200 rounded-sm divide-y divide-slate-100 bg-white shadow-sm">
                {(data.internalZones || []).map((zone) => {
                  const isSelected = activeZone?.id === zone.id;
                  return (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setActiveZone(zone)}
                      className={`w-full text-left px-4 py-3 text-xs transition flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-emerald-50 font-bold text-[#0b3b36]"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="font-bold text-red-600 shrink-0">
                        {zone.number}.
                      </span>
                      <span className="truncate">{zone.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Aerial Pool Map with Pins */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                    alt="Bản đồ tiện ích nội khu"
                    className="w-full h-full object-cover"
                  />
                  {(data.internalZones || []).map((z) => {
                    const isCurrent = activeZone?.id === z.id;
                    return (
                      <button
                        key={z.id}
                        type="button"
                        onClick={() => setActiveZone(z)}
                        style={{
                          left: `${z.xPercent}%`,
                          top: `${z.yPercent}%`
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center transition cursor-pointer ${
                          isCurrent
                            ? "bg-red-600 text-white ring-4 ring-white scale-125 shadow-xl"
                            : "bg-[#0b3b36]/90 text-white hover:bg-red-600 border border-white"
                        }`}
                      >
                        {z.number}
                      </button>
                    );
                  })}
                </div>

                {activeZone && (
                  <div className="mt-3 p-4 rounded bg-slate-50 border-l-4 border-[#0b3b36]">
                    <p className="text-xs font-bold text-[#0b3b36]">
                      Khu vực số {activeZone.number}: {activeZone.title}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {activeZone.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "MẶT BẰNG ĐIỂN HÌNH" (TEAL-BLUE HEADER + 8 INTERACTIVE FLOOR PLAN TABS + ARCHITECTURAL BLUEPRINT) */}
      <section id="mat-bang" className="bg-[#0d5c75] text-white pt-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            Mặt bằng điển hình
          </h2>
          <p className="text-xs sm:text-sm text-sky-100 max-w-3xl mx-auto leading-relaxed mb-2">
            Thiết kế chung cư cao cấp {data.business.name} được giới chuyên môn đánh giá rất cao, thông minh và đa dạng hóa các loại diện tích tương ứng với công năng sử dụng.
          </p>
          <p className="text-xs text-sky-200 max-w-2xl mx-auto mb-7">
            Dự án với thiết kế đẳng cấp với những diện tích phù hợp đáp ứng đa dạng các yêu cầu căn hộ của quý khách hàng: CH1 – 70.50m², CH2 – 118.36m², CH3 – 131.02m², CH4 – 102.63m², CH6 – 70.22m², CH8 – 63.95m², CH9 – 106.56m².
          </p>

          {/* 8 Interactive Floor Plan Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pb-8">
            {(data.floorPlanTabs || []).map((tab) => {
              const isActive = activeFloorPlanId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFloorPlanId(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition cursor-pointer ${
                    isActive
                      ? "bg-white text-[#0d5c75] shadow"
                      : "bg-[#084154]/80 text-white/90 hover:bg-white/20 border border-white/25"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* White Architectural Floor Plan Blueprint Container */}
        {activeFloorPlan && (
          <div className="bg-white text-slate-800 py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border border-slate-200 rounded-lg p-4 sm:p-8 shadow-sm bg-[#fcfdfd]">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0d5c75]">
                      BẢN VẼ KỸ THUẬT CHI TIẾT
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {activeFloorPlan.code}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                      {activeFloorPlan.areaText}
                    </span>
                    <span className="bg-sky-50 text-sky-800 px-3 py-1 rounded-full border border-sky-200">
                      {activeFloorPlan.bedrooms} • {activeFloorPlan.bathrooms}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-600">
                      <Compass className="w-4 h-4 text-[#0d5c75]" />
                      {activeFloorPlan.direction}
                    </span>
                  </div>
                </div>

                {/* Architectural Diagram + Unit Callouts */}
                <div className="relative aspect-[16/9] rounded overflow-hidden bg-slate-100 border border-slate-200 mb-6">
                  <img
                    src={activeFloorPlan.image}
                    alt={activeFloorPlan.code}
                    className="w-full h-full object-cover"
                  />
                  {/* Unit Callout Badges matching the blueprint style */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {[
                      "CH-01 (70.5m²)",
                      "CH-02 (118.36m²)",
                      "CH-03 (131.02m²)",
                      "CH-04 (102.63m²)",
                      "CH-06 (70.22m²)",
                      "CH-08 (63.95m²)",
                      "CH-09 (106.56m²)"
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="bg-white/95 text-[#0b3b36] border border-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm font-black uppercase tracking-wider text-slate-900">
                    {activeFloorPlan.code}
                  </p>
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-2">
                    (DIỆN TÍCH TIM TƯỜNG)
                  </p>
                  <p className="text-xs text-slate-600 max-w-2xl mx-auto">
                    {activeFloorPlan.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Dark Teal Summary Band */}
        <div className="bg-[#072a27] text-slate-200 py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-xs leading-relaxed">
            <p>
              Các loại căn hộ từ 2 – 4 phòng ngủ với các loại diện tích từ 63,95 – 131,02m², tất cả các phòng chức năng trong căn hộ tại dự án {data.business.name} đều có khả năng lấy ánh sáng và không khí tự nhiên rất tốt. Được chú trọng về phong thủy nên con người sống trong các căn hộ tại đây sẽ có được sức khỏe tốt, vượng khí tài lộc mang đến cho quý cư dân.
            </p>
            <p>
              Căn hộ tại Chung cư {data.business.name} được thiết kế hiện đại mang phong cách khách sạn 5*, các phòng chức năng trong căn hộ được bố trí thông minh nhằm tối ưu công năng sử dụng cho căn hộ. Mỗi căn hộ đều được bố trí tới 2 Logia nhằm đảm bảo tối đa không gian ánh sáng và gió tự nhiên tràn ngập vào trong căn hộ.
            </p>
          </div>
        </div>
      </section>

      {/* 8. "PHƯƠNG THỨC THANH TOÁN" (LEFT 8 BIG BLUE NUMBERS + RIGHT SALES POLICY TABLES) */}
      <section id="thanh-toan" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b3b36] mb-10">
            Phương thức thanh toán
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 8 Big Blue Numbered Steps */}
            <div className="lg:col-span-5 space-y-4">
              {(data.paymentSteps || []).map((st) => (
                <div key={st.stepNumber} className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl font-black text-[#1d70b8] w-8 text-center shrink-0 leading-none">
                    {st.stepNumber}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                    {st.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Sales Policy & Early Payment Discount Tables */}
            <div className="lg:col-span-7 border border-slate-200 p-5 sm:p-6 rounded-sm bg-slate-50/50">
              <h3 className="text-xs sm:text-sm font-black uppercase text-center text-slate-900 mb-4">
                CHÍNH SÁCH BÁN HÀNG {data.business.name.toUpperCase()}
              </h3>

              {/* Table 1 */}
              <p className="text-xs font-bold text-slate-800 mb-2">
                2. Tiến độ thanh toán sớm
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-[11px] border-collapse border border-slate-300 bg-white text-center">
                  <thead>
                    <tr className="bg-slate-100 font-bold text-slate-800">
                      <th className="border border-slate-300 p-2">
                        Đợt thanh toán
                      </th>
                      <th className="border border-slate-300 p-2">
                        Thanh toán sớm 70%
                      </th>
                      <th className="border border-slate-300 p-2">
                        Thanh toán sớm 95%
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-1.5 font-semibold">
                        Đặt cọc
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        100.000.000 VNĐ
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        100.000.000 VNĐ
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-1.5 font-semibold">
                        Thanh toán đợt 1
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        70% GTCH trừ đi tiền đặt cọc
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        95% GTCH trừ đi tiền đặt cọc
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-1.5 font-semibold">
                        Thanh toán đợt 6 (Bàn giao)
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        25% GTCH + 2% KPBT
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        2% Kinh phí bảo trì
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-1.5 font-semibold">
                        Thanh toán đợt 7 (Sổ hồng)
                      </td>
                      <td className="border border-slate-300 p-1.5">5% GTCH</td>
                      <td className="border border-slate-300 p-1.5">5% GTCH</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2 */}
              <p className="text-xs font-bold text-slate-800 mb-2">
                3. Chính sách áp dụng đối với khách hàng thanh toán sớm
              </p>
              <div className="overflow-x-auto mb-5">
                <table className="w-full text-[11px] border-collapse border border-slate-300 bg-white text-center">
                  <thead>
                    <tr className="bg-slate-100 font-bold text-slate-800">
                      <th className="border border-slate-300 p-2">
                        Tỷ lệ thanh toán sớm
                      </th>
                      <th className="border border-slate-300 p-2">
                        Ưu đãi 1 (Chiết khấu)
                      </th>
                      <th className="border border-slate-300 p-2">
                        Ưu đãi 2 (Miễn lãi)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-1.5 font-bold">
                        70%
                      </td>
                      <td className="border border-slate-300 p-1.5 text-emerald-700 font-bold">
                        4,0%
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        18 tháng
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-1.5 font-bold">
                        95%
                      </td>
                      <td className="border border-slate-300 p-1.5 text-emerald-700 font-bold">
                        6,0%
                      </td>
                      <td className="border border-slate-300 p-1.5">
                        24 tháng
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-[11px] text-slate-600 space-y-1.5 leading-relaxed">
                <p className="font-bold underline text-slate-800">
                  Điều kiện áp dụng chính sách thanh toán sớm:
                </p>
                <p>
                  <strong className="text-slate-800">✓ Ưu đãi 1:</strong> Khoản chiết khấu được tính trên tổng Giá bán căn hộ (đã bao gồm thuế GTGT, chưa bao gồm kinh phí bảo trì) và trừ trực tiếp vào Hợp đồng mua bán.
                </p>
                <p>
                  <strong className="text-slate-800">✓ Ưu đãi 2:</strong> Khách hàng vay vốn tại ngân hàng VPBank/Vietcombank được hỗ trợ lãi suất 0% cho khoản vay lên tới 70% giá trị căn hộ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. "KHÁM PHÁ CĂN HỘ VỚI VR TOUR" BANNER */}
      <section className="relative py-14 bg-slate-900 text-white text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="VR Tour"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold mb-2">
            Khám phá căn hộ với VR TOUR
          </h2>
          <p className="text-xs text-slate-200 leading-relaxed mb-6 max-w-3xl mx-auto">
            Do sở hữu vị trí thoáng đãng nên phần lớn các căn hộ tại Chung cư {data.business.name} đều có thể phóng được tầm view ra xa và để hít hà không khí trong lành xanh mát từ các công viên lớn xung quanh mang lại. Sống tại {data.business.name} quý khách như được trở về với một nơi mà ở đó cuộc sống sẽ được hòa quyện vào cùng với thiên nhiên để được tái tạo lại sức lao động sau những giờ làm việc căng thẳng.
          </p>
          <button
            type="button"
            onClick={() => setVrModalOpen(true)}
            className="border border-emerald-400 bg-[#0b3b36]/80 hover:bg-[#0b3b36] text-white text-xs font-bold uppercase tracking-wider px-8 py-2.5 rounded-full transition cursor-pointer"
          >
            XEM NGAY
          </button>
        </div>
      </section>

      {/* 10. "THƯ VIỆN HÌNH ẢNH" (4-PHOTO STRIP) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b3b36] mb-2">
            Thư viện hình ảnh
          </h2>
          <p className="text-xs text-slate-500 max-w-3xl mx-auto mb-8">
            Được thiết kế chăm chút và tỉ mỉ, Dự án {data.business.name} hiện diện như một bông hoa điểm nhấn giữa khu đô thị. Ngay trên thiết kế mặt đứng của công trình, dưới những nét hình học đơn giản mà thanh thoát tạo điểm nhấn của dự án.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(data.galleryImages || []).map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryImg(imgUrl)}
                className="aspect-[16/10] overflow-hidden rounded-sm shadow-sm cursor-pointer bg-slate-100 group"
              >
                <img
                  src={imgUrl}
                  alt={`Thư viện ảnh ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Chung cư {data.business.name} tạo nên một môi trường sống lý tưởng, gần gũi với thiên nhiên với tối thiểu 2/3 diện tích dành cho quảng trường, cây xanh, đài phun nước, khu vực quảng trường khu vui chơi giải trí chung...
          </p>
        </div>
      </section>

      {/* 11. "BÀI VIẾT – TIN TỨC" (4 NEWS CARDS) */}
      <section id="tin-tuc" className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b3b36]">
              Bài viết – Tin tức
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).slice(0, 4).map((post) => (
              <article
                key={post.id}
                className="group text-center flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-sm bg-slate-100 mb-3 shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#0b3b36] leading-snug mb-1">
                  {post.title}
                </h3>
                <span className="text-[10px] text-slate-400 mb-2 block">
                  {post.date}
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SPLIT CONTACT & REGISTRATION FOOTER OVER DARK BUILDING BACKGROUND */}
      <footer
        id="lien-he"
        className="relative bg-[#071f1c] text-white py-16 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Liên hệ phòng bán hàng"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Contact Info + Gold Lotus Crest */}
            <div className="lg:col-span-5 text-center space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Thông tin liên hệ
              </p>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                Phòng Bán Hàng Dự Án {data.business.name}
              </h3>
              <div className="text-xs text-slate-300 space-y-1.5">
                <p className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Địa chỉ: {data.business.address}</span>
                </p>
                <p className="flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Hotline: {primaryPhone}</span>
                </p>
                <p className="flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Email: {primaryEmail}</span>
                </p>
              </div>

              {/* Large Gold Lotus Emblem */}
              <div className="pt-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] bg-[#0b3b36]/80 flex items-center justify-center text-[#d4af37] mb-2 shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>
                <span className="text-2xl font-serif font-bold text-[#d4af37]">
                  {data.business.name}
                </span>
                <span className="text-xs text-amber-200/90 mt-0.5">
                  Vị thế vàng - Đẳng cấp sang
                </span>
              </div>
            </div>

            {/* Right Registration Form Card */}
            <div className="lg:col-span-7">
              <div className="text-center mb-4">
                <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                  Đăng ký tham quan và nhận báo giá
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Gọi ngay <strong className="text-[#d4af37]">{primaryPhone}</strong> (24/7) hoặc ĐĂNG KÝ THAM QUAN VÀ NHẬN BÁO GIÁ:
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-950/90 border border-emerald-500 p-6 rounded text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white">
                    Đã gửi đăng ký thành công!
                  </h4>
                  <p className="text-xs text-emerald-200 mt-1">
                    Phòng Bán Hàng {data.business.name} sẽ gửi bảng giá chi tiết và lịch tham quan căn hộ mẫu tới quý khách.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="bg-slate-950/65 backdrop-blur-md p-5 sm:p-6 rounded border border-white/15 space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên"
                      value={contactForm.fullName}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          fullName: e.target.value
                        })
                      }
                      className="w-full bg-white text-slate-900 px-3.5 py-2.5 text-xs rounded-sm focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value
                        })
                      }
                      className="w-full bg-white text-slate-900 px-3.5 py-2.5 text-xs rounded-sm focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phone: e.target.value
                        })
                      }
                      className="w-full bg-white text-slate-900 px-3.5 py-2.5 text-xs rounded-sm focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      value={contactForm.address}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          address: e.target.value
                        })
                      }
                      className="w-full bg-white text-slate-900 px-3.5 py-2.5 text-xs rounded-sm focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Lời nhắn (Mã căn quan tâm: 2PN, 3PN, 4PN...)"
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value
                      })
                    }
                    className="w-full bg-white text-slate-900 px-3.5 py-2.5 text-xs rounded-sm focus:outline-none"
                  />
                  <div className="text-center pt-1">
                    <button
                      type="submit"
                      className="bg-[#0d746b] hover:bg-[#0b5c55] text-white text-xs font-bold uppercase tracking-widest px-14 py-2.5 rounded-sm shadow transition cursor-pointer"
                    >
                      GỬI
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#041210] py-3 text-center text-[11px] text-slate-400">
        © Bản quyền thuộc về {data.business.name} • Khu Căn Hộ Cao Cấp & Tổng Thầu Xây Dựng
      </div>

      {/* VR / Video Modal */}
      {vrModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVrModalOpen(false)}
        >
          <div
            className="bg-[#0b3b36] border border-[#d4af37] rounded-xl max-w-xl w-full overflow-hidden shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-emerald-800">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                Trải Nghiệm VR 360° & Flycam Dự Án {data.business.name}
              </span>
              <button
                type="button"
                onClick={() => setVrModalOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-center space-y-4">
              <img
                src={data.introVideoImage}
                alt="VR Tour"
                className="w-full h-60 object-cover rounded"
              />
              <p className="text-xs text-emerald-100">
                Để nhận đường dẫn VR 360° từng căn hộ và bảng giá gốc đợt 1, vui lòng liên hệ Hotline Phòng Bán Hàng:{" "}
                <strong className="text-[#d4af37]">{primaryPhone}</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Image Lightbox */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={selectedGalleryImg}
              alt="Phối cảnh chi tiết"
              className="w-full h-auto rounded-lg shadow-2xl border-2 border-white"
            />
            <button
              type="button"
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
