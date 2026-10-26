"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Maximize2,
  PieChart,
  Layers,
  Home,
  Calendar,
  Building2,
  Compass,
  CheckCircle2,
  Menu,
  X,
  MessageCircle,
  Globe
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { xayDung9DefaultData, type XayDung9Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<XayDung9Data>(xayDung9DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFloorTab, setActiveFloorTab] = useState(0);
  const [selectedViewModal, setSelectedViewModal] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@thepenta-residence.vn";
  const currentFloor = data.floorPlans?.[activeFloorTab] || data.floorPlans?.[0];

  const renderSpecIcon = (iconName: string) => {
    switch (iconName) {
      case "map-pin":
        return <MapPin className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />;
      case "maximize":
        return <Maximize2 className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />;
      case "pie-chart":
        return <PieChart className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />;
      case "layers":
        return <Layers className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />;
      case "home":
        return <Home className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />;
      default:
        return <Calendar className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#e09b3d] selection:text-white relative">
      {/* Floating Side Navigation Dots & Messenger */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2.5">
        <a
          href="#lien-he"
          className="w-10 h-10 rounded-full bg-[#1890ff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform mb-2"
          title="Tư vấn trực tuyến"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
        {[
          { href: "#tong-quan", label: "Tổng quan" },
          { href: "#vi-tri", label: "Vị trí" },
          { href: "#chu-dau-tu", label: "Chủ đầu tư" },
          { href: "#tam-nhin", label: "Tầm nhìn" },
          { href: "#tien-ich", label: "Tiện ích" },
          { href: "#diem-nhan", label: "Giá trị" },
          { href: "#mat-bang", label: "Mặt bằng" },
          { href: "#tin-tuc", label: "Tin tức" },
          { href: "#lien-he", label: "Liên hệ" }
        ].map((dot, idx) => (
          <a
            key={dot.href}
            href={dot.href}
            title={dot.label}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === 0
                ? "bg-[#e09b3d] ring-2 ring-[#e09b3d]/40 scale-110"
                : "bg-[#e09b3d]/65 hover:bg-[#e09b3d] hover:scale-125"
            }`}
          />
        ))}
      </div>

      {/* Top Sticky Navbar (#0f1f33) */}
      <header className="sticky top-0 z-50 bg-[#0f1f33] text-white shadow-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col items-center group shrink-0">
            <div className="flex items-end gap-0.5 text-[#e09b3d]">
              <svg width="46" height="18" viewBox="0 0 46 18" fill="none" className="mx-auto">
                <path
                  d="M2 16L11 6L18 13L25 3L35 13L40 8L44 13"
                  stroke="#e09b3d"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="23" y="9" width="4" height="4" fill="#e09b3d" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#e09b3d] uppercase leading-none mt-0.5">
              {data.business.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold tracking-wider uppercase text-slate-200">
            <a href="#tong-quan" className="text-[#e09b3d] hover:text-[#f3b55f] transition-colors">
              TỔNG QUAN
            </a>
            <a href="#vi-tri" className="hover:text-[#e09b3d] transition-colors">
              VỊ TRÍ DỰ ÁN
            </a>
            <a href="#chu-dau-tu" className="hover:text-[#e09b3d] transition-colors">
              CHỦ ĐẦU TƯ
            </a>
            <a href="#mat-bang" className="hover:text-[#e09b3d] transition-colors">
              MẶT BẰNG
            </a>
            <a href="#diem-nhan" className="hover:text-[#e09b3d] transition-colors">
              ĐIỂM NHẤN
            </a>
            <a href="#tien-ich" className="hover:text-[#e09b3d] transition-colors">
              TIỆN ÍCH
            </a>
            <a href="#tin-tuc" className="hover:text-[#e09b3d] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#e09b3d] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Red Hotline Pill Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-[#d61120] hover:bg-[#b80d1a] text-white text-xs font-extrabold px-4 py-2 rounded-md shadow-sm transition-colors tracking-wide"
            >
              {primaryPhone}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1828] border-t border-white/10 px-4 py-4 space-y-2.5 text-xs font-bold uppercase">
            {[
              { href: "#tong-quan", label: "TỔNG QUAN" },
              { href: "#vi-tri", label: "VỊ TRÍ DỰ ÁN" },
              { href: "#chu-dau-tu", label: "CHỦ ĐẦU TƯ" },
              { href: "#mat-bang", label: "MẶT BẰNG" },
              { href: "#diem-nhan", label: "ĐIỂM NHẤN" },
              { href: "#tien-ich", label: "TIỆN ÍCH" },
              { href: "#tin-tuc", label: "TIN TỨC" },
              { href: "#lien-he", label: "LIÊN HỆ" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-slate-200 hover:text-[#e09b3d]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Banner — Golden Sunset High-Rise Perspective */}
      <section className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] overflow-hidden bg-[#13263e]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Golden sun flare & ground street atmosphere matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f33]/40 via-transparent to-[#f5b041]/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-[#0f1f33]/30 pointer-events-none" />

        {/* Entrance Podium Signage Badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center w-full max-w-2xl px-4">
          <div className="inline-block bg-[#0f1f33]/85 backdrop-blur-sm border border-[#e09b3d]/60 px-6 py-3 rounded shadow-2xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#e09b3d] font-semibold mb-1">
              {data.hero.eyebrow || "DỰ ÁN CĂN HỘ TRUNG TÂM"}
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase">
              {data.hero.title}
            </h1>
            <p className="text-xs text-slate-200 mt-1 max-w-lg mx-auto line-clamp-2">
              {data.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Tổng Quan Dự Án (White background, 2 columns) */}
      <section id="tong-quan" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Column: Project Introduction & Basic Specs */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-1">
                  {data.business.aboutTitle || "Chung cư cao cấp"}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#13263e] uppercase tracking-tight">
                  {data.business.name}
                </h2>
              </div>

              <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed space-y-2 text-justify">
                {(data.business.aboutText || []).map((paragraph, index) => {
                  const parts = paragraph.split(new RegExp(`(${data.business.name}|The Penta|Mona Media)`, "gi"));
                  return (
                    <p key={index}>
                      {parts.map((part, i) =>
                        part.toLowerCase() === data.business.name.toLowerCase() ||
                        part.toLowerCase() === "the penta" ||
                        part.toLowerCase() === "mona media" ? (
                          <span key={i} className="font-bold text-[#e09b3d]">
                            {data.business.name}
                          </span>
                        ) : (
                          <React.Fragment key={i}>{part}</React.Fragment>
                        )
                      )}
                    </p>
                  );
                })}
              </div>

              <div className="pt-2">
                <h3 className="text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-3">
                  THÔNG TIN CƠ BẢN:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
                  {(data.overviewSpecs || []).map((spec) => {
                    const displayValue =
                      spec.id === "spec-1" ? data.business.address : spec.value;
                    return (
                      <li key={spec.id} className="flex items-start gap-2.5">
                        {renderSpecIcon(spec.icon)}
                        <span>
                          {spec.label}:{" "}
                          <strong className="font-bold text-slate-800">{displayValue}</strong>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Right Column: Vertical Night Rendering of the Tower */}
            <div className="md:col-span-6">
              <div className="relative rounded shadow-xl overflow-hidden border border-slate-100 bg-[#0f1f33] aspect-[4/5] max-w-md mx-auto">
                <img
                  src={data.overviewImage}
                  alt={`Phối cảnh ${data.business.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f33]/70 via-transparent to-[#0f1f33]/20" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0f1f33]/90 border border-[#e09b3d]/50 px-4 py-1 rounded text-[11px] font-bold tracking-widest text-[#e09b3d] uppercase">
                  {data.business.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vị Trí Dự Án The Penta (Dark Navy #13263e) */}
      <section id="vi-tri" className="py-16 md:py-20 bg-[#13263e] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider mb-4">
              VỊ TRÍ DỰ ÁN {data.business.name}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
              Tọa lạc tại số{" "}
              <span className="text-[#e09b3d] font-semibold">{data.business.address}</span> – dự án
              căn hộ cao cấp{" "}
              <span className="text-[#e09b3d] font-semibold">{data.business.name}</span> sở hữu vị
              trí cực kỳ thuận lợi khi kết nối với khu trung tâm Quận 1 chỉ 10 phút. Hơn nữa,{" "}
              <span className="text-[#e09b3d] font-semibold">{data.business.name}</span> còn được
              bao quanh bởi nhiều tiện ích hiện hữu, đa dạng, mang đến cho những chủ nhân tương lai
              một cuộc sống hoàn hảo nhất tại &ldquo;ngôi nhà giữa lòng thành phố&rdquo;.
            </p>
          </div>

          {/* 4-Column Nearby Facilities Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2.5 mb-10 text-[11px] sm:text-xs text-slate-200">
            {(data.nearbyPlaces || []).map((place, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-[2px] bg-[#e09b3d] text-[#13263e] flex items-center justify-center shrink-0">
                  <Building2 className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="truncate">{place}</span>
              </div>
            ))}
          </div>

          {/* 2 Side-by-Side Maps: Vector Route Map & Satellite Aerial Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Map: Dark Navy Illustrated Vector Road Map */}
            <div className="relative rounded overflow-hidden border border-white/15 bg-[#0c1a2c] h-64 sm:h-72 shadow-lg">
              <img
                src={data.mapImages.vectorMap}
                alt="Bản đồ kết nối giao thông"
                className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
              />
              {/* Custom SVG Road Network Overlay matching screenshot */}
              <svg
                viewBox="0 0 400 260"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <g stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9">
                  <line x1="20" y1="80" x2="380" y2="115" />
                  <line x1="95" y1="15" x2="65" y2="245" />
                  <line x1="20" y1="195" x2="385" y2="135" />
                  <line x1="160" y1="85" x2="210" y2="245" />
                  <line x1="245" y1="95" x2="170" y2="230" />
                  <line x1="65" y1="220" x2="380" y2="165" />
                </g>
                <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8">
                  <line x1="20" y1="80" x2="380" y2="115" />
                  <line x1="95" y1="15" x2="65" y2="245" />
                </g>
                {/* Road Labels */}
                <text x="115" y="72" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                  PHAN ĐĂNG LƯU
                </text>
                <text x="255" y="92" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                  BẠCH ĐẰNG
                </text>
                <text x="275" y="146" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                  ĐIỆN BIÊN PHỦ
                </text>
                <text x="260" y="198" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                  NGUYỄN THỊ MINH KHAI
                </text>
                {/* Project Pin */}
                <circle cx="195" cy="96" r="9" fill="#e09b3d" />
                <circle cx="195" cy="96" r="4" fill="#13263e" />
              </svg>
              <div className="absolute top-3 left-3 bg-[#0f1f33]/90 border border-[#e09b3d]/50 px-3 py-1 rounded text-[10px] font-bold text-[#e09b3d]">
                SƠ ĐỒ TUYẾN ĐƯỜNG HUYẾT MẠCH
              </div>
            </div>

            {/* Right Map: Satellite Aerial Map with White Brand Callout Box */}
            <div className="relative rounded overflow-hidden border border-white/15 bg-[#0c1a2c] h-64 sm:h-72 shadow-lg">
              <img
                src={data.mapImages.satelliteMap}
                alt="Bản đồ vệ tinh dự án"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0f1f33]/25" />
              {/* Centered White Callout Box */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow-xl border-2 border-[#e09b3d] flex flex-col items-center">
                <svg width="36" height="14" viewBox="0 0 46 18" fill="none">
                  <path
                    d="M2 16L11 6L18 13L25 3L35 13L40 8L44 13"
                    stroke="#e09b3d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[11px] font-extrabold text-[#e09b3d] uppercase tracking-wider">
                  {data.business.name}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 bg-[#0f1f33]/90 px-3 py-1 rounded text-[10px] text-slate-200">
                Kết nối Quận 1 chỉ 5 - 10 phút
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Chủ Đầu Tư & Đối Tác Chiến Lược */}
      <section id="chu-dau-tu" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px bg-slate-200 flex-1 max-w-[180px]" />
            <h2 className="text-lg sm:text-xl font-extrabold text-[#13263e] uppercase tracking-wider">
              CHỦ ĐẦU TƯ
            </h2>
            <div className="h-px bg-slate-200 flex-1 max-w-[180px]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(data.developers || []).map((dev) => (
              <div
                key={dev.id}
                className="bg-[#13263e] text-white rounded px-4 py-5 flex flex-col items-center justify-center text-center shadow-md hover:bg-[#1a3352] transition-colors border border-[#1e3a5f]"
              >
                <span className="text-[10px] uppercase tracking-widest text-slate-300 mb-2">
                  {dev.role}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#e09b3d]/20 border border-[#e09b3d] flex items-center justify-center text-[#e09b3d] text-xs font-black">
                    {dev.name.charAt(0)}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold tracking-wide text-white uppercase">
                    {dev.name}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1">{dev.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Tầm Nhìn Từ Dự Án (2x2 Grid + Center Emblem) */}
      <section id="tam-nhin" className="py-16 md:py-20 bg-[#f5f6f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#e09b3d] uppercase tracking-wide">
              TẦM NHÌN TỪ {data.business.name}
            </h2>
            <div className="w-16 h-0.5 bg-[#e09b3d] mt-2" />
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {(data.views || []).map((view) => (
                <div
                  key={view.id}
                  onClick={() => setSelectedViewModal(view.id)}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden rounded shadow-md bg-slate-900 aspect-[16/10] relative">
                    <img
                      src={view.image}
                      alt={view.direction}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-xs text-white font-medium">{view.description}</span>
                    </div>
                  </div>
                  <p className="text-center text-xs font-extrabold uppercase tracking-wider text-slate-800 mt-3 group-hover:text-[#e09b3d] transition-colors">
                    {view.direction}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Gold Logo Emblem */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 bg-[#f5f6f8] rounded-full flex-col items-center justify-center z-10 shadow-sm">
              <svg width="48" height="18" viewBox="0 0 46 18" fill="none">
                <path
                  d="M2 16L11 6L18 13L25 3L35 13L40 8L44 13"
                  stroke="#e09b3d"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="23" y="9" width="4" height="4" fill="#e09b3d" />
              </svg>
              <span className="text-xs font-extrabold text-[#e09b3d] uppercase tracking-wider mt-0.5">
                {data.business.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tiện Ích Nội Khu (3 + 2 Arch/Beveled Cards) */}
      <section id="tien-ich" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#e09b3d] uppercase tracking-wide">
              TIỆN ÍCH NỘI KHU {data.business.name}
            </h2>
            <div className="w-16 h-0.5 bg-[#e09b3d] mt-2 mb-3" />
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Không chỉ mang đến một không gian sống lý tưởng,{" "}
              <strong className="text-[#e09b3d]">{data.business.name}</strong> còn giúp cư dân có
              thêm nhiều lựa chọn, tận hưởng trọn vẹn những phút giây tuyệt vời khi tích hợp những
              tiện ích nội khu hiện đại như: khu mua sắm, hầm đậu xe, nhà trẻ, phòng sinh hoạt cộng
              đồng,...
            </p>
          </div>

          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {(data.amenities || []).slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-[#e8dfd5] rounded-t-[28px] overflow-hidden shadow-sm border border-[#dfd3c5] group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-2.5 px-3 text-center">
                  <h3 className="text-xs font-bold text-slate-700">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {(data.amenities || []).slice(3, 5).map((item) => (
              <div
                key={item.id}
                className="bg-[#e8dfd5] rounded-t-[28px] overflow-hidden shadow-sm border border-[#dfd3c5] group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-2.5 px-3 text-center">
                  <h3 className="text-xs font-bold text-slate-700">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: 5 Giá Trị Của Dự Án (Giant Gold Number 5 + 5 Value Items) */}
      <section id="diem-nhan" className="py-16 md:py-20 bg-[#f2f3f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Giant Metallic Gold Serif "5" */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
              <div
                className="font-serif font-bold leading-[0.85] select-none bg-gradient-to-b from-[#f3b659] via-[#d98026] to-[#a85511] bg-clip-text text-transparent drop-shadow-sm"
                style={{ fontSize: "clamp(180px, 22vw, 270px)" }}
              >
                5
              </div>
              <p className="text-sm sm:text-base font-serif tracking-wider uppercase text-[#c97a2b] mt-2">
                GIÁ TRỊ CỦA DỰ ÁN <strong className="font-extrabold">{data.business.name}</strong>
              </p>
            </div>

            {/* Right: 5 Core Values List */}
            <div className="md:col-span-7 space-y-5">
              {(data.coreValues || []).map((val) => (
                <div key={val.id} className="border-b border-slate-200/80 pb-3 last:border-none">
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#d98026] tracking-wide mb-1">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Mặt Bằng Căn Hộ (Interactive Tabs + Architectural Floor Plan) */}
      <section id="mat-bang" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg sm:text-xl font-extrabold text-[#13263e] uppercase tracking-wider mb-6">
            MẶT BẰNG CĂN HỘ {data.business.name}
          </h2>

          {/* Interactive Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {(data.floorPlans || []).map((fp, idx) => {
              const isActive = idx === activeFloorTab;
              return (
                <button
                  key={fp.id}
                  type="button"
                  onClick={() => setActiveFloorTab(idx)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
                    isActive
                      ? "border-[#e09b3d] text-[#e09b3d] bg-[#e09b3d]/5 shadow-sm"
                      : "border-transparent text-slate-600 hover:text-[#13263e]"
                  }`}
                >
                  {fp.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Architectural Floor Plan Visualization */}
          {currentFloor && (
            <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-5 sm:p-8 bg-[#fcfcfd]">
              {/* Top Unit Callout Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
                {currentFloor.units.map((unit) => (
                  <div
                    key={unit.code}
                    className="bg-white border border-slate-300 rounded shadow-xs overflow-hidden flex items-stretch text-[10px]"
                  >
                    <div className="bg-[#13263e] text-white font-extrabold px-2 py-1.5 flex flex-col items-center justify-center shrink-0">
                      <span>{unit.code}</span>
                      <span className="text-[9px] text-[#e09b3d]">{unit.type}</span>
                    </div>
                    <div className="px-2 py-1 flex flex-col justify-center leading-tight text-slate-600">
                      <span>DT thông thủy: {unit.netArea}</span>
                      <span>DT tim tường: {unit.grossArea}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Architectural Blueprint Diagram + Photo Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 relative bg-white rounded border border-slate-200 p-4 shadow-inner">
                  {/* Stylized L-shape Architectural Floor Plan SVG matching The Penta */}
                  <svg viewBox="0 0 600 340" className="w-full h-auto">
                    {/* Outer Dashed Boundary */}
                    <polygon
                      points="40,30 340,30 550,140 470,315 260,210 40,210"
                      fill="#f8fafc"
                      stroke="#475569"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                    />
                    {/* Unit 01 (Blue tint) */}
                    <rect
                      x="60"
                      y="55"
                      width="130"
                      height="95"
                      fill="#bfdbfe"
                      stroke="#1e3a8a"
                      strokeWidth="2"
                    />
                    <text x="105" y="105" fill="#1e3a8a" fontSize="13" fontWeight="bold">
                      CĂN 01
                    </text>
                    {/* Unit 02 (Sky tint) */}
                    <rect
                      x="190"
                      y="55"
                      width="125"
                      height="95"
                      fill="#bae6fd"
                      stroke="#1e3a8a"
                      strokeWidth="2"
                    />
                    <text x="230" y="105" fill="#0c4a6e" fontSize="13" fontWeight="bold">
                      CĂN 02
                    </text>
                    {/* Corridor & Elevator Core */}
                    <rect
                      x="130"
                      y="150"
                      width="185"
                      height="40"
                      fill="#e2e8f0"
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    <text x="175" y="174" fill="#334155" fontSize="10" fontWeight="bold">
                      SẢNH THANG MÁY
                    </text>
                    {/* Unit 03 (Angled Wing Top - Purple/Blue tint) */}
                    <polygon
                      points="315,55 510,150 470,225 315,150"
                      fill="#c7d2fe"
                      stroke="#312e81"
                      strokeWidth="2"
                    />
                    <text x="385" y="145" fill="#312e81" fontSize="13" fontWeight="bold">
                      CĂN 03
                    </text>
                    {/* Unit 04 (Angled Wing Bottom - Violet tint) */}
                    <polygon
                      points="365,175 470,225 435,295 330,245"
                      fill="#ddd6fe"
                      stroke="#4c1d95"
                      strokeWidth="2"
                    />
                    <text x="380" y="240" fill="#4c1d95" fontSize="12" fontWeight="bold">
                      CĂN 04
                    </text>
                    {/* Unit 05 (Warm Peach tint - 1PN) */}
                    <polygon
                      points="250,190 365,175 330,245 235,220"
                      fill="#fed7aa"
                      stroke="#9a3412"
                      strokeWidth="2"
                    />
                    <text x="275" y="212" fill="#9a3412" fontSize="12" fontWeight="bold">
                      CĂN 05
                    </text>
                  </svg>

                  {/* Compass Rose */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-slate-600 bg-white/90 px-2.5 py-1 rounded-full border border-slate-200 text-[10px] font-bold">
                    <Compass className="w-4 h-4 text-[#13263e]" />
                    <span>BẮC</span>
                  </div>
                </div>

                {/* Right: Floor Title + Interior Render */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="border-l-4 border-[#e09b3d] pl-4">
                    <p className="text-xs font-semibold uppercase text-slate-500">MẶT BẰNG</p>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#13263e] uppercase">
                      {currentFloor.floorTitle}
                    </h3>
                    <p className="text-xs font-bold text-slate-600 mt-0.5">
                      {currentFloor.floorSubtitle}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{currentFloor.areaRange}</p>
                  <div className="rounded overflow-hidden shadow-md border border-slate-200 aspect-[16/10]">
                    <img
                      src={currentFloor.image}
                      alt={currentFloor.floorTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 8: Tin Tức Về Dự Án (2 Framed Cards with Orange Date Circles) */}
      <section id="tin-tuc" className="py-16 md:py-20 bg-[#f5f6f8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#e09b3d] uppercase tracking-wide">
              TIN TỨC VỀ {data.business.name}
            </h2>
            <div className="w-16 h-0.5 bg-[#e09b3d] mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(data.news || []).slice(0, 2).map((post) => {
              const [day, month] = post.date.split(" ");
              return (
                <article key={post.id} className="group cursor-pointer">
                  {/* Framed Dark Navy Graphic Thumbnail */}
                  <div className="relative rounded overflow-hidden bg-[#13263e] aspect-[16/10] shadow-md border border-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#13263e]/20 via-transparent to-[#13263e]/85" />

                    {/* Top-Left Orange Date Circle */}
                    <div className="absolute top-3 left-3 w-11 h-11 rounded-full bg-[#e08b2c] text-white flex flex-col items-center justify-center leading-none shadow-md">
                      <span className="text-xs font-extrabold">{day || "25"}</span>
                      <span className="text-[9px] uppercase">{month || "Th12"}</span>
                    </div>

                    {/* Right Side Architectural Frame Overlay */}
                    <div className="absolute top-3 right-3 text-right">
                      <span className="text-[10px] font-bold tracking-widest text-[#e09b3d] uppercase">
                        {data.business.name}
                      </span>
                    </div>
                  </div>

                  {/* Centered Post Title & Excerpt */}
                  <div className="text-center px-3 pt-4">
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-[#e09b3d] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-slate-300 mx-auto my-2" />
                    <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer / Liên Hệ Chủ Đầu Tư (Dark Navy Night Background + Contact Form) */}
      <footer id="lien-he" className="relative bg-[#0d1b2e] text-white overflow-hidden">
        {/* Background Night Skyline Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src={data.hero.backgroundImage}
            alt="Footer Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1829]/95 via-[#0f2137]/90 to-[#0b1829]/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Info */}
            <div className="md:col-span-5 space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
                LIÊN HỆ CHỦ ĐẦU TƯ {data.business.name}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Quý khách hàng quan tâm đến dự án có thể liên hệ với chúng tôi qua thông tin sau
                hoặc điền vào biểu mẫu để được chúng tôi tư vấn hoàn toàn miễn phí.
              </p>

              <ul className="space-y-3 text-xs text-slate-200 pt-2">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e09b3d] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e09b3d] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#e09b3d] transition-colors font-semibold"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#e09b3d] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-[#e09b3d] transition-colors"
                  >
                    {primaryEmail}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#e09b3d] shrink-0" />
                  <span>Phòng kinh doanh & Nhà mẫu {data.business.name}</span>
                </li>
              </ul>
            </div>

            {/* Right Column: 2x2 Inputs + Textarea + Gold Submit Button */}
            <div className="md:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#e09b3d]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#e09b3d]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#e09b3d]"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    value={formState.address}
                    onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#e09b3d]"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Lời nhắn"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#e09b3d]"
                />
                <div className="text-center pt-1">
                  <button
                    type="submit"
                    className="bg-[#e09b3d] hover:bg-[#c9862b] text-white font-extrabold text-xs uppercase tracking-widest px-14 py-2.5 rounded-xs shadow-md transition-colors cursor-pointer"
                  >
                    GỬI
                  </button>
                </div>
                {formSubmitted && (
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-medium pt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đã gửi thông tin đăng ký tư vấn thành công!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="relative z-10 bg-[#07101c] py-3 text-center text-[11px] text-slate-400 border-t border-white/5">
          © Bản quyền thuộc về <span className="text-white font-semibold">{data.business.name}</span>{" "}
          • Phát triển trên nền tảng Kiến Trúc & Xây Dựng
        </div>
      </footer>

      {/* Lightbox Modal for Directional View */}
      {selectedViewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedViewModal(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const v = (data.views || []).find((item) => item.id === selectedViewModal);
              if (!v) return null;
              return (
                <>
                  <div className="relative aspect-[16/10]">
                    <img src={v.image} alt={v.direction} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setSelectedViewModal(null)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-sm text-[#13263e] uppercase">
                        {v.direction}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">{v.description}</p>
                    </div>
                    <a
                      href="#lien-he"
                      onClick={() => setSelectedViewModal(null)}
                      className="bg-[#e09b3d] text-white text-xs font-bold px-4 py-2 rounded"
                    >
                      Nhận bảng giá
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
