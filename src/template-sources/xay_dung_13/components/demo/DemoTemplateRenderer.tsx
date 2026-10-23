"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  DollarSign,
  PlusSquare,
  ChevronRight,
  Building2,
  X,
  Menu,
  CheckCircle2,
  Share2
} from "lucide-react";
import { Facebook, Instagram, Youtube } from "@/components/icons/BrandIcons";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import { xayDung13DefaultData, type XayDung13Data } from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: XayDung13Data = adaptClonedTemplateData(xayDung13DefaultData, incomingData);

  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("CĂN HỘ");
  const [selectedPin, setSelectedPin] = useState<string | null>("p2");
  const [lightboxImage, setLightboxImage] = useState<{
    title: string;
    subtitle: string;
    image: string;
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navItems = [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "GIỚI THIỆU", href: "#gioi-thieu" },
    { label: "TỔNG QUAN", href: "#tong-quan" },
    { label: "VỊ TRÍ", href: "#vi-tri" },
    { label: "TIỆN ÍCH", href: "#tien-ich" },
    { label: "HÌNH ẢNH", href: "#hinh-anh" },
    { label: "ƯU ĐIỂM", href: "#uu-diem" },
    { label: "TIN TỨC", href: "#tin-tuc" },
    { label: "LIÊN HỆ", href: "#lien-he" }
  ];

  const tallLeftItem =
    data.galleryItems.find((i) => i.featured === "tall-left") || data.galleryItems[0];
  const mainCenterItem =
    data.galleryItems.find((i) => i.featured === "main-center") || data.galleryItems[1];
  const thumbCenterItems = data.galleryItems.filter((i) => i.featured === "thumb-center");
  const tallRightItem =
    data.galleryItems.find((i) => i.featured === "tall-right") || data.galleryItems[5];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans selection:bg-[#0072bc] selection:text-white">
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#trang-chu" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-lg bg-[#0072bc]/10 border border-[#0072bc]/25 flex flex-col items-center justify-center text-[#0072bc] group-hover:bg-[#0072bc] group-hover:text-white transition-colors">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-extrabold tracking-wider text-[#0072bc] uppercase leading-tight">
                {data.business.name}
              </div>
              <div className="text-[10px] text-slate-400 tracking-widest uppercase">
                Khu Đô Thị Kiểu Mẫu
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-bold tracking-wide transition-colors ${
                  idx === 0
                    ? "text-[#0072bc]"
                    : "text-slate-700 hover:text-[#0072bc]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="text-slate-600 hover:text-[#0072bc] transition-colors p-1"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0072bc]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-xs font-bold text-slate-700 hover:text-[#0072bc]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. HERO BANNER WITH INTERACTIVE PINS */}
      <section id="trang-chu" className="relative w-full h-[540px] md:h-[680px] overflow-hidden bg-slate-900">
        <img
          src={data.hero.backgroundImage}
          alt={data.business.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/15 to-sky-950/30" />

        {/* Subtle Hero Caption Overlay */}
        <div className="absolute bottom-8 left-6 md:left-12 z-20 max-w-xl bg-slate-950/65 backdrop-blur-md border-l-4 border-[#0072bc] p-5 text-white rounded-r-md">
          <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-1">
            {data.hero.eyebrow}
          </p>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-1.5">
            {data.hero.title}
          </h1>
          <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
            {data.hero.subtitle}
          </p>
        </div>

        {/* Interactive Pins on Building Podium */}
        {data.heroPins.map((pin, index) => {
          const isSelected = selectedPin === pin.id;
          return (
            <div
              key={pin.id}
              style={{ top: pin.top, left: pin.left }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                type="button"
                onClick={() => setSelectedPin(isSelected ? null : pin.id)}
                className="relative group flex items-center justify-center w-8 h-8 rounded-full bg-[#0072bc] text-white text-xs font-bold shadow-lg ring-4 ring-white/40 hover:scale-110 transition-transform"
              >
                {index + 1}
              </button>
              {isSelected && (
                <div className="mt-2 px-3 py-1.5 rounded bg-white text-slate-800 text-xs font-semibold shadow-xl whitespace-nowrap border border-[#0072bc]/30">
                  {pin.label}
                </div>
              )}
            </div>
          );
        })}

        {/* Vertical Dots Indicator on Right */}
        <div className="hidden md:flex flex-col gap-2 absolute right-5 top-28 z-20">
          {[0, 1, 2, 3, 4, 5, 6].map((dot) => (
            <span
              key={dot}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                dot === 0 ? "bg-[#0072bc] scale-125 ring-2 ring-white" : "bg-sky-400/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. GIỚI THIỆU DỰ ÁN (MONA CITI LAND) */}
      <section id="gioi-thieu" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm font-bold text-slate-800">Dự án căn hộ</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0072bc] tracking-wide uppercase">
              {data.business.aboutTitle || data.business.name}
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed text-justify">
              {data.business.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden shadow-xl border border-slate-100">
              <img
                src={data.introImage}
                alt="Phối cảnh tổng thể dự án"
                className="w-full h-[320px] md:h-[360px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TỔNG QUAN DỰ ÁN (FULL-WIDTH AERIAL WITH BLUE-BORDERED GLASS BOX) */}
      <section
        id="tong-quan"
        className="relative py-16 md:py-24 bg-slate-900 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.overviewBgImage})` }}
      >
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl border-2 border-[#0088cc] bg-slate-950/65 backdrop-blur-sm p-7 md:p-10 text-white shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-normal uppercase tracking-wide mb-6 text-white">
              TỔNG QUAN DỰ ÁN
            </h2>
            <ul className="space-y-3 text-xs md:text-sm">
              {data.overviewSpecs.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1 w-3.5 h-3.5 rounded-full bg-white/20 border border-white/60 flex items-center justify-center shrink-0">
                    <ChevronRight className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span>
                    <strong className="font-semibold text-white">{spec.label}:</strong>{" "}
                    <span className="text-slate-200">{spec.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. VỊ TRÍ ĐẮC ĐỊA */}
      <section id="vi-tri" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top 2 Columns: Text + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-[#0072bc] uppercase tracking-wide">
                VỊ TRÍ ĐẮC ĐỊA
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                {data.locationIntro}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={data.locationMapImage}
                  alt="Bản đồ vị trí kết nối"
                  className="w-full h-[270px] md:h-[300px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded shadow text-xs font-bold text-[#0072bc] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                  Tâm điểm Khu đô thị Cát Lái
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 2x2 Connectivity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.locationCards.map((card) => (
              <div key={card.id} className="space-y-3">
                <div className="bg-[#0072bc] text-white px-4 py-2.5 flex items-center gap-2 font-bold text-sm uppercase tracking-wide shadow-sm">
                  <PlusSquare className="w-4 h-4 shrink-0" />
                  <span>{card.title}</span>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed px-1">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NHỮNG TIỆN ÍCH (INTERNAL & EXTERNAL AMENITIES) */}
      <section id="tien-ich" className="py-16 md:py-20 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-normal text-[#0072bc] uppercase text-center mb-12 tracking-wide">
            NHỮNG TIỆN ÍCH
          </h2>

          {/* Row 1: Internal Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-6">
              <div className="bg-white p-2 border border-slate-200 shadow-sm">
                <img
                  src={data.internalAmenitiesImage}
                  alt="Mặt bằng tiện ích nội khu"
                  className="w-full h-[280px] md:h-[310px] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <h3 className="text-sm font-bold text-slate-800 mb-5">Tiện ích nội khu:</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                {data.internalAmenities.map((item) => (
                  <div key={item.number} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-[#d32f2f] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: External Amenities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <h3 className="text-sm font-bold text-slate-800 mb-5">Tiện ích ngoại khu:</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                {data.externalAmenities.map((item) => (
                  <div key={item.number} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-[#d32f2f] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="bg-white p-2 border border-slate-200 shadow-sm">
                <img
                  src={data.externalAmenitiesImage}
                  alt="Sơ đồ tiện ích ngoại khu"
                  className="w-full h-[280px] md:h-[310px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HÌNH ẢNH (MASONRY COLLAGE GALLERY) */}
      <section id="hinh-anh" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-normal text-[#0072bc] uppercase text-center mb-6 tracking-wide">
            HÌNH ẢNH
          </h2>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8 border-b border-slate-200">
            <div className="inline-flex bg-slate-100">
              {data.galleryCategories.map((cat) => {
                const active = activeGalleryTab === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveGalleryTab(cat)}
                    className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      active
                        ? "bg-[#0072bc] text-white"
                        : "text-slate-700 hover:text-[#0072bc]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Asymmetric Collage Grid matching reference screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Tall Image */}
            {tallLeftItem && (
              <div
                onClick={() => setLightboxImage(tallLeftItem)}
                className="md:col-span-3 relative group overflow-hidden cursor-pointer h-[360px] md:h-[496px]"
              >
                <img
                  src={tallLeftItem.image}
                  alt={tallLeftItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <div className="text-sm font-bold">{tallLeftItem.title}</div>
                  <div className="text-[11px] text-slate-300">{tallLeftItem.subtitle}</div>
                </div>
              </div>
            )}

            {/* Center Column: 1 Large + 3 Thumbnails */}
            <div className="md:col-span-6 flex flex-col gap-4">
              {mainCenterItem && (
                <div
                  onClick={() => setLightboxImage(mainCenterItem)}
                  className="relative group overflow-hidden cursor-pointer h-[280px] md:h-[360px]"
                >
                  <img
                    src={mainCenterItem.image}
                    alt={mainCenterItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/65 backdrop-blur-xs p-3.5 text-white">
                    <div className="text-sm font-bold">{mainCenterItem.title}</div>
                    <div className="text-[11px] text-slate-300">{mainCenterItem.subtitle}</div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 h-[120px]">
                {thumbCenterItems.slice(0, 3).map((thumb) => (
                  <div
                    key={thumb.id}
                    onClick={() => setLightboxImage(thumb)}
                    className="relative group overflow-hidden cursor-pointer h-full"
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Tall Image */}
            {tallRightItem && (
              <div
                onClick={() => setLightboxImage(tallRightItem)}
                className="md:col-span-3 relative group overflow-hidden cursor-pointer h-[360px] md:h-[496px]"
              >
                <img
                  src={tallRightItem.image}
                  alt={tallRightItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <div className="text-sm font-bold">{tallRightItem.title}</div>
                  <div className="text-[11px] text-slate-300">{tallRightItem.subtitle}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. ƯU ĐIỂM NỔI BẬT (3 COLUMNS ON LIGHT GRAY) */}
      <section id="uu-diem" className="py-14 md:py-16 bg-[#f5f7fa] border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {data.advantages.map((adv) => (
            <div key={adv.id} className="flex flex-col items-center space-y-3 px-2">
              <div className="w-12 h-12 rounded-full bg-[#0072bc] text-white flex items-center justify-center shadow-md">
                {adv.icon === "award" && <Award className="w-6 h-6" />}
                {adv.icon === "map" && <MapPin className="w-6 h-6" />}
                {adv.icon === "price" && <DollarSign className="w-6 h-6" />}
              </div>
              <h3 className="text-base font-bold text-slate-800">{adv.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TIN TỨC (4-COLUMN NEWS CARDS) */}
      <section id="tin-tuc" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-normal text-[#0072bc] uppercase text-center mb-10 tracking-wide">
            TIN TỨC
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 line-clamp-2 mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#lien-he"
                      className="inline-block px-5 py-1.5 border border-[#0072bc] text-[#0072bc] text-[11px] font-semibold uppercase hover:bg-[#0072bc] hover:text-white transition-colors"
                    >
                      CHI TIẾT
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. THÔNG TIN LIÊN HỆ & FOOTER (DARK NAVY #0f1b2d) */}
      <footer id="lien-he" className="bg-[#0f1b2d] text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-normal uppercase text-center mb-12 tracking-wide">
            THÔNG TIN LIÊN HỆ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Left Company Info */}
            <div className="lg:col-span-5 space-y-5">
              <h3 className="text-sm font-bold text-white">
                Công ty TNHH {data.business.name}
              </h3>

              {/* Architectural Brand Box */}
              <div className="inline-flex flex-col items-center border border-slate-600/80 px-6 py-4 bg-slate-900/50">
                <Building2 className="w-10 h-10 text-[#0088cc] mb-1.5" />
                <span className="text-xs font-extrabold tracking-widest uppercase text-white">
                  {data.business.name}
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <p className="flex items-start gap-2">
                  <strong className="text-white shrink-0">Địa chỉ:</strong>
                  <span>{data.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Điện thoại:</strong>
                  <span>{data.business.phone[0]}</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Email:</strong>
                  <span>{data.business.email[0]}</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Thời gian làm việc:</strong>
                  <span>{data.business.workingHours || "Thứ 2 - Thứ 6 (9h00 - 18h00)"}</span>
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {[Facebook, Instagram, Share2, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#lien-he"
                    className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:border-[#0088cc] hover:text-[#0088cc] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold text-slate-200 mb-4">
                Đăng ký ngay để cập nhật những thông tin mới nhất & bảng báo giá chính xác từ chúng tôi
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    className="w-full bg-slate-900/70 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0088cc]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-slate-900/70 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0088cc]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    className="w-full bg-slate-900/70 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0088cc]"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="w-full bg-slate-900/70 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0088cc]"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Lời nhắn"
                  className="w-full bg-slate-900/70 border border-slate-700 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0088cc]"
                />
                <div className="text-center pt-1">
                  <button
                    type="submit"
                    className="w-48 py-2.5 bg-white text-[#0072bc] font-bold text-xs uppercase tracking-wider hover:bg-[#0072bc] hover:text-white transition-colors shadow"
                  >
                    GỬI
                  </button>
                </div>
                {submitted && (
                  <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 pt-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Đã gửi thông tin đăng ký tư vấn thành công!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-400">
            © Bản quyền thuộc về <strong className="text-slate-200">{data.business.name}</strong>. Thiết kế & Phát triển hệ thống.
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#0072bc]"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold">{lightboxImage.title}</h4>
                <p className="text-xs text-slate-400">{lightboxImage.subtitle}</p>
              </div>
              <span className="text-xs text-[#0088cc] font-semibold uppercase">
                {data.business.name}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
