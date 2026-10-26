"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Search,
  Wrench,
  Car,
  Palette,
  Truck,
  ChevronLeft,
  ChevronRight,
  Star,
  Mail,
  CheckCircle2,
  X,
  Menu,
  LifeBuoy,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto4DefaultData,
  GarageOto4Data,
  AutoSerCoreService,
} from "@/template-sources/garage_oto_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function AutoSerLogo({
  brandName,
  light = false,
}: {
  brandName: string;
  light?: boolean;
}) {
  const shortName =
    brandName.replace(/\s+CAR\s+SERVICE$/i, "").trim() || "AUTOSER";
  return (
    <a href="#" className="inline-flex items-center gap-2.5 select-none">
      <div className="w-11 h-11 rounded-full border-2 border-[#1863b8] bg-blue-50/80 text-[#1863b8] flex items-center justify-center shrink-0">
        <Wrench className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span
          className={`text-xl font-black tracking-wider uppercase leading-none ${
            light ? "text-white" : "text-[#1863b8]"
          }`}
        >
          {shortName}
        </span>
        <span
          className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          DỊCH VỤ SỬA CHỮA Ô TÔ
        </span>
      </div>
    </a>
  );
}

function CrossedWrenchesDivider() {
  return (
    <div className="mt-2.5 flex items-center justify-center gap-3">
      <span className="w-12 h-px bg-slate-200" />
      <Wrench className="w-4 h-4 text-[#0095e5] rotate-45" />
      <span className="w-12 h-px bg-slate-200" />
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto4Data = adaptClonedTemplateData(
    garageOto4DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] =
    useState<AutoSerCoreService | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string | null>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1863b8] selection:text-white overflow-x-hidden">
      {/* 1. TOP INFO STRIP */}
      <div className="bg-slate-50 border-b border-slate-200/80 text-[11px] text-slate-500 py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1863b8]" />
              {data.business.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#1863b8]" />
              {data.business.phone[0]}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#1863b8]" />
              Thời gian làm việc: {data.business.workingHours}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-600 font-bold">
            <a href="#lien-he" className="hover:text-[#1863b8]">
              f
            </a>
            <a href="#lien-he" className="hover:text-[#1863b8]">
              ig
            </a>
            <a href="#lien-he" className="hover:text-[#1863b8]">
              tw
            </a>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE BRAND BAR */}
      <div className="bg-white py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <AutoSerLogo brandName={data.business.name} />

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-slate-300 stroke-[1.5]" />
              <div>
                <div className="text-xs font-extrabold text-[#1863b8]">
                  {data.business.phone[0]}
                </div>
                <div className="text-[11px] text-slate-500">
                  {data.business.email[0]}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-7 h-7 text-slate-300 stroke-[1.5]" />
              <div>
                <div className="text-xs font-extrabold text-[#1863b8]">
                  9h00 - 18h00
                </div>
                <div className="text-[11px] text-slate-500">
                  Thứ 2 đến thứ 6
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setBookingDone(false);
                setBookingModalOpen(true);
              }}
              className="border border-slate-300 hover:border-[#1863b8] hover:text-[#1863b8] text-slate-600 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xs transition-colors cursor-pointer"
            >
              GỌI DỊCH VỤ
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xs border border-slate-200 text-slate-700"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. ROYAL BLUE NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#1863b8] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
            <a href="#" className="text-white hover:text-sky-200">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="text-white/90 hover:text-white">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="text-white/90 hover:text-white">
              DỊCH VỤ ▾
            </a>
            <a href="#rua-xe" className="text-white/90 hover:text-white">
              BẢO HIỂM XE
            </a>
            <a href="#tin-tuc" className="text-white/90 hover:text-white">
              TIN TỨC
            </a>
            <a href="#lien-he" className="text-white/90 hover:text-white">
              LIÊN HỆ
            </a>
          </nav>

          <div className="md:hidden text-xs font-bold uppercase">
            {data.business.name}
          </div>

          <button
            type="button"
            onClick={() => {
              setBookingDone(false);
              setBookingModalOpen(true);
            }}
            aria-label="Tìm kiếm"
            className="text-white/90 hover:text-white cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#134e92] px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a href="#" className="block py-1">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="block py-1">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="block py-1">
              DỊCH VỤ
            </a>
            <a href="#tin-tuc" className="block py-1">
              TIN TỨC
            </a>
            <a href="#lien-he" className="block py-1">
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 4. SKY-BLUE HERO BANNER WITH ILLUSTRATED CAR & MECHANICS */}
      <section className="relative bg-gradient-to-b from-[#00a2ef] to-[#0077c8] text-white pt-14 pb-0 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wider">
            {data.hero.title}
          </h1>
          <p className="mt-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-100">
            {data.hero.subtitle}
          </p>
          <div className="mt-5">
            <a
              href={data.hero.ctaLink || "#dich-vu"}
              className="inline-block bg-[#1863b8] hover:bg-[#124d91] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md transition-colors"
            >
              {data.hero.ctaText}
            </a>
          </div>

          {/* Vector Sedan & Mechanics Illustration Scene matching reference */}
          <div className="mt-8 relative max-w-4xl mx-auto pt-4">
            <svg
              viewBox="0 0 900 280"
              className="w-full h-auto drop-shadow-xl"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ground Line */}
              <rect x="0" y="268" width="900" height="12" fill="#043f6b" />
              {/* Left Tool Stand */}
              <rect x="42" y="225" width="54" height="8" rx="3" fill="#e2e8f0" />
              <rect x="64" y="233" width="10" height="35" fill="#cbd5e1" />
              {/* Left Mechanic Silhouette */}
              <circle cx="195" cy="118" r="14" fill="#04243c" />
              <path
                d="M168 145C175 135 200 135 215 142L245 118L252 126L218 158L212 210L222 268H202L194 218L178 268H158L172 198L168 145Z"
                fill="#04243c"
              />
              {/* Right Mechanic Silhouette */}
              <circle cx="715" cy="106" r="14" fill="#04243c" />
              <path
                d="M685 132C700 124 725 124 736 136L748 195L742 268H722L716 205L702 268H684L690 185L662 152L685 132Z"
                fill="#04243c"
              />
              {/* White Sedan Car Body */}
              <path
                d="M205 182L255 162L365 112C415 95 515 95 570 116L650 158L710 178C722 183 728 195 726 212L718 242H195L192 204C192 192 197 186 205 182Z"
                fill="#ffffff"
              />
              {/* Open Hood */}
              <path
                d="M255 162L168 110L174 103L268 156Z"
                fill="#ffffff"
              />
              {/* Windows */}
              <path
                d="M372 120L465 116V160H310L372 120Z"
                fill="#4b5563"
              />
              <path
                d="M480 116C525 118 560 126 598 158H480V116Z"
                fill="#4b5563"
              />
              {/* Left Wheel */}
              <circle cx="290" cy="240" r="36" fill="#1e293b" />
              <circle cx="290" cy="240" r="22" fill="#e2e8f0" />
              {/* Right Wheel */}
              <circle cx="620" cy="240" r="36" fill="#1e293b" />
              <circle cx="620" cy="240" r="22" fill="#e2e8f0" />
              {/* Center Crouching Mechanic */}
              <circle cx="458" cy="212" r="12" fill="#04243c" />
              <path
                d="M415 232C428 216 462 218 480 232L495 268H408L415 232Z"
                fill="#04243c"
              />
              {/* Right Tire Stack */}
              <rect x="775" y="218" width="58" height="16" rx="4" fill="#334155" />
              <rect x="775" y="236" width="58" height="16" rx="4" fill="#1e293b" />
              <rect x="775" y="254" width="58" height="14" rx="4" fill="#334155" />
            </svg>
          </div>
        </div>
      </section>

      {/* 5. DỊCH VỤ CỦA CHÚNG TÔI */}
      <section id="dich-vu" className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
              {data.coreServicesSection.title}
            </h2>
            <CrossedWrenchesDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.coreServicesSection.items.map((srv) => {
              const IconComp =
                srv.iconType === "maintenance"
                  ? Wrench
                  : srv.iconType === "paint"
                  ? Car
                  : srv.iconType === "detailing"
                  ? Palette
                  : Truck;

              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className="text-center group cursor-pointer p-4 rounded-lg hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-4 text-[#1863b8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-11 h-11 stroke-[1.75]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#1863b8]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. VÌ SAO CHỌN CHÚNG TÔI */}
      <section id="gioi-thieu" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
              {data.whyChooseUsSection.title}
            </h2>
            <CrossedWrenchesDivider />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
            {/* Left Team Image */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xs shadow-md">
                <img
                  src={data.whyChooseUsSection.teamImage}
                  alt="Đội ngũ kỹ sư AutoSer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text & Progress Bars */}
            <div className="lg:col-span-7 space-y-4">
              {data.whyChooseUsSection.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                >
                  {p}
                </p>
              ))}

              <div className="pt-3 space-y-4">
                {data.whyChooseUsSection.progressBars.map((pb) => (
                  <div key={pb.id}>
                    <div className="flex items-center justify-between text-xs font-extrabold text-slate-800 mb-1.5">
                      <span>{pb.label}</span>
                      <span>{pb.percentage}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0095e5] rounded-full"
                        style={{ width: `${pb.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MỘT SỐ HÌNH ẢNH */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
              {data.gallerySection.title}
            </h2>
            <CrossedWrenchesDivider />
          </div>

          <div className="relative flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveGalleryImg(data.gallerySection.images[0]?.image)
              }
              aria-label="Ảnh trước"
              className="hidden sm:flex w-8 h-8 items-center justify-center text-slate-400 hover:text-[#1863b8] shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
              {data.gallerySection.images.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveGalleryImg(item.image)}
                  className="group relative aspect-[16/10] overflow-hidden bg-slate-200 shadow-sm cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveGalleryImg(data.gallerySection.images[1]?.image)
              }
              aria-label="Ảnh tiếp"
              className="hidden sm:flex w-8 h-8 items-center justify-center text-slate-400 hover:text-[#1863b8] shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. HỆ THỐNG RỬA XE TỰ ĐỘNG (FULL-WIDTH PARALLAX BANNER) */}
      <section id="rua-xe" className="relative py-20 lg:py-28 overflow-hidden">
        <img
          src={data.carWashBanner.backgroundImage}
          alt={data.carWashBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg text-white space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase">
              {data.carWashBanner.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {data.carWashBanner.description}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setBookingDone(false);
                  setBookingModalOpen(true);
                }}
                className="bg-white hover:bg-[#1863b8] hover:text-white text-slate-800 text-xs font-bold px-5 py-2.5 rounded-xs shadow transition-colors cursor-pointer"
              >
                {data.carWashBanner.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ĐÁNH GIÁ KHÁCH HÀNG */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
              ĐÁNH GIÁ KHÁCH HÀNG
            </h2>
            <CrossedWrenchesDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.testimonials || []).map((rev) => (
              <div
                key={rev.id}
                className="text-center flex flex-col items-center px-4"
              >
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-20 h-20 rounded-full object-cover shadow-md mb-3 border-2 border-slate-100"
                />
                <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                  {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                  {rev.content}
                </p>
                <div className="text-sm font-extrabold italic text-slate-900">
                  {rev.author}
                </div>
                {rev.role && (
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {rev.role}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TIN TỨC (4 Columns) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 uppercase">
              TIN TỨC
            </h2>
            <CrossedWrenchesDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((item) => (
              <article
                key={item.id}
                className="bg-white border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col text-center"
              >
                <div className="h-40 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug mb-2 hover:text-[#1863b8]">
                    {item.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-slate-200 mx-auto mb-2.5" />
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BLUE EMERGENCY CALLOUT BAR */}
      <section className="bg-[#1863b8] text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <LifeBuoy className="w-8 h-8 text-white shrink-0" />
            <span className="text-sm sm:text-base font-extrabold">
              {data.emergencyCallout.text}
            </span>
          </div>
          <a
            href={`tel:${data.business.phone[0]}`}
            className="bg-white text-[#e65100] hover:bg-sky-50 text-sm font-extrabold px-6 py-2.5 rounded-sm shadow-sm shrink-0"
          >
            {data.business.phone[0]}
          </a>
        </div>
      </section>

      {/* 12. DARK CHARCOAL FOOTER */}
      <footer id="lien-he" className="bg-[#22252a] text-slate-300 pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3 space-y-4">
              <AutoSerLogo brandName={data.business.name} light />
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-3 text-slate-400 text-xs font-bold">
                <a href="#lien-he" className="hover:text-white">
                  f
                </a>
                <a href="#lien-he" className="hover:text-white">
                  ig
                </a>
                <a href="#lien-he" className="hover:text-white">
                  tw
                </a>
              </div>
            </div>

            {/* Col 2: Dịch vụ */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white uppercase">
                DỊCH VỤ
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Đồng sơn
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Bảo hiểm xe
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Bảo dưỡng – Sửa chữa
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-white">
                    Chăm sóc xe – làm đẹp
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Hình ảnh */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white uppercase">
                HÌNH ẢNH
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Hình ảnh xưởng"
                    onClick={() => setActiveGalleryImg(img)}
                    className="w-full h-14 object-cover rounded-2xs cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Col 4: Thông tin liên hệ */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white uppercase">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                  <a
                    href={`tel:${data.business.phone[0]}`}
                    className="hover:text-white"
                  >
                    {data.business.phone[0]}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#16181b] py-4 text-center text-[11px] text-slate-400">
          © Bản quyền thuộc về . Thiết kế website{" "}
          <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* SERVICE MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="inline-block bg-blue-50 text-[#1863b8] text-xs font-bold px-3 py-1 rounded-full">
              Chi phí tham khảo: {selectedService.priceEstimate}
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-slate-900">
              {selectedService.title}
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {selectedService.description}
            </p>
            <div className="mt-4 space-y-2">
              {selectedService.checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1863b8] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs font-bold text-slate-500 px-4 py-2"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  setBookingDone(false);
                  setBookingModalOpen(true);
                }}
                className="bg-[#1863b8] text-white text-xs font-bold uppercase px-5 py-2.5 rounded-xs cursor-pointer"
              >
                Đặt lịch dịch vụ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            {bookingDone ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#1863b8] mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Đã nhận yêu cầu đặt lịch!
                </h3>
                <p className="text-xs text-slate-600">
                  Cố vấn dịch vụ tại <strong>{data.business.name}</strong> sẽ
                  gọi lại xác nhận ngay.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-extrabold text-slate-900 uppercase">
                  Đặt Hẹn Bảo Dưỡng &amp; Sửa Chữa
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hotline cứu hộ 24/7: <strong>{data.business.phone[0]}</strong>
                </p>
                <form onSubmit={handleBookingSubmit} className="mt-4 space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên chủ xe *"
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs rounded-xs focus:outline-none focus:border-[#1863b8]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại *"
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs rounded-xs focus:outline-none focus:border-[#1863b8]"
                  />
                  <input
                    type="text"
                    placeholder="Dòng xe & Biển số (VD: Mazda CX-5 - 51K...)"
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs rounded-xs focus:outline-none focus:border-[#1863b8]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#1863b8] hover:bg-[#134e92] text-white text-xs font-extrabold uppercase py-3 rounded-xs cursor-pointer"
                  >
                    Xác Nhận Đặt Lịch
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {activeGalleryImg && (
        <div
          onClick={() => setActiveGalleryImg(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <img
            src={activeGalleryImg}
            alt="Xem ảnh"
            className="max-w-3xl w-full max-h-[80vh] object-contain rounded"
          />
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
