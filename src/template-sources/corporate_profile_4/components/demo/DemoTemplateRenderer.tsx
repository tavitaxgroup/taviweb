"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  Truck,
  Plane,
  Ship,
  TrainFront,
  Cpu,
  Package,
  Check,
  DollarSign,
  Headphones,
  Globe,
  ShieldCheck,
  ArrowRight,
  Plus,
  Minus,
  Star,
  Quote,
  Play,
  Calendar,
  User,
  Send
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile4DefaultData,
  type CorporateProfile4Data
} from "@/template-sources/corporate_profile_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: CorporateProfile4Data = adaptClonedTemplateData(
    corporateProfile4DefaultData,
    incomingData
  );

  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const [selectedTransportMode, setSelectedTransportMode] = useState<string>("tm-1");

  const renderTransportIcon = (icon: string, className = "w-7 h-7 text-[#2897FF]") => {
    switch (icon) {
      case "truck":
        return <Truck className={className} />;
      case "plane":
        return <Plane className={className} />;
      case "ship":
        return <Ship className={className} />;
      case "train":
        return <TrainFront className={className} />;
      case "drone":
        return <Cpu className={className} />;
      default:
        return <Package className={className} />;
    }
  };

  const renderWhyIcon = (icon: string) => {
    switch (icon) {
      case "dollar":
        return <DollarSign className="w-7 h-7 text-[#2897FF]" />;
      case "truck":
        return <Truck className="w-7 h-7 text-[#2897FF]" />;
      case "headset":
        return <Headphones className="w-7 h-7 text-[#2897FF]" />;
      case "globe":
        return <Globe className="w-7 h-7 text-[#2897FF]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#2897FF]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2897FF] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-slate-50 border-b border-slate-200 text-[11px] text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <span>{data.hero.eyebrow}</span>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 font-bold text-slate-500">
              <span>f</span>
              <span>in</span>
              <span>yt</span>
            </div>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="pl-3 pr-7 py-1 rounded border border-slate-200 bg-white text-[11px] focus:outline-none focus:border-[#2897FF]"
              />
              <Search className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE CORPORATE INFO BAR */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2897FF] to-[#12314E] flex items-center justify-center text-white shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight uppercase text-[#12314E] block leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2897FF]">
                Global Supply Chain
              </span>
            </div>
          </a>

          {/* 4 Contact Info Blocks */}
          <div className="hidden lg:grid grid-cols-4 gap-6 text-xs">
            <div className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-[#F0544F] shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Hotline</span>
                <strong className="text-slate-800">{data.business.phone[0]}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-[#F0544F] shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Email</span>
                <strong className="text-slate-800">{data.business.email[0]}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#F0544F] shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">Địa Chỉ</span>
                <strong className="text-slate-800 line-clamp-1">
                  {data.business.address}
                </strong>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#F0544F] shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block">
                  Giờ Làm Việc
                </span>
                <strong className="text-slate-800">
                  {data.business.workingHours}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DEEP NAVY MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#12314E] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <nav className="flex items-center gap-6 sm:gap-8 text-xs font-bold">
            <a href="#trang-chu" className="text-[#2897FF]">
              Trang Chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#2897FF] transition">
              Giới Thiệu
            </a>
            <a href="#dich-vu" className="hover:text-[#2897FF] transition">
              Dịch Vụ
            </a>
            <a href="#doi-ngu" className="hover:text-[#2897FF] transition">
              Đội Ngũ
            </a>
            <a href="#tin-tuc" className="hover:text-[#2897FF] transition">
              Tin Tức
            </a>
            <a href="#lien-he" className="hover:text-[#2897FF] transition">
              Liên Hệ
            </a>
          </nav>

          <a
            href={`tel:${data.business.phone[0]}`}
            className="hidden sm:flex items-center gap-2.5 text-xs"
          >
            <span className="w-8 h-8 rounded-full bg-[#2897FF]/20 border border-[#2897FF] flex items-center justify-center text-[#2897FF]">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <div className="leading-tight">
              <span className="text-[10px] text-slate-300 block">Hotline</span>
              <strong className="text-sm font-black text-white">
                {data.business.phone[0]}
              </strong>
            </div>
          </a>
        </div>
      </header>

      {/* HERO BANNER + OVERLAPPING 6-ICON TRANSPORT BAR */}
      <section id="trang-chu" className="relative">
        <div className="relative h-[420px] sm:h-[520px] overflow-hidden bg-[#0F2942]">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2942]/85 via-[#0F2942]/45 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10 pb-12">
            <div className="max-w-xl text-white">
              <span className="inline-block px-3 py-1 rounded bg-[#2897FF] text-white text-[11px] font-bold uppercase tracking-wider mb-3">
                {data.business.name}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                {data.hero.subtitle}
              </p>
              <a
                href={data.hero.ctaLink || "#gia-co-dinh"}
                className="inline-flex items-center gap-2 bg-[#2897FF] hover:bg-sky-600 text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded transition shadow-lg"
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Overlapping 6 Transport Mode Icons Strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-slate-100 overflow-hidden">
            {data.transportModes.map((mode) => {
              const isSelected = selectedTransportMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedTransportMode(mode.id)}
                  className={`py-5 px-4 flex flex-col items-center justify-center text-center transition cursor-pointer ${
                    isSelected ? "bg-sky-50/70" : "bg-white hover:bg-slate-50"
                  }`}
                >
                  {renderTransportIcon(mode.icon, "w-7 h-7 text-[#2897FF] mb-2")}
                  <span className="text-xs font-bold text-slate-700">
                    {mode.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT US ("VỀ CHÚNG TÔI — VẬN CHUYỂN NHANH CHÓNG") */}
      <section id="gioi-thieu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 3-Photo Logistics Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-5 space-y-4">
              <img
                src={data.aboutSection.gallery[0]}
                alt="Cảng container"
                className="w-full h-36 object-cover rounded-lg shadow-md"
              />
              <img
                src={data.aboutSection.gallery[2]}
                alt="Vận tải biển"
                className="w-full h-44 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-7">
              <img
                src={data.aboutSection.gallery[1]}
                alt="Chuyên viên giao nhận"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right About Text & Checklist */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              {data.aboutSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#12314E] mb-4">
              {data.aboutSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {data.aboutSection.description}
            </p>

            {/* 2x3 Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {data.aboutSection.checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                >
                  <Check className="w-4 h-4 text-[#2897FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Founder Block */}
            <div className="flex items-center gap-6 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={data.aboutSection.founderAvatar}
                  alt={data.aboutSection.founderName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-[#12314E]">
                    {data.aboutSection.founderName}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    {data.aboutSection.founderRole}
                  </span>
                </div>
              </div>

              {/* Stylized Signature SVG */}
              <svg
                className="w-28 h-10 text-slate-400 hidden sm:block"
                viewBox="0 0 140 45"
                fill="none"
              >
                <path
                  d="M10 32 C25 10, 35 38, 50 18 C62 5, 68 35, 85 22 C100 12, 115 28, 132 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE FREIGHT SOLUTIONS ("CHÚNG TÔI CUNG CẤP GIẢI PHÁP TỐT NHẤT") */}
      <section id="dich-vu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-slate-400 block mb-1">
            Dịch Vụ
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#12314E]">
            Chúng Tôi Cung Cấp Giải Pháp Tốt Nhất
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {data.freightSolutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white border border-slate-200/90 rounded-xl p-7 hover:border-[#2897FF] hover:shadow-lg transition"
            >
              <div className="mb-5">
                {renderTransportIcon(sol.icon, "w-12 h-12 text-[#2897FF]")}
              </div>
              <h3 className="text-lg font-extrabold text-[#12314E] mb-2">
                {sol.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-5">
                {sol.description}
              </p>
              <ul className="space-y-2">
                {sol.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-700"
                  >
                    <Check className="w-3.5 h-3.5 text-[#2897FF] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FULL-WIDTH DARK AERIAL HIGHWAY PARALLAX BANNER */}
      <section className="relative py-24 my-10 overflow-hidden bg-[#0F2942] text-white text-center">
        <img
          src={data.parallaxBanner.backgroundImage}
          alt={data.parallaxBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-[#2897FF]" />
            <span className="text-lg font-black uppercase tracking-wider">
              {data.business.name}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black leading-tight mb-7">
            {data.parallaxBanner.title}
          </h2>
          <a
            href="#gia-co-dinh"
            className="inline-block bg-[#2897FF] hover:bg-sky-600 text-white text-xs font-extrabold uppercase tracking-wider px-7 py-3 rounded transition shadow-lg"
          >
            {data.parallaxBanner.ctaText}
          </a>
        </div>
      </section>

      {/* SECTION 5: EXPERIENCE & STATS ("CUNG CẤP CÁC DỊCH VỤ CHẤT LƯỢNG") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              {data.experienceSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#12314E] leading-tight mb-4">
              {data.experienceSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
              {data.experienceSection.description}
            </p>

            <div className="flex items-center gap-12">
              {data.experienceSection.stats.map((st) => (
                <div key={st.id}>
                  <div
                    className={`text-4xl sm:text-5xl font-black leading-none mb-1.5 ${
                      st.color === "coral" ? "text-[#F0544F]" : "text-[#2897FF]"
                    }`}
                  >
                    {st.number}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src={data.experienceSection.image}
              alt={data.experienceSection.title}
              className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US ("TẠI SAO CHỌN CHÚNG TÔI?") */}
      <section className="bg-[#F5F8FA] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cell 1: Title Block */}
            <div className="p-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-slate-400 block mb-1">
                Lý Do
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#12314E] leading-tight">
                Tại Sao Chọn Chúng Tôi?
              </h2>
            </div>

            {/* Remaining 5 Feature Cards */}
            {data.whyChooseUs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-xs border border-slate-100 hover:shadow-md transition"
              >
                <div className="mb-4">{renderWhyIcon(item.icon)}</div>
                <h3 className="text-sm font-extrabold text-[#12314E] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FIXED PRICING ("GIÁ CỐ ĐỊNH") */}
      <section id="gia-co-dinh" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-slate-400 block mb-1">
            Giá Thành
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#12314E]">
            Giá Cố Định
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {data.fixedPricing.map((plan) => {
            const isFeatured = Boolean(plan.featured);
            return (
              <div
                key={plan.id}
                className={`rounded-xl p-7 flex flex-col justify-between transition ${
                  isFeatured
                    ? "bg-[#12314E] text-white shadow-2xl scale-[1.02]"
                    : "bg-[#F8FAFC] text-slate-900 border border-slate-200/80"
                }`}
              >
                <div>
                  <div className="text-center pb-6 border-b border-current/10 mb-6">
                    <h3
                      className={`text-base font-bold mb-2 ${
                        isFeatured ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      {plan.mode}
                    </h3>
                    <div
                      className={`text-3xl font-black ${
                        isFeatured ? "text-[#F0544F]" : "text-[#12314E]"
                      }`}
                    >
                      {plan.price}
                    </div>
                    <span
                      className={`text-xs ${
                        isFeatured ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? "text-[#2897FF]" : "text-slate-700"
                          }`}
                        />
                        <span className={isFeatured ? "text-slate-200" : "text-slate-600"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href="#lien-he"
                    className={`inline-flex items-center gap-2 text-xs font-extrabold px-5 py-2.5 rounded transition ${
                      plan.buttonStyle === "coral"
                        ? "bg-[#F0544F] hover:bg-red-600 text-white"
                        : plan.buttonStyle === "cyan"
                        ? "bg-[#2897FF] hover:bg-sky-600 text-white"
                        : "bg-[#12314E] hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>Liên Hệ Ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 8: OUR TEAM ("ĐỘI NGŨ CỦA CHÚNG TÔI") */}
      <section id="doi-ngu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-slate-400 block mb-1">
            Đội Ngũ
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#12314E]">
            Đội Ngũ Của Chúng Tôi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.team || []).map((member) => (
            <div
              key={member.id}
              className="relative rounded-xl overflow-hidden group shadow-md h-80"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="w-7 h-7 rounded bg-white text-[#12314E] flex items-center justify-center absolute top-3 right-3 shadow">
                <Plus className="w-4 h-4" />
              </span>

              <div className="absolute bottom-3 left-3 right-10">
                <span className="inline-block px-2.5 py-0.5 bg-[#2897FF] text-white text-[10px] font-bold">
                  {member.position}
                </span>
                <div className="bg-white text-[#12314E] font-black text-sm px-3 py-2 shadow">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS ("ĐÁNH GIÁ CỦA KHÁCH HÀNG") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              Phản Hồi
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#12314E] leading-tight mb-3">
              Đánh Giá Của Khách Hàng
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Chúng tôi luôn luôn ghi nhận những đóng góp của khách hàng và cải thiện dịch vụ trong suốt quá trình vận hành là kim chỉ nam của chúng tôi.
            </p>
            <a
              href="#lien-he"
              className="inline-block bg-[#2897FF] hover:bg-sky-600 text-white text-xs font-extrabold px-6 py-2.5 rounded transition"
            >
              Xem Thêm
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(data.testimonials || []).map((rev) => (
              <div key={rev.id} className="text-center px-4">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <span className="w-6 h-6 rounded-full bg-[#2897FF] text-white flex items-center justify-center absolute -bottom-1 -right-1">
                    <Quote className="w-3 h-3" />
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[#12314E]">
                  {rev.author}
                </h4>
                <span className="text-[11px] text-slate-400 block mb-3">
                  {rev.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {rev.content}
                </p>
                <div className="flex items-center justify-center gap-1 text-[#F0544F]">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F0544F]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ & VIDEO SHOWCASE ("CÂU HỎI MÀ BẠN QUAN TÂM") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Accordion */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              Hỏi Đáp
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12314E] mb-6">
              Câu Hỏi Mà Bạn Quan Tâm
            </h2>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.id} className="py-4">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full flex items-start justify-between gap-4 text-left text-xs font-extrabold text-[#12314E] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#2897FF] shrink-0 mt-0.5" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Engineer & Truck Video Image */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-lg h-80 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
              alt="Quản lý đội xe vận tải"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <a
                href="#lien-he"
                className="w-16 h-16 rounded-full bg-white text-[#2897FF] flex items-center justify-center shadow-2xl hover:scale-110 transition"
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: LATEST NEWS ("TIN TỨC MỚI NHẤT") */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-8">
          <span className="text-xs font-bold text-slate-400 block mb-1">
            Tin Tức
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#12314E]">
            Tin Tức Mới Nhất
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute bottom-0 left-4 px-3 py-1 bg-[#F0544F] text-white text-[10px] font-bold">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-extrabold text-[#12314E] group-hover:text-[#2897FF] transition leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    Bởi <strong className="text-slate-700">Monamedia</strong>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 12: BRANCHES & MAP ("CHI NHÁNH — LIÊN HỆ VỚI CHÚNG TÔI") */}
      <section id="lien-he" className="pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-slate-400 block mb-1">
              Chi Nhánh
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#12314E]">
              Liên Hệ Với Chúng Tôi
            </h2>
          </div>

          {/* 3 Branch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 -mb-12">
            {data.branches.map((br) => (
              <div
                key={br.id}
                className="bg-white rounded-xl p-6 shadow-xl border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-sky-50 text-[#2897FF] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-extrabold text-[#12314E] mb-2">
                  {br.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {br.address}
                </p>
                <div className="text-xs font-bold text-slate-700 mb-1">
                  {br.phone}
                </div>
                <div className="text-xs text-[#2897FF]">{br.email}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Width Map Strip */}
        <div className="h-72 bg-sky-100 relative overflow-hidden border-t border-slate-200 flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "radial-gradient(#2897FF 1.2px, transparent 1.2px), radial-gradient(#12314E 1px, #e0f2fe 1px)",
              backgroundSize: "28px 28px"
            }}
          />
          <div className="relative z-10 bg-white px-5 py-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 mt-10">
            <MapPin className="w-5 h-5 text-[#F0544F]" />
            <div className="text-xs">
              <strong className="text-[#12314E] block">{data.business.name}</strong>
              <span className="text-slate-500">{data.business.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: DEEP NAVY FOOTER */}
      <footer className="bg-[#12314E] text-slate-300 pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Col 1: Liên Kết Nhanh */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Liên Kết Nhanh
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <a href="#gioi-thieu" className="hover:text-white">Giới Thiệu</a>
                <a href="#lien-he" className="hover:text-white">Địa Chỉ</a>
                <a href="#dich-vu" className="hover:text-white">Dịch Vụ</a>
                <a href="#dich-vu" className="hover:text-white">Vận Chuyển</a>
                <a href="#doi-ngu" className="hover:text-white">Đội Ngũ</a>
                <a href="#lien-he" className="hover:text-white">Tư Vấn</a>
                <a href="#lien-he" className="hover:text-white">Liên Hệ</a>
                <a href="#tin-tuc" className="hover:text-white">Câu Hỏi</a>
              </div>
            </div>

            {/* Col 2: Dịch Vụ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Dịch Vụ
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#dich-vu" className="hover:text-white">Vận Chuyển Đường Bộ</a></li>
                <li><a href="#dich-vu" className="hover:text-white">Vận Chuyển Hàng Không</a></li>
                <li><a href="#dich-vu" className="hover:text-white">Vận Chuyển Đường Sắt</a></li>
                <li><a href="#dich-vu" className="hover:text-white">Vận Chuyển Đường Biển</a></li>
              </ul>
            </div>

            {/* Col 3: Thư Viện (6 Thumbnails) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-4">
                Thư Viện
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {data.footerGallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-12 object-cover rounded"
                  />
                ))}
              </div>
            </div>

            {/* Col 4: Nhận Thông Tin Khuyến Mãi */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                Nhận Thông Tin Khuyến Mãi
              </h4>
              <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                Để thông tin của bạn để nhận các ưu đãi hấp dẫn từ chúng tôi
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-2"
              >
                <input
                  type="email"
                  placeholder="Nhập Địa Chỉ Email"
                  className="w-full px-3 py-2 rounded bg-white text-slate-900 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded bg-[#2897FF] hover:bg-sky-600 text-white text-xs font-extrabold uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>ĐĂNG KÝ NGAY</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar with Coral Brand Box */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="bg-[#F0544F] text-white font-black uppercase text-sm px-7 py-3.5">
              {data.business.name}
            </div>
            <p className="text-xs text-slate-400">
              © Thiết kế website và lập trình bởi {data.business.name}
            </p>
            <div className="flex items-center gap-3 text-xs text-white pb-3 sm:pb-0">
              <span>f</span>
              <span>yt</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
