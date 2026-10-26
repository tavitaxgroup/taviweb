"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  Clock,
  Settings,
  UserCheck,
  BadgeDollarSign,
  ThumbsUp,
  ShieldCheck,
  Monitor,
  Wrench,
  Fuel,
  Compass,
  Route,
  Wind,
  ChevronDown,
  X,
  CheckCircle2,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto5DefaultData,
  GarageOto5Data,
  CardinalNewServiceCard,
} from "@/template-sources/garage_oto_5/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function CardinalCarLogo({
  brandName,
  dark = false,
}: {
  brandName: string;
  dark?: boolean;
}) {
  return (
    <a href="#" className="inline-flex flex-col items-center select-none">
      <svg
        viewBox="0 0 180 42"
        className="w-36 sm:w-44 h-10 -mb-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 30C34 15 68 8 106 10C132 11 154 20 168 29"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M36 27C58 16 90 14 126 18L158 28"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {brandName}
      </span>
    </a>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto5Data = adaptClonedTemplateData(
    garageOto5DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState<
    "PHO_BIEN" | "NOI_THAT" | "NGOAI_THAT"
  >("PHO_BIEN");
  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqSection.items[0]?.id || "fq-1"
  );
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedServiceCard, setSelectedServiceCard] =
    useState<CardinalNewServiceCard | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const currentTab =
    data.mainServicesSection.tabs.find((t) => t.id === activeTabId) ||
    data.mainServicesSection.tabs[0];

  const currentTestimonial =
    (data.testimonials || [])[activeTestimonialIdx] ||
    (data.testimonials || [])[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans selection:bg-[#ef4444] selection:text-white overflow-x-hidden">
      {/* 1. TOP CRIMSON RED BAR */}
      <div className="bg-[#ef4444] text-white text-[11px] py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {data.business.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              {data.business.email[0]}
            </span>
          </div>
          <div className="flex items-center gap-3 font-bold">
            <a href="#lien-he" className="hover:text-red-100">
              f
            </a>
            <a href="#lien-he" className="hover:text-red-100">
              ig
            </a>
            <a href="#lien-he" className="hover:text-red-100">
              tw
            </a>
          </div>
        </div>
      </div>

      {/* 2. WHITE BRAND BAR */}
      <div className="bg-white py-4 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <CardinalCarLogo brandName={data.business.name} />

          <div className="flex items-center gap-6 sm:gap-10">
            <div className="hidden sm:block text-xs">
              <div className="font-bold text-zinc-700">Giờ làm việc:</div>
              <div className="text-zinc-500">{data.business.workingHours}</div>
            </div>
            <div className="text-xs">
              <div className="font-bold text-zinc-700">Gọi ngay:</div>
              <a
                href={`tel:${data.business.phone[0]}`}
                className="text-sm sm:text-base font-extrabold text-[#ef4444]"
              >
                {data.business.phone[0]}
              </a>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded border border-zinc-200 text-zinc-700"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. DARK BLACK NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <div className="w-6 hidden md:block" />
          <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold uppercase tracking-wider">
            <a href="#" className="text-[#ef4444]">
              TRANG CHỦ
            </a>
            <a
              href="#tieu-chi"
              className="text-white hover:text-[#ef4444] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="text-white hover:text-[#ef4444] transition-colors"
            >
              DỊCH VỤ ▾
            </a>
            <a
              href="#tin-tuc"
              className="text-white hover:text-[#ef4444] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="text-white hover:text-[#ef4444] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          <div className="md:hidden text-xs font-bold uppercase text-[#ef4444]">
            {data.business.name}
          </div>

          <button
            type="button"
            onClick={() => {
              setBookingDone(false);
              setBookingModalOpen(true);
            }}
            aria-label="Tìm kiếm"
            className="text-zinc-300 hover:text-white cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 px-4 py-3 space-y-2 text-xs font-bold uppercase border-t border-zinc-800">
            <a href="#" className="block py-1 text-[#ef4444]">
              TRANG CHỦ
            </a>
            <a href="#tieu-chi" className="block py-1">
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

      {/* 4. ENGINE BAY HERO BANNER WITH DARK TRANSLUCENT BOX */}
      <section className="relative h-[440px] sm:h-[520px] flex items-center overflow-hidden">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl bg-black/75 backdrop-blur-[2px] p-6 sm:p-10 text-center border border-white/10 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-snug tracking-wide">
              <span className="text-white">TRUNG TÂM </span>
              <span className="text-[#ef4444]">BẢO DƯỠNG SỬA CHỮA</span>
              <span className="text-white"> ÔTÔ </span>
              <span className="text-[#ef4444]">CHUYÊN NGHIỆP</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setBookingDone(false);
                  setBookingModalOpen(true);
                }}
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-xs shadow cursor-pointer"
              >
                {data.hero.ctaText || "ĐẶT HẸN"}
              </button>
              <a
                href={data.hero.secondaryCtaLink || "#lien-he"}
                className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-xs shadow"
              >
                {data.hero.secondaryCtaText || "LIÊN HỆ"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DỊCH VỤ MỚI (4 Image Cards with Dark Bottom Overlay) */}
      <section id="dich-vu" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-10">
            {data.newServicesSection.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.newServicesSection.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedServiceCard(item)}
                className="group relative h-48 overflow-hidden bg-zinc-900 shadow-sm cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end justify-center p-4 text-center">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#ef4444] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIÊU CHÍ HOẠT ĐỘNG (3x2 Blue Icons Grid) */}
      <section id="tieu-chi" className="py-14 lg:py-20 bg-[#f3f4f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-12">
            {data.criteriaSection.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {data.criteriaSection.items.map((cr) => {
              const IconComp =
                cr.iconName === "clock"
                  ? Clock
                  : cr.iconName === "settings"
                  ? Settings
                  : cr.iconName === "calendar"
                  ? UserCheck
                  : cr.iconName === "dollar"
                  ? BadgeDollarSign
                  : cr.iconName === "thumbsUp"
                  ? ThumbsUp
                  : ShieldCheck;

              return (
                <div
                  key={cr.id}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 text-[#1e40af] flex items-center justify-center mb-3">
                    <IconComp className="w-11 h-11 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-zinc-900">
                    {cr.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. DỊCH VỤ CHÍNH (Interactive Vertical Tabs + Standing Mechanic) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-12">
            {data.mainServicesSection.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left Vertical Tabs + Content Box */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row border border-zinc-200 bg-zinc-50/70 shadow-xs">
              {/* Vertical Tab Buttons */}
              <div className="sm:w-48 shrink-0 flex sm:flex-col border-b sm:border-b-0 sm:border-r border-zinc-200 bg-white">
                {data.mainServicesSection.tabs.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex-1 sm:flex-initial flex items-center text-left border-b border-zinc-200 last:border-b-0 transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#ef4444] text-white"
                          : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800"
                      }`}
                    >
                      <span className="w-10 h-12 bg-[#1e3a8a] text-white flex items-center justify-center shrink-0">
                        <Settings className="w-4 h-4" />
                      </span>
                      <span className="px-3 text-xs font-extrabold uppercase tracking-wider">
                        {tab.tabLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Content */}
              <div className="p-6 sm:p-8 flex-1">
                <h3 className="text-base sm:text-lg font-extrabold text-zinc-900">
                  {currentTab.heading}
                </h3>
                <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                  {currentTab.description}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {currentTab.items.map((it) => {
                    const ItemIcon =
                      it.iconType === "computer"
                        ? Monitor
                        : it.iconType === "wrench"
                        ? Wrench
                        : it.iconType === "fuel"
                        ? Fuel
                        : it.iconType === "steering"
                        ? Compass
                        : it.iconType === "road"
                        ? Route
                        : Wind;

                    return (
                      <div key={it.id} className="flex items-center gap-3">
                        <ItemIcon className="w-5 h-5 text-zinc-500 shrink-0" />
                        <span className="text-xs font-semibold text-zinc-700">
                          {it.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Mechanic Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="max-w-xs rounded-lg overflow-hidden shadow-md">
                <img
                  src={data.mainServicesSection.mechanicImage}
                  alt="Kỹ thuật viên Cardinal Auto"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CHUYÊN PHỤC VỤ & SỬA CHỮA CÁC HÃNG XE (Green Lawn + Asphalt Road Car Strip) */}
      <section className="pt-12 pb-0 bg-[#f9fafb]">
        <h2 className="text-center text-lg sm:text-xl font-extrabold text-zinc-900 uppercase mb-8 px-4">
          {data.carBrandsSection.title}
        </h2>

        {/* Green Grass + Road Strip */}
        <div className="bg-[#84cc16] py-5">
          <div className="bg-[#64748b] py-6 relative overflow-hidden">
            {/* Dashed White Road Line */}
            <div className="absolute left-0 right-0 bottom-6 border-b-4 border-dashed border-white/80 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 items-end">
              {data.carBrandsSection.brands.map((car) => (
                <div
                  key={car.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Side-Profile Car SVG */}
                  <svg
                    viewBox="0 0 220 75"
                    className="w-full max-w-[200px] h-auto drop-shadow-md"
                    fill="none"
                  >
                    <path
                      d="M18 46L38 34L76 18C105 14 138 15 162 28L198 38C206 41 210 47 208 55H14C12 50 14 48 18 46Z"
                      fill={car.colorHex}
                      stroke={car.accentHex}
                      strokeWidth="2"
                    />
                    <path
                      d="M78 22L116 20V35H52L78 22Z"
                      fill="#1e293b"
                    />
                    <path
                      d="M122 20C140 21 154 25 166 35H122V20Z"
                      fill="#1e293b"
                    />
                    <circle cx="52" cy="55" r="13" fill="#0f172a" />
                    <circle cx="52" cy="55" r="7" fill="#cbd5e1" />
                    <circle cx="170" cy="55" r="13" fill="#0f172a" />
                    <circle cx="170" cy="55" r="7" fill="#cbd5e1" />
                  </svg>
                  <span className="mt-2 text-xs font-extrabold uppercase tracking-widest text-zinc-200">
                    {car.brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CÂU HỎI THƯỜNG GẶP (Red Accordion Bars + Blue Sports Car with ?) */}
      <section className="py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            {/* Left Red Accordions */}
            <div className="lg:col-span-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-6 text-center sm:text-left">
                {data.faqSection.title}
              </h2>

              <div className="space-y-2.5">
                {data.faqSection.items.map((fq) => {
                  const isOpen = openFaqId === fq.id;
                  return (
                    <div key={fq.id} className="overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? "" : fq.id)}
                        className="w-full flex items-center bg-[#ef4444] hover:bg-[#dc2626] text-white text-left transition-colors cursor-pointer"
                      >
                        <span className="w-10 h-11 bg-[#1e3a8a] flex items-center justify-center shrink-0">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                        <span className="flex-1 px-4 text-xs sm:text-sm font-bold text-center">
                          {fq.question}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="bg-white border border-t-0 border-zinc-200 p-4 text-xs text-zinc-600 leading-relaxed">
                          {fq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Blue Car + Giant Question Mark */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="w-64 sm:w-80 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={data.faqSection.carImage}
                    alt="Tư vấn kỹ thuật ô tô"
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div
                  className="text-8xl sm:text-9xl font-black text-[#1d4ed8] -ml-6 select-none drop-shadow-xl"
                  style={{
                    textShadow: "4px 6px 0 #1e3a8a",
                  }}
                >
                  ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. KHÁCH HÀNG NHẬN XÉT */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-6">
            KHÁCH HÀNG NHẬN XÉT
          </h2>

          {currentTestimonial && (
            <div>
              <p className="text-xs sm:text-sm text-zinc-600 italic leading-relaxed">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.author}
                  className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-zinc-100"
                />
                <div className="mt-3 text-xs font-extrabold uppercase text-[#1d4ed8]">
                  {currentTestimonial.author}
                </div>
                <div className="text-[11px] font-semibold text-[#ef4444]">
                  {currentTestimonial.role}
                </div>
              </div>

              {(data.testimonials || []).length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {(data.testimonials || []).map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTestimonialIdx(idx)}
                      aria-label={`Đánh giá ${idx + 1}`}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                        idx === activeTestimonialIdx
                          ? "bg-[#ef4444]"
                          : "bg-zinc-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 11. TIN TỨC (4 Cards) */}
      <section id="tin-tuc" className="py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-extrabold text-zinc-900 uppercase mb-10">
            TIN TỨC
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-zinc-200/80 shadow-xs hover:shadow-md transition-all flex flex-col text-center"
              >
                <div className="h-40 overflow-hidden bg-zinc-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xs font-extrabold text-zinc-900 uppercase leading-snug mb-2 hover:text-[#ef4444]">
                    {post.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-zinc-200 mx-auto mb-2.5" />
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. DARK BLACK FOOTER WITH TOP BAR */}
      <footer id="lien-he" className="bg-[#141414] text-zinc-400">
        {/* Top Newsletter + Logo + Hotline Bar */}
        <div className="border-b border-zinc-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            {/* Left Newsletter */}
            <div className="lg:col-span-5">
              <div className="text-xs font-bold uppercase text-white mb-2">
                ĐĂNG KÝ THÔNG TIN
              </div>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex items-center"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email ..."
                  className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ef4444]"
                />
                <button
                  type="submit"
                  className="bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-extrabold uppercase px-5 py-2.5 shrink-0 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {newsletterSaved && (
                <p className="mt-1.5 text-[11px] text-emerald-400">
                  Đã đăng ký nhận bản tin khuyến mãi!
                </p>
              )}
            </div>

            {/* Center Car Logo */}
            <div className="lg:col-span-4 flex justify-center">
              <CardinalCarLogo brandName={data.business.name} dark />
            </div>

            {/* Right Hotline */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <div className="text-xs font-bold uppercase text-zinc-300">
                HOTLINE (24/7):
              </div>
              <a
                href={`tel:${data.business.phone[0]}`}
                className="text-xl font-extrabold text-[#ef4444]"
              >
                {data.business.phone[0]}
              </a>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1 */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white uppercase">
                {data.business.name}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-3 text-xs font-bold text-zinc-300 pt-1">
                <a href="#lien-he" className="hover:text-[#ef4444]">
                  f
                </a>
                <a href="#lien-he" className="hover:text-[#ef4444]">
                  ig
                </a>
                <a href="#lien-he" className="hover:text-[#ef4444]">
                  tw
                </a>
              </div>
            </div>

            {/* Col 2: Menu */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white uppercase">
                MENU
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a href="#" className="hover:text-white">
                  Trang chủ
                </a>
                <a href="#tieu-chi" className="hover:text-white">
                  Giới thiệu
                </a>
                <a href="#dich-vu" className="hover:text-white">
                  Dịch vụ
                </a>
                <a href="#tin-tuc" className="hover:text-white">
                  Tin tức
                </a>
                <a href="#lien-he" className="hover:text-white">
                  Liên hệ
                </a>
              </div>
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
                    alt="Hình ảnh garage"
                    className="w-full h-14 object-cover rounded-2xs"
                  />
                ))}
              </div>
            </div>

            {/* Col 4: Địa chỉ liên hệ */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold text-white uppercase">
                ĐỊA CHỈ LIÊN HỆ
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zinc-300 shrink-0" />
                  <a
                    href={`tel:${data.business.phone[0]}`}
                    className="hover:text-white"
                  >
                    {data.business.phone[0]}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black py-4 text-center text-[11px] text-zinc-500">
          © Bản quyền thuộc về . Thiết kế website{" "}
          <strong className="text-zinc-300">{data.business.name}</strong>
        </div>
      </footer>

      {/* SERVICE CARD MODAL */}
      {selectedServiceCard && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-md max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedServiceCard.image}
                alt={selectedServiceCard.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedServiceCard(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="inline-block bg-red-50 text-[#ef4444] text-xs font-bold px-3 py-1 rounded-full">
                Chi phí: {selectedServiceCard.priceRange}
              </span>
              <h3 className="mt-2 text-lg font-extrabold text-zinc-900">
                {selectedServiceCard.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {selectedServiceCard.description}
              </p>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceCard(null)}
                  className="text-xs font-bold text-zinc-500 px-4 py-2"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedServiceCard(null);
                    setBookingDone(false);
                    setBookingModalOpen(true);
                  }}
                  className="bg-[#ef4444] text-white text-xs font-extrabold uppercase px-5 py-2.5 rounded-xs cursor-pointer"
                >
                  Đặt Hẹn Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-md max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingDone ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#ef4444] mx-auto" />
                <h3 className="text-lg font-extrabold text-zinc-900">
                  Đặt lịch hẹn thành công!
                </h3>
                <p className="text-xs text-zinc-600">
                  Bộ phận Cố vấn Dịch vụ của{" "}
                  <strong>{data.business.name}</strong> sẽ liên hệ xác nhận
                  ngay.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-extrabold text-zinc-900 uppercase">
                  Đặt Hẹn Dịch Vụ Chăm Sóc &amp; Sửa Chữa
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Hotline trực 24/7: <strong>{data.business.phone[0]}</strong>
                </p>
                <form onSubmit={handleBookingSubmit} className="mt-4 space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên khách hàng *"
                    className="w-full border border-zinc-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#ef4444]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full border border-zinc-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#ef4444]"
                  />
                  <input
                    type="text"
                    placeholder="Dòng xe & Hạng mục cần kiểm tra"
                    className="w-full border border-zinc-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#ef4444]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white text-xs font-extrabold uppercase py-3 cursor-pointer"
                  >
                    Xác Nhận Đặt Hẹn
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
