"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Search,
  Compass,
  Menu,
  X,
  MessageCircle,
  CheckCircle2,
  Building2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { xayDung12DefaultData, type XayDung12Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<XayDung12Data>(xayDung12DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFloorIdx, setActiveFloorIdx] = useState(0);
  const [activeLivingRoomImg, setActiveLivingRoomImg] = useState(
    data.apartmentGallery.livingRoom.image
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@asianacapella.vn";
  const currentFloor = data.floorPlans?.[activeFloorIdx] || data.floorPlans?.[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#5c1638] selection:text-white relative">
      {/* Floating Messenger Button */}
      <a
        href="#tu-van"
        className="fixed right-4 top-36 z-40 w-10 h-10 rounded-full bg-[#1890ff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Tư vấn trực tuyến"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Top Sticky White Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Plum Geometric Arches + Brand Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <svg width="36" height="30" viewBox="0 0 36 30" fill="none">
              <path
                d="M2 28V12L8 7L14 12V28"
                stroke="#5c1638"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 28V6L18 2L24 6V28"
                stroke="#882355"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M22 28V14L28 9L34 14V28"
                stroke="#b03b73"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <div className="leading-none">
              <span className="block text-sm sm:text-base font-extrabold tracking-tight text-[#5c1638] uppercase">
                {data.business.name.replace(/CAPELLA/i, "").trim() || "ASIANA"}
              </span>
              <span className="block text-[9px] tracking-[0.35em] text-slate-500 uppercase mt-0.5">
                CAPELLA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-slate-600">
            <a href="#gioi-thieu" className="text-[#5c1638] hover:text-[#882355] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#tong-quan" className="hover:text-[#5c1638] transition-colors">
              TỔNG QUAN
            </a>
            <a href="#vi-tri" className="hover:text-[#5c1638] transition-colors">
              VỊ TRÍ
            </a>
            <a href="#tien-ich" className="hover:text-[#5c1638] transition-colors">
              TIỆN ÍCH
            </a>
            <a href="#mat-bang" className="hover:text-[#5c1638] transition-colors">
              MẶT BẰNG
            </a>
            <a href="#hinh-anh" className="hover:text-[#5c1638] transition-colors">
              HÌNH ẢNH
            </a>
            <a href="#tu-van" className="hover:text-[#5c1638] transition-colors">
              TƯ VẤN
            </a>
            <a href="#tin-tuc" className="hover:text-[#5c1638] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#5c1638] transition-colors">
              LIÊN HỆ
            </a>
            <a
              href="#tu-van"
              className="text-slate-500 hover:text-[#5c1638] transition-colors pl-1"
              title="Tìm kiếm"
            >
              <Search className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 text-xs font-bold uppercase">
            {[
              { href: "#gioi-thieu", label: "GIỚI THIỆU" },
              { href: "#tong-quan", label: "TỔNG QUAN" },
              { href: "#vi-tri", label: "VỊ TRÍ" },
              { href: "#tien-ich", label: "TIỆN ÍCH" },
              { href: "#mat-bang", label: "MẶT BẰNG" },
              { href: "#hinh-anh", label: "HÌNH ẢNH" },
              { href: "#tu-van", label: "TƯ VẤN" },
              { href: "#tin-tuc", label: "TIN TỨC" },
              { href: "#lien-he", label: "LIÊN HỆ" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-slate-700 hover:text-[#5c1638]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section — Aerial 3D Complex + Left Dark Teal Translucent Overlay Box */}
      <section className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] overflow-hidden bg-[#102a32]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="bg-[#112d36]/85 backdrop-blur-xs text-white p-6 sm:p-8 max-w-md border-l-4 border-[#d49a35] shadow-2xl">
            <h1 className="text-xl sm:text-2xl md:text-[26px] font-serif font-normal uppercase tracking-wide leading-snug">
              {data.business.name} RESIDENCE
            </h1>
            <p className="text-xs sm:text-[13px] text-slate-200 mt-3 leading-relaxed">
              {data.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Giới Thiệu Dự Án (White Background, 2 Columns) */}
      <section id="gioi-thieu" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left Text */}
            <div className="md:col-span-6 space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wide">
                {data.introSection.title}
              </h2>
              <p className="text-xs sm:text-sm font-extrabold text-slate-800">
                {data.introSection.subtitle}
              </p>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed text-justify pt-1">
                {(data.business.aboutText?.length
                  ? data.business.aboutText
                  : data.introSection.paragraphs
                ).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Architectural Tower Cutout/Perspective */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-xs overflow-hidden shadow-xl border border-slate-100">
                <img
                  src={data.introSection.towerImage}
                  alt={data.business.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tổng Quan Dự Án (Full-Width Sky & Tower Left + Royal Plum #5c1638 Box Right) */}
      <section id="tong-quan" className="relative bg-[#1c4e80] overflow-hidden">
        <img
          src={data.overviewSection.backgroundImage}
          alt={data.overviewSection.title}
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e355c]/30 via-transparent to-[#1a0912]/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-5" />

            {/* Right Royal Plum Specification Box */}
            <div className="lg:col-span-7 bg-[#5c1638]/95 backdrop-blur-xs text-white p-7 sm:p-10 shadow-2xl">
              <h2 className="text-xl sm:text-2xl font-serif uppercase tracking-wider text-white mb-5">
                {data.overviewSection.title}
              </h2>

              <ul className="space-y-2 text-[11px] sm:text-xs text-slate-100 leading-relaxed">
                {(data.overviewSection.specs || []).map((spec) => {
                  const val =
                    spec.id === "ov-1"
                      ? `${data.business.name} Residence`
                      : spec.id === "ov-2"
                      ? data.business.address
                      : spec.value;
                  return (
                    <li key={spec.id}>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-300 font-bold">•</span>
                        <span>
                          <strong className="font-bold text-white">{spec.label}:</strong> {val}
                        </span>
                      </div>
                      {spec.subItems && (
                        <ul className="pl-5 mt-1 space-y-1 text-[11px] text-slate-200">
                          {spec.subItems.map((sub, sIdx) => (
                            <li key={sIdx}>{sub}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vị Trí Đắc Địa & Liên Kết Với Các Nơi */}
      <section id="vi-tri" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Top Row: Left Text + Right Gold-Bordered Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-6 space-y-2.5">
              <h2 className="text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wide">
                {data.locationSection.title}
              </h2>
              <p className="text-xs sm:text-sm font-extrabold text-slate-800">
                {data.locationSection.subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed text-justify pt-1">
                {data.locationSection.description}
              </p>
            </div>

            {/* Right Gold-Framed Illustrated Map */}
            <div className="lg:col-span-6">
              <div className="border-2 border-[#d49a35] rounded-xs p-2 bg-[#fffdf7] shadow-md">
                <svg viewBox="0 0 500 280" className="w-full h-auto bg-[#fcf8ee]">
                  {/* River Canal (Võ Văn Kiệt / Tàu Hủ - Lò Gốm) */}
                  <path
                    d="M0,235 Q180,210 310,165 T500,195 L500,220 Q310,185 180,235 L0,255 Z"
                    fill="#bae6fd"
                  />
                  {/* Main Arterial Roads */}
                  <g stroke="#cbd5e1" strokeWidth="7" fill="none">
                    <path d="M10,130 L490,70" />
                    <path d="M90,10 L170,270" />
                    <path d="M230,10 L260,270" />
                    <path d="M350,10 L380,270" />
                  </g>
                  <g stroke="#f59e0b" strokeWidth="3.5" fill="none">
                    <path d="M10,175 L490,115" />
                    <path d="M0,225 Q180,200 310,155 T500,185" />
                  </g>

                  {/* Street Names */}
                  <text x="275" y="132" fill="#92400e" fontSize="9" fontWeight="bold">
                    HẬU GIANG
                  </text>
                  <text x="315" y="185" fill="#92400e" fontSize="9" fontWeight="bold">
                    ĐẠI LỘ VÕ VĂN KIỆT
                  </text>
                  <text x="80" y="95" fill="#475569" fontSize="8" fontWeight="bold">
                    KINH DƯƠNG VƯƠNG
                  </text>
                  <text x="385" y="55" fill="#475569" fontSize="8" fontWeight="bold">
                    QUẬN 11
                  </text>
                  <text x="395" y="255" fill="#475569" fontSize="8" fontWeight="bold">
                    QUẬN 8
                  </text>

                  {/* Project Location Star & Label */}
                  <g transform="translate(215, 160)">
                    <circle cx="0" cy="0" r="9" fill="#5c1638" />
                    <circle cx="0" cy="0" r="4" fill="#fbbf24" />
                    <rect
                      x="-62"
                      y="-30"
                      width="124"
                      height="18"
                      rx="3"
                      fill="#5c1638"
                    />
                    <text
                      x="0"
                      y="-18"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="8"
                      fontWeight="bold"
                    >
                      {data.business.name}
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Row: Liên Kết Với Các Nơi (4x2 Photo Grid) */}
          <div>
            <h3 className="text-xs sm:text-sm font-serif font-bold text-slate-800 mb-4">
              {data.locationSection.nearbyTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {(data.locationSection.nearbyImages || []).map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[16/10] rounded-xs overflow-hidden shadow-xs bg-slate-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5">
                    <div>
                      <p className="text-[11px] font-bold text-white leading-tight">{item.name}</p>
                      <span className="text-[9px] text-amber-300 font-semibold">
                        Cách {item.distance}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Những Tiện Ích Vàng (Alternating Vertical Timeline with Circular Photos) */}
      <section id="tien-ich" className="py-16 md:py-20 bg-[#f3f5f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wider mb-12">
            NHỮNG TIỆN ÍCH VÀNG
          </h2>

          <div className="space-y-6">
            {(data.goldenAmenities || []).map((item, idx) => {
              const isOddRow = idx % 2 === 0; // Row 1, 3, 5, 7: Text Left, Circle Photo Right
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 sm:gap-6"
                >
                  {isOddRow ? (
                    <>
                      <div className="sm:col-span-6 text-center sm:text-right sm:pr-4 order-2 sm:order-1">
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-xs sm:ml-auto mx-auto">
                          {item.description}
                        </p>
                      </div>
                      <div className="sm:col-span-6 flex justify-center sm:justify-start order-1 sm:order-2">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="sm:col-span-6 flex justify-center sm:justify-end">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6 text-center sm:text-left sm:pl-4">
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-xs sm:mr-auto mx-auto">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Mặt Bằng Các Tầng (Interactive Plum Tabs + Architectural Floor Plan) */}
      <section id="mat-bang" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wider mb-6">
            MẶT BẰNG CÁC TẦNG
          </h2>

          {/* Interactive Floor Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {(data.floorPlans || []).map((fp, idx) => {
              const isActive = idx === activeFloorIdx;
              return (
                <button
                  key={fp.id}
                  type="button"
                  onClick={() => setActiveFloorIdx(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#5c1638] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {fp.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Architectural Master Plan Diagram matching screenshot */}
          {currentFloor && (
            <div className="relative max-w-4xl mx-auto">
              {/* Top Compass & Label */}
              <div className="flex items-center justify-between mb-2 px-4">
                <div className="flex-1 text-center">
                  <span className="text-xs sm:text-sm font-bold text-[#14532d]">
                    Công viên Bình Phú
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-[10px] font-bold">
                  <Compass className="w-5 h-5 text-[#5c1638]" />
                  <span>BẮC</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Left Vertical Label */}
                <div className="hidden sm:flex items-center justify-center w-6">
                  <span className=" -rotate-90 whitespace-nowrap text-xs font-bold text-[#14532d]">
                    Khu dân cư Bình Phú
                  </span>
                </div>

                {/* Main Architectural Blueprint SVG */}
                <div className="flex-1 bg-[#f8fafc] border border-slate-200 rounded p-4 shadow-sm">
                  <svg viewBox="0 0 680 340" className="w-full h-auto">
                    {/* Left Road */}
                    <path d="M25,10 L85,10 L100,330 L20,330 Z" fill="#e2e8f0" stroke="#475569" />
                    <line
                      x1="58"
                      y1="15"
                      x2="62"
                      y2="325"
                      stroke="#475569"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                    />

                    {/* Surrounding Lush Trees */}
                    <rect
                      x="115"
                      y="25"
                      width="520"
                      height="275"
                      rx="18"
                      fill="#dcfce7"
                      stroke="#15803d"
                      strokeWidth="2"
                    />

                    {/* Top Row Units (Teal/Emerald blocks) */}
                    <g fill="#5eead4" stroke="#0f766e" strokeWidth="1.5">
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <rect key={i} x={190 + i * 42} y={48} width="40" height="58" />
                      ))}
                    </g>

                    {/* Left Wing Units */}
                    <g fill="#6ee7b7" stroke="#047857" strokeWidth="1.5">
                      {[0, 1, 2].map((i) => (
                        <rect key={i} x={145} y={95 + i * 48} width="55" height="45" />
                      ))}
                    </g>

                    {/* Right Wing Units */}
                    <g fill="#6ee7b7" stroke="#047857" strokeWidth="1.5">
                      {[0, 1, 2].map((i) => (
                        <rect key={i} x={530} y={95 + i * 48} width="55" height="45" />
                      ))}
                    </g>

                    {/* Center Courtyard / Pool / Corridor */}
                    <rect
                      x="210"
                      y="112"
                      width="310"
                      height="85"
                      fill="#f1f5f9"
                      stroke="#64748b"
                      strokeWidth="1.5"
                    />
                    <text
                      x="365"
                      y="152"
                      textAnchor="middle"
                      fill="#5c1638"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {currentFloor.zoneSummary}
                    </text>
                    <text x="365" y="170" textAnchor="middle" fill="#475569" fontSize="10">
                      {currentFloor.unitCount}
                    </text>

                    {/* Bottom Row Units */}
                    <g fill="#5eead4" stroke="#0f766e" strokeWidth="1.5">
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <rect key={i} x={190 + i * 42} y={205} width="40" height="62" />
                      ))}
                    </g>

                    {/* Bottom Label: Đại lộ Võ Văn Kiệt */}
                    <text
                      x="540"
                      y="322"
                      textAnchor="middle"
                      fill="#14532d"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      Đại lộ Võ Văn Kiệt
                    </text>
                  </svg>

                  {/* Bottom Center Floor Label Box */}
                  <div className="flex flex-col items-center -mt-3">
                    <div className="bg-white border-2 border-[#0f766e] px-8 py-1.5 shadow-xs">
                      <span className="text-xs sm:text-sm font-extrabold text-[#0f4c5c] uppercase tracking-wider">
                        {currentFloor.badgeLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2">{currentFloor.highlight}</p>
                  </div>
                </div>

                {/* Right Vertical Label */}
                <div className="hidden sm:flex items-center justify-center w-6">
                  <span className="-rotate-90 whitespace-nowrap text-xs font-bold text-[#14532d]">
                    View sông
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: Hình Ảnh Căn Hộ (3-Column Bento Gallery matching screenshot) */}
      <section id="hinh-anh" className="py-16 md:py-20 bg-[#f3f5f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wider mb-10">
            HÌNH ẢNH CĂN HỘ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {/* Left Column: Tall Kitchen Card */}
            <div className="md:col-span-3 relative rounded-xs overflow-hidden shadow-md min-h-[300px] md:min-h-[380px] group">
              <img
                src={data.apartmentGallery.kitchen.image}
                alt={data.apartmentGallery.kitchen.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                <h3 className="text-xs sm:text-sm font-bold">
                  {data.apartmentGallery.kitchen.title}
                </h3>
                <p className="text-[10px] text-slate-300">
                  {data.apartmentGallery.kitchen.subtitle}
                </p>
              </div>
            </div>

            {/* Center Column: Top Large Living Room + Bottom 3 Thumbnails */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="relative rounded-xs overflow-hidden shadow-md flex-1 min-h-[220px] group">
                <img
                  src={activeLivingRoomImg}
                  alt={data.apartmentGallery.livingRoom.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                  <h3 className="text-xs sm:text-sm font-bold">
                    {data.apartmentGallery.livingRoom.title}
                  </h3>
                  <p className="text-[10px] text-slate-300">
                    {data.apartmentGallery.livingRoom.subtitle}
                  </p>
                </div>
              </div>

              {/* 3 Interactive Thumbnails */}
              <div className="grid grid-cols-3 gap-3 h-24 sm:h-28">
                {(data.apartmentGallery.thumbnails || []).map((thumb) => (
                  <button
                    key={thumb.id}
                    type="button"
                    onClick={() => setActiveLivingRoomImg(thumb.image)}
                    className={`relative rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${
                      activeLivingRoomImg === thumb.image
                        ? "border-[#5c1638] scale-[1.02]"
                        : "border-transparent opacity-85 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Tall Bathroom Card */}
            <div className="md:col-span-3 relative rounded-xs overflow-hidden shadow-md min-h-[300px] md:min-h-[380px] group">
              <img
                src={data.apartmentGallery.bathroom.image}
                alt={data.apartmentGallery.bathroom.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                <h3 className="text-xs sm:text-sm font-bold">
                  {data.apartmentGallery.bathroom.title}
                </h3>
                <p className="text-[10px] text-slate-300">
                  {data.apartmentGallery.bathroom.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Đăng Ký Tư Vấn (Left Form + Hotline Pill | Right Consultant Photo) */}
      <section id="tu-van" className="pt-16 pb-0 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left Form */}
            <div className="md:col-span-6 pb-14">
              <h2 className="text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wide mb-3">
                ĐĂNG KÝ TƯ VẤN
              </h2>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                  Gọi ngay Hotline:
                </span>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="border border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white text-xs font-extrabold px-4 py-1.5 rounded-xs transition-colors"
                >
                  {primaryPhone}
                </a>
              </div>

              <p className="text-xs text-slate-500 mb-5">
                Để nhận thông tin chính xác về giá và các ưu đãi, hãy đăng ký với chúng tôi ngay
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Họ và tên"
                  value={formState.fullName}
                  onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  className="w-full border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#5c1638]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#5c1638]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#5c1638]"
                />
                <textarea
                  rows={4}
                  placeholder="Lời nhắn"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#5c1638]"
                />
                <div className="text-center pt-1">
                  <button
                    type="submit"
                    className="bg-[#5c1638] hover:bg-[#46102a] text-white text-xs font-extrabold uppercase tracking-widest px-14 py-2.5 rounded-xs shadow-sm transition-colors cursor-pointer"
                  >
                    GỬI
                  </button>
                </div>
                {formSubmitted && (
                  <p className="text-xs text-emerald-600 font-semibold text-center flex items-center justify-center gap-1.5 pt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đã gửi yêu cầu tư vấn thành công!</span>
                  </p>
                )}
              </form>
            </div>

            {/* Right Consultant Image */}
            <div className="md:col-span-6 flex justify-center">
              <img
                src={data.consultantImage}
                alt="Chuyên viên tư vấn dự án"
                className="w-full max-w-sm h-[420px] object-cover object-top rounded-t-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Tin Tức – Sự Kiện (3-Column White Cards on #f3f5f7) */}
      <section id="tin-tuc" className="py-16 md:py-20 bg-[#f3f5f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-serif text-[#5c1638] uppercase tracking-wider mb-10">
            TIN TỨC – SỰ KIỆN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-shadow border border-slate-200/70 group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xs font-extrabold text-slate-800 group-hover:text-[#5c1638] transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-slate-200 mx-auto my-2" />
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — Dark Charcoal #141619 with 4 Columns & Support Partner Badges */}
      <footer id="lien-he" className="bg-[#141619] text-slate-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Chủ Đầu Tư */}
            <div className="lg:col-span-3 space-y-2.5 text-xs">
              <p className="text-[11px] text-slate-400">Chủ đầu tư</p>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase text-white tracking-wide">
                CTY TNHH {data.business.name}
              </h3>
              <div className="space-y-2 pt-1 text-[11px] text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {primaryPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <a href={`mailto:${primaryEmail}`} className="hover:text-white">
                    {primaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: MENU (2 Sub-Columns) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                MENU
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-400">
                <a href="#" className="text-[#a8386b] font-semibold">
                  Trang chủ
                </a>
                <a href="#tong-quan" className="hover:text-white">
                  Tổng quan
                </a>
                <a href="#vi-tri" className="hover:text-white">
                  Vị trí
                </a>
                <a href="#hinh-anh" className="hover:text-white">
                  Thiết kế
                </a>
                <a href="#tien-ich" className="hover:text-white">
                  Tiện ích
                </a>
                <a href="#mat-bang" className="hover:text-white">
                  Sơ đồ
                </a>
                <a href="#mat-bang" className="hover:text-white">
                  Sản phẩm
                </a>
                <a href="#tu-van" className="hover:text-white">
                  Giá bán
                </a>
                <a href="#lien-he" className="hover:text-white">
                  Liên hệ
                </a>
              </div>
            </div>

            {/* Col 3: TIN TỨC */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                TIN TỨC
              </h3>
              <div className="space-y-2.5">
                {(data.news || []).slice(0, 3).map((post) => (
                  <a key={post.id} href="#tin-tuc" className="flex items-center gap-2.5 group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-12 h-9 object-cover rounded-xs shrink-0 border border-white/10"
                    />
                    <span className="text-[11px] text-slate-300 group-hover:text-white line-clamp-2 leading-snug">
                      {post.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: ĐƠN VỊ HỖ TRỢ (2x2 Partner Logos) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                ĐƠN VỊ HỖ TRỢ
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {(data.supportPartners || []).map((sp) => (
                  <div
                    key={sp.id}
                    className="bg-white/5 border border-white/10 rounded-xs p-2.5 flex flex-col items-center justify-center text-center"
                  >
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" style={{ color: sp.badgeColor }} />
                      <span
                        className="text-xs font-black tracking-tight"
                        style={{ color: sp.badgeColor }}
                      >
                        {sp.name}
                      </span>
                    </div>
                    <span className="text-[8px] text-slate-400 uppercase mt-0.5">{sp.subtext}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-[#0d0e10] py-3 text-center text-[11px] text-slate-500 border-t border-white/5">
          © Bản quyền thuộc về <span className="text-slate-300 font-semibold">{data.business.name}</span>{" "}
          • Thiết kế &amp; Phát triển Đô Thị
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
