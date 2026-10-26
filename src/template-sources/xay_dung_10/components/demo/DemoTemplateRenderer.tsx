"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Download,
  Award,
  Compass,
  Building2,
  Sun,
  Play,
  Menu,
  X,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { xayDung10DefaultData, type XayDung10Data } from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<XayDung10Data>(xayDung10DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedVillaId, setSelectedVillaId] = useState<string | null>(null);
  const [activeGalleryModal, setActiveGalleryModal] = useState<{
    title: string;
    caption: string;
    image: string;
  } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@monahills-muine.vn";

  const renderReasonIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-8 h-8 text-[#d6ad60] stroke-[1.5]" />;
      case "compass":
        return <Compass className="w-8 h-8 text-[#d6ad60] stroke-[1.5]" />;
      case "building":
        return <Building2 className="w-8 h-8 text-[#d6ad60] stroke-[1.5]" />;
      default:
        return <Sun className="w-8 h-8 text-[#d6ad60] stroke-[1.5]" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0d4a42] selection:text-white relative">
      {/* Top Sticky Deep Emerald Navbar (#0a3832) */}
      <header className="sticky top-0 z-50 bg-[#0a3832] text-white shadow-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center leading-none shrink-0">
            <span className="text-xl sm:text-2xl font-serif tracking-wide text-white font-normal">
              {data.business.name}
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#d6ad60] font-bold mt-0.5">
              MUI NE
            </span>
            <span className="text-[7px] tracking-[0.2em] uppercase text-slate-300">
              RESORT &amp; VILLAS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-slate-100">
            <a href="#tong-quan" className="text-[#d6ad60] hover:text-white transition-colors">
              TỔNG QUAN DỰ ÁN
            </a>
            <a href="#mat-bang" className="hover:text-[#d6ad60] transition-colors">
              MẶT BẰNG TIỆN ÍCH
            </a>
            <a href="#biet-thu" className="hover:text-[#d6ad60] transition-colors">
              BIỆT THỰ
            </a>
            <a href="#thu-vien" className="hover:text-[#d6ad60] transition-colors">
              THƯ VIỆN
            </a>
            <a href="#ly-do" className="hover:text-[#d6ad60] transition-colors">
              LÝ DO
            </a>
            <a href="#tin-tuc" className="hover:text-[#d6ad60] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#d6ad60] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Gold Gradient CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="#lien-he"
              className="bg-gradient-to-r from-[#e5c478] via-[#d6ad60] to-[#b88c38] hover:brightness-110 text-[#0a3832] text-xs font-extrabold uppercase tracking-wider px-5 py-2 rounded-xs shadow-md transition-all"
            >
              ĐĂNG KÝ
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#072924] border-t border-white/10 px-4 py-4 space-y-2.5 text-xs font-bold uppercase">
            {[
              { href: "#tong-quan", label: "TỔNG QUAN DỰ ÁN" },
              { href: "#mat-bang", label: "MẶT BẰNG TIỆN ÍCH" },
              { href: "#biet-thu", label: "BIỆT THỰ" },
              { href: "#thu-vien", label: "THƯ VIỆN" },
              { href: "#ly-do", label: "LÝ DO" },
              { href: "#tin-tuc", label: "TIN TỨC" },
              { href: "#lien-he", label: "LIÊN HỆ" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-slate-100 hover:text-[#d6ad60]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section + Bottom 4-Column Translucent Glass Highlights Bar */}
      <section id="tong-quan" className="relative w-full min-h-[540px] md:min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0a3832]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-[#0a3832]/85" />

        {/* Right Floating Gold Action Buttons */}
        <div className="hidden sm:flex fixed right-4 top-28 z-40 flex-col items-center gap-2.5">
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e5c478] to-[#b88c38] text-[#0a3832] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            title={`Gọi ${primaryPhone}`}
          >
            <Phone className="w-4 h-4 fill-current" />
          </a>
          <a
            href={`mailto:${primaryEmail}`}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e5c478] to-[#b88c38] text-[#0a3832] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            title="Gửi email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#vi-tri"
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e5c478] to-[#b88c38] text-[#0a3832] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            title="Vị trí dự án"
          >
            <MapPin className="w-4 h-4" />
          </a>
          <a
            href="#lien-he"
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e5c478] to-[#b88c38] text-[#0a3832] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            title="Tải Brochure"
          >
            <Download className="w-4 h-4" />
          </a>
          <a
            href="#lien-he"
            className="w-10 h-10 rounded-full bg-[#1890ff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform mt-1"
            title="Chat tư vấn"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
        </div>

        {/* Center Hero Headline */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] max-w-3xl leading-tight">
            {data.hero.title}
          </h1>
        </div>

        {/* Bottom 4-Column Translucent Glass Highlights Strip */}
        <div className="relative z-10 bg-[#0d4a42]/75 backdrop-blur-md border-t border-white/20 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-white/20">
              {(data.heroHighlights || []).map((hl, idx) => (
                <div key={hl.id} className={idx > 0 ? "lg:pl-6" : ""}>
                  <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-2">
                    {hl.title}
                  </h2>
                  <ul className="space-y-1 text-xs text-slate-100">
                    {hl.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#d6ad60] font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Vị Trí Đẹp - Cho Vạn Kết Nối (Split Teal Gradient + Illustrated Resort Bay Map) */}
      <section id="vi-tri" className="relative bg-gradient-to-r from-[#083a34] via-[#0d5249] to-[#1aa39b] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Text Block */}
            <div className="lg:col-span-5 px-6 sm:px-10 py-14 md:py-16 flex flex-col justify-center relative z-10 bg-gradient-to-r from-[#083a34] via-[#0a443c]/95 to-transparent">
              <p className="text-xs sm:text-sm font-semibold text-[#d6ad60] mb-1">
                {data.locationSection.eyebrow}
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white mb-4">
                {data.locationSection.title}
              </h2>
              <div className="space-y-3 text-xs leading-relaxed text-slate-100/90 mb-6 text-justify">
                {data.locationSection.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div>
                <a
                  href="#lien-he"
                  className="inline-block bg-gradient-to-r from-[#e5c478] via-[#d6ad60] to-[#b88c38] hover:brightness-110 text-[#0a3832] text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-xs shadow-md transition-all"
                >
                  {data.locationSection.ctaText}
                </a>
              </div>
            </div>

            {/* Right Illustrated Map of Mũi Né Peninsula & Bay */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[400px] bg-[#fdfaf2] overflow-hidden flex items-center justify-center">
              {/* Cream landmass & Turquoise sea SVG matching the exact screenshot map */}
              <svg viewBox="0 0 700 440" className="w-full h-full object-cover" preserveAspectRatio="none">
                {/* Cream Land Background */}
                <rect width="700" height="440" fill="#fbf7ec" />
                {/* Turquoise Sea Bay at bottom & right */}
                <path
                  d="M0,330 Q180,310 340,260 T560,350 L700,320 L700,440 L0,440 Z"
                  fill="#19a89d"
                />
                <path
                  d="M0,355 Q200,335 355,285 T555,375 L700,350 L700,440 L0,440 Z"
                  fill="#139389"
                />
                {/* Major Highway Routes (Dark Emerald & Gold lines) */}
                <g stroke="#0a3832" strokeWidth="4.5" fill="none" strokeLinecap="round">
                  <path d="M90,20 L240,115 L485,80 L680,145" />
                  <path d="M240,115 L205,280 L365,245 L540,325" />
                  <path d="M485,80 L455,220 L555,265 L685,205" />
                  <path d="M365,245 L455,220" />
                </g>
                <g stroke="#d6ad60" strokeWidth="2.5" fill="none" strokeDasharray="5 4">
                  <path d="M205,280 Q320,255 445,275 T565,335" />
                </g>

                {/* Landmark Nodes */}
                <circle cx="485" cy="155" r="24" fill="#fff" stroke="#d6ad60" strokeWidth="2" />
                <text x="485" y="153" textAnchor="middle" fill="#0a3832" fontSize="8" fontWeight="bold">
                  THÀNH PHỐ
                </text>
                <text x="485" y="163" textAnchor="middle" fill="#0a3832" fontSize="8" fontWeight="bold">
                  PHAN THIẾT
                </text>

                <text x="395" y="210" fill="#0a3832" fontSize="9" fontWeight="bold">
                  HÀM TIẾN
                </text>
                <text x="275" y="295" fill="#0a3832" fontSize="9" fontWeight="bold">
                  PHÚ HẢI
                </text>
                <text x="515" y="315" fill="#0a3832" fontSize="9" fontWeight="bold">
                  MŨI NÉ
                </text>

                {/* Project Pin Highlight */}
                <g transform="translate(505, 255)">
                  <rect x="-52" y="-26" width="104" height="24" rx="4" fill="#0a3832" stroke="#d6ad60" strokeWidth="1.5" />
                  <text x="0" y="-11" textAnchor="middle" fill="#e5c478" fontSize="9" fontWeight="bold">
                    {data.business.name.toUpperCase()}
                  </text>
                  <circle cx="0" cy="6" r="6" fill="#d6ad60" stroke="#0a3832" strokeWidth="2" />
                </g>
              </svg>

              {/* Soft Teal Blend on Left Edge */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a443c] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 10 Lý Do Nên Đầu Tư (Misty Coastal Background + 4 Vertical Emerald Cards 01 - 04) */}
      <section id="ly-do" className="relative py-16 md:py-24 overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm font-semibold text-[#0a3832]">
              10 lý do nên đầu tư
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#0a3832] mt-1">
              {data.business.name.toUpperCase()} MUI NE RESORT &amp; VILLAS
            </h2>
          </div>

          {/* 4 Tall Vertical Emerald Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.investmentReasons || []).map((reason) => (
              <div
                key={reason.id}
                className="bg-gradient-to-b from-[#0b3d36]/95 via-[#0f4f46]/90 to-[#1b6b60]/80 text-white rounded-xs px-5 py-8 flex flex-col items-center justify-between text-center shadow-xl border border-white/15 min-h-[310px] hover:-translate-y-1 transition-transform"
              >
                <div className="pt-1">{renderReasonIcon(reason.icon)}</div>
                <p className="text-xs leading-relaxed text-slate-100 my-6">
                  {reason.description}
                </p>
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-b from-[#f0d28c] to-[#b88c38] bg-clip-text text-transparent tracking-wider">
                  {reason.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Kiến Trúc Tây Ban Nha - Khác Biệt Và Ấn Tượng (Sunset Sky Background + 3 Villa Cards) */}
      <section id="biet-thu" className="relative py-16 md:py-24 overflow-hidden bg-[#1e1b24] text-white">
        <img
          src={data.villaCollection.backgroundImage}
          alt={data.villaCollection.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm Sunset Amber-Rose Overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5e3a32]/80 via-[#b85d38]/55 to-[#0a2e2a]/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-medium text-amber-200 mb-1">
              {data.villaCollection.eyebrow}
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white mb-3">
              {data.villaCollection.title}
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-100 leading-relaxed">
              {data.villaCollection.description}
            </p>
          </div>

          {/* 3 Villa Cards with Center Dark Emerald Translucent Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.villaCollection.villas || []).map((villa) => (
              <div
                key={villa.id}
                onClick={() => setSelectedVillaId(villa.id)}
                className="relative rounded-xs overflow-hidden aspect-[4/3] shadow-2xl cursor-pointer group border border-white/15"
              >
                <img
                  src={villa.image}
                  alt={`${villa.name} ${villa.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />

                {/* Centered Dark Emerald Translucent Label Box */}
                <div className="absolute inset-6 sm:inset-8 bg-[#0a3832]/85 backdrop-blur-[2px] border border-[#d6ad60]/30 flex flex-col items-center justify-center text-center p-4 group-hover:bg-[#0a3832]/95 transition-colors">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {villa.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 font-normal mt-0.5">
                    {villa.subtitle}
                  </p>
                  <span className="text-[10px] text-[#d6ad60] uppercase tracking-widest mt-2 opacity-80 group-hover:opacity-100">
                    Xem mặt bằng →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Mặt Bằng Tiện Ích (Deep Emerald #0b3c35 Background, 2x2 Grid Left + Text Right) */}
      <section id="mat-bang" className="py-16 md:py-20 bg-[#0b3c35] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 2x2 Amenity Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
              {(data.masterPlanSection.items || []).map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    setActiveGalleryModal({
                      title: item.label,
                      caption: item.description,
                      image: item.image
                    })
                  }
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-xs overflow-hidden bg-slate-900 border border-white/10 shadow-md">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-center text-xs text-slate-200 mt-2 font-medium group-hover:text-[#d6ad60] transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Text & CTA */}
            <div className="lg:col-span-6 lg:pt-4 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white">
                {data.masterPlanSection.title}
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed text-justify">
                {data.masterPlanSection.description}
              </p>
              <div className="pt-2">
                <a
                  href="#lien-he"
                  className="inline-block bg-gradient-to-r from-[#e5c478] via-[#d6ad60] to-[#b88c38] hover:brightness-110 text-[#0a3832] text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-xs shadow-md transition-all"
                >
                  {data.masterPlanSection.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Thư Viện (White Header + Full-Width 3-Panel Split Bento Grid) */}
      <section id="thu-vien" className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#0a3832]">
            {data.gallerySection.title}
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
            {data.gallerySection.subtitle}
          </p>
        </div>

        {/* Full-Width Edge-to-Edge Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Half: Tall Video Card */}
          <div
            onClick={() =>
              setActiveGalleryModal({
                title: data.gallerySection.videoCard.label,
                caption: data.gallerySection.videoCard.caption,
                image: data.gallerySection.videoCard.image
              })
            }
            className="relative h-[320px] md:h-[440px] overflow-hidden cursor-pointer group"
          >
            <img
              src={data.gallerySection.videoCard.image}
              alt={data.gallerySection.videoCard.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="bg-[#0a3832]/85 border border-[#d6ad60]/40 px-14 py-8 text-center shadow-xl group-hover:scale-105 transition-transform">
                <Play className="w-6 h-6 text-[#d6ad60] mx-auto mb-1 fill-current" />
                <span className="text-lg font-bold text-white tracking-wide">
                  {data.gallerySection.videoCard.label}
                </span>
              </div>
            </div>
          </div>

          {/* Right Half: 2 Stacked Cards (Nhà mẫu & Toàn khu) */}
          <div className="grid grid-rows-2 h-[360px] md:h-[440px]">
            <div
              onClick={() =>
                setActiveGalleryModal({
                  title: data.gallerySection.modelHouseCard.label,
                  caption: data.gallerySection.modelHouseCard.caption,
                  image: data.gallerySection.modelHouseCard.image
                })
              }
              className="relative overflow-hidden cursor-pointer group"
            >
              <img
                src={data.gallerySection.modelHouseCard.image}
                alt={data.gallerySection.modelHouseCard.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-[#0a3832]/85 border border-[#d6ad60]/40 px-12 py-4 text-center shadow-xl">
                  <span className="text-base sm:text-lg font-bold text-white">
                    {data.gallerySection.modelHouseCard.label}
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                setActiveGalleryModal({
                  title: data.gallerySection.panoramaCard.label,
                  caption: data.gallerySection.panoramaCard.caption,
                  image: data.gallerySection.panoramaCard.image
                })
              }
              className="relative overflow-hidden cursor-pointer group"
            >
              <img
                src={data.gallerySection.panoramaCard.image}
                alt={data.gallerySection.panoramaCard.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="bg-[#0a3832]/85 border border-[#d6ad60]/40 px-12 py-4 text-center shadow-xl">
                  <span className="text-base sm:text-lg font-bold text-white">
                    {data.gallerySection.panoramaCard.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Tin Tức – Sự Kiện (Coastal Infinity Pool Background + 3 News Cards) */}
      <section id="tin-tuc" className="relative py-16 md:py-24 overflow-hidden bg-[#bfe8e6]">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80"
          alt="Coastal Pool Background"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b82a6]/55 via-white/40 to-[#a5ece7]/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white drop-shadow-md mb-10">
            TIN TỨC – SỰ KIỆN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).slice(0, 3).map((post) => {
              const [day, month] = post.date.split(" ");
              return (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative aspect-[16/10] rounded-xs overflow-hidden shadow-lg bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Top-Left Dark Emerald Circular Date Badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#0a3832] text-white border border-white/30 flex flex-col items-center justify-center leading-none shadow-md">
                      <span className="text-xs font-extrabold">{day || "14"}</span>
                      <span className="text-[9px]">{month || "Th12"}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#0a3832] group-hover:text-[#15695d] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-700 mt-1.5 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer / Liên Hệ (Dark Emerald Overlay + Centered Logo + Developer Badge + Form) */}
      <footer id="lien-he" className="relative bg-[#072b26] text-white overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt="Footer Villa"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08332d]/90 via-[#072b26]/95 to-[#041a17]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          {/* Centered Resort Logo */}
          <div className="text-center mb-10">
            <div className="inline-flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-serif tracking-wide text-white">
                {data.business.name}
              </span>
              <span className="text-xs tracking-[0.3em] uppercase text-[#d6ad60] font-bold mt-1">
                MUI NE
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-slate-300">
                RESORT &amp; VILLAS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Left Contact Details & Developer Logo */}
            <div className="md:col-span-5 space-y-4 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d6ad60] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d6ad60] shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#d6ad60] font-semibold"
                >
                  {primaryPhone}
                </a>
              </div>

              <div className="pt-4">
                <p className="text-[11px] text-slate-300 mb-2">Nhà phát triển dự án</p>
                <div className="inline-flex flex-col items-start bg-white/5 border border-white/15 px-4 py-2.5 rounded">
                  <span className="text-base font-extrabold tracking-widest text-white uppercase">
                    MONA <span className="text-[#4ade80]">LAND</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-slate-300">
                    CHO CUỘC SỐNG BỪNG SÁNG
                  </span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="md:col-span-7">
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white mb-4">
                LIÊN HỆ
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#d6ad60]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#d6ad60]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#d6ad60]"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    value={formState.address}
                    onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#d6ad60]"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Lời nhắn"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#d6ad60]"
                />
                <div className="text-center pt-1">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#e5c478] via-[#d6ad60] to-[#b88c38] hover:brightness-110 text-[#0a3832] font-extrabold text-xs uppercase tracking-widest px-14 py-2.5 rounded-xs shadow-md transition-all cursor-pointer"
                  >
                    GỬI
                  </button>
                </div>
                {formSubmitted && (
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-300 font-medium pt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Cảm ơn quý khách! Chuyên viên tư vấn sẽ liên hệ ngay.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="relative z-10 bg-[#041815] py-3 text-center text-[11px] text-slate-400 border-t border-white/5">
          © Bản quyền thuộc về{" "}
          <span className="text-white font-semibold">{data.business.name} Mũi Né Resort &amp; Villas</span>
        </div>
      </footer>

      {/* Villa Detail Modal */}
      {selectedVillaId && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedVillaId(null)}
        >
          <div
            className="bg-white rounded-md max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const v = (data.villaCollection.villas || []).find((item) => item.id === selectedVillaId);
              if (!v) return null;
              return (
                <>
                  <div className="relative aspect-[16/9]">
                    <img src={v.floorPlanImage} alt={v.name} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setSelectedVillaId(null)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a3832]">
                        {v.zone}
                      </span>
                      <h4 className="text-lg font-extrabold text-slate-900">
                        {v.name} {v.subtitle}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">{v.area}</p>
                    </div>
                    <a
                      href="#lien-he"
                      onClick={() => setSelectedVillaId(null)}
                      className="bg-[#0a3832] text-[#d6ad60] text-xs font-bold uppercase px-5 py-2.5 rounded-xs shrink-0 text-center"
                    >
                      Nhận báo giá mẫu này
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Gallery Lightbox Modal */}
      {activeGalleryModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveGalleryModal(null)}
        >
          <div
            className="bg-white rounded-md max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9]">
              <img
                src={activeGalleryModal.image}
                alt={activeGalleryModal.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveGalleryModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-extrabold text-sm text-[#0a3832] uppercase">
                {activeGalleryModal.title}
              </h4>
              <p className="text-xs text-slate-600 mt-1">{activeGalleryModal.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
